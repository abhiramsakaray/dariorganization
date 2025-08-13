import { UserCheck, DollarSign, Key, Lock } from "lucide-react";

export default function SecuritySection() {
  return (
    <section id="security" className="py-20 bg-dari-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="security-title">
            Bank-Level <span className="text-dari-green">Security</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="security-description">
            Your funds and personal information are protected with enterprise-grade security, 
            KYC compliance, and AML regulations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-6" data-testid="security-feature-kyc">
            <div className="security-shield mx-auto">
              <UserCheck className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold">KYC Compliant</h3>
            <p className="text-gray-600">Know Your Customer verification ensures regulatory compliance and user safety.</p>
          </div>
          
          <div className="text-center space-y-6" data-testid="security-feature-aml">
            <div className="security-shield mx-auto">
              <DollarSign className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold">AML Protection</h3>
            <p className="text-gray-600">Anti-Money Laundering protocols protect against financial crimes.</p>
          </div>
          
          <div className="text-center space-y-6" data-testid="security-feature-custodial">
            <div className="security-shield mx-auto">
              <Key className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold">Custodial Wallet</h3>
            <p className="text-gray-600">We securely manage your private keys with institutional-grade protection.</p>
          </div>
          
          <div className="text-center space-y-6" data-testid="security-feature-encrypted">
            <div className="security-shield mx-auto">
              <Lock className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold">Encrypted</h3>
            <p className="text-gray-600">End-to-end encryption protects all your transactions and personal data.</p>
          </div>
        </div>
        
        {/* Security Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg" data-testid="security-stats">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div data-testid="stat-encryption">
              <div className="text-4xl font-bold text-dari-green mb-2">256-bit</div>
              <div className="text-gray-600">Encryption Standard</div>
            </div>
            <div data-testid="stat-uptime">
              <div className="text-4xl font-bold text-dari-green mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div data-testid="stat-monitoring">
              <div className="text-4xl font-bold text-dari-green mb-2">24/7</div>
              <div className="text-gray-600">Security Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
