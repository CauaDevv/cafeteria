import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: 'var(--cream)',
        paper: 'var(--paper)',
        espresso: 'var(--espresso)',
        roast: 'var(--roast)',
        caramel: 'var(--caramel)',
        accent: 'var(--accent)',
        foam: 'var(--foam)',
        'ink-soft': 'var(--ink-soft)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
