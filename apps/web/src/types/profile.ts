import type { VerificationStatus } from "../constants/verification";


export interface Profile {
    firstName: string;
    lastName: string;
    displayName: string;

    profession: string;
    summary: string;

    email: string;
    phone: string;

    country: string;
    city: string;
    timezone: string;

    website: string;
    github: string;
    linkedin: string;
    x: string;

    skills: string[];

    workPreference: "Remote" | "Hybrid" | "On-site";

    employmentType: (
        | "Full-time"
        | "Part-time"
        | "Contract"
        | "Freelance"
    )[];

    walletAddress: string;
    monadVerificationStatus: VerificationStatus;

    completion: number;
}