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
  return (
    <section className="panel video-panel">
      <div id="player" className="player-placeholder">
        <p>Loading YouTube player...</p>
      </div>
      <div className="video-controls">
        <label>
          Video ID or URL
          <input
            type="text"
            value={videoIdInput}
            onChange={(event) => onVideoIdChange(event.target.value)}
            placeholder="e.g., https://youtu.be/abc123"
          />
        </label>
        <button className="primary" onClick={onLoadVideo}>
          Load &amp; Reset
        </button>
      </div>
      {mp3Enabled && (
        <div className="upload-row">
          <label className="upload-button">
            Upload MP3
            <input type="file" accept="audio/mp3,audio/mpeg" onChange={(event) => onUploadAudio(event.target.files?.[0])} />
          </label>
          {audioFileName && <span className="upload-label">{audioFileName}</span>}
        </div>
      )}
      <div className="loop-time-display">
        <div>
          <label>
            Loop start (hh:mm:ss or seconds)
            <input
              value={loopStartInput}
              onChange={(event) => onLoopStartChange(event.target.value)}
              type="text"
              placeholder="00:00:00"
            />
          </label>
          <button onClick={onSetStartCurrent}>Set from current</button>
        </div>
        <div>
          <label>
            Loop end (hh:mm:ss or seconds)
            <input
              value={loopEndInput}
              onChange={(event) => onLoopEndChange(event.target.value)}
              type="text"
              placeholder="00:00:00"
            />
          </label>
          <button onClick={onSetEndCurrent}>Set from current</button>
        </div>
      </div>
      <div className="loop-actions">
        <button className="primary" onClick={onToggleLoop}>
          {loopEnabled ? "Stop Loop" : "Start Loop"}
        </button>
        <button onClick={onClearLoop}>Clear Loop</button>
        <div className="loop-status">{loopStatus}</div>
      </div>
    </section>
  );
}
