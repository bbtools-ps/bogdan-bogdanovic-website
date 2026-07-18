# AGENTS instructions for bogdan-bogdanovic-website

## Project summary

- This repository is a personal portfolio site built with Astro and TypeScript.
- The site supports English and Serbian, with localized content and UI strings.
- Main entry points are the Astro pages in [src/pages](src/pages), reusable components in [src/components](src/components), and content posts in [src/posts](src/posts).

## Working conventions

- Keep changes aligned with the existing Astro component style: simple components, clear props, and minimal logic in templates.
- Prefer reusing existing patterns from nearby components before introducing new abstractions.
- When adding or changing UI copy, update translations in [src/i18n/translations.ts](src/i18n/translations.ts) for both supported languages.
- Content-driven sections are powered by Astro content collections in [src/content.config.ts](src/content.config.ts). Keep the markdown frontmatter schema compatible with that file.
- For projects and work experience, add or update entries in both locale folders so the site remains consistent:
  - [src/posts/projects/en](src/posts/projects/en)
  - [src/posts/projects/sr](src/posts/projects/sr)
  - [src/posts/work-experience/en](src/posts/work-experience/en)
  - [src/posts/work-experience/sr](src/posts/work-experience/sr)

## Commands

- Install dependencies: `pnpm install`
- Start development server: `pnpm dev`
- Run tests: `pnpm test`
- Build for production: `pnpm build`

## Testing expectations

- Component tests live next to components, for example in [src/components](src/components), and use Vitest with Astro container rendering.
- If you change rendered output, markup, or link behavior, update or add tests in the matching `.test.ts` file.
- Keep accessibility in mind when changing links, headings, and images.

## Project-specific notes

- Tailwind classes are used directly in Astro templates; follow the existing utility patterns rather than introducing new styling systems.
- The site is content-heavy, so make sure new content still fits the existing layout and localization structure.
- Use the existing i18n helpers in [src/i18n/utils.ts](src/i18n/utils.ts) instead of hardcoding language-specific logic.
