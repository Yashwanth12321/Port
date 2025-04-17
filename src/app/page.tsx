'use client';

import * as motion from "motion/react-client"
import { Experience, experiences } from "@/data/experience";
import Image from 'next/image';
import { projects, Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import Footer from "@/components/footer";
import { useState } from "react";
import Dino from "@/design/Dino";
import { ChevronRight } from "lucide-react";

export default function Home() {
  const transition = {
    duration: 0.6,
    delay: 0.3,

    ease: "easeInOut"
  }

  const [openDrawer, setOpenDrawer] = useState<string | null>(null);

  const toggleDrawer = (company: string) => {
    if (openDrawer === company) setOpenDrawer(null);
    else setOpenDrawer(company);
  }

  return (
    <motion.main initial={{ opacity: 1, filter: "blur(10px) y:20" }} animate={{ opacity: 1, filter: "blur(0px) y:0" }} exit={{ opacity: 1, filter: "blur(10px)" }} transition={transition}>


      <div className="max-w-3xl mt-10 mx-auto px-4">

        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              opacity: [0, 1, 1],
              filter: ["blur(10px)", "blur(10px)", "blur(0px)"]
            }}
            transition={{ delay: 0.2, duration: 0.6, times: [0, 0.666, 1] }}
          >
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-lg hover:underline hover:text-blue-500 transition-all">Home</Link>
              <Link href="/learnings" className="text-lg hover:underline hover:text-blue-500 transition-all">Learnings</Link>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: [0, 1, 1],
            filter: ["blur(10px)", "blur(10px)", "blur(0px)"]
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            times: [0, 0.666, 1],
          }}
        >
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
                  <h2>I like</h2>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: [0, 1, 1],
            filter: ["blur(10px)", "blur(10px)", "blur(0px)"]
          }}
          transition={{ delay: 0.4, duration: 0.3, times: [0, 0.666, 1], }}
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold"> Work experience</h1>

            </div>
            <div className="w-full">
              {experiences.map((exp: Experience) => (

                <div onClick={() => toggleDrawer(exp.company)} key={exp.company} className="flex flex-row space-x-4 gap-4 mb-4 mt-4 border border-zinc-800 rounded-md p-6 hover:scale-105 transition-all  ">
                  <div className="flex items-center">
                    <Image
                      src={"/SRF-logo.png"}
                      width={45}
                      height={45}
                      alt={exp.company}
                      className="rounded-full"
                    />
                  </div>


                  <div className="flex flex-col ">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-bold underline hover:no-underline text-lg">
                          {exp.company}
                        </h2>
                        <p className="text-lg text-zinc-300">{exp.title} | {exp.location} | {exp.startDate} - {exp.endDate}</p>
                      </div>
                      <ChevronRight
                        className={`transition-transform duration-300 ${openDrawer === exp.company ? "rotate-90" : "rotate-0"
                          }`}
                      />
                    </div>

                    <div
                      className={`transition-all duration-700 ease-in-out overflow-hidden ${openDrawer === exp.company ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <ul className="text-sm list-disc text-zinc-600 ml-4 mt-2">
                        {exp.description.map((desc: string) => (
                          <li key={desc}>{desc}</li>
                        ))}
                      </ul>
                    </div>


                  </div>


                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: [0, 1, 1],
            filter: ["blur(10px)", "blur(10px)", "blur(0px)"]
          }}
          transition={{ delay: 0.7, duration: 0.3, times: [0, 0.666, 1] }}
        >
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
        </motion.div>
        <br />
        <hr className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent border-0" />
        <br />
        <motion.div
          initial={{ opacity: 1, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 1.1, duration: 0.3 }}
        >
          <div className="">
            <div className="">
              <Dino />

            </div>

          </div>
        </motion.div>
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




