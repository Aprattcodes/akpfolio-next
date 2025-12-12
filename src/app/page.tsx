"use client";

import Hero from "@/app/components/Hero";
import Bio from "@/app/components/Bio";
import ProjectsList from "@/app/components/ProjectsList";
import ProjectsRenderer from "@/app/components/ProjectsRenderer";
import ContactSection from "@/app/components/ContactSection";
import ScrollButtons from "@/app/components/ScrollButtons";
import HeroLiquid from "@/app/components/visual/HeroLiquid";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { projects } from "@/app/data/projects";

export default function Home() {
  // Dynamically get section IDs from projects data
  const sectionIds = projects
    .filter(project => project.sectionId)
    .map(project => project.sectionId as string);

  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <HeroLiquid fadeEndPx={900} />
      <ScrollButtons />
      <main className="text-lightest relative">
      {/* Full-width intro sections */}
      <Hero />
      <Bio />

      {/* Split-screen project showcase */}
      <div id="projects" className="flex flex-col md:flex-row">
        {/* Left: Sticky Project List */}
        <aside className="md:w-1/2 md:sticky md:top-0 md:h-screen md:overflow-hidden">
          <ProjectsList activeSection={activeSection} />
        </aside>

        {/* Right: Scrollable Project Sections */}
        <div className="md:w-1/2">
          <ProjectsRenderer />
        </div>
      </div>

      {/* Full-width outro section */}
      <ContactSection />
    </main>
    </>
  );
}