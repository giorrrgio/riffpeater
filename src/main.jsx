import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LocaleProvider } from "./i18n/LocaleContext";
import "./style.css";

function AppWithSplash() {
  useEffect(() => {
    const splash = document.getElementById("splash-screen");
    if (!splash) return;

    let fallbackTimer;

    const handleTransitionEnd = () => {
      window.clearTimeout(fallbackTimer);
      splash.remove();
    };

    const fadeTimer = window.setTimeout(() => {
      splash.classList.add("splash-hidden");
    }, 30);

    fallbackTimer = window.setTimeout(() => {
      splash.remove();
    }, 600);

    splash.addEventListener("transitionend", handleTransitionEnd, { once: true });

    return () => {
      splash.removeEventListener("transitionend", handleTransitionEnd);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocaleProvider>
      <AppWithSplash />
    </LocaleProvider>
  </React.StrictMode>
);
