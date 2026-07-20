type ButtonProps = {
  name: string;
  link: string;
  style?: string;
};

import Link from "next/link";

export default function Button({ name, link, style = "" }: ButtonProps) {
  return (
    <Link className={`${style}`} href={link}>
      {name}
    </Link>
  );
}
