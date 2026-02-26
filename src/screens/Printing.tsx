import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Printing() {
  const messages = [
  "Please wait while we prepare your pages.",
  "This won’t take long.",
  "We’re bringing your document to life."
];
const [CurrentIndex,setCurrentIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((i) => (i + 1) % messages.length);
  }, 2500); // ⏱️ 2.5s per message

  return () => clearInterval(interval);
}, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#F7F5EF]">
      <div
        className="relative flex flex-col items-center "
        style={{ width: "100%", height: "100%", marginTop:"120px" }}
      >
        <h1 className="text-4xl font-bold text-[#1F2A44] mb-2 font-cormorant">
          Printing Your Document
        </h1>
        {/* Printer Animation Container */}
        <div className="relative mb-8" style={{ height: "200px", width: "200px" }}>
          
          {/* Paper Going IN (blank, no border) */}
          {/* <motion.div
            className="absolute left-1/2 -translate-x-1/2 bg-[#E8E6F0] shadow-md"
            style={{ 
              top: "-60px",
              width: "90px",
              marginTop:  "10px",
              zIndex: 5,
        
            }}
            animate={{ 
              y: [0, 0, 0, 100, 100, 100],
              height: ["100px", "100px", "100px", "0px", "0px", "0px"],
              opacity: [1, 1, 1, 1, 0, 0]
            }}
            transition={{ 
              duration: 4,
              times: [0, 0.15, 0.2, 0.35, 0.36, 1],
              repeat: Infinity,
              ease: "linear"
            }}
          /> */}
          
          {/* Printer Body */}
          <div 
            className="relative bg-gradient-to-b from-[#4A5568] to-[#1F2A44] shadow-2xl mx-auto"
            style={{ 
              width: "200px", 
              height: "120px", 
              borderRadius: "16px",
              marginTop: "10px",
              zIndex: 3
            }}
          >
            {/* Left side darker panel */}
            <div 
              className="absolute left-0 top-0 bottom-0 bg-[#2D3748] rounded-l-2xl"
              style={{ width: "60px" }}
            />
            <div className="absolute left-[70px] top-[42px] font-extrabold " style={{ fontSize: "30px", color: "#FFBF00", fontWeight:"bold"}}>
              PNP
            </div>
            
            {/* LED Lights */}
            <div className="absolute flex gap-4" style={{ top: "18px", left: "18px", zIndex: 4 }}>
              <motion.div 
                className="rounded-full bg-[#FFBF00] shadow-lg"
                style={{ width: "10px", height: "10px" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              {/* <motion.div 
                className="rounded-full bg-[#FFBF00] shadow-lg"
                style={{ width: "10px", height: "10px" }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
              /> */}
            </div>
            
            {/* Top paper slot (black line) */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 bg-[#1A202C] rounded"
              style={{ 
                top: "8px",
                width: "110px", 
                height: "8px",
                zIndex: 2
              }}
            />
            
            {/* Bottom paper output slot (black line) */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 bg-[#1A202C] rounded"
              style={{ 
                bottom: "12px",
                width: "140px", 
                height: "8px",
                zIndex: 2
              }}
            />
          </div>

          {/* Paper Coming OUT (with blue lines, no border) */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bg-[#E8E6F0] shadow-lg overflow-hidden"
            style={{ 
              top: "112px",
              width: "90px",
              transformOrigin: "top",
              zIndex: 5
            }}
            animate={{ 
              height: [ "0px", "0px", "0px", "90px", "90px"],
              opacity: [ 0, 0, 0, 1, 1]
            }}
            transition={{ 
              duration: 3,
              times: [0, 0.25, 0.4, 0.45, 0.65, 1],
              repeat: Infinity,
              ease: "linear"
            }}
            
          >
            {/* Blue printed lines */}
            
          </motion.div>
          <div className="flex flex-col p-3 items-center justify-center space-y-2">
              <motion.div 
                className="h-1 rounded-full bg-[#3B82F6]"
                style={{ width: "50px",zIndex: 6, height:"2px" }}
                animate={{ opacity: [0,0,0,0, 1] }}
                transition={{ duration: 3, times: [ 0, 0.80, 0.80,0.85, 1], repeat: Infinity }}
              />
              <motion.div 
                className="h-1 rounded-full bg-[#3B82F6]"
                style={{ width: "50px",zIndex: 6, height:"2px", marginTop:"10px" }}
                animate={{ opacity: [0,0,0,0, 1] }}
                transition={{ duration: 3, times: [ 0, 0.85, 0.85,0.9, 1], repeat: Infinity }}
              />
              <motion.div 
                className="h-1 rounded-full bg-[#3B82F6]"
                style={{ width: "50px",zIndex: 6, height:"2px", marginTop:"10px" }}
                animate={{ opacity: [0,0,0,0, 1] }}
                transition={{ duration: 3, times: [ 0, 0.85, 0.85,0.90, 1], repeat: Infinity }}
              />
              <motion.div 
                className="h-1 rounded-full bg-[#3B82F6]"
                style={{ width: "50px",zIndex: 6, height:"2px", marginTop:"10px" }}
                animate={{ opacity: [0,0,0,0, 1] }}
                transition={{ duration: 3, times: [ 0, 0.9, 0.9,0.95, 1], repeat: Infinity }}
              />
              <motion.div 
                className="h-1 rounded-full bg-[#3B82F6]"
                style={{ width: "50px",zIndex: 6, height:"2px", marginTop:"10px" }}
                animate={{ opacity: [0,0,0,0, 1] }}
                transition={{ duration: 3, times: [ 0, 0.9, 0.9,0.95, 1], repeat: Infinity }}
              />
              <motion.div 
                className="h-1 rounded-full bg-[#3B82F6]"
                style={{ width: "50px",zIndex: 6, height:"2px", marginTop:"10px" }}
                animate={{ opacity: [0,0,0,0, 1] }}
                transition={{ duration: 3, times: [ 0, 0.95, 0.95,1, 1], repeat: Infinity }}
              />
              {/* <motion.div 
                className="h-1 rounded-full bg-[#3B82F6]"
                style={{ width: "50px", zIndex: 6, height:"2px", marginTop:"10px"}}
                animate={{ opacity: [0, 0, 1, 1] }}
                transition={{ duration: 5, times: [0, 0.25, 0.4, 0.45, 0.65, 1], repeat: Infinity }}
              />
              <motion.div 
                className="h-1 rounded-full bg-[#3B82F6]"
                style={{ width: "50px", zIndex: 6, height:"2px", marginTop:"10px"}}
                animate={{ opacity: [0, 0,0, 1, 1] }}
                transition={{ duration: 5, times: [0, 0.25, 0.4, 0.45, 0.65, 1], repeat: Infinity }}
              />
              <motion.div 
                className="h-1 rounded-full bg-[#3B82F6]"
                style={{ width: "50px", zIndex: 6, height:"2px", marginTop:"10px"}}
                animate={{ opacity: [0, 0,0,0, 1, 1] }}
                transition={{ duration: 5, times: [0, 0.25, 0.4, 0.45, 0.65, 1], repeat: Infinity }}
              />
               */}
            </div>
        </div>

        {/* <p className="text-[#1F2A44]/70 mb-6 text-sm">Please wait...</p> */}

        {/* Progress Bar */}
        <div style={{ width: "320px", marginTop:"20px"}}>
          <div className="relative h-4 flex justify-center rounded-full overflow-hidden">
            {/* <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FFBF00] to-[#FFD700] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: ${progress}% }}
              transition={{ duration: 0.3 }}
            /> */}
           <AnimatePresence mode="wait">
        <motion.div
          key={CurrentIndex}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 1 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-sm text-gray-700 text-center"
        >
          {messages[CurrentIndex]}
        </motion.div>
      </AnimatePresence>
          </div>
          {/* <div className="flex justify-between mt-2">
            <span className="text-[#1F2A44]/50 text-xs">Processing...</span>
            <span className="text-[#FFBF00] text-sm font-semibold">{progress}%</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
