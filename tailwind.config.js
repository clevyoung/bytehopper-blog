const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/static/images/hero-bg.png')",
      },
      colors: {
        primary: '#1758FF',
        'secondary-100': '#F1F8FF',
        'secondary-200': '#4D7EFF',
        blue: '#EAF5FF',
        red: '#FFEAE3',
        yellow: '#FFF4E3',
        black: '#191F28',
        'gray-100': '#F9FAFB',
        'gray-200': '#F0F3F6',
        'gray-300': '#D9DCDE',
        'gray-400': '#8B95A1',
        'gray-500': '#6B7684',
        'gray-600': '#425968',
        'gray-700': '#333D4F',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar-hide')],
};
export default config;
