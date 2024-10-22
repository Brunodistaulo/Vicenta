import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        italiana: ['Italiana', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
      keyframes: {
        'move-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(10px)' }
        }
      },
      animation: {
        'move-right': 'move-right 1s infinite alternate'
      },
      colors: {
        'hero-home': '#4d5700',
        'dark-gray': '#1f1f1f',
      }
    },
  },
  plugins: [],
};
export default config;
