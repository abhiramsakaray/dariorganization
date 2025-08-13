import { Zap, DollarSign, Clock, CreditCard, Wallet } from "lucide-react";

export default function PaymentsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold" data-testid="payments-title">
              International <span className="text-dari-green">Payments</span><br />
              Made Simple
            </h2>
            <p className="text-xl text-gray-600" data-testid="payments-description">
              Send money across borders instantly with our advanced stablecoin infrastructure. 
              No more waiting days for traditional bank transfers.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-testid="feature-instant">
                <div className="w-12 h-12 bg-dari-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Transfers</h3>
                  <p className="text-gray-600">Complete transactions in seconds, not days</p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-testid="feature-low-fees">
                <div className="w-12 h-12 bg-dari-green rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Low Fees</h3>
                  <p className="text-gray-600">Minimal transaction costs compared to traditional methods</p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-testid="feature-availability">
                <div className="w-12 h-12 bg-dari-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                  <p className="text-gray-600">Send money anytime, anywhere, any day of the week</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 3D Payment Cards */}
          <div className="relative flex justify-center" data-testid="payment-cards-container">
            <div className="grid grid-cols-2 gap-6">
              <div className="payment-card-3d floating-card" data-testid="payment-card-usdc">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <CreditCard className="text-dari-green text-xl" />
                    <span className="text-xs">USDC</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs opacity-60">Balance</div>
                    <div className="text-lg font-bold">$5,420.50</div>
                  </div>
                  <div className="text-xs">•••• •••• •••• 8524</div>
                </div>
              </div>
              <div className="payment-card-3d floating-card mt-8 floating-delay-1" data-testid="payment-card-usdt">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Wallet className="text-dari-green text-xl" />
                    <span className="text-xs">USDT</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs opacity-60">Balance</div>
                    <div className="text-lg font-bold">$2,185.00</div>
                  </div>
                  <div className="text-xs">•••• •••• •••• 9621</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
