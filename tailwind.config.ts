import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'deep-blue': '#1A3B5D',
        'navy-blue': '#1F2937',
        'slate-blue': '#1a3b5d',
        'warm-gold': '#D4AF37',
        'dark-gold': '#DAA520',
        'darker-gold': '#B8860B',
        'soft-ivory': '#F5F2E7',
        'rich-burgundy': '#7B2A3B',
        'vibrant-green': '#3A8456',
        'muted-grey': '#767676',
        'bermuda': '#78dcca',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
