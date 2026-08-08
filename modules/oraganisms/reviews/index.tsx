"use client";

import { Asterisk } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Reviews() {
  const barsRef = useRef<HTMLDivElement>(null);

  // 0 when the bars enter the viewport, 1 once they sit in the middle of it.
  const { scrollYProgress } = useScroll({
    target: barsRef,
    offset: ["start end", "center center"],
  });

  // Same stagger as the About bars: draws forward on the way down, rewinds up.
  const bar1 = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const bar2 = useTransform(scrollYProgress, [0.15, 0.8], [0, 1]);
  const bar3 = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

  return (
    <main>
      <div className="flex items-start">
        <div className="flex min-w-0 flex-1 flex-col gap-6 items-start py-24 pl-8">
          <span className="text-[#1b4a42] text-xl flex items-center gap-2">
            <Asterisk />
            Real results, real people
          </span>
          <h1 className="text-6xl font-semibold text-[#1b4a42]">Hear it form the <span className="bg-[#abf007] px-2">Business</span> We Helped</h1>
        </div>
        {/* The About staircase, flipped: widest on top, narrowest at the bottom */}
        {/* shrink-0: if this box narrows past w-lg, w-full would come out
            shorter than the bar below it and the steps would invert. */}
        <div className="w-2xl shrink-0" ref={barsRef}>
          <motion.div
            style={{ scaleX: bar1 }}
            className="h-24 bg-[#1b4a42] ml-auto w-full origin-right"
          />
          <motion.div
            style={{ scaleX: bar2 }}
            className="h-24 bg-[#1b4a42] ml-auto w-lg origin-right"
          />
          <motion.div
            style={{ scaleX: bar3 }}
            className="h-24 bg-[#1b4a42] ml-auto w-sm origin-right"
          />
        </div>
        <div>
            
        </div>
      </div>
    </main>
  );
}
