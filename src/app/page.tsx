"use client";

import dynamic from "next/dynamic";



const Pagebox = dynamic(() => import("@/components/core/Pagebox"));
const HomeSection1=dynamic(() => import("@/components/Home/Section1"));
const HomeSection2=dynamic(() => import("@/components/Home/Section2"));
const HomeSection3=dynamic(() => import("@/components/Home/Section3"));
const HomeSection4=dynamic(() => import("@/components/Home/Section4"));
export default function Home() {

  return (
    <div>
  
    <Pagebox>
      <HomeSection1 id="hero" />
      <HomeSection3 id="experiences" />
    
      <HomeSection2 id="skills" />
      <HomeSection4 id="projects" />
      
    </Pagebox>
     
    </div>
  );
}
