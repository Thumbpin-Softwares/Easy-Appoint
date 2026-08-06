"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { TbPointer2 } from "react-icons/tb";
import { useLayoutEffect, useRef, useState } from "react";

const VIDEO_SRC =
  "https://res.cloudinary.com/xzz0hewl/video/upload/v1785958448/674c1eb1948ddfb2e8494a8e_674d302e6065de51d02d8858_Home_1_6910392_Three_Female_1920x1080-transcode_syikbz.mp4";

const slide = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
} as const;

type Rect = { top: number; left: number; width: number; height: number };

export default function HeroItem() {
  const holderRef = useRef<HTMLDivElement>(null);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const startTime = useRef(0);

  // Rect the video has to land on — measured from its in-flow placeholder.
  const [target, setTarget] = useState<Rect | null>(null);
  // Intro is over: the video sits in the layout and the side cards may come in.
  const [settled, setSettled] = useState(false);

  useLayoutEffect(() => {
    const el = holderRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setTarget({ top: r.top, left: r.left, width: r.width, height: r.height });
  }, []);

  const cards = settled
    ? { x: 0, y: "-50%", opacity: 1 }
    : { y: "-50%", opacity: 0 };

  return (
    <main className="relative w-full overflow-hidden">
      {/* Background SVG */}
      <Image
        src="/hero/bg.svg"
        width={3920}
        height={514}
        alt="Background"
        className="absolute left-1/2 top-0 scale-160 -translate-x-1/2 w-full h-auto"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex h-114 items-center justify-center">
        {/* Left side */}
        <motion.div
          initial={{ x: "34vw", y: "-50%", opacity: 0 }}
          animate={cards}
          transition={slide}
          className="absolute left-4 top-30 z-0 hidden flex-col items-end gap-4 lg:flex xl:left-22"
        >
          <Image
            src="/hero/left.png"
            width={193}
            height={160}
            alt="Recruitment process"
            className="w-48 xl:w-48"
          />

          <div className="rotate-350 animate-bounce duration-300">
            <div className="flex justify-end">
                <TbPointer2 color="#c2bdfd" stroke="black" size={18} fill="#c2bdfd" className="rotate-80" />
            </div>
            <div className="bg-[#c2bdfd] px-4 py-1 border border-black rounded-full font-semibold">
                <span>Sohan Rout</span>
            </div>
          </div>
        </motion.div>

        {/* Placeholder: holds the video's final size, and hosts it once settled */}
        <div ref={holderRef} className="relative z-10 h-full w-2xl">
          {settled && (
            <video
              ref={(el) => {
                if (el) el.currentTime = startTime.current;
              }}
              src={VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full rounded-2xl object-cover"
            />
          )}
        </div>

        {/* Intro: full-bleed video that shrinks onto the placeholder */}
        {!settled && target && (
          <motion.video
            ref={introVideoRef}
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            initial={{ top: "5vh", left: "5vw", width: "90vw", height: "90vh" }}
            animate={{
              top: target.top,
              left: target.left,
              width: target.width,
              height: target.height,
            }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            onAnimationComplete={() => {
              startTime.current = introVideoRef.current?.currentTime ?? 0;
              setSettled(true);
            }}
            className="fixed z-50 rounded-2xl object-cover"
          />
        )}

        {/* Right side */}
        <motion.div
          initial={{ x: "-34vw", y: "-50%", opacity: 0 }}
          animate={cards}
          transition={slide}
          className="absolute top-1/2 z-0 hidden flex-col items-start gap-4 lg:flex right-12 xl:right-12"
        >
          <Image
            src="/hero/right.png"
            width={269}
            height={200}
            alt="Activity feed"
            className="w-62 xl:w-62"
          />

          <div className="rotate-10 animate-bounce duration-300">
            <div className="flex justify-start">
                <TbPointer2 color="#cbfac4" stroke="black" size={18} fill="#cbfac4" className="rotate-18" />
            </div>
            <div className="bg-[#cbfac4] px-4 py-1 border border-black rounded-full font-semibold">
                <span>Sparsh Sharma</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
