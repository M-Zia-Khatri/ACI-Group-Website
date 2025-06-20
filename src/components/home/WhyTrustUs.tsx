import { BarChart, Lock, BrainCircuit, Globe } from "lucide-react";
import { motion } from "framer-motion";

const trustFeatures = [
  {
    icon: BarChart,
    title: "Expert Traders",
    description: "with years of live market experience",
  },
  {
    icon: Lock,
    title: "Secure & Transparent",
    description: "systems — no hidden trades",
  },
  {
    icon: BrainCircuit,
    title: "Smart Risk Management",
    description: "focused on long-term gains",
  },
  {
    icon: Globe,
    title: "Serving Clients Globally",
    description: "based in Pakistan",
  },
];

export function WhyTrustUs() {
  return (
    <section className="py-8 md:py-12 xl:py-16 bg-[#202428] text-white">
      <div className="max-w-[var(--max-width)] w-full mx-auto px-4 md:px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-fluid-xl sm:text-fluid-2xl md:text-fluid-3xl lg:text-fluid-4xl xl:text-fluid-5xl font-extrabold leading-snug tracking-wide mb-4">
            Why People Trust ACI Group
          </h2>
          <hr className="relative top-5 border-t border-[1.5px] border-[#2e3338]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center bg-[#151818] rounded-xl p-8 hover:bg-[#151818] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0052CC]/10">
                <feature.icon
                  className="h-8 w-8 text-[#0052CC]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-lg lg:text-fluid-xl font-bold mb-3 text-white leading-snug md:leading-tight">
                {feature.title}
              </h3>
              <p className="text-fluid sm:text-fluid-md text-center text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
