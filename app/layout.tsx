import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luís Otávio",
  description: "Site/portfólio do Luís Otávio, desenvolvido em NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} antialiased bg-background-950 text-text-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
