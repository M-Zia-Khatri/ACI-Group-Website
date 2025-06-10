import { BarChart, Lock, BrainCircuit, Globe } from "lucide-react";

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
    <section className="py-16 lg:py-24 bg-[var(--background)] ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-sans">
            Why People Trust ACI Group
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-12">
          {trustFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-green/10">
                <feature.icon
                  className="h-8 w-8 text-accent-green"
                  aria-hidden="true"
                />
              </div>
              <p className="text-lg leading-6 text-gray-700 font-sans">
                <span className="font-semibold text-gray-900 font-sans">
                  {feature.title}
                </span>
                {feature.description.startsWith(" ") ? "" : " "}
                {feature.description.replace("—", "—")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
