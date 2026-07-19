import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    RiArrowRightUpLine,
    RiChromeLine,
} from "react-icons/ri";

import LogoIcon from "../branding/LogoIcon";

import {
    fade,
    scale,
    MOTION,
} from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { ROUTES } from "../../routes/routes";

export default function CTA() {
    return (
        <section className="px-6 py-28 lg:px-10">

            <motion.div
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                    duration: MOTION.duration,
                    ease: EASING.standard,
                }}
                className="mx-auto max-w-7xl overflow-hidden rounded-[44px] border border-violet-500/15 bg-linear-to-br from-violet-500/10 via-[#0B0B10] to-[#09090B] p-12 lg:p-16"
            >

                {/* Ambient */}

                <div className="absolute" />

                <div className="relative z-10 text-center">

                    <motion.div
                        variants={scale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            delay: .1,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mx-auto flex h-24 w-24 items-center justify-center rounded-[30px] border border-violet-500/20 bg-violet-500/10"
                    >
                        <LogoIcon className="h-14 w-14" />
                    </motion.div>

                    <h2 className="mt-10 text-5xl font-black tracking-tight text-white lg:text-6xl">
                        Ready for your next opportunity?
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
                        Build your professional identity once.
                        Reuse it everywhere.
                        Own it forever with Credyx.
                    </p>

                    <div className="mt-14 flex flex-wrap justify-center gap-5">

                        <Link
                            to={ROUTES.APP}
                            className="inline-flex items-center gap-3 rounded-full bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-violet-500"
                        >
                            Launch Vault

                            <RiArrowRightUpLine />
                        </Link>

                        <button className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-8 py-4 text-lg font-medium text-zinc-300 transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-white">

                            <RiChromeLine />

                            Browser Companion

                        </button>

                    </div>

                </div>

            </motion.div>

        </section>
    );
}