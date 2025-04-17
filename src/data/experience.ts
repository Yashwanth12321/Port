export type Experience = {
    title: string;
    company: string;
    logo: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
}

export const experiences: Experience[] = [
    {
        title: "Software Intern",
        logo: "../../SRF-logo.png",
        company: "STF-LTD",
        location: "Chennai",
        startDate: "July 2024",
        endDate: "August 2024",
        description: ["Worked on developing features for Policy Eligibility Matrix enterpise HR PW application focusing on reward management module for employees benifit calculations. ",
            "Implemented CI/CD pipelines using Azure Devops for automated build and development cycles to on premise servers.",
            "Learnings include, Angular for frontend development, Azure Devops for CI/CD pipelines, service workers for offline support for PWA, and agile methodology for software development."
        ],
    }
]
