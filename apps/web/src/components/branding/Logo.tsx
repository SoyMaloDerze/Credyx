interface LogoProps {
    className?: string;
}

import logo from "../../assets/branding/credyx-logo.png";

export default function Logo({
    className,
}: LogoProps) {
    return (
        <img
            src={logo}
            alt="Credyx"
            className={className}
        />
    );
}