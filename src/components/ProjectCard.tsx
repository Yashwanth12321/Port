import { Project } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "./ui/badge"

export const ProjectCard = ( {project}: {project: Project}) => {
    return (
        <div className="flex flex-col space-y-4 border border-zinc-800 rounded-md p-6 hover:scale-105 transition-all">
            <div className="flex justify-center items-center ">
                {project.image ? <Image src={project.image} width={500} height={500} alt={project.title} /> : <Image src="/globe.svg" width={100} height={100} alt={project.title} />}
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
                {project.skills.map((skill)=>{
                    return <Badge variant="default" className="text-sm bg-zinc-800" key={skill}>{skill}</Badge>
                })}
            </div>

            <div>
                {/* links */}
                <div className="flex flex-row space-x-4">
                    <Link href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-105 transition-all">
                        <Image src="/github-mark/github-mark/github-mark-white.svg" width={20} height={20} alt="github" />
                    </Link>
                    <Link href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-105 transition-all">
                            {project.links.demo ? <Image src="/icons8-eye-64.png" width={20} height={20} alt="deployed link" /> : null}
                    </Link>
                </div>
            </div>
        </div>
    )
}