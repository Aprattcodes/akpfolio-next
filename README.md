# AKP Portfolio

A modern, accessible portfolio website showcasing frontend engineering and UX-focused development work. Built with performance, accessibility, and maintainability as core design principles.

**Live Site:** [akpfolio.com](https://www.akpfolio.com/)

## Overview

This portfolio demonstrates professional frontend engineering capabilities through a production-ready Next.js application. It features full-screen scroll-based storytelling, interactive WebGL backgrounds, and comprehensive case studies of public-sector and accessibility-focused work.

### Key Features

- **WCAG 2.1 AA Compliant** – Accessible navigation, semantic HTML, keyboard support, and color contrast validation
- **Performance Optimized** – Server-side rendering, optimized images, and efficient animations
- **Interactive Visuals** – Custom WebGL shaders using Three.js for liquid gradients and animated grain textures
- **Responsive Design** – Mobile-first approach with fluid typography and adaptive layouts
- **Case Study System** – Dynamic routing with static generation for detailed project breakdowns

## Tech Stack

### Core Framework
- **Next.js 16** (App Router) – Server components, static generation, and optimized routing
- **React 19** – Modern hooks and component patterns
- **TypeScript** – Type safety and improved developer experience

### Styling & Animation
- **Tailwind CSS 4.1** – CSS-first configuration with custom design tokens
- **Framer Motion** – Scroll-triggered animations and micro-interactions

### 3D Graphics
- **Three.js** – WebGL rendering engine
- **@react-three/fiber** – React renderer for Three.js
- **@react-three/drei** – Helper utilities for 3D scenes

### Development Tools
- **ESLint** – Code quality and consistency
- **VS Code** – Primary development environment
- **Claude Code** – AI-assisted development
- **Vercel** – Hosting, deployment, and CI/CD

## Project Structure

```
akpfolio-next/
├── app/
│   ├── components/
│   │   ├── projects/       # Project display components
│   │   ├── sections/       # Page sections (Hero, Bio, Contact)
│   │   ├── ui/            # Reusable UI elements
│   │   └── visual/        # WebGL/Three.js visual components
│   ├── data/
│   │   └── projects.ts    # Project and case study data
│   ├── hooks/
│   │   └── useActiveSection.ts  # Scroll position tracking
│   ├── work/
│   │   └── case-studies/[slug]/  # Dynamic case study pages
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles and theme tokens
├── public/
│   ├── img/              # Project images and assets
│   └── black-orchid.png  # Background texture
└── package.json
```

## Accessibility Features

This portfolio follows WCAG 2.1 AA guidelines:

- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Color contrast ratios validated
- ✅ Focus indicators on interactive elements
- ✅ Alt text for all images
- ✅ ARIA labels where appropriate
- ✅ Reduced motion support (respects `prefers-reduced-motion`)
- ✅ Responsive text sizing
- ✅ Clear visual hierarchy

## Performance Optimizations

- Server-side rendering for fast initial page loads
- Static generation for case study pages
- Image optimization via Next.js Image component
- WebGL animations respect system motion preferences
- Minimal JavaScript bundle size
- Efficient CSS with Tailwind's JIT compiler

## Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Aprattcodes/akpfolio-next.git
cd akpfolio-next

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the site locally.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Run production server locally
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## Deployment

Deployed via Vercel with automatic deployments on push to main branch.

### Build Configuration

- Framework: Next.js 16
- Node Version: 18.x
- Build Command: `npm run build`
- Output Directory: `.next`

## Case Studies

The portfolio includes detailed case studies demonstrating:

- **WCAG Compliance** – Accessible public-facing systems for government agencies
- **Complex Tool Integration** – ArcGIS mapping, bilingual support, interactive forms
- **Legacy System Maintenance** – Production debugging and risk-aware engineering
- **Technical Breadth** – Full-stack capabilities across modern and legacy platforms

Each case study follows a structured format with:
- Project context and constraints
- Technical approach and decision-making
- Implementation highlights
- Accessibility considerations
- Measurable outcomes

## Design System

### Color Palette

```css
--color-lightest: #F1F1F1   /* Primary text and borders */
--color-darkest: #14161E     /* Background */
--color-accent: #FF6F61      /* Primary accent (coral) */
--color-accent2: #30D5C8     /* Secondary accent (teal) */
--color-alert: #FFC107       /* Tertiary accent (amber) */
```

### Typography

- **Headings:** Titillium Web (Bold, Black)
- **Body:** Montserrat
- **Labels:** PT Sans Caption

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## Contact & Links

- **Portfolio:** [akpfolio.com](https://www.akpfolio.com/)
- **GitHub:** [@Aprattcodes](https://github.com/Aprattcodes)
- **LinkedIn:** [Connect on LinkedIn](https://www.linkedin.com/in/alyssakpratt/) <!-- Add your actual LinkedIn URL -->

## License

This project is private and all rights are reserved. The code is provided as a portfolio demonstration and may not be used, copied, or distributed without explicit permission.

---

**Built with care** by Alyssa Pratt – Frontend Engineer & Creative Technologist

*Demonstrating systems-driven development, accessibility advocacy, and UX-focused engineering.*