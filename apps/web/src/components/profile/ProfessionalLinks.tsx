import { motion } from "framer-motion";
import {
    RiGithubFill,
    RiGlobalLine,
    RiLinkedinBoxFill,
    RiTwitterXFill,
} from "react-icons/ri";

import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useProfileStore } from "../../store/useProfileStore";

export default function ProfessionalLinks() {
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
                <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-violet-500/6 blur-3xl" />

                <div className="relative z-10">

                    <div className="mb-10">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                            Professional Links
                        </p>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                            Connect your digital presence.
                        </h2>

                        <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                            Link the platforms that best represent your work,
                            experience and professional reputation.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">

                        <LinkCard
                            icon={RiGithubFill}
                            label="GitHub"
                            value={profile.github}
                            onChange={(value) =>
                                updateProfile({
                                    github: value,
                                })
                            }
                        />

                        <LinkCard
                            icon={RiLinkedinBoxFill}
                            label="LinkedIn"
                            value={profile.linkedin}
                            onChange={(value) =>
                                updateProfile({
                                    linkedin: value,
                                })
                            }
                        />

                        <LinkCard
                            icon={RiTwitterXFill}
                            label="X (Twitter)"
                            value={profile.x}
                            onChange={(value) =>
                                updateProfile({
                                    x: value,
                                })
                            }
                        />

                        <LinkCard
                            icon={RiGlobalLine}
                            label="Portfolio Website"
                            value={profile.website}
                            onChange={(value) =>
                                updateProfile({
                                    website: value,
                                })
                            }
                        />

                    </div>

                </div>
            </motion.section>
        </>
    );
}

interface LinkCardProps {
    icon: React.ElementType;
    label: string;
    value: string;
    onChange: (value: string) => void;
}

function LinkCard({
    icon: Icon,
    label,
    value,
    onChange,
}: LinkCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -2,
            }}
            className="rounded-3xl border border-white/8 bg-white/3 p-5 transition-all duration-300 hover:border-violet-500/20"
        >
            <div className="mb-4 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon className="text-xl" />
                </div>

                <div>
                    <p className="text-sm font-medium text-white">
                        {label}
                    </p>

                    <p className="text-xs text-zinc-500">
                        Public Profile
                    </p>
                </div>

            </div>

            <input
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                placeholder={`Enter your ${label}`}
                className="w-full bg-transparent text-zinc-300 outline-none placeholder:text-zinc-600"
            />
        </motion.div>
    );
}