import { CheckCircle, Globe } from "lucide-react";

export default function GlobalSection() {
  return (
    <>
      <section id="global" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 3D Globe and Stats */}
            <div className="text-center lg:text-left space-y-8">
              <div className="flex justify-center lg:justify-start" data-testid="globe-container">
                <div className="flex flex-col items-center mb-6">
                  <Globe className="text-dari-green w-16 h-16 mb-4" />
                </div>
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
                or managing global operations, DARI connects you to the world.
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

      {/* About Team Section */}
      <section id="about-team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Founder Photo Placeholder */}
          <div className="flex-shrink-0 w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-dari-green">
            <span id="founder-initials" className="text-5xl font-bold text-dari-green flex items-center justify-center w-full h-full absolute">AS</span>
            <img
              src="/founder.jpg"
              alt="Abhiram Sakaray"
              className="object-cover w-full h-full relative z-10"
              onLoad={(e) => {
                const fallback = e.currentTarget.previousElementSibling;
                if (fallback) fallback.style.display = 'none';
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.previousElementSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
          </div>
          <div className="flex-1 space-y-4 font-sans">
            <h3 className="text-4xl lg:text-5xl font-bold text-dari-green mb-2 leading-tight">Abhiram Sakaray</h3>
            <div className="text-xl font-semibold text-gray-700 mb-2">Founder & Visionary of DARI Organization</div>
            <p className="text-gray-600 text-lg leading-relaxed">
              At just 18 years old, Abhiram Sakaray founded DARI with a bold vision to transform digital payments and stablecoin adoption globally. As the creator of a next-generation stablecoin wallet and payment ecosystem, he is pioneering secure, instant, and borderless transactions that bridge traditional banking with the future of decentralized finance.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Under his leadership, DARI is building a compliant, user-centric, and globally scalable platform that integrates multi-currency operations, real-time payments, and strong KYC/AML safeguards. His journey reflects a unique combination of youthful innovation, technical insight, and entrepreneurial drive, setting DARI on a path to become a trusted name in the evolving fintech landscape.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              As a young leader in Cyber Security and Blockchain Technology, Abhiram is committed to creating financial solutions that empower users, enable cross-border trade, and foster financial inclusion worldwide.
            </p>
            <p className="text-gray-700 text-base mt-4">
              <span className="font-semibold">Email Address:</span> <a href="mailto:abhiram@dariorganization.com" className="text-dari-green hover:underline">abhiram@dariorganization.com</a>
            </p>
            {/* Social Links */}
            <div className="flex space-x-6 mt-4">
              <a href="mailto:abhiram@dariorganization.com" className="text-dari-green hover:text-green-700 text-2xl" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M12 13.065 2.553 6.276A2 2 0 0 1 4 6h16a2 2 0 0 1 1.447.276zM20 8.234l-7.447 5.276a1 1 0 0 1-1.106 0L4 8.234V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/abhiramsakaray/" target="_blank" rel="noopener noreferrer" className="text-dari-green hover:text-green-700 text-2xl" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.594v5.602z"/></svg>
              </a>
              <a href="https://twitter.com/abhiramsakaray" target="_blank" rel="noopener noreferrer" className="text-dari-green hover:text-green-700 text-2xl" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.138a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
              </a>
              <a href="https://instagram.com/abhiramsakaray" target="_blank" rel="noopener noreferrer" className="text-dari-green hover:text-green-700 text-2xl" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="32" height="32"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.941.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.274-.07 1.682-.07 4.941s.012 3.667.07 4.941c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.274.058 1.682.07 4.941.07s3.667-.012 4.941-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.274.07-1.682.07-4.941s-.012-3.667-.07-4.941c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.274-.058-1.682-.07-4.941-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
