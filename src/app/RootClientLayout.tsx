'use client';  

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenu";
import Loader from "./loader";
import { ThemeProvider } from "@/components/theme-provider";

const FloatingNavbar = dynamic(() => import('@/components/navbar/FloatingNavbar'), { ssr: false });

export default function RootClientLayout({ children }: { children: React.ReactNode }) {
  const [showNavbar, setShowNavbar] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 2300); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showNavbar && <FloatingNavbar className="app_nav" navItems={navMenus} />}
      <Loader />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
    </>
  );
}
