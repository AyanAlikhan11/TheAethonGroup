"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Phone,
  ArrowRight,
  ChevronDown,
  Target,
  DollarSign,
  Filter,
  Bot,
  BarChart3,
  TrendingUp,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "trust" },
  { label: "Services", href: "services", hasMega: true },
  { label: "Case Studies", href: "case-studies" },
  { label: "Insights", href: "insights" },
  { label: "Contact", href: "cta" },
];

const megaServices = [
  {
    icon: Target,
    title: "Growth Strategy",
    desc: "Data-driven strategic frameworks",
    color: "#F59E0B",
  },
  {
    icon: DollarSign,
    title: "Paid Media",
    desc: "AI-optimized media buying",
    color: "#14B8A6",
  },
  {
    icon: Filter,
    title: "Funnel Systems",
    desc: "End-to-end conversion funnels",
    color: "#FB7185",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Intelligent automation systems",
    color: "#8B5CF6",
  },
  {
    icon: BarChart3,
    title: "Analytics Intelligence",
    desc: "Strategic insight from data",
    color: "#3B82F6",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    desc: "Systematic CRO programs",
    color: "#F97316",
  },
  {
    icon: Shield,
    title: "Brand Positioning",
    desc: "Premium brand authority",
    color: "#6366F1",
  },
  {
    icon: Sparkles,
    title: "Creative Systems",
    desc: "Scalable creative pipelines",
    color: "#EC4899",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mega menu on scroll
  useEffect(() => {
    const handleScroll = () => setMegaOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setMegaOpen(false);
  };

  const openContactModal = () => {
    window.dispatchEvent(new Event("openContactModal"));
  };

  const handleMegaEnter = useCallback(() => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setMegaOpen(true);
  }, []);

  const handleMegaLeave = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 200);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <AnimatePresence mode="wait">
          {!scrolled ? (
            /* ===== DEFAULT STATE: Full-width nav bar ===== */
            <motion.div
              key="default-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/50 backdrop-blur-sm border-b border-transparent"
            >
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
                {/* Logo */}
                <div
                  className="flex items-center gap-1 group cursor-pointer shrink-0"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <img
                    src="/logo2.png" // put your logo inside /public folder
                    alt="AETHON Logo"
                    className="w-15 h-15 sm:w-20 sm:h-20 object-contain"
                  />

                  <span className=" font-['Roboto',sans-serif] text-[#f1c75b] text-lg md:text-xl font-semibold leading-tight whitespace-nowrap">
                    THE AETHON GROUP
                  </span>
                </div>

                {/* Center: Nav links */}
                <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                  {navLinks.map((link) => (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={link.hasMega ? handleMegaEnter : undefined}
                      onMouseLeave={link.hasMega ? handleMegaLeave : undefined}
                    >
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-aethon-text-secondary hover:text-aethon-dark transition-colors duration-300 cursor-pointer group"
                      >
                        {link.label}
                        {link.hasMega && (
                          <motion.span
                            animate={{ rotate: megaOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </motion.span>
                        )}
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-aethon-gold group-hover:w-3/4 transition-all duration-300 rounded-full" />
                      </button>

                      {/* Services Mega Menu */}
                      {link.hasMega && (
                        <AnimatePresence>
                          {megaOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scaleY: 0.96 }}
                              animate={{ opacity: 1, y: 0, scaleY: 1 }}
                              exit={{ opacity: 0, y: 8, scaleY: 0.96 }}
                              transition={{
                                duration: 0.25,
                                ease: [0.25, 0.46, 0.45, 0.94],
                              }}
                              className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                              style={{ width: "680px" }}
                            >
                              <div className="bg-white/90 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-aethon-dark/10 border border-aethon-gray-dark/30 overflow-hidden">
                                {/* Header */}
                                <div className="px-6 pt-5 pb-3 border-b border-aethon-gray-dark/20">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h3 className="text-sm font-bold text-aethon-text">
                                        Our Capabilities
                                      </h3>
                                      <p className="text-xs text-aethon-text-muted mt-0.5">
                                        What we engineer for compounding growth
                                      </p>
                                    </div>
                                    <button
                                      onClick={() =>
                                        scrollToSection("services")
                                      }
                                      className="flex items-center gap-1 text-xs font-semibold text-aethon-gold hover:text-aethon-gold-dark transition-colors cursor-pointer group"
                                    >
                                      View All
                                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                    </button>
                                  </div>
                                </div>

                                {/* Services Grid */}
                                <div className="grid grid-cols-2 gap-0">
                                  {megaServices.map((service, i) => {
                                    const Icon = service.icon;
                                    return (
                                      <motion.button
                                        key={service.title}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                          delay: i * 0.04,
                                          duration: 0.3,
                                        }}
                                        onClick={() =>
                                          scrollToSection("services")
                                        }
                                        className="flex items-start gap-3 px-5 py-3.5 text-left hover:bg-aethon-cream/60 transition-colors duration-200 cursor-pointer group/item border-b border-r border-aethon-gray-dark/15 last:border-b-0 even:border-r-0"
                                      >
                                        <div
                                          className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
                                          style={{
                                            background: `${service.color}12`,
                                            border: `1px solid ${service.color}25`,
                                          }}
                                        >
                                          <Icon
                                            className="w-4 h-4"
                                            style={{ color: service.color }}
                                          />
                                        </div>
                                        <div className="min-w-0">
                                          <h4 className="text-sm font-semibold text-aethon-text group-hover/item:text-aethon-gold transition-colors leading-tight">
                                            {service.title}
                                          </h4>
                                          <p className="text-xs text-aethon-text-muted mt-0.5 leading-relaxed">
                                            {service.desc}
                                          </p>
                                        </div>
                                      </motion.button>
                                    );
                                  })}
                                </div>

                                {/* Bottom CTA */}
                                <div className="px-5 py-3 bg-aethon-cream/30 border-t border-aethon-gray-dark/15">
                                  <button
                                    onClick={openContactModal}
                                    className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-aethon-dark hover:bg-aethon-gold text-white text-xs font-semibold transition-colors duration-300 cursor-pointer"
                                  >
                                    <MessageSquare className="w-3.5 h-3.5" />
                                    Discuss a Project
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right: Discuss button + mobile hamburger */}
                <div className="flex items-center gap-3 shrink-0">
                  <Button
                    onClick={openContactModal}
                    className="hidden sm:flex bg-aethon-dark hover:bg-aethon-gold text-white font-semibold px-5 lg:px-6 rounded-full cursor-pointer btn-primary text-sm"
                  >
                    Discuss a Project
                  </Button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMenuOpen(true)}
                    className="sm:hidden w-9 h-9 rounded-full bg-aethon-dark/80 flex items-center justify-center cursor-pointer"
                    aria-label="Open menu"
                  >
                    <div className="relative w-4 h-4 flex flex-col items-center justify-center gap-[3px]">
                      <span className="block w-3 h-[1.5px] bg-white rounded-full" />
                      <span className="block w-4 h-[1.5px] bg-white rounded-full" />
                      <span className="block w-2.5 h-[1.5px] bg-white rounded-full" />
                    </div>
                  </motion.button>
                </div>
              </nav>
            </motion.div>
          ) : (
            /* ===== SCROLLED STATE: Two INDEPENDENT floating pills ===== */
            <motion.div
              key="split-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full"
            >
              {/* Left floating pill: Logo — Bigger Version */}
              <motion.button
                initial={{ x: -30, opacity: 0, y: 8 }}
                animate={{ x: 0, opacity: 1, y: 0 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="absolute left-4 sm:left-6 lg:left-8  flex items-center gap-1 px-1 sm:px-1 py-2.5 sm:py-3   cursor-pointer transition-all duration-300 group"
                style={{ zIndex: 10 }}
              >
                {/* Logo Box */}
                {/* <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-lg  flex items-center justify-center  transition-colors duration-300"> */}
                  <img
                    src="/logo2.png" // put your logo inside /public folder
                    alt="AETHON Logo"
                    className="w-18 h-18 sm:w-20 sm:h-20 object-contain"
                  />
                {/* </div> */}

                {/* Text */}
                {/* <span className=" font-['Roboto',sans-serif] text-[#f1c75b] text-lg md:text-xl font-semibold leading-tight whitespace-nowrap">
                    AETHON
                  </span> */}
              </motion.button>

              {/* ================= RIGHT FLOATING PILL : macOS Style Icons ================= */}
              <motion.div
                initial={{ x: 30, opacity: 0, y: 8 }}
                animate={{ x: 0, opacity: 1, y: 0 }}
                exit={{ x: 30, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute right-4 sm:right-6 lg:right-8 top-3 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2"
                style={{ zIndex: 10 }}
              >
                {/* Message Icon */}
                <motion.button
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={openContactModal}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full  flex items-center justify-center cursor-pointer transition-colors duration-300"
                  aria-label="Discuss a project"
                >
                  {/* macOS style chat bubble */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-8 h-8 sm:w-10 sm:h-10 text-aethon-gold"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 7.5C6 6.12 7.12 5 8.5 5h7C16.88 5 18 6.12 18 7.5v5c0 1.38-1.12 2.5-2.5 2.5H11l-3.5 3v-3H8.5A2.5 2.5 0 0 1 6 12.5v-5Z" />
                  </svg>
                </motion.button>

                {/* Phone Icon */}
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full  flex items-center justify-center cursor-pointer transition-colors duration-300"
                  aria-label="Make a call"
                >
                  {/* macOS style phone */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-8 h-8 sm:w-10 sm:h-10 text-aethon-gold"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.8 5.5c.5-.5 1.2-.6 1.8-.2l2 1.2c.6.4.8 1.2.5 1.8l-.8 1.6c1 1.8 2.5 3.3 4.3 4.3l1.6-.8c.6-.3 1.4-.1 1.8.5l1.2 2c.4.6.3 1.4-.2 1.8l-1.2 1.2c-.8.8-2 .9-3 .4C10.8 18.7 5.3 13.2 4.4 7.7c-.5-1 .-4 2.2-3.6l1.2-1.2Z" />
                  </svg>
                </motion.a>

                {/* Hamburger */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full  flex items-center justify-center cursor-pointer transition-colors duration-300"
                  aria-label="Toggle menu"
                >
                  <div className="relative w-5 h-5 flex flex-col items-center justify-center">
                    <motion.span
                      animate={{
                        rotate: menuOpen ? 45 : 0,
                        y: menuOpen ? 0 : -4,
                        width: menuOpen ? 20 : 20,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="block h-[4px] bg-aethon-gold rounded-full origin-center"
                      style={{ width: 14 }}
                    />
                    <motion.span
                      animate={{
                        opacity: menuOpen ? 0 : 1,
                        scaleX: menuOpen ? 0 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                      className="block h-[4px] bg-aethon-gold rounded-full"
                      style={{ width: 10 }}
                    />
                    <motion.span
                      animate={{
                        rotate: menuOpen ? -45 : 0,
                        y: menuOpen ? 0 : 4,
                        width: menuOpen ? 20 : 20,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="block h-[4px] bg-aethon-gold rounded-full origin-center"
                      style={{ width: 14 }}
                    />
                  </div>
                </motion.button>
              </motion.div>

              {/* Spacer to maintain header height */}
              <div className="h-16 sm:h-[4.5rem]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Slide-in menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-aethon-dark/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Side panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[200px] sm:w-[340px] bg-white shadow-2xl"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 sm:px-6 h-16 border-b border-aethon-gray-dark/40">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-aethon-dark flex items-center justify-center">
                    <span className="text-white font-bold text-xs">A</span>
                  </div>
                  <span className="text-sm font-bold tracking-tight text-aethon-text">
                    AETHON
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-aethon-gray hover:bg-aethon-gray-dark flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1 1L11 11M11 1L1 11"
                      stroke="#1A1A2E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="px-3 py-4">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    onClick={() => scrollToSection(link.href)}
                    className="w-full flex items-center justify-between py-3 px-3 rounded-xl text-left text-sm font-medium text-aethon-text hover:bg-aethon-cream hover:text-aethon-gold transition-all duration-200 cursor-pointer group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-aethon-text-muted group-hover:text-aethon-gold opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-0.5 transition-all duration-200" />
                  </motion.button>
                ))}
              </nav>

              {/* Divider */}
              <div className="mx-5 h-px bg-aethon-gray-dark/40" />

              {/* Action buttons */}
              <div className="px-5 py-4 space-y-2.5">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  onClick={() => {
                    setMenuOpen(false);
                    openContactModal();
                  }}
                  className="w-full flex items-center justify-center mt-18 gap-2 py-3 rounded-xl bg-aethon-dark hover:bg-aethon-gold text-white font-semibold text-sm cursor-pointer transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  Discuss a Project
                </motion.button>
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  href="tel:+919876543210"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-aethon-dark/15 text-aethon-dark hover:bg-aethon-dark hover:text-white font-semibold text-sm transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Make a Call
                </motion.a>
              </div>

              {/* Bottom info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 px-5 py-5 border-t border-aethon-gray-dark/30"
              >
                <p className="text-xs text-aethon-text-muted mb-2">
                  Get in touch
                </p>
                <a
                  href="mailto:hello@aethongroup.com"
                  className="text-sm text-aethon-text hover:text-aethon-gold transition-colors font-medium"
                >
                  hello@aethongroup.com
                </a>
                <div className="flex gap-4 mt-3">
                  <a
                    href="#"
                    className="text-xs text-aethon-text-muted hover:text-aethon-gold transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-xs text-aethon-text-muted hover:text-aethon-gold transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
