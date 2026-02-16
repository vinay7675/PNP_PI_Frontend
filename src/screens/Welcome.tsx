import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Robot from "../components/Robot";

type Props = {
  onStart: () => void;
};

export default function Welcome({ onStart }: Props) {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#F7F5EF] overflow-hidden relative">
      {/* LARGE VISIBLE Background Elements */}
      
      {/* Top Left - Peach */}
      <div
        className="absolute w-40 h-40 rounded-3xl bg-gradient-to-br from-[#FFB347] to-[#FFCC99]"
        style={{ 
          top: "5%", 
          left: "5%", 
          opacity: 0.8,
          zIndex: 0
        }}
      />
      
      {/* Top Right - Blue */}
      <div
        className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-[#87CEEB] to-[#B0E0E6]"
        style={{ 
          top: "8%", 
          right: "8%", 
          opacity: 0.75,
          zIndex: 0
        }}
      />

      {/* Middle Left - Yellow */}
      <div
        className="absolute w-36 h-36 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#FFED4E]"
        style={{ 
          top: "35%", 
          left: "8%", 
          opacity: 0.7,
          zIndex: 0
        }}
      />

      {/* Middle Right - Lavender */}
      <div
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-[#E6E6FA] to-[#D8BFD8]"
        style={{ 
          top: "28%", 
          right: "10%", 
          opacity: 0.75,
          zIndex: 0
        }}
      />

      {/* Bottom Left - Pink */}
      <div
        className="absolute w-44 h-44 rounded-3xl bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB]"
        style={{ 
          bottom: "10%", 
          left: "10%", 
          opacity: 0.8,
          zIndex: 0
        }}
      />

      {/* Bottom Right - Mint */}
      <div
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-[#98FB98] to-[#90EE90]"
        style={{ 
          bottom: "8%", 
          right: "12%", 
          opacity: 0.75,
          zIndex: 0
        }}
      />

      {/* Top Center - Wheat */}
      <div
        className="absolute w-32 h-32 rounded-2xl bg-gradient-to-br from-[#F5DEB3] to-[#FFE4C4]"
        style={{ 
          top: "12%", 
          left: "35%", 
          opacity: 0.7,
          zIndex: 0
        }}
      />

      {/* Bottom Center - Cyan */}
      <div
        className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-[#E0FFFF] to-[#AFEEEE]"
        style={{ 
          bottom: "15%", 
          left: "55%", 
          opacity: 0.75,
          zIndex: 0
        }}
      />

      {/* MAIN CONTENT - Higher z-index */}
      <div
        className="relative flex flex-col items-center justify-center text-center"
        style={{ width: "650px", height: "350px", zIndex: 10 }}
      >
        {/* ROBOT */}
        <div className="mb-6 relative">
          <motion.div
            className="absolute inset-0 bg-[#FFBF00] opacity-20 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Robot size="large" />
        </div>

        {/* GREETING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-[#1F2A44] mb-3 font-cormorant">
            Hello! I'm Your Print Assistant
          </h1>
          <p className="text-[#1F2A44] opacity-70 text-base leading-relaxed">
            I'm here to help you print quickly and easily. Let's get started!
          </p>
        </motion.div>

        {/* ACTION BUTTON */}
        <motion.button
          onClick={onStart}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-12 py-5 bg-gradient-to-r from-[#FFBF00] via-[#FFD700] to-[#FFBF00] text-[#1F2A44] font-bold text-xl rounded-full shadow-2xl hover:shadow-[#FFBF00]/50 transition-all flex items-center gap-4"
          style={{
            boxShadow: "0 8px 32px rgba(255, 191, 0, 0.4), 0 0 60px rgba(255, 191, 0, 0.2)",
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/50 to-white/30 rounded-full blur-md"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          <span className="relative z-10 tracking-wide">Start Your Print</span>
          <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
}
