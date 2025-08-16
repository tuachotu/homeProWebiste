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
- **Vite** as the build tool and dev server
- **ESLint** with TypeScript integration for code quality
- **CSS** for styling (no framework detected)

### Project Structure
- `src/` - Main application source code
  - `App.tsx` - Root React component
  - `main.tsx` - Application entry point
  - `assets/` - Static assets (images, etc.)
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

This is a landing page for HomePro, a home care service that positions itself as "the primary care physician for your home." The site features:

- Hero section with waitlist signup
- About section explaining the service
- Team section highlighting the founder
- Email collection for the waitlist with form validation

## Key Development Notes

- This is a standard Vite React template setup with custom business logic
- No testing framework is currently configured
- The project uses ESM modules exclusively (`"type": "module"` in package.json)
- Hot Module Replacement (HMR) is enabled for fast development
- Uses modern React 19 with functional components and hooks
- Form handling with basic client-side validation
- Smooth scrolling navigation between sections