import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {logFrontendError } from './logger'

window.onerror = (msg, src, line, col, err) => {
  logFrontendError("JS_ERROR", String(msg), { src, line, col });
};

window.onunhandledrejection = (e) => {
  logFrontendError("PROMISE_REJECTION", String(e.reason));
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
