import Image from "next/image";

type StepCardProps = {
  step: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt?: string;
    width: number;
    height: number;
  };
  className?: string;
};

export default function StepCard({
  step,
  title,
  description,
  image,
  className = "",
}: StepCardProps) {
  return (
    <main className={className}>
      <div className="relative h-107.5 overflow-hidden">
        <Image
    src={image.src}
    width={image.width}
    height={image.height}
    alt={image.alt ?? "Feature Image"}
    className="h-full w-full object-cover"
  />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-end justify-center p-6">
          <div className="max-w-sm bg-white p-6">
            <div className="mb-6 text-2xl font-semibold uppercase text-[#9eabb1]">
              {step}
            </div>

            <h3 className="text-4xl font-semibold text-[#1b3a52]">
              {title}
            </h3>

            <p className="mt-2 text-md text-[#1b3a52]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}