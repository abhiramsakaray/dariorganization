import { CheckCircle } from "lucide-react";

export default function GlobalSection() {
  return (
    <section id="global" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Globe and Stats */}
          <div className="text-center lg:text-left space-y-8">
            <div className="flex justify-center lg:justify-start" data-testid="globe-container">
              <div className="globe-3d"></div>
            </div>
            <div className="grid grid-cols-2 gap-6" data-testid="global-stats">
              <div className="space-y-2" data-testid="stat-countries">
                <div className="text-3xl font-bold text-dari-green">190+</div>
                <div className="text-gray-600">Countries Supported</div>
              </div>
              <div className="space-y-2" data-testid="stat-currencies">
                <div className="text-3xl font-bold text-dari-green">50+</div>
                <div className="text-gray-600">Currencies</div>
              </div>
              <div className="space-y-2" data-testid="stat-transfer-time">
                <div className="text-3xl font-bold text-dari-green">&lt;3s</div>
                <div className="text-gray-600">Average Transfer Time</div>
              </div>
              <div className="space-y-2" data-testid="stat-support">
                <div className="text-3xl font-bold text-dari-green">24/7</div>
                <div className="text-gray-600">Global Support</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold" data-testid="global-title">
              <span className="text-dari-green">Global</span> Reach,<br />
              Local Impact
            </h2>
            <p className="text-xl text-gray-600" data-testid="global-description">
              Whether you're sending money to family abroad, paying international suppliers, 
              or managing global operations, DARI Wallet connects you to the world.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3" data-testid="global-feature-rates">
                <CheckCircle className="text-dari-green text-xl" />
                <span className="text-lg">Real-time exchange rates</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="global-feature-language">
                <CheckCircle className="text-dari-green text-xl" />
                <span className="text-lg">Multi-language support</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="global-feature-compliance">
                <CheckCircle className="text-dari-green text-xl" />
                <span className="text-lg">Local compliance in each region</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="global-feature-support">
                <CheckCircle className="text-dari-green text-xl" />
                <span className="text-lg">24/7 customer support worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
