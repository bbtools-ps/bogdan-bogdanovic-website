# Bogdan Bogdanovic website

A personal (portfolio) website with i18n support, available in English and Serbian.

Built with [Astro](https://astro.build/) framework.

## Scripts

- `dev`: Starts the development server.
- `start`: Alias for `dev`.
- `build`: Runs type checks and builds the project for production.
- `preview`: Previews the production build.
- `astro`: Runs the Astro CLI.

## Project Structure

The project structure is as follows:

- `src/`: Contains the source code of the website.
  - `pages/`: Contains the pages of the website.
  - `components/`: Contains reusable components.
  - `layouts/`: Contains layout components.
  - `posts/`: Contains the data for the "Projects" and "Work Experience".
- `public/`: Contains static assets.
- `astro.config.mjs`: Configuration file for Astro.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `tsconfig.json`: Configuration file for TypeScript.

## Packages

- `@astrojs/check`: Astro's type checking tool.
- `@astrojs/tailwind`: Tailwind CSS integration for Astro.
- `astro`: The Astro framework.
- `clsx`: Utility for constructing `className` strings conditionally.
- `dayjs`: A lightweight JavaScript date library.
- `sharp`: High-performance image processing.
- `tailwind-merge`: Utility to merge Tailwind CSS classes.
- `prettier`: Code formatter.
- `prettier-plugin-astro`: Prettier plugin for Astro files.
- `prettier-plugin-tailwindcss`: Prettier plugin for sorting Tailwind CSS classes.
- `tailwindcss`: A utility-first CSS framework.
- `typescript`: TypeScript language support.
