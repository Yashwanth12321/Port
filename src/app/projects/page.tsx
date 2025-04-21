"use client";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Project } from "@/data/projects";
import { motion } from "framer-motion"; // fixed import

const cardVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Projects() {
  return (
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
          <h1 className="text-2xl text-center font-bold sm:text-3xl md:text-4xl lg:text-5xl underline hover:no-underline pb-4">
            Projects
          </h1>
          <br />
          <hr className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent border-0" />
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 mt-4">
            {projects.filter((project) => project.type === "serious").map((project: Project, index: number) => (
              <motion.div
                key={project.title}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
