import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Success() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#F7F5EF] overflow-hidden relative">
      {/* Confetti */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 3 === 0 ? "#FFBF00" : i % 3 === 1 ? "#20B2AA" : "#1F2A44",
            left: `${20 + i * 7}%`,
            top: `${10 + (i % 3) * 20}%`,
          }}
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0.5], y: [0, -30, 60] }}
          transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatDelay: 3 }}
        />
      ))}

      <div
        className="relative flex flex-col items-center justify-center px-8"
        style={{ width: "650px", height: "350px" }}
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
          className="mb-6"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-[#FFBF00]/30 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative w-28 h-28 bg-gradient-to-br from-[#FFBF00] to-[#FFD700] rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle2 className="w-16 h-16 text-white" strokeWidth={3} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#1F2A44] mb-3 font-cormorant">
            Print Complete!
          </h1>
          <p className="text-[#1F2A44]/70 text-base max-w-md leading-relaxed">
            Your document has been printed successfully. 
            Please collect your prints from the output tray.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-xs text-[#1F2A44]/50 text-center"
        >
          Returning to home screen...
        </motion.p>
      </div>
    </div>
  );
}
