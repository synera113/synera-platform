import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0E3010',
        charcoal: '#333333',
        gold: '#A4873E',
        ivory: '#F5F3ED'
      },
      boxShadow: {
        soft: '0 10px 40px rgba(14, 48, 16, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
