import { motion } from "framer-motion";
import {
    RiMailLine,
    RiPhoneLine,
    RiGlobalLine,
} from "react-icons/ri";

import { useProfileStore } from "../../store/useProfileStore";
import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

export default function ContactInformation() {
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
                <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-500/6 blur-3xl" />

                <div className="relative z-10">

                    {/* Header */}
                    <div className="mb-10">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                            Contact Information
                        </p>

                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                            Stay reachable.
                        </h2>

                        <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                            These details help recruiters, collaborators and
                            organizations connect with you quickly and securely.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">

                        <ContactField
                            icon={RiMailLine}
                            label="Email Address"
                            value={profile.email}
                            type="email"
                            onChange={(value) =>
                                updateProfile({
                                    email: value,
                                })
                            }
                        />

                        <ContactField
                            icon={RiPhoneLine}
                            label="Phone Number"
                            value={profile.phone}
                            type="tel"
                            onChange={(value) =>
                                updateProfile({
                                    phone: value,
                                })
                            }
                        />

                        <ContactField
                            icon={RiGlobalLine}
                            label="Website"
                            value={profile.website}
                            type="url"
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

interface ContactFieldProps {
    icon: React.ElementType;
    label: string;
    value: string;
    type: React.HTMLInputTypeAttribute;
    onChange: (value: string) => void;
}

function ContactField({
    icon: Icon,
    label,
    value,
    type,
    onChange,
}: ContactFieldProps) {
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
                type={type}
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                className="w-full bg-transparent text-lg font-semibold text-white outline-none placeholder:text-zinc-600"
            />
        </motion.div>
    );
}