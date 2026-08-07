import { HiChip } from "react-icons/hi";
import { FaDatabase } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import { RiGraduationCapLine } from "react-icons/ri";

const sectors = [
  {
    icon: <HiChip />,
    title: "IT & Software",
  },
  {
    icon: <FaDatabase />,
    title: "AI & Data",
  },
  {
    icon: <TbSpeakerphone />,
    title: "Marketing",
  },
  {
    icon: <RiGraduationCapLine />,
    title: "E-Learning",
  },
];

export default function Sectors() {
  return (
      <main className="flex flex-wrap justify-center gap-2">
        {sectors.map((sector) => (
          <div
            key={sector.title}
            className="flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2"
          >
            <span className="text-sm">{sector.icon}</span>
            <span className="text-xs font-medium">{sector.title}</span>
          </div>
        ))}
      </main>
  );
}