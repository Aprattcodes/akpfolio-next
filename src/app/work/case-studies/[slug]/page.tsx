import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";

type PageProps = {
  params: {
    slug: string;
  };
};

// Generate static paths for all case studies
export function generateStaticParams() {
  const wcagProject = projects.find((p) => p.sectionId === "wcag");

  if (!wcagProject?.caseStudies) {
    return [];
  }

  return wcagProject.caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const wcagProject = projects.find((p) => p.sectionId === "wcag");
  const caseStudy = wcagProject?.caseStudies?.find((s) => s.slug === slug);

  return {
    title: caseStudy?.title || "Case Study",
    description: caseStudy?.description || "",
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  const wcagProject = projects.find((p) => p.sectionId === "wcag");
  const caseStudy = wcagProject?.caseStudies?.find((s) => s.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-darkest text-lightest">
      <div className="h-4 md:h-6" />

      {/* Breadcrumb */}
      <div className="px-5 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm md:text-base opacity-80">
            <Link className="underline underline-offset-4 hover:opacity-80" href="/">
              Home
            </Link>{" "}
            /{" "}
            <Link className="underline underline-offset-4 hover:opacity-80" href="/#projects">
              Case studies
            </Link>{" "}
            / {caseStudy.title}
          </p>
        </div>
      </div>

      <div className="h-8 md:h-10" />

      {/* Hero */}
      <header className="px-5 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="font-heading font-bold tracking-tight text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02] uppercase">
            {caseStudy.title}
          </h1>

          <div className="h-6 md:h-8" />

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-widest opacity-70 font-caption">Description</p>
              <div className="h-3" />
              <p className="text-lg leading-relaxed">{caseStudy.description}</p>
            </div>

            {caseStudy.tags && caseStudy.tags.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-widest opacity-70 font-caption">Technologies</p>
                <div className="h-3" />
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full bg-accent2/10 text-accent2 border border-accent2/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="h-10 md:h-14" />

      {/* Featured Image Placeholder */}
      <section className="px-5 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl border border-lightest/10 bg-lightest/5">
            <div className="aspect-video w-full flex items-center justify-center text-lightest/40">
              <p className="text-sm">Image: {caseStudy.imageAlt}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:h-20" />

      {/* Content Placeholder */}
      <section className="px-5 md:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <div className="rounded-2xl border border-lightest/10 bg-lightest/5 p-8 md:p-12">
            <p className="text-lg leading-relaxed opacity-90 mb-6">
              This is a placeholder page for <strong>{caseStudy.title}</strong>.
            </p>
            <p className="text-base leading-relaxed opacity-80 mb-8">
              Add your detailed case study content here using your CaseStudiesPage.tsx as a template.
            </p>
          </div>
        </div>
      </section>

      <div className="h-14 md:h-20" />

      {/* Back Link */}
      <section className="px-5 md:px-8 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-accent2 hover:underline text-lg font-semibold"
          >
            ← Back to all case studies
          </Link>
        </div>
      </section>
    </main>
  );
}
