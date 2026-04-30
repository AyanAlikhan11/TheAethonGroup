"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  featured: boolean;
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [api, setApi] = useState<UseEmblaCarouselType[1]>();
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [bgIndex, setBgIndex] = useState(0);

  const bgImages = [
    "/images/testimonials/bg1.jpg",
    "/images/testimonials/bg2.jpg",
    "/images/testimonials/bg3.jpg",
    "/images/testimonials/bg4.jpg",
  ];

  const fallbackTestimonials = [
    {
      id: "1",
      quote:
        "AETHON didn't just run our ads — they rebuilt our entire growth engine. Revenue 5x'd in 4 months and hasn't stopped since.",
      name: "Rahul Sharma",
      role: "Founder & CEO",
      company: "NovaStar D2C",
    },
    {
      id: "2",
      quote:
        "The systems they built compound every single month. We're now growing faster with less spend.",
      name: "Priya Mehta",
      role: "Head of Growth",
      company: "TechX SaaS",
    },
    {
      id: "3",
      quote:
        "Working with AETHON felt like having a world-class growth team embedded in our company.",
      name: "Arjun Patel",
      role: "Co-Founder",
      company: "VertexR Wellness",
    },
    {
      id: "4",
      quote:
        "They turned our scattered marketing into a precision growth machine. ROI speaks for itself.",
      name: "Kavitha Rao",
      role: "CMO",
      company: "ApexCore Finance",
    },
  ];

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (data.testimonials?.length > 0) {
          setTestimonials(data.testimonials);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    api.on("reInit", handleSelect);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [api]);

  const displayTestimonials =
    testimonials.length > 0
      ? testimonials.map((t) => ({
          id: t.id,
          quote: t.content,
          name: t.name,
          role: t.role,
          company: t.company,
        }))
      : fallbackTestimonials;

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0 p-1 sm:p-3 lg:p-4">
        <div className="relative h-full w-full overflow-hidden rounded-xl sm:rounded-2xl">
          {bgImages.map((img, i) => (
            <motion.div
              key={img}
              initial={{ opacity: 0 }}
              animate={{ opacity: i === bgIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={img}
                alt="testimonial background"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          ))}

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 lg:mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What Founders{" "}
            <span className="text-aethon-yellow">Say</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto w-full max-w-4xl"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {displayTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 ">
                    {/* Glow */}
                    <div className="absolute left-1/2 top-0 h-24 w-48 -translate-x-1/2 rounded-full bg-aethon-yellow/20 blur-3xl" />

                    {/* Quote Icon */}
                    <div className="relative z-10 mb-3 text-4xl sm:text-5xl lg:text-6xl font-serif leading-none text-aethon-yellow">
                      &ldquo;
                    </div>

                    {/* Quote Text */}
                    <p className="relative z-10 mb-6 text-base sm:text-xl lg:text-2xl font-semibold tracking-tight leading-relaxed text-white antialiased">
  {testimonial.quote}
</p>

                    {/* Name */}
                    <p className="relative z-10 text-lg sm:text-xl font-bold tracking-tight text-white antialiased">
  {testimonial.name}
</p>

                    {/* Role */}
                    <p className="relative z-10 mt-1 text-sm sm:text-base font-medium tracking-tight text-white/90 antialiased">
  {testimonial.role}, {testimonial.company}
</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2 sm:mt-8">
            {displayTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 bg-aethon-yellow"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}