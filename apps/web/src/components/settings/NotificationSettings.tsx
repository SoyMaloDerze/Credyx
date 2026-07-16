import { motion } from "framer-motion";
import {
    RiMailLine,
    RiNotification3Line,
    RiShieldCheckLine,
    RiSparklingLine,
} from "react-icons/ri";

import SettingRow from "./SettingRow";
import ToggleSwitch from "./ToggleSwitch";

import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useSettingsStore } from "../../store/useSettingsStore";

export default function NotificationSettings() {
    const { settings, updateSettings } =
        useSettingsStore();

    const notifications = settings.notifications;

    return (
        <motion.section
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{
                duration: MOTION.duration,
                ease: EASING.standard,
            }}
            className="rounded-[36px] border border-white/8 bg-white/2 p-8"
        >
            <div className="mb-10">

                <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                    Notifications
                </p>

                <h2 className="mt-2 text-3xl font-black text-white">
                    Stay informed
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                    Decide which updates deserve your attention and
                    keep distractions to a minimum.
                </p>

            </div>

            <div className="space-y-5">

                <SettingRow
                    icon={RiMailLine}
                    title="Email Notifications"
                    description="Receive important account updates by email."
                    control={
                        <ToggleSwitch
                            checked={notifications.email}
                            onChange={() =>
                                updateSettings({
                                    notifications: {
                                        ...notifications,
                                        email:
                                            !notifications.email,
                                    },
                                })
                            }
                        />
                    }
                />

                <SettingRow
                    icon={RiNotification3Line}
                    title="Push Notifications"
                    description="Get real-time alerts while using Credyx."
                    control={
                        <ToggleSwitch
                            checked={notifications.push}
                            onChange={() =>
                                updateSettings({
                                    notifications: {
                                        ...notifications,
                                        push:
                                            !notifications.push,
                                    },
                                })
                            }
                        />
                    }
                />

                <SettingRow
                    icon={RiShieldCheckLine}
                    title="Security Alerts"
                    description="Immediately notify me about suspicious activity."
                    control={
                        <ToggleSwitch
                            checked={
                                notifications.security
                            }
                            onChange={() =>
                                updateSettings({
                                    notifications: {
                                        ...notifications,
                                        security:
                                            !notifications.security,
                                    },
                                })
                            }
                        />
                    }
                />

                <SettingRow
                    icon={RiSparklingLine}
                    title="Product Updates"
                    description="Receive announcements about new Credyx features."
                    control={
                        <ToggleSwitch
                            checked={
                                notifications.productUpdates
                            }
                            onChange={() =>
                                updateSettings({
                                    notifications: {
                                        ...notifications,
                                        productUpdates:
                                            !notifications.productUpdates,
                                    },
                                })
                            }
                        />
                    }
                />

            </div>

        </motion.section>
    );
}