import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine, RiMenu4Line } from "react-icons/ri";

import Logo from "../branding/Logo";

import { landingNavigation } from "../../constants/navigation";
import { ROUTES } from "../../routes/routes";
import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

export default function Navbar() {
    return (
        <motion.header
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{
                duration: MOTION.duration,
                ease: EASING.standard,
            }}
            className="sticky top-0 z-50 border-b border-white/8 bg-[#07070A]/75 backdrop-blur-2xl"
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

                {/* Brand */}

                <Link
                    to={ROUTES.LANDING}
                    className="transition-opacity duration-300 hover:opacity-90"
                >
                    <Logo className="h-11 w-auto" />
                </Link>

                {/* Desktop Navigation */}

                <nav className="hidden items-center gap-10 lg:flex">

                    {landingNavigation.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
                        >
                            {item.label}
                        </a>
                    ))}

                </nav>

                {/* Actions */}

                <div className="hidden items-center gap-4 lg:flex">

                    <Link
                        to={ROUTES.APP}
                        className="rounded-full px-5 py-3 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white"
                    >
                        DEMO
                    </Link>

                    <Link
                        to={ROUTES.APP}
                        className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500"
                    >
                        Launch Vault

                        <RiArrowRightUpLine />
                    </Link>

                </div>

                {/* Mobile */}

                <button
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white transition-all duration-300 hover:border-violet-500/20 lg:hidden"
                >
                    <RiMenu4Line className="text-xl" />
                </button>

            </div>
        </motion.header>
    );
}