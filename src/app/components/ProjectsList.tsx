"use client";

import { projects } from "@/app/data/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectsList() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl w-full">
        {/* Section Title */}
        <h2 className="text-4xl font-heading mb-8 text-lightest uppercase tracking-tight">
          Projects
        </h2>

      {/* Project Rows */}
      <div className="divide-y divide-lightest/20">
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            whileHover={{ backgroundColor: "rgba(255, 193, 7, 0.05)" }}
            transition={{ duration: 0.3 }}
            className="group flex items-center justify-between py-4 transition-colors"
          >
            <Link
              href={`/work/${project.slug}`}
              className="flex items-center gap-2 text-lg font-heading uppercase tracking-tight text-lightest group-hover:text-alert"
            >
              <ArrowRight
                size={18}
                className="text-alert opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
              />
              <span>{project.title}</span>
            </Link>
            <span className="text-sm font-caption text-lightest/70 group-hover:text-alert transition-colors duration-300">
              {project.role}
            </span>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}