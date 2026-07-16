import { motion } from "framer-motion";
import { RiAddLine, RiShieldKeyholeLine } from "react-icons/ri";

import { fade, scale, slideUp, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

interface EmptyStateProps {
    onCreateAsset: () => void;
}

export default function EmptyState({
    onCreateAsset,
}: EmptyStateProps) {
    return (
        <>
            <motion.section
                variants={fade}
                initial="hidden"
                animate="visible"
                className="relative overflow-hidden rounded-4xl border border-white/8 bg-white/2 px-8 py-20 text-center shadow-[0_0_60px_rgba(0,0,0,.25)]"
            >
                {/* Ambient glow */}
                <div className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/4 blur-[140px]" />

                <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-500/8 blur-3xl" />

                <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-fuchsia-500/6 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-2xl">

                    {/* Vault Icon */}
                    <motion.div
                        variants={scale}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10 shadow-[0_0_50px_rgba(139,92,246,.2)]"
                    >
                        <RiShieldKeyholeLine className="text-5xl text-violet-300" />
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.08,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-8 text-4xl font-black tracking-tight text-white"
                    >
                        Your vault is waiting.
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.16,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400"
                    >
                        Start building your professional identity by creating
                        your first vault asset. Every resume, project,
                        certificate and achievement you add becomes instantly
                        ready for future opportunities.
                    </motion.p>

                    {/* Feature chips */}
                    <motion.div
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.24,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-10 flex flex-wrap justify-center gap-3"
                    >
                        {[
                            "Secure Storage",
                            "Monad Powered",
                            "Autofill Ready",
                            "Encrypted",
                        ].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-violet-500/20 bg-violet-500/8 px-4 py-2 text-sm font-medium text-violet-300"
                            >
                                {item}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.button
                        variants={scale}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.32,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        whileHover={{
                            y: -3,
                            scale: 1.02,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        onClick={onCreateAsset}
                        className="group mt-12 inline-flex items-center gap-3 rounded-2xl border border-violet-500/30 bg-violet-600 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,.35)] transition-all duration-300 hover:border-violet-400 hover:shadow-[0_0_50px_rgba(139,92,246,.5)]"
                    >
                        <RiAddLine className="text-xl transition-transform duration-300 group-hover:rotate-90" />

                        Create Your First Vault Asset
                    </motion.button>
                </div>
            </motion.section>
        </>
    );
}