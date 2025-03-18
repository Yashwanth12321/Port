import type { Metadata } from "next";
import "./globals.css";
import { Navdock } from "@/Navdock";

import { Quantico } from "next/font/google";

export const quantico = Quantico({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
  });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Yashwanth Napa's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
  <body className={`${quantico.className} antialiased`}>
    <div className="fixed bottom-10 left-0 w-full z-50">
      <Navdock />
    </div>
    {children}
  </body>
</html>

  );
}
