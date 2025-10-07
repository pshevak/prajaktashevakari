import type { Config } from 'tailwindcss';
export default {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7e6',
          100: '#ffefcc',
          200: '#ffdf99',
          300: '#ffcf66',
          400: '#fbbf24', /* amber */
          500: '#d97706'
        },
        ink: '#0b1220',
        paper: '#ffffff'
      },
      fontFamily: {
        sans: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Helvetica Neue','Arial']
      },
      boxShadow: {
        glass: '0 10px 24px rgba(0,0,0,.18)'
      },
      borderRadius: {
        xl2: '1rem'
      }
    }
  },
  plugins: []
} satisfies Config;
