interface LogoIconProps {
    className?: string;
}

import logoIcon from "../../assets/branding/credyx-icon.png";

export default function LogoIcon({
    className,
}: LogoIconProps) {
    return (
        <img
            src={logoIcon}
            alt="Credyx"
            className={className}
        />
    );
}