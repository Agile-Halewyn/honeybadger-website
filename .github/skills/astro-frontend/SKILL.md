---
name: astro-frontend
description: Standards and patterns for Astro 5.x development in the HoneyBadger Website project.
---

# Astro Frontend Skill

## Component Architecture

1. **Atomic Design**: 
   - `src/components/`: Reusable items (Buttons, Cards, Inputs).
   - `src/layouts/`: Page wrappers (Base, Content).
   - `src/pages/`: Routing and high-level composition.

2. **Astro Islands**: Use `client:load` or `client:visible` only when interactivity is absolutely required (e.g., charts, form validation). Prefer static HTML where possible.

3. **Props**: Use TypeScript interfaces for component props to ensure type safety.

## Styling Patterns

- **Design Tokens**: All styles must reference `src/styles/global.css`.
- **Scoped Styles**: Use `<style>` blocks within `.astro` components for component-specific styles.
- **Utility Classes**: Use global utility classes from `global.css` (e.g., `.container`, `.grid-3`) for layout.

## Page Workflow

1. Define metadata (title, description) in the Frontmatter.
2. Layout selection: Usually wrap in `Base.astro` or `Layout.astro`.
3. Section composition: Use `.section` and `.container` classes to maintain spacing consistency.

## Image Optimization

- Always use the `<Image />` component from `astro:assets`.
- Provide meaningful `alt` text for accessibility.
- Store source images in `src/assets/`.
