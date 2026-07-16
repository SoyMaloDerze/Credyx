import { ROUTES } from "../routes/routes";

export const navigation = [
    {
        label: "Vault",
        path: ROUTES.HOME,
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