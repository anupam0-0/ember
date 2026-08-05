import type { Metadata } from "next";
import { Outfit, Inter, Playfair_Display, Gilda_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const gilda = Gilda_Display({
  variable: "--font-gilda",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ember Street Kitchen — Flame-Grilled Street Food",
  description:
    "Ember Street Kitchen is a flame-grilled street food stall serving smoke-charred burgers, wraps, loaded fries and fresh drinks, made to order, stall-fresh, every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${playfair.variable} ${gilda.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-offwhite text-ink-2 font-sans">
        {children}
      </body>
    </html>
  );
}
