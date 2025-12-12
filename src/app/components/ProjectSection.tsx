"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";

interface ProjectSectionProps {
  project: Project;
}

const accentColorClasses = {
  accent: "text-accent",
  accent2: "text-accent2",
  alert: "text-alert",
};

const borderColorClasses = {
  accent: "border-accent",
  accent2: "border-accent2",
  alert: "border-alert",
};

const hoverColorClasses = {
  accent: "hover:bg-accent/10",
  accent2: "hover:bg-accent2/10",
  alert: "hover:bg-alert/10",
};

export default function ProjectSection({ project }: ProjectSectionProps) {
  const {
    sectionId,
    slug,
    title,
    role,
    description,
    image,
    imageAlt,
    ctaLink,
    ctaText,
    accentColor = "accent2",
    reverseLayout = false,
  } = project;

  const accentClass = accentColorClasses[accentColor];
  const borderClass = borderColorClasses[accentColor];
  const hoverClass = hoverColorClasses[accentColor];

  return (
    <section
      id={sectionId || slug}
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
          {/* Image Content */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl ${
                reverseLayout ? "order-2 lg:order-1" : ""
              }`}
            >
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          )}

          {/* Text Content */}
          <div
            className={`space-y-6 ${
              reverseLayout ? "order-1 lg:order-2" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: reverseLayout ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className={`text-sm font-caption uppercase tracking-wider ${accentClass}`}>
                {role}
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading uppercase tracking-tight text-lightest mt-2">
                {title}
              </h2>
            </motion.div>

            {description && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-lightest/90 leading-relaxed"
              >
                {description}
              </motion.p>
            )}

            {ctaLink && ctaText && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4 pt-4"
              >
                <Link
                  href={ctaLink}
                  className={`inline-flex items-center rounded-md border-2 ${borderClass} px-6 py-3 font-semibold text-lightest ${hoverClass} transition-colors duration-200`}
                >
                  {ctaText}
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
