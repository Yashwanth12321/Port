

export type Project = {
    image: string;
    title: string;
    description: string;
    skills: string[];
    briefDescription: string;
    links: {github: string, demo: string};
}

export const projects: Project[] = [
    {
        image: "/projects/blog.png",
        title: "Blog Application",
        description: "A blog application built with Next.js and TypeScript.",
        skills: ["React.js", "TypeScript", "Tailwind CSS","ShadCn" , "Node.js", "Express.js", "MongoDB", "aws-ec2","aws-s3"],
        briefDescription: "A blog application built with Next.js and TypeScript.",
        links: {github: "https://github.com/Yashwanth12321/blog", demo: "https://blog-app-username.vercel.app"}
    },
    {
        image: "/projects/claim_management.png",
        title: "Claims Management System",
        description:"A claims management system built with React.js and TypeScript.",
        skills:["React.js", "TypeScript", "Tailwind CSS","ShadCn" , "Node.js", "Express.js", "MongoDB", "aws-ec2","aws-s3"],
        briefDescription: "A claims management system",
        links: {github: "https://github.com/Yashwanth12321/Claims_MangementP", demo: "https://claims-management-system-username.vercel.app"}
    },
    {
        image: "",
        title: "Influencer Selection Algorithm",
        description:"A way to identify most popular influencer based on score point from raw videos",
        skills:["Python", "Pandas", "Numpy", "MediaPipe", "OpenCV", "Deepface"],
        briefDescription: "A way to identify most popular influencer based on score point from raw videos",
        links: {github: "https://github.com/Yashwanth12321/influencer-analysis", demo: ""}
    },
    {
        image: "",
        title: "Library Management System",
        description: "A library management system built with Flutter",
        skills: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
        briefDescription: "A library management system built with Flutter",
        links: {github: "https://github.com/Yashwanth12321/LMS", demo: ""}
    },
    {
        image: "",
        title: "Spatial visualization tool",
        description: "A spatial visualization tool built with React",
        skills: ["React.js", "Javascript", "Tailwind CSS"],
        briefDescription: "A spatial visualization tool built with React",
        links: {github: "https://github.com/Yashwanth12321/vGIS", demo: ""}
    }
    
]
