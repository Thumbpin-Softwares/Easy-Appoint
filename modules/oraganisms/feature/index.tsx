"use client";

import StepCard from "@/modules/molecules/stepCard";
import { Asterisk } from "lucide-react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

const GAP = 16;

const data = [
  {
    count: "01",
    title: "Shortlist in Days",
    description:
      "Curated candidates in 5–7 business days for most roles, not weeks.",
    image: {
      src: "/feature/1.webp",
      alt: "Shortlist in Days",
      width: 1200,
      height: 800,
    },
  },
  {
    count: "02",
    title: "End To End Co-ordination",
    description:
      "We stay involved through delivery kickoff, milestones and sign-off.",
    image: {
      src: "/feature/2.webp",
      alt: "End To End Co-ordination",
      width: 1200,
      height: 800,
    },
  },
  {
    count: "03",
    title: "Pre-Vetted Network",
    description:
      "A curated bench of IT, AI, Marketing and E-Learning specialists ready to deploy.",
    image: {
      src: "/feature/3.webp",
      alt: "Pre-Vetted Network",
      width: 1200,
      height: 800,
    },
  },
  {
    count: "04",
    title: "Remote Ready Hiring",
    description:
      "Hire across borders without setting up entities—payroll and compliance handled.",
    image: {
      src: "/feature/4.webp",
      alt: "Remote Ready Hiring",
      width: 1200,
      height: 800,
    },
  },
];

export default function Feature() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Progress across the stack of cards: 0 when the first card meets the middle
  // of the screen, 1 when the last one leaves it.
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const index = Math.floor(p * data.length);
    setActive(Math.min(data.length - 1, Math.max(0, index)));
  });

  // ——— Mobile: the same cards, dragged sideways instead of scrolled down ———
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stepWidth = useRef(0);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const [card, setCard] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      const first = track?.firstElementChild as HTMLElement | null;
      // Both are display:none on desktop, where every measurement is 0.
      if (!viewport || !track || !first || !viewport.offsetWidth) return;

      stepWidth.current = first.offsetWidth + GAP;
      setMaxDrag(Math.max(0, track.scrollWidth - viewport.offsetWidth));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goTo = (index: number) => {
    if (!stepWidth.current) return;
    const clamped = Math.min(data.length - 1, Math.max(0, index));
    animate(x, Math.max(-maxDrag, -clamped * stepWidth.current), {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    });
    setCard(clamped);
  };

  return (
    <>
    {/* ——— Desktop: pinned column + cards scrolling past it ——— */}
    <main className="hidden lg:grid grid-cols-2 items-start pt-12">
      {/* Left Side — pinned while the cards scroll past */}
      <div className="sticky top-24 flex flex-col items-center gap-6 self-start sm:items-start">
        <span className="flex items-center gap-2 text-xl text-[#1b4a42]">
          <Asterisk />
          How It Works
        </span>

        <h1 className="text-6xl font-semibold text-[#1b4a42]">
          Simple, personal Done{" "}
          <span className="bg-[#abf007] px-2">properly</span>
        </h1>

        <p className="text-lg text-[#1b4a42]">
          A specialist recruitment partner for teams building in IT, AI,
          Marketing and E-Learning.
        </p>

        <div className="w-full py-12">
          {data.map((item, index) => (
            <div
              key={item.count}
              className="relative flex w-[90%] cursor-pointer items-center gap-6 p-4"
            >
              {/* The highlight itself — one element that slides between steps */}
              {index === active && (
                <motion.div
                  layoutId="feature-step-highlight"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-[#abf007]"
                />
              )}

              <span
                className={`relative z-10 text-2xl font-semibold transition-opacity duration-300 ${
                  index === active ? "opacity-100" : "opacity-40"
                }`}
              >
                {item.count}
              </span>
              <h2
                className={`relative z-10 text-2xl font-semibold transition-opacity duration-300 ${
                  index === active ? "opacity-100" : "opacity-40"
                }`}
              >
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side — the part that actually scrolls */}
      <div
        ref={stepsRef}
        className="flex flex-col items-center justify-center gap-12"
      >
        {data.map((item) => (
          <StepCard
            key={item.count}
            className="border-neutral-200"
            step={item.count}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </main>

    {/* ——— Mobile: heading, steps, and cards you drag sideways ——— */}
    <section className="lg:hidden flex flex-col gap-6 py-12">
      <div className="flex flex-col gap-4 px-4">
        <span className="flex items-center gap-2 text-lg text-[#1b4a42]">
          <Asterisk />
          How It Works
        </span>

        <h1 className="text-3xl font-semibold text-[#1b4a42]">
          Simple, personal Done{" "}
          <span className="bg-[#abf007] px-2">properly</span>
        </h1>
      </div>

      {/* Steps — tap one to bring its card into view */}
      <div className="flex flex-col px-4">
        {data.map((item, index) => (
          <button
            key={item.count}
            type="button"
            onClick={() => goTo(index)}
            className="relative flex w-full items-center gap-4 p-3 text-left"
          >
            {index === card && (
              <motion.div
                layoutId="feature-step-highlight-mobile"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-[#abf007]"
              />
            )}
            <span
              className={`relative z-10 text-lg font-semibold transition-opacity duration-300 ${
                index === card ? "opacity-100" : "opacity-40"
              }`}
            >
              {item.count}
            </span>
            <h2
              className={`relative z-10 text-lg font-semibold transition-opacity duration-300 ${
                index === card ? "opacity-100" : "opacity-40"
              }`}
            >
              {item.title}
            </h2>
          </button>
        ))}
      </div>

      <div ref={viewportRef} className="overflow-hidden px-4">
        <motion.div
          ref={trackRef}
          drag="x"
          style={{ x }}
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.12}
          onDragEnd={() => {
            if (!stepWidth.current) return;
            goTo(Math.round(-x.get() / stepWidth.current));
          }}
          className="flex w-max cursor-grab gap-4 active:cursor-grabbing"
        >
          {data.map((item) => (
            <div key={item.count} className="w-[85vw] shrink-0">
              <StepCard
                className="border-neutral-200"
                step={item.count}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}