import { motion } from "framer-motion";
import { RiFilter3Line } from "react-icons/ri";

import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useLibraryStore } from "../../store/useLibraryStore";
import type { AssetCollection } from "../../types/library";

const collections: (AssetCollection | "All")[] = [
    "All",
    "Professional",
    "Projects",
    "Education",
    "Developer",
    "Achievements",
    "Identity",
];

export default function LibraryFilters() {
    const {
        selectedCollection,
        setCollection,
        assets,
    } = useLibraryStore();

    return (
        <>
            <motion.section
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: MOTION.duration,
                    ease: EASING.standard,
                }}
                className="rounded-4xl border border-white/8 bg-white/2 p-6"
            >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                            <RiFilter3Line className="text-xl" />
                        </div>

                        <div>

                            <h3 className="font-semibold text-white">
                                Collections
                            </h3>

                            <p className="text-sm text-zinc-500">
                                Browse your archive by category.
                            </p>

                        </div>

                    </div>

                    <div className="flex flex-wrap gap-3">

                        {collections.map((collection) => {
                            const active =
                                selectedCollection ===
                                collection;

                            const count =
                                collection === "All"
                                    ? assets.length
                                    : assets.filter(
                                          (asset) =>
                                              asset.collection ===
                                              collection
                                      ).length;

                            return (
                                <motion.button
                                    key={collection}
                                    whileHover={{
                                        y: -2,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    onClick={() =>
                                        setCollection(
                                            collection
                                        )
                                    }
                                    className={[
                                        "group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300",
                                        active
                                            ? "border-violet-500/30 bg-violet-500/10 text-white shadow-[0_0_30px_rgba(139,92,246,.18)]"
                                            : "border-white/8 bg-white/3 text-zinc-400 hover:border-violet-500/20 hover:text-white",
                                    ].join(" ")}
                                >
                                    <span>
                                        {collection}
                                    </span>

                                    <span
                                        className={[
                                            "rounded-full px-2 py-0.5 text-xs font-semibold transition-all",
                                            active
                                                ? "bg-violet-400/20 text-violet-200"
                                                : "bg-white/8 text-zinc-500 group-hover:text-zinc-300",
                                        ].join(" ")}
                                    >
                                        {count}
                                    </span>
                                </motion.button>
                            );
                        })}

                    </div>

                </div>
            </motion.section>
        </>
    );
}