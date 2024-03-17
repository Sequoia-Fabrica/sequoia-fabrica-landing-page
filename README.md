# Sequoia Fabrica Landing Page

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is the source code for the Sequoia Fabrica Landing page, hosted at [sequoiafabrica.org](sequoiafabrica.org)

## Getting Started

Before getting started, make sure you are running Node version 20.11.1. It may work on other versions, it also may not.

```bash
node --version
```

If it's not on the right version, you can use nvm:

```bash
nvm install 20.11.1
```

First, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## UI Component Development

This application is configured for testing with [storybook](). To run the storybook server:

```bash
npm run storybook
```

Each component in the `/components` directory should be placed in its own subdirectory with a component `.tsx` file and (optionally) a `.stories.tsx` file.

## Cleaning the project

```bash
npm run clean
```

# Project Structure
All project resources are located in the `public` directory. All source code is in the `src` directory.

- preference goes to formatting with tailwindcss whenever possible. Avoid adding custom css for every component you add.

# Contributing
Please file any bugs here or report them via email sequoiafabrica@gmail.com
