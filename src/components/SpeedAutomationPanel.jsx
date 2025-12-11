const DELTA_MIN = 0.05;
const DELTA_MAX = 0.5;
const DELTA_STEP = 0.05;
const DELTA_OPTIONS = Array.from(
  { length: Math.round((DELTA_MAX - DELTA_MIN) / DELTA_STEP) + 1 },
  (_, index) => Number((DELTA_MIN + index * DELTA_STEP).toFixed(2))
);

const MAX_SPEED_MIN = 0.75;
const MAX_SPEED_MAX = 2.5;
const MAX_SPEED_STEP = 0.25;
const MAX_SPEED_OPTIONS = Array.from(
  { length: Math.round((MAX_SPEED_MAX - MAX_SPEED_MIN) / MAX_SPEED_STEP) + 1 },
  (_, index) => Number((MAX_SPEED_MIN + index * MAX_SPEED_STEP).toFixed(2))
);

export default function SpeedAutomationPanel({
  speed,
  onSpeedChange,
  loopsBefore,
  automationDelta,
  maxSpeed,
  onLoopsBeforeChange,
  onAutomationDeltaChange,
  onMaxSpeedChange,
  onAutomationStart,
  onAutomationStop,
  automationStatus,
}) {
  return (
    <section className="panel controls-panel">
      <div className="panel-heading">
        <h2>Speed &amp; Automation</h2>
        <div
          className="info-trigger"
          role="button"
          tabIndex={0}
          aria-describedby="speed-info-tooltip"
          aria-label="Speed and automation info"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="7" x2="12" y2="11" />
            <line x1="12" y1="15" x2="12" y2="18" />
          </svg>
          <p className="info-tooltip" role="tooltip" id="speed-info-tooltip">
            Adjust playback speed and automation rules so the loop gradually ramps up to your target tempo.
          </p>
        </div>
      </div>
      <div className="control-row">
        <label htmlFor="speed-slider">Playback speed:</label>
        <input
          id="speed-slider"
          type="range"
          min="0.5"
          max="2.5"
          step="0.05"
          value={speed}
          onChange={(event) => onSpeedChange(event.target.value)}
        />
        <span>{speed.toFixed(2)}x</span>
      </div>
      <div className="automation-grid">
        <div>
          <label>
            Increase speed every
            <input
              type="number"
              min="1"
              value={loopsBefore}
              onChange={(event) => onLoopsBeforeChange(Number(event.target.value) || 1)}
            />
            loops
          </label>
        </div>
        <div>
          <label>
            Increase by
            <select
              value={automationDelta}
              onChange={(event) => onAutomationDeltaChange(event.target.value)}
            >
              {DELTA_OPTIONS.map((value) => (
                <option key={value} value={value}>
                  +{value.toFixed(2)}x
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Max speed
            <select
              value={maxSpeed}
              onChange={(event) => onMaxSpeedChange(event.target.value)}
            >
              {MAX_SPEED_OPTIONS.map((value) => (
                <option key={value} value={value}>
                  {value.toFixed(2)}x
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="automation-actions">
        <button className="secondary" onClick={onAutomationStart}>
          Start automation
        </button>
        <button onClick={onAutomationStop}>Stop automation</button>
        <span>{automationStatus}</span>
      </div>
    </section>
  );
}
