"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const marqueeItems = [
  "Business Growth",
  "Market Authority",
  "Customer Trust",
  "Revenue Momentum",
  "Brand Dominance",
  "AI Automation",
  "Growth Engineering",
  "Conversion Systems",
];

export default function MarqueeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-10"
    >
      {/* Top & bottom subtle border */}
      {/* <div className="absolute top-0 left-0 right-0 h-px bg-gray-200" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" /> */}

      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, x: ["0%", "-50%"] } : {}}
          transition={{
            opacity: { duration: 0.6 },
            x: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex items-center"
          style={{ width: "max-content" }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div
              key={i}
              className="flex items-center shrink-0 mx-6 sm:mx-10"
            >
              <span
  className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight whitespace-nowrap"
  style={{
    
    WebkitBackgroundClip: "text",
    backgroundClip: "text",

    WebkitTextFillColor: "#b9b9b7f1", // 🔥 REQUIRED for gradient text

    WebkitTextStroke: "1px rgba(233, 217, 163, 0.25)",

    filter: "drop-shadow(0 0 20px rgba(212,175,55,0.12))",
  }}
>
                {item}
              </span>

              <span className="ml-6 w-2 h-2 rounded-full bg-gray-400/60" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Soft edge fade */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </section>
  );
}