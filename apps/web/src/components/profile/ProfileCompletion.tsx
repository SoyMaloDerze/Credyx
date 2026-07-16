import { motion } from "framer-motion";
import {
    RiCheckboxCircleFill,
    RiGithubFill,
    RiInformationLine,
    RiLinksLine,
    RiUserStarLine,
} from "react-icons/ri";

import { useProfileStore } from "../../store/useProfileStore";
import { fade, scale, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

export default function ProfileCompletion() {
    const { profile } = useProfileStore();

    const checklist = [
        {
            label: "Personal Information",
            completed: true,
            icon: RiUserStarLine,
        },
        {
            label: "Professional Summary",
            completed: profile.summary.length > 0,
            icon: RiInformationLine,
        },
        {
            label: "GitHub Profile",
            completed: profile.github.length > 0,
            icon: RiGithubFill,
        },
        {
            label: "Professional Links",
            completed:
                profile.website.length > 0 ||
                profile.linkedin.length > 0,
            icon: RiLinksLine,
        },
    ];

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
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/8 blur-3xl" />

                <div className="relative z-10 grid gap-10 lg:grid-cols-[320px_1fr]">

                    {/* Progress */}
                    <motion.div
                        variants={scale}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center justify-center"
                    >
                        <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/5">
                            <div className="absolute inset-5 rounded-full border border-white/8" />

                            <div className="text-center">
                                <h2 className="text-6xl font-black text-white">
                                    {profile.completion}
                                    <span className="text-violet-400">
                                        %
                                    </span>
                                </h2>

                                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-zinc-500">
                                    Complete
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Checklist */}
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                            Identity Progress
                        </p>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                            You're almost there.
                        </h2>

                        <p className="mt-3 max-w-xl leading-7 text-zinc-400">
                            A complete profile improves trust, strengthens your
                            professional identity and powers intelligent
                            autofill across applications.
                        </p>

                        <div className="mt-8 space-y-4">

                            {checklist.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.label}
                                        whileHover={{
                                            x: 4,
                                        }}
                                        className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/3 p-4 transition-all duration-300 hover:border-violet-500/20"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                                                <Icon className="text-xl" />
                                            </div>

                                            <span className="font-medium text-white">
                                                {item.label}
                                            </span>
                                        </div>

                                        {item.completed ? (
                                            <RiCheckboxCircleFill className="text-2xl text-emerald-400" />
                                        ) : (
                                            <div className="h-4 w-4 rounded-full border border-zinc-600" />
                                        )}
                                    </motion.div>
                                );
                            })}

                        </div>

                        <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/8 p-5">
                            <p className="text-sm font-medium text-violet-300">
                                AI Recommendation
                            </p>

                            <p className="mt-2 leading-7 text-zinc-300">
                                Add your portfolio and GitHub profile to improve
                                recruiter visibility and strengthen your Monad
                                professional identity.
                            </p>
                        </div>
                    </div>

                </div>
            </motion.section>
        </>
    );
}