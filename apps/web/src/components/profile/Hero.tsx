import { motion } from "framer-motion";
import {
    RiArrowRightLine,
    RiCheckboxCircleFill,
    RiShieldKeyholeLine,
    RiUserStarLine,
    RiWallet3Line,
} from "react-icons/ri";

import { fade, slideUp, scale, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

export default function Hero() {
    return (
        <>
            <section className="relative overflow-hidden rounded-4xl border border-white/8 bg-white/2 p-8 shadow-[0_0_60px_rgba(0,0,0,.25)] lg:p-12">
                {/* Ambient Glow */}
                <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />

                <div className="absolute left-1/2 top-1/2 h-140 w-140 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/3 blur-[160px]" />

                <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">

                    {/* Left */}
                    <div className="max-w-3xl">

                        {/* Badge */}
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

                            Monad Verified Identity
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
                            className="text-5xl font-black leading-tight tracking-tight text-white lg:text-6xl"
                        >
                            Build your

                            <span className="mt-2 block text-violet-400">
                                professional identity.
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
                            Complete your profile once and let Credyx securely
                            power resumes, portfolios, applications and
                            professional verification everywhere on Monad.
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
                            <button className="group inline-flex items-center gap-3 rounded-2xl border border-violet-500/30 bg-violet-600 px-6 py-4 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,.35)] transition-all duration-300 hover:scale-[1.02] hover:border-violet-400 hover:shadow-[0_0_50px_rgba(139,92,246,.5)]">
                                Complete Profile

                                <RiArrowRightLine className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>

                            <button className="rounded-2xl border border-white/10 bg-white/3 px-6 py-4 font-medium text-zinc-300 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/8 hover:text-white">
                                View Vault
                            </button>
                        </motion.div>
                    </div>

                    {/* Right */}
                    <motion.div
                        variants={scale}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 0.3,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="relative hidden h-96 lg:block"
                    >

                        {/* Floating Identity Card */}
                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute left-0 top-6 w-64 rounded-3xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                                    <RiUserStarLine className="text-2xl" />
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                                        Identity
                                    </p>

                                    <h3 className="mt-1 font-semibold text-white">
                                        Profile Verified
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center gap-2 text-emerald-400">
                                <RiCheckboxCircleFill />

                                Verified
                            </div>
                        </motion.div>

                        {/* Floating Wallet */}
                        <motion.div
                            animate={{
                                y: [10, -12, 10],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-0 right-0 w-64 rounded-3xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                                    <RiWallet3Line className="text-2xl" />
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                                        Monad Wallet
                                    </p>

                                    <h3 className="mt-1 font-semibold text-white">
                                        Connected
                                    </h3>
                                </div>
                            </div>

                            <p className="mt-6 font-mono text-sm text-zinc-400">
                                0x74F3...92AE
                            </p>
                        </motion.div>

                        {/* Center Orb */}
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-500/20"
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 shadow-[0_0_50px_rgba(139,92,246,.35)]">
                                <RiShieldKeyholeLine className="text-4xl text-violet-300" />
                            </div>
                        </motion.div>

                    </motion.div>

                </div>
            </section>
        </>
    );
}