import { Button } from "@/components/ui/button";
import { WHATSAPP_Num_URL } from "@/constants/urlConstants";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCallToAction() {
  return (
    <section className="py-8 md:py-12 xl:py-16 bg-[var(--background-dark-3)] text-white">
      <div className="w-full max-w-[var(--max-width)] mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center gap-12 text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-5xl leading-snug font-extrabold tracking-wide mb-4">
              Ready to make your money work for you?
            </h2>
            <p className="text-fluid md:text-fluid-lg lg:text-fluid-xl text-white/80 max-w-3xl mx-auto">
              Start your journey to financial confidence — without the stress of
              trading yourself
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href={WHATSAPP_Num_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Button
                size="lg"
                variant="ghost"
                className="cta text-fluid md:text-fluid-lg lg:text-fluid-xl hover:bg-[#1C1D1D] btn transition-colors duration-200 hover:text-[var(--primary-blue)] font-semibold"
              >
                <Phone className="mr-3 h-6 w-6" />
                Book a Free Strategy Call
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
