import { motion } from "framer-motion";
import {
    RiBug2Line,
    RiCodeSSlashLine,
    RiDatabase2Line,
    RiTerminalBoxLine,
} from "react-icons/ri";

import SettingRow from "./SettingRow";
import ToggleSwitch from "./ToggleSwitch";

import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useSettingsStore } from "../../store/useSettingsStore";

export default function DeveloperSettings() {
    const { settings, updateSettings } =
        useSettingsStore();

    const developer = settings.developer;

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
                    Developer
                </p>

                <h2 className="mt-2 text-3xl font-black text-white">
                    Advanced tools
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                    Configure development utilities, blockchain
                    diagnostics and testing tools available within
                    Credyx.
                </p>

            </div>

            <div className="space-y-5">

                <SettingRow
                    icon={RiCodeSSlashLine}
                    title="Developer Mode"
                    description="Unlock advanced development features and debugging tools."
                    control={
                        <ToggleSwitch
                            checked={developer.developerMode}
                            onChange={() =>
                                updateSettings({
                                    developer: {
                                        ...developer,
                                        developerMode:
                                            !developer.developerMode,
                                    },
                                })
                            }
                        />
                    }
                />

                <SettingRow
                    icon={RiDatabase2Line}
                    title="Blockchain Inspector"
                    description="Inspect wallet state, network status and on-chain synchronization."
                    control={
                        <ToggleSwitch
                            checked={developer.blockchainInspector}
                            onChange={() =>
                                updateSettings({
                                    developer: {
                                        ...developer,
                                        blockchainInspector:
                                            !developer.blockchainInspector,
                                    },
                                })
                            }
                        />
                    }
                />

                <SettingRow
                    icon={RiTerminalBoxLine}
                    title="Transaction Logs"
                    description="Display detailed blockchain transaction logs for debugging."
                    control={
                        <ToggleSwitch
                            checked={developer.transactionLogs}
                            onChange={() =>
                                updateSettings({
                                    developer: {
                                        ...developer,
                                        transactionLogs:
                                            !developer.transactionLogs,
                                    },
                                })
                            }
                        />
                    }
                />

                <SettingRow
                    icon={RiBug2Line}
                    title="Mock Data"
                    description="Populate Credyx with demonstration data for testing and presentations."
                    control={
                        <ToggleSwitch
                            checked={developer.mockData}
                            onChange={() =>
                                updateSettings({
                                    developer: {
                                        ...developer,
                                        mockData:
                                            !developer.mockData,
                                    },
                                })
                            }
                        />
                    }
                />

            </div>

            {/* Info */}

            <div className="mt-10 rounded-3xl border border-dashed border-violet-500/20 bg-violet-500/5 p-6">

                <h3 className="font-semibold text-white">
                    Developer Preview
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                    These options are intended for development,
                    demonstrations and blockchain diagnostics. They
                    have no effect on your production credentials
                    while using the mock environment.
                </p>

            </div>

        </motion.section>
    );
}