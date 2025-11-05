export type Project = {
  title: string;
  role: string;
  slug: string;
  image?: string; // optional for now
};

export const projects: Project[] = [
  {
    title: "VAST",
    role: "Co-Founder / Creative Technologist",
    slug: "vast",
    image: "/images/vast.jpg",
  },
  {
    title: "Public Involvement",
    role: "UX & Web Development",
    slug: "public-involvement",
  },
  {
    title: "TouchDesigner",
    role: "Artist / Technologist",
    slug: "touchdesigner",
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
  },
];