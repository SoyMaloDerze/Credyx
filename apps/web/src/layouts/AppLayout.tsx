import { useState } from "react";
import { Outlet } from "react-router-dom";

import MobileSidebar from "./MobileSidebar";
import TopBar from "./TopBar";

export default function AppLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <div className="min-h-screen bg-[#09090B] text-white">
                {/* Shared application navigation */}
                <TopBar
                    onMenuClick={() => setIsSidebarOpen(true)}
                />

                {/* Mobile navigation */}
                <MobileSidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />

                {/* Active page */}
                <main className="mx-auto w-full max-w-360 px-6 py-8 lg:px-10">
                    <Outlet />
                </main>
            </div>
        </>
    );
}