import { useCallback, useEffect, useState } from "react";

export function useVideoPlayer({
  playerRef,
  audioRef,
  audioUrlRef,
  initialVideoId,
  updatePlayerSpeed,
  speedRef,
}) {
  const [currentVideoId, setCurrentVideoId] = useState(initialVideoId);
  const [playerKind, setPlayerKind] = useState("youtube");
  const [apiReady, setApiReady] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);
  const [audioFileName, setAudioFileName] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }
    if (window.YT && typeof window.YT.Player === "function") {
      setApiReady(true);
      return undefined;
    }
    const scriptExists = Boolean(document.getElementById("youtube-api-script"));
    if (!scriptExists) {
      const tag = document.createElement("script");
      tag.id = "youtube-api-script";
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.body.appendChild(tag);
    }
    const handleReady = () => {
      setApiReady(true);
    };
    window.onYouTubeIframeAPIReady = handleReady;
    return () => {
      if (window.onYouTubeIframeAPIReady === handleReady) {
        window.onYouTubeIframeAPIReady = undefined;
      }
    };
  }, []);

  const handlePlayerReady = useCallback(() => {
    setPlayerReady(true);
    updatePlayerSpeed(speedRef.current);
  }, [speedRef, updatePlayerSpeed]);

  const handlePlayerStateChange = useCallback(() => {
    // placeholder for future state tracking
  }, []);

  useEffect(() => {
    if (playerKind !== "youtube") {
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        playerRef.current.destroy();
      }
      playerRef.current = null;
      setPlayerReady(false);
      return undefined;
    }
    if (!apiReady || !currentVideoId) {
      setPlayerReady(false);
      return undefined;
    }
    if (!window.YT || typeof window.YT.Player !== "function") {
      return undefined;
    }
    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
    }
    setPlayerReady(false);
    playerRef.current = new window.YT.Player("player", {
      videoId: currentVideoId,
      playerVars: {
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onReady: () => {
          handlePlayerReady();
        },
        onStateChange: handlePlayerStateChange,
      },
    });
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [playerKind, apiReady, currentVideoId, handlePlayerReady, handlePlayerStateChange]);

  useEffect(() => {
    if (playerKind !== "audio" || !audioSrc) {
      return undefined;
    }
    const audio = audioRef.current;
    if (!audio) {
      return undefined;
    }
    setPlayerReady(false);
    const audioPlayer = {
      getCurrentTime: () => audio.currentTime,
      setPlaybackRate: (value) => {
        audio.playbackRate = value;
      },
      getPlaybackRate: () => audio.playbackRate,
      seekTo: (value) => {
        audio.currentTime = value;
      },
      play: () => {
        audio.play();
      },
      pause: () => {
        audio.pause();
      },
    };
    playerRef.current = audioPlayer;
    const handleLoaded = () => {
      handlePlayerReady();
    };
    audio.addEventListener("loadedmetadata", handleLoaded);
    return () => {
      audio.removeEventListener("loadedmetadata", handleLoaded);
      if (playerRef.current === audioPlayer) {
        playerRef.current = null;
      }
    };
  }, [playerKind, audioSrc, handlePlayerReady]);

  const clearAudioSource = useCallback(() => {
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }
    setAudioSrc(null);
    setAudioFileName("");
  }, []);

  const handleAudioUpload = useCallback(
    (file) => {
      if (!file) {
        return;
      }
      clearAudioSource();
      const url = URL.createObjectURL(file);
      audioUrlRef.current = url;
      setAudioSrc(url);
      setAudioFileName(file.name);
      setPlayerKind("audio");
      setCurrentVideoId(`audio:${file.name}:${Date.now()}`);
    },
    [clearAudioSource]
  );

  const togglePlayback = useCallback(() => {
    if (playerKind === "audio") {
      const audio = audioRef.current;
      if (!audio) {
        return;
      }
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
      return;
    }
    const player = playerRef.current;
    if (!player || typeof window === "undefined") {
      return;
    }
    const playerState = typeof player.getPlayerState === "function" ? player.getPlayerState() : null;
    const ytState = window.YT?.PlayerState;
    if (ytState && playerState != null) {
      if (playerState === ytState.PLAYING) {
        if (typeof player.pauseVideo === "function") {
          player.pauseVideo();
        } else if (typeof player.pause === "function") {
          player.pause();
        }
      } else {
        if (typeof player.playVideo === "function") {
          player.playVideo();
        } else if (typeof player.play === "function") {
          player.play();
        }
      }
      return;
    }
    if (typeof player.getPlayerState !== "function") {
      if (typeof player.pause === "function" && typeof player.play === "function") {
        if (player.paused) {
          player.play();
        } else {
          player.pause();
        }
      }
    }
  }, [playerKind]);

  return {
    currentVideoId,
    setCurrentVideoId,
    playerKind,
    setPlayerKind,
    playerReady,
    apiReady,
    audioSrc,
    audioFileName,
    playerRef,
    audioRef,
    clearAudioSource,
    handleAudioUpload,
    togglePlayback,
  };
}
