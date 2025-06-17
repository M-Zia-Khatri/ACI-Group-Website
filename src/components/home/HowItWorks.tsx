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
    <section className="text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-6xl xl:text-fluid-7xl font-extrabold tracking-wide">
            How It Works
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-white/80 text-fluid-md sm:text-fluid-lg md:text-fluid-xl ">
            You'll get access to live dashboards, monthly reports, and full
            control over your funds.
          </p>
          <hr className="relative top-6 border-t border-[1.5px] border-[#23272b]" />
        </div>

        {/* Timeline Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Vertical Line */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-[#364153] z-0" />

          {/* Step Introduction */}
          <ol className="flex flex-col md:grid md:grid-cols-10 md:grid-rows-3 gap-y-3.5 gap-x-4 relative z-10">
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
                  relative flex flex-col items-center
                  ${(() => {
                    switch (index) {
                      case 0:
                        return "md:col-start-1 md:col-span-5";
                      case 1:
                        return "md:row-start-2 md:col-start-6 md:col-span-5";
                      case 2:
                        return "md:row-start-3 md:col-start-1 md:col-span-5";
                    }
                  })()}
                `}
              >
                <div className="bg-[#202428] h-full flex flex-col items-center justify-center rounded-xl shadow-xl px-6 py-8 w-full max-w-md">
                  <Icon className="h-[9vh] md:h-[8vh] w-[9vw] md:w-[8vw] text-[#0052CC] mb-4" />
                  <h3 className="text-fluid-xl sm:text-fluid-2xl md:text-fluid-xl lg:text-fluid-2xl font-semibold mb-1">
                    Step {step}
                  </h3>
                  <p className="text-fluid-lg sm:text-fluid-xl md:text-fluid-lg lg:text-fluid-xl font-medium mb-2 leading-9 lg:leading-11">
                    {title}
                  </p>
                  <p className="text-fluid sm:text-fluid-md md:text-fluid lg:text-fluid-md  text-white/70 tracking-wider leading-8 lg:leading-10">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
