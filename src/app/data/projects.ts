export type CaseStudy = {
  // Preview data (for grids/cards)
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string; // For URL: /work/case-studies/{slug}
  tags?: string[]; // Optional: ["WCAG 2.1", "React", etc.]

  // Full page content
  meta?: {
    client?: string;
    role?: string;
    timeline?: string;
    platform?: string;
    focus?: string;
  };
  hero?: {
    image: string;
    imageAlt: string;
  };
  summary?: string;
  calloutText?: string; // Large accent-colored callout text
  sections?: {
    id: string;
    kicker?: string; // Small label above heading
    heading: string;
    body: string[];
  }[];
  highlights?: string[]; // Implementation highlights list
  stats?: {
    label: string;
    value: string;
  }[];
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
};

export type Project = {
  title: string;
  role: string;
  slug: string;
  sectionId?: string; // ID for the section element (defaults to slug if not provided)
  description?: string;
  image?: string;
  imageAlt?: string;
  ctaLink?: string;
  ctaText?: string;
  accentColor?: "accent" | "accent2" | "alert"; // For role tag and button styling
  reverseLayout?: boolean; // If true, image on left, text on right
  icon?: string; // lucide-react icon name (for card view)
  isPortfolio?: boolean; // Special flag for portfolio section
  caseStudies?: CaseStudy[]; // Array of case studies for special case studies view
  hasCaseStudiesView?: boolean; // Flag to render CaseStudiesView instead of ProjectSection
};

