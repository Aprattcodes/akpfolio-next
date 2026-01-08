"use client";

import { projects } from "../data/projects";
import ProjectSection from "./ProjectSection";
import PortfolioWebsiteView from "./PortfolioWebsiteView";
import CaseStudiesView from "./CaseStudiesView";

export default function ProjectsRenderer() {
  return (
    <>
      {projects.map((project) => {
        // Skip projects without section content
        if (!project.sectionId && !project.isPortfolio && !project.hasCaseStudiesView) {
          return null;
        }

        // Render PortfolioWebsiteView separately
        if (project.isPortfolio) {
          return <PortfolioWebsiteView key={project.sectionId || project.slug} />;
        }

        // Render CaseStudiesView for projects with case studies
        if (project.hasCaseStudiesView && project.caseStudies) {
          return (
            <CaseStudiesView
              key={project.sectionId || project.slug}
              caseStudies={project.caseStudies}
              sectionId={project.sectionId || project.slug}
              title={project.title}
              role={project.role}
              description={project.description}
              accentColor={project.accentColor}
            />
          );
        }

        // Render generic ProjectSection for all other projects
        return <ProjectSection key={project.sectionId || project.slug} project={project} />;
      })}
    </>
  );
}
