import { Button } from "@/components/ui/button";
import { WHATSAPP_Num_URL } from "@/constants/urlConstants";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCallToAction() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#181c20] to-[#23272b] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center gap-12 text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-6xl xl:text-fluid-7xl font-extrabold tracking-wide mb-4">
              Ready to make your money work for you?
            </h2>
            <p className="text-fluid-md sm:text-fluid-lg md:text-fluid-xl text-white/80 max-w-3xl mx-auto">
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
                className="bg-[#0052CC] hover:bg-[#0052CC]/90 text-white font-Karla text-fluid md:text-fluid-lg lg:text-fluid-xl rounded-xl px-8 py-7 shadow-xl transition-all duration-300"
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
