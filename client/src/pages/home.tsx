import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PaymentsSection from "@/components/PaymentsSection";
import SecuritySection from "@/components/SecuritySection";
import GlobalSection from "@/components/GlobalSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <div className="section-divider"></div>
      <FeaturesSection />
      <div className="section-divider"></div>
      <PaymentsSection />
      <div className="section-divider"></div>
      <SecuritySection />
      <div className="section-divider"></div>
      <GlobalSection />
      <div className="section-divider"></div>
      <CTASection />
      <Footer />
    </div>
  );
}
