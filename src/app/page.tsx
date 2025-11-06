"use client";

import Hero from "@/app/components/Hero";
import Bio from "@/app/components/Bio";
import ProjectsList from "@/app/components/ProjectsList";
import VASTSection from "@/app/components/VASTSection";
import JLASection from "@/app/components/JLASection";
import CreativeTechSection from "@/app/components/CreativeTechSection";
import PortfolioSection from "@/app/components/PortfolioSection";
import ContactSection from "@/app/components/ContactSection";
import ScrollButtons from "@/app/components/ScrollButtons";
import { useActiveSection } from "@/app/hooks/useActiveSection";

export default function Home() {
  const activeSection = useActiveSection(["vast", "public-involvement", "creative-tech", "portfolio-site"]);

  return (
    <>
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
          <VASTSection />
          <JLASection />
          <CreativeTechSection />
          <PortfolioSection />
        </div>
      </div>

      {/* Full-width outro section */}
      <ContactSection />
    </main>
    </>
  );
}