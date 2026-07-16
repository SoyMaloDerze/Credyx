import type { Credential } from "../types/credential";

import {
    RiBookOpenLine,
    RiBriefcaseLine,
    RiFolderUserLine,
    RiGraduationCapLine,
    RiLinksLine,
    RiUserStarLine,
} from "react-icons/ri";

export const mockCredentials: Credential[] = [
    {
        id: crypto.randomUUID(),
        title: "Software Engineer Resume",
        description:
            "Your primary resume tailored for software engineering opportunities and technical applications.",
        type: "Resume",
        lastSynced: "2 hours ago",
        icon: RiFolderUserLine,
        isPrimary: true,
    },
    {
        id: crypto.randomUUID(),
        title: "Professional Experience",
        description:
            "Employment history and responsibilities across previous roles.",
        type: "Experience",
        lastSynced: "Yesterday",
        icon: RiBriefcaseLine,
    },
    {
        id: crypto.randomUUID(),
        title: "Education",
        description:
            "Degrees, certifications and academic qualifications.",
        type: "Education",
        lastSynced: "3 days ago",
        icon: RiGraduationCapLine,
    },
    {
        id: crypto.randomUUID(),
        title: "Projects Portfolio",
        description:
            "Highlighted projects ready to showcase your skills.",
        type: "Projects",
        lastSynced: "Today",
        icon: RiBookOpenLine,
    },
    {
        id: crypto.randomUUID(),
        title: "Professional Links",
        description:
            "GitHub, LinkedIn, portfolio website and other important links.",
        type: "Links",
        lastSynced: "1 hour ago",
        icon: RiLinksLine,
    },
    {
        id: crypto.randomUUID(),
        title: "Personal Profile",
        description:
            "Core identity information used across applications.",
        type: "Profile",
        lastSynced: "5 hours ago",
        icon: RiUserStarLine,
    },
];