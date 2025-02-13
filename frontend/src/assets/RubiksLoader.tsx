import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RubiksLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative w-32 h-32">
        <motion.div
          className="absolute inset-0 w-full h-full bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-xl"
          animate={{ rotateY: progress * 3.6 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {progress}%
        </motion.div>
        <motion.div
          className="absolute inset-0 w-full h-full border-4 border-gray-700 grid grid-cols-3 grid-rows-3"
          animate={{ opacity: progress === 100 ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-full h-full bg-gradient-to-br from-blue-500 to-red-500 border border-gray-900"
              style={{ opacity: (progress / 100) * (i + 1) }}
            ></div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RubiksLoader;
