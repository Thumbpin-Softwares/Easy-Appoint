"use client";
import { motion } from "motion/react";

type FlipTextProps = {
  text: string;
  className?: string;
  /** Seconds before the flip starts */
  delay?: number;
  /** Seconds each character takes to spin down to rest */
  duration?: number;
  /** Seconds between neighbouring characters */
  stagger?: number;
  /** Full rotations a character makes before settling */
  spins?: number;
};

export default function FlipText({
  text,
  className = "",
  delay = 0,
  duration = 1.2,
  stagger = 0.02,
  spins = 2,
}: FlipTextProps) {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span
      className={className}
      style={{ perspective: "600px", display: "inline-block" }}
      aria-label={text}
    >
      {words.map((word, w) => (
        <span key={w} className="inline-block whitespace-nowrap" aria-hidden>
          {[...word].map((char) => {
            const i = charIndex++;
            return (
              <motion.span
                key={i}
                className="inline-block origin-center"
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                initial={{ rotateX: -360 * spins, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{
                  duration,
                  delay: delay + i * stagger,
                  ease: [0.16, 1, 0.3, 1],
                  opacity: { duration: 0.3, delay: delay + i * stagger },
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {w < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
