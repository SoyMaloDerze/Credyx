import { AnimatePresence, motion } from "framer-motion";
import {
    RiCloseLine,
    RiDownloadLine,
    RiExternalLinkLine,
    RiFileCopyLine,
    RiFolderInfoLine,
    RiPushpin2Fill,
    RiShieldCheckFill,
    RiStarFill,
    // RiWallet3Line,
} from "react-icons/ri";

import { MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useLibraryStore } from "../../store/useLibraryStore";
import { useEffect } from "react";

export default function LibraryPreviewDrawer() {
    const {
        selectedAsset,
        isPreviewOpen,
        closePreview,
    } = useLibraryStore();

    // prevents background scroll
    useEffect(() => {
        if (!isPreviewOpen) {
            return;
        }

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isPreviewOpen]);

    return (
        <AnimatePresence>

            {isPreviewOpen && selectedAsset && (
                <>

                    {/* Overlay */}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: .2,
                        }}
                        onClick={closePreview}
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
                    />

                    {/* Drawer */}

                    <motion.aside
                        initial={{
                            x: 520,
                        }}
                        animate={{
                            x: 0,
                        }}
                        exit={{
                            x: 520,
                        }}
                        transition={{
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        className="fixed right-0 top-0 z-60 flex h-screen w-full max-w-xl flex-col overflow-hidden border-l border-white/10 bg-[#09090B] shadow-[0_0_80px_rgba(0,0,0,.45)]"
                    >

                        {/* Glow */}

                        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

                        <div className="relative z-10 flex h-full flex-col">

                            {/* Header */}

                            <div className="flex items-center justify-between border-b border-white/8 p-7">

                                <div>

                                    <p className="text-xs uppercase tracking-[0.24em] text-violet-300">
                                        Library Asset
                                    </p>

                                    <h2 className="mt-2 text-3xl font-black text-white">
                                        {selectedAsset.title}
                                    </h2>

                                </div>

                                <motion.button
                                    whileHover={{
                                        rotate: 90,
                                    }}
                                    whileTap={{
                                        scale: .9,
                                    }}
                                    onClick={closePreview}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white"
                                >
                                    <RiCloseLine />
                                </motion.button>

                            </div>

                            {/* Body */}

                            <div className="flex-1 space-y-8 overflow-y-auto p-7">

                                {/* Preview */}

                                <div className="rounded-4xl border border-white/8 bg-white/3 p-8">

                                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
                                        <selectedAsset.icon className="text-4xl" />
                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-white">
                                        {selectedAsset.title}
                                    </h3>

                                    <p className="mt-3 leading-8 text-zinc-400">
                                        {selectedAsset.description}
                                    </p>

                                </div>

                                {/* Tags */}

                                <Section title="Tags">

                                    <div className="flex flex-wrap gap-3">

                                        {selectedAsset.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-white/8 bg-white/4 px-4 py-2 text-sm text-zinc-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}

                                    </div>

                                </Section>

                                {/* Metadata */}

                                <Section title="Metadata">

                                    <Row
                                        label="Collection"
                                        value={selectedAsset.collection}
                                    />

                                    <Row
                                        label="Type"
                                        value={selectedAsset.type}
                                    />

                                    <Row
                                        label="Size"
                                        value={selectedAsset.size}
                                    />

                                    <Row
                                        label="Updated"
                                        value={selectedAsset.updatedAt}
                                    />

                                </Section>

                                {/* Blockchain */}

                                <Section title="Blockchain">

                                    <Row
                                        label="Network"
                                        value={selectedAsset.blockchain.network}
                                    />

                                    <Row
                                        label="Wallet"
                                        value={selectedAsset.blockchain.walletAddress}
                                    />

                                    <Row
                                        label="Transaction"
                                        value={selectedAsset.blockchain.txHash}
                                    />

                                    <Row
                                        label="Last Sync"
                                        value={selectedAsset.blockchain.lastSync}
                                    />

                                </Section>

                                {/* Status */}

                                <div className="grid grid-cols-3 gap-4">

                                    <StatusCard
                                        icon={<RiShieldCheckFill />}
                                        label="Verified"
                                        active={
                                            selectedAsset.blockchain.verified
                                        }
                                    />

                                    <StatusCard
                                        icon={<RiPushpin2Fill />}
                                        label="Pinned"
                                        active={
                                            selectedAsset.isPinned
                                        }
                                    />

                                    <StatusCard
                                        icon={<RiStarFill />}
                                        label="Favorite"
                                        active={
                                            selectedAsset.isFavorite
                                        }
                                    />

                                </div>

                            </div>

                            {/* Footer */}

                            <div className="grid grid-cols-3 gap-3 border-t border-white/8 p-6">

                                <ActionButton
                                    icon={<RiDownloadLine />}
                                    label="Export"
                                />

                                <ActionButton
                                    icon={<RiFileCopyLine />}
                                    label="Duplicate"
                                />

                                <ActionButton
                                    icon={<RiExternalLinkLine />}
                                    label="Open"
                                />

                            </div>

                        </div>

                    </motion.aside>

                </>
            )}

        </AnimatePresence>
    );
}

function Section({
    title,
    children,
}: React.PropsWithChildren<{
    title: string;
}>) {
    return (
        <div>
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                <RiFolderInfoLine />

                {title}
            </h3>

            {children}
        </div>
    );
}

function Row({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center justify-between border-b border-white/6 py-3">

            <span className="text-zinc-500">
                {label}
            </span>

            <span className="max-w-[60%] truncate text-right font-medium text-white">
                {value}
            </span>

        </div>
    );
}

function StatusCard({
    icon,
    label,
    active,
}: {
    icon: React.ReactNode;
    label: string;
    active: boolean;
}) {
    return (
        <div className="rounded-2xl border border-white/8 bg-white/4 p-4 text-center">

            <div className={active ? "text-emerald-400" : "text-zinc-600"}>
                {icon}
            </div>

            <p className="mt-3 text-sm text-white">
                {label}
            </p>

        </div>
    );
}

function ActionButton({
    icon,
    label,
}: {
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <button className="flex flex-col items-center gap-2 rounded-2xl border border-white/8 bg-white/3 py-4 text-zinc-300 transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/8 hover:text-white">

            {icon}

            <span className="text-sm font-medium">
                {label}
            </span>

        </button>
    );
}