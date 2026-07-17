import { ROUTES } from "../routes/routes";

export const navigation = [
    {
        label: "Vault",
        path: ROUTES.APP,
    },
    {
        label: "Profile",
        path: ROUTES.PROFILE,
    },
    {
        label: "Library",
        path: ROUTES.LIBRARY,
    },
    {
        label: "Settings",
        path: ROUTES.SETTINGS,
    },
] as const;

export const landingNavigation = [
    {
        label: "Features",
        href: "#features",
    },
    {
        label: "How It Works",
        href: "#how-it-works",
    },
    {
        label: "Browser Companion",
        href: "#browser-companion",
    },
    {
        label: "Monad",
        href: "#monad",
    },
] as const;