"use client";

import { Asterisk } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function About() {
  const barsRef = useRef<HTMLDivElement>(null);

  // 0 when the bars enter the viewport, 1 once they sit in the middle of it.
  const { scrollYProgress } = useScroll({
    target: barsRef,
    offset: ["start end", "center center"],
  });

  // Each bar draws itself over a slightly later slice of the scroll — a stagger
  // that plays forward on the way down and rewinds on the way back up.
  const bar1 = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const bar2 = useTransform(scrollYProgress, [0.15, 0.8], [0, 1]);
  const bar3 = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2">
      <div className="lg:border-r lg:border-r-neutral-500">
        <div className="flex flex-col p-6 lg:p-12 gap-4">
          <span className="text-lg lg:text-xl flex gap-2 items-center text-[#224742]">
            <Asterisk />
            Why it Matters
          </span>
          <h1 className="text-[#224742] text-3xl sm:text-5xl lg:text-6xl font-semibold">
            Bad <span className="bg-[#abf007] px-2">hire</span> costs more than
            a salary
          </h1>
        </div>
        {/* Staircase needs the full column width to keep its steps — desktop only */}
        <div className="hidden lg:block" ref={barsRef}>
          <motion.div
            style={{ scaleX: bar1 }}
            className="h-24 bg-[#1b4a42] w-sm origin-left"
          />
          <motion.div
            style={{ scaleX: bar2 }}
            className="h-24 bg-[#1b4a42] w-lg origin-left"
          />
          <motion.div
            style={{ scaleX: bar3 }}
            className="h-24 bg-[#1b4a42] w-full origin-left"
          />
        </div>
      </div>
      <div className="pt-0 lg:pt-12 flex justify-between flex-col">
        {/* Supporting copy is desktop-only; on a phone the video follows the heading */}
        <div className="hidden lg:flex px-12 flex-col gap-4">
          <p className="text-md text-[#224742] font-semibold">
            You want someone who not only has the skills, but fits your culture,
            shares your values, and will grow with you.
          </p>
          <p className="text-[#224742]">
            A wrong hire can cost 2–3× their annual salary in lost time,
            training, and rehiring
          </p>
          <p className="text-[#224742]">
            Poor culture fit affects your whole team not just the new person
          </p>
        </div>
        <div className="pt-0 lg:pt-16 h-56 sm:h-64 overflow-hidden">
          <video
            src="https://res.cloudinary.com/xzz0hewl/video/upload/v1786044924/6a4b6ed4d716521c14e6a9c5_0_Business_Meeting_Interview_1920x1080_mp4_vvhakr.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
