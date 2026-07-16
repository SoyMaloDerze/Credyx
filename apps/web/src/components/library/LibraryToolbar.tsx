import { motion } from "framer-motion";
import {
    RiApps2Line,
    RiListCheck2,
    RiSearch2Line,
    RiSortDesc,
} from "react-icons/ri";

import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useLibraryStore } from "../../store/useLibraryStore";

export default function LibraryToolbar() {
    const {
        searchQuery,
        setSearchQuery,
        sortBy,
        setSort,
        viewMode,
        setViewMode,
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
                className="rounded-4xl border border-white/8 bg-white/3 p-5 backdrop-blur-xl"
            >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

                    {/* Search */}

                    <div className="relative w-full xl:max-w-xl">

                        <RiSearch2Line className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-zinc-500" />

                        <input
                            value={searchQuery}
                            onChange={(event) =>
                                setSearchQuery(
                                    event.target.value
                                )
                            }
                            placeholder="Search your professional archive..."
                            className="w-full rounded-2xl border border-white/8 bg-black/20 py-4 pl-14 pr-5 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-violet-500/30"
                        />

                    </div>

                    {/* Controls */}

                    <div className="flex flex-wrap items-center gap-4">

                        {/* Sort */}

                        <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">

                            <RiSortDesc className="text-lg text-violet-300" />

                            <select
                                value={sortBy}
                                onChange={(event) =>
                                    setSort(
                                        event.target.value as
                                            | "recent"
                                            | "oldest"
                                            | "name"
                                    )
                                }
                                className="bg-transparent text-sm font-medium text-white outline-none"
                            >
                                <option value="recent">
                                    Most Recent
                                </option>

                                <option value="oldest">
                                    Oldest
                                </option>

                                <option value="name">
                                    Name
                                </option>

                            </select>

                        </div>

                        {/* View */}

                        <div className="flex rounded-2xl border border-white/8 bg-black/20 p-1">

                            <button
                                onClick={() =>
                                    setViewMode("grid")
                                }
                                className={[
                                    "rounded-xl p-3 transition-all duration-300",
                                    viewMode === "grid"
                                        ? "bg-violet-600 text-white"
                                        : "text-zinc-500 hover:text-white",
                                ].join(" ")}
                            >
                                <RiApps2Line className="text-lg" />
                            </button>

                            <button
                                onClick={() =>
                                    setViewMode("list")
                                }
                                className={[
                                    "rounded-xl p-3 transition-all duration-300",
                                    viewMode === "list"
                                        ? "bg-violet-600 text-white"
                                        : "text-zinc-500 hover:text-white",
                                ].join(" ")}
                            >
                                <RiListCheck2 className="text-lg" />
                            </button>

                        </div>

                    </div>

                </div>
            </motion.section>
        </>
    );
}