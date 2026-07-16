import { motion } from "framer-motion";
import {
    RiHeart3Fill,
    RiHeart3Line,
    RiPushpin2Fill,
    RiPushpin2Line,
    RiShieldCheckFill,
    RiArrowRightUpLine,
} from "react-icons/ri";

import { card, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import type { LibraryAsset } from "../../types/library";

interface LibraryCardProps {
    asset: LibraryAsset;
    onClick: () => void;
    onFavorite: () => void;
    onPinned: () => void;
}

const colorMap = {
    emerald:
        "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20",
    cyan:
        "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20",
    violet:
        "from-violet-500/20 to-violet-500/5 border-violet-500/20",
    amber:
        "from-amber-500/20 to-amber-500/5 border-amber-500/20",
    blue:
        "from-blue-500/20 to-blue-500/5 border-blue-500/20",
    orange:
        "from-orange-500/20 to-orange-500/5 border-orange-500/20",
    pink:
        "from-pink-500/20 to-pink-500/5 border-pink-500/20",
    sky:
        "from-sky-500/20 to-sky-500/5 border-sky-500/20",
    slate:
        "from-slate-500/20 to-slate-500/5 border-slate-500/20",
} as const;

export default function LibraryCard({
    asset,
    onClick,
    onFavorite,
    onPinned,
}: LibraryCardProps) {
    const Icon = asset.icon;

    return (
        <motion.article
            layout
            variants={card}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{
                y: -8,
            }}
            transition={{
                duration: MOTION.duration,
                ease: EASING.standard,
            }}
            onClick={onClick}
            className={[
                "group relative cursor-pointer overflow-hidden rounded-[34px] border bg-white/3 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(139,92,246,.12)]",
                colorMap[asset.color],
            ].join(" ")}
        >
            {/* Glow */}

            <div className="absolute inset-0 bg-linear-to-br opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Reflection */}

            <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-60" />

            <div className="relative z-10 p-7">

                {/* Top */}

                <div className="flex items-start justify-between">

                    <div className="flex h-15 w-15 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-white backdrop-blur-xl">
                        <Icon className="text-2xl" />
                    </div>

                    <div className="flex items-center gap-2">

                        <motion.button
                            whileTap={{
                                scale: 0.9,
                            }}
                            onClick={(event) => {
                                event.stopPropagation();
                                onFavorite();
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/6 text-zinc-400 transition-all hover:text-rose-400"
                        >
                            {asset.isFavorite ? (
                                <RiHeart3Fill />
                            ) : (
                                <RiHeart3Line />
                            )}
                        </motion.button>

                        <motion.button
                            whileTap={{
                                scale: 0.9,
                            }}
                            onClick={(event) => {
                                event.stopPropagation();
                                onPinned();
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/6 text-zinc-400 transition-all hover:text-violet-300"
                        >
                            {asset.isPinned ? (
                                <RiPushpin2Fill />
                            ) : (
                                <RiPushpin2Line />
                            )}
                        </motion.button>

                    </div>

                </div>

                {/* Body */}

                <div className="mt-8">

                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                        {asset.collection}
                    </p>

                    <h2 className="mt-3 text-2xl font-black tracking-tight text-white">
                        {asset.title}
                    </h2>

                    <p className="mt-4 line-clamp-3 leading-7 text-zinc-400">
                        {asset.description}
                    </p>

                </div>

                {/* Tags */}

                <div className="mt-7 flex flex-wrap gap-2">

                    {asset.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
                        >
                            {tag}
                        </span>
                    ))}

                </div>

                {/* Footer */}

                <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-6">

                    <div>

                        <p className="text-xs uppercase tracking-wider text-zinc-600">
                            Updated
                        </p>

                        <p className="mt-1 font-medium text-zinc-300">
                            {asset.updatedAt}
                        </p>

                    </div>

                    <div className="flex items-center gap-3">

                        {asset.blockchain.verified && (
                            <RiShieldCheckFill className="text-lg text-emerald-400" />
                        )}

                        <motion.div
                            whileHover={{
                                x: 4,
                                y: -2,
                            }}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:text-white"
                        >
                            <RiArrowRightUpLine className="text-lg" />
                        </motion.div>

                    </div>

                </div>

            </div>
        </motion.article>
    );
}