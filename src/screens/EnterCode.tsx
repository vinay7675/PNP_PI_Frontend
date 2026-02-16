import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Robot from "../components/Robot";

export default function EnterCode({ onSubmit, onCancel }: { onSubmit: (code: string) => void; onCancel: () => void }) {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);

  function press(n: string) {
    const idx = code.findIndex((c) => c === "");
    if (idx !== -1) {
      const next = [...code];
      next[idx] = n;
      setCode(next);
    }
  }

  function backspace() {
  const idx = [...code].reverse().findIndex((c) => c !== "");
  if (idx !== -1) {
    const realIdx = code.length - 1 - idx;
    const next = [...code];
    next[realIdx] = "";
    setCode(next);
  }
}

  function clear() {
  setCode(Array(code.length).fill(""));
}

  function submit() {
    if (code.every((c) => c !== "")) {
      onSubmit(code.join(""));
    }
  }

  const isComplete = code.every((c) => c !== "");

  return (
    <div className="w-screen h-screen bg-[#F7F5EF] grid place-items-center overflow-hidden">
      {/* FIXED KIOSK CANVAS */}
      <div
        className="flex"
        style={{
          width: "650px",
          height: "350px",
        }}
      >
        {/* LEFT — ROBOT */}
        <div className="flex flex-col items-center justify-center w-[30%] px-3 text-center">
          <Robot />

          <p className="mt-3 text-[#1F2A44]/70 text-sm leading-snug">
            Enter your<br />6-digit print code
          </p>
        </div>

        {/* RIGHT — KEYPAD ZONE */}
        <div className="w-[70%] flex flex-col justify-center items-center py-4">
          
          {/* INPUT BOXES */}
          <div 
            className="flex justify-center"
            style={{ marginBottom: "5%" }}
          >
            <div className="flex gap-4" style={{ gap: "0.55rem" }}>
              {code.map((d, i) => (
                <div
                  key={i}
                  className={`rounded-lg border-2 flex items-center justify-center font-semibold transition-all ${
                    d
                      ? "bg-white border-[#FFBF00] text-[#1F2A44]"
                      : "bg-white/50 border-[#1F2A44]/20 text-transparent"
                  }`}
                  style={{
                    width: "3rem",
                    height: "3rem",
                    fontSize: "1.4rem",
                    borderRadius:"10%"
                  }}
                >
                  <AnimatePresence>
                    {d && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        {d}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* NUMBER PAD */}
          <div 
  className="flex flex-col justify-center"
  style={{ marginBottom: "4%", gap: "0.65rem" }}
>
  {/* Row 1 – Vowels (shorter, centered) */}
  <div className="flex justify-center">
    <div className="grid grid-cols-5" style={{ gap: "0.65rem" }}>
      {[..."AEIOU"].map((n) => (
        <Key key={n} label={n} onClick={() => press(n)} />
      ))}
    </div>
  </div>

  {/* Row 2 – 1 to 6 (widest row) */}
  <div className="flex justify-center">
    <div className="grid grid-cols-6" style={{ gap: "0.65rem" }}>
      {[..."123456"].map((n) => (
        <Key key={n} label={n} onClick={() => press(n)} />
      ))}
    </div>
  </div>

  {/* Row 3 – CLR, 7–0, ⌫ */}
  <div className="flex justify-center">
    <div className="grid grid-cols-5" style={{ gap: "0.65rem" }}>
      <Key label="CLR" onClick={clear} />
      {[..."789"].map((n) => (
        <Key key={n} label={n} onClick={() => press(n)} />
      ))}
      <Key label="⌫" onClick={backspace} />
    </div>
  </div>
</div>

          {/* ACTION BUTTONS */}
          <div 
            className="flex justify-center"
            style={{ gap: "1rem" }}
          >
            <button
              onClick={onCancel}
              className="rounded-full btn bg-white border border-[#1F2A44]/20 text-[#1F2A44] font-medium transition-all hover:bg-gray-50"
              style={{
                padding: "0.55rem 1.4rem",
                fontSize: "0.9rem",
              }}
            >
              Cancel
            </button>

            <button
              onClick={submit}
              disabled={!isComplete}
              className={`rounded-full font-semibold transition-all ${
                isComplete
                  ? "bg-[#FFBF00] text-[#FFFFFF] hover:bg-[#FFD133]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              style={{
                padding: "0.55rem 1.6rem",
                fontSize: "0.9rem"
              }}
            >
              Continue →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

function Key({ label, onClick }: {label:string; onClick: () => void; }) {
  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={onClick}
      className="rounded-full bg-[#1F2A44] text-[#F7F5EF] font-medium shadow-sm transition-all hover:bg-[#2A3A5A]"
      style={{
        width: "3rem",
        height: "3rem",
        fontSize: "1.1rem"
      }}
    >
      {label}
    </motion.button>
  );
}
