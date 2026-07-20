import Logo from "@/modules/atoms/logo";
import Button from "@/modules/atoms/button";
import Link from "next/link";

const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/",
  },
  {
    title: "Services",
    link: "/",
  },
  {
    title: "FAQs",
    link: "/",
  },
  {
    title: "Reviews",
    link: "/",
  },
];

export default function Navbar() {
  return (
    <main className="bg-white border-b border-neutral-300 flex items-center justify-between px-18 py-1">
      <Logo />
      <div className="flex gap-4">
        {navlinks.map((item, index) => (
          <Link className="text-sm tracking-tight" key={index} href={item.link}>
            {item.title}
          </Link>
        ))}
      </div>
      <Button name="Contact Us" style="bg-black text-white hover:text-black hover:bg-white rounded-lg border border-black" link="/contact" />
    </main>
  );
}
