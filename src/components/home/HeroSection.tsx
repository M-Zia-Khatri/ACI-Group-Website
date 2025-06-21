import { Button } from "@/components/ui/button";
import { WHATSAPP_Num_URL } from "@/constants/urlConstants";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full h-[90vh] bg-[var(--background-dark-1)] text-white flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="mx-4 py-24 text-center z-10 relative "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-5xl Karla mb-4 md:mb-6 font-bold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Turn Financial Confusion into Confidence
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-fluid md:text-fluid-lg lg:text-fluid-xl font-Newsreader mb-4 md:mb-6 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Expert-led copy trading in Fores, Crypto & Stocks to help you grow
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Button
              variant="ghost"
              className="cta text-fluid md:text-fluid-lg lg:text-fluid-xl hover:bg-[#1C1D1D] btn transition-colors duration-200 hover:text-[var(--primary-blue)] font-semibold"
            >
              Book a Free Strategy Call
            </Button>
          </motion.div>
        </motion.a>
      </motion.div>

      <video
        className="absolute top-0 z-0 left-0 w-full h-full object-cover opacity-12.5"
        src="/trading.mp4"
        autoPlay
        loop
        muted
      />
    </section>
  );
}
