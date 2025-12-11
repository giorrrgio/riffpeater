import { useTranslation } from "../i18n/LocaleContext";

export default function VideoPanel({
  videoIdInput,
  onVideoIdChange,
  onLoadVideo,
  loopStartInput,
  loopEndInput,
  onLoopStartChange,
  onLoopEndChange,
  onSetStartCurrent,
  onSetEndCurrent,
  loopEnabled,
  loopStatus,
  onToggleLoop,
  onClearLoop,
  onUploadAudio,
  audioFileName,
  mp3Enabled,
}) {
  const t = useTranslation();
  return (
    <section className="panel video-panel">
      <div className="panel-heading">
        <h2>{t("video.heading")}</h2>
        <div
          className="info-trigger"
          role="button"
          tabIndex={0}
          aria-describedby="video-info-tooltip"
          aria-label={t("video.infoLabel")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="11" />
            <line x1="12" y1="15" x2="12" y2="18" />
          </svg>
          <p className="info-tooltip" role="tooltip" id="video-info-tooltip">
            {t("video.tooltip")}
          </p>
        </div>
      </div>
      <div id="player" className="player-placeholder">
        <p>{t("video.loading")}</p>
      </div>
      <div className="video-controls">
        <label>
          {t("video.labelInput")}
          <input
            type="text"
            value={videoIdInput}
            onChange={(event) => onVideoIdChange(event.target.value)}
            placeholder={t("video.inputPlaceholder")}
          />
        </label>
        <button className="primary" onClick={onLoadVideo}>
          {t("video.loadButton")}
        </button>
      </div>
      {mp3Enabled && (
        <div className="upload-row">
          <label className="upload-button">
            {t("video.uploadButton")}
            <input type="file" accept="audio/mp3,audio/mpeg" onChange={(event) => onUploadAudio(event.target.files?.[0])} />
          </label>
          {audioFileName && <span className="upload-label">{audioFileName}</span>}
        </div>
      )}
      <div className="loop-time-display">
        <div>
          <label>
            {t("video.loopStart")}
            <input
              value={loopStartInput}
              onChange={(event) => onLoopStartChange(event.target.value)}
              type="text"
              placeholder={t("video.placeholderTime")}
            />
          </label>
          <button onClick={onSetStartCurrent}>{t("video.setFromCurrent")}</button>
        </div>
        <div>
          <label>
            {t("video.loopEnd")}
            <input
              value={loopEndInput}
              onChange={(event) => onLoopEndChange(event.target.value)}
              type="text"
              placeholder={t("video.placeholderTime")}
            />
          </label>
          <button onClick={onSetEndCurrent}>{t("video.setFromCurrent")}</button>
        </div>
      </div>
      <div className="loop-actions">
        <button className="primary" onClick={onToggleLoop}>
          {loopEnabled ? t("video.stopLoop") : t("video.startLoop")}
        </button>
        <button onClick={onClearLoop}>{t("video.clearLoop")}</button>
        <div className="loop-status">{loopStatus}</div>
      </div>
    </section>
  );
}
