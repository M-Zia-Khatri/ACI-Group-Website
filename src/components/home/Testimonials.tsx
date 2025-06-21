import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

export function Testimonials() {
  const testimonialData = useMemo(
    () => [
      {
        quote:
          "I finally feel safe investing. I see real trades and real growth. ACI Group changed the game for me.",
        author: "Client Name",
      },
      {
        quote:
          "The transparency and professionalism are top-notch. I've never had a clearer picture of my investments.",
        author: "Satisfied Investor",
      },
      {
        quote:
          "Smart risk management isn't just a slogan for them; it's a practice. I'm confident in my long-term gains.",
        author: "Long-term Client",
      },
    ],
    []
  );

  return (
    <section className="py-16 lg:py-10 text-white">
      <div className="max-w-[var(--max-width)] w-full mx-auto px-4 md:px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-fluid-xl sm:text-fluid-2xl md:text-fluid-3xl lg:text-fluid-4xl xl:text-fluid-5xl font-extrabold tracking-wide mb-4">
            What Our Clients Say
          </h2>
          <hr className="relative top-5 border-t border-[1.5px] border-[var(--background-dark-5)]" />
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonialData.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    className="md:p-8 md:mx-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <figure className="flex h-full flex-col items-center justify-center text-center bg-[var(--background-dark-1)] rounded-2xl p-8 shadow-lg">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0052CC]/10">
                        <Quote
                          className="h-8 w-8 text-[#0052CC]"
                          aria-hidden="true"
                        />
                      </div>
                      <blockquote className="mb-6">
                        <p className="text-fluid-md sm:text-fluid-lg md:text-fluid-xl lg:text-fluid-2xl leading-tight font-Newsreader">
                          "{testimonial.quote}"
                        </p>
                      </blockquote>
                      <figcaption>
                        <div className="text-fluid-md text-gray-400 font-Newsreader">
                          — {testimonial.author}
                        </div>
                      </figcaption>
                    </figure>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 text-white hover:text-[#0052CC] border-white hover:border-[#0052CC] bg-[#151818]/50 hover:bg-[#151818]" />
            <CarouselNext className="hidden sm:flex -right-4 text-white hover:text-[#0052CC] border-white hover:border-[#0052CC] bg-[#151818]/50 hover:bg-[#151818]" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
