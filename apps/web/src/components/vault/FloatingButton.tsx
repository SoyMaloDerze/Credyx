import { motion } from "framer-motion";
import { RiAddLine } from "react-icons/ri";

import { MOTION, scale } from "../../constants/motion";
import { EASING } from "../../constants/easing";

interface FloatingButtonProps {
    onClick: () => void;
}

export default function FloatingButton({
    onClick,
}:FloatingButtonProps) {
    return (
        <>
            <motion.button
                onClick={onClick}
                variants={scale}
                initial="hidden"
                animate="visible"
                whileHover={{
                    y: -4,
                    scale: 1.03,
                }}
                whileTap={{
                    scale: 0.97,
                }}
                transition={{
                    duration: MOTION.duration,
                    ease: EASING.standard,
                }}
                className="group fixed bottom-8 right-8 z-40 hidden items-center gap-3 rounded-full border border-violet-500/30 bg-violet-600 px-6 py-4 font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,.35)] transition-all duration-300 hover:border-violet-400 hover:shadow-[0_0_60px_rgba(139,92,246,.5)] md:flex"
            >
                <RiAddLine className="text-xl transition-transform duration-300 group-hover:rotate-90" />

                Add Vault Asset
            </motion.button>

            {/* Mobile FAB */}
            <motion.button
                variants={scale}
                initial="hidden"
                animate="visible"
                whileHover={{
                    scale: 1.06,
                }}
                whileTap={{
                    scale: 0.95,
                }}
                transition={{
                    duration: MOTION.duration,
                    ease: EASING.standard,
                }}
                className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full border border-violet-500/30 bg-violet-600 text-white shadow-[0_0_35px_rgba(139,92,246,.35)] md:hidden"
            >
                <RiAddLine className="text-2xl transition-transform duration-300 active:rotate-90" />
            </motion.button>
        </>
    );
}