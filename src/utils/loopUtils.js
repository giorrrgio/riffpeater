export function parseVideoId(source) {
  if (!source) {
    return "";
  }
  const match = source.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?(?:.*&)?v=|youtu\.be\/)([a-zA-Z0-9_-]{5,})/);
  return (match && match[1]) || source.trim();
}

export function parseTimeString(value) {
  if (value == null) {
    return null;
  }
  const str = String(value).trim();
  if (!str) {
    return null;
  }
  if (!str.includes(":")) {
    const num = parseFloat(str);
    return Number.isFinite(num) ? num : null;
  }
  const parts = str.split(":").map((part) => parseFloat(part.trim()));
  let seconds = 0;
  let multiplier = 1;
  for (let i = parts.length - 1; i >= 0; i -= 1) {
    const part = parts[i];
    if (!Number.isFinite(part)) {
      return null;
    }
    seconds += part * multiplier;
    multiplier *= 60;
  }
  return seconds;
}

export function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) {
    return "00:00:00";
  }
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const seconds = Math.floor(value % 60);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function normalizeImportedSessions(data) {
  if (!Array.isArray(data)) {
    return [];
  }
  return data
    .map((session) => {
      const loops = Array.isArray(session.loops)
        ? session.loops
            .map((loop) => {
              const startValue = Math.max(Number(loop.loopStart) || 0, 0);
              const endValue = Math.max(Number(loop.loopEnd) || 0, startValue + 0.1);
              return {
                id: loop.id || `${Date.now()}-${Math.random()}`,
                title: loop.title || "Imported loop",
                note: loop.note || "",
                loopStart: startValue,
                loopEnd: endValue,
                speed: Number(loop.speed) || 1,
                savedAt: loop.savedAt || Date.now(),
              };
            })
            .slice(0, 12)
        : [];
      const sessionLoopStart = Number(session.loopStart) || 0;
      const sessionLoopEnd = Math.max(Number(session.loopEnd) || 0, sessionLoopStart + 0.1);
      return {
        id: session.id || `${Date.now()}-${session.videoId || Math.random()}`,
        videoId: session.videoId || "s7JLf6P0zcM",
        videoTitle: session.videoTitle || session.videoId || "s7JLf6P0zcM",
        thumbnailUrl: session.thumbnailUrl || (session.videoId ? `https://i.ytimg.com/vi/${session.videoId}/hqdefault.jpg` : null),
        loopStart: sessionLoopStart,
        loopEnd: sessionLoopEnd,
        speed: Number(session.speed) || 1,
        loops,
        lastLoopId: session.lastLoopId || loops[0]?.id || null,
        savedAt: session.savedAt || Date.now(),
      };
    })
    .sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
}
