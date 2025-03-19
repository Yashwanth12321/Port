

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
        description: "A blog application built for minimal configuration and just content",
        skills: ["React.js", "TypeScript", "Tailwind CSS","ShadCn" , "Node.js", "Express.js", "MongoDB", "aws-ec2","aws-s3"],
        briefDescription: "A blog application built for minimal configuration and just content",
        links: {github: "https://github.com/Yashwanth12321/blog", demo: "http://bestsimpledemobucket.s3-website.ap-south-1.amazonaws.com"}
    },
    {
        image: "/projects/claim_management.png",
        title: "Claims Management System",
        description:"A claims management system built to streamline insurance claims process.",
        skills:["React.js", "TypeScript", "Tailwind CSS","ShadCn" , "Node.js", "Express.js", "MongoDB", "aws-ec2","aws-s3"],
        briefDescription: "A claims management system built to streamline insurance claims process.",
        links: {github: "https://github.com/Yashwanth12321/Claims_MangementP", demo: "http://claimfrontendaarogyaid.s3-website.ap-south-1.amazonaws.com"}
    },
    {
        image: "/projects/influencer.webp",
        title: "Influencer Selection Algorithm",
        description:"A way to identify most popular influencer based on score point from raw videos",
        skills:["Python", "Pandas", "Numpy", "MediaPipe", "OpenCV", "Deepface"],
        briefDescription: "A way to identify most popular influencer based on score point from raw videos",
        links: {github: "https://github.com/Yashwanth12321/influencer-analysis", demo: ""}
    },
    {
        image: "/projects/lms.webp",
        title: "Library Management System",
        description: "A library management system mobile application containing all required features including book issue/retrieval scan and more.",
        skills: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
        briefDescription: "A library management system mobile application containing all required features including book issue/retrieval scan and more.",
        links: {github: "https://github.com/Yashwanth12321/LMS", demo: ""}
    },
    {
        image: "/projects/vGIS.png",
        title: "Spatial visualization tool",
        description: "A spatial visualization tool to better visualize multiple data across India including Covid data, Gdp data, and gain insights",
        skills: ["React.js", "Javascript", "Tailwind CSS"],
        briefDescription: "A spatial visualization tool to better visualize multiple data across India including Covid data, Gdp data, and gain insights",
        links: {github: "https://github.com/Yashwanth12321/vGIS", demo: ""}
    }
    
]
