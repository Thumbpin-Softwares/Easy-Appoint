type ButtonProps = {
  name: string;
  link: string;
  style?: string;
};

import Link from "next/link";

export default function Button({ name, link, style = "" }: ButtonProps) {
  return (
    <Link className={`px-4 py-2 duration-300 tracking-tight hover:scale-105 ${style}`} href={link}>
      {name}
    </Link>
  );
}
