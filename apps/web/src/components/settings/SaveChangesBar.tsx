import { AnimatePresence, motion } from "framer-motion";
import {
    RiCheckLine,
    RiRefreshLine,
} from "react-icons/ri";

import { MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useSettingsStore } from "../../store/useSettingsStore";

export default function SaveChangesBar() {
    const {
        isDirty,
        saveSettings,
        resetSettings,
    } = useSettingsStore();

    return (
        <AnimatePresence>

            {isDirty && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: 80,
                    }}
                    transition={{
                        duration: MOTION.duration,
                        ease: EASING.standard,
                    }}
                    className="fixed bottom-8 left-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2"
                >
                    <div className="flex flex-col items-center justify-between gap-5 rounded-[28px] border border-violet-500/20 bg-[#0B0B10]/90 p-5 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl md:flex-row">

                        <div>

                            <h3 className="text-lg font-bold text-white">
                                Unsaved Changes
                            </h3>

                            <p className="mt-1 text-sm text-zinc-400">
                                Your settings have changed. Save them or
                                reset to the previous state.
                            </p>

                        </div>

                        <div className="flex w-full gap-3 md:w-auto">

                            <button
                                onClick={resetSettings}
                                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-zinc-300 transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-white md:flex-none"
                            >
                                <RiRefreshLine />

                                Reset

                            </button>

                            <button
                                onClick={saveSettings}
                                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-500 md:flex-none"
                            >
                                <RiCheckLine />

                                Save Changes

                            </button>

                        </div>

                    </div>

                </motion.div>
            )}

        </AnimatePresence>
    );
}