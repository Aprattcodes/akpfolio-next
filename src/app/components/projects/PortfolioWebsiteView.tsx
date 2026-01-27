"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Palette, Zap } from "lucide-react";

export default function PortfolioWebsiteView() {
  return (
    <section
      id="portfolio-site"
      className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 bg-darkest mb-16 md:mb-0 border-t border-b md:border-b-0 md:border-t-0 border-lightest/5 pt-12 md:pt-0 pb-12 md:pb-0"
    >
      <div className="mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-caption uppercase tracking-wider text-accent2">
              Web Design & Development
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading uppercase tracking-tight text-lightest mt-2">
              This Portfolio
            </h2>
            <p className="text-lg text-lightest/90 leading-relaxed mt-4 max-w-3xl mx-auto">
              A modern, performant portfolio built with Next.js 16, Tailwind CSS 4.1,
              and Framer Motion. Designed for storytelling through smooth scroll interactions
              and immersive full-screen sections.
            </p>
          </motion.div>

          {/* Tech Stack Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
          >
            {/* Card 1 */}
            <div className="bg-lightest/5 backdrop-blur-sm border border-lightest/10 rounded-lg p-6 space-y-3 hover:bg-lightest/10 transition-colors duration-300">
              <Code2 className="text-accent2 w-10 h-10 mx-auto" />
              <h3 className="text-xl font-heading uppercase tracking-tight text-lightest">
                Next.js 16
              </h3>
              <p className="text-sm text-lightest/70">
                App Router, Server Components, and optimized performance
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-lightest/5 backdrop-blur-sm border border-lightest/10 rounded-lg p-6 space-y-3 hover:bg-lightest/10 transition-colors duration-300">
              <Palette className="text-alert w-10 h-10 mx-auto" />
              <h3 className="text-xl font-heading uppercase tracking-tight text-lightest">
                Tailwind 4.1
              </h3>
              <p className="text-sm text-lightest/70">
                Pure CSS configuration with custom theme tokens
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-lightest/5 backdrop-blur-sm border border-lightest/10 rounded-lg p-6 space-y-3 hover:bg-lightest/10 transition-colors duration-300">
              <Zap className="text-accent w-10 h-10 mx-auto" />
              <h3 className="text-xl font-heading uppercase tracking-tight text-lightest">
                Framer Motion
              </h3>
              <p className="text-sm text-lightest/70">
                Smooth animations and scroll-based interactions
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8"
          >
            <Link
              href="https://github.com/yourusername/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border-2 border-lightest px-6 py-3 font-semibold text-lightest hover:bg-lightest/10 transition-colors duration-200"
            >
              View Source Code
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
