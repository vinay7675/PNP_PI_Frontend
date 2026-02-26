import { motion } from "framer-motion";
import { WifiOff, AlertTriangle } from "lucide-react";

export default function OutOfService() {
  return (
    <div className="w-screen h-screen scale-125 flex items-center justify-center bg-[#F7F5EF]">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage:`linear-gradient(#FFBF00 1px, transparent 1px), linear-gradient(90deg, #FFBF00 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
          animate={{ y: [0, 30] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div
        className="relative flex flex-col items-center justify-center px-8 text-center"
        style={{ width: "650px", height: "350px" }}
      >
        {/* Warning Icons */}
        <motion.div
          className="mb-6 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 2.5 }}
          transition={{ type: "spring", damping: 10 }}
        >
          <motion.div
            className="absolute inset-0 bg-[#FFBF00]/20 rounded-full blur-2xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="relative flex items-center justify-center">
            <div className="w-24 h-24 bg-[#FFBF00]/20 rounded-full flex items-center justify-center">
              <WifiOff className="w-12 h-12 text-[#FFBF00]" strokeWidth={2} />
            </div>
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <AlertTriangle className="w-8 h-8 text-[#FFBF00] fill-[#FFBF00]/20" strokeWidth={2} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-3xl font-bold text-[#1F2A44] mb-3 font-cormorant">
            Service Temporarily Unavailable
          </h1>
          <p className="w-[80%] text-[#1F2A44]/70 text-base mx-auto leading-relaxed mb-6"> 
            We're experiencing technical difficulties. 
            Our system will automatically reconnect shortly.
          </p>
        </motion.div>

        
          <motion.div
            className="w-2 h-2 mt-[20px] bg-[#1F2A44] rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[#1F2A44]/70 text-sm">Trying to reconnect...</span>
        
      </div>
    </div>
  );
}
