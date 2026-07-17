import { motion } from "framer-motion";
import {
    RiFlashlightLine,
    RiFingerprintLine,
    RiShieldCheckLine,
    RiStackLine,
} from "react-icons/ri";

import {
    fade,
    scale,
    MOTION,
} from "../../constants/motion";
import { EASING } from "../../constants/easing";

export default function BuiltOnMonad() {
    return (
        <section
            id="monad"
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
                        Powered by Monad
                    </p>

                    <h2 className="mt-5 text-5xl font-black tracking-tight text-white">
                        Trust built into
                        every credential.
                    </h2>

                    <p className="mt-8 text-lg leading-9 text-zinc-400">
                        Credyx uses Monad as the trust layer behind
                        professional identity, allowing users to prove
                        ownership of their credentials without giving up
                        control of their data.
                    </p>

                </motion.div>

                <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-4">

                    <Card
                        icon={RiFingerprintLine}
                        title="Identity Ownership"
                        description="Your professional identity belongs to you, not the platforms you apply on."
                    />

                    <Card
                        icon={RiShieldCheckLine}
                        title="Credential Verification"
                        description="Anchor professional credentials to the blockchain for future verification."
                    />

                    <Card
                        icon={RiFlashlightLine}
                        title="Fast Verification"
                        description="Designed for instant verification without disrupting the application flow."
                    />

                    <Card
                        icon={RiStackLine}
                        title="Future Reputation"
                        description="Lay the foundation for a portable, trusted professional reputation."
                    />

                </div>

                {/* Bottom Banner */}

                <motion.div
                    variants={scale}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        delay: .15,
                        duration: MOTION.duration,
                        ease: EASING.standard,
                    }}
                    className="mt-20 rounded-[36px] border border-violet-500/15 bg-linear-to-r from-violet-500/10 via-violet-500/5 to-transparent p-10"
                >
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                        <div>

                            <p className="text-sm uppercase tracking-[0.24em] text-violet-300">
                                Built for the Monad Ecosystem
                            </p>

                            <h3 className="mt-4 text-3xl font-black text-white">
                                A professional identity layer for the next generation of builders.
                            </h3>

                        </div>

                        <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-8 py-4 text-center">

                            <p className="text-sm text-violet-300">
                                Powered by
                            </p>

                            <h4 className="mt-1 text-2xl font-black text-white">
                                Monad
                            </h4>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}

interface CardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

function Card({
    icon: Icon,
    title,
    description,
}: CardProps) {
    return (
        <motion.div
            whileHover={{
                y: -6,
            }}
            className="rounded-4xl border border-white/8 bg-white/3 p-8 transition-all duration-300 hover:border-violet-500/20"
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                <Icon className="text-3xl" />
            </div>

            <h3 className="mt-8 text-2xl font-black text-white">
                {title}
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
                {description}
            </p>
        </motion.div>
    );
}