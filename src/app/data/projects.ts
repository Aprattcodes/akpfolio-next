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
};

export const projects: Project[] = [
  {
    title: "Soaria",
    role: "Co-Founder / Fullstack Development",
    slug: "soaria",
    sectionId: "soaria",
    description: "Founding engineer and frontend developer for startup company",
    image: "/img/VAST/psuedo-plexus-clouds.png",
    imageAlt: "Soaria",
    ctaLink: "/work/soaria",
    ctaText: "View Project",
    accentColor: "accent",
  },
  {
    title: "VAST",
    role: "Co-Founder / Creative Technologist",
    slug: "vast",
    sectionId: "vast",
    description: "Visual Arts & Spacious Technology. A creative collective exploring the intersection of art, technology, and immersive experiences. We create generative visuals, interactive installations, and experimental digital media.",
    image: "/img/VAST/polygonia-v5-L.png",
    imageAlt: "VAST - Generative visual artwork",
    ctaLink: "/work/vast",
    ctaText: "View Project",
    accentColor: "accent2",
  },
  {
    title: "Public Involvement",
    role: "UX & Web Development",
    slug: "public-involvement",
    sectionId: "public-involvement",
    description: "Civic engagement tools for Johnson Lueck & Associates. Interactive mapping and survey platforms that help communities participate in urban planning and public infrastructure projects. Built with modern web technologies for accessibility and real-time collaboration.",
    image: "/img/JLA/comment-map.png",
    imageAlt: "JLA Public Involvement - Interactive comment mapping tool",
    ctaLink: "/work/public-involvement",
    ctaText: "View Project",
    accentColor: "alert",
    reverseLayout: true,
  },
  {
    title: "Creative Technology",
    role: "Artist / Technologist",
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
    title: "Visual Arts (Earlier Work)",
    role: "Illutstration & Digital media",
    slug: "visual-arts",
  },
  {
    title: "Portfolio Website (akpfolio.com)",
    role: "Web design & Development",
    slug: "portfolio",
    sectionId: "portfolio-site",
    isPortfolio: true,
  },
];