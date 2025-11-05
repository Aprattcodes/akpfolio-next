import "./globals.css";
import type { ReactNode } from "react";
import { Montserrat, Titillium_Web, PT_Sans_Caption } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-body" });
const titillium = Titillium_Web({ subsets: ["latin"], weight: ["700","900"], variable: "--font-heading" });
const ptSansCaption = PT_Sans_Caption({ subsets: ["latin"], weight: ["400","700"], variable: "--font-caption" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${titillium.variable} ${ptSansCaption.variable}`}>
        <header className="sticky top-0 z-40 border-b border-lightest/10 bg-darkest/70 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-lightest">
            <a href="/" className="font-heading text-xl">AKP</a>
            <div className="flex gap-6 text-sm">
              <a className="hover:opacity-80" href="/work">Work</a>
              <a className="hover:opacity-80" href="/about">About</a>
              <a className="hover:opacity-80" href="/contact">Contact</a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-lightest/60">
          © {new Date().getFullYear()} AKP. All rights reserved.
        </footer>
      </body>
    </html>
  );
}