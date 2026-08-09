"use client";
import { motion } from "motion/react";

const text = ["Recruitment", "Easyhiring"];

function Sequence() {
    return (
        <>
            {text.map((word, index) => (
                <div key={index} className="flex shrink-0 items-center gap-6 sm:gap-12 lg:gap-18 pr-6 sm:pr-8 lg:pr-12">
                    <span className="text-[56px] sm:text-[100px] lg:text-[160px] leading-none font-semibold text-white">{word}</span>
                    <div className="h-6 w-6 sm:h-10 sm:w-10 lg:h-16 lg:w-16 shrink-0 rotate-45 bg-[#abf007]" />
                </div>
            ))}
        </>
    );
}

export default function Cta(){
    return(
        <main className="bg-[#1b4a42] h-[25vh] sm:h-[35vh] lg:h-[50vh] flex items-center overflow-hidden">
            <motion.div
                className="flex w-max items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            >
                {/* Two identical passes — the loop resets at -50%, where the
                    second pass sits exactly where the first started. */}
                <Sequence />
                <Sequence />
            </motion.div>
        </main>
    );
}
