"use client";

import { motion } from "motion/react";
import ImageHolder from "@/modules/atoms/image-holder";

const images = [
  {
    alt: "Image 1",
    link: "/hero-carousal/img1.webp",
  },
  {
    alt: "Image 2",
    link: "/hero-carousal/img2.webp",
  },
  {
    alt: "Image 3",
    link: "/hero-carousal/img4.webp",
  },
  {
    alt: "Image 4",
    link: "/hero-carousal/img5.webp",
  },
  {
    alt: "Image 5",
    link: "/hero-carousal/img6.webp",
  },
  {
    alt: "Image 6",
    link: "/hero-carousal/img7.webp",
  },
  {
    alt: "Image 7",
    link: "/hero-carousal/img8.webp",
  },
];

const duplicatedImages = [...images, ...images];

export default function HeroCarousal() {
  return (
    <main className="w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-4"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedImages.map((item, index) => (
          <ImageHolder
            key={index}
            background="bg-linear-to-t from-blue-50 via-blue-200 to-blue-100"
            alt={item.alt}
            link={item.link}
          />
        ))}
      </motion.div>
    </main>
  );
}