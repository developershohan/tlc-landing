import type { Metadata } from "next";
import { Marcellus } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thames Luxury Charters | Luxury Boats For Any Occasion",
  description:
    "Private charter vessels on the River Thames for weddings, corporate events and parties. The No.1 choice for private event charters since 1993.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={marcellus.variable}>
      <body className="bg-ink font-body text-ivory antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
