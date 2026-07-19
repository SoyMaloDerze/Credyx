import { Link } from "react-router-dom";
import {
    RiGithubFill,
    RiGlobalLine,
    RiHeartFill,
    RiTwitterXFill,
} from "react-icons/ri";

import Logo from "../branding/Logo";

import { landingNavigation } from "../../constants/navigation";
import { ROUTES } from "../../routes/routes";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/8 px-6 py-14 lg:px-10">

            <div className="mx-auto max-w-7xl">

                {/* Top */}

                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

                    {/* Brand */}

                    <div className="max-w-md">

                        <Logo className="h-11 w-auto" />

                        <p className="mt-6 leading-8 text-zinc-400">
                            The Professional Identity Vault.
                            Store your career once, autofill opportunities
                            everywhere and own your credentials with Monad.
                        </p>

                    </div>

                    {/* Navigation */}

                    <div className="grid grid-cols-2 gap-12 md:grid-cols-3">

                        <div>

                            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                Product
                            </h3>

                            <div className="mt-5 flex flex-col gap-4">

                                {landingNavigation.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="text-zinc-400 transition-colors duration-300 hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                ))}

                            </div>

                        </div>

                        <div>

                            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                Platform
                            </h3>

                            <div className="mt-5 flex flex-col gap-4">

                                <Link
                                    to={ROUTES.APP}
                                    className="text-zinc-400 transition-colors duration-300 hover:text-white"
                                >
                                    Launch Vault
                                </Link>

                                <a
                                    href="#monad"
                                    className="text-zinc-400 transition-colors duration-300 hover:text-white"
                                >
                                    Monad
                                </a>

                                <a
                                    href="#browser-companion"
                                    className="text-zinc-400 transition-colors duration-300 hover:text-white"
                                >
                                    Browser Companion
                                </a>

                            </div>

                        </div>

                        <div>

                            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                Connect
                            </h3>

                            <div className="mt-5 flex items-center gap-3">

                                <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-zinc-400 transition-all duration-300 hover:border-violet-500/20 hover:text-white">

                                    <RiGithubFill />

                                </button>

                                <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-zinc-400 transition-all duration-300 hover:border-violet-500/20 hover:text-white">

                                    <RiTwitterXFill />

                                </button>

                                <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-zinc-400 transition-all duration-300 hover:border-violet-500/20 hover:text-white">

                                    <RiGlobalLine />

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-14 flex flex-col gap-5 border-t border-white/8 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">

                    <p>
                        © {year} Credyx. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2">

                        Built with

                        <RiHeartFill className="text-violet-400" />

                        for the Monad ecosystem.

                    </div>

                </div>

            </div>

        </footer>
    );
}