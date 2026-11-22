import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tri-Valley Home Health Care, Inc. | Stockton & Northern CA Home Health",
    template: "%s | Tri-Valley Home Health Care, Inc.",
  },
  description:
    "State-licensed, CHAP-accredited, and Medicare & Medi-Cal certified home health care serving Alameda, San Joaquin, Stanislaus, and Sacramento counties since 2000.",
  icons: {
    icon: "/images/trivalley-icon.png",
    apple: "/images/trivalley-icon.png",
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
      className={`${jakarta.variable} ${notoSans.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
