import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
    RiCloseLine,
    RiUserLine,
    RiWallet3Line,
} from "react-icons/ri";

import Logo from "./Logo";

import { navigation } from "../constants/navigation";
import { MOTION } from "../constants/motion";
import { EASING } from "../constants/easing";

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileSidebar({
    isOpen,
    onClose,
}: MobileSidebarProps) {
    return (
        <>
            <AnimatePresence mode="wait">
                {isOpen && (
                    <>
                        {/* Sidebar overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={onClose}
                            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
                        />

                        {/* Mobile navigation */}
                        <motion.aside
                            initial={{ x: -340 }}
                            animate={{ x: 0 }}
                            exit={{ x: -340 }}
                            transition={{ duration: 0.28, ease: EASING.standard }}
                            className="fixed left-0 top-0 z-50 flex h-screen w-85 flex-col border-r border-white/10 bg-[#09090B] px-6 py-6 shadow-[0_0_60px_rgba(0,0,0,.45)] lg:hidden"
                        >
                            {/* Sidebar header */}
                            <div className="mb-10 flex items-center justify-between">
                                <Logo />

                                <motion.button
                                    onClick={onClose}
                                    whileHover={{ rotate: 90, scale: 1.05 }}
                                    whileTap={{ scale: 0.96 }}
                                    animate={{
                                        rotate: isOpen ? 0 : -180,
                                    }}
                                    transition={{
                                        duration: 0.35,
                                        ease: EASING.standard,
                                    }}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-200 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white"
                                >
                                    <RiCloseLine className="text-xl" />
                                </motion.button>
                            </div>

                            {/* Navigation */}
                            <nav className="flex flex-col gap-2">
                                {navigation.map((item, index) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{
                                            opacity: 0,
                                            x: -16,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay: 0.08 + index * 0.05,
                                            duration: MOTION.duration,
                                            ease: EASING.standard,
                                        }}
                                    >
                                        <NavLink
                                            to={item.path}
                                            onClick={onClose}
                                        >
                                            {({ isActive }) => (
                                                <motion.div
                                                    whileHover={{
                                                        x: 6,
                                                    }}
                                                    whileTap={{
                                                        scale: 0.98,
                                                    }}
                                                    className={[
                                                        "rounded-2xl border px-5 py-3 text-sm font-medium transition-all duration-200",
                                                        isActive
                                                            ? "border-violet-500/40 bg-violet-500/15 text-white shadow-[0_0_24px_rgba(139,92,246,.28)]"
                                                            : "border-transparent text-zinc-400 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-white",
                                                    ].join(" ")}
                                                >
                                                    {item.label}
                                                </motion.div>
                                            )}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Bottom actions */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 16,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.35,
                                    duration: MOTION.duration,
                                    ease: EASING.standard,
                                }}
                                className="mt-auto space-y-3"
                            >
                                {/* Wallet */}
                                <motion.button
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    className="flex w-full items-center justify-center gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/10 px-5 py-3 font-medium text-violet-300 transition-all duration-200 hover:border-violet-500/40 hover:bg-violet-500/15 hover:text-white"
                                >
                                    <span className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgb(167_139_250)]" />

                                    <RiWallet3Line className="text-lg" />

                                    Wallet
                                </motion.button>

                                {/* Profile */}
                                <motion.button
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                    }}
                                    className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-violet-500/30 hover:bg-violet-500/10"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-violet-700 font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,.35)]">
                                        <RiUserLine className="text-xl" />
                                    </div>

                                    <div className="flex flex-col text-left">
                                        <span className="font-medium text-white">
                                            Guest
                                        </span>

                                        <span className="text-sm text-zinc-500">
                                            View Profile
                                        </span>
                                    </div>
                                </motion.button>
                            </motion.div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}