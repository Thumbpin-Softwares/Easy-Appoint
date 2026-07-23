import Image from "next/image";
import Button from "@/modules/atoms/button";

type ImageCarousalProps = {
  imageLink: string;
  title: string;
  subtitle: string;
  link: string;
};

export default function ImageCarousal({
  imageLink,
  link,
  title,
  subtitle,
}: ImageCarousalProps) {
  return (
    <main className="relative h-full w-full overflow-hidden rounded-3xl">
      <Image
        src={imageLink}
        alt={title}
        width={1200}
        height={700}
        className="h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/25" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <span className="text-white sm:text-lg text-xs tracking-tight">
          {subtitle}
        </span>

        <h1 className="mt-2 sm:text-4xl text-sm font-semibold tracking-tight">
          {title}
        </h1>

        <div className="sm:mt-6 mt-2">
          <Button
            name="Learn More"
            link={link}
            style="text-white hover:bg-blue-600 hover:text-white sm:text-inherit text-sm rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}