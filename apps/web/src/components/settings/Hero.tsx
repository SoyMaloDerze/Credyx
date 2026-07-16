import { useMemo } from "react";

import { motion } from "framer-motion";
import {
    RiDatabase2Line,
    RiNotification3Line,
    RiSettings4Line,
    RiShieldCheckLine,
} from "react-icons/ri";

import {
    fade,
    scale,
    slideUp,
    MOTION,
} from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useSettingsStore } from "../../store/useSettingsStore";

export default function Hero() {
    const { settings } = useSettingsStore();

    const stats = useMemo(() => {
        const enabledSecurity = [
            settings.security.twoFactorEnabled,
            settings.security.biometricEnabled,
            settings.security.autoLock,
        ].filter(Boolean).length;

        const enabledNotifications = Object.values(
            settings.notifications
        ).filter(Boolean).length;

        return {
            enabledSecurity,
            enabledNotifications,
        };
    }, [settings]);

    return (
        <>
            <section className="relative overflow-hidden rounded-[40px] border border-white/8 bg-white/2 p-8 lg:p-12">

                {/* Ambient */}

                <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-500/6 blur-[120px]" />

                <div className="relative z-10">

                    {/* Badge */}

                    <motion.div
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300"
                    >
                        <RiSettings4Line />

                        Control Room
                    </motion.div>

                    {/* Heading */}

                    <motion.h1
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: .08,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-8 text-5xl font-black tracking-tight text-white lg:text-6xl"
                    >
                        Fine tune

                        <span className="block text-violet-400">
                            your Credyx experience.
                        </span>
                    </motion.h1>

                    {/* Description */}

                    <motion.p
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: .16,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400"
                    >
                        Configure notifications, wallet security,
                        backups and developer tools from one
                        centralized control room designed to keep
                        your professional identity secure.
                    </motion.p>

                    {/* Metrics */}

                    <motion.div
                        variants={scale}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: .24,
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="mt-12 grid gap-5 md:grid-cols-3"
                    >

                        <MetricCard
                            icon={RiShieldCheckLine}
                            value={`${stats.enabledSecurity}/3`}
                            label="Security Layers"
                        />

                        <MetricCard
                            icon={RiNotification3Line}
                            value={`${stats.enabledNotifications}/4`}
                            label="Notifications"
                        />

                        <MetricCard
                            icon={RiDatabase2Line}
                            value={settings.data.lastBackup}
                            label="Last Backup"
                        />

                    </motion.div>

                </div>

            </section>
        </>
    );
}

interface MetricCardProps {
    icon: React.ElementType;
    value: string;
    label: string;
}

function MetricCard({
    icon: Icon,
    value,
    label,
}: MetricCardProps) {
    return (
        <motion.div
            whileHover={{
                y: -4,
            }}
            className="rounded-3xl border border-white/8 bg-white/4 p-6 transition-all duration-300 hover:border-violet-500/20"
        >
            <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                    <Icon className="text-xl" />
                </div>

                <div>

                    <h3 className="text-2xl font-black text-white">
                        {value}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                        {label}
                    </p>

                </div>

            </div>
        </motion.div>
    );
}