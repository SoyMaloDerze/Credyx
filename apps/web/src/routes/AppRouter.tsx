import { AnimatePresence, motion } from "framer-motion";
import {
    BrowserRouter,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";

import {
    page,
    MOTION,
} from "../constants/motion";
import { EASING } from "../constants/easing";

import AppLayout from "../layouts/AppLayout";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import VaultPage from "../pages/VaultPage";
import ProfilePage from "../pages/ProfilePage";
import LibraryPage from "../pages/LibraryPage";
import SettingsPage from "../pages/SettingsPage";

import { ROUTES } from "./routes";

function AnimatedPage({
    children,
}: React.PropsWithChildren) {
    return (
        <motion.main
            variants={page}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
                duration: MOTION.duration,
                ease: EASING.standard,
            }}
        >
            {children}
        </motion.main>
    );
}

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence
            mode="wait"
            initial={false}
        >
            <Routes
                location={location}
                key={location.pathname}
            >
                {/* Public */}

                <Route
                    path={ROUTES.LANDING}
                    element={
                        <AnimatedPage>
                            <LandingPage />
                        </AnimatedPage>
                    }
                />

                <Route
                    path={ROUTES.LOGIN}
                    element={
                        <AnimatedPage>
                            <LoginPage />
                        </AnimatedPage>
                    }
                />

                {/* Application */}

                <Route element={<AppLayout />}>
                    <Route
                        path={ROUTES.APP}
                        element={
                            <AnimatedPage>
                                <VaultPage />
                            </AnimatedPage>
                        }
                    />

                    <Route
                        path={ROUTES.PROFILE}
                        element={
                            <AnimatedPage>
                                <ProfilePage />
                            </AnimatedPage>
                        }
                    />

                    <Route
                        path={ROUTES.LIBRARY}
                        element={
                            <AnimatedPage>
                                <LibraryPage />
                            </AnimatedPage>
                        }
                    />

                    <Route
                        path={ROUTES.SETTINGS}
                        element={
                            <AnimatedPage>
                                <SettingsPage />
                            </AnimatedPage>
                        }
                    />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default function AppRouter() {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
}