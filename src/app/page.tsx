"use client";

import Hero from "@/app/components/Hero";
import Bio from "@/app/components/Bio";
import ProjectsList from "@/app/components/ProjectsList";

export default function Home() {
  return (
    <main className="bg-darkest text-lightest">
      <Hero />
      <Bio />
      <ProjectsList />
    </main>
  );
}