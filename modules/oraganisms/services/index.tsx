import { Asterisk } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import Sectors from "@/modules/molecules/sectors";
import { CgArrowTopRight } from "react-icons/cg";

type ServiceCardProps = {
  icon: string;
  number: string;
  title: string;
  body: string;
  background: string;
  /** Shown at the top-right of the card while it is hovered. */
  slot?: ReactNode;
};

function ServiceCard({
  icon,
  number,
  title,
  body,
  background,
  slot,
}: ServiceCardProps) {
  return (
    <div
      className={`group relative ${background} hover:bg-[#00C2FF] duration-300 flex flex-col gap-8 lg:gap-0 justify-between p-4 sm:p-6`}
    >
      <div className="pointer-events-none absolute right-6 top-6 z-10 translate-y-2 opacity-0 duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        {slot}
      </div>

      <div className="pr-14 sm:pr-24">
        <Image src={icon} height={32} width={32} alt={title} />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs sm:text-sm font-bold">{number}</span>
        <h1 className="text-base sm:text-xl font-semibold">{title}</h1>
        <p className="text-xs sm:text-sm">{body}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <main className="py-18 bg-[#1b3a52] flex flex-col items-center justify-center gap-4">
      <span className="text-center flex items-center justify-center gap-2 text-lg sm:text-xl text-[#00C2FF]">
        <Asterisk />
        What We Help With
      </span>
      <h1 className="px-4 w-full max-w-4xl text-white text-center text-3xl sm:text-5xl lg:text-6xl font-semibold">
        Recruitment, simplified and optimized by{" "}
        <span className="text-[#1b3a52] px-2 bg-[#00C2FF]">EasyAppoint</span>
      </h1>

      {/* Phone: image on top, the four-cell grid underneath — unchanged 2x2 */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-12">
        <Image
          src="/services/bg.webp"
          height={1200}
          width={1200}
          alt="bg"
          className="w-full h-auto"
        />
        <div className="grid grid-cols-2">
          <div className="bg-white px-6 py-8 lg:py-0 flex flex-col items-center gap-2 justify-center">
            <span className="text-[#1b3a52] text-md flex items-center gap-2"><Asterisk />Sectors We Serve</span>
            <h1 className="text-2xl text-center">Deep expertise where it matters</h1>
            <Sectors />
          </div>

          <ServiceCard
            icon="/services/1.svg"
            number="01"
            title="Full-Time on your payroll"
            body="We source, screen and place permanent hires who join directly on your brand's payroll culturally aligned and ready to grow with you."
            background="bg-neutral-200"
            slot={
              <div className="bg-white p-2 rounded-l-full rounded-br-full">
                <CgArrowTopRight className="text-4xl" />
              </div>
            }
          />

          <ServiceCard
            icon="/services/3.svg"
            number="02"
            title="Remote on Third-Party Payroll"
            body="Hire global remote talent without setting up entities. We handle contracts, compliance and payroll through our third-party structure."
            background="bg-neutral-200"
            slot={
              <div className="bg-white p-2 rounded-l-full rounded-br-full">
                <CgArrowTopRight className="text-4xl" />
              </div>
            }
          />

          <ServiceCard
            icon="/services/4.svg"
            number="03"
            title="Freelance + Project Delivery"
            body="Assemble the right freelancers and let us coordinate the project end-to-end from kickoff to delivery, with built-in quality checks."
            background="bg-white"
            slot={
              <div className="bg-white p-2 rounded-l-full rounded-br-full">
                <CgArrowTopRight className="text-4xl" />
              </div>
            }
          />
        </div>
      </div>
    </main>
  );
}
