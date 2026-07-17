import { motion } from "framer-motion";
import {
    RiChromeLine,
    RiFlashlightFill,
    RiShieldCheckLine,
    RiSparklingLine,
} from "react-icons/ri";

import {
    fade,
    slideUp,
    MOTION,
} from "../../constants/motion";
import { EASING } from "../../constants/easing";

export default function BrowserCompanion() {
    return (
        <section
            id="browser-companion"
            className="px-6 py-28 lg:px-10"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_.95fr]">

                {/* Left */}

                <motion.div
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: MOTION.duration,
                        ease: EASING.standard,
                    }}
                >
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                        Browser Companion
                    </p>

                    <h2 className="mt-5 text-5xl font-black tracking-tight text-white">
                        Apply anywhere.

                        <span className="block text-violet-400">
                            Without starting over.
                        </span>
                    </h2>

                    <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
                        The Credyx Browser Companion detects supported
                        application forms, retrieves your professional
                        profile from your vault and prepares your
                        information in seconds.
                    </p>

                    <div className="mt-12 space-y-5">

                        <Feature
                            icon={RiFlashlightFill}
                            title="Instant Detection"
                            description="Recognizes supported application forms automatically."
                        />

                        <Feature
                            icon={RiSparklingLine}
                            title="Smart Autofill"
                            description="Uses your verified profile instead of repeated copy and paste."
                        />

                        <Feature
                            icon={RiShieldCheckLine}
                            title="Secure Verification"
                            description="Future-ready for Monad-backed credential verification."
                        />

                    </div>

                </motion.div>

                {/* Right */}

                <motion.div
                    variants={fade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        delay: .12,
                        duration: MOTION.duration,
                        ease: EASING.standard,
                    }}
                    className="relative"
                >

                    <div className="rounded-[40px] border border-white/8 bg-white/4 p-6 backdrop-blur-xl">

                        {/* Browser */}

                        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#09090B]">

                            {/* Browser Top */}

                            <div className="flex items-center justify-between border-b border-white/8 px-6 py-4">

                                <div className="flex items-center gap-2">

                                    <span className="h-3 w-3 rounded-full bg-red-400" />

                                    <span className="h-3 w-3 rounded-full bg-yellow-400" />

                                    <span className="h-3 w-3 rounded-full bg-emerald-400" />

                                </div>

                                <div className="rounded-full bg-white/6 px-5 py-2 text-sm text-zinc-500">
                                    careers.company.com
                                </div>

                                <RiChromeLine className="text-xl text-zinc-500" />

                            </div>

                            {/* Browser Content */}

                            <div className="space-y-5 p-7">

                                <div className="rounded-2xl border border-white/8 bg-white/4 p-5">

                                    <p className="text-sm text-zinc-500">
                                        First Name
                                    </p>

                                    <p className="mt-2 font-semibold text-white">
                                        Lamine
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-white/8 bg-white/4 p-5">

                                    <p className="text-sm text-zinc-500">
                                        Resume
                                    </p>

                                    <p className="mt-2 font-semibold text-white">
                                        Resume.pdf
                                    </p>

                                </div>

                                <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p className="text-sm text-violet-300">
                                                Credyx detected this application
                                            </p>

                                            <h3 className="mt-2 text-xl font-bold text-white">
                                                Ready to Autofill
                                            </h3>

                                        </div>

                                        <button className="rounded-full bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-500">
                                            Autofill
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}

interface FeatureProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

function Feature({
    icon: Icon,
    title,
    description,
}: FeatureProps) {
    return (
        <div className="flex items-start gap-5">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">

                <Icon className="text-xl" />

            </div>

            <div>

                <h3 className="text-lg font-bold text-white">
                    {title}
                </h3>

                <p className="mt-2 leading-7 text-zinc-400">
                    {description}
                </p>

            </div>

        </div>
    );
}