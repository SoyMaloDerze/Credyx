import { motion } from "framer-motion";
import { RiAddLine, RiArrowRightLine, RiShieldKeyholeLine } from "react-icons/ri";

import { fade, slideUp, scale, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";


interface HeroProps {
    onCreateAsset: () => void;
}

export default function Hero({
    onCreateAsset, 
}: HeroProps) {
    return (
        <>
            <section className="relative overflow-hidden rounded-4xl border border-white/8 bg-white/2 p-8 shadow-[0_0_60px_rgba(0,0,0,.25)] lg:p-12">
                {/* Ambient glow */}
                <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />

                <div className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/3 blur-[140px]" />

                <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
                    {/* Left Content */}
                    <div className="max-w-3xl">
                        {/* Greeting */}
                        <motion.div
                            variants={fade}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: MOTION.duration,
                                ease: EASING.standard,
                            }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300"
                        >
                            <RiShieldKeyholeLine />

                            Your vault is ready.
                        </motion.div>

                        {/* Hero Title */}
                        <motion.h1
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                delay: 0.08,
                                duration: MOTION.duration,
                                ease: EASING.standard,
                            }}
                            className="text-5xl font-black leading-tight tracking-tight text-white lg:text-6xl"
                        >
                            Your professional identity

                            <span className="mt-2 block text-violet-400">
                                secured by Monad.
                            </span>
                        </motion.h1>

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
                            className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400"
                        >
                            Store your professional identity once, securely
                            organize every credential and instantly autofill
                            applications anywhere with confidence.
                        </motion.p>

                        {/* Actions */}
                        <motion.div
                            variants={scale}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                delay: 0.24,
                                duration: MOTION.duration,
                                ease: EASING.standard,
                            }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <button onClick={onCreateAsset} className="group inline-flex items-center gap-3 rounded-2xl border border-violet-500/30 bg-violet-600 px-6 py-4 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,.35)] transition-all duration-300 hover:scale-[1.02] hover:border-violet-400 hover:shadow-[0_0_50px_rgba(139,92,246,.5)]">
                                <RiAddLine className="text-xl transition-all duration-300 group-hover:rotate-90" />

                                Add Vault Asset
                            </button>

                            <button className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-6 py-4 font-medium text-zinc-300 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/8 hover:text-white">
                                Explore Vault

                                <RiArrowRightLine className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Vault Core */}
                    <motion.div
                        variants={scale}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.3,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="relative hidden h-90 items-center justify-center lg:flex"
                    >
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute h-72 w-72 rounded-full border border-violet-500/15"
                        />

                        <motion.div
                            animate={{
                                rotate: -360,
                            }}
                            transition={{
                                duration: 28,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute h-56 w-56 rounded-full border border-violet-400/20"
                        />

                        <motion.div
                            animate={{
                                scale: [1, 1.08, 1],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="flex h-28 w-28 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 shadow-[0_0_60px_rgba(139,92,246,.35)]"
                        >
                            <RiShieldKeyholeLine className="text-5xl text-violet-300" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}