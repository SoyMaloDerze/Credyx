import { motion } from "framer-motion";
import {
    RiBookOpenLine,
    RiSearchEyeLine,
} from "react-icons/ri";

import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useLibraryStore } from "../../store/useLibraryStore";

export default function LibraryEmptyState() {
    const {
        searchQuery,
        selectedCollection,
        setSearchQuery,
        setCollection,
    } = useLibraryStore();

    const hasSearch = searchQuery.trim().length > 0;

    return (
        <motion.section
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{
                duration: MOTION.duration,
                ease: EASING.standard,
            }}
            className="relative overflow-hidden rounded-[36px] border border-dashed border-white/10 bg-white/2 px-8 py-20 text-center"
        >
            {/* Ambient Glow */}

            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/8 blur-[120px]" />

            <div className="relative z-10">

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] border border-violet-500/20 bg-violet-500/10 text-violet-300">

                    {hasSearch ? (
                        <RiSearchEyeLine className="text-5xl" />
                    ) : (
                        <RiBookOpenLine className="text-5xl" />
                    )}

                </div>

                <h2 className="mt-8 text-4xl font-black tracking-tight text-white">

                    {hasSearch
                        ? "Nothing matched your search."
                        : selectedCollection === "All"
                            ? "Your library is empty."
                            : `${selectedCollection} is empty.`}

                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">

                    {hasSearch
                        ? "Try another keyword, browse a different collection, or clear your filters to explore your complete professional archive."
                        : selectedCollection === "All"
                            ? "Your professional archive doesn't contain any assets yet."
                            : `There aren't any assets in your ${selectedCollection.toLowerCase()} collection yet. Browse another collection to continue exploring your archive.`}

                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">

                    {hasSearch && (
                        <button
                            onClick={() =>
                                setSearchQuery("")
                            }
                            className="rounded-2xl border border-violet-500/20 bg-violet-500/10 px-6 py-3 font-semibold text-violet-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/20 hover:text-white"
                        >
                            Clear Search
                        </button>
                    )}

                    <button
                        onClick={() =>
                            setCollection("All")
                        }
                        className="rounded-2xl border border-white/10 bg-white/4 px-6 py-3 font-semibold text-zinc-300 transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-white"
                    >
                        Browse Entire Library
                    </button>

                </div>

            </div>
        </motion.section>
    );
}