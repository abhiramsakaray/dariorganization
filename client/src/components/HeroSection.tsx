import { Button } from "@/components/ui/button";
import { Wallet, CreditCard, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-block bg-dari-green/10 text-dari-green px-4 py-2 rounded-full text-sm font-semibold mb-4" data-testid="launching-soon-badge">
            Launching Soon
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight" data-testid="hero-title">
            DARI Wallet: Send Anywhere<br />
            <span className="text-dari-green">at Any Time!</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl" data-testid="hero-description">
            The next-generation stablecoin wallet enabling secure, instant international payments. 
            Supporting USDC and USDT with full KYC/AML compliance, 24/7 availability, and bank-level security for global transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              className="bg-dari-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
              data-testid="button-early-access"
            >
              Get Early Access
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all"
              data-testid="button-learn-more"
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
        
        {/* 3D Wallet Mockup */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="wallet-3d floating-card max-w-sm" data-testid="wallet-mockup">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-dari-green rounded-full mx-auto flex items-center justify-center">
                <Wallet className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold" data-testid="wallet-title">DARI Wallet</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg" data-testid="balance-usdc">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">U</span>
                    </div>
                    <span className="font-semibold">USDC</span>
                  </div>
                  <span className="text-lg font-bold">$2,450.00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg" data-testid="balance-usdt">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                    <span className="font-semibold">USDT</span>
                  </div>
                  <span className="text-lg font-bold">$1,875.50</span>
                </div>
              </div>
              <Button 
                className="w-full bg-dari-green text-white py-3 rounded-lg font-semibold"
                data-testid="button-send-payment"
              >
                Send Payment
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-10 -left-10 floating-card floating-delay-1" data-testid="floating-card-1">
            <div className="payment-card-3d w-32 h-20 flex items-center justify-center">
              <CreditCard className="text-dari-green text-xl" />
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 floating-card floating-delay-2" data-testid="floating-card-2">
            <div className="security-shield">
              <Shield className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
