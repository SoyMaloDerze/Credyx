import DataSettings from "../components/settings/DataSettings";
import DeveloperSettings from "../components/settings/DeveloperSettings";
import Hero from "../components/settings/Hero";
import MonadWallet from "../components/settings/MonadWallet";
import NotificationSettings from "../components/settings/NotificationSettings";
import SaveChangesBar from "../components/settings/SaveChangesBar";
import SecuritySettings from "../components/settings/SecuritySettings";

export default function SettingsPage() {
    return (
        <>
            <div className="space-y-10">

                {/* Hero */}
                <Hero />

                {/* Wallet */}
                <MonadWallet />

                {/* Controls */}
                <section className="grid gap-8 xl:grid-cols-2">

                    <SecuritySettings />

                    <NotificationSettings />

                    <DataSettings />

                    <DeveloperSettings />

                </section>

                {/* Save Changes */}
                <SaveChangesBar />

            </div>
        </>
    );
}