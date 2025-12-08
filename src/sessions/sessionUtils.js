const MAX_SESSIONS = 10;
const MAX_LOOPS_PER_SESSION = 12;

const ensureListSize = (list) => list.slice(0, MAX_SESSIONS);

export function ensureCurrentSessionState({
  currentVideoId,
  loopStart,
  loopEnd,
  speed,
  sessions,
  getCurrentVideoTitle,
  thumbnailUrl,
}) {
  if (!currentVideoId) {
    return null;
  }
  const normalizedEnd = Math.max(loopEnd, loopStart + 0.1);
  const existing = sessions.find((item) => item.videoId === currentVideoId);
  const sessionPayload = {
    id: existing ? existing.id : `${Date.now()}-${currentVideoId}`,
    videoId: currentVideoId,
    videoTitle: getCurrentVideoTitle() || existing?.videoTitle || currentVideoId,
    loopStart,
    loopEnd: normalizedEnd,
    speed,
    loops: existing?.loops || [],
    lastLoopId: existing?.lastLoopId || null,
    thumbnailUrl: thumbnailUrl || existing?.thumbnailUrl || null,
    savedAt: Date.now(),
  };
  const updatedSessions = ensureListSize([
    sessionPayload,
    ...sessions.filter((item) => item.id !== sessionPayload.id),
  ]);
  return { sessionPayload, updatedSessions };
}

export function addLoopToSessionList({
  session,
  loopStart,
  loopEnd,
  speed,
  loopTitle,
  loopNote,
  sessions,
}) {
  const normalizedEnd = Math.max(loopEnd, loopStart + 0.1);
  const loopEntry = {
    id: `${Date.now()}-${session.id}`,
    title: loopTitle.trim() || `Loop ${session.loops.length + 1}`,
    note: loopNote.trim(),
    loopStart,
    loopEnd: normalizedEnd,
    speed,
    savedAt: Date.now(),
  };
  const updatedSession = {
    ...session,
    loops: [loopEntry, ...session.loops].slice(0, MAX_LOOPS_PER_SESSION),
    lastLoopId: loopEntry.id,
    savedAt: Date.now(),
  };
  const updatedSessions = ensureListSize([
    updatedSession,
    ...sessions.filter((item) => item.id !== updatedSession.id),
  ]);
  return { updatedSession, updatedSessions, loopEntry };
}

export function moveSessionToFront(sessions, session) {
  return ensureListSize([session, ...sessions.filter((item) => item.id !== session.id)]);
}

export function removeSessionById(sessions, sessionId) {
  return sessions.filter((session) => session.id !== sessionId);
}

export function removeLoopFromSessions({ sessions, currentSessionId, loopId }) {
  return sessions.map((session) => {
    if (session.id !== currentSessionId) {
      return session;
    }
    const filtered = session.loops.filter((loop) => loop.id !== loopId);
    return {
      ...session,
      loops: filtered,
      lastLoopId:
        session.lastLoopId === loopId ? filtered[0]?.id || null : session.lastLoopId,
    };
  });
}
