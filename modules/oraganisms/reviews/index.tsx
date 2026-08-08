"use client";
import { Star, Verified } from "lucide-react";
import { Asterisk } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const reviews = [
  {
    quote: "“No jargon, just results.”",
    body: "EasyAppoint understood our culture immediately and only sent us candidates worth meeting.",
    name: "Nikhil Rajput",
    card: "bg-neutral-100",
    heading: "text-[#1b4a42]",
    text: "text-black",
    border: "border-t-black",
    star: { fill: "#1b4a42", stroke: "#1b4a42" },
    verified: { fill: "#1b4a42", stroke: "white" },
  },
  {
    quote: "“Genuinely felt supported.”",
    body: "First time hiring and I was terrified. Pace held our hand through every step and we got it right.",
    name: "Gunjan Sharma",
    card: "bg-black",
    heading: "text-white",
    text: "text-white",
    border: "border-t-[#1b4a42]",
    star: { fill: "white", stroke: "white" },
    verified: { fill: "white", stroke: "black" },
  },
  {
    quote: "“Found the perfect hire.”",
    body: "EasyAppoint made the whole process feel effortless. We had the right person in the role within three weeks.",
    name: "Sudhanshu Aggarwal",
    card: "bg-[#abf007]",
    heading: "text-[#1b4a42]",
    text: "text-black",
    border: "border-t-black",
    star: { fill: "#1b4a42", stroke: "#1b4a42" },
    verified: { fill: "#1b4a42", stroke: "#abf007" },
  },
  {
    quote: "“Hiring stopped being a gamble.”",
    body: "Every shortlist came back sharper than the last. We filled two senior roles without a single wasted interview.",
    name: "Shivangi Joshi",
    card: "bg-[#1b4a42]",
    heading: "text-white",
    text: "text-white",
    border: "border-t-black",
    star: { fill: "white", stroke: "white" },
    verified: { fill: "white", stroke: "#1b4a42" },
  },
];

// One pass of every review. Rendered twice so the track can loop seamlessly.
function Track() {
  return (
    <>
      {reviews.map((review) => (
        <div
          key={review.name}
          className={`${review.card} p-6 w-sm shrink-0 space-y-6 mr-6`}
        >
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={review.star.fill}
                stroke={review.star.stroke}
              />
            ))}
          </div>
          <h1 className={`${review.heading} text-2xl font-semibold`}>
            {review.quote}
          </h1>
          <p className={`${review.text} text-md`}>{review.body}</p>
          <div
            className={`pt-6 border-t flex items-center justify-between ${review.border}`}
          >
            <span className={review.text}>{review.name}</span>
            <span className={`flex ${review.text} items-center gap-2`}>
              <Verified
                fill={review.verified.fill}
                stroke={review.verified.stroke}
                size={26}
              />
              Verified
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

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
    <main className="pb-18">
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
      </div>

      <div className="overflow-hidden px-6 pb-24">
        <motion.div
          className="flex w-max items-stretch"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* Two identical passes — at -50% the second sits exactly where the
              first began, so the reset is invisible. */}
          <Track />
          <Track />
        </motion.div>
      </div>

      <div className="grid grid-cols-3 border-t border-t-neutral-300 items-center pt-24 pb-12 justify-center">
        <div className="flex flex-col gap-4 items-center border-r border-r-neutral-300 justify-center">
            <h1 className="text-[#1b4a42] text-8xl">100%</h1>
            <span className="text-[#1b4a42] text-lg">of clients recommend us.</span>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className="text-[#1b4a42] text-8xl">1500</h1>
            <span className="text-[#1b4a42] text-lg">employees successfully placed.</span>
        </div>
        <div className="flex flex-col gap-4 border-l border-l-neutral-300 items-center justify-center">
            <h1 className="text-[#1b4a42] text-8xl">38%</h1>
            <span className="text-[#1b4a42] text-lg">of new clients come via referral</span>
        </div>
      </div>
    </main>
  );
}
