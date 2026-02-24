import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat, Titillium_Web, PT_Sans_Caption } from "next/font/google";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-body" });
const titillium = Titillium_Web({ subsets: ["latin"], weight: ["700","900"], variable: "--font-heading" });
const ptSansCaption = PT_Sans_Caption({ subsets: ["latin"], weight: ["400","700"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "AKP | Portfolio",
  description: "UX Developer, Accessibility, Frontend Engineering",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${titillium.variable} ${ptSansCaption.variable}`}>
        <header className="sticky top-0 z-50 backdrop-blur-md bg-darkest/40 border-b border-lightest/10">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-lightest gap-4">
            <Link href="/" className="font-heading text-xl">
              Alyssa<span className="text-accent2">.</span>
            </Link>
            <div className="flex items-center gap-4 ml-auto text-sm">
              <Link href="#projects" className="hover:opacity-80">
                Work
              </Link>
              <Link href="#about" className="hover:opacity-80">
                About
              </Link>
              <Link href="#contact" className="hover:opacity-80">
                Contact
              </Link>
              <span className="hidden sm:block h-4 w-px bg-lightest/20" aria-hidden="true" />
              <a
                href="https://github.com/Aprattcodes"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex text-lightest/70 hover:text-accent2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-offset-2 focus:ring-offset-darkest rounded-sm"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/alyssakpratt"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex text-lightest/70 hover:text-accent2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-offset-2 focus:ring-offset-darkest rounded-sm"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </nav>
          {/* Mobile social icons row */}
          <div className="sm:hidden flex justify-center gap-6 px-4 pb-3 border-t border-lightest/5">
            <a
              href="https://github.com/Aprattcodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightest/70 hover:text-accent2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-offset-2 focus:ring-offset-darkest rounded-sm"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/alyssakpratt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightest/70 hover:text-accent2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-offset-2 focus:ring-offset-darkest rounded-sm"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </header>
        {children}
        <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-lightest/60">
          © {new Date().getFullYear()} AKP. All rights reserved.
        </footer>
      </body>
    </html>
  );
}