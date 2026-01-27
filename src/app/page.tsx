"use client";

import Hero from "@/app/components/sections/Hero";
import Bio from "@/app/components/sections/Bio";
import ProjectsList from "@/app/components/projects/ProjectsList";
import ProjectsRenderer from "@/app/components/projects/ProjectsRenderer";
import ContactSection from "@/app/components/sections/ContactSection";
import ScrollButtons from "@/app/components/ui/ScrollButtons";
import ProjectsFAB from "@/app/components/ui/ProjectsFAB";
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
      <ProjectsFAB activeSection={activeSection} />
      <main className="text-lightest relative">
      {/* Full-width intro sections */}
      <Hero />
      <Bio />

      {/* Mobile: Section Title */}
      <div className="md:hidden px-6 pt-16 pb-8">
        <h2 className="text-3xl font-heading uppercase tracking-tight text-lightest">
          Areas of Practice
        </h2>
      </div>

      {/* Split-screen project showcase */}
      <div id="projects" className="flex flex-col md:flex-row">
        {/* Left: Sticky Project List - Desktop only */}
        <aside className="hidden md:block md:w-1/2 md:sticky md:top-0 md:h-screen md:overflow-hidden">
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
