

export type Project = {
    image: string;
    title: string;
    description: string;
    skills: string[];
    briefDescription: string;
    status: "deployed" | "not deployed" | "inactive" | "";
    links: {github: string, demo: string};
    type:"serious" | "fun";
}

export const projects: Project[] = [
    {
        image:"/projects/repohelp.png",
        title:"Chat with Github Repo",
        description:"A cli interface to understand that github repo better to make contributions",
        skills:["gemini api", "github api", "python","ollama","hugging-face","RAG"],
        briefDescription: "A cli interface to understand that github repo better to make contributions",
        status:"not deployed",
        type:"serious",
        links: {github: "https://github.com/Yashwanth12321/repohelp", demo: ""}
    },
    {
        image: "/projects/blog.png",
        title: "Blog Application",
        description: "A blog application built for minimal configuration and just content",
        skills: ["React.js", "TypeScript", "Tailwind CSS","ShadCn" , "Node.js", "Express.js", "MongoDB", "aws-ec2","aws-s3"],
        briefDescription: "A blog application built for minimal configuration and just content",
        status:"deployed",
        type:"serious",
        links: {github: "https://github.com/Yashwanth12321/blog", demo: "http://bestsimpledemobucket.s3-website.ap-south-1.amazonaws.com"}
    },
    {
        image: "/projects/claim_management.png",
        title: "Claims Management System",
        description:"A claims management system built to streamline insurance claims process.",
        skills:["React.js", "TypeScript", "Tailwind CSS","ShadCn" , "Node.js", "Express.js", "MongoDB", "aws-ec2","aws-s3"],
        briefDescription: "A claims management system built to streamline insurance claims process.",
        status:"deployed",
        type:"serious",
        links: {github: "https://github.com/Yashwanth12321/Claims_MangementP", demo: "http://claimfrontendaarogyaid.s3-website.ap-south-1.amazonaws.com"}
    },
    {
        image: "/projects/influencer.png",
        title: "Influencer Selection Algorithm",
        description:"A way to identify most popular influencer based on score point from raw videos",
        skills:["Python", "Pandas", "Numpy", "MediaPipe", "OpenCV", "Deepface"],
        briefDescription: "A way to identify most popular influencer based on score point from raw videos",
        status:"not deployed",
        type:"fun",
        links: {github: "https://github.com/Yashwanth12321/Influencer-anaysis", demo: ""}
    },
    {
        image: "/projects/lms.webp",
        title: "Library Management System",
        description: "A library management system mobile application containing all required features including book issue/retrieval scan and more.",
        skills: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
        briefDescription: "A library management system mobile application containing all required features including book issue/retrieval scan and more.",
        status:"not deployed",
        type:"serious",
        links: {github: "https://github.com/Yashwanth12321/LMS", demo: ""}
    },
    {
        image: "/projects/vGIS.png",
        title: "Spatial visualization tool",
        description: "A spatial visualization tool to better visualize multiple data across India including Covid data, Gdp data, and gain insights",
        skills: ["React.js", "Javascript", "Tailwind CSS"],
        briefDescription: "A spatial visualization tool to better visualize multiple data across India including Covid data, Gdp data, and gain insights",
        status:"not deployed",
        type:"serious",
        links: {github: "https://github.com/Yashwanth12321/vGIS", demo: ""}
    },
    {
        image: "/projects/ling.png",
        title: "Realtime Voice translator",
        description: "A realtime voice translator built to translate audio to text and vice versa",
        skills: ["python", "docker", "api", "ASR", "TTS"],
        briefDescription: "A realtime voice translator built to translate audio to text and vice versa",
        status:"not deployed",
        type:"fun",
        links: {github: "https://github.com/Yashwanth12321/LinguasyncV2", demo: ""}
    },

    {
        image:"/projects/spotify.png",
        title:"Spotify Playlist downloader",
        description:"A simple ui interface to download spotify playlist",
        skills:["python", "spotify api"],
        briefDescription: "A simple ui interface to download spotify playlist",
        status:"not deployed",
        type:"fun",
        links: {github: "https://github.com/Yashwanth12321/Spotube", demo: ""}
    },
    {
        image:"/projects/url.png",
        title:"Url Shortner",
        description:"A simple url shortner built to shorten urls",
        skills:["go", "gin", "postgres","redis"],
        briefDescription: "A simple url shortner built to shorten urls",
        status:"not deployed",
        type:"fun",
        links: {github: "https://github.com/Yashwanth12321/UrlShortner", demo: ""}
    }
    
]
