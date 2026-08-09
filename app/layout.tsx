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

const title = "Easy Appoint | Recruitment for IT, AI, Marketing and E-Learning";
const description =
  "A specialist recruitment partner for teams building in IT, AI, Marketing and E-Learning.";

export const metadata: Metadata = {
  // Social crawlers need absolute urls — this is what /og/default.png resolves
  // against. Point it at the custom domain once one is attached.
  metadataBase: new URL("https://easy-appoint.vercel.app"),
  title,
  description,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Easy Appoint",
    type: "website",
    images: [
      {
        url: "/og/default.png",
        width: 2880,
        height: 1482,
        alt: "Easy Appoint — modern recruitment and staffing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/default.png"],
  },
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
