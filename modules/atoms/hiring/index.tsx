import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function Hiring() {
  return (
    <main className="flex items-center justify-center py-4">
      {/* Outer Ring */}
      <div className="relative rounded-full border border-neutral-200 p-8">
        {/* Top Left Image */}
        <div className="absolute -top-4 bg-white left-8">
          <Image
            src="/hero-carousal/img1.webp"
            alt="Avatar"
            width={44}
            height={44}
            className="rounded-full border-2 border-white shadow-lg object-cover"
          />
        </div>

        {/* Inner Ring */}
        <div className="relative rounded-full border border-neutral-200 p-8">
          {/* Bottom Right Image */}
          <div className="absolute bg-white right-2 bottom-8 translate-x-1/2 translate-y-1/2">
            <Image
              src="/hero-carousal/img2.webp"
              alt="Avatar"
              width={44}
              height={44}
              className="rounded-full border-2 border-white shadow-lg object-cover"
            />
          </div>

          {/* Center */}
          <div className="rounded-full border border-neutral-200 bg-white p-4 shadow-sm">
            <FaCheckCircle
              size={28}
              className="text-blue-600"
            />
          </div>
        </div>
      </div>
    </main>
  );
}