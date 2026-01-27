"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "../../data/projects";

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

const dotActiveClasses = {
  accent: "bg-accent",
  accent2: "bg-accent2",
  alert: "bg-alert",
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
  const dotActiveClass = dotActiveClasses[accentColor];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll position to update active dot (mobile only)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85 + 16;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, caseStudies.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [caseStudies.length]);

  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth * 0.85 + 16;
    container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  return (
    <section
      id={sectionId}
      className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 bg-darkest overflow-x-clip mb-16 md:mb-0 border-t md:border-t-0 border-lightest/5 pt-12 md:pt-0"
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

          {/* Case Studies Grid - Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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

          {/* Case Studies Carousel - Mobile */}
          <div className="md:hidden -mx-6">
            <motion.div
              ref={scrollContainerRef}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.slug}
                  className="shrink-0 w-[85vw] snap-center bg-lightest/5 backdrop-blur-sm border border-lightest/10 rounded-lg overflow-hidden flex flex-col"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.imageAlt}
                      fill
                      className="object-cover"
                      sizes="85vw"
                    />
                  </div>
                  <div className="p-5 space-y-3 flex-1 flex flex-col">
                    <h3 className="text-lg font-heading uppercase tracking-tight text-lightest">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm text-lightest/70 line-clamp-3 flex-1">
                      {caseStudy.description}
                    </p>
                    {caseStudy.tags && caseStudy.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {caseStudy.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className={`text-xs px-2 py-0.5 rounded ${accentClass} ${bgClass}`}>
                            {tag}
                          </span>
                        ))}
                        {caseStudy.tags.length > 3 && (
                          <span className="text-xs px-2 py-0.5 text-lightest/50">+{caseStudy.tags.length - 3}</span>
                        )}
                      </div>
                    )}
                    <Link
                      href={`/work/case-studies/${caseStudy.slug}`}
                      className={`inline-flex items-center text-sm font-semibold ${accentClass} hover:underline pt-2`}
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 pt-4 px-6">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? `w-6 ${dotActiveClass}` : "w-2 bg-lightest/30 hover:bg-lightest/50"
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
