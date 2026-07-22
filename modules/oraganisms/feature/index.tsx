import StepCard from "@/modules/molecules/stepCard";
import Graph from "@/modules/atoms/graph";
import Checklist from "@/modules/atoms/checklist";
import Hiring from "@/modules/atoms/hiring";
import Globe from "@/modules/atoms/globe";

const data = [
  {
    count: "01",
    title: "Shortlist in Days",
    description:
      "Curated cadidates in 5-7 business days for most roles not weeks.",
    component: <Graph />,
  },
  {
    count: "02",
    title: "End To End Co-ordination",
    description:
      "We stay involved through delivery kickoff, milestones and sign-off.",
    component: <Checklist />,
  },
  {
    count: "03",
    title: "Pre-Vetted Network",
    description:
      "A curated bench of IT, AI, Marketing and E-Learning specialists ready to deploy.",
    component: <Hiring />,
  },
  {
    count: "04",
    title: "Remote Ready Hiring",
    description:
      "Hire across borders without setting up entities payroll and compliance handled.",
    component: <Globe />,
  },
];

export default function Feature() {
  return (
    <main className="border-t flex flex-col items-center border-neutral-200 pt-12">
      <div className="flex w-full flex-col sm:items-start items-center gap-4">
        <span className="text-blue-600 tracking-tight sm:text-lg text-md">
          Why Partner With Us
        </span>
        <h1 className="sm:text-4xl text-2xl tracking-tight sm:w-xl text-center sm:text-left">
          A specialist recruitment partner for teams building in IT, AI,
          Marketing and E-Learning
        </h1>
      </div>

      <div className="flex sm:flex-row flex-col gap-4 py-12">
        {data.map((item, index) => (
          <StepCard
            className="w-74 border-neutral-200"
            count={item.count}
            title={item.title}
            description={item.description}
            component={item.component}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
