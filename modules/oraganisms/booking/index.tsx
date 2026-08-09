"use client";

import { motion } from "motion/react";
import Button from "@/modules/atoms/button";

const data = ["People Strategy", "Role Design", "Recruitment & Hiring", "Interview Frameworks", "HR Consultancy"];

// One pass of this strip is only ~950px wide. Two copies wouldn't cover twice
// the viewport on a wide screen, so the track would run out mid-loop. Enough
// copies to always overflow, shifted by exactly one copy per cycle.
const REPEAT = 6;

// One pass of the strip: every item followed by a dot separator.
function Strip() {
    return (
        <>
            {data.map((item) => (
                <div key={item} className="flex shrink-0 bg-[#abf007] py-3 sm:py-4 items-center">
                    <span className="text-sm sm:text-lg text-black whitespace-nowrap">{item}</span>
                    <span className="mx-4 sm:mx-6 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                </div>
            ))}
        </>
    );
}

export default function Booking(){
    return(
        <main className="bg-[#1b4a42] border-b border-b-neutral-500 pb-16 sm:pb-32 flex flex-col items-center justify-center">
            <div className="w-full overflow-hidden">
                <motion.div
                    className="flex w-max items-center"
                    animate={{ x: ["0%", `-${100 / REPEAT}%`] }}
                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                >
                    {[...Array(REPEAT)].map((_, i) => (
                        <Strip key={i} />
                    ))}
                </motion.div>
            </div>
            {/* Scales with the viewport on phones so it keeps the oversized
                look instead of shrinking to a normal heading */}
            <h1 className="text-[17vw] sm:text-[180px] leading-none pt-16 sm:pt-32 pb-8 sm:pb-0 text-white text-center whitespace-nowrap">Book A Call</h1>
            <Button style="bg-[#abf007] rounded-full" name="Book Now" link="/" />
        </main>
    );
}
