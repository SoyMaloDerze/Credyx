import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { page } from "../constants/motion";
import { MOTION } from "../constants/motion";
import { EASING } from "../constants/easing";

import AppLayout from "../layouts/AppLayout";

import LoginPage from "../pages/LoginPage";
import VaultPage from "../pages/VaultPage";
import ProfilePage from "../pages/ProfilePage";
import LibraryPage from "../pages/LibraryPage";
import SettingsPage from "../pages/SettingsPage";

import { ROUTES } from "./routes";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />

                <Route element={<AppLayout />}>
                    <Route
                        path={ROUTES.HOME}
                        element={
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
                                <VaultPage />
                            </motion.main>
                        }
                    />

                    <Route
                        path={ROUTES.PROFILE}
                        element={
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
                                <ProfilePage />
                            </motion.main>
                        }
                    />

                    <Route
                        path={ROUTES.LIBRARY}
                        element={
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
                                <LibraryPage />
                            </motion.main>
                        }
                    />

                    <Route
                        path={ROUTES.SETTINGS}
                        element={
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
                                <SettingsPage />
                            </motion.main>
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