"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import Logo from "@/modules/atoms/logo";
import Button from "@/modules/atoms/button";

const navlinks = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/" },
  { title: "Services", link: "/" },
  { title: "FAQs", link: "/" },
  { title: "Reviews", link: "/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-18 items-center justify-between px-6 lg:px-18">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navlinks.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="tracking-tight transition-colors duration-200 hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              name="Contact Us"
              link="/contact"
              style="px-6 bg-[#abf007] text-black duration-300 rounded-full border border-black"
            />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 5 }}
            onClick={() => setOpen(true)}
            className="lg:hidden rounded-lg p-2 hover:bg-neutral-100"
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 30,
                mass: 0.8,
              }}
              className="fixed left-0 top-0 z-60 flex h-screen w-85 max-w-[88vw] flex-col border-r border-neutral-200 bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-200 p-6">
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Logo />
                </motion.div>

                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 hover:bg-neutral-100"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Navigation */}
              <div className="flex flex-1 flex-col px-6 py-8">
                {navlinks.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.35,
                    }}
                  >
                    <Link
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="block border-b border-neutral-100 py-5 text-lg font-medium tracking-tight transition-all duration-200 hover:translate-x-2 hover:text-blue-600"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="mt-auto pt-8"
                >
                  <Button
                    name="Contact Us"
                    link="/contact"
                    style="w-full justify-center rounded-full border border-black bg-[#abf007] text-black hover:scale-110 duration-300"
                  />
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}