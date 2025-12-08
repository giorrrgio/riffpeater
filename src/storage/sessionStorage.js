import { normalizeImportedSessions } from "../utils/loopUtils";

const STORAGE_KEY_SESSIONS = "loopPracticeSessions";
const STORAGE_KEY_LAST_STATE = "loopPracticeLastState";

const isBrowser = () => typeof window !== "undefined";

const safeParse = (value) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    console.error("Failed to parse stored value", error);
    return null;
  }
};

export function loadSessionsFromStorage() {
  if (!isBrowser()) {
    return [];
  }
  const stored = window.localStorage.getItem(STORAGE_KEY_SESSIONS);
  if (!stored) {
    return [];
  }
  const parsed = safeParse(stored);
  if (!parsed) {
    return [];
  }
  return normalizeImportedSessions(parsed);
}

export function saveSessionsToStorage(sessions) {
  if (!isBrowser()) {
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY_SESSIONS, JSON.stringify(sessions));
  } catch (error) {
    console.error("Failed to save sessions to storage", error);
  }
}

export function deleteSessionsFromStorage() {
  if (!isBrowser()) {
    return;
  }
  window.localStorage.removeItem(STORAGE_KEY_SESSIONS);
}

export function loadLastStateFromStorage() {
  if (!isBrowser()) {
    return null;
  }
  const stored = window.localStorage.getItem(STORAGE_KEY_LAST_STATE);
  if (!stored) {
    return null;
  }
  return safeParse(stored);
}

export function saveLastStateToStorage(payload) {
  if (!isBrowser()) {
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY_LAST_STATE, JSON.stringify(payload));
  } catch (error) {
    console.error("Failed to save last state to storage", error);
  }
}

export function deleteLastStateFromStorage() {
  if (!isBrowser()) {
    return;
  }
  window.localStorage.removeItem(STORAGE_KEY_LAST_STATE);
}

export function exportSessionsToFile(sessions) {
  if (!sessions || !sessions.length) {
    return;
  }
  const blob = new Blob([JSON.stringify(sessions, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "guitar-loop-sessions.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

export function importSessionsFromFile(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve([]);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        const normalized = normalizeImportedSessions(parsed);
        resolve(normalized);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
}
