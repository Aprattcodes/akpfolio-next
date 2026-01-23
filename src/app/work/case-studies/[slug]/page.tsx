import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/app/data/projects";
import { Metadata } from "next";

type PageProps = {
  params: {
    slug: string;
  };
};

// Generate static paths for all case studies
export function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  return {
    title: caseStudy?.title || "Case Study",
    description: caseStudy?.description || "",
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

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

          {/* Meta Information */}
          {caseStudy.meta && (
            <div className="grid gap-6 md:grid-cols-12 md:gap-8">
              {caseStudy.meta.client && (
                <div className="md:col-span-4">
                  <p className="text-xs uppercase tracking-widest opacity-70 font-caption">Client / Partners</p>
                  <div className="h-3" />
                  <p className="text-base md:text-lg leading-relaxed">{caseStudy.meta.client}</p>
                </div>
              )}

              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-widest opacity-70 font-caption">What I did</p>
                <div className="h-3" />
                <ul className="space-y-2 text-base md:text-lg">
                  {caseStudy.meta.role && (
                    <li className="leading-relaxed">
                      <span className="opacity-70">Role:</span> {caseStudy.meta.role}
                    </li>
                  )}
                  {caseStudy.meta.timeline && (
                    <li className="leading-relaxed">
                      <span className="opacity-70">Timeline:</span> {caseStudy.meta.timeline}
                    </li>
                  )}
                </ul>
              </div>

              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-widest opacity-70 font-caption">Tools / Platform</p>
                <div className="h-3" />
                <ul className="space-y-2 text-base md:text-lg">
                  {caseStudy.meta.platform && (
                    <li className="leading-relaxed">
                      <span className="opacity-70">Platform:</span> {caseStudy.meta.platform}
                    </li>
                  )}
                  {caseStudy.meta.focus && (
                    <li className="leading-relaxed">
                      <span className="opacity-70">Focus:</span> {caseStudy.meta.focus}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="h-10 md:h-14" />

      {/* Hero Image */}
      <section className="px-5 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl border border-lightest/10 bg-lightest/5">
            <div className="aspect-video w-full flex items-center justify-center text-lightest/40">
              <p className="text-sm">Image: {caseStudy.hero?.imageAlt || caseStudy.imageAlt}</p>
            </div>
          </div>

          {/* Summary and Stats */}
          {(caseStudy.summary || caseStudy.stats) && (
            <>
              <div className="h-4" />
              <div className="grid gap-6 md:grid-cols-12 md:gap-10">
                {caseStudy.summary && (
                  <div className="md:col-span-7">
                    <p className="text-lg md:text-xl leading-relaxed opacity-90">
                      {caseStudy.summary}
                    </p>
                  </div>
                )}

                {caseStudy.stats && caseStudy.stats.length > 0 && (
                  <div className="md:col-span-5">
                    <div className="grid grid-cols-1 gap-4 rounded-2xl border border-lightest/10 p-5 md:p-6">
                      {caseStudy.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-xs uppercase tracking-widest opacity-70 font-caption">{stat.label}</p>
                          <div className="h-2" />
                          <p className="text-xl md:text-2xl font-semibold">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="h-14 md:h-20" />

      {/* Sections */}
      {caseStudy.sections && caseStudy.sections.map((section) => (
        <div key={section.id}>
          <section className="px-5 md:px-8">
            <div className="mx-auto w-full max-w-6xl">
              <div className="grid gap-10 md:grid-cols-12 md:gap-12">
                <div className="md:col-span-4">
                  <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-semibold leading-tight">
                    {section.heading}
                  </h2>
                  {section.kicker && (
                    <>
                      <div className="h-3" />
                      <p className="text-sm uppercase tracking-widest opacity-70 font-caption">{section.kicker}</p>
                    </>
                  )}
                </div>

                <div className="md:col-span-8">
                  <div className="space-y-4">
                    {section.body.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-base md:text-lg leading-relaxed opacity-90">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="h-14 md:h-20" />
        </div>
      ))}

      {/* Images
      {caseStudy.images && caseStudy.images.length > 0 && caseStudy.images.map((img, index) => (
        <div key={index}>
          <section className="px-5 md:px-8">
            <div className="mx-auto w-full max-w-6xl">
              <div className="relative overflow-hidden rounded-2xl border border-lightest/10 bg-lightest/5">
                <div className="aspect-video w-full flex items-center justify-center text-lightest/40">
                  <p className="text-sm">Image: {img.alt}</p>
                </div>
              </div>
              {img.caption && (
                <>
                  <div className="h-3" />
                  <p className="text-sm opacity-70">{img.caption}</p>
                </>
              )}
            </div>
          </section>
          <div className="h-14 md:h-20" />
        </div>
      ))} */}

      {/* Large Callout Text */}
      {caseStudy.calloutText && (
        <>
          <section className="px-5 md:px-8">
            <div className="mx-auto w-full max-w-6xl">
              <p className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight" style={{ color: 'var(--color-accent)' }}>
                {caseStudy.calloutText}
              </p>
            </div>
          </section>
          <div className="h-14 md:h-20" />
        </>
      )}

      {/* Implementation Highlights */}
      {caseStudy.highlights && caseStudy.highlights.length > 0 && (
        <>
          <section className="bg-darkest py-16 md:py-24">
            <div className="px-5 md:px-8">
              <div className="mx-auto w-full max-w-6xl">
                <div className="grid gap-10 md:grid-cols-2 md:gap-12">
                  {/* Left Column - Sticky */}
                  <div className="md:sticky md:top-20 md:self-start">
                    <p className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight text-lightest">
                      Implementation Highlights
                    </p>
                  </div>

                  {/* Right Column - Scrollable Content */}
                  <div className="space-y-8">
                    <div className="rounded-2xl border border-lightest/10 p-5 md:p-6">
                      <ul className="space-y-3 text-base md:text-lg leading-relaxed">
                        {caseStudy.highlights.map((highlight, index) => (
                          <li key={index} className="flex gap-3 text-lightest">
                            <span className="mt-[0.35rem] inline-block h-2 w-2 shrink-0 rounded-full border border-lightest" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="h-14 md:h-20" />
        </>
      )}

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
