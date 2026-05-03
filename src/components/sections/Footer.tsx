"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";

const serviceLinks = [
  "Growth Strategy",
  "Paid Media",
  "Funnel Systems",
  "AI Automation",
  "Analytics Intelligence",
  "Conversion Optimization",
  "Brand Positioning",
  "Creative Systems",
];

const companyLinks = [
  { label: "About", href: "trust" },
  { label: "Case Studies", href: "case-studies" },
  { label: "Insights", href: "insights" },
  { label: "Contact", href: "cta" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/theaethongrid/" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:info@theaethongrid.com" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      ref={ref}
      className="relative overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0b0b0b] to-[#111111]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-aethon-gold/10 blur-[130px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[220px] bg-white/5 blur-[120px] rounded-full" />

      {/* Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* TOP GOLD LINE */}
      <div className="relative pt-6 sm:pt-8">
        <div className="mx-auto h-[2px] w-full max-w-6xl bg-gradient-to-r from-transparent via-aethon-gold/40 to-transparent" />
        <div className="absolute left-1/2 top-6 sm:top-8 -translate-x-1/2 h-[4px] w-40 sm:w-56 rounded-full bg-aethon-gold shadow-[0_0_18px_rgba(212,175,55,0.7)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="py-14 sm:py-20"
        >
          {/* MOBILE VIEW */}
          <div className="lg:hidden space-y-14">
            {/* BRAND */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-11 h-11 rounded-2xl overflow-hidden">
                  <Image
                    src="/aethonlogo.webp"
                    alt="AETHON Logo"
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 120px"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="text-left">
                  <h2 className="text-sm font-bold text-white tracking-wide">
                    THE AETHON GRID
                  </h2>
                  <p className="text-[9px] tracking-[0.35em] text-aethon-gold uppercase mt-1">
                    Shaping Businesses
                  </p>
                </div>
              </div>

              <p className="text-aethon-gold text-sm font-semibold mb-2">
                Growth, Engineered.
              </p>

              <p className="text-sm text-white/70 max-w-sm leading-relaxed">
                We help businesses grow through strategy, marketing & technology. 
                From brand building and social media to business development and 
                AI tools — we handle the full picture. Based in Kolkata, working across 
                India.
              </p>
            </div>

            {/* LINKS */}
            <div className="grid grid-cols-2 gap-10 text-center">
              <div>
                <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-aethon-gold mb-5">
                  Services
                </h4>

                <ul className="space-y-3">
                  {serviceLinks.map((service) => (
                    <li key={service}>
                      <button
                        onClick={() => scrollToSection("services")}
                        className="text-sm text-white/70 hover:text-white transition"
                      >
                        {service}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-aethon-gold mb-5">
                  Company
                </h4>

                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-white/70 hover:text-white transition"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CONTACT */}
            <div className="text-center">
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-aethon-gold mb-6">
                Connect
              </h4>

              <div className="space-y-5 max-w-xs mx-auto">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-aethon-gold/15 flex items-center justify-center shrink-0">
                    <MapPin className="size-4 text-aethon-gold" />
                  </div>

                  <p className="text-sm text-white/80 leading-relaxed text-left">
                    70P, Kalim Nexus, Tiljala Road, 
                    <br />
                     Kolkata - 700017,
                    <br />
                    West Bengal, India
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-aethon-gold/15 flex items-center justify-center shrink-0">
                    <Phone className="size-4 text-aethon-gold" />
                  </div>

                  <a
                    href="tel:+918697585031"
                    className="text-sm text-white/80"
                  >
                    +91 86975 85031
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-aethon-gold/15 flex items-center justify-center shrink-0">
                    <Mail className="size-4 text-aethon-gold" />
                  </div>

                  <a
                    href="mailto:theaethongroup@gmail.com"
                    className="text-sm text-white/80 break-all"
                  >
                    theaethongrid@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-7">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-aethon-gold hover:border-aethon-gold transition-all duration-300 group"
                  >
                    <social.icon className="size-4 text-white/70 group-hover:text-black transition" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden lg:grid grid-cols-[1.45fr_1fr_1fr_1.3fr] gap-10 xl:gap-14 items-start">
            {/* BRAND */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-11 h-13 rounded-2xl overflow-hidden">
                  <Image
                    src="/aethonlogo.webp"
                    alt="AETHON Logo"
                    fill
                    sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
                    className="object-cover"
                    priority
                  />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-white tracking-wide">
                    THE AETHON GRID
                  </h2>
                  <p className="text-[9px] tracking-[0.35em] text-aethon-gold uppercase mt-1">
                    Shaping Businesses
                  </p>
                </div>
              </div>

              <p className="text-aethon-gold text-sm font-semibold mb-2">
                Growth, Engineered.
              </p>

              <p className="text-sm text-white/70 max-w-xs leading-relaxed">
                We're a dynamic team of experts helping businesses grow with
                premium systems, strategy, and digital transformation.
              </p>

              <div className="flex gap-3 mt-7">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-aethon-gold hover:border-aethon-gold transition-all duration-300 group"
                  >
                    <social.icon className="size-4 text-white/70 group-hover:text-black transition" />
                  </a>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-aethon-gold mb-6">
                Services
              </h4>

              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-aethon-gold mb-6">
                Company
              </h4>

              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-aethon-gold mb-6">
                Connect
              </h4>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-aethon-gold/15 flex items-center justify-center shrink-0">
                    <MapPin className="size-4 text-aethon-gold" />
                  </div>

                  <p className="text-sm text-white/80 leading-relaxed ">
                    70P, Kalim Nexus, Tiljala Road, 
                    <br />
                     Kolkata  - 700017 ,
                    <br />
                    West Bengal, India
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-aethon-gold/15 flex items-center justify-center shrink-0">
                    <Phone className="size-4 text-aethon-gold" />
                  </div>

                  <a
                    href="tel:+918697585031"
                    className="text-sm text-white/80"
                  >
                    +91 86975 85031
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-aethon-gold/15 flex items-center justify-center shrink-0">
                    <Mail className="size-4 text-aethon-gold" />
                  </div>

                  <a
                    href="mailto:theaethongroup@gmail.com"
                    className="text-sm text-white/80 break-all"
                  >
                    info@theaethongrid.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM GOLD LINE */}
        <div className="relative pt-2 pb-5">
          <div className="mx-auto h-[2px] w-full max-w-6xl bg-gradient-to-r from-transparent via-aethon-gold/40 to-transparent" />
          <div className="absolute left-1/2 top-2 -translate-x-1/2 h-[4px] w-40 sm:w-56 rounded-full bg-aethon-gold shadow-[0_0_18px_rgba(212,175,55,0.7)]" />
        </div>

        {/* COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="py-3 flex flex-col sm:flex-row items-center justify-between gap-4 text-center"
        >
          <p className="text-xs text-white/40 tracking-wide">
            © {new Date().getFullYear()} THE AETHON GRID. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button className="text-xs text-white/40 hover:text-white transition">
              Privacy
            </button>
            <button className="text-xs text-white/40 hover:text-white transition">
              Terms
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}