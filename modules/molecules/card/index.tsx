import Badge from "@/modules/atoms/badge";
import { ReactNode } from "react";
import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  description: string;
  badgeTitle: string;
  icon: ReactNode;
  badgeStyle?: string;
};

export default function Card({
  image,
  title,
  description,
  badgeTitle,
  icon,
  badgeStyle = "",
}: CardProps) {
  return (
    <main className="group w-92 overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-5 top-5">
          <Badge
            className={`${badgeStyle}`}
            title={badgeTitle}
            icon={icon}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-6">
        <h2 className="text-xl tracking-tight">
          {title}
        </h2>

        <p className="text-neutral-600 text-sm">
          {description}
        </p>
      </div>
    </main>
  );
}