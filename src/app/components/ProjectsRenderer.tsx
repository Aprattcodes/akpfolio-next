"use client";

import { projects } from "../data/projects";
import ProjectSection from "./ProjectSection";
import PortfolioWebsiteView from "./PortfolioWebsiteView";

export default function ProjectsRenderer() {
  return (
    <>
      {projects.map((project) => {
        // Skip projects without section content
        if (!project.sectionId && !project.isPortfolio) {
          return null;
        }

        // Render PortfolioWebsiteView separately
        if (project.isPortfolio) {
          return <PortfolioWebsiteView key={project.sectionId || project.slug} />;
        }

        // Render generic ProjectSection for all other projects
        return <ProjectSection key={project.sectionId || project.slug} project={project} />;
      })}
    </>
  );
}
