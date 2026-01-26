"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, X } from "lucide-react";
import { projects } from "@/app/data/projects";

type ProjectsFABProps = {
  activeSection: string;
};

// Get project sections with their data
const projectSections = projects
  .filter((p) => p.sectionId)
  .map((p) => ({
    id: p.sectionId as string,
    title: p.title,
    accentColor: p.accentColor || "accent2",
  }));

export default function ProjectsFAB({ activeSection }: ProjectsFABProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Track visibility based on which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const projectsEl = document.getElementById("projects");
      const contactEl = document.getElementById("contact");

      if (projectsEl && contactEl) {
        const projectsRect = projectsEl.getBoundingClientRect();
        const contactRect = contactEl.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Show FAB when projects section is in view but contact isn't
        const inProjects = projectsRect.top < windowHeight * 0.5 && projectsRect.bottom > windowHeight * 0.3;
        const inContact = contactRect.top < windowHeight * 0.5;

        setIsVisible(inProjects && !inContact);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsOpen(false);
      // Small delay to let menu close before scrolling
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const getAccentBorderClass = (color: string) => {
    switch (color) {
      case "accent":
        return "border-l-accent";
      case "accent2":
        return "border-l-accent2";
      case "alert":
        return "border-l-alert";
      default:
        return "border-l-accent2";
    }
  };

  const getAccentTextClass = (color: string) => {
    switch (color) {
      case "accent":
        return "text-accent";
      case "accent2":
        return "text-accent2";
      case "alert":
        return "text-alert";
      default:
        return "text-accent2";
    }
  };

  return (
    <>
      {/* Mobile only */}
      <div className="md:hidden">
        <AnimatePresence>
          {isVisible && (
            <>
              {/* Full-screen Menu Overlay */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[60] bg-darkest/95 backdrop-blur-xl"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Areas of Practice navigation"
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-lightest/10 border border-lightest/20 text-lightest hover:bg-lightest/20 transition-all duration-300"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>

                    {/* Menu Content */}
                    <div className="flex flex-col justify-center h-full px-6 py-20">
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="text-sm font-caption uppercase tracking-widest text-lightest/50 mb-8"
                      >
                        Areas of Practice
                      </motion.h2>

                      <nav className="space-y-4">
                        {projectSections.map((section, index) => {
                          const isActive = activeSection === section.id;
                          return (
                            <motion.button
                              key={section.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full text-left py-4 px-5 border-l-4 transition-all duration-300 ${getAccentBorderClass(
                                section.accentColor
                              )} ${
                                isActive
                                  ? "bg-lightest/10 border-l-4"
                                  : "bg-transparent border-l-lightest/20 hover:bg-lightest/5"
                              }`}
                              aria-current={isActive ? "true" : undefined}
                            >
                              <span
                                className={`text-2xl font-heading uppercase tracking-tight ${
                                  isActive ? getAccentTextClass(section.accentColor) : "text-lightest"
                                }`}
                              >
                                {section.title}
                              </span>
                              {isActive && (
                                <span className="block text-xs font-caption uppercase tracking-wider text-lightest/50 mt-1">
                                  Currently viewing
                                </span>
                              )}
                            </motion.button>
                          );
                        })}
                      </nav>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* FAB Button - bottom left to avoid ScrollButtons */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 left-6 z-[55] flex items-center justify-center w-14 h-14 rounded-full bg-darkest/90 backdrop-blur-xl border border-lightest/20 text-lightest shadow-lg hover:border-accent2 transition-all duration-300"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-haspopup="dialog"
              >
                <Layers size={24} />
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
