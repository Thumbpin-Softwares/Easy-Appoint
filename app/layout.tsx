import type { Metadata } from "next";
import { Varela_Round, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/modules/atoms/smooth-scroll";
import "./globals.css";

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Appoint | Recruitment for IT, AI, Marketing and E-Learning",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${varelaRound.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
