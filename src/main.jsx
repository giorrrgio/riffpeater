import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
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
    <AppWithSplash />
    <div id="kofi-button-container">
      <p>If you find this app useful, please consider buying me a coffee.</p>
      <a href="https://ko-fi.com/U7U21PYGKF" target="_blank" rel="noreferrer" id="kofi-button">
        <img
          height="36"
          style={{ border: 0, height: "36px" }}
          src="https://storage.ko-fi.com/cdn/kofi1.png?v=6"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
    </div>
  </React.StrictMode>
);
