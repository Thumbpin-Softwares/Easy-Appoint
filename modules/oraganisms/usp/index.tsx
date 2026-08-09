"use client";
import { CheckCircle2 } from "lucide-react";
import { Asterisk } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Button from "@/modules/atoms/button";

const types = [
  {
    label: "Starting Out",
    content: (
      <section className="grid grid-cols-1 lg:grid-cols-2 p-4 sm:p-6 gap-8 lg:gap-18">
        <div className="flex flex-col items-start justify-between gap-6">
            <h1 className="text-[#1b4a42] text-2xl sm:text-3xl lg:text-4xl font-semibold">Hiring your first employee? We{"\'"}ll make sure you get it right from the start.</h1>

            <div className="flex flex-col gap-6">
                <p className="text-[#1b4a42]">Your first hire is a big moment. There{"\'"}s excitement, but there{"\'"}s also a lot you probably haven{"\'"}t had to think about before contracts,  compliance, induction plans.</p>
                <p className="text-[#1b4a42]">We{"\'"}ll help you define the role clearly, find someone who  shares your vision, and make sure everything is legal and above board  before they walk through the door.</p>
            </div>
        </div>
        <div className="bg-white flex flex-col gap-4 sm:gap-6 px-6 py-8 sm:px-12 sm:py-12">
            <span className="text-[#1b4a42] text-lg">What we{"\'"}ll handle for you</span>
            <ul className="space-y-4">
                <li className="flex border-b border-b-neutral-300 pb-2 items-center gap-2 text-[#1b4a42]"><CheckCircle2 fill="#1b4a42" color="white" size={28} className="shrink-0" />Role definition & salary benchmarking</li>
                <li className="flex border-b border-b-neutral-300 pb-2  items-center gap-2 text-[#1b4a42]"><CheckCircle2 fill="#1b4a42" color="white" size={28} className="shrink-0" />Employment contract (legally watertight)</li>
                <li className="flex border-b border-b-neutral-300 pb-2  items-center gap-2 text-[#1b4a42]"><CheckCircle2 fill="#1b4a42" color="white" size={28} className="shrink-0" />Onboarding plan & first-week guide</li>
                <li className="flex border-b border-b-neutral-300 pb-2  items-center gap-2 text-[#1b4a42]"><CheckCircle2 fill="#1b4a42" color="white" size={28} className="shrink-0" />Probation structure & check-in framework</li>
            </ul>
        </div>
      </section>
    ),
  },
  {
    label: "In Growth",
    content: (
      <section className="grid grid-cols-1 lg:grid-cols-2 p-4 sm:p-6 gap-8 lg:gap-18">
        <div className="flex flex-col items-start justify-between gap-6">
            <h1 className="text-[#1b4a42] text-2xl sm:text-3xl lg:text-4xl font-semibold">Scaling fast? We grow alongside you without cutting corners.</h1>

            <div className="flex flex-col gap-6">
                <p className="text-[#1b4a42]">Fast growth brings pressure. You need to hire quickly, but not  carelessly. We flex with you managing multiple roles at once, keeping  standards high, and making sure every hire reflects the culture you{"\'"}ve  worked hard to build.</p>
                <p className="text-[#1b4a42]">We become your strategic partner, not just your support act thinking ahead about team structure, skills gaps, and where your people needs are heading.</p>
            </div>
        </div>
        <div className="bg-white flex flex-col gap-4 sm:gap-6 px-6 py-8 sm:px-12 sm:py-12">
            <span className="text-[#1b4a42] text-lg">Built for scale</span>
            <ul className="space-y-4">
                <li className="flex border-b border-b-neutral-300 pb-2 items-center gap-2 text-[#1b4a42]"><CheckCircle2 fill="#1b4a42" color="white" size={28} className="shrink-0" />Multiple concurrent role management</li>
                <li className="flex border-b border-b-neutral-300 pb-2  items-center gap-2 text-[#1b4a42]"><CheckCircle2 fill="#1b4a42" color="white" size={28} className="shrink-0" />Headcount planning & org design</li>
                <li className="flex border-b border-b-neutral-300 pb-2  items-center gap-2 text-[#1b4a42]"><CheckCircle2 fill="#1b4a42" color="white" size={28} className="shrink-0" />Culture-fit interview frameworks</li>
                <li className="flex border-b border-b-neutral-300 pb-2  items-center gap-2 text-[#1b4a42]"><CheckCircle2 fill="#1b4a42" color="white" size={28} className="shrink-0" />Manager upskilling for hiring decisions</li>
            </ul>
        </div>
      </section>
    ),
  },
  {
    label: "In Maturity",
    content: (
      <section className="grid grid-cols-1 lg:grid-cols-2 p-4 sm:p-6 gap-8 lg:gap-18">
        <div className="flex flex-col items-start justify-between gap-6">
            <h1 className="text-[#1b4a42] text-2xl sm:text-3xl lg:text-4xl font-semibold">Senior or specialist hire? We bring the rigour it deserves.</h1>

            <div className="flex flex-col gap-6">
                <p className="text-[#1b4a42]">The bigger the role, the more is riding on it. We bring a thorough,  considered approach to senior and specialist recruitment rigorous  screening, thoughtful reference processes, and honest counsel when  something doesn{"\'"}t feel right.</p>
                <p className="text-[#1b4a42]">We{"\'"}ll take the time it takes, and won{"\'"}t pressure you toward a decision until you{"\'"}re genuinely confident.</p>
            </div>
        </div>
        <div className="bg-white flex flex-col gap-4 sm:gap-6 px-6 py-8 sm:px-12 sm:py-12">
            <span className="text-[#1b4a42] text-lg">Senior hire checklist</span>
            <ul className="space-y-4">
                <li className="flex border-b border-b-neutral-300 pb-2 items-center gap-2 text-[#1b4a42]"><CheckCircle2 fill="#1b4a42" color="white" size={28} className="shrink-0" />Deep competency-based interviewing</li>
                <li className="flex border-b border-b-neutral-300 pb-2  items-center gap-2 text-[#1b4a42]"><CheckCircle2 fill="#1b4a42" color="white" size={28} className="shrink-0" />Thorough reference & background checks</li>
                <li className="flex border-b border-b-neutral-300 pb-2  items-center gap-2 text-[#1b4a42]"><CheckCircle2 fill="#1b4a42" color="white" size={28} className="shrink-0" />Board or leadership team involvement</li>
                <li className="flex border-b border-b-neutral-300 pb-2  items-center gap-2 text-[#1b4a42]"><CheckCircle2 fill="#1b4a42" color="white" size={28} className="shrink-0" />Offer negotiation & transition support</li>
            </ul>
        </div>
      </section>
    ),
  },
];

