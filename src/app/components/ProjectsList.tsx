"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  role: string;
  slug: string;
  sectionId: string;
}

const projectsList: Project[] = [
  { title: "VAST", role: "Co-Founder / Creative Technologist", slug: "vast", sectionId: "vast" },
  { title: "Public Involvement", role: "UX & Web Development", slug: "public-involvement", sectionId: "public-involvement" },
  { title: "Creative Technology", role: "Artist / Technologist", slug: "touchdesigner", sectionId: "creative-tech" },
  { title: "Portfolio Website", role: "Web Design & Development", slug: "portfolio", sectionId: "portfolio-site" },
];

const backgroundColors: Record<string, string> = {
  "vast": "rgba(48, 213, 200, 0.12)",
  "public-involvement": "rgba(255, 193, 7, 0.12)",
  "creative-tech": "rgba(255, 111, 97, 0.12)",
  "portfolio-site": "rgba(48, 213, 200, 0.12)",
};

interface ProjectsListProps {
  activeSection: string;
}

export default function ProjectsList({ activeSection }: ProjectsListProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  const backgroundColor = backgroundColors[activeSection] || "transparent";

  return (
    <div
      className="h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 transition-colors duration-700"
      style={{ backgroundColor }}
    >
      <div className="w-full max-w-2xl">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-heading mb-12 text-lightest uppercase tracking-tight"
        >
          Selected Work
        </motion.h2>

        {/* Project Rows */}
        <div className="space-y-2">
          {projectsList.map((project, index) => {
            const isActive = activeSection === project.sectionId;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group p-4 rounded-lg transition-all duration-300 ${
                  isActive ? "bg-lightest/10" : "hover:bg-lightest/5"
                }`}
              >
                <a
                  href={`#${project.sectionId}`}
                  onClick={(e) => handleScroll(e, project.sectionId)}
                  className="flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <ArrowRight
                      size={20}
                      className={`mt-1 transition-all duration-300 ${
                        isActive
                          ? "text-alert opacity-100 translate-x-0"
                          : "text-alert opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                    <div>
                      <h3 className={`text-xl font-heading uppercase tracking-tight transition-colors duration-300 ${
                        isActive ? "text-alert" : "text-lightest group-hover:text-alert"
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm font-caption mt-1 transition-colors duration-300 ${
                        isActive ? "text-lightest/90" : "text-lightest/60 group-hover:text-lightest/80"
                      }`}>
                        {project.role}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}