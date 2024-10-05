import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      xl: '1280px',
    },
    extend: {
      colors: {
        title: '#2A3A42',
        text_hover: '#3B8000',
        accent: '#71DB41',
        hover: '#49A620',
      },
      fontFamily: {
        inter: 'var(--font-inter), sans-serif',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          xl: '40px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
