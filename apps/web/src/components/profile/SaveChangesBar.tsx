import { AnimatePresence, motion } from "framer-motion";
import {
    RiCheckLine,
    RiRefreshLine,
} from "react-icons/ri";

import { MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

interface SaveChangesBarProps {
    visible: boolean;
    onSave: () => void;
    onReset: () => void;
}

export default function SaveChangesBar({
    visible,
    onSave,
    onReset,
}: SaveChangesBarProps) {
    return (
        <>
            <AnimatePresence>

                {visible && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 40,
                            scale: 0.96,
                        }}
                        transition={{
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="fixed bottom-8 left-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2"
                    >
                        <div className="rounded-3xl border border-violet-500/20 bg-[#0D1018]/90 p-5 shadow-[0_0_60px_rgba(139,92,246,.25)] backdrop-blur-2xl">

                            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                                <div>
                                    <p className="text-lg font-bold text-white">
                                        Unsaved Changes
                                    </p>

                                    <p className="mt-1 text-sm text-zinc-400">
                                        Your profile has been modified.
                                        Save your changes before leaving.
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">

                                    <button
                                        onClick={onReset}
                                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/3 px-5 py-3 font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:text-white"
                                    >
                                        <RiRefreshLine />

                                        Reset
                                    </button>

                                    <button
                                        onClick={onSave}
                                        className="inline-flex text-nowrap items-center gap-2 rounded-2xl border border-violet-500/30 bg-violet-600 px-5 py-3 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,.3)] transition-all duration-300 hover:scale-[1.02] hover:border-violet-400 hover:shadow-[0_0_50px_rgba(139,92,246,.5)]"
                                    >
                                        <RiCheckLine />

                                        Save Changes
                                    </button>

                                </div>

                            </div>

                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </>
    );
}