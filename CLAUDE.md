# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite and HMR
- `npm run build` - Build for production (runs TypeScript compiler + Vite build)
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React + TypeScript + Vite project using modern ESM modules. The codebase follows these key patterns:

### Technology Stack
- **React 19** with TypeScript for the frontend
- **React Router DOM** for client-side routing
- **Vite** as the build tool and dev server
- **ESLint** with TypeScript integration for code quality
- **CSS** for styling (no framework detected)
- **Tally.so** integration for waitlist form

### Project Structure
- `src/` - Main application source code
  - `App.tsx` - Root React component with routing setup
  - `main.tsx` - Application entry point
  - `components/` - React components
    - `Home.tsx` - Landing page with logo and waitlist signup
    - `Product.tsx` - Product features and value proposition
    - `Team.tsx` - Team and founder information
    - `Navigation.tsx` - Header navigation component
  - `assets/` - Static assets (HomePro logo, images)
- `public/` - Public static files served by Vite
- `dist/` - Build output (ignored by ESLint)

### TypeScript Configuration
- Uses project references with `tsconfig.app.json` and `tsconfig.node.json`
- Configured for modern React with strict type checking

### ESLint Configuration
- Configured with TypeScript ESLint, React Hooks, and React Refresh plugins
- Targets modern browser environments
- Ignores `dist/` directory

## Project Purpose

This is a landing page for HomePro, a home care service that positions itself as "the primary care physician for your home." The site is a single-page application with three main routes:

- **Home (`/`)** - Hero section with HomePro logo and Tally.so waitlist signup
- **Product (`/product`)** - Features including expert guidance, contractor negotiation, critical information access, and AI insights
- **Team (`/team`)** - Founder information and company background

## Key Development Notes

- This is a standard Vite React template setup with custom business logic
- No testing framework is currently configured
- The project uses ESM modules exclusively (`"type": "module"` in package.json)
- Hot Module Replacement (HMR) is enabled for fast development
- Uses modern React 19 with functional components and hooks
- External form handling via Tally.so integration (no client-side form validation needed)
- Navigation uses React Router DOM with `Link` components
- Components are organized by page/feature rather than by type
- Monochrome design system (black & white) with Inter font family