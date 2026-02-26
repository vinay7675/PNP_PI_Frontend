import { motion } from "framer-motion";
import { XCircle, RotateCcw } from "lucide-react";
import { setKioskState } from "../store/kioskState";

export default function Error() {
  const handleRetry = () => {
    setKioskState("ENTER_CODE");
  };

  return (
    <div className="w-screen h-screen flex items-center scale-125 justify-center bg-[#F7F5EF] overflow-hidden relative">
      {/* Background Elements */}
      <motion.div
        className="absolute top-12 left-12 w-32 h-32 rounded-3xl bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB]"
        style={{ opacity: 0.6 }}
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-16 right-16 w-36 h-36 rounded-full bg-gradient-to-br from-[#FFB347] to-[#FFCC99]"
        style={{ opacity: 0.6 }}
        animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="relative flex flex-col items-center justify-center text-center z-10"
        style={{ width: "650px", height: "350px" }}
      >
        {/* Robot with Moving Eyes (No No Signal) */}
        <div className="mb-6 relative">
          <svg width="140" height="140" viewBox="0 0 140 140">
            {/* ANTENNA */}
            <line
              x1="70"
              y1="20"
              x2="70"
              y2="12"
              stroke="#FFBF00"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="70" cy="10" r="4" fill="#FFBF00" />

            {/* HEAD */}
            <rect
              x="20"
              y="20"
              width="100"
              height="56"
              rx="16"
              fill="#1F2A44"
              filter="drop-shadow(0 4px 10px rgba(0,0,0,0.3))"
            />

            {/* EYES WITH DANGER/NO-NO MOVEMENT */}
            <g>
              {/* Left Eye - Moving Side to Side */}
              <ellipse cx="52" cy="48" rx="8" ry="10" fill="#FF4444" opacity="0.3" />
              <motion.g
                animate={{
                  x: [-3, 3, -3, 3, -3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: "easeInOut",
                }}
              >
                <ellipse cx="52" cy="48" rx="8" ry="10" fill="#FF4444" />
                <circle cx="52" cy="48" r="4" fill="#8B0000" />
              </motion.g>

              {/* Right Eye - Moving Side to Side (opposite direction) */}
              <ellipse cx="88" cy="48" rx="8" ry="10" fill="#FF4444" opacity="0.3" />
              <motion.g
                animate={{
                  x: [3, -3, 3, -3, 3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: "easeInOut",
                }}
              >
                <ellipse cx="88" cy="48" rx="8" ry="10" fill="#FF4444" />
                <circle cx="88" cy="48" r="4" fill="#8B0000" />
              </motion.g>
            </g>

            {/* WORRIED/SAD MOUTH */}
            <motion.path
              d="M 52 65 Q 70 58 88 65"
              stroke="#FF4444"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              animate={{
                d: [
                  "M 52 65 Q 70 58 88 65",
                  "M 52 65 Q 70 60 88 65",
                  "M 52 65 Q 70 58 88 65",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* BODY */}
            <rect
              x="30"
              y="80"
              width="80"
              height="48"
              rx="14"
              fill="#1F2A44"
              filter="drop-shadow(0 4px 10px rgba(0,0,0,0.3))"
            />

            {/* SCREEN */}
            <rect x="45" y="90" width="50" height="28" rx="6" fill="#FF4444" opacity="0.2" />
            
            {/* Warning Symbol on Screen */}
            <motion.g
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ transformOrigin: "70px 104px" }}
            >
              <circle cx="70" cy="104" r="6" fill="#FF4444" />
              <text
                x="70"
                y="108"
                fontSize="10"
                fontWeight="bold"
                fill="#1F2A44"
                textAnchor="middle"
              >
                !
              </text>
            </motion.g>

            {/* BODY LIGHTS - RED */}
            <motion.circle
              cx="40"
              cy="117"
              r="3"
              fill="#FF4444"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.circle
              cx="100"
              cy="117"
              r="3"
              fill="#FF4444"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            />

            {/* ARMS - STATIC */}
            <rect x="8" y="84" width="14" height="36" rx="7" fill="#1F2A44" opacity="0.8" />
            <rect x="118" y="84" width="14" height="36" rx="7" fill="#1F2A44" opacity="0.8" />
          </svg>
        </div>

        {/* Error Icon with Animation */}
        

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-[#1F2A44] mb-3 font-cormorant">
            Invalid Print Code
          </h1>
          <p className="text-[#1F2A44] opacity-70 text-base leading-relaxed max-w-md">
            Oops! The code you entered is not valid. Please check your code and try again.
          </p>
        </motion.div>

        {/* Retry Button - Goes Back to EnterCode */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRetry}
          className="group relative px-10 py-4 bg-gradient-to-r from-[#FFBF00] via-[#FFD700] to-[#FFBF00] text-[#1F2A44] font-bold text-lg rounded-full shadow-2xl hover:shadow-[#FFBF00]/50 transition-all flex items-center gap-3"
          style={{
            boxShadow: "0 8px 32px rgba(255, 191, 0, 0.4), 0 0 60px rgba(255, 191, 0, 0.2)", padding:"10px"
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/50 to-white/30 rounded-full blur-md"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          <RotateCcw className="w-5 h-5 relative z-10" strokeWidth={3} />
          <span className="relative z-10 tracking-wide">Try Again</span>
        </motion.button>

        {/* Helper Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-xs text-[#1F2A44]/50"
        >
          Need help? Please contact staff for assistance
        </motion.p>
      </div>
    </div>
  );
}
