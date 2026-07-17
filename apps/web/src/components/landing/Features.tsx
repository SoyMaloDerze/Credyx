import { motion } from "framer-motion";
import {
    RiBookShelfLine,
    RiChromeLine,
    RiFingerprintLine,
    RiFolderShield2Line,
    RiShieldCheckLine,
    RiUserStarLine,
} from "react-icons/ri";

import {
    fade,
    MOTION,
    scale,
} from "../../constants/motion";
import { EASING } from "../../constants/easing";

const features = [
    {
        title: "Professional Vault",
        description:
            "Securely store resumes, portfolios, certificates and career assets inside one trusted vault.",
        icon: RiFolderShield2Line,
    },
    {
        title: "Browser Companion",
        description:
            "Instantly detect supported application forms and autofill them with your verified profile.",
        icon: RiChromeLine,
    },
    {
        title: "Professional Identity",
        description:
            "Build your profile once and reuse it across every opportunity without starting over.",
        icon: RiUserStarLine,
    },
    {
        title: "Career Library",
        description:
            "Organize every credential into a beautiful searchable archive ready whenever opportunity calls.",
        icon: RiBookShelfLine,
    },
    {
        title: "Monad Verification",
        description:
            "Anchor ownership of your professional identity with blockchain-backed verification.",
        icon: RiShieldCheckLine,
    },
    {
        title: "Privacy First",
        description:
            "Your identity remains under your control while sharing only what each application requires.",
        icon: RiFingerprintLine,
    },
];

export default function Features() {
    return (
        <section
            id="features"
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
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                        Everything You Need
                    </p>

                    <h2 className="mt-5 text-5xl font-black tracking-tight text-white">
                        Built for modern careers.
                    </h2>

                    <p className="mt-8 text-lg leading-9 text-zinc-400">
                        Credyx combines identity, storage,
                        autofill and blockchain verification
                        into one seamless workflow.
                    </p>

                </motion.div>

                <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.article
                                key={feature.title}
                                variants={scale}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * .06,
                                    duration: MOTION.duration,
                                    ease: EASING.standard,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="group relative overflow-hidden rounded-4xl border border-white/8 bg-white/3 p-8 transition-all duration-300 hover:border-violet-500/20"
                            >

                                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative z-10">

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-300">

                                        <Icon className="text-3xl" />

                                    </div>

                                    <h3 className="mt-8 text-2xl font-black text-white">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-5 leading-8 text-zinc-400">
                                        {feature.description}
                                    </p>

                                </div>

                            </motion.article>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}