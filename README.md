# Personal Website

Welcome to my [personal website](https://cargill.dev)!

## 🚀 Features

- Built with modern Typescript, using tools and frameworks like [next](https://github.com/vercel/next.js) and [tailwind](https://github.com/tailwindlabs/tailwindcss/).
- Animations via [framer-motion](https://www.npmjs.com/package/framer-motion).
- A great developer experience with [biome](https://github.com/biomejs/biome)

## 🔧 Dependencies

Ensure you have [node](https://nodejs.org/) >= v22. I like to use pnpm to manage dependencies, but npm, bun or yarn will work as well.

## 🚀 Setup and Running

1. Clone the repository:

   ```bash
   git clone git@github.com:dcrgll/2025.git
   ```

2. (Optional) Ensure you're on Node v22 or higher:

   ```bash
   node --version
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Setup environment variables:

   Rename the `.env.example` file to `.env.local` and fill in the necessary values.

   ```bash
   NEXT_PUBLIC_COUNTER_URL=
   NEXT_PUBLIC_DISCORD_USER_ID=
   ```

   - [How to find your discord id.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID#h_01HRSTXPS5H5D7JBY2QKKPVKNA)

   - [Create your own counter](https://jasoncameron.dev/abacus/)

5. Start the application:

   ```bash
   pnpm dev
   ```

By default, the application should be available at [http://localhost:3000/](http://localhost:3000/).
