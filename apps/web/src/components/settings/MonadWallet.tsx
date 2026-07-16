import { motion } from "framer-motion";
import {
    RiCheckDoubleLine,
    RiExternalLinkLine,
    RiFingerprintLine,
    RiShieldCheckLine,
    RiWallet3Line,
} from "react-icons/ri";

import { fade, MOTION } from "../../constants/motion";
import { EASING } from "../../constants/easing";
import { useSettingsStore } from "../../store/useSettingsStore";

export default function MonadWallet() {
    const { settings } = useSettingsStore();

    const wallet = settings.wallet;

    return (
        <motion.section
            variants={fade}
            initial="hidden"
            animate="visible"
            transition={{
                duration: MOTION.duration,
                ease: EASING.standard,
            }}
            className="relative overflow-hidden rounded-[36px] border border-white/8 bg-white/2 p-8"
        >
            {/* Ambient */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/6 blur-[120px]" />

            <div className="relative z-10">

                {/* Header */}

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                    <div>

                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300">
                            Monad Wallet
                        </p>

                        <h2 className="mt-2 text-3xl font-black text-white">
                            Connected Identity
                        </h2>

                        <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                            Your wallet secures your professional identity,
                            document ownership and future on-chain reputation.
                        </p>

                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 font-medium text-emerald-300">

                        <RiCheckDoubleLine />

                        {wallet.connected
                            ? "Connected"
                            : "Disconnected"}

                    </div>

                </div>

                {/* Main Card */}

                <div className="mt-10 rounded-[30px] border border-violet-500/15 bg-linear-to-br from-violet-500/8 to-transparent p-7">

                    <div className="flex items-center gap-5">

                        <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
                            <RiWallet3Line className="text-3xl" />
                        </div>

                        <div>

                            <h3 className="text-2xl font-bold text-white">
                                {wallet.network}
                            </h3>

                            <p className="mt-2 font-mono text-sm text-zinc-400">
                                {wallet.address}
                            </p>

                        </div>

                    </div>

                    <div className="mt-8 grid gap-5 md:grid-cols-3">

                        <StatusCard
                            icon={RiShieldCheckLine}
                            label="Verification"
                            value={
                                wallet.verified
                                    ? "Verified"
                                    : "Pending"
                            }
                        />

                        <StatusCard
                            icon={RiFingerprintLine}
                            label="Last Sync"
                            value={wallet.lastSync}
                        />

                        <StatusCard
                            icon={RiWallet3Line}
                            label="Network"
                            value={wallet.network}
                        />

                    </div>

                </div>

                {/* Footer */}

                <div className="mt-8 flex flex-wrap gap-4">

                    <button className="rounded-2xl border border-violet-500/20 bg-violet-500/10 px-6 py-3 font-medium text-violet-300 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/20 hover:text-white">
                        Refresh Connection
                    </button>

                    <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/4 px-6 py-3 font-medium text-zinc-300 transition-all duration-300 hover:border-violet-500/20 hover:bg-violet-500/10 hover:text-white">

                        <RiExternalLinkLine />

                        View Explorer

                    </button>

                </div>

            </div>

        </motion.section>
    );
}

interface StatusCardProps {
    icon: React.ElementType;
    label: string;
    value: string;
}

function StatusCard({
    icon: Icon,
    label,
    value,
}: StatusCardProps) {
    return (
        <div className="rounded-2xl border border-white/8 bg-white/4 p-5">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                <Icon className="text-xl" />
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-zinc-500">
                {label}
            </p>

            <h4 className="mt-2 text-lg font-bold text-white">
                {value}
            </h4>

        </div>
    );
}