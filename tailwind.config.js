const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
      },
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
        gray: colors.neutral,
        'gray-100': '#F9FAFB',
        'gray-200': '#F0F3F6',
        'gray-300': '#D9DCDE',
        'gray-400': '#8B95A1',
        'gray-500': '#6B7684',
        'gray-600': '#425968',
        'gray-700': '#333D4F',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600'),
            a: {
              color: theme('colors.primary.500'),
              wordBreak: 'break-all',
              '&:hover': {
                color: `${theme('colors.primary.700')} !important`,
              },
              code: {
                color: theme('colors.primary.400'),
              },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              marginTop: '2.5rem',
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              marginTop: '2rem',
              color: theme('colors.gray.900'),
            },
            pre: {
              backgroundColor: '#282A36',
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
              wordBreak: 'break-all',
              fontFamily: 'Consolas',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            li: {
              wordBreak: 'break-all',
            },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600'), fontWeight: '700' },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
              fontStyle: 'normal',
            },
            'blockquote > p::before': {
              content: 'none',
            },
            'blockquote > p::after': {
              content: 'none',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: `${theme('colors.primary.300')} !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            pre: {
              backgroundColor: '#282A36',
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
              fontStyle: 'normal',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar-hide')],
};
