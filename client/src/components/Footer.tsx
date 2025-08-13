import { Twitter, Linkedin, Send, Wallet } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4" data-testid="footer-brand">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-dari-green rounded-lg flex items-center justify-center">
                <Wallet className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold">DARI</span>
            </div>
            <p className="text-gray-600" data-testid="footer-description">
              Next-generation stablecoin wallet for secure, instant, and borderless transactions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-dari-green transition-colors" data-testid="social-twitter">
                <Twitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-dari-green transition-colors" data-testid="social-linkedin">
                <Linkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-dari-green transition-colors" data-testid="social-telegram">
                <Send className="text-xl" />
              </a>
            </div>
          </div>
          
          <div data-testid="footer-product">
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-dari-green transition-colors" data-testid="link-features">Features</a></li>
              <li><a href="#" className="hover:text-dari-green transition-colors" data-testid="link-security">Security</a></li>
              <li><a href="#" className="hover:text-dari-green transition-colors" data-testid="link-pricing">Pricing</a></li>
              <li><a href="#" className="hover:text-dari-green transition-colors" data-testid="link-api">API</a></li>
            </ul>
          </div>
          
          <div data-testid="footer-company">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-dari-green transition-colors" data-testid="link-about">About</a></li>
              <li><a href="#" className="hover:text-dari-green transition-colors" data-testid="link-blog">Blog</a></li>
              <li><a href="#" className="hover:text-dari-green transition-colors" data-testid="link-careers">Careers</a></li>
              <li><a href="#" className="hover:text-dari-green transition-colors" data-testid="link-contact">Contact</a></li>
            </ul>
          </div>
          
          <div data-testid="footer-legal">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-dari-green transition-colors" data-testid="link-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-dari-green transition-colors" data-testid="link-terms">Terms of Service</a></li>
              <li><a href="#" className="hover:text-dari-green transition-colors" data-testid="link-compliance">Compliance</a></li>
              <li><a href="#" className="hover:text-dari-green transition-colors" data-testid="link-licenses">Licenses</a></li>
            </ul>
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
