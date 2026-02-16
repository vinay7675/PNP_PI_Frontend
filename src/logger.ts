export function logFrontendError(type: string, message: string, extra?: any) {
  fetch("http://localhost:8000/log/frontend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type,
      message,
      extra,
      time: new Date().toISOString()
    })
  }).catch(() => {});
}
