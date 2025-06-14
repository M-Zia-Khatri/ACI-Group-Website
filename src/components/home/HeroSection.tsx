import { Button } from "@/components/ui/button";
import { WHATSAPP_Num_URL } from "@/constants/urlConstants";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full h-[90vh] bg-[var(--dark-navy)] text-white flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="container mx-auto px-6 py-24 text-center z-10 relative tracking-wide"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-[var(--Bebas-Neue)] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Turn Financial Confusion into Confidence
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl font-roboto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Expert-led copy trading in Forex, Crypto & Stocks to help you grow
          your wealth without stress.
        </motion.p>
        <motion.a
          href={WHATSAPP_Num_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button className="text-white bg-[var(--dark-navy)] text-xl hover:bg-[#1C1D1D] hover:text-[var(--primary-blue)] transition-colors duration-500 cta z-50">
            Book a Free Strategy Call
          </Button>
        </motion.a>
      </motion.div>

      <video
        className="absolute top-0 z-0 left-0 w-full h-full object-cover opacity-20"
        src="/trading.mp4"
        autoPlay
        loop
        muted
      />
    </section>
  );
}
