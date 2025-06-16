import { Phone, Link2, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    icon: Phone,
    title: "Book a free strategy call",
    description:
      "Speak with our experts to align your investment goals and get a tailored plan.",
  },
  {
    step: 2,
    icon: Link2,
    title: "Choose your account and connect via copy trading",
    description:
      "Securely connect your trading account and let our proven strategies work for you.",
  },
  {
    step: 3,
    icon: CheckSquare,
    title: "Sit back and watch your portfolio grow in real-time",
    description:
      "Enjoy full visibility into your account with live dashboards and monthly performance reports.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="text-white py-16 md:py-24 lg:py-32 bg-[#0e1117]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-wider">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/80 text-lg md:text-xl">
            You'll get access to live dashboards, monthly reports, and full
            control over your funds.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Vertical Line */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-[#364153] z-0" />
          {/* Step List */}
          <ol className="flex flex-col md:grid md:grid-cols-9 md:grid-rows-3 gap-y-3.5 gap-x-4 relative z-10">
            {steps.map(({ step, icon: Icon, title, description }, index) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`
                  relative flex flex-col items-center text-center md:text-left
                  ${(() => {
                    switch (index) {
                      case 0:
                        return " md:col-start-1 md:col-span-4 md:items-end";
                        break;
                      case 1:
                        return "md:row-start-2 md:col-start-6 md:col-span-4 md:items-start";
                        break;
                      case 2:
                        return "md:row-start-3 md:col-start-1 md:col-span-4 md:items-end";
                    }
                  })()}
                `}
              >
                {/* Step Number Circle */}
                <div
                  className={`
                    absolute -top-12 md:top-1/2 md:-translate-y-1/2
                    ${
                      index % 2 === 0
                        ? "md:-right-[2.5rem]"
                        : "md:-left-[2.5rem]"
                    }
                    z-10 flex h-12 w-12 items-center justify-center
                    rounded-full bg-[#0052CC] text-white text-lg font-bold ring-4 ring-[#364153] shadow-md
                  `}
                >
                  {step}
                </div>

                {/* Card */}
                <div className="bg-[#1a2236] rounded-xl shadow-xl px-6 py-8 w-full max-w-md">
                  <Icon className="h-10 w-10 text-[#0052CC] mb-4 mx-auto md:mx-0" />
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                    Step {step}
                  </h3>
                  <p className="font-medium text-white/90 mb-1">{title}</p>
                  <p className="text-sm text-white/70">{description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
