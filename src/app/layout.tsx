import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech X Mark 2",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className={`mt-7 ${inter.className}`}>
          <NavBar />
          <div className="mb-10"></div>
          {children}
        </div>
      </body>
    </html>
  );
}