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
    <main className="flex flex-col lg:flex-row items-center justify-between gap-8 rounded-3xl border border-neutral-200 bg-white p-6 lg:p-8">
      <div className="text-center lg:text-left">
        <h1 className="text-lg text-blue-600">Sectors We Serve</h1>

        <span className="mt-2 block text-2xl lg:text-3xl tracking-tight">
          Deep expertise where it matters
        </span>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-end gap-3">
        {sectors.map((sector) => (
          <div
            key={sector.title}
            className="flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2"
          >
            <span className="text-lg">{sector.icon}</span>
            <span className="text-sm font-medium">{sector.title}</span>
          </div>
        ))}
      </div>
    </main>
  );
}