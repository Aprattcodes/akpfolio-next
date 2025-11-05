"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Bio() {
  return (
    <section className="container py-16 px-6 sm:py-24 sm:px-12 lg:px-24" aria-labelledby="bio-heading">
      <div className="mx-auto max-w-6xl">
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
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-lightest"
            >
              About Me
            </h2>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-lightest/90 leading-relaxed">
                I&apos;m a creative technologist with a passion for building interactive,
                user-centered web experiences. With expertise in modern frontend frameworks
                and a keen eye for design, I transform complex ideas into elegant,
                performant applications.
              </p>

              <p className="text-base sm:text-lg text-lightest/90 leading-relaxed">
                My journey in web development has been driven by curiosity and a love
                for problem-solving. I specialize in React, Next.js, and cutting-edge
                web technologies, always seeking to push the boundaries of what&apos;s possible
                in the browser.
              </p>

              <p className="text-base sm:text-lg text-lightest/90 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new design patterns,
                contributing to open-source projects, or experimenting with creative coding
                and generative art.
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
