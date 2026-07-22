import { ReactNode } from "react";

type BadgeProps = {
  title: string;
  icon: ReactNode;
  className?: string;
};

export default function Badge({ title, icon, className = "" }: BadgeProps) {
  return (
    <main className={`flex gap-2 px-4 py-2 ${className}`}>
      {icon}
      <span className="uppercase">{title}</span>
    </main>
  );
}
