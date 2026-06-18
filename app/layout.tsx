import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

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
    <html lang="en">
      <body className="bg-ink font-body text-ivory antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
