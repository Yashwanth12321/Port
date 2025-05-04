import type { Metadata } from "next";
import "./globals.css";
import { Navdock } from "@/Navdock";
import { Analytics } from "@vercel/analytics/react"
import { Quantico } from "next/font/google";

export const quantico = Quantico({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
  });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Yashwanth Napa's portfolio",
  icons : {
    icon: '/favicon.png',
  },
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
    <Analytics/>
  </body>
</html>

  );
}
