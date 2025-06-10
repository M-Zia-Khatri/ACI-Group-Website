import { Button } from "@/components/ui/button";
import { WHATSAPP_Num_URL } from "@/constants/urlConstants";

export default function HeroSection() {
  return (
    <section className="w-full h-[90vh] bg-[var(--dark-navy)] text-white flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-24 text-center z-10 relative">
        <h1 className="text-5xl md:text-6xl font-[var(--Bebas-Neue)] mb-6">
          Turn Financial Confusion into Confidence
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-roboto mb-8">
          Expert-led copy trading in Forex, Crypto & Stocks to help you grow
          your wealth without stress.
        </p>
        <a href={WHATSAPP_Num_URL} target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#0052CC] hover:bg-[#003f9e] text-white px-8 py-4 text-lg font-semibold z-50">
            Book a Free Strategy Call
          </Button>
        </a>
      </div>

      <video
        className="absolute top-0 z-0 left-0 w-full h-full object-cover opacity-20"
        src="public/trading.mp4"
        autoPlay
        loop
        muted
      />
    </section>
  );
}
