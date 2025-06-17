import { Button } from "@/components/ui/button";
import { WHATSAPP_Num_URL } from "@/constants/urlConstants";
import { Phone } from "lucide-react";

export default function FinalCallToAction() {
  return (
    <section className="mt-4 md:h-[80vh] flex justify-center items-center bg-[var(--primary-blue)] Newsreader text-white w-full">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-20 text-center">
        <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl max-w-4xl">
          Ready to make your money work for you — without the stress of trading
          yourself?
        </h2>
        <a href={WHATSAPP_Num_URL} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-[var(--accent-green)] hover:bg-accent-green/90 text-white Karla text-lg rounded-lg px-8 py-6 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Phone className="mr-3 h-6 w-6" />
            Book a Free Call Now
          </Button>
        </a>
      </div>
    </section>
  );
}
