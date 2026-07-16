import type { IconType } from "react-icons";

export interface Credential {
    id: string;
    title: string;
    description: string;
    type: string;
    lastSynced: string;
    icon: IconType;
    isPrimary?: boolean;
}