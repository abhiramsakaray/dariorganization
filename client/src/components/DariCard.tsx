import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DariCard() {
  return (
    <div 
      className="dari-3d floating-card border-2 border-green-500 rounded-2xl shadow-xl bg-white relative"
      style={{ width: 340, minHeight: 420, padding: '32px 40px 40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}
      data-testid="dari-mockup"
    >
      <div className="text-center mb-6">
        <div className="w-20 h-20 mx-auto flex items-center justify-center">
          <img src="/dari_logo.png" alt="DARI Logo" className="w-full h-full object-contain" />
        </div>
        <div className="font-extrabold text-4xl mt-2 tracking-wider" style={{ fontFamily: 'monospace' }}>DARI</div>
      </div>
      <div className="w-full flex flex-col gap-3 mb-6">
        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm font-bold">U</span>
          </div>
          <span className="font-semibold text-base mr-auto">USDC</span>
          <span className="font-bold text-lg">$2,450.00</span>
        </div>
        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm font-bold">T</span>
          </div>
          <span className="font-semibold text-base mr-auto">USDT</span>
          <span className="font-bold text-lg">$1,875.50</span>
        </div>
      </div>
      <Button 
        className="w-[90%] mx-auto bg-dari-green text-white py-3 rounded-lg font-semibold text-base"
        style={{ marginTop: 8, marginBottom: 0 }}
        data-testid="button-send-payment"
      >
        Send Payment
      </Button>
      {/* Floating Black Card (top right) */}
      <div className="absolute" style={{ right: -38, top: -38 }}>
        <div className="bg-black rounded-2xl w-24 h-16 flex items-center justify-center shadow-2xl">
          <div className="w-10 h-10 flex items-center justify-center">
            <span className="block w-8 h-1.5 bg-green-400 rounded" />
          </div>
        </div>
      </div>
      {/* Floating Green Circle with Shield Icon, absolutely positioned to overlap bottom right */}
      <div className="absolute" style={{ right: -40, bottom: -40 }}>
        <div className="bg-green-500 rounded-full w-24 h-24 flex items-center justify-center shadow-2xl">
          <Shield className="text-white text-3xl" />
        </div>
      </div>
    </div>
  );
}