export const projects: Project[] = [
  {
    title: "Accessible Public-Facing Systems",
    role: "UX Developer, Accessibility, Frontend",
    slug: "project-list-1",
    sectionId: "wcag",
    description: "Civic engagement tools for JLA. Interactive mapping and survey platforms that help communities participate in urban planning and public infrastructure projects. Built with modern web technologies for accessibility and real-time collaboration.",
    image: "/img/VAST/psuedo-plexus-clouds.png",
    imageAlt: "na",
    ctaLink: "/work/case-studies",
    ctaText: "View Case Studies",
    accentColor: "accent",
    hasCaseStudiesView: true,
    caseStudies: [
      {
        title: "Warm Springs Power Pathway Website",
        description:
          "A bilingual, WCAG-compliant microsite supporting transparent public and stakeholder engagement for a long-term transmission line project across private and tribal lands.",
        image: "/img/case-studies/warm-springs/hero.png",
        imageAlt:
          "Warm Springs Power Pathway website homepage showing bilingual navigation and project overview",
        slug: "warm-springs-power-pathway",
        tags: [
          "WCAG 2.1 AA",
          "Accessibility",
          "Squarespace",
          "ArcGIS",
          "Bilingual UX",
          "Public Infrastructure",
        ],

        meta: {
          client:
            "Portland General Electric & Confederated Tribes of the Warm Springs Reservation of Oregon",
          role: "UX Developer, Project Management",
          timeline: "Ongoing (5–6 year infrastructure project)",
          platform:
            "Squarespace, custom HTML/CSS/JavaScript, ArcGIS, Jotform, Weglot",
          focus: "Accessible public communication, bilingual engagement",
        },

        hero: {
          image: "/img/case-studies/warm-springs/hero.png",
          imageAlt:
            "Warm Springs Power Pathway website hero section with project context and navigation",
        },

        summary:
          "The Warm Springs Power Pathway website was created to support early and sustained public engagement for a technically complex transmission line project. The site serves as a centralized, accessible source of information designed to explain project impacts in plain language while supporting bilingual access and long-term maintainability.",

        calloutText:
          "Clarity, accessibility, and trust were treated as core design requirements—not enhancements.",

        sections: [
          {
            id: "problem",
            kicker: "The Problem",
            heading: "Communicating Complex Infrastructure Clearly",
            body: [
              "The project required early and sustained public communication around why a new transmission line was being built, how it would affect surrounding communities, and how the public could stay informed and provide feedback.",
              "Before the website existed, there was no centralized or accessible platform explaining the project in plain language. Given that construction would take place on private and tribal lands, the risk of confusion, mistrust, or misinformation was high.",
              "Ensuring clarity and equitable access to information was essential for all audiences."
            ],
          },
          {
            id: "constraints",
            kicker: "Constraints",
            heading: "Real-World Platform and Organizational Challenges",
            body: [
              "Squarespace was selected to support long-term client ownership and ease of content updates, but it introduced limitations around advanced interactivity and embedded tools.",
              "The site needed to support an interactive map, a bilingual public survey, and long-term scalability within a CMS environment not designed for heavy customization.",
              "The project also required balancing the priorities of a large utility company and a sovereign tribal nation while maintaining clear, neutral, and accessible public communication.",
              "All work was required to meet WCAG AA and Section 508 standards and follow plain-language best practices."
            ],
          },
          {
            id: "approach",
            kicker: "Approach",
            heading: "Designing for Longevity and Accessibility",
            body: [
              "The site was designed as a flexible microsite capable of evolving over the life of the project. Core requirements included bilingual support, an interactive map, and a structure simple enough for non-technical users to maintain.",
              "Rather than prioritizing heavy interactivity, the focus remained on clarity, accessibility, and long-term maintainability.",
              "Tradeoffs were made to work within Squarespace’s constraints while selectively using custom code where it provided clear value.",
              "Automated translation tools were avoided due to the risk of inaccuracies. Since Spanish was the only required secondary language, Weglot was selected for its editable translations and professional review workflow."
            ],
          },
        ],

        highlights: [
          "Designed scalable website mockups with clear information hierarchy",
          "Built a bilingual Squarespace site with intentional navigation",
          "Integrated an ArcGIS interactive map to visualize the transmission line route",
          "Implemented a bilingual Jotform survey with custom JavaScript language synchronization",
          "Defined accessible brand colors and visual styles",
          "Developed a responsive, custom project timeline using HTML, CSS, and JavaScript",
        ],

        images: [
          {
            src: "/img/case-studies/warm-springs/map.png",
            alt: "Interactive ArcGIS map showing the transmission line route",
            caption: "Interactive map visualizing the proposed transmission line route",
          },
          {
            src: "/img/case-studies/warm-springs/survey.png",
            alt: "Bilingual public survey embedded within the website",
            caption: "Custom bilingual survey with synchronized language toggles",
          },
        ],

        stats: [
          {
            label: "Page views (first 4 months)",
            value: "2,000+",
          },
          {
            label: "Project duration",
            value: "5–6 years",
          },
          {
            label: "Accessibility standard",
            value: "WCAG AA / Section 508",
          },
        ],
      },
      {
        title: "Interactive Comment Mapping",
        description: "Real-time mapping tool allowing residents to pin comments and feedback on infrastructure projects. Features accessible map controls and alternative text-based input methods.",
        image: "/img/JLA/comment-map-2.png",
        imageAlt: "Interactive map interface with comment pins and accessible controls",
        slug: "comment-mapping",
        tags: ["Mapbox", "Accessibility", "Real-time"],
      },
      {
        title: "PBOT Survey Dashboard",
        description: "Portland Bureau of Transportation survey platform with comprehensive accessibility features including high contrast modes, focus indicators, and semantic HTML structure.",
        image: "/img/JLA/pbot-survey-screenshot.png",
        imageAlt: "PBOT survey dashboard showing accessible form elements",
        slug: "pbot-survey",
        tags: ["Government", "WCAG 2.1", "User Research"],
      },
    ],
  },
  {
    title: "Product & Startup Engineering",
    role: "Full-Stack, Frontend Architecture",
    slug: "soaria",
    sectionId: "soaria",
    description: "Visual Arts & Spacious Technology. A creative collective exploring the intersection of art, technology, and immersive experiences. We create generative visuals, interactive installations, and experimental digital media.",
    image: "/img/VAST/polygonia-v5-L.png",
    imageAlt: "na",
    ctaLink: "/work/soaria",
    ctaText: "View Project",
    accentColor: "accent2",
  },
  {
    title: "Creative Technology & Digital Artist",
    role: "Interactive, Experimental, Visual Systems, Graphic Design",
    slug: "touchdesigner",
    sectionId: "creative-tech",
    description: "Real-time visual systems built with TouchDesigner. Interactive installations, generative graphics, and live performance visuals. Exploring the creative potential of node-based programming and procedural design.",
    image: "/img/VAST/psuedo-plexus-clouds.png",
    imageAlt: "Creative Technology - TouchDesigner generative visuals",
    ctaLink: "/work/touchdesigner",
    ctaText: "View Project",
    accentColor: "accent",
  },
  {
    title: "Portfolio Website (akpfolio.com)",
    role: "Web design & Development",
    slug: "portfolio",
    sectionId: "portfolio-site",
    isPortfolio: true,
  },
];

// Helper functions for case studies
export const getCaseStudyBySlug = (slug: string): CaseStudy | null => {
  for (const project of projects) {
    const study = project.caseStudies?.find((s) => s.slug === slug);
    if (study) return study;
  }
  return null;
};

export const getAllCaseStudySlugs = (): string[] => {
  const slugs: string[] = [];
  for (const project of projects) {
    if (project.caseStudies) {
      slugs.push(...project.caseStudies.map((s) => s.slug));
    }
  }
  return slugs;
};