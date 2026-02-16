export async function startPrint(code: string) {
  const res = await fetch("http://localhost:8000/print", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });

  const data = await res.json();

  if (data.status === "INVALID_CODE") {
    throw new Error("INVALID_CODE");
  }

  if (data.status === "OUT_OF_SERVICE") {
    throw new Error("OUT_OF_SERVICE");
  }

  return data;
}
