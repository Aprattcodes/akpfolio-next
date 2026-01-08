"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "../data/projects";

interface CaseStudiesViewProps {
  caseStudies: CaseStudy[];
  sectionId: string;
  title: string;
  role: string;
  description?: string;
  accentColor?: "accent" | "accent2" | "alert";
}

const accentColorClasses = {
  accent: "text-accent",
  accent2: "text-accent2",
  alert: "text-alert",
};

const bgColorClasses = {
  accent: "bg-accent/5",
  accent2: "bg-accent2/5",
  alert: "bg-alert/5",
};

export default function CaseStudiesView({
  caseStudies,
  sectionId,
  title,
  role,
  description,
  accentColor = "accent",
}: CaseStudiesViewProps) {
  const accentClass = accentColorClasses[accentColor];
  const bgClass = bgColorClasses[accentColor];

  return (
    <section
      id={sectionId}
      className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 bg-darkest"
    >
      <div className="mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <span className={`text-sm font-caption uppercase tracking-wider ${accentClass}`}>
              {role}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading uppercase tracking-tight text-lightest">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-lightest/90 leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </motion.div>

          {/* Case Studies Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                className="bg-lightest/5 backdrop-blur-sm border border-lightest/10 rounded-lg overflow-hidden hover:bg-lightest/10 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-xl font-heading uppercase tracking-tight text-lightest">
                    {caseStudy.title}
                  </h3>
                  <p className="text-sm text-lightest/70 line-clamp-3 flex-1">
                    {caseStudy.description}
                  </p>

                  {/* Optional Tags */}
                  {caseStudy.tags && caseStudy.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {caseStudy.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-1 rounded ${accentClass} ${bgClass}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA Link */}
                  <Link
                    href={`/work/case-studies/${caseStudy.slug}`}
                    className={`inline-flex items-center text-sm font-semibold ${accentClass} hover:underline pt-2`}
                  >
                    View Case Study →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
