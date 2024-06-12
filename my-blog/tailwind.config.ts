import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        questrial: ['Questrial', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        lightGray: '#F5F5F5',
        mediumGray: '#E0E0E0',
        darkGray: '#BDBDBD',
        darkerGray: '#757575',
        softBlack: '#424242',
        customRed: {
          500: '#EF4444', // Define your custom red color here
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
