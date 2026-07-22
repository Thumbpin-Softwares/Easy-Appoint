import Badge from "@/modules/atoms/badge";
import { ReactNode } from "react";

type StepCardProps = {
  title: string;
  description: string;
  component: ReactNode;
  count: string;
  className?: string;
};

export default function StepCard({
  title,
  description,
  component,
  count,
  className = "",
}: StepCardProps) {
  return (
    <main className={`border flex flex-col gap-6 justify-between p-4 rounded-3xl ${className}`}>
      <div className="flex flex-col gap-2">
        <Badge className="bg-blue-600 w-fit text-xs font-semibold rounded-full text-white " title={count} />
        <span className="tracking-tight">{title}</span>
      </div>
      <div>{component}</div>
      <div>
        <p className="text-sm text-neutral-600 tracking-tight">{description}</p>
      </div>
    </main>
  );
}
