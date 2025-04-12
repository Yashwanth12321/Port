'use client';

import * as motion from "motion/react-client"
import { Experience, experiences } from "@/data/experience";
import Image from 'next/image';
import { projects, Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import Footer from "@/components/footer";
import Dino from "@/design/Dino";

export default function Home() {
  const transition = {
    duration: 0.3,
    delay: 0.4,
    ease: "easeInOut"
  }

  return (
    <motion.main initial={{ filter: "blur(10px) y:20" }} animate={{ filter: "blur(0px) y:0" }} exit={{ filter: "blur(10px)" }} transition={transition}>


      <div className="max-w-3xl mt-10 mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-lg hover:underline hover:text-blue-500 transition-all">Home</Link>
            <Link href="/learnings" className="text-lg hover:underline hover:text-blue-500 transition-all">Learnings</Link>
          </div>
        </div>


        <div className="flex flex-col items-center justify-center pt-10">
          <div className="">
            <Image className="rounded-full w-20" src="/seneca.png" alt="seneca" width={40} height={40} />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">Yashwanth Napa</h1>
            <p className="text-lg">Engineer</p>

            <div className="flex items-center space-x-4 mt-4">
              {/* "I like" section */}
              <div className="text-3xl font-bold flex items-center flex-[1]">
                <h1>I like</h1>
              </div>

              {/* Description section */}
              <div className="flex flex-col gap-2 flex-[5]">
                <p className="text-lg">Building stuff if it is useful or fun</p>
                <p className="text-lg">Exploring web dev, AI/ML, security, game dev, and more</p>
                <p className="text-lg">Reading books</p>
              </div>
            </div>

          </div>
          
          
        </div>
        <br />
        <hr className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent border-0" />
        <br />
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold"> Work experience</h1>

          </div>
          <div className="w-full">
            {experiences.map((exp: Experience) => (
              <div key={exp.company} className="flex flex-row space-x-4 gap-4 mb-4 mt-4 border border-zinc-800 rounded-md p-6 hover:scale-105 transition-all  ">
                
                <div className="flex gap-3 items-center">
                  
                  <Image
                    src={"/SRF-logo.png"}
                    width={45}
                    height={45}
                    alt={exp.company}
                    className="rounded-full"
                  />

                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold underline hover:no-underline text-lg">
                    {exp.company}
                  </h2>
                  <p className="text-lg text-zinc-300">{exp.title} | {exp.location} | {exp.startDate} - {exp.endDate}</p>

                  <ul className="text-sm list-disc text-zinc-600">
                    {exp.description.map((desc: string) => (
                      <li key={desc}>{desc}</li>
                    ))}
                  </ul>
                  
                  
                </div>
                

              </div>
            ))}
          </div>
        </div>
        <br />
        <hr className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent border-0" />
        <br />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Some things I have built</h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-4">
            
            {projects.map((project: Project) => (
              <div key={project.title}>
                <ProjectCard project={project} />
            
              </div>
            ))}

            <Link className="flex flex-col items-center justify-center space-y-4 border border-zinc-800 rounded-md p-6 hover:scale-105 transition-all" href="/projects">
              Checkout other stuff
            </Link>
          </div>
        </div>
        <div className="">
          <div className="">
            <h1 className="text-2xl">Enjoy the nostalgia</h1>
            <Dino />

          </div>

        </div>
        <br />
      </div>
      <br />
      <hr className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent border-0" />
      <br />
      <br />
      <br />
      <Footer />
    </motion.main>
  );
}




