"use client";

import { motion } from "motion/react";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

export default function Globe() {
  return (
    <main className="flex items-center justify-center">
        <div className="relative flex h-40 w-40 items-center justify-center">
      {/* Outer Ring */}
      <div className="absolute h-40 w-40 rounded-full border border-blue-100" />

      {/* Middle Ring */}
      <div className="absolute h-32 w-32 rounded-full border border-blue-200" />

      {/* Center Globe */}
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 shadow-lg">
        <HiOutlineGlobeAlt className="text-4xl text-white" />
      </div>

      {/* Connection Points */}
      {[
        { top: "6%", left: "46%" },
        { top: "30%", right: "10%" },
        { bottom: "5%", right: "18%" },
        { bottom: "14%", left: "8%" },
        { top: "40%", left: "8%" },
      ].map((point, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: i * 0.3,
          }}
          className="absolute h-3 w-3 rounded-full bg-blue-500"
          style={point}
        />
      ))}
    </div>
    </main>
  );
}