export default function Usp() {
  const [active, setActive] = useState(0);

  return (
    <main className="bg-[#1b4a42] py-12 sm:py-24 px-4 sm:px-6 flex flex-col gap-6 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-lg sm:text-xl flex items-center gap-2 text-[#abf007]">
          <Asterisk />
          Who this is for
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white w-full max-w-xl text-center">
          Wherever you are in your Journey
        </h1>
      </div>

      <div className="flex w-full flex-col items-center justify-center py-8 sm:py-18">
        {/* Tabs — wrap onto a second line rather than overflowing on a phone */}
        <div className="flex flex-wrap justify-center items-center gap-2 w-fit max-w-full bg-neutral-100 p-2">
          {types.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setActive(index)}
              className="relative rounded-full px-4 sm:px-6 py-2 text-sm sm:text-lg font-semibold"
            >
              {index === active && (
                <motion.span
                  layoutId="usp-tab"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-[#abf007]"
                />
              )}
              <span
                className={`relative z-10 duration-300 ${
                  index === active ? "text-[#1b4a42]" : "text-[#1b4a42]"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="w-full max-w-6xl bg-neutral-100 py-4 sm:py-8 mt-6 sm:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={types[active].label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {types[active].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div>
        <Button
          style="bg-[#abf007] rounded-full font-semibold"
          link="/"
          name="Book A Call"
        />
      </div>
    </main>
  );
}
