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
    description: "WCAG-compliant public engagement systems for infrastructure projects—bilingual mapping, surveys, and microsites serving 2,000+ stakeholders.",
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
          "Squarespace microsite with ArcGIS mapping and bilingual Jotform integration for public engagement.",
        image: "/img/JLA/warmsprings-home-thumbnail.png",
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
          image: "/img/JLA/warmsprings-home-thumbnail.png",
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
            src: "/img/JLA/warmsprings-home-thumbnail.png",
            alt: "Interactive ArcGIS map showing the transmission line route",
            caption: "Interactive map visualizing the proposed transmission line route",
          },
          {
            src: "/img/JLA/warmsprings-home-thumbnail.pngg",
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
            title: "PGE Milliken Transmission Line Rebuild",
            description:
              "WCAG-compliant construction awareness site with ArcGIS Experience Builder interactive mapping.",
            image: "/img/JLA/miliken-home-thumbnail.png",
            imageAlt:
              "Milliken Transmission Line Rebuild website hero showing project overview and navigation",
            slug: "pge-milliken-transmission-line-rebuild",
            tags: [
              "WCAG 2.1 AA",
              "Accessibility",
              "Squarespace",
              "ArcGIS Experience Builder",
              "Bilingual UX",
              "Public Infrastructure",
              "Interactive Mapping",
            ],

            meta: {
              client: "Portland General Electric (PGE)",
              role: "UX Developer, Accessibility, Frontend",
              timeline: "Ongoing (multi-year rebuild; 2-year public site lifecycle)",
              platform: "Squarespace, custom HTML/CSS/JavaScript, ArcGIS Experience Builder, Weglot",
              focus: "Accessible construction awareness, data-driven mapping, bilingual support",
            },

            hero: {
              image: "/img/JLA/miliken-home-thumbnail.png",
              imageAlt:
                "Milliken Transmission Line Rebuild website with an interactive map module and project context content",
            },

            summary:
              "The Milliken Transmission Line Rebuild site is a public-facing information hub for a multi-year corridor reconstruction project. It helps communities along the route understand construction impacts using plain language, clear timelines, and an interactive map that connects project segments to real-world locations and visuals.",

            calloutText:
              "An interactive map wasn’t a feature—it was the clearest way to communicate impacts equitably.",

            sections: [
              {
                id: "challenge",
                kicker: "The Challenge",
                heading: "Making Construction Impacts Understandable by Location",
                body: [
                  "Transmission line rebuilds have localized impacts that are difficult to grasp through text alone.",
                  "This project needed to communicate where construction would occur, what changes residents could expect, and when different segments would be affected—without assuming technical knowledge.",
                  "Prior to the site, there was no centralized, accessible way to connect project segments with real-world locations and visuals in a digestible format.",
                  "Equitable access was a core concern: without plain language, bilingual support, and accessibility, the people most affected risked being excluded from critical information.",
                ],
              },
              {
                id: "constraints",
                kicker: "Context & Constraints",
                heading: "CMS Ownership + Accessibility Requirements",
                body: [
                  "The platform needed to remain easy for the client to manage over the life of an ongoing project, so Squarespace was selected for long-term ownership and content updates.",
                  "A major technical requirement was an interactive map that aligned construction segments with imagery and geographic context—more like an application than a static embed.",
                  "The site was required to meet WCAG AA and Section 508 standards and follow plain-language and DEI best practices.",
                ],
              },
              {
                id: "approach",
                kicker: "Approach",
                heading: "Using Mapping to Increase Clarity Without Increasing Cognitive Load",
                body: [
                  "Rather than defaulting to familiar tools, I approached this as an opportunity to test whether a purpose-built mapping solution could better serve the public.",
                  "The approach centered on three guiding questions: how to make geographic data intuitive for non-technical users, how to use interactivity to enhance understanding without adding cognitive load, and how to maintain accessibility and bilingual support within a CMS-driven site.",
                  "Ease of use for both the public and the client remained a primary constraint throughout.",
                ],
              },
              {
                id: "decisions",
                kicker: "Key Decisions",
                heading: "Tooling and Integration Choices",
                body: [
                  "Instead of a standard Google Map embed, I selected ArcGIS Experience Builder to support data-driven interactivity and better align corridor segments with visuals and contextual details.",
                  "Because ArcGIS Experience Builder was new to the agency workflow, I learned it mid-project and implemented a custom map experience using data tables and layered geographic information.",
                  "Since Weglot does not automatically translate iframe content, I implemented custom JavaScript to synchronize language state between the main site and the embedded map experience for consistent bilingual access.",
                ],
              },
              {
                id: "accessibility",
                kicker: "Accessibility & Inclusive Design",
                heading: "Accessibility as a Build Constraint, Not a Final Pass",
                body: [
                  "Accessibility was integrated throughout the project rather than treated as a final review step.",
                  "The site was designed and tested against WCAG AA and Section 508 standards, including color contrast validation, semantic reading order, keyboard navigation, and mobile responsiveness.",
                  "Layouts were tested across browsers and screen sizes, and the site was navigated using only a keyboard to validate focus order.",
                  "Alt text was written intentionally and documented for client reference, and bilingual functionality was tested to ensure consistent access across supported languages.",
                ],
              },
              {
                id: "outcome",
                kicker: "Outcome & Impact",
                heading: "Early Engagement + Clearer Corridor Awareness",
                body: [
                  "Within the first four months of launch, the site received over 2,000 page views and hundreds of unique visitors, indicating strong early engagement from communities along the corridor.",
                  "Stakeholders expressed satisfaction with the clarity of communication and the effectiveness of the interactive map in helping the public understand construction impacts and locations.",
                ],
              },
              {
                id: "learning",
                kicker: "What I Learned",
                heading: "Choosing Better Tools and Building App-Like UX Inside a CMS",
                body: [
                  "This project reinforced the value of staying open to new tools rather than defaulting to familiar solutions.",
                  "By learning ArcGIS Experience Builder mid-project, I delivered a more meaningful, data-driven experience for public understanding.",
                  "It also strengthened my confidence in building application-like interfaces within CMS constraints—showing that thoughtful tool selection can improve comprehension without requiring a modern frontend stack.",
                ],
              },
              {
                id: "portfolio",
                kicker: "Why It Matters",
                heading: "A Portfolio Example of Technical Exploration With Public Impact",
                body: [
                  "This project demonstrates my ability to learn new technologies quickly, integrate data-driven tools into accessible public-facing experiences, and balance usability with long-term maintainability.",
                  "It highlights a problem-solving mindset that prioritizes clarity, equity, and real-world constraints.",
                ],
              },
            ],

            highlights: [
              "Designed website mockups with a clear, flexible information hierarchy",
              "Built the site in Squarespace using limited, intentional navigation",
              "Developed an interactive mapping application using ArcGIS Experience Builder",
              "Implemented custom JavaScript to synchronize bilingual toggling across embedded map content",
              "Designed and applied brand colors and visual styles",
              "Built a responsive, custom-coded project timeline using HTML, CSS, and JavaScript",
              "Conducted accessibility checks including contrast, keyboard navigation, and alt text",
              "Delivered analytics and SEO reports to support ongoing outreach strategy",
            ],

            stats: [
              { label: "Page views (first 4 months)", value: "2,000+" },
              { label: "Project status", value: "Ongoing" },
              { label: "Accessibility standard", value: "WCAG AA / Section 508" },
            ],

            images: [
              {
                src: "/img/JLA/miliken-interactive-map-view-1.png",
                alt: "ArcGIS Experience Builder interactive map showing corridor segments and construction context",
                caption: "Interactive map experience built in ArcGIS Experience Builder to connect segments with real-world location context",
              },
              {
                src: "/img/JLA/miliken-interactive-map-view-2.png",
                alt: "Responsive project timeline component showing construction phases and milestones",
                caption: "Custom-coded timeline to communicate multi-phase construction in plain language",
              },
            ],
          },
     {
                title: "Legacy Interactive Comment Map System",
                description:
                  "Production debugging and stabilization of legacy Google Maps comment system.",
                image: "/img/JLA/comment-map.png",
                imageAlt:
                  "Public-facing interactive map interface with location-based comment markers",
                slug: "legacy-interactive-comment-map",
                tags: [
                  "Legacy Systems",
                  "Production Debugging",
                  "Google Maps API",
                  "Public Sector",
                  "Risk-Aware Engineering",
                  "Frontend Maintenance",
                ],

                meta: {
                  client: "Multiple public-sector agencies",
                  role: "Frontend Engineer, System Maintenance Owner",
                  timeline: "Ongoing maintenance across multiple deployments",
                  platform: "Bolt CMS, PHP, Google Maps API, JavaScript",
                  focus: "System stability, debugging, risk mitigation",
                },

                hero: {
                  image: "/img/JLA/comment-map.png",
                  imageAlt:
                    "Interactive public comment map showing multiple user-submitted markers",
                },

                summary:
                  "The Legacy Interactive Comment Map System is a production tool used by government agencies to collect geographically specific public feedback for infrastructure and planning projects. I inherited responsibility for its stability and ongoing maintenance, ensuring reliability under legacy constraints while avoiding regressions in active public deployments.",

                calloutText:
                  "This project required engineering judgment and restraint more than new feature development.",

                sections: [
                  {
                    id: "challenge",
                    kicker: "The Challenge",
                    heading: "Stabilizing a Business-Critical Legacy System",
                    body: [
                      "The system was already deployed across multiple public engagement projects and actively collecting live public input.",
                      "It relied on outdated software, undocumented architecture, and legacy dependencies, increasing the risk of failures over time.",
                      "A full rebuild was not feasible due to budget, staffing, and scope constraints, requiring careful maintenance rather than redesign.",
                    ],
                  },
                  {
                    id: "constraints",
                    kicker: "Context & Constraints",
                    heading: "Operating Under Real-World Limitations",
                    body: [
                      "The application ran on an older CMS with legacy PHP versions and no formal version control.",
                      "Dependencies and architectural decisions were undocumented, requiring reverse engineering.",
                      "The system was used in live public engagement efforts, limiting tolerance for breaking changes.",
                      "Any changes needed to be low-risk, reversible, and compatible with existing deployments.",
                    ],
                  },
                  {
                    id: "role",
                    kicker: "Role & Ownership",
                    heading: "Taking Responsibility for an Inherited System",
                    body: [
                      "Although I did not originally build the system, I assumed full ownership of its ongoing stability and maintenance.",
                      "My responsibilities included auditing inherited code, diagnosing production issues, and implementing fixes without introducing regressions.",
                      "I was responsible for deciding when changes were appropriate—and when restraint was the safer engineering choice.",
                    ],
                  },
                  {
                    id: "approach",
                    kicker: "Approach",
                    heading: "Risk-Aware Debugging in Production",
                    body: [
                      "Given the lack of documentation and version control, I prioritized incremental, testable changes over refactoring.",
                      "I mapped data flow from form submission to map rendering and isolated dependencies affecting frontend behavior.",
                      "Changes were made one at a time, with isolated backups and immediate validation to preserve system integrity.",
                    ],
                  },
                  {
                    id: "intervention",
                    kicker: "Key Intervention",
                    heading: "Diagnosing a Map Rendering Failure",
                    body: [
                      "A production issue caused only the first map marker to render correctly, while subsequent markers failed or collapsed into default behavior.",
                      "Data integrity and looping logic were confirmed, indicating the issue was isolated to the marker rendering layer.",
                      "I temporarily replaced the custom marker and label implementation with a baseline Google Maps marker to reduce variables.",
                      "All markers rendered correctly, confirming the failure point and allowing safe remediation without destabilizing the system.",
                    ],
                  },
                  {
                    id: "accessibility",
                    kicker: "Accessibility & UX",
                    heading: "Preserving Usability Under Constraints",
                    body: [
                      "While large-scale UX changes were not feasible, care was taken to avoid introducing accessibility regressions.",
                      "Existing Bootstrap-based patterns were preserved, and changes were tested for keyboard interaction and clarity.",
                      "Where improvements could not be safely implemented, limitations were documented rather than forced.",
                    ],
                  },
                  {
                    id: "outcome",
                    kicker: "Outcome",
                    heading: "Restored Reliability Without Regression",
                    body: [
                      "Marker rendering was stabilized across deployments without breaking existing behavior.",
                      "The system became more predictable and easier to reason about, reducing the risk of future failures.",
                      "The tool remained operational for public-facing engagement while longer-term modernization options were evaluated separately.",
                    ],
                  },
                  {
                    id: "impact",
                    kicker: "Why It Matters",
                    heading: "Engineering Judgment in Production Environments",
                    body: [
                      "This project demonstrates the ability to take ownership of undocumented legacy systems and stabilize them safely.",
                      "It highlights risk-aware debugging, production responsibility, and the discipline to balance improvement with operational trust.",
                    ],
                  },
                ],

                highlights: [
                  "Stabilized a production system used in live public engagement",
                  "Diagnosed complex rendering issues in undocumented legacy code",
                  "Applied risk-aware debugging strategies to avoid regressions",
                  "Maintained system reliability without full refactor or rebuild",
                  "Balanced technical improvement with operational responsibility",
                ],

                stats: [
                  {
                    label: "Public responses per deployment",
                    value: "2,000+",
                  },
                  {
                    label: "System status",
                    value: "Production, multi-project use",
                  },
                  {
                    label: "Primary risk",
                    value: "Legacy dependencies & undocumented architecture",
                  },
                ],

                images: [
                  {
                    src: "/img/JLA/comment-map-2.png",
                    alt: "Debugging map marker rendering behavior in a legacy Google Maps implementation",
                    caption:
                      "Isolating rendering failures by reducing complexity to a known-good baseline",
                  },
                ],
              }
                  ],
                },
                {
                  title: "Product & Startup Engineering",
                  role: "Full-Stack, Frontend Architecture",
                  slug: "soaria",
                  sectionId: "soaria",
                  description: "Full-stack product development for creative technology startups—real-time collaboration tools and immersive digital experiences.",
                  image: "/img/Soaria/soaria-thumbnail.png",
                  imageAlt: "Soaria website homepage",
                  ctaLink: "https://www.soaria.xyz/",
                  ctaText: "View Company Website",
                  accentColor: "accent2",
                },
                {
                  title: "Creative Technology & Digital Artist",
                  role: "Interactive, Experimental, Visual Systems, Graphic Design",
                  slug: "touchdesigner",
                  sectionId: "creative-tech",
                  description: "Real-time visual systems and generative art—TouchDesigner, WebGL, interactive installations for live performance and exhibitions.",
                  image: "/img/VAST/psuedo-plexus-clouds.png",
                  imageAlt: "Creative Technology - TouchDesigner generative visuals",
                  ctaLink: "/work/touchdesigner",
                  ctaText: "View Portfolio",
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