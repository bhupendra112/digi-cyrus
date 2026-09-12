import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocial } from "@/components/layout/FloatingSocial";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
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
    <html lang="en" className={`${GeistSans.variable} ${poppins.variable}`}>
      <body
        className={`${GeistSans.className} flex min-h-screen flex-col bg-[#f7f7f8] text-base font-normal text-gray-900 antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingSocial />
      </body>
    </html>
  );
}
