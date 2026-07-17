import { motion } from "framer-motion";
import {
    RiArrowRightLine,
    RiChromeLine,
    RiFolderShield2Line,
    RiFingerprintLine,
    RiUser3Line,
} from "react-icons/ri";

import {
    fade,
    scale,
    MOTION,
} from "../../constants/motion";
import { EASING } from "../../constants/easing";

const steps = [
    {
        step: "01",
        title: "Create Your Profile",
        description:
            "Build your professional identity once with your experience, education, skills and credentials.",
        icon: RiUser3Line,
    },
    {
        step: "02",
        title: "Secure Your Vault",
        description:
            "Store resumes, portfolios, certificates and career assets in your Credyx Vault.",
        icon: RiFolderShield2Line,
    },
    {
        step: "03",
        title: "Use Browser Companion",
        description:
            "Credyx detects supported job application forms and prepares your information instantly.",
        icon: RiChromeLine,
    },
    {
        step: "04",
        title: "Verify Ownership",
        description:
            "Anchor your professional identity on Monad and maintain trusted ownership.",
        icon: RiFingerprintLine,
    },
];

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="px-6 py-28 lg:px-10"
        >
            <div className="mx-auto max-w-7xl">

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
                        How It Works
                    </p>

                    <h2 className="mt-5 text-5xl font-black tracking-tight text-white">
                        Four simple steps.
                    </h2>

                    <p className="mt-8 text-lg leading-9 text-zinc-400">
                        Create your identity once and let Credyx
                        handle every future opportunity.
                    </p>

                </motion.div>

                <div className="mt-20 grid gap-8 lg:grid-cols-4">

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.step}
                                variants={scale}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * .08,
                                    duration: MOTION.duration,
                                    ease: EASING.standard,
                                }}
                                className="relative"
                            >

                                <div className="rounded-4xl border border-white/8 bg-white/3 p-8">

                                    <div className="flex items-center justify-between">

                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                                            <Icon className="text-3xl" />
                                        </div>

                                        <span className="text-5xl font-black text-white/6">
                                            {step.step}
                                        </span>

                                    </div>

                                    <h3 className="mt-8 text-2xl font-black text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-5 leading-8 text-zinc-400">
                                        {step.description}
                                    </p>

                                </div>

                                {index !== steps.length - 1 && (
                                    <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 xl:flex">

                                        <RiArrowRightLine className="text-3xl text-zinc-700" />

                                    </div>
                                )}

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}