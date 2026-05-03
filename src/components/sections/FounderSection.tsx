"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function FounderSection() {
  const team = [
    {
      name: "Rezaul Haque",
      role: "Founder & Growth Architect",
      image: "/founders/1.PNG",
      title: "Founder",
      linkedin: "https://linkedin.com/in/your-founder-linkedin",

      desc1: `In a market filled with agencies chasing trends and short-term spikes, Mr. Rezaul Haque started The Aethon Grid with a clear perspective:

“Most businesses don’t have a marketing problem.
They have a structural problem.”

In today’s fast-evolving digital-first world, where attention is volatile and trends change overnight, he saw a deeper gap — businesses operating without clarity, without systems, and without real intelligence behind their decisions.`,

      desc2: `With a strong foundation in technology, AI, branding, and business strategy, he approaches every business like a system — not a project.

At the core of his philosophy lies one principle:
decisions should not be based on assumptions, but on data-backed clarity.

Every move, every strategy, every iteration is driven by insights — not guesswork.

Because he believes sustainable growth is never accidental. It is measured, analyzed, and engineered step by step.

“If you can’t measure what’s working,
you’re not building — you’re guessing.”

His vision is to build a new generation of businesses designed for the digital era — where technology, data, and strategy work together to create clarity, control, and precision.

Where every decision is backed by intelligence, every system is built to scale, and every brand is positioned not just to follow the market, but to define it.

“We’re not here to play the marketing game.
We’re here to change how it’s played.”`,
    },

    {
      name: "Md. Waleed Ayub",
      role: "Co-Founder • Brand Strategy",
      image: "/founders/2.jpg",
      title: "Co-Founder",
      linkedin: null,

      desc1: `While most focus on ideas, Mr. Waleed Ayub focuses on execution.

In a space where strategies often stay on paper, he ensures they are translated into structured, scalable operations that actually deliver results.

Because without execution, even the best strategy holds no value.

“A strategy is only as powerful as the system that executes it.”`,

      desc2: `With deep expertise in operations management and process structuring, Waleed is responsible for turning vision into reality — building workflows, optimizing systems, and ensuring every moving part of the business functions with precision.

From internal processes to client delivery, his approach is rooted in clarity, efficiency, and accountability.

No chaos.
No dependency.
No loose ends.

Every system is designed to run smoothly, scale seamlessly, and perform consistently.

“If your operations aren’t structured,
your growth won’t be either.”`,
    },

    {
      name: "Dr. Shahwar Ahmed Khan",
      role: "Co-Founder • Operations & Scale",
      image: "/founders/3.PNG",
      title: "Co-Founder",
      linkedin: null,

      desc1: `Where ideas take shape, clarity is essential — and that’s where Dr. Shahwar Ahmed Khan plays a defining role.

He ensures that every piece of communication, every narrative, and every final output aligns with the larger vision of the brand.

Not just in what is said — but how it is understood.

“Clarity in communication is what turns ideas into impact.”`,

      desc2: `At The Aethon Grid, he leads the finalization of content and brand messaging, making sure that strategies are translated into communication that is sharp, consistent, and meaningful.

Beyond content, he plays a crucial role in maintaining team alignment and cohesion — ensuring that collaboration stays seamless, focused, and purpose-driven across all levels.

With a strong background in healthcare, Dr. Shahwar brings valuable insight into healthcare-focused projects, contributing both strategic direction and domain-level understanding.

His involvement ensures that complex industries are handled with accuracy, responsibility, and depth — not just surface-level execution.

“Impactful work comes from understanding the domain —
not just delivering within it.”`,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % team.length);
    }, 40000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const member = team[index];

  return (
    <section
      id="founders"
      className="relative w-full bg-[#f7f7f5] py-5 px-4 md:px-8 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#d4af37]/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
            Meet{" "}
            <span className="bg-gradient-to-r from-black to-[#d4af37] bg-clip-text text-transparent">
              The
            </span>{" "}
            <span className="text-[#c8a43d]">{member.title}</span>
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            Trusted leadership focused on growth, systems, execution and
            long-term brand success.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
          >
            {/* LEFT IMAGE */}
            <div className="relative flex pt-20 flex-col justify-center">
              {/* <div className="absolute -inset-3 bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-[32px] blur-xl" /> */}

              <div className="relative bg-white rounded-[32px] border border-gray-200 shadow-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={700}
                  height={820}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-[880px] object-fit object-center"
                />

                {/* Floating Trust */}
                <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#c8a43d] flex items-center justify-center">
                      <BadgeCheck className="w-5 h-5 text-black" />
                    </div>

                    <div>
                      <p className="font-semibold text-black text-sm">
                        Trusted Leader
                      </p>
                      <p className="text-xs text-gray-500">
                        Vision • Scale • Growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              {member.linkedin && (
                <div className="mt-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex border border-gray-300 px-6 py-4 rounded-full items-center gap-3 hover:bg-white transition-all"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              )}
            </div>

            {/* RIGHT SIDE */}
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-black leading-tight">
                {member.name}
              </h3>

              <p className="text-[#c8a43d] font-semibold mt-3 text-lg tracking-wide">
                {member.role}
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {member.desc1}
                </p>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {member.desc2}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}