import { formatTime } from "../utils/loopUtils";
import { useTranslation } from "../i18n/LocaleContext";

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
  const t = useTranslation();
  return (
    <section className="panel saved-panel">
      <div className="panel-heading">
        <h2>{t("sessions.heading")}</h2>
        <div
          className="info-trigger"
          role="button"
          tabIndex={0}
          aria-describedby="sessions-info-tooltip"
          aria-label={t("sessions.infoLabel")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="7" x2="12" y2="11" />
            <line x1="12" y1="15" x2="12" y2="18" />
          </svg>
          <p className="info-tooltip" role="tooltip" id="sessions-info-tooltip">
            {t("sessions.tooltip")}
          </p>
        </div>
      </div>
      <p className="panel-note">{t("sessions.note")}</p>
      <div className="session-list">
        {sessions.length === 0 && <p className="panel-note">{t("sessions.noSessions")}</p>}
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
                  {start} → {end} • {(session.speed || 1).toFixed(2)}x • {loopsCount} {t("common.loops")}
                </div>
              </div>
              <div className="session-row-actions">
                <button onClick={() => onLoadSession(session.id)}>{t("sessions.load")}</button>
                <button className="secondary" onClick={() => onDeleteSession(session.id)}>
                  {t("sessions.delete")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="loop-save-section">
        <div className="panel-heading panel-heading--dense">
          <h3>{t("sessions.newLoop")}</h3>
          <div
            className="info-trigger"
            role="button"
            tabIndex={0}
            aria-describedby="loop-info-tooltip"
            aria-label={t("sessions.loopInfoLabel")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="7" x2="12" y2="11" />
              <line x1="12" y1="15" x2="12" y2="18" />
            </svg>
            <p className="info-tooltip" role="tooltip" id="loop-info-tooltip">
              {t("sessions.loopTooltip")}
            </p>
          </div>
        </div>
        <p className="panel-note panel-note--tight">{t("sessions.captureNote")}</p>
        <div className="loop-save-row">
          <input
            placeholder={t("sessions.loopTitlePlaceholder")}
            type="text"
            value={loopTitle}
            onChange={(event) => onLoopTitleChange(event.target.value)}
          />
          <input
            placeholder={t("sessions.loopNotePlaceholder")}
            type="text"
            value={loopNote}
            onChange={(event) => onLoopNoteChange(event.target.value)}
          />
          <button className="primary" onClick={onSaveLoop}>
            {t("sessions.saveLoop")}
          </button>
        </div>
      </div>
      <div className="loop-list">
        {currentSession?.loops?.length ? (
          currentSession.loops.map((loop) => (
              <div className={`loop-row${loop.id === currentLoopId ? " active" : ""}`} key={loop.id}>
              <div className="loop-info">
                <strong>{loop.title || t("sessions.unnamedLoop")}</strong>
                <div>
                  {formatTime(loop.loopStart)} → {formatTime(loop.loopEnd)} • {(loop.speed || 1).toFixed(2)}x
                </div>
                {loop.note && <p className="loop-note">{loop.note}</p>}
              </div>
              <div className="loop-row-actions">
                <button onClick={() => onLoadLoop(loop.id)}>{t("sessions.load")}</button>
                {onReplaceLoop && (
                  <button className="secondary" onClick={() => onReplaceLoop(loop.id)}>
                    {t("sessions.replace")}
                  </button>
                )}
                <button className="secondary" onClick={() => onDeleteLoop(loop.id)}>
                  {t("sessions.delete")}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="panel-note">{t("sessions.noLoops")}</p>
        )}
      </div>
      <div className="session-toolbar">
        <button className="primary" onClick={onSaveSession}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
            <polyline points="17 21 17 13 7 13 7 21"/>
            <polyline points="7 3 7 8 15 8"/>
          </svg>
          {t("sessions.saveSession")}
        </button>
        <div className="session-actions-group">
          <button
            className="icon-btn"
            onClick={onExportSessions}
            title={t("sessions.exportTitle")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>{t("sessions.export")}</span>
          </button>
          <button
            className="icon-btn"
            onClick={onOpenImport}
            title={t("sessions.importTitle")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            <span>{t("sessions.import")}</span>
          </button>
          <input ref={fileInputRef} type="file" accept="application/json" hidden onChange={onImportSessions} />
        </div>
      </div>
    </section>
  );
}
