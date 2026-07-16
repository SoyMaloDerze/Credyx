import type { Profile } from "../types/profile";

export const mockProfile: Profile = {
    firstName: "Güero",
    lastName: "Derze",
    displayName: "SoyMaloDerze",

    profession: "Software Developer",

    summary:
        "Passionate software developer focused on building premium user experiences with React, TypeScript and modern web technologies.",

    email: "derze@example.com",
    phone: "+234 801 234 5678",

    country: "Nigeria",
    city: "Asaba",
    timezone: "Africa/Lagos",

    website: "https://derze.dev",
    github: "https://github.com/Derze",
    linkedin: "https://linkedin.com/in/Derze",
    x: "https://x.com/Derze",

    skills: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Tailwind CSS",
        "Framer Motion",
    ],

    workPreference: "Remote",

    employmentType: [
        "Full-time",
        "Contract",
    ],

    walletAddress:
        "0x74F3A97D3C6B0E92AE",

    monadVerificationStatus: "verified",

    completion: 82,
};