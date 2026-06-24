# Mavene Omondi — Portfolio

Personal portfolio for **Mavene Omondi**, Senior Frontend Engineer & Frontend Lead at Safaricom PLC. Built with Next.js 16 App Router, React 19, and Tailwind CSS 4.

Live: [my-portfolio-deploy-app.vercel.app](https://my-portfolio-deploy-app.vercel.app)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, RSC, Streaming SSR) |
| UI | React 19, Tailwind CSS 4, shadcn/ui |
| Animation | Framer Motion 12 |
| 3D | Three.js 0.184, three-globe, @react-three/fiber |
| Forms | React Hook Form, Zod |
| Theming | next-themes |
| Package manager | pnpm 11 |

---

## Project Structure

```
app/                    # Next.js App Router routes
  layout.tsx            # Root layout (FloatingNav + SiteFooter)
  page.tsx              # Home (/)
  about/                # /about
  projects/             # /projects
  experience/           # /experience
  contact/              # /contact

features/               # Route-level feature modules
  hero/
  about/
  projects/
  experience/
  contact/

components/
  ui/                   # shadcn/ui components only
  common/               # Shared presentational components
  layout/               # FloatingNav, SiteFooter
  three/                # Globe (Three.js)
  motion.tsx            # Framer Motion re-exports

data/                   # All content as typed TS modules
  experience.ts
  projects.ts
  skills.ts
  grid.ts
  testimonials.ts
  index.ts
```

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Dev server
pnpm dev

# Production build
pnpm build
pnpm start
```

Requires **Node 20+** and **pnpm 11**.

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero, bento grid highlights, globe, testimonials |
| `/about` | Bio, skills by category, tech stack, testimonials |
| `/projects` | Project cards with tags and status badges |
| `/experience` | Work history timeline |
| `/contact` | Contact form + social links |

---

## Content

All portfolio content lives in `data/`. To update:

- **Experience** → `data/experience.ts`
- **Projects** → `data/projects.ts`
- **Skills** → `data/skills.ts`
- **Bento grid** → `data/grid.ts`
- **Testimonials** → `data/testimonials.ts`
- **Nav + social links** → `data/index.ts`

---

## CV Download

Place your CV PDF at `public/mavene-omondi-cv.pdf` and re-add the Download CV button in `features/hero/components/hero-content.tsx`.

---

## License

Personal portfolio — all rights reserved.
