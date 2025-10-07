export default {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 400: '#fbbf24', 500: '#d97706' }
      },
      boxShadow: { glass: '0 10px 24px rgba(0,0,0,.18)' },
      fontFamily: { sans: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Helvetica Neue','Arial'] }
    }
  },
  plugins: []
}