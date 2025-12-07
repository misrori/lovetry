
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// Dynamically set basename for local and production
function getBaseName() {
  if (import.meta.env.DEV) {
    // If running locally and path starts with /lovetry, use /lovetry/
    if (window.location.pathname.startsWith("/lovetry")) {
      return "/lovetry/";
    }
    return "/";
  }
  return "/lovetry/";
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={getBaseName()}>
    <App />
  </BrowserRouter>
);
