import { Project } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "./ui/badge"

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="flex flex-col justify-between space-y-4 border border-zinc-800 rounded-md p-6 hover:scale-105 transition-all h-full">
            <div className="w-[300px] h-[200px] overflow-hidden rounded-md">
                {project.image ? (
                    <Image
                        src={project.image}
                        width={300}
                        height={200}
                        alt={project.title}
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <Image
                        src="/globe.svg"
                        width={100}
                        height={100}
                        alt={project.title}
                        className="mx-auto"
                    />
                )}
            </div>

            <div className="flex flex-row space-x-4">
                <div>
                    <h1 className="text-lg">{project.title}</h1>
                </div>
            </div>
            <div className="flex flex-col">
                {/* brief description */}
                <p className="text-sm">{project.briefDescription}</p>
            </div>
            <div className="flex flex-wrap gap-2 ">
                {/* skills */}
                {project.skills.map((skill) => {
                    return <Badge variant="default" className="text-sm bg-zinc-800" key={skill}>{skill}</Badge>
                })}
            </div>



            <div className="flex flex-row justify-between">
                {/* links */}
                <div className="flex flex-row space-x-4">
                    <Link href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-105 transition-all">
                        <Image src="/github-mark/github-mark/github-mark-white.svg" width={20} height={20} alt="github" />
                    </Link>
                    <Link href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-105 transition-all">
                        {project.links.demo ? <Image src="/icons8-eye-64.png" width={20} height={20} alt="deployed link" /> : null}
                    </Link>
                </div>
                <div className="flex justify-between gap-4 items-center">
                {/* Deployed and Live */}
                {/* <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 border border-zinc-800  rounded-full animate-ping ${
                        project.status === "deployed"
                          ? "bg-green-500"
                          : project.status === "inactive"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}>
                    </div>
                    <Badge variant="outline" className="text-sm bg-zinc-800" key={project.status}>{project.status}</Badge>
                </div> */}
            </div>
            </div>
            
        </div>
    )
}