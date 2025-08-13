import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { DollarSign, Send } from "lucide-react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast({
          title: "Success!",
          description: "You've been added to our waitlist. We'll notify you when DARI Wallet launches.",
        });
        setEmail("");
      } else {
        const data = await res.json();
        toast({
          title: "Error",
          description: data.error || "Failed to join waitlist.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Network error. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl lg:text-6xl font-bold" data-testid="cta-title">
          Ready to <span className="text-dari-green">Transform</span><br />
          Your Payments?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-testid="cta-description">
          Join the waitlist for DARI Wallet and be first to access secure USDC & USDT payments. 
          Get early access to the future of international money transfers with KYC-compliant stablecoin banking.
        </p>
        
        {/* Email Signup */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4" data-testid="email-signup-form">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-dari-green"
              data-testid="input-email"
              required
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-dari-green text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
              data-testid="button-get-notified"
            >
              {isSubmitting ? "Submitting..." : "Get Notified"}
            </Button>
          </form>
          <p className="text-sm text-gray-400 mt-4" data-testid="privacy-notice">
            We'll notify you when DARI Wallet launches. No spam, ever.
          </p>
        </div>
        
        {/* Social Proof */}
        <div className="flex justify-center items-center pt-8 border-t border-gray-800" data-testid="social-proof">
          <div className="text-center" data-testid="launch-stat">
            <div className="text-2xl font-bold text-dari-green">2026</div>
            <div className="text-sm text-gray-400">Launch Date</div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-card opacity-20" data-testid="floating-element-1">
        <div className="security-shield">
          <DollarSign className="text-white text-xl" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 floating-card opacity-20 floating-delay-1" data-testid="floating-element-2">
        <div className="security-shield">
          <Send className="text-white text-xl" />
        </div>
      </div>
    </section>
  );
}
