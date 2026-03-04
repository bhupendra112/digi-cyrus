import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocial } from "@/components/layout/FloatingSocial";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Digi Cyrus | Engineering Digital Growth",
    template: "%s | Digi Cyrus",
  },
  description:
    "Premium website development, app development & digital marketing for Indian startups, SMEs, and D2C brands. Build digital assets that dominate markets.",
  icons: {
    icon: "/images/logos/digicyrus.jpeg",
  },
  openGraph: {
    title: "Digi Cyrus | Engineering Digital Growth",
    description:
      "Premium website development, app development & digital marketing for Indian brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-charcoal-dark focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <FloatingSocial />
      </body>
    </html>
  );
}
