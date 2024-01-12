import type { Metadata } from "next";
import { Inter, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/organisms/StarBackground";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "700", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OPREC HMIF 2024",
  description:
    "Website yang dibuat untuk pendaftaran calon staff HMIF UNSRI periode 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-[#030014] overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
