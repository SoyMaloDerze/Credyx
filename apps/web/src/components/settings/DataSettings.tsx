import { motion } from "framer-motion";
import {
    RiArchiveDrawerLine,
    RiDownload2Line,
    RiFileDownloadLine,
    RiHistoryLine,
} from "react-icons/ri";

import SettingRow from "./SettingRow";
import ToggleSwitch from "./ToggleSwitch";

import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useSettingsStore } from "../../store/useSettingsStore";

export default function DataSettings() {
    const { settings, updateSettings } =
        useSettingsStore();

    const data = settings.data;

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
                    Data & Backup
                </p>

                <h2 className="mt-2 text-3xl font-black text-white">
                    Keep everything protected.
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                    Export your professional archive, manage automatic
                    backups and control how your data is preserved.
                </p>

            </div>

            <div className="space-y-5">

                <SettingRow
                    icon={RiArchiveDrawerLine}
                    title="Automatic Backup"
                    description="Create scheduled encrypted backups of your professional archive."
                    control={
                        <ToggleSwitch
                            checked={data.autoBackup}
                            onChange={() =>
                                updateSettings({
                                    data: {
                                        ...data,
                                        autoBackup:
                                            !data.autoBackup,
                                    },
                                })
                            }
                        />
                    }
                />

            </div>

            {/* Export */}

            <div className="mt-10">

                <label className="mb-3 block text-sm font-medium text-zinc-400">
                    Export Format
                </label>

                <select
                    value={data.exportFormat}
                    onChange={(event) =>
                        updateSettings({
                            data: {
                                ...data,
                                exportFormat:
                                    event.target.value as
                                        | "JSON"
                                        | "PDF",
                            },
                        })
                    }
                    className="w-full rounded-2xl border border-white/8 bg-white/4 px-5 py-4 text-white outline-none"
                >
                    <option value="JSON">
                        JSON
                    </option>

                    <option value="PDF">
                        PDF
                    </option>

                </select>

            </div>

            {/* Last Backup */}

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/8 bg-white/3 p-5">

                <RiHistoryLine className="text-xl text-violet-300" />

                <div>

                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                        Last Backup
                    </p>

                    <p className="mt-1 font-semibold text-white">
                        {data.lastBackup}
                    </p>

                </div>

            </div>

            {/* Actions */}

            <div className="mt-10 grid gap-4 md:grid-cols-2">

                <button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/10 py-4 font-medium text-violet-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/20 hover:text-white">

                    <RiDownload2Line />

                    Export Archive

                </button>

                <button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/4 py-4 font-medium text-zinc-300 transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-white">

                    <RiFileDownloadLine />

                    Download Backup

                </button>

            </div>

        </motion.section>
    );
}