import { motion } from "framer-motion";
import { RiSearchEyeLine, RiRefreshLine } from "react-icons/ri";

import { MOTION, fade, scale } from "../../constants/motion";
import { EASING } from "../../constants/easing";

interface SearchEmptyStateProps {
    onClearSearch: () => void;
}

export default function SearchEmptyState({
    onClearSearch,
}: SearchEmptyStateProps) {
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
                className="relative overflow-hidden rounded-4xl border border-white/8 bg-white/2 p-10"
            >
                {/* Ambient Glow */}
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-500/8 blur-3xl" />

                <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-fuchsia-500/6 blur-3xl" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    <motion.div
                        variants={scale}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.08,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="flex h-24 w-24 items-center justify-center rounded-4xl border border-violet-500/20 bg-violet-500/10 text-violet-300 shadow-[0_0_40px_rgba(139,92,246,.18)]"
                    >
                        <RiSearchEyeLine className="text-5xl" />
                    </motion.div>

                    {/* Heading */}
                    <h2 className="mt-8 text-3xl font-black tracking-tight text-white">
                        No matching assets found.
                    </h2>

                    {/* Description */}
                    <p className="mt-4 max-w-xl leading-8 text-zinc-400">
                        We couldn't find any vault assets matching your search.
                        Try another keyword or clear your search to view every
                        credential stored securely inside your vault.
                    </p>

                    {/* Action */}
                    <motion.button
                        whileHover={{
                            y: -2,
                            scale: 1.02,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        transition={{
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        onClick={onClearSearch}
                        className="group mt-10 inline-flex items-center gap-3 rounded-2xl border border-violet-500/30 bg-violet-600 px-6 py-4 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,.35)] transition-all duration-300 hover:border-violet-400 hover:shadow-[0_0_50px_rgba(139,92,246,.5)]"
                    >
                        <RiRefreshLine className="text-lg transition-transform duration-300 group-hover:rotate-180" />

                        Clear Search
                    </motion.button>
                </div>
            </motion.section>
        </>
    );
}