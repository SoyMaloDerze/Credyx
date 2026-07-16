import { motion } from "framer-motion";
import {
    RiCheckboxCircleFill,
    RiFingerprintLine,
    RiGlobalLine,
    RiShieldCheckLine,
    RiWallet3Line,
} from "react-icons/ri";

import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useProfileStore } from "../../store/useProfileStore";

export default function MonadIdentity() {
    const { profile } = useProfileStore();

    const verificationLabel = {
        verified: "Verified",
        pending: "Pending",
        unverified: "Unverified",
    }[profile.monadVerificationStatus];

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
                className="relative overflow-hidden rounded-4xl border border-violet-500/15 bg-white/2 p-8 shadow-[0_0_80px_rgba(139,92,246,.12)]"
            >
                {/* Ambient Glow */}
                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="absolute -bottom-40 right-0 h-112 w-md rounded-full bg-fuchsia-500/8 blur-3xl" />

                <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_.85fr]">

                    {/* Left */}

                    <div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                            <RiFingerprintLine />

                            Monad Identity
                        </div>

                        <h2 className="mt-6 text-4xl font-black tracking-tight text-white">
                            Your verified
                            <span className="block text-violet-400">
                                on-chain identity.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
                            Credyx links your professional identity with your
                            Monad wallet, creating a trusted foundation for
                            resumes, applications and future on-chain reputation.
                        </p>

                        <div className="mt-10 space-y-4">

                            <StatusRow
                                icon={RiShieldCheckLine}
                                title="Identity Verification"
                                value={verificationLabel}
                            />

                            <StatusRow
                                icon={RiGlobalLine}
                                title="Network"
                                value="Monad Testnet"
                            />

                            <StatusRow
                                icon={RiWallet3Line}
                                title="Wallet Status"
                                value="Connected"
                            />

                        </div>

                    </div>

                    {/* Right */}

                    <motion.div
                        animate={{
                            y: [-8, 8, -8],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative rounded-4xl border border-violet-500/20 bg-white/4 p-7 backdrop-blur-xl"
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 bg-linear-to-br from-violet-500/8 via-transparent to-fuchsia-500/5" />

                        <div className="relative z-10">

                            <div className="flex items-center justify-between">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                                    <RiWallet3Line className="text-2xl" />
                                </div>

                                <RiCheckboxCircleFill className="text-3xl text-emerald-400" />

                            </div>

                            <p className="mt-8 text-xs uppercase tracking-[0.24em] text-zinc-500">
                                Monad Wallet
                            </p>

                            <p className="mt-3 break-all font-mono text-lg text-white">
                                {profile.walletAddress}
                            </p>

                            <div className="my-8 h-px bg-white/8" />

                            <div className="grid grid-cols-2 gap-5">

                                <Metric
                                    label="Identity"
                                    value="Verified"
                                />

                                <Metric
                                    label="Network"
                                    value="Monad"
                                />

                                <Metric
                                    label="Profile"
                                    value={`${profile.completion}%`}
                                />

                                <Metric
                                    label="Trust"
                                    value="High"
                                />

                            </div>

                        </div>

                    </motion.div>

                </div>
            </motion.section>
        </>
    );
}

interface StatusRowProps {
    icon: React.ElementType;
    title: string;
    value: string;
}

function StatusRow({
    icon: Icon,
    title,
    value,
}: StatusRowProps) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/3 p-4">
            <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon className="text-xl" />
                </div>

                <span className="font-medium text-white">
                    {title}
                </span>
            </div>

            <span className="font-semibold text-violet-300">
                {value}
            </span>
        </div>
    );
}

interface MetricProps {
    label: string;
    value: string;
}

function Metric({
    label,
    value,
}: MetricProps) {
    return (
        <div className="rounded-2xl border border-white/8 bg-white/3 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {label}
            </p>

            <h3 className="mt-2 text-lg font-bold text-white">
                {value}
            </h3>
        </div>
    );
}