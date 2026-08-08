"use client";

import StepCard from "@/modules/molecules/stepCard";
import { Asterisk } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

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

  return (
    <main className="grid grid-cols-2 items-start pt-12">
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
  );
}