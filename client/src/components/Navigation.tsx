import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import dariLogo from "@assets/dari_black_1755064142210.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 border-b border-gray-100 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md" : "bg-white/90 backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src={dariLogo} 
              alt="DARI Wallet Logo" 
              className="h-10 w-auto"
              data-testid="logo-image"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-dari-green transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("security")}
              className="text-gray-700 hover:text-dari-green transition-colors"
              data-testid="nav-security"
            >
              Security
            </button>
            <button 
              onClick={() => scrollToSection("global")}
              className="text-gray-700 hover:text-dari-green transition-colors"
              data-testid="nav-global"
            >
              Global
            </button>
            <Button 
              className="bg-dari-green text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all transform hover:scale-105"
              onClick={() => scrollToSection("cta")}
              data-testid="nav-get-notified"
            >
              Get Notified
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4" data-testid="mobile-menu">
            <button 
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-gray-700 hover:text-dari-green transition-colors"
              data-testid="mobile-nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("security")}
              className="block w-full text-left text-gray-700 hover:text-dari-green transition-colors"
              data-testid="mobile-nav-security"
            >
              Security
            </button>
            <button 
              onClick={() => scrollToSection("global")}
              className="block w-full text-left text-gray-700 hover:text-dari-green transition-colors"
              data-testid="mobile-nav-global"
            >
              Global
            </button>
            <Button 
              className="w-full bg-dari-green text-white rounded-full hover:bg-green-600 transition-all"
              onClick={() => scrollToSection("cta")}
              data-testid="mobile-nav-get-notified"
            >
              Get Notified
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
