import { motion, AnimatePresence } from "framer-motion";
import { RiAddLine, RiCloseLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { MOTION, fade, slideUp } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useVaultStore } from "../../store/useVaultStore";
import { getAssetIcon } from "../../utils/assetIcons";

interface AddVaultAssetModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const collections = [
    "Professional",
    "Identity",
    "Projects",
    "Education",
    "Developer",
    "Wallet",
    "Social",
    "Certificates",
] as const;

export default function AddVaultAssetModal({
    isOpen,
    onClose,
}: AddVaultAssetModalProps) {
    const {
        createAsset,
        updateAsset,
        editingAsset,
    } = useVaultStore();

    

    const isEditing = editingAsset !== null;

    const [title, setTitle] = useState(() => editingAsset?.title ?? "");

    const [description, setDescription] = useState(
        () => editingAsset?.description ?? ""
    );

    const [collection, setCollection] = useState<
        (typeof collections)[number]
    >(() =>
        (editingAsset?.type as (typeof collections)[number]) ??
        "Professional"
    );

    

    // freeze bg scroll
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



    // create asset handler
    const handleSubmit = () => {
        if (!title.trim() || !description.trim()) {
            return;
        }

        const asset = {
            id: editingAsset?.id ?? crypto.randomUUID(),
            title,
            description,
            type: collection,
            lastSynced: "Just now",
            icon: getAssetIcon(collection),
            isPrimary: editingAsset?.isPrimary ?? false,
        };

        if (editingAsset) {
            updateAsset(editingAsset.id, asset);
        } else {
            createAsset(asset);
        }

        setTitle("");
        setDescription("");
        setCollection("Professional");
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: MOTION.duration,
                            ease: EASING.standard,
                        }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 px-6 py-8 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.92,
                                y: 40,
                                filter: "blur(8px)",
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                filter: "blur(0px)",
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.96,
                                y: 24,
                                filter: "blur(8px)",
                            }}
                            transition={{
                                duration: MOTION.duration,
                                ease: EASING.standard,
                            }}
                            onClick={(event) => event.stopPropagation()}
                            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-4xl border border-white/8 bg-[#09090B] shadow-[0_0_80px_rgba(139,92,246,.18)]"
                        >
                            {/* Ambient glow */}
                            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

                            <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-fuchsia-500/8 blur-3xl" />

                            <div className="relative z-10 p-8 lg:p-10">

                                {/* Header */}
                                <motion.div
                                    variants={fade}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        duration: MOTION.duration,
                                        ease: EASING.standard,
                                    }}
                                    className="flex items-start justify-between"
                                >
                                    <div>
                                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                                            Vault Asset
                                        </p>

                                        <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
                                            {isEditing
                                                ? "Edit vault asset."
                                                : "Create a new vault asset."}
                                        </h2>

                                        <p className="mt-4 max-w-lg text-zinc-400">
                                            {isEditing
                                                ? "Update your vault asset and keep your professional identity up to date."
                                                : "Store information once and securely autofill it across applications whenever you need it."}
                                        </p>
                                    </div>

                                    <motion.button
                                        whileHover={{
                                            rotate: 90,
                                            scale: 1.08,
                                        }}
                                        whileTap={{
                                            scale: 0.94,
                                        }}
                                        onClick={onClose}
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/4 text-zinc-400 transition-colors duration-300 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white"
                                    >
                                        <RiCloseLine className="text-xl" />
                                    </motion.button>
                                </motion.div>

                                {/* Form */}
                                <motion.div
                                    variants={slideUp}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        delay: 0.08,
                                        duration: MOTION.duration,
                                        ease: EASING.standard,
                                    }}
                                    className="mt-10 space-y-6"
                                >
                                    <div>
                                        <label className="mb-3 block text-sm font-medium text-zinc-300">
                                            Asset Name
                                        </label>

                                        <input
                                            type="text"
                                            value={title}
                                            onChange={(event) => {
                                                setTitle(event.target.value);
                                            }}
                                            placeholder="Software Engineer Resume"
                                            className="w-full rounded-2xl border border-white/8 bg-white/3 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-violet-500/40 focus:bg-violet-500/6"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-3 block text-sm font-medium text-zinc-300">
                                            Description
                                        </label>

                                        <textarea
                                            rows={4}
                                            value={description}
                                            onChange={(event) => {
                                                setDescription(event.target.value);
                                            }}
                                            placeholder="Describe this asset..."
                                            className="w-full resize-none rounded-2xl border border-white/8 bg-white/3 px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-violet-500/40 focus:bg-violet-500/6"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-4 block text-sm font-medium text-zinc-300">
                                            Vault Collection
                                        </label>

                                        <div className="flex flex-wrap gap-3">
                                            {collections.map((item) => (
                                                <motion.button
                                                    key={item}
                                                    whileHover={{
                                                        y: -2,
                                                        scale: 1.04,
                                                    }}
                                                    whileTap={{
                                                        scale: 0.96,
                                                    }}
                                                    onClick={() => {
                                                        setCollection(item);
                                                    }}
                                                    className={[
                                                        "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                                                        collection === item
                                                            ? "border-violet-500/40 bg-violet-500/20 text-white shadow-[0_0_20px_rgba(139,92,246,.2)]"
                                                            : "border-violet-500/20 bg-violet-500/8 text-violet-300 hover:border-violet-500/40 hover:bg-violet-500/15 hover:text-white",
                                                    ].join(" ")}
                                                >
                                                    {item}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Footer */}
                                <motion.div
                                    variants={fade}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        delay: 0.16,
                                        duration: MOTION.duration,
                                        ease: EASING.standard,
                                    }}
                                    className="mt-10 flex items-center justify-end gap-4"
                                >
                                    <button
                                        onClick={() => {
                                            setTitle("");
                                            setDescription("");
                                            setCollection("Professional");
                                            onClose();
                                        }}
                                        className="rounded-2xl border border-white/10 bg-white/3 px-6 py-3 font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:text-white"
                                    >
                                        Cancel
                                    </button>

                                    <motion.button
                                        onClick={handleSubmit}
                                        whileHover={{
                                            y: -2,
                                            scale: 1.02,
                                        }}
                                        whileTap={{
                                            scale: 0.97,
                                        }}
                                        className="group inline-flex items-center gap-3 rounded-2xl border border-violet-500/30 bg-violet-600 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,.3)]"
                                    >
                                        <RiAddLine className="transition-transform duration-300 group-hover:rotate-90" />

                                        {editingAsset
                                            ? "Save Changes"
                                            : "Create Asset"}
                                    </motion.button>
                                </motion.div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}