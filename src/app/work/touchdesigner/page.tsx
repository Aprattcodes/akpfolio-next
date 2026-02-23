import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Technology & Digital Art | Coming Soon",
  description:
    "Real-time visual systems, generative art, and interactive installations using TouchDesigner and WebGL.",
};

export default function TouchDesignerPage() {
  return (
    <main className="min-h-screen bg-darkest text-lightest flex flex-col">
      <div className="h-4 md:h-6" />

      {/* Breadcrumb */}
      <div className="px-5 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm md:text-base opacity-80">
            <Link
              className="underline underline-offset-4 hover:opacity-80"
              href="/"
            >
              Home
            </Link>{" "}
            /{" "}
            <Link
              className="underline underline-offset-4 hover:opacity-80"
              href="/#creative-tech"
            >
              Creative Technology
            </Link>{" "}
            / Portfolio
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-5 md:px-8">
        <div className="mx-auto w-full max-w-3xl text-center">
          {/* Coming Soon Badge */}
          <span className="inline-block rounded-full border-2 border-accent px-4 py-1 text-sm font-caption uppercase tracking-widest text-accent mb-6">
            Coming Soon
          </span>

          <h1 className="font-heading font-bold tracking-tight text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] uppercase mb-6">
            Creative Technology & Digital Art
          </h1>

          <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8 max-w-2xl mx-auto">
            A curated collection of real-time visual systems, generative art,
            and interactive installations created using TouchDesigner, WebGL,
            and Python. This portfolio is currently being assembled.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/#creative-tech"
              className="inline-flex items-center rounded-md border-2 border-accent px-6 py-3 font-semibold text-lightest hover:bg-accent/10 transition-colors duration-200"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="h-16 md:h-24" />
    </main>
  );
}
