import FinalCallToAction from "@/components/home/FinalCallToAction";
import HeroSection from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorks";
import OurPromise from "@/components/home/OurPromise";
import ProblemSection from "@/components/home/ProblemSection";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyTrustUs } from "@/components/home/WhyTrustUs";

export default function home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <OurPromise />
      <HowItWorksSection />
      <WhyTrustUs />
      <Testimonials />
      <FinalCallToAction />
    </>
  );
}
