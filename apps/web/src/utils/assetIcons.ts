import type { IconType } from "react-icons";

import {
    RiBookOpenLine,
    RiBriefcaseLine,
    RiFolderUserLine,
    RiGraduationCapLine,
    RiLinksLine,
    RiShieldCheckLine,
    RiUserStarLine,
    RiWallet3Line,
} from "react-icons/ri";

export function getAssetIcon(type: string): IconType {
    switch (type) {
        case "Professional":
            return RiFolderUserLine;

        case "Identity":
            return RiUserStarLine;

        case "Projects":
            return RiBookOpenLine;

        case "Education":
            return RiGraduationCapLine;

        case "Developer":
            return RiBriefcaseLine;

        case "Wallet":
            return RiWallet3Line;

        case "Social":
            return RiLinksLine;

        case "Certificates":
            return RiShieldCheckLine;

        default:
            return RiFolderUserLine;
    }
}