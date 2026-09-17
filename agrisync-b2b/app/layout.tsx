

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgriSync B2B Dashboard",
  description: "B2B dashboard for AgriSync clients",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        inter.className applies the Inter font globally.
        h-full ensures the body stretches the full screen height.
      */}
      <body className={`${inter.className} h-full`}>
        {children}
      </body>
    </html>
  );
}