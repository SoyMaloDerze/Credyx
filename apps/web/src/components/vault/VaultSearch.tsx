import { motion } from "framer-motion";
import { RiCommandLine, RiSearch2Line } from "react-icons/ri";

import { MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

interface VaultSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function VaultSearch({
    value,
    onChange,
}: VaultSearchProps) {
    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 16,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: MOTION.duration,
                    ease: EASING.standard,
                }}
                className="group relative"
            >
                {/* Ambient glow */}
                <div className="absolute inset-0 rounded-3xl bg-violet-500/5 opacity-0 blur-2xl transition-opacity duration-500 group-focus-within:opacity-100" />

                <div className="relative flex items-center gap-4 rounded-3xl border border-white/8 bg-white/2 px-5 py-4 transition-all duration-300 focus-within:border-violet-500/30 focus-within:bg-violet-500/5 focus-within:shadow-[0_0_40px_rgba(139,92,246,.12)]">
                    {/* Search Icon */}
                    <RiSearch2Line className="shrink-0 text-2xl text-zinc-500 transition-colors duration-300 group-focus-within:text-violet-300" />

                    {/* Search Input */}
                    <input
                        type="text"
                        value={value}
                        onChange={(event) => {
                            onChange(event.target.value);
                        }}
                        placeholder="Search resumes, projects, links..."
                        className="flex-1 bg-transparent text-base text-white outline-none placeholder:text-zinc-500"
                    />

                    {/* Keyboard Hint */}
                    <div className="hidden items-center gap-2 rounded-xl border border-white/8 bg-white/3 px-3 py-2 text-xs font-medium text-zinc-500 md:flex">
                        <RiCommandLine />

                        K
                    </div>
                </div>
            </motion.div>
        </>
    );
}