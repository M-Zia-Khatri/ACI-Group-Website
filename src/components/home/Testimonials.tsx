import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import { useMemo } from "react";

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
    <section className="mx-4 rounded-md shadow-lg bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xl mx-auto"
        >
          <CarouselContent>
            {testimonialData.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <figure className="flex h-full flex-col items-center justify-center text-center">
                    <Quote
                      className="mb-4 h-10 w-10 text-gray-400"
                      aria-hidden="true"
                    />
                    <blockquote
                      className="text-xl md:text-2xl italic leading-relaxed text-gray-800"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontStyle: "italic",
                      }}
                    >
                      <p>"{testimonial.quote}"</p>
                    </blockquote>
                    <figcaption className="mt-6">
                      <div
                        className="text-base not-italic text-gray-500"
                        style={{
                          fontFamily: "'Roboto', sans-serif",
                          fontStyle: "italic",
                        }}
                      >
                        — {testimonial.author}
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
