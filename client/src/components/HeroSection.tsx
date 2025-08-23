import { Button } from "@/components/ui/button";
import { CreditCard, Shield } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section className="pt-20 pb-12 min-h-screen flex items-center relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        {/* Left: Text Content */}
        <div className="text-center lg:text-left space-y-6 sm:space-y-8">
          <div className="inline-block bg-dari-green/10 text-dari-green px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4" data-testid="launching-soon-badge">
            Launching Soon
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight" data-testid="hero-title">
            DARI: Send Anywhere<br />
            <span className="text-dari-green">at Any Time!</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0" data-testid="hero-description">
            The next-generation platform enabling secure, instant international payments. 
            Supporting USDC and USDT with full KYC/AML compliance, 24/7 availability, and bank-level security for global transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full">
            <Button 
              className="bg-dari-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
              data-testid="button-early-access"
              onClick={() => scrollToSection("cta")}
            >
              Get Early Access
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-black hover:text-white transition-all w-full sm:w-auto"
              data-testid="button-learn-more"
              onClick={() => scrollToSection("cta")}
            >
              Learn More
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-500 mt-2">
            <div className="flex items-center space-x-2" data-testid="feature-kyc">
              <div className="w-3 h-3 bg-dari-green rounded-full"></div>
              <span>KYC Compliant</span>
            </div>
            <div className="flex items-center space-x-2" data-testid="feature-aml">
              <div className="w-3 h-3 bg-dari-green rounded-full"></div>
              <span>AML Secured</span>
            </div>
            <div className="flex items-center space-x-2" data-testid="feature-24-7">
              <div className="w-3 h-3 bg-dari-green rounded-full"></div>
              <span>24/7 Available</span>
            </div>
          </div>
        </div>
        {/* Right: 3D Mockup */}
        <div className="flex justify-center lg:justify-end relative pr-0 lg:pr-12 mt-10 lg:mt-0 w-full">
          <div 
            className="dari-3d floating-card border-2 border-green-500 rounded-2xl shadow-xl bg-white relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none"
            style={{ minHeight: 320, maxWidth: 340, padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}
            data-testid="dari-mockup"
          >
            <div className="text-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center">
                <img src="/dari_logo.png" alt="DARI Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex items-center bg-gray-50 rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <span className="text-white text-xs sm:text-sm font-bold">U</span>
                </div>
                <span className="font-semibold text-sm sm:text-base mr-auto">USDC</span>
                <span className="font-bold text-base sm:text-lg">$2,450.00</span>
              </div>
              <div className="flex items-center bg-gray-50 rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                  <span className="text-white text-xs sm:text-sm font-bold">T</span>
                </div>
                <span className="font-semibold text-sm sm:text-base mr-auto">USDT</span>
                <span className="font-bold text-base sm:text-lg">$1,875.50</span>
              </div>
            </div>
            <Button 
              className="w-full sm:w-[90%] mx-auto bg-dari-green text-white py-2 sm:py-3 rounded-lg font-semibold text-base"
              style={{ marginTop: 8, marginBottom: 0 }}
              data-testid="button-send-payment"
              onClick={() => scrollToSection("cta")}
            >
              Send Payment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
