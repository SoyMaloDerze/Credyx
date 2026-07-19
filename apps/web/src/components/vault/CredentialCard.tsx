import { motion } from "framer-motion";
import {
    RiArrowRightUpLine,
    RiShieldCheckLine,
} from "react-icons/ri";

import { MOTION, card } from "../../constants/motion";
import { EASING } from "../../constants/easing";

import type { Credential } from "../../types/credential";

interface CredentialCardProps {
    credential: Credential;
    onClick: () => void;
}

export default function CredentialCard({
    credential,
    onClick,
}: CredentialCardProps) {
    return (
        <motion.article
            layout
            variants={card}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{
                y: -6,
            }}
            whileTap={{
                scale: 0.98,
            }}
            transition={{
                duration: MOTION.duration,
                ease: EASING.standard,
            }}
            onClick={onClick}
            onKeyDown={(event) => {
                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {
                    event.preventDefault();
                    onClick();
                }
            }}
            role="button"
            tabIndex={0}
            className="group relative cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-white/3 p-6 transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_50px_rgba(139,92,246,.15)] focus:outline-none focus:ring-2 focus:ring-violet-500/40"
        >
            {/* Ambient glow */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Reflection */}
            <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent opacity-60" />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-300">
                        <RiShieldCheckLine className="text-2xl" />
                    </div>

                    <div
                        className={[
                            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border",
                            credential.status === "ACTIVE"
                                ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                                : "border-red-500/20 bg-red-500/10 text-red-300",
                        ].join(" ")}
                    >
                        <RiShieldCheckLine />

                        {credential.status}
                    </div>
                </div>

                {/* Body */}
                <div className="mt-8">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                        {credential.credentialType}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                        {credential.credentialTitle}
                    </h3>

                    <p className="mt-3 text-sm font-medium text-violet-300">
                        {credential.recipientName}
                    </p>

                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-zinc-400">
                        {credential.description ??
                            "No description provided."}
                    </p>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-white/10" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-wider text-zinc-600">
                            Issued On
                        </p>

                        <p className="mt-1 text-sm font-medium text-zinc-300">
                            {new Date(
                                credential.issuedOnChainAt,
                            ).toLocaleDateString()}
                        </p>
                    </div>

                    <motion.div
                        whileHover={{
                            x: 4,
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:text-white"
                    >
                        <RiArrowRightUpLine className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.div>
                </div>
            </div>
        </motion.article>
    );
}