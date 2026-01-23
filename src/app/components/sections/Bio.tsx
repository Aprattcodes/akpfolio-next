"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Bio() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24" aria-labelledby="bio-heading">
      <div className="mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center"
        >
          {/* Image Column */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-120">
              <Image
                src="/img/Alyssa-2024-Headshot-full.jpg"
                alt="Professional headshot of Alyssa, a creative technologist and developer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>

          {/* Text Column */}
          <article className="order-2 md:order-1 space-y-6">
            <h2
              id="bio-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-heading uppercase tracking-tight text-lightest"
            >
              About Me (Alyssa Pratt)
            </h2>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-lightest/90 leading-relaxed">
                I&apos;m a frontend engineer with a UX-focused approach, building accessible, interactive experiences that balance visual impact with real-world constraints. 
                I often work on cross-functional teams where clarity, usability, and adaptability matter, and I&apos;m frequently pulled in to solve complex or undefined problems that sit between design and engineering.
              </p>

              <p className="text-base sm:text-lg text-lightest/90 leading-relaxed">
                I&apos;m trusted to take on unfamiliar tools, 
                evolving requirements, and legacy systems, and to turn them into stable, maintainable solutions. Whether a project starts messy, under-documented, or constrained by policy, my role is to bring structure, reliability, and forward momentum.
              </p>

              <p className="text-base sm:text-lg text-lightest/90 leading-relaxed">
                Accessibility is a core part of my decision-making, not an afterthought. I advocate for inclusive interfaces that are clear, engaging, and compliant, even when that means pushing back on trends that sacrifice usability.
              </p>

               <p className="text-base sm:text-lg text-lightest/90 leading-relaxed">
                My background spans a wide range of public-sector projects with strict requirements 
                and long lifecycles, including maintaining and evolving legacy systems while planning for their future. I&apos;m focused on roles where I can build thoughtful frontend systems that serve real users at scale.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-md border-2 border-accent2 px-6 py-3 font-semibold text-lightest hover:bg-accent2/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-offset-2 focus:ring-offset-darkest"
                aria-label="Navigate to contact section"
              >
                Get In Touch
              </a>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
