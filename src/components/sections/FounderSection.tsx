"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  ArrowUpRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function FounderSection() {
  const team = [
    {
      name: "Rezaul Haque",
      role: "Founder & Growth Architect",
      image: "/founders/1.PNG",
      title: "Founder",
      desc1:
        "In a market filled with agencies chasing trends and short-term spikes,Mr. Rezaul Haque started The Aethon Grid with a clear perspective:Most businesses don’t have a marketing problem.They have a structural problem.In today’s fast-evolving digital-first world, where attention is volatile and trends change overnight, he saw a deeper gap , businesses operating without clarity, without systems, and without real intelligence behind their decisions.",
      desc2:
        "With a strong foundation in technology, AI, branding, and business strategy, he approaches every business like a system , not a project.At the core of his philosophy lies one principle:decisions should not be based on assumptions, but on data-backed clarity.Every move, every strategy, every iteration is driven by insights not guesswork.Because he believes sustainable growth is never accidental, it is measured, analyzed, and engineered step by step.“If you can’t measure what’s working you’re not building you’re guessing.”His vision is to build a new generation of businesses designed for the digital era — where technology, data, and strategy work together to create clarity, control, and precision; where every decision is backed by intelligence, every system is built to scale, and every brand is positioned not just to follow the market, but to define it.“We’re not here to play the marketing game.We’re here to change how it’s played.”",
      stats: [
        { value: "50+", label: "Brands Helped" },
        { value: "₹5Cr+", label: "Revenue Generated" },
        { value: "4+ Years", label: "Experience" },
        { value: "24/7", label: "Commitment" },
      ],
    },
    {
      name: "Md. Waleed Ayub",
      role: "Co-Founder • Brand Strategy",
      image: "/founders/2.jpg",
      title: "Co-Founder",
      desc1:
        "While most focus on ideas, Mr.Waleed Ayub focuses on execution.In a space where strategies often stay on paper, he ensures they are translated into structured, scalable operations that actually deliver results. Because without execution, even the best strategy holds no value.“A strategy is only as powerful as the system that executes it.”",
      desc2:
        "Transforms brands into trusted market leaders through storytelling, design psychology, and strategic messaging.",
      stats: [
        { value: "30+", label: "Brands Positioned" },
        { value: "100+", label: "Campaign Assets" },
        { value: "4 Years", label: "Experience" },
        { value: "A+", label: "Brand Taste" },
      ],
    },
    {
      name: "Dr. Shahwar Ahmed Khan",
      role: "Co-Founder • Operations & Scale",
      image: "/founders/3.PNG",
      title: "Co-Founder",
      desc1:
        "Builds backend systems, automation flows, and high-efficiency frameworks for scaling businesses.",
      desc2:
        "Ensures delivery, execution speed, and operational excellence while brands focus on growth.",
      stats: [
        { value: "20+", label: "Systems Built" },
        { value: "99%", label: "Efficiency" },
        { value: "5 Years", label: "Experience" },
        { value: "24/7", label: "Execution" },
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % team.length);
    }, 5000);

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
    <section id="founders" className="relative w-full bg-[#f7f7f5] py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4af37]/10 blur-3xl rounded-full" />

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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"
          >
            {/* LEFT IMAGE */}
            <div className="relative h-full">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-[32px] blur-xl" />

              <div className="relative bg-white rounded-[32px] border border-gray-200 shadow-xl h-full overflow-hidden">
                <div className="relative h-full min-h-[620px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

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
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-between h-full min-h-[620px]">
              {/* Top */}
              <div>
                <h3 className="text-3xl md:text-5xl font-bold text-black leading-tight">
                  {member.name}
                </h3>

                <p className="text-[#c8a43d] font-semibold mt-3 text-lg tracking-wide">
                  {member.role}
                </p>

                <div className="space-y-6 mt-8">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {member.desc1}
                  </p>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {member.desc2}
                  </p>
                </div>
              </div>

              {/* Middle Stats */}
              <div className="grid grid-cols-2 gap-5 mt-10">
                {member.stats.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-gray-200 p-6"
                  >
                    <h4 className="text-3xl font-bold text-black">
                      {item.value}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="#cta"
                  className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c8a43d] to-[#b8952f] text-black font-semibold flex items-center gap-3 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <Sparkles className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Work With Founder</span>
                  <ArrowUpRight className="w-5 h-5 relative z-10" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="border border-gray-300 px-6 py-4 rounded-full flex items-center gap-3 hover:bg-white transition-all"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
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







