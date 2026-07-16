import { motion } from "framer-motion";
import {
    RiFingerprintLine,
    RiLockPasswordLine,
    RiShieldCheckLine,
    RiTimeLine,
} from "react-icons/ri";

import ToggleSwitch from "./ToggleSwitch";
import SettingRow from "./SettingRow";


import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useSettingsStore } from "../../store/useSettingsStore";

export default function SecuritySettings() {
    const { settings, updateSettings } =
        useSettingsStore();

    const security = settings.security;

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
                    Security
                </p>

                <h2 className="mt-2 text-3xl font-black text-white">
                    Protect your account
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                    Manage authentication and privacy settings
                    for your professional identity.
                </p>

            </div>

            <div className="space-y-5">

                <SettingRow
                    icon={RiShieldCheckLine}
                    title="Two-Factor Authentication"
                    description="Require an additional verification step during sign in."
                    control={
                        <ToggleSwitch
                            checked={
                                security.twoFactorEnabled
                            }
                            onChange={() =>
                                updateSettings({
                                    security: {
                                        ...security,
                                        twoFactorEnabled:
                                            !security.twoFactorEnabled,
                                    },
                                })
                            }
                        />
                    }
                />

                <SettingRow
                    icon={RiFingerprintLine}
                    title="Biometric Authentication"
                    description="Use fingerprint or Face ID on supported devices."
                    control={
                        <ToggleSwitch
                            checked={
                                security.biometricEnabled
                            }
                            onChange={() =>
                                updateSettings({
                                    security: {
                                        ...security,
                                        biometricEnabled:
                                            !security.biometricEnabled,
                                    },
                                })
                            }
                        />
                    }
                />

                <SettingRow
                    icon={RiLockPasswordLine}
                    title="Auto Lock"
                    description="Automatically lock your vault after inactivity."
                    control={
                        <ToggleSwitch
                            checked={
                                security.autoLock
                            }
                            onChange={() =>
                                updateSettings({
                                    security: {
                                        ...security,
                                        autoLock:
                                            !security.autoLock,
                                    },
                                })
                            }
                        />
                    }
                />

            </div>

            <div className="mt-10">

                <label className="mb-3 block text-sm font-medium text-zinc-400">
                    Session Timeout
                </label>

                <div className="relative">

                    <RiTimeLine className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

                    <select
                        value={security.sessionTimeout}
                        onChange={(event) =>
                            updateSettings({
                                security: {
                                    ...security,
                                    sessionTimeout:
                                        event.target.value as
                                            | "15 min"
                                            | "30 min"
                                            | "1 hour",
                                },
                            })
                        }
                        className="w-full rounded-2xl border border-white/8 bg-white/4 py-4 pl-12 pr-5 text-white outline-none"
                    >
                        <option value="15 min">
                            15 Minutes
                        </option>

                        <option value="30 min">
                            30 Minutes
                        </option>

                        <option value="1 hour">
                            1 Hour
                        </option>

                    </select>

                </div>

            </div>

        </motion.section>
    );
}

