import type { IconType } from "react-icons";

export type AssetColor =
    | "emerald"
    | "cyan"
    | "violet"
    | "amber"
    | "blue"
    | "orange"
    | "pink"
    | "sky"
    | "slate";


export type AssetType =
    | "Resume"
    | "Portfolio"
    | "Experience"
    | "Education"
    | "Document"
    | "Certificates"
    | "Profile"
    | "Website"
    | "Identity";

export type AssetCollection =
    | "Professional"
    | "Projects"
    | "Education"
    | "Achievements"
    | "Developer"
    | "Identity";

export interface LibraryAsset {
    id: string;

    title: string;

    description: string;

    type: AssetType;

    collection: AssetCollection;

    icon: IconType;

    color: AssetColor;

    createdAt: string;

    updatedAt: string;

    size: string;

    tags: string[];

    isFavorite: boolean;

    isPinned: boolean;

    isPrimary: boolean;

    blockchain: {
        network: string;

        synced: boolean;

        verified: boolean;

        walletAddress: string;

        txHash: string;

        lastSync: string;
    };
}