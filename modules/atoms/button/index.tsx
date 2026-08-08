import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  name: string;
  link: string;
  style?: string;
};

import Link from "next/link";

export default function Button({ name, link, style = "" }: ButtonProps) {
  return (
    <Link className="flex items-center" href={link}>
      <span className={`px-4 py-2 duration-300 border-none! tracking-tight ${style}`}>{name}</span>
      <span className={`p-2! ${style} border-none!`}><ArrowUpRight /></span>
    </Link>
  );
}
