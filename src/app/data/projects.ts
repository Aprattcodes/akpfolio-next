export type CaseStudy = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string; // For URL: /work/case-studies/{slug}
  tags?: string[]; // Optional: ["WCAG 2.1", "React", etc.]
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
        title: "Blue Lake Survey Platform",
        description: "Accessible survey interface for community feedback on water infrastructure projects. Implemented WCAG 2.1 AA standards with keyboard navigation and screen reader optimization.",
        image: "/img/JLA/blue-lake-screenshot.png",
        imageAlt: "Blue Lake survey platform interface showing accessible form controls",
        slug: "blue-lake-survey",
        tags: ["WCAG 2.1", "React", "Survey Platform"],
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