import { motion } from "framer-motion";
import {
    RiMapPinLine,
    RiUser3Line,
    RiBriefcaseLine,
    RiGlobalLine,
} from "react-icons/ri";

import { useProfileStore } from "../../store/useProfileStore";
import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

export default function PersonalInformation() {
    const { profile, updateProfile} = useProfileStore();

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
                <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-violet-500/6 blur-3xl" />

                <div className="relative z-10">

                    {/* Header */}
                    <div className="mb-10">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                            Personal Information
                        </p>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                            Your professional identity.
                        </h2>

                        <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                            This information forms the foundation of your
                            verified Credyx profile and powers intelligent
                            autofill across supported platforms.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid gap-6 md:grid-cols-2">

                        <InputCard
                            icon={RiUser3Line}
                            label="First Name"
                            value={profile.firstName}
                            onChange={(value) =>
                                updateProfile({
                                    firstName: value,
                                })
                            }
                        />

                        <InputCard
                            icon={RiUser3Line}
                            label="Last Name"
                            value={profile.lastName}
                            onChange={(value) =>
                                updateProfile({
                                    lastName: value,
                                })
                            }
                        />

                        <InputCard
                            icon={RiUser3Line}
                            label="Display Name"
                            value={profile.displayName}
                            onChange={(value) =>
                                updateProfile({
                                    displayName: value,
                                })
                            }
                        />

                        <InputCard
                            icon={RiBriefcaseLine}
                            label="Profession"
                            value={profile.profession}
                            onChange={(value) =>
                                updateProfile({
                                    profession: value,
                                })
                            }
                        />

                        <InputCard
                            icon={RiMapPinLine}
                            label="Country"
                            value={profile.country}
                            onChange={(value) =>
                                updateProfile({
                                    country: value,
                                })
                            }
                        />

                        <InputCard
                            icon={RiMapPinLine}
                            label="City"
                            value={profile.city}
                            onChange={(value) =>
                                updateProfile({
                                    city: value,
                                })
                            }
                        />

                        <InputCard
                            icon={RiGlobalLine}
                            label="Timezone"
                            value={profile.timezone}
                            onChange={(value) =>
                                updateProfile({
                                    timezone: value,
                                })
                            }
                        />

                    </div>

                </div>
            </motion.section>
        </>
    );
}

interface InputCardProps {
    icon: React.ElementType;
    label: string;
    value: string;
    onChange: (value: string) => void;
}

function InputCard({
    icon: Icon,
    label,
    value,
    onChange,
}: InputCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -2,
            }}
            className="rounded-3xl border border-white/8 bg-white/3 p-5 transition-all duration-300 hover:border-violet-500/20"
        >
            <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon className="text-lg" />
                </div>

                <p className="text-sm font-medium text-zinc-400">
                    {label}
                </p>
            </div>

            <input
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                className="w-full bg-transparent text-lg font-semibold text-white outline-none placeholder:text-zinc-600"
            />
        </motion.div>
    );
}