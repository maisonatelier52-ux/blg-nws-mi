import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Briefline — Daily Intelligence, Independent Journalism & Editorial Essays",
  description:
    "Rigorous, nonpartisan reporting on macroeconomic policy, global diplomacy, legislative power, and technological innovation.",
  openGraph: {
    title: "The Briefline — Independent Journalism & Editorial Essays",
    description:
      "Rigorous reporting on macroeconomic policy, global diplomacy, legislative power, and technological innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-[#080809] text-zinc-100 selection:bg-white selection:text-black">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
