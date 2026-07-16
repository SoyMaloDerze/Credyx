import { motion } from "framer-motion";
import {
    RiFolderShield2Line,
    RiFileList3Line,
    RiGraduationCapLine,
    RiSparklingLine,
} from "react-icons/ri";

import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

const metrics = [
    {
        label: "Vault Assets",
        value: 12,
        icon: RiFolderShield2Line,
    },
    {
        label: "Identity Records",
        value: 8,
        icon: RiFileList3Line,
    },
    {
        label: "Verified Profiles",
        value: 4,
        icon: RiGraduationCapLine,
    },
    {
        label: "Ready to Inject",
        value: "97%",
        icon: RiSparklingLine,
    },
] as const;

const collections = [
    "Professional",
    "Identity",
    "Projects",
    "Education",
    "Developer",
    "Wallet",
] as const;

export default function VaultSnapshot() {
    return (
        <>
            <motion.section
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: MOTION.duration,
                    ease: EASING.standard,
                }}
                className="relative mt-8 overflow-hidden rounded-4xl border border-white/8 bg-white/3 p-8"
            >
                {/* Ambient glow */}
                <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-violet-500/8 blur-3xl" />

                <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-fuchsia-500/6 blur-3xl" />

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.28em] text-violet-300">
                                Vault Snapshot
                            </p>

                            <h2 className="mt-3 text-3xl font-black tracking-tight text-white lg:text-4xl">
                                Everything you trust,
                                <span className="text-violet-400">
                                    {" "}secured in one vault.
                                </span>
                            </h2>

                            <p className="mt-4 max-w-2xl text-zinc-400">
                                Powered by Monad. Your professional identity,
                                documents and credentials are organized,
                                protected and always ready for autofill.
                            </p>
                        </div>

                        <div className="hidden rounded-2xl border border-violet-500/20 bg-violet-500/10 px-5 py-3 lg:flex lg:flex-col">
                            <span className="text-xs uppercase tracking-[0.22em] text-violet-300">
                                Network
                            </span>

                            <span className="mt-1 font-semibold text-white">
                                Monad ⚡
                            </span>
                        </div>
                    </div>

                    {/* Vault metrics */}
                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {metrics.map((metric, index) => {
                            const Icon = metric.icon;

                            return (
                                <motion.div
                                    key={metric.label}
                                    initial={{
                                        opacity: 0,
                                        y: 18,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.08 + index * 0.08,
                                        duration: MOTION.duration,
                                        ease: EASING.standard,
                                    }}
                                    whileHover={{
                                        y: -6,
                                    }}
                                    className="group rounded-3xl border border-white/8 bg-white/3 p-5 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/6 hover:shadow-[0_0_30px_rgba(139,92,246,.18)]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-300 transition-all duration-300 group-hover:rotate-6">
                                            <Icon className="text-2xl" />
                                        </div>

                                        <span className="text-3xl font-black tracking-tight text-white">
                                            {metric.value}
                                        </span>
                                    </div>

                                    <p className="mt-5 text-sm font-medium text-zinc-400">
                                        {metric.label}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Vault collections */}
                    <div className="mt-10">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Vault Collections
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {collections.map((collection, index) => (
                                <motion.button
                                    key={collection}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    transition={{
                                        delay: 0.35 + index * 0.04,
                                        duration: MOTION.duration,
                                        ease: EASING.standard,
                                    }}
                                    whileHover={{
                                        y: -2,
                                    }}
                                    className="rounded-full border border-violet-500/20 bg-violet-500/8 px-5 py-2 text-sm font-medium text-violet-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/15 hover:text-white"
                                >
                                    {collection}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}