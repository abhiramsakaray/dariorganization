import { Twitter, Linkedin } from "lucide-react";
import dariLogo from "@assets/dari_black_1755064142210.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4" data-testid="footer-brand">
            <div className="flex items-center">
              <img 
                src={dariLogo} 
                alt="DARI Wallet Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-600" data-testid="footer-description">
              Next-generation stablecoin wallet for secure, instant, and borderless transactions. Supporting USDC and USDT for international payments with KYC/AML compliance.
            </p>
          </div>
          
          <div className="space-y-4" data-testid="footer-social">
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/dariwallet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-dari-green transition-colors" 
                data-testid="social-x"
                aria-label="Follow DARI Wallet on X (formerly Twitter)"
              >
                <Twitter className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/company/dariorganization" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-dari-green transition-colors" 
                data-testid="social-linkedin"
                aria-label="Connect with DARI Organization on LinkedIn"
              >
                <Linkedin className="text-xl" />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Join our community for updates on DARI Wallet launch and stablecoin payment innovations.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center" data-testid="footer-bottom">
          <p className="text-gray-600 text-sm" data-testid="copyright">
            © 2024 DARI Wallet. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-4 md:mt-0" data-testid="launch-message">
            Launching Soon • Get Early Access
          </p>
        </div>
      </div>
    </footer>
  );
}
