import type { Metadata } from "next";
import Navbar from "@/modules/oraganisms/navbar";
import Footer from "@/modules/oraganisms/footer";

export const metadata: Metadata = {
  title: "FAQs | Easy Appoint",
  description: "Answers to common questions about hiring with Easy Appoint.",
};

export default function FaqsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
