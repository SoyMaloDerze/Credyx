import { motion } from "framer-motion";
import {
    RiQuillPenLine,
    RiSparklingLine,
} from "react-icons/ri";

import { useProfileStore } from "../../store/useProfileStore";
import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

export default function ProfessionalSummary() {
    const { profile, updateProfile, } = useProfileStore();

    return (
        <>
            <motion.section
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: MOTION.duration,
                    ease: EASING.standard,
                }}
                className="relative overflow-hidden rounded-4xl border border-white/8 bg-white/2 p-8"
            >
                {/* Ambient Glow */}
                <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-500/6 blur-3xl" />

                <div className="relative z-10">

                    {/* Header */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                                Professional Summary
                            </p>

                            <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                                Tell your professional story.
                            </h2>

                            <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                                Your summary introduces you before your resume
                                does. It powers AI suggestions, autofill and
                                your verified Credyx identity.
                            </p>
                        </div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                            <RiSparklingLine />

                            AI Optimized
                        </div>

                    </div>

                    {/* Editor */}
                    <motion.div
                        whileHover={{
                            y: -2,
                        }}
                        className="group mt-10 rounded-[30px] border border-white/8 bg-white/3 p-6 transition-all duration-300 hover:border-violet-500/20"
                    >
                        <div className="mb-5 flex items-center gap-3">

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                                <RiQuillPenLine className="text-xl" />
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    About You
                                </h3>

                                <p className="text-sm text-zinc-500">
                                    Used across resumes and applications.
                                </p>
                            </div>

                        </div>

                        <textarea
                            rows={8}
                            value={profile.summary}
                            onChange={(event) =>
                                updateProfile({
                                    summary: event.target.value,
                                })
                            }
                            placeholder="Tell recruiters who you are..."
                            className="w-full resize-none bg-transparent text-base leading-8 text-white outline-none placeholder:text-zinc-600"
                        />

                        <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">

                            <p className="text-sm text-zinc-500">
                                Keep it concise, mesurable and impact-focused.
                            </p>

                            <span className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-xs font-medium text-zinc-400">
                                {profile.summary.length} / 1000
                            </span>

                        </div>

                    </motion.div>

                </div>
            </motion.section>
        </>
    );
}