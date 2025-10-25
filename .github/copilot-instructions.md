# AI Coding Agent Instructions for `restaurant-app`

Welcome to the `restaurant-app` codebase! This document provides essential guidelines for AI coding agents to be productive and aligned with the project's architecture and conventions.

## Project Overview

This is a Next.js application bootstrapped with `create-next-app`. It uses the App Router (`src/app`) for routing and Tailwind CSS for styling. The project is designed to be deployed on Vercel and follows modern web development practices.

### Key Directories and Files

- **`src/app/`**: Contains the main application logic, including pages (`page.tsx`), layout (`layout.tsx`), and global styles (`globals.css`).
- **`prisma/schema.prisma`**: Defines the database schema using Prisma ORM.
- **`tailwind.config.ts`**: Configuration for Tailwind CSS.
- **`public/`**: Static assets like SVGs.

## Developer Workflows

### Running the Development Server

Use one of the following commands to start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Access the app at [http://localhost:3000](http://localhost:3000).

### Database Migrations

Prisma is used for database management. To apply migrations, use:

```bash
npx prisma migrate dev
```

### Styling

Tailwind CSS is used for styling. Modify `tailwind.config.ts` for customizations.

## Project-Specific Conventions

- **Routing**: Pages are defined in the `src/app` directory. Use `layout.tsx` for shared layouts.
- **Styling**: Use Tailwind CSS utility classes. Avoid inline styles unless necessary.
- **Database**: Define models in `prisma/schema.prisma`. Run migrations after schema changes.

## External Dependencies

- **Next.js**: Framework for building the app.
- **Prisma**: ORM for database interactions.
- **Tailwind CSS**: Utility-first CSS framework.

## Examples

### Adding a New Page

1. Create a new folder under `src/app` (e.g., `src/app/about`).
2. Add a `page.tsx` file for the page content.
3. Optionally, add a `layout.tsx` file for a page-specific layout.

### Modifying the Database Schema

1. Edit `prisma/schema.prisma` to define new models or fields.
2. Run `npx prisma migrate dev` to apply the changes.

---

Feel free to update this document as the project evolves!
