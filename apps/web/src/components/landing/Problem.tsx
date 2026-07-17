import { motion } from "framer-motion";
import {
    RiArrowDownLine,
    RiCheckboxCircleFill,
    RiFileCopyLine,
    RiTimeLine,
} from "react-icons/ri";

import {
    fade,
    slideUp,
    MOTION,
} from "../../constants/motion";
import { EASING } from "../../constants/easing";

export default function Problem() {
    return (
        <section
            id="features"
            className="px-6 py-24 lg:px-10"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}

                <motion.div
                    variants={fade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: MOTION.duration,
                        ease: EASING.standard,
                    }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                        The Problem
                    </p>

                    <h2 className="mt-5 text-5xl font-black tracking-tight text-white">
                        Every application
                        starts from zero.
                    </h2>

                    <p className="mt-8 text-lg leading-9 text-zinc-400">
                        Professionals repeatedly type the same
                        information, upload the same documents and
                        rebuild the same profile every time they apply.
                    </p>

                </motion.div>

                {/* Comparison */}

                <div className="mt-20 grid gap-8 lg:grid-cols-2">

                    {/* Old Way */}

                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="rounded-[36px] border border-red-500/10 bg-red-500/5 p-8"
                    >

                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-300">
                            Traditional Workflow
                        </p>

                        <h3 className="mt-5 text-3xl font-black text-white">
                            Repeat everything.
                        </h3>

                        <div className="mt-10 space-y-5">

                            <Step
                                icon={RiFileCopyLine}
                                text="Upload resume again"
                            />

                            <Arrow />

                            <Step
                                icon={RiTimeLine}
                                text="Fill personal information"
                            />

                            <Arrow />

                            <Step
                                icon={RiFileCopyLine}
                                text="Rewrite work experience"
                            />

                            <Arrow />

                            <Step
                                icon={RiTimeLine}
                                text="Repeat tomorrow"
                            />

                        </div>

                    </motion.div>

                    {/* Credyx */}

                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            delay: .1,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="rounded-[36px] border border-violet-500/15 bg-violet-500/5 p-8"
                    >

                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">
                            With Credyx
                        </p>

                        <h3 className="mt-5 text-3xl font-black text-white">
                            Build once.
                        </h3>

                        <div className="mt-10 space-y-5">

                            <Step
                                icon={RiCheckboxCircleFill}
                                text="Create your professional vault"
                            />

                            <Arrow />

                            <Step
                                icon={RiCheckboxCircleFill}
                                text="Install Browser Companion"
                            />

                            <Arrow />

                            <Step
                                icon={RiCheckboxCircleFill}
                                text="Autofill applications"
                            />

                            <Arrow />

                            <Step
                                icon={RiCheckboxCircleFill}
                                text="Own your identity forever"
                            />

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

interface StepProps {
    icon: React.ElementType;
    text: string;
}

function Step({
    icon: Icon,
    text,
}: StepProps) {
    return (
        <div className="flex items-center gap-5 rounded-2xl border border-white/8 bg-white/4 p-5">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                <Icon className="text-xl" />
            </div>

            <span className="font-medium text-white">
                {text}
            </span>

        </div>
    );
}

function Arrow() {
    return (
        <div className="flex justify-center text-zinc-600">
            <RiArrowDownLine className="text-xl" />
        </div>
    );
}