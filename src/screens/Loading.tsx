import { motion } from "framer-motion";
import Robot from "../components/Robot";

export default function Loading({ text }: { text: string }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#F7F5EF]">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #1F2A4410 0%, transparent 50%)`,
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div
        className="relative scale-125 flex flex-col items-center justify-center"
        style={{ width: "650px", height: "350px" }}
      >
        <Robot size="large" />

        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="mb-6"
        >
          <div className="relative">
            <div className="w-20 h-20 border-4 border-[#1F2A44]/20 rounded-full" />
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-[#FFBF00] rounded-full" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-[#1F2A44] mb-2 font-cormorant"
        >
          {text}
        </motion.h2>

        {/* Loading Dots */}
        <div className="flex gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-[#FFBF00] rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
