"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowUpRight,
  TrendingUp,
  BarChart3,
  Target,
  ChevronDown,
  Play,
  Award,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProcessFlow from "./ProcessFlow";

const rotatingWords = ["Scale", "Dominate", "Compound", "Accelerate"];

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openContactModal = () => {
    window.dispatchEvent(new Event("openContactModal"));
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-5 bg-white"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Mobile: flex-col with order | Desktop: 2-col grid with explicit placement */}
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
          {/* Block A: Badge + Heading + Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-1 lg:col-start-1 lg:row-start-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aethon-gold/10 border border-aethon-gold/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-aethon-gold animate-pulse" />
              <span className="text-xs font-['Montserrat',sans-serif] text-aethon-gold-dark tracking-wide uppercase">
                Growth Intelligence Company
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-['Montserrat',sans-serif] font-bold leading-[1.05] tracking-tight text-aethon-dark">
              We Help Brands <br className="hidden sm:block" />
              <span className="relative inline-block w-full sm:w-[280px] lg:w-[300px] h-[1.1em] align-middle">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0 flex items-center justify-center lg:justify-start text-gold-gradient"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              <span className="text-gold-gradient">
                Growth Engines
              </span> That <span className="text-gold-gradient">Compound.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-6 text-base sm:text-l font-['Montserrat',sans-serif] text-aethon-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              THE AETHON GRID helps ambitious brands scale through strategy, AI
              systems, media buying, creative execution, and precision growth
              operations.
            </motion.p>

            {/* Awards / Recognition badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 sm:gap-4 mt-5 justify-center lg:justify-start flex-wrap"
            >
              {[
                { icon: Award, label: "Clutch Top Agency", color: "#D4AF37" },
                { icon: Shield, label: "Google Partner", color: "#0F766E" },
                { icon: Star, label: "5.0 Rated", color: "#2D1B69" },
              ].map((badge) => {
                const BadgeIcon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-aethon-gray-dark/40 shadow-sm"
                  >
                    <BadgeIcon
                      className="w-3.5 h-3.5"
                      style={{ color: badge.color }}
                    />
                    <span className="text-[11px] font-semibold text-aethon-text tracking-wide">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Block B: Transparent Image + ProcessFlow */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2"
          >
            {/* Gold circular glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-gradient-to-br from-aethon-gold/15 via-aethon-gold-light/10 to-aethon-yellow/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-gradient-to-br from-aethon-gold/20 via-aethon-gold-light/15 to-transparent blur-2xl" />

            {/* IMAGE CONTAINER */}
            <div className="relative mx-auto max-w-md lg:max-w-lg mt-8 lg:mt-14">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <Image
                  src="/shocse.png"
                  alt="AETHON team collaborating"
                  width={672}
                  height={384}
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-xl"
                  priority
                />

                {/* Play button */}
                {/* <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center z-10"
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-aethon-dark fill-aethon-dark ml-0.5" />
                </motion.button> */}
              </motion.div>

              {/* Floating stat cards around the image */}
              {[
                {
                  icon: TrendingUp,
                  label: "Revenue Growth",
                  value: "230%",
                  top: "-5%",
                  right: "-3%",
                  color: "#D4AF37",
                },
                {
                  icon: BarChart3,
                  label: "ROI",
                  value: "3X",
                  bottom: "25%",
                  left: "-3%",
                  color: "#0F766E",
                },
                {
                  icon: Target,
                  label: "Growth Score",
                  value: "92",
                  bottom: "0%",
                  right: "3%",
                  color: "#2D1B69",
                },
              ].map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            scale: 1,
                            y: [0, -6, 0],
                          }
                        : {}
                    }
                    transition={{
                      opacity: { delay: 0.8 + i * 0.15, duration: 0.5 },
                      scale: { delay: 0.8 + i * 0.15, duration: 0.5 },
                      y: {
                        delay: 1.5 + i * 0.3,
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="absolute bg-white rounded-2xl px-4 py-3 shadow-lg border border-aethon-gray-dark/20 hidden sm:flex items-center gap-3 z-20"
                    style={{
                      top: metric.top,
                      bottom: metric.bottom,
                      left: metric.left,
                      right: metric.right,
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${metric.color}12` }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: metric.color }}
                      />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-aethon-text leading-tight">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-aethon-text-secondary leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Process Flow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 sm:mt-15 lg:mt-15"
            >
              <ProcessFlow />
            </motion.div>
          </motion.div>

          {/* Block C: Buttons + Trust bar — mobile: after image | desktop: left column below text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center lg:text-left order-3 lg:col-start-1 lg:row-start-2 flex flex-col items-center lg:items-start"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start justify-center lg:justify-start">
              {/* Primary CTA */}
              <Button
                onClick={openContactModal}
                className="relative inline-flex items-center justify-center overflow-hidden group w-fit sm:w-auto
font-['Inter',sans-serif] text-aethon-gold-light text-sm sm:text-base font-semibold
px-5 sm:px-8 py-4 sm:py-6
rounded-full cursor-pointer
border border-white/15
bg-gradient-to-br from-zinc-700/70 via-zinc-800/65 to-zinc-900/75
backdrop-blur-2xl
shadow-[0_10px_30px_rgba(0,0,0,0.24),inset_0_1px_1px_rgba(255,255,255,0.18)]
transition-all duration-300
hover:text-black
hover:border-aethon-gold-light/45"
              >
                {/* glossy top reflection */}
                <span className="absolute top-0 left-[8%] h-[45%] w-[84%] rounded-full bg-gradient-to-b from-white/28 via-white/10 to-transparent blur-sm pointer-events-none" />

                {/* hover shine streak */}
                <span
                  className="absolute inset-y-0 -left-1/3 w-1/3 rotate-12
    bg-white/20 blur-md
    group-hover:left-[120%]
    transition-all duration-700 pointer-events-none"
                />

                {/* gold hover fill */}
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
    bg-gradient-to-br from-aethon-gold-light via-aethon-gold to-aethon-gold-dark
    transition-all duration-300 pointer-events-none"
                />

                {/* content */}
                <span className="relative z-10 flex items-center gap-3 whitespace-nowrap">
                  <span>Start Your Growth Journey</span>

                  <span
                    className="flex items-center justify-center
      w-7 h-7 rounded-full
      bg-gradient-to-br from-aethon-gold-light via-aethon-gold to-aethon-gold-dark
      shadow-[0_6px_18px_rgba(201,162,39,0.28),inset_0_1px_1px_rgba(255,255,255,0.35)]
      group-hover:-translate-y-1 group-hover:scale-105
      transition-all duration-300"
                  >
                    <ArrowUpRight className="size-4.5 text-black" />
                  </span>
                </span>
              </Button>

              {/* Secondary CTA */}
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="relative overflow-hidden group w-fit sm:w-auto
                    font-['Inter',sans-serif] text-black
                    text-sm sm:text-base font-semibold
                    px-5 sm:px-8 py-4 sm:py-6
                    rounded-full cursor-pointer
                    border border-zinc-400/45
                    bg-gradient-to-br from-aethon-gold-light/55 via-aethon-gold/45 to-aethon-gold-dark/55
                    backdrop-blur-2xl
                    shadow-[0_10px_30px_rgba(201,162,39,0.18),inset_0_1px_1px_rgba(255,255,255,0.45)]
                    transition-all duration-300
                    hover:scale-[1.02]
                    hover:border-zinc-300/60
                    hover:shadow-[0_14px_42px_rgba(201,162,39,0.30),0_0_22px_rgba(201,162,39,0.22)]"
                 >
                {/* glossy top reflection */}
                <span className="absolute top-0 left-[8%] h-[45%] w-[84%] rounded-full bg-gradient-to-b from-white/45 via-white/12 to-transparent blur-sm pointer-events-none" />

                {/* continuous shine streak */}
                <span
                  className="absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/28 blur-md
                animate-[shine_2.8s_linear_infinite]"
                />

                {/* outer glow aura */}
                <span className="absolute inset-0 rounded-full bg-aethon-gold/10 blur-xl animate-pulse pointer-events-none" />

                <span className="relative z-10">See How We Work</span>
              </Button>
            </div>

            {/* Trust mini bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 mt-5 justify-center lg:justify-start"
            >
              {/* Client Images */}
              <div className="flex -space-x-2">
                {["/man1.jpg", "/man2.jpg", "/man3.jpg", "/man4.jpg"].map(
                  (img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Client ${i + 1}`}
                      className="w-15 h-15 rounded-full object-cover border-1 border-white shadow-md"
                    />
                  ),
                )}
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-semibold text-aethon-text">
                  50+ businesses
                </p>
                <p className="text-xs text-aethon-text-muted">
                  trust us to grow
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
