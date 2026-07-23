"use client";

import { useState } from "react";
import { motion } from "motion/react";
import ImageCarousal from "@/modules/molecules/image-carousal";
import { ArrowLeft, ArrowRight } from "lucide-react";

const data = [
    {
        title : "Scalable Staffing Solutions Designed For Modern Businesses",
        subtitle : "Flexible Support",
        link : "",
        imageLink : "/cta/1.webp"
    },
    {
        title : "Improving Internal Structure, Hiring Systems, And Team Performance",
        subtitle : "Strategic HR",
        link : "",
        imageLink : "/cta/2.webp"
    },
    {
        title : "Helping Companies Attract Stronger Talent Through Employer Branding.",
        subtitle : "Brand Positioning",
        link : "",
        imageLink : "/cta/3.webp"
    },
    {
        title : "Finding Experienced Leaders For High-Impact And Critical Roles.",
        subtitle : "Leadership Hiring",
        link : "",
        imageLink : "/cta/4.webp"
    },
];

// shortest signed distance from `current` to `index` on a circular track of length `length`
function getOffset(index: number, current: number, length: number) {
    let diff = (index - current + length) % length;
    if (diff > length / 2) diff -= length;
    return diff;
}

export default function Cta(){
    const [current, setCurrent] = useState(0);
    const length = data.length;

    const goPrev = () => setCurrent((i) => (i - 1 + length) % length);
    const goNext = () => setCurrent((i) => (i + 1) % length);

    return(
        <main className="flex flex-col items-center justify-center gap-2 py-24 bg-black">
            <h1 className="text-white sm:text-4xl text-2xl px-6 sm:px-0 text-center sm:w-2xl">Strategic HR services designed to support every stage of your growth.</h1>

            <div className="relative w-full max-w-5xl h-125 sm:h-125 overflow-hidden pt-18">
                {data.map((item, index) => {
                    const offset = getOffset(index, current, length);
                    const isCenter = offset === 0;
                    const isVisible = Math.abs(offset) <= 1;

                    return (
                        <motion.div
                            key={index}
                            className="absolute top-24 h-[350px] sm:h-[400px] w-[80%] sm:w-[65%]"
                            style={{ left: "50%", pointerEvents: isCenter ? "auto" : "none" }}
                            animate={{
                                x: `calc(-50% + ${offset * 70}%)`,
                                scale: isCenter ? 1 : 0.85,
                                opacity: isVisible ? (isCenter ? 1 : 0.55) : 0,
                                filter: isCenter ? "blur(0px)" : "blur(6px)",
                                zIndex: isCenter ? 10 : 0,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 32 }}
                        >
                            <ImageCarousal
                                link={item.link}
                                title={item.title}
                                subtitle={item.subtitle}
                                imageLink={item.imageLink}
                            />
                        </motion.div>
                    );
                })}
            </div>

            <div className="pt-6 flex gap-4">
                <button
                    aria-label="Previous slide"
                    onClick={goPrev}
                    className="bg-blue-600 p-2 rounded-full cursor-pointer"
                >
                    <ArrowLeft color="white" size={28} />
                </button>
                <button
                    aria-label="Next slide"
                    onClick={goNext}
                    className="bg-blue-600 p-2 rounded-full cursor-pointer"
                >
                    <ArrowRight color="white" size={28} />
                </button>
            </div>
        </main>
    );
}
