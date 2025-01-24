import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter-sans)'],
        serif: ['var(--font-sf-rounded)']
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        primary: 'rgb(var(--primary))'
      }
    }
  },
  plugins: []
} satisfies Config
