import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vicenta Indumentaria",
  description: "Indumentaria feminina y más",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
