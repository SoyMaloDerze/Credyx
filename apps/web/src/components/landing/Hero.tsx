import { motion } from "framer-motion";
import {
    RiArrowRightUpLine,
    RiChromeLine,
    RiShieldCheckLine,
    RiSparklingLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

import LogoIcon from "../branding/LogoIcon";

import {
    fade,
    scale,
    slideUp,
    MOTION,
} from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { ROUTES } from "../../routes/routes";

export default function Hero() {
    return (
        <section className="relative overflow-hidden px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">

            {/* Ambient */}

            <div className="absolute left-1/2 top-24 h-136 w-136 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

            <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[1.1fr_.9fr]">

                {/* Left */}

                <div>

                    <motion.div
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300"
                    >
                        <LogoIcon className="h-5 w-5" />

                        Built for modern professionals
                    </motion.div>

                    <motion.h1
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: .08,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-8 text-6xl font-black leading-none tracking-tight text-white lg:text-8xl"
                    >
                        The

                        <span className="mt-3 block text-violet-400">
                            Professional
                        </span>

                        Identity Vault.
                    </motion.h1>

                    <motion.p
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: .16,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400"
                    >
                        Build your professional identity once.
                        Autofill applications everywhere.
                        Verify ownership securely on Monad.
                    </motion.p>

                    {/* Actions */}

                    <motion.div
                        variants={scale}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: .24,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-12 flex flex-wrap gap-5"
                    >
                        <Link
                            to={ROUTES.APP}
                            className="inline-flex items-center gap-3 rounded-full bg-violet-600 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-violet-500"
                        >
                            Launch Vault

                            <RiArrowRightUpLine />
                        </Link>

                        <button className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-7 py-4 text-base font-medium text-zinc-300 transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-white">

                            <RiChromeLine />

                            Browser Companion

                        </button>

                    </motion.div>

                    {/* Highlights */}

                    <motion.div
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: .32,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-14 flex flex-wrap gap-8"
                    >

                        <Highlight
                            icon={RiShieldCheckLine}
                            text="Secured on Monad"
                        />

                        <Highlight
                            icon={RiSparklingLine}
                            text="One Profile. Every Opportunity."
                        />

                    </motion.div>

                </div>

                {/* Right */}

                <motion.div
                    variants={scale}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        delay: .2,
                        duration: MOTION.duration,
                        ease: EASING.standard,
                    }}
                    className="relative"
                >

                    <div className="rounded-[40px] border border-white/10 bg-white/4 p-8 backdrop-blur-2xl">

                        <div className="rounded-4xl border border-violet-500/15 bg-[#0B0B10] p-8">

                            <div className="flex items-center justify-between">

                                <LogoIcon className="h-14 w-14" />

                                <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
                                    Connected
                                </span>

                            </div>

                            <h3 className="mt-8 text-3xl font-black text-white">
                                Credyx Vault
                            </h3>

                            <p className="mt-3 leading-7 text-zinc-400">
                                Securely store resumes,
                                portfolios, education,
                                projects and identity in one
                                professional vault.
                            </p>

                            <div className="mt-10 space-y-4">

                                <Card text="Professional Profile" />

                                <Card text="Resume" />

                                <Card text="Portfolio" />

                                <Card text="Certificates" />

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

interface HighlightProps {
    icon: React.ElementType;
    text: string;
}

function Highlight({
    icon: Icon,
    text,
}: HighlightProps) {
    return (
        <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                <Icon />
            </div>

            <span className="font-medium text-zinc-300">
                {text}
            </span>

        </div>
    );
}

function Card({
    text,
}: {
    text: string;
}) {
    return (
        <div className="rounded-2xl border border-white/8 bg-white/3 px-5 py-4 text-white">
            {text}
        </div>
    );
}