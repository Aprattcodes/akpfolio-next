export type Project = {
  title: string;
  role: string;
  slug: string;
  image?: string; // optional for now
};

export const projects: Project[] = [
  {
    title: "VAST",
    role: "Creative direction",
    slug: "vast",
    image: "/images/vast.jpg",
  },
  {
    title: "Public Involvement",
    role: "UX & web development",
    slug: "public-involvement",
  },
  {
    title: "TouchDesigner",
    role: "Interactive design",
    slug: "touchdesigner",
  },
  {
    title: "Visual Arts",
    role: "Digital media",
    slug: "visual-arts",
  },
  {
    title: "Portfolio Website",
    role: "Web design & development",
    slug: "portfolio",
  },
];