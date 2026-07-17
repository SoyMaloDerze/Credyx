import BrowserCompanion from "../components/landing/BrowserCompanion";
import BuiltOnMonad from "../components/landing/BuiltOnMonad";
import CTA from "../components/landing/CTA";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import Navbar from "../components/landing/Navbar";
import Problem from "../components/landing/Problem";

export default function LandingPage() {
    return (
        <>
            <div className="min-h-screen overflow-x-hidden bg-[#07070A]">

                <Navbar />

                <main>

                    <Hero />

                    <Problem />

                    <Features />

                    <HowItWorks />

                    <BrowserCompanion />

                    <BuiltOnMonad />

                    <CTA />

                </main>

                <Footer />

            </div>
        </>
    );
}