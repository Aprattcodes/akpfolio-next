"use client";

import Hero from "@/app/components/Hero";
import ProjectsList from "@/app/components/ProjectsList";

export default function Home() {
  return (
    <main className="bg-darkest text-lightest">
      <Hero />
      <section id="projects">
        <ProjectsList />
      </section>
    </main>
  );
}