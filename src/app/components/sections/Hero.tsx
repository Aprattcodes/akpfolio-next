"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  // scroll to section
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center px-6 background-darkest">
      <div className="relative max-w-5xl w-full">
        {/* Glass background */}
        <div className="absolute inset-0 bg-darkest/80 backdrop-blur-xl rounded-3xl border border-lightest/10 shadow-2xl -m-8 sm:-m-12" />

        {/* Content */}
        <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-16">
          <motion.h1
            className="text-5xl sm:text-6xl font-heading uppercase tracking-tight text-lightest"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frontend Engineer &<br/> Creative Technologist
          </motion.h1>

          <motion.p
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-lightest/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            UX Focused | Accessibility Advocate | Systems-Driven Development
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "#projects")}
              className="inline-flex items-center rounded-md border-2 border-accent2 px-6 py-3 font-semibold text-lightest hover:bg-accent2/10 cursor-pointer"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="inline-flex items-center rounded-md border-2 border-alert px-6 py-3 font-semibold text-lightest hover:bg-alert/10 cursor-pointer"
            >
              About
            </a>
            <Link
              href="/resume"
              className="inline-flex items-center rounded-md bg-alert px-6 py-3 font-semibold text-darkest hover:brightness-105"
            >
              Download Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}