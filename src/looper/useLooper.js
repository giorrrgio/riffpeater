import { useCallback, useEffect, useRef, useState } from "react";
import { formatTime, parseTimeString } from "../utils/loopUtils";

export function useLooper({ playerRef, playerReady, updatePlayerSpeed, speedRef }) {
  const [loopStart, setLoopStart] = useState(0);
  const [loopEnd, setLoopEnd] = useState(0);
  const [loopStartInput, setLoopStartInput] = useState(formatTime(0));
  const [loopEndInput, setLoopEndInput] = useState(formatTime(0));
  const [loopEnabled, setLoopEnabled] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const [loopStatus, setLoopStatus] = useState("Loop off");
  const [customLoopMessage, setCustomLoopMessage] = useState(null);
  const [automationEnabled, setAutomationEnabled] = useState(false);
  const [automationStatus, setAutomationStatus] = useState("Automation idle");
  const [loopsBefore, setLoopsBefore] = useState(4);
  const [automationDelta, setAutomationDelta] = useState(0.05);
  const [maxSpeed, setMaxSpeed] = useState(1.5);

  const automationCounterRef = useRef(0);
  const lastLoopTimestampRef = useRef(0);

  const disableLoop = useCallback(() => {
    setLoopEnabled(false);
    setLoopCount(0);
    automationCounterRef.current = 0;
  }, []);

  const enableLoop = useCallback(() => {
    if (loopEnd <= loopStart) {
      return;
    }
    setCustomLoopMessage(null);
    setLoopEnabled(true);
    setLoopCount(0);
    automationCounterRef.current = 0;
  }, [loopEnd, loopStart]);

  const resetLoopState = useCallback(() => {
    disableLoop();
    setLoopStart(0);
    setLoopEnd(0);
    setLoopStartInput(formatTime(0));
    setLoopEndInput(formatTime(0));
    automationCounterRef.current = 0;
    setAutomationEnabled(false);
    setAutomationStatus("Automation idle");
    setCustomLoopMessage(null);
  }, [disableLoop]);

  const handleLoopStartChange = useCallback(
    (value) => {
      setLoopStartInput(value);
      const parsed = parseTimeString(value);
      if (parsed !== null) {
        setLoopStart(parsed);
        if (loopEnd <= parsed) {
          const nextEnd = parsed + 0.1;
          setLoopEnd(nextEnd);
          setLoopEndInput(formatTime(nextEnd));
        }
        setCustomLoopMessage(null);
      }
    },
    [loopEnd]
  );

  const handleLoopEndChange = useCallback(
    (value) => {
      setLoopEndInput(value);
      const parsed = parseTimeString(value);
      if (parsed !== null) {
        const normalized = Math.max(parsed, loopStart + 0.1);
        setLoopEnd(normalized);
        setCustomLoopMessage(null);
      }
    },
    [loopStart]
  );

  const handleSetStartCurrent = useCallback(() => {
    const player = playerRef.current;
    if (!player || typeof player.getCurrentTime !== "function") {
      return;
    }
    const current = Number(player.getCurrentTime());
    setLoopStart(current);
    setLoopStartInput(formatTime(current));
    if (loopEnd <= current) {
      const target = current + 0.1;
      setLoopEnd(target);
      setLoopEndInput(formatTime(target));
    }
  }, [loopEnd, playerRef]);

  const handleSetEndCurrent = useCallback(() => {
    const player = playerRef.current;
    if (!player || typeof player.getCurrentTime !== "function") {
      return;
    }
    const current = Number(player.getCurrentTime());
    const targetEnd = Math.max(current, loopStart + 0.1);
    setLoopEnd(targetEnd);
    setLoopEndInput(formatTime(targetEnd));
  }, [loopStart, playerRef]);

  const handleToggleLoop = useCallback(() => {
    if (!loopEnabled) {
      if (loopEnd <= loopStart) {
        setCustomLoopMessage("Set a loop range first");
        return;
      }
      enableLoop();
    } else {
      disableLoop();
    }
  }, [loopEnabled, loopEnd, loopStart, enableLoop, disableLoop]);

  const handleLoopsBeforeChange = useCallback((value) => {
    setLoopsBefore(Math.max(1, Number(value) || 1));
  }, []);

  const handleAutomationDeltaChange = useCallback((value) => {
    const parsed = Number(value);
    if (Number.isNaN(parsed)) {
      return;
    }
    const clamped = Math.min(1, Math.max(0.05, parsed));
    setAutomationDelta(clamped);
  }, []);

  const handleMaxSpeedChange = useCallback((value) => {
    const parsed = Number(value);
    if (Number.isNaN(parsed)) {
      return;
    }
    const clamped = Math.min(3, Math.max(0.5, parsed));
    setMaxSpeed(clamped);
  }, []);

  const handleAutomationStart = useCallback(() => {
    setAutomationEnabled(true);
    automationCounterRef.current = 0;
    setAutomationStatus("Automation active");
  }, []);

  const handleAutomationStop = useCallback(() => {
    setAutomationEnabled(false);
    automationCounterRef.current = 0;
    setAutomationStatus("Automation idle");
  }, []);

  const applyLoopRange = useCallback((start = 0, end = start) => {
    const normalizedStart = Number(start) || 0;
    const normalizedEnd = Math.max(normalizedStart + 0.1, Number(end) || normalizedStart);
    setLoopStart(normalizedStart);
    setLoopEnd(normalizedEnd);
    setLoopStartInput(formatTime(normalizedStart));
    setLoopEndInput(formatTime(normalizedEnd));
  }, []);

  useEffect(() => {
    if (!playerReady || !playerRef.current || !loopEnabled || loopEnd <= loopStart) {
      return undefined;
    }
    const monitor = setInterval(() => {
      const player = playerRef.current;
      if (
        !player ||
        typeof player.getCurrentTime !== "function" ||
        !loopEnabled ||
        loopEnd <= loopStart
      ) {
        return;
      }
      const currentTime = player.getCurrentTime();
      if (currentTime >= loopEnd - 0.05 && Date.now() - lastLoopTimestampRef.current > 400) {
        lastLoopTimestampRef.current = Date.now();
        if (typeof player.seekTo === "function") {
          player.seekTo(loopStart, true);
        }
        setLoopCount((value) => value + 1);
        if (automationEnabled) {
          automationCounterRef.current += 1;
          if (automationCounterRef.current >= loopsBefore) {
            automationCounterRef.current = 0;
            const currentRate =
              typeof player.getPlaybackRate === "function" ? player.getPlaybackRate() : speedRef?.current || 1;
            const nextSpeed = Math.min(maxSpeed, currentRate + automationDelta);
            updatePlayerSpeed(nextSpeed);
            if (nextSpeed >= maxSpeed) {
              setAutomationEnabled(false);
              setAutomationStatus(`Max speed ${maxSpeed.toFixed(2)}x reached`);
            } else {
              setAutomationStatus(`Speed set to ${nextSpeed.toFixed(2)}x`);
            }
          }
        }
      }
    }, 150);
    return () => clearInterval(monitor);
  }, [
    loopEnabled,
    loopStart,
    loopEnd,
    automationEnabled,
    loopsBefore,
    automationDelta,
    maxSpeed,
    playerReady,
    playerRef,
    updatePlayerSpeed,
    speedRef,
  ]);

  useEffect(() => {
    if (customLoopMessage) {
      setLoopStatus(customLoopMessage);
      return;
    }
    if (!loopEnabled) {
      setLoopStatus("Loop off");
      return;
    }
    setLoopStatus(`Looping ${formatTime(loopStart)} → ${formatTime(loopEnd)} (${loopCount}x)`);
  }, [customLoopMessage, loopEnabled, loopStart, loopEnd, loopCount]);

  const handleClearLoop = useCallback(() => {
    resetLoopState();
  }, [resetLoopState]);

  return {
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
  };
}
