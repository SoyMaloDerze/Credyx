import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    RiCloseLine,
    RiDeleteBinLine,
    RiEdit2Line,
    RiExternalLinkLine,
    RiFileCopyLine,
    RiShieldCheckLine,
    RiTimeLine,
    RiWallet3Line,
} from "react-icons/ri";
import type { Credential } from "../../types/credential";
import { useVaultStore } from "../../store/useVaultStore";

import { fade, slideLeft, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";

interface VaultAssetDrawerProps {
    isOpen: boolean;
    asset: Credential | null;
    onClose: () => void;
}

export default function VaultAssetDrawer({
    isOpen,
    asset,
    onClose,
}: VaultAssetDrawerProps) {
    const {
        deleteAsset,
        openModal,
    } = useVaultStore();




    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!asset) {
        return null;
    }

    // delete asset handler
    const handleDelete = () => {
        if (!asset) {
            return;
        }

        deleteAsset(asset.id);

        onClose();
    };

    const Icon = asset.icon;

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={fade}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        onClick={onClose}
                        className="fixed inset-0 z-60 bg-black/70 backdrop-blur-xl"
                    >
                        <motion.aside
                            variants={slideLeft}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{
                                duration: MOTION.duration,
                                ease: EASING.standard,
                            }}
                            onClick={(event) => event.stopPropagation()}
                            className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col overflow-hidden border-l border-white/8 bg-[#09090B]"
                        >
                            {/* Ambient glow */}
                            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-600/8 blur-3xl" />

                            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-fuchsia-600/8 blur-3xl" />

                            <div className="relative z-10 flex h-full flex-col">

                                {/* Header */}
                                <div className="border-b border-white/8 p-8">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start gap-5">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-violet-500/20 bg-violet-500/10 text-violet-300">
                                                <Icon className="text-3xl" />
                                            </div>

                                            <div>
                                                <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-2 text-sm font-medium text-violet-300">
                                                    <RiShieldCheckLine />

                                                    Verified Asset
                                                </div>

                                                <h2 className="mt-5 text-3xl font-black tracking-tight text-white">
                                                    {asset.title}
                                                </h2>

                                                <p className="mt-3 leading-7 text-zinc-400">
                                                    {asset.description}
                                                </p>
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{
                                                rotate: 90,
                                                scale: 1.05,
                                            }}
                                            whileTap={{
                                                scale: 0.95,
                                            }}
                                            onClick={onClose}
                                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/4 text-zinc-400 transition-colors duration-300 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white"
                                        >
                                            <RiCloseLine className="text-xl" />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-8 overflow-y-auto p-8">

                                    <div className="rounded-3xl border border-white/8 bg-white/2 p-6">
                                        <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
                                            Collection
                                        </p>

                                        <p className="mt-3 text-lg font-semibold text-white">
                                            {asset.type}
                                        </p>
                                    </div>

                                    <div className="rounded-3xl border border-white/8 bg-white/2 p-6">
                                        <div className="flex items-center gap-3 text-zinc-300">
                                            <RiTimeLine className="text-xl text-violet-300" />

                                            Last Updated
                                        </div>

                                        <p className="mt-3 text-lg font-medium text-white">
                                            {asset.lastSynced}
                                        </p>
                                    </div>

                                    <div className="rounded-3xl border border-white/8 bg-white/2 p-6">
                                        <div className="flex items-center gap-3 text-zinc-300">
                                            <RiWallet3Line className="text-xl text-violet-300" />

                                            Monad Owner
                                        </div>

                                        <p className="mt-3 break-all font-mono text-sm text-zinc-400">
                                            0x74f3...92ae
                                        </p>
                                    </div>

                                </div>

                                {/* Footer */}
                                <div className="border-t border-white/8 p-8">

                                    <div className="grid grid-cols-2 gap-4">

                                        <motion.button
                                            whileHover={{
                                                y: -2,
                                            }}
                                            whileTap={{
                                                scale: 0.98,
                                            }}
                                            className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-5 py-4 font-medium text-zinc-300 transition-colors duration-300 hover:border-violet-500/30 hover:text-white"
                                        >
                                            <RiFileCopyLine />

                                            Copy
                                        </motion.button>

                                        <motion.button
                                            whileHover={{
                                                y: -2,
                                            }}
                                            whileTap={{
                                                scale: 0.98,
                                            }}
                                            className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-5 py-4 font-medium text-zinc-300 transition-colors duration-300 hover:border-violet-500/30 hover:text-white"
                                        >
                                            <RiExternalLinkLine />

                                            Autofill
                                        </motion.button>

                                        <motion.button
                                            onClick={() => {
                                                if (!asset) {
                                                    return;
                                                }

                                                openModal(asset);
                                            }}
                                            whileHover={{
                                                y: -2,
                                            }}
                                            whileTap={{
                                                scale: 0.98,
                                            }}
                                            className="flex items-center justify-center gap-3 rounded-2xl border border-violet-500/30 bg-violet-600 px-5 py-4 font-semibold text-white"
                                        >
                                            <RiEdit2Line />

                                            Edit
                                        </motion.button>

                                        <motion.button
                                            onClick={handleDelete}
                                            whileHover={{
                                                y: -2,
                                            }}
                                            whileTap={{
                                                scale: 0.98,
                                            }}
                                            className="flex items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/8 px-5 py-4 font-medium text-red-300 transition-colors duration-300 hover:bg-red-500/15"
                                        >
                                            <RiDeleteBinLine />

                                            Delete
                                        </motion.button>

                                    </div>

                                </div>

                            </div>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}