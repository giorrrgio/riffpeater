import { formatTime } from "../utils/loopUtils";

export default function SessionsPanel({
  sessions,
  currentSession,
  currentLoopId,
  onLoadSession,
  onDeleteSession,
  onExportSessions,
  onImportSessions,
  fileInputRef,
  onOpenImport,
  loopTitle,
  loopNote,
  onLoopTitleChange,
  onLoopNoteChange,
  onSaveLoop,
  onSaveSession,
  onLoadLoop,
  onDeleteLoop,
  onReplaceLoop,
}) {
  return (
    <section className="panel saved-panel">
      <h2>Saved Sessions</h2>
      <p className="panel-note">Store multiple riff setups so you can jump back without re-entering values.</p>
      <div className="session-list">
        {sessions.length === 0 && <p className="panel-note">No sessions saved yet.</p>}
        {sessions.map((session) => {
          const start = formatTime(session.loopStart || 0);
          const end = formatTime(session.loopEnd || 0);
          const loopsCount = session.loops?.length || 0;
          return (
            <div className={`session-row${session.id === currentSession?.id ? " active" : ""}`} key={session.id}>
              {session.thumbnailUrl && (
                <div className="session-thumb">
                  <img src={session.thumbnailUrl} alt={`${session.videoTitle || "Lesson"} thumbnail`} />
                </div>
              )}
              <div className="session-info">
                <strong>{session.videoTitle || session.videoId}</strong>
                <div>
                  {start} → {end} • {(session.speed || 1).toFixed(2)}x • {loopsCount} loops
                </div>
              </div>
              <div className="session-row-actions">
                <button onClick={() => onLoadSession(session.id)}>Load</button>
                <button className="secondary" onClick={() => onDeleteSession(session.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="session-actions">
        <button className="secondary" onClick={onExportSessions}>
          Export JSON
        </button>
        <button className="secondary" onClick={onOpenImport}>
          Import JSON
        </button>
        <input ref={fileInputRef} type="file" accept="application/json" hidden onChange={onImportSessions} />
      </div>
      <div className="loop-save-row">
        <input
          placeholder="Loop title (e.g., Verse 1)"
          type="text"
          value={loopTitle}
          onChange={(event) => onLoopTitleChange(event.target.value)}
        />
        <input
          placeholder="Note (optional)"
          type="text"
          value={loopNote}
          onChange={(event) => onLoopNoteChange(event.target.value)}
        />
        <button className="primary" onClick={onSaveLoop}>
          Save loop
        </button>
      </div>
      <div className="loop-list">
        {currentSession?.loops?.length ? (
          currentSession.loops.map((loop) => (
              <div className={`loop-row${loop.id === currentLoopId ? " active" : ""}`} key={loop.id}>
              <div className="loop-info">
                <strong>{loop.title || "Unnamed loop"}</strong>
                <div>
                  {formatTime(loop.loopStart)} → {formatTime(loop.loopEnd)} • {(loop.speed || 1).toFixed(2)}x
                </div>
                {loop.note && <p className="loop-note">{loop.note}</p>}
              </div>
              <div className="loop-row-actions">
                <button onClick={() => onLoadLoop(loop.id)}>Load</button>
                {onReplaceLoop && (
                  <button className="secondary" onClick={() => onReplaceLoop(loop.id)}>
                    Replace
                  </button>
                )}
                <button className="secondary" onClick={() => onDeleteLoop(loop.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="panel-note">No loops saved yet.</p>
        )}
      </div>
      <button className="secondary" onClick={onSaveSession}>
        Save current session
      </button>
    </section>
  );
}
