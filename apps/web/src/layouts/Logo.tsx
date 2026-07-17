import { Link } from "react-router-dom";

import { ROUTES } from "../routes/routes";

export default function Logo() {
    return (
        <>
            <Link
                to={ROUTES.APP}
                className="group flex items-center gap-3 select-none"
            >
                {/* Brand Mark */}
                <div
                    className="
                        flex h-11 w-11 items-center justify-center
                        rounded-2xl border border-violet-500/20
                        bg-linear-to-br from-violet-600 to-violet-800
                        shadow-[0_0_30px_rgba(139,92,246,0.25)]
                        transition-all duration-200
                        group-hover:scale-[1.03]
                        group-hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                    "
                >
                    <span className="text-lg font-black tracking-tight text-white">
                        X
                    </span>
                </div>

                {/* Brand Name */}
                <div className="flex flex-col leading-none">
                    <span className="text-lg font-semibold tracking-tight text-white">
                        Credyx
                    </span>

                    <span className="text-xs text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400">
                        Identity Vault
                    </span>
                </div>
            </Link>
        </>
    );
}