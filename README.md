# divya-sri-portfolio

Personal portfolio website for **Divya Sri Doredla** — AI/ML Engineer.

Built with Next.js 14 (App Router), Tailwind CSS, and TypeScript. Features an animated neural network hero, interactive project cards, skill proficiency bars, and a full dark-mode aesthetic.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Fonts**: Syne (display) + DM Sans (body) + DM Mono

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

Generates a static export in the `out/` folder (configured in `next.config.js`).

## Project Structure

```
divya-sri-portfolio/
├── app/
│   ├── globals.css        # Global styles + noise texture
│   ├── layout.tsx         # Root layout with Navbar + Footer
│   └── page.tsx           # Home page (assembles all sections)
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile menu
│   ├── Hero.tsx           # Animated neural network canvas + intro
│   ├── About.tsx          # Bio + quick facts
│   ├── Projects.tsx       # Featured project cards with metrics
│   ├── Experience.tsx     # Timeline: work + education + achievements
│   ├── Skills.tsx         # Skill bars + competency tags
│   └── Contact.tsx        # Email CTA + social links
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Customization

- **Content**: Edit text, links, and metrics directly in each component under `components/`
- **Colors**: All color tokens live in `tailwind.config.js` — update `pulse`, `teal`, `amber` for a quick rebrand
- **Fonts**: Swap Google Fonts in `app/globals.css` @import and `tailwind.config.js` fontFamily keys
