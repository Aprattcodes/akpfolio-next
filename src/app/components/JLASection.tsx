"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function JLASection() {
  return (
    <section
      id="public-involvement"
      className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 bg-darkest"
    >
      <div className="mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Content - Left side on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <Image
              src="/img/JLA/comment-map.png"
              alt="JLA Public Involvement - Interactive comment mapping tool"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text Content - Right side on desktop */}
          <div className="space-y-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-caption uppercase tracking-wider text-alert">
                UX & Web Development
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading uppercase tracking-tight text-lightest mt-2">
                Public Involvement
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-lightest/90 leading-relaxed"
            >
              Civic engagement tools for Johnson Lueck & Associates. Interactive mapping
              and survey platforms that help communities participate in urban planning
              and public infrastructure projects. Built with modern web technologies
              for accessibility and real-time collaboration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 pt-4"
            >
              <Link
                href="/work/public-involvement"
                className="inline-flex items-center rounded-md border-2 border-alert px-6 py-3 font-semibold text-lightest hover:bg-alert/10 transition-colors duration-200"
              >
                View Project
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
