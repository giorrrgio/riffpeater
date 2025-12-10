import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import VideoPanel from "./components/VideoPanel";
import SpeedAutomationPanel from "./components/SpeedAutomationPanel";
import SessionsPanel from "./components/SessionsPanel";
import { normalizeImportedSessions, parseVideoId } from "./utils/loopUtils";
import { useLooper } from "./looper/useLooper";
import sampleSessionsData from "../sample-session.json";
import {
  exportSessionsToFile,
  importSessionsFromFile,
  loadLastStateFromStorage,
  loadSessionsFromStorage,
  saveLastStateToStorage,
  saveSessionsToStorage,
} from "./storage/sessionStorage";
import {
  addLoopToSessionList,
  ensureCurrentSessionState,
  moveSessionToFront,
  removeLoopFromSessions,
  removeSessionById,
} from "./sessions/sessionUtils";
import { useVideoPlayer } from "./videoPlayer/useVideoPlayer";

const DEFAULT_VIDEO_ID = "X8bcsMif73M";

export default function App() {
  const [videoIdInput, setVideoIdInput] = useState(DEFAULT_VIDEO_ID);
  const [speed, setSpeed] = useState(1);
  const [sessions, setSessions] = useState([]);
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const [loopTitle, setLoopTitle] = useState("");
  const [loopNote, setLoopNote] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [showQuickstart, setShowQuickstart] = useState(false);
  const mp3FeatureEnabled = import.meta.env.VITE_ENABLE_MP3 === "true";

  const playerRef = useRef(null);
  const audioRef = useRef(null);
  const audioUrlRef = useRef(null);
  const pendingLoopRef = useRef(null);
  const fileInputRef = useRef(null);
  const sessionsRef = useRef(sessions);
  const currentSessionIdRef = useRef(currentSessionId);
  const speedRef = useRef(speed);
  const playerReadyRef = useRef(false);

  const currentSession = useMemo(
    () => sessions.find((session) => session.id === currentSessionId) || null,
    [sessions, currentSessionId]
  );

  useEffect(() => {
    sessionsRef.current = sessions;
  }, [sessions]);

  useEffect(() => {
    currentSessionIdRef.current = currentSessionId;
  }, [currentSessionId]);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const getCurrentVideoTitle = useCallback(() => {
    const player = playerRef.current;
    if (!player || typeof player.getVideoData !== "function") {
      return null;
    }
    const data = player.getVideoData();
    return data?.title || null;
  }, []);

  const updatePlayerSpeed = useCallback(
    (value) => {
      setSpeed(value);
      speedRef.current = value;
      const player = playerRef.current;
      if (player && typeof player.setPlaybackRate === "function") {
        player.setPlaybackRate(value);
      }
    },
    []
  );

  const {
    currentVideoId,
    setCurrentVideoId,
    playerKind,
    setPlayerKind,
    playerReady,
    audioSrc,
    audioFileName,
    clearAudioSource,
    handleAudioUpload: handleVideoPlayerAudioUpload,
    togglePlayback,
  } = useVideoPlayer({
    playerRef,
    audioRef,
    audioUrlRef,
    initialVideoId: DEFAULT_VIDEO_ID,
    updatePlayerSpeed,
    speedRef,
  });

  const getCurrentVideoThumbnail = useCallback(() => {
    const player = playerRef.current;
    const data = player && typeof player.getVideoData === "function" ? player.getVideoData() : null;
    const videoId = data?.video_id || currentVideoId;
    if (!videoId || typeof videoId !== "string" || videoId.startsWith("audio:")) {
      return null;
    }
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  }, [currentVideoId]);

  const {
    loopStart,
    loopEnd,
    loopStartInput,
    loopEndInput,
    loopEnabled,
    loopStatus,
    automationEnabled,
    automationStatus,
    loopsBefore,
    automationDelta,
    maxSpeed,
    resetLoopState,
    applyLoopRange,
    handleLoopStartChange,
    handleLoopEndChange,
    handleSetStartCurrent,
    handleSetEndCurrent,
    handleToggleLoop,
    handleClearLoop,
    handleLoopsBeforeChange,
    handleAutomationDeltaChange,
    handleMaxSpeedChange,
    handleAutomationStart,
    handleAutomationStop,
    setCustomLoopMessage,
    enableLoop,
  } = useLooper({ playerRef, playerReady, updatePlayerSpeed, speedRef });

  useEffect(() => {
    playerReadyRef.current = playerReady;
  }, [playerReady]);

  const hydratingEffect = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }
    const storedSessions = loadSessionsFromStorage();
    if (storedSessions.length) {
      setSessions(storedSessions);
    }
    const storedLastState = loadLastStateFromStorage();
    if (storedLastState) {
      if (storedLastState.videoId) {
        setCurrentVideoId(storedLastState.videoId);
        setVideoIdInput(storedLastState.videoId);
      }
      const loadedStart = Number(storedLastState.loopStart) || 0;
      const loadedEnd = Math.max(
        loadedStart + 0.1,
        Number(storedLastState.loopEnd) || loadedStart
      );
      applyLoopRange(loadedStart, loadedEnd);
      setSpeed(Number(storedLastState.speed) || 1);
      setCurrentSessionId(storedLastState.sessionId || null);
      pendingLoopRef.current = storedLastState.loopId || null;
    }
    setHydrated(true);
  }, [applyLoopRange]);

  useEffect(() => {
    hydratingEffect();
  }, [hydratingEffect]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    saveSessionsToStorage(sessions);
  }, [hydrated, sessions]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    const payload = {
      videoId: currentVideoId,
      loopStart,
      loopEnd: Math.max(loopEnd, loopStart + 0.1),
      speed,
      sessionId: currentSessionId,
      loopId: currentSession?.lastLoopId || null,
    };
    saveLastStateToStorage(payload);
  }, [hydrated, currentVideoId, loopStart, loopEnd, speed, currentSessionId, currentSession]);

  const execLoadLoop = useCallback(
    (loopId) => {
      const currentId = currentSessionIdRef.current;
      if (!currentId) {
        return;
      }
      const session = sessionsRef.current.find((item) => item.id === currentId);
      if (!session) {
        return;
      }
      const loop = session.loops.find((item) => item.id === loopId);
      if (!loop) {
        return;
      }
      applyLoopRange(loop.loopStart, loop.loopEnd);
      setCustomLoopMessage(null);
      enableLoop();
      updatePlayerSpeed(loop.speed || 1);
      const player = playerRef.current;
      const canSeek =
        playerReadyRef.current && player && typeof player.seekTo === "function";
      if (canSeek) {
        player.seekTo(loop.loopStart, true);
      } else {
        pendingLoopRef.current = loop.id;
      }
      const updatedSession = {
        ...session,
        lastLoopId: loop.id,
        savedAt: Date.now(),
      };
      setSessions((prev) => [updatedSession, ...prev.filter((item) => item.id !== session.id)]);
      setCurrentSessionId(updatedSession.id);
    },
    [applyLoopRange, enableLoop, setCustomLoopMessage, updatePlayerSpeed]
  );

  useEffect(() => {
    playerReadyRef.current = playerReady;
  }, [playerReady]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }
    const handleKeyDown = (event) => {
      const isSpace =
        event.code === "Space" ||
        event.key === " " ||
        event.key === "Spacebar" ||
        event.which === 32;
      if (!isSpace) {
        return;
      }
      const target = event.target;
      if (
        target instanceof Element &&
        (["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(target.tagName) || target.isContentEditable)
      ) {
        return;
      }
      event.preventDefault();
      togglePlayback();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [togglePlayback]);

  const ensureCurrentSession = useCallback(() => {
    const result = ensureCurrentSessionState({
      currentVideoId,
      loopStart,
      loopEnd,
      speed,
      sessions,
      getCurrentVideoTitle,
      thumbnailUrl: getCurrentVideoThumbnail(),
    });
    if (!result) {
      return null;
    }
    setSessions(result.updatedSessions);
    setCurrentSessionId(result.sessionPayload.id);
    return result;
  }, [currentVideoId, loopEnd, loopStart, sessions, speed, getCurrentVideoTitle]);

  const saveCurrentLoop = () => {
    if (!currentVideoId) {
      return;
    }
    const ensured = ensureCurrentSession();
    if (!ensured) {
      return;
    }
    const { sessionPayload, updatedSessions: baseSessions } = ensured;
    const { updatedSessions } = addLoopToSessionList({
      session: sessionPayload,
      loopStart,
      loopEnd,
      speed,
      loopTitle,
      loopNote,
      sessions: baseSessions,
    });
    setSessions(updatedSessions);
    setLoopTitle("");
    setLoopNote("");
    setCustomLoopMessage(null);
  };

  const saveCurrentSession = () => {
    ensureCurrentSession();
    setCustomLoopMessage("Session saved");
  };

  const handleReplaceLoop = useCallback(
    (loopId) => {
      if (!currentSessionId) {
        return;
      }
      setSessions((prev) =>
        prev.map((session) => {
          if (session.id !== currentSessionId) {
            return session;
          }
          const updatedLoops = session.loops.map((loop) =>
            loop.id === loopId
              ? {
                  ...loop,
                  title: loopTitle.trim() || loop.title,
                  loopStart,
                  loopEnd: Math.max(loopEnd, loopStart + 0.1),
                  speed,
                  note: loopNote.trim(),
                  savedAt: Date.now(),
                }
              : loop
          );
          return {
            ...session,
            loops: updatedLoops,
            lastLoopId: loopId,
            savedAt: Date.now(),
          };
        })
      );
    },
    [currentSessionId, loopStart, loopEnd, loopTitle, loopNote, speed]
  );

  const handleLoadVideo = () => {
    const parsed = parseVideoId(videoIdInput);
    if (!parsed) {
      return;
    }
    clearAudioSource();
    setPlayerKind("video");
    setCurrentVideoId(parsed);
    resetLoopState();
  };

  useEffect(() => {
    if (mp3FeatureEnabled) {
      return;
    }
    const hasAudioVideo = currentVideoId?.startsWith("audio:");
    if (!hasAudioVideo && playerKind !== "audio") {
      return;
    }
    clearAudioSource();
    setPlayerKind("video");
    setCurrentVideoId(DEFAULT_VIDEO_ID);
    setVideoIdInput(DEFAULT_VIDEO_ID);
  }, [mp3FeatureEnabled, currentVideoId, playerKind, clearAudioSource, setCurrentVideoId, setPlayerKind]);

  const handleAudioUpload = (file) => {
    handleVideoPlayerAudioUpload(file);
    resetLoopState();
  };

  const handleSpeedChange = (value) => {
    const parsed = Number(value) || 1;
    updatePlayerSpeed(parsed);
  };

  const applyImportedSessions = useCallback(
    (normalized) => {
      if (!normalized?.length) {
        return;
      }
      const [firstSession] = normalized;
      clearAudioSource();
      setPlayerKind("video");
      resetLoopState();
      setSessions(normalized);
      setCurrentSessionId(firstSession.id);
      setCurrentVideoId(firstSession.videoId);
      setVideoIdInput(firstSession.videoId);
      applyLoopRange(firstSession.loopStart, firstSession.loopEnd);
      setSpeed(firstSession.speed || 1);
      pendingLoopRef.current = firstSession.lastLoopId || null;
      setCustomLoopMessage(null);
    },
    [applyLoopRange, clearAudioSource, resetLoopState, setCustomLoopMessage, setPlayerKind]
  );

  const handleImportSampleSession = useCallback(() => {
    const normalized = normalizeImportedSessions(sampleSessionsData);
    if (!normalized.length) {
      return;
    }
    applyImportedSessions(normalized);
    setShowQuickstart(false);
  }, [applyImportedSessions]);

  const handleExportSessions = () => {
    exportSessionsToFile(sessions);
  };

  const resetImportInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleOpenImport = () => {
    resetImportInput();
    fileInputRef.current?.click();
  };

  const handleImportSessions = async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    try {
      const normalized = await importSessionsFromFile(file);
      applyImportedSessions(normalized);
      resetImportInput();
    } catch (error) {
      console.error("Failed to import sessions", error);
    }
  };

  const handleLoadSession = (sessionId) => {
    const session = sessions.find((item) => item.id === sessionId);
    if (!session) {
      return;
    }
    resetLoopState();
    setCurrentSessionId(session.id);
    setCurrentVideoId(session.videoId);
    setVideoIdInput(session.videoId);
    applyLoopRange(session.loopStart, session.loopEnd);
    setSpeed(session.speed || 1);
    pendingLoopRef.current = session.lastLoopId || null;
    setCustomLoopMessage(null);
    setSessions(moveSessionToFront(sessions, session));
  };

  const handleDeleteSession = (sessionId) => {
    setSessions((prev) => removeSessionById(prev, sessionId));
    if (currentSessionId === sessionId) {
      setCurrentSessionId(null);
      resetLoopState();
    }
  };

  const handleDeleteLoop = (loopId) => {
    setSessions((prev) => removeLoopFromSessions({ sessions: prev, currentSessionId, loopId }));
  };

  const handleLoopTitleChange = (value) => {
    setLoopTitle(value);
  };

  const handleLoopNoteChange = (value) => {
    setLoopNote(value);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">The RiffPeater</p>
          <h1>The RiffPeater</h1>
        </div>
        <p>Embed a video, set precision loops, and automate speed lifts without losing your place.</p>
        <button type="button" className="quickstart-link" onClick={() => setShowQuickstart(true)}>
          Quickstart
        </button>
      </header>

      <main className="app-grid">
          <VideoPanel
            videoIdInput={videoIdInput}
            onVideoIdChange={setVideoIdInput}
            onLoadVideo={handleLoadVideo}
            loopStartInput={loopStartInput}
            loopEndInput={loopEndInput}
            onLoopStartChange={handleLoopStartChange}
            onLoopEndChange={handleLoopEndChange}
            onSetStartCurrent={handleSetStartCurrent}
            onSetEndCurrent={handleSetEndCurrent}
            loopEnabled={loopEnabled}
            loopStatus={loopStatus}
            onToggleLoop={handleToggleLoop}
            onClearLoop={handleClearLoop}
            onUploadAudio={handleAudioUpload}
            audioFileName={audioFileName}
            mp3Enabled={mp3FeatureEnabled}
          />

        <SpeedAutomationPanel
          speed={speed}
          onSpeedChange={handleSpeedChange}
          loopsBefore={loopsBefore}
          automationDelta={automationDelta}
          maxSpeed={maxSpeed}
          onLoopsBeforeChange={handleLoopsBeforeChange}
          onAutomationDeltaChange={handleAutomationDeltaChange}
          onMaxSpeedChange={handleMaxSpeedChange}
          onAutomationStart={handleAutomationStart}
          onAutomationStop={handleAutomationStop}
          automationStatus={automationStatus}
        />

        {mp3FeatureEnabled && playerKind === "audio" && (
          <section className="panel audio-panel">
            <audio ref={audioRef} src={audioSrc || undefined} controls preload="metadata" />
            {audioFileName && <p className="panel-note">{audioFileName}</p>}
          </section>
        )}

        <SessionsPanel
          sessions={sessions}
          currentSession={currentSession}
          onLoadSession={handleLoadSession}
          onDeleteSession={handleDeleteSession}
          onExportSessions={handleExportSessions}
          onImportSessions={handleImportSessions}
          fileInputRef={fileInputRef}
          onOpenImport={handleOpenImport}
          loopTitle={loopTitle}
          loopNote={loopNote}
          onLoopTitleChange={handleLoopTitleChange}
          onLoopNoteChange={handleLoopNoteChange}
          onSaveLoop={saveCurrentLoop}
          onSaveSession={saveCurrentSession}
          onLoadLoop={execLoadLoop}
          onDeleteLoop={handleDeleteLoop}
          onReplaceLoop={handleReplaceLoop}
          currentLoopId={currentSession?.lastLoopId || null}
        />

      </main>

      {showQuickstart && (
        <div className="modal-backdrop" onClick={() => setShowQuickstart(false)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p className="eyebrow">Guided setup</p>
                <h3>Quickstart</h3>
              </div>
              <button type="button" className="secondary" onClick={() => setShowQuickstart(false)}>
                Close
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-lede">
                Sessions keep all loops for a song. Loops store start/end, speed, and an optional note so you can jump
                right back into practice.
              </p>
              <ul className="modal-list">
                <li>Create one session per song and add loops for solos, riffs, and tricky measures.</li>
                <li>Use the loop controls to set start/end, then save it to the current session.</li>
                <li>Automation lets you repeat a loop and nudge the tempo up after each pass.</li>
                <li>Your sessions stay in this browser, and you can export or import them anytime.</li>
              </ul>
            </div>
            <div className="modal-actions">
              <button type="button" className="primary" onClick={handleImportSampleSession}>
                Import sample-session.json
              </button>
              <button type="button" className="secondary" onClick={() => setShowQuickstart(false)}>
                Not now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
