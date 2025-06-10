import { Phone, Link2, CheckSquare } from "lucide-react";
import { useMemo } from "react";

export function HowItWorksSection() {
  const steps = useMemo(
    () => [
      {
        icon: Phone,
        title: "Book a free strategy call",
      },
      {
        icon: Link2,
        title: "Choose your account and connect via copy trading",
      },
      {
        icon: CheckSquare,
        title: "Sit back and watch your portfolio grow in real-time",
      },
    ],
    []
  );
  return (
    <section className="mx-4 my-4 rounded-lg shadow-md bg-gradient-to-b from-white to-gray-100 py-16 md:py-24 lg:py-32 font-sans">
      <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl font-sans">
        How It Works
        </h2>
        <p className="max-w-[800px] text-muted-foreground md:text-xl font-sans">
        You'll get access to live dashboards, monthly reports, and full
        control over your funds.
        </p>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-5xl gap-y-12 md:grid-cols-3 md:gap-x-8">
        <div
        className="absolute -top-5 left-0 right-0 z-10 hidden h-px w-full bg-transparent md:block "
        style={{
          backgroundImage:
          "linear-gradient(to right, #0052CC 50%, transparent 50%)",
          backgroundSize: "16px 1px",
          backgroundRepeat: "repeat-x",
        }}
        />

        {steps.map((step, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center text-center group font-sans"
        >
          <div
          className={
            "mb-6 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white ring-8 ring-background bg-[#0052CC] group-hover:bg-[#003580] transition-colors font-sans"
          }
          >
          {index + 1}
          </div>

          <div className="mb-4">
          <step.icon className="h-10 w-10 text-[#0052CC] group-hover:text-[#003580] transition-colors" />
          </div>

          <div className="space-y-1">
          <h3 className="text-lg font-semibold font-sans">Step {index + 1}</h3>
          <p className="text-muted-foreground font-sans">{step.title}</p>
          </div>
        </div>
        ))}
      </div>
      </div>
    </section>
  );
}
