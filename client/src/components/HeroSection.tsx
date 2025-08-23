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
    <section className="pt-24 pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-block bg-dari-green/10 text-dari-green px-4 py-2 rounded-full text-sm font-semibold mb-4" data-testid="launching-soon-badge">
            Launching Soon
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight" data-testid="hero-title">
            DARI: Send Anywhere<br />
            <span className="text-dari-green">at Any Time!</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl" data-testid="hero-description">
            The next-generation platform enabling secure, instant international payments. 
            Supporting USDC and USDT with full KYC/AML compliance, 24/7 availability, and bank-level security for global transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              className="bg-dari-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
              data-testid="button-early-access"
              onClick={() => scrollToSection("cta")}
            >
              Get Early Access
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all"
              data-testid="button-learn-more"
              onClick={() => scrollToSection("cta")}
            >
              Learn More
            </Button>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
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
        
  {/* 3D Mockup */}
  <div className="flex justify-center lg:justify-end relative pr-12">
          <div 
            className="dari-3d floating-card border-2 border-green-500 rounded-2xl shadow-xl bg-white relative"
            style={{ width: 340, minHeight: 420, padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}
            data-testid="dari-mockup"
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto flex items-center justify-center">
                <img src="/dari_logo.png" alt="DARI Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="w-full flex flex-col gap-3 mb-6">
              <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">U</span>
                </div>
                <span className="font-semibold text-base mr-auto">USDC</span>
                <span className="font-bold text-lg">$2,450.00</span>
              </div>
              <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">T</span>
                </div>
                <span className="font-semibold text-base mr-auto">USDT</span>
                <span className="font-bold text-lg">$1,875.50</span>
              </div>
            </div>
            <Button 
              className="w-[90%] mx-auto bg-dari-green text-white py-3 rounded-lg font-semibold text-base"
              style={{ marginTop: 8, marginBottom: 0 }}
              data-testid="button-send-payment"
              onClick={() => scrollToSection("cta")}
            >
              Send Payment
            </Button>

            {/* Floating Black Card removed as requested */}
          </div>
        </div>
      </div>
    </section>
  );
}
