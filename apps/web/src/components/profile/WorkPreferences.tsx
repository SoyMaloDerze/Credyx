import { motion } from "framer-motion";
import {
    RiBuildingLine,
    RiBriefcaseLine,
    RiGlobalLine,
    RiHomeOfficeLine,
} from "react-icons/ri";

import { EMPLOYMENT_TYPES } from "../../constants/profile";

import { useProfileStore } from "../../store/useProfileStore";
import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

export default function WorkPreferences() {
    const { profile, updateProfile } = useProfileStore();

    const workModes = [
        {
            label: "Remote",
            icon: RiHomeOfficeLine,
        },
        {
            label: "Hybrid",
            icon: RiGlobalLine,
        },
        {
            label: "On-site",
            icon: RiBuildingLine,
        },
    ] as const;

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
                <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-violet-500/6 blur-3xl" />

                <div className="relative z-10">

                    <div className="mb-10">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                            Work Preferences
                        </p>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                            How do you like to work?
                        </h2>

                        <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                            These preferences help Credyx personalize
                            opportunities and autofill applications with your
                            ideal work style.
                        </p>
                    </div>

                    {/* Work Mode */}
                    <div>

                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            Preferred Environment
                        </h3>

                        <div className="grid gap-5 md:grid-cols-3">

                            {workModes.map((mode) => {
                                const Icon = mode.icon;

                                const active =
                                    profile.workPreference === mode.label;

                                return (
                                    <motion.button
                                        key={mode.label}
                                        onClick={() =>
                                            updateProfile({
                                                workPreference: mode.label,
                                            })
                                        }
                                        whileHover={{
                                            y: -4,
                                        }}
                                        whileTap={{
                                            scale: 0.98,
                                        }}
                                        className={[
                                            "rounded-3xl border p-6 text-left transition-all duration-300",
                                            active
                                                ? "border-violet-500/40 bg-violet-500/10 shadow-[0_0_35px_rgba(139,92,246,.18)]"
                                                : "border-white/8 bg-white/3 hover:border-violet-500/20",
                                        ].join(" ")}
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                                            <Icon className="text-2xl" />
                                        </div>

                                        <h4 className="mt-6 text-xl font-bold text-white">
                                            {mode.label}
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-zinc-400">
                                            {mode.label === "Remote" &&
                                                "Work from anywhere with distributed teams."}

                                            {mode.label === "Hybrid" &&
                                                "Balance remote flexibility with office collaboration."}

                                            {mode.label === "On-site" &&
                                                "Prefer working directly with your team in person."}
                                        </p>
                                    </motion.button>
                                );
                            })}

                        </div>

                    </div>

                    {/* Employment Types */}

                    <div className="mt-12">

                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            Employment Types
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            {EMPLOYMENT_TYPES.map((type) => {
                                const active = profile.employmentType.includes(type);

                                return(
                                    <motion.button
                                        key={type}
                                        whileTap={{
                                            scale: 0.97,
                                        }}
                                        onClick={() => {
                                            const updated = active
                                                ? profile.employmentType.filter(
                                                    (item) => item !== type
                                                )
                                                : [...profile.employmentType, type];

                                            updateProfile({
                                                employmentType: updated,
                                            });
                                        }}
                                        className={[
                                            "inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium transition-all duration-300",
                                            active
                                                ? "border border-violet-500/30 bg-violet-500/10 text-violet-300"
                                                : "border border-white/10 bg-white/3 text-zinc-400 hover:border-violet-500/20 hover:text-white",
                                        ].join(" ")}
                                    >
                                        <RiBriefcaseLine />

                                        {type}
                                    </motion.button>
                                );
                            })}

                        </div>

                    </div>

                </div>
            </motion.section>
        </>
    );
}