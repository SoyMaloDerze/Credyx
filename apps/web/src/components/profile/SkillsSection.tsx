import { motion } from "framer-motion";
import { useState } from "react";
import {
    RiAddLine,
    RiCodeSSlashLine,
    RiCloseLine,
    RiSparklingLine,
} from "react-icons/ri";

import { useProfileStore } from "../../store/useProfileStore";
import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

export default function SkillsSection() {
    const { profile, updateProfile, } = useProfileStore();
    const [skill, setSkill] = useState("");


    // adds a new skill
    const addSkill = () => {
        const value = skill.trim();

        if (!value) {
            return;
        }

        if (profile.skills.includes(value)) {
            return;
        }

        updateProfile({
            skills: [...profile.skills, value],
        });

        setSkill("");
    };

    // removes skills
    const removeSkill = (skillToRemove: string) => {
        updateProfile({
            skills: profile.skills.filter(
                (item) => item !== skillToRemove
            ),
        });
    };


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
                <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-violet-500/6 blur-3xl" />

                <div className="relative z-10">

                    {/* Header */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                                Skills
                            </p>

                            <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                                Showcase your expertise.
                            </h2>

                            <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                                Your skills help recruiters, AI and Credyx
                                understand what you're best at.
                            </p>
                        </div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                            <RiSparklingLine />

                            AI Ranked
                        </div>

                    </div>

                    {/* Input */}
                    <div className="mt-10 rounded-3xl border border-white/8 bg-white/3 p-5">

                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                                <RiCodeSSlashLine className="text-xl" />
                            </div>

                            <input
                                value={skill}
                                onChange={(event) =>
                                    setSkill(event.target.value)
                                }
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        event.preventDefault();
                                        addSkill();
                                    }
                                }}
                                placeholder="Add a skill..."
                                className="flex-1 bg-transparent text-white outline-none placeholder:text-zinc-600"
                            />

                            <button onClick={addSkill} className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-300 transition-all duration-300 hover:bg-violet-500/20 hover:text-white">
                                <RiAddLine />
                            </button>

                        </div>

                    </div>

                    {/* Skill Tags */}
                    <div className="mt-8 flex flex-wrap gap-3">

                        {profile.skills.map((skill) => (
                            <motion.div
                                key={skill}
                                whileHover={{
                                    y: -2,
                                    scale: 1.03,
                                }}
                                className="group flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/8 px-5 py-3 text-sm font-medium text-violet-200 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/15"
                            >
                                {skill}

                                <button onClick={() => removeSkill(skill)} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <RiCloseLine />
                                </button>
                            </motion.div>
                        ))}

                    </div>

                    {/* Footer */}
                    <div className="mt-8 rounded-2xl border border-white/8 bg-white/3 p-5">

                        <p className="text-sm text-zinc-400">
                            💡 Tip: Profiles with 10–15 relevant technical
                            skills are easier for recruiters and AI systems to
                            understand.
                        </p>

                    </div>

                </div>

            </motion.section>
        </>
    );
}