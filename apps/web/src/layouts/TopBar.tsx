import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
    RiMenu4Line,
    RiUserLine,
    RiWallet3Line,
} from "react-icons/ri";

import Logo from "./Logo";

import { navigation } from "../constants/navigation";
import { MOTION, fade } from "../constants/motion";
import { EASING } from "../constants/easing";

interface TopBarProps {
    onMenuClick: () => void;
}

export default function TopBar({
    onMenuClick,
}: TopBarProps) {
    return (
        <>
            {/* Shared application navigation */}
            <motion.header
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: MOTION.duration,
                    ease: EASING.standard,
                }}
                className="sticky top-0 z-50 border-b border-white/5 bg-[#09090B]/90 backdrop-blur-2xl"
            >
                <div className="mx-auto flex h-18 w-full max-w-360 items-center justify-between px-6 lg:px-10">
                    <Logo />

                    {/* Desktop navigation */}
                    <nav className="hidden items-center gap-2 lg:flex">
                        {navigation.map((item) => (
                            <NavLink key={item.path} to={item.path}>
                                {({ isActive }) => (
                                    <motion.div
                                        whileHover={{
                                            scale: 1.03,
                                        }}
                                        whileTap={{
                                            scale: 0.98,
                                        }}
                                        transition={{
                                            duration: MOTION.duration,
                                            ease: EASING.standard,
                                        }}
                                        className={[
                                            "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200",
                                            isActive
                                                ? "border-violet-500/40 bg-violet-500/15 text-white shadow-[0_0_24px_rgba(139,92,246,.28)]"
                                                : "border-transparent text-zinc-400 hover:border-violet-500/20 hover:bg-violet-500/8 hover:text-white",
                                        ].join(" ")}
                                    >
                                        {item.label}
                                    </motion.div>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {/* Wallet */}
                        <motion.button
                            whileHover={{
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                            transition={{
                                duration: MOTION.duration,
                                ease: EASING.standard,
                            }}
                            className="
                                hidden
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-violet-500/20
                                bg-violet-500/10
                                px-4
                                py-2.5
                                text-sm
                                font-medium
                                text-violet-300
                                transition-all
                                duration-200
                                hover:border-violet-400/40
                                hover:bg-violet-500/15
                                hover:text-white
                                md:flex
                            "
                        >
                            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgb(167_139_250)]" />

                            <RiWallet3Line className="text-base" />

                            Wallet
                        </motion.button>

                        {/* Profile */}
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.96,
                            }}
                            transition={{
                                duration: MOTION.duration,
                                ease: EASING.standard,
                            }}
                            className="
                                hidden
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                text-zinc-300
                                transition-all
                                duration-200
                                hover:border-violet-500/30
                                hover:bg-violet-500/10
                                hover:text-white
                                md:flex
                            "
                        >
                            <RiUserLine className="text-lg" />
                        </motion.button>

                        {/* Mobile menu */}
                        <motion.button
                            onClick={onMenuClick}
                            whileTap={{
                                scale: 0.95,
                            }}
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                text-zinc-300
                                transition-colors
                                duration-200
                                hover:border-violet-500/30
                                hover:bg-violet-500/10
                                hover:text-white
                                lg:hidden
                            "
                        >
                            <RiMenu4Line className="text-xl" />
                        </motion.button>
                    </div>
                </div>
            </motion.header>
        </>
    );
}