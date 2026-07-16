import { useMemo } from "react";

import { motion } from "framer-motion";
import {
    RiBookOpenLine,
    RiFolderShield2Line,
    RiSparklingLine,
} from "react-icons/ri";

import {
    fade,
    scale,
    slideUp,
    MOTION,
} from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useLibraryStore } from "../../store/useLibraryStore";

export default function Hero() {
    const { assets } = useLibraryStore();

    const stats = useMemo(() => {
        const synced = assets.filter(
            (asset) => asset.blockchain.synced
        ).length;

        const verified = assets.filter(
            (asset) => asset.blockchain.verified
        ).length;

        const latestSync =
            assets.find(
                (asset) => asset.blockchain.synced
            )?.blockchain.lastSync ?? "--";

        return {
            total: assets.length,
            synced,
            verified,
            latestSync,
        };
    }, [assets]);

    return (
        <>
            <section className="relative overflow-hidden rounded-[40px] border border-white/8 bg-white/2 p-8 shadow-[0_0_80px_rgba(0,0,0,.35)] lg:p-12">

                {/* Ambient Lights */}

                <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="absolute -right-20 bottom-0 h-120 w-120 rounded-full bg-fuchsia-500/8 blur-3xl" />

                <div className="absolute left-1/2 top-1/2 h-128 w-lg -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/4 blur-[140px]" />

                {/* Floating Documents */}

                <motion.div
                    animate={{
                        y: [-10, 10, -10],
                        rotate: [-4, 4, -4],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-24 top-16 hidden h-48 w-36 rotate-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl lg:block"
                />

                <motion.div
                    animate={{
                        y: [12, -10, 12],
                        rotate: [6, -5, 6],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-48 top-28 hidden h-52 w-40 -rotate-6 rounded-3xl border border-violet-500/20 bg-violet-500/10 backdrop-blur-xl lg:block"
                />

                <motion.div
                    animate={{
                        y: [-6, 10, -6],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-8 top-40 hidden h-44 w-32 rounded-3xl border border-white/8 bg-white/4 backdrop-blur-xl lg:block"
                />

                <div className="relative z-10 max-w-4xl">

                    {/* Badge */}

                    <motion.div
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300"
                    >
                        <RiFolderShield2Line />

                        Professional Archive
                    </motion.div>

                    {/* Heading */}

                    <motion.h1
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.08,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-8 text-5xl font-black leading-tight tracking-tight text-white lg:text-7xl"
                    >
                        Your professional archive,

                        <span className="block text-violet-400">
                            beautifully preserved.
                        </span>
                    </motion.h1>

                    {/* Live Status */}

                    <motion.div
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.14,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-4 py-2 text-sm font-medium text-emerald-300"
                    >
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

                        {stats.synced} of {stats.total} assets synced to
                        Monad
                    </motion.div>

                    {/* Description */}

                    <motion.p
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.2,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400"
                    >
                        Every resume, portfolio, certificate and career
                        milestone lives in one intelligent archive.
                        Beautifully organized, cryptographically
                        verifiable, and always ready when opportunity
                        arrives.
                    </motion.p>

                    {/* Metrics */}

                    <motion.div
                        variants={scale}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.28,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-12 flex flex-wrap gap-5"
                    >

                        <StatCard
                            icon={RiBookOpenLine}
                            value={String(stats.total)}
                            label="Library Assets"
                        />

                        <StatCard
                            icon={RiSparklingLine}
                            value={stats.latestSync}
                            label="Last Sync"
                        />

                        <StatCard
                            icon={RiFolderShield2Line}
                            value={`${stats.verified}/${stats.total}`}
                            label="Verified"
                        />

                    </motion.div>

                </div>

            </section>
        </>
    );
}

interface StatCardProps {
    icon: React.ElementType;
    value: string;
    label: string;
}

function StatCard({
    icon: Icon,
    value,
    label,
}: StatCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -5,
                scale: 1.02,
            }}
            whileTap={{
                scale: 0.98,
            }}
            className="group rounded-3xl border border-white/10 bg-white/4 px-6 py-5 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/25 hover:shadow-[0_0_40px_rgba(139,92,246,.15)]"
        >
            <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300 transition-transform duration-300 group-hover:rotate-6">
                    <Icon className="text-xl" />
                </div>

                <div>

                    <h3 className="text-2xl font-black tracking-tight text-white">
                        {value}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                        {label}
                    </p>

                </div>

            </div>
        </motion.div>
    );
}