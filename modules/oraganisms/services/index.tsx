import Card from "@/modules/molecules/card";
import { BsBagCheck } from "react-icons/bs";
import { FaGlobeAsia } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import Sectors from "@/modules/molecules/sectors";

const data = [
  {
    title: "Full-time on your payroll",
    image: "/services/1.jpg",
    description:
      "We source, screen and place permanent hires who join directly on your brand's payroll culturally aligned and ready to grow with you.",
    icon: <BsBagCheck />,
    badgeTitle: "service 01",
  },
  {
    title: "Remote on Third-Party Payroll",
    image: "/services/2.jpg",
    description:
      "Hire global remote talent without setting up entities. We handle contracts, compliance and payroll through our third-party structure.",
    icon: <FaGlobeAsia />,
    badgeTitle: "service 02",
  },
  {
    title: "Freelance + Project Delivery",
    image: "/services/3.jpg",
    description:
      "Assemble the right freelancers and let us coordinate the project end-to-end from kickoff to delivery, with built-in quality checks.",
    icon: <MdOutlineVerifiedUser />,
    badgeTitle: "service 03",
  },
];

export default function Services() {
  return (
    <main className="py-18 border-t border-neutral-300 flex flex-col gap-2">
      <span className="sm:text-lg text-center sm:text-left text-md text-blue-600 tracking-tight">What We Do</span>
      <h1 className="sm:text-4xl text-center sm:text-left text-2xl sm:w-xl tracking-tight">
        Recruitment, simplified and optimized by EasyAppoint
      </h1>
      <p className="sm:text-lg text-center sm:text-left text-sm text-neutral-600 sm:w-xl tracking-tight">
        We help businesses hire with confidence while giving candidates a
        smoother path toward career opportunities.
      </p>
      <div className="flex sm:flex-row flex-col gap-8 items-center justify-center pt-12">
        {data.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            badgeTitle={item.badgeTitle}
            badgeStyle="bg-white border border-black rounded-full flex items-center justify-center gap-2 text-xs"
            icon={item.icon}
          />
        ))}
      </div>
      <div className="pt-6">
        <Sectors />
      </div>
    </main>
  );
}
