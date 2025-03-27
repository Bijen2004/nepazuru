import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../components/Navbar';
import { Toaster } from "sonner";

import "./globals.css";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NePazuru",
  description: "Puzzle Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main >{children}</main>
        <Footer/>
        
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
