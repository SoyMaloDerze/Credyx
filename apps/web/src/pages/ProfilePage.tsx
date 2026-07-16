import Hero from "../components/profile/Hero";
import ProfileCompletion from "../components/profile/ProfileCompletion";
import PersonalInformation from "../components/profile/PersonalInformation";
import ContactInformation from "../components/profile/ContactInformation";
import ProfessionalSummary from "../components/profile/ProfessionalSummary";
import SkillsSection from "../components/profile/SkillsSection";
import ProfessionalLinks from "../components/profile/ProfessionalLinks";
import WorkPreferences from "../components/profile/WorkPreferences";
import MonadIdentity from "../components/profile/MonadIdentity";
import SaveChangesBar from "../components/profile/SaveChangesBar";
import { useProfileStore } from "../store/useProfileStore";

export default function ProfilePage() {
    const {
        isDirty,
        saveProfile,
        resetProfile,
    } = useProfileStore();

    return (
        <>
            <div className="space-y-8">

                {/* Hero */}
                <Hero />

                {/* Top Dashboard */}
                <section className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">

                    <ProfileCompletion />

                    <MonadIdentity />

                </section>

                {/* Professional Summary */}
                <ProfessionalSummary />

                {/* Identity */}
                <section className="grid gap-8 xl:grid-cols-2">

                    <PersonalInformation />

                    <ContactInformation />

                </section>

                {/* Professional Assets */}
                <section className="grid gap-8 xl:grid-cols-[1.2fr_.8fr]">

                    <SkillsSection />

                    <ProfessionalLinks />

                </section>

                {/* Preferences */}
                <WorkPreferences />

                {/* Save Bar */}
                <SaveChangesBar
                    visible={isDirty}
                    onSave={saveProfile}
                    onReset={resetProfile}
                />

            </div>
        </>
    );
}