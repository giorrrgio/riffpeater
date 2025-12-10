import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
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
