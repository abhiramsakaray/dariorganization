import { CheckCircle, Link, Box, Lock } from "lucide-react";
import { SiEthereum } from "react-icons/si";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-dari-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="features-title">
            Powered by <span className="text-dari-green">Stablecoins</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="features-description">
            Experience the future of digital payments with USDC and USDT support, 
            delivering stability and speed in every transaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* USDC Support */}
          <div className="card-3d bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group" data-testid="feature-usdc">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <SiEthereum className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold" data-testid="usdc-title">USDC Support</h3>
              <p className="text-gray-600" data-testid="usdc-description">
                Send and receive USD Coin with lightning-fast transactions and minimal fees across global networks.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-dari-green" data-testid="usdc-feature">
                <CheckCircle className="w-4 h-4" />
                <span>Instant Transfers</span>
              </div>
            </div>
          </div>

          {/* USDT Support */}
          <div className="card-3d bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group" data-testid="feature-usdt">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">₮</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold" data-testid="usdt-title">USDT Support</h3>
              <p className="text-gray-600" data-testid="usdt-description">
                Access Tether's widely adopted stablecoin for seamless international payments and remittances.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-dari-green" data-testid="usdt-feature">
                <CheckCircle className="w-4 h-4" />
                <span>Global Acceptance</span>
              </div>
            </div>
          </div>

          {/* Cross-Border Payments */}
          <div className="card-3d bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group md:col-span-2 lg:col-span-1" data-testid="feature-cross-border">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="globe-icon w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <div className="globe-3d"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold" data-testid="cross-border-title">Cross-Border</h3>
              <p className="text-gray-600" data-testid="cross-border-description">
                Break down financial barriers with instant cross-border payments to anywhere in the world.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-dari-green" data-testid="cross-border-feature">
                <CheckCircle className="w-4 h-4" />
                <span>No Boundaries</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 3D Blockchain Visualization */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8" data-testid="blockchain-title">Built on Blockchain Technology</h3>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4" data-testid="blockchain-visualization">
            <div className="blockchain-node pulse-slow">
              <div className="absolute inset-0 flex items-center justify-center">
                <Link className="text-white text-sm" />
              </div>
            </div>
            <div className="w-16 h-0.5 bg-dari-green hidden md:block"></div>
            <div className="blockchain-node pulse-slow pulse-delay-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <Box className="text-white text-sm" />
              </div>
            </div>
            <div className="w-16 h-0.5 bg-dari-green hidden md:block"></div>
            <div className="blockchain-node pulse-slow pulse-delay-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="text-white text-sm" />
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto" data-testid="blockchain-description">
            Every transaction is secured by immutable blockchain technology, ensuring transparency and trust.
          </p>
        </div>
      </div>
    </section>
  );
}
