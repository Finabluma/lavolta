module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ],
  },
  purgeCSS: {
    whitelist: ['dark']
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    darkSelector: '.dark',
    extend: {
      screens: {
        'landscape': { 'raw': '(orientation: landscape) and (max-width:768px)' },
        'xs': '375px',
        '2xl': '1366px',
        '3xl': '1440px',
      },
      zIndex: {
        '70': '70'
      },
      colors: {
        'constlines': '#9cf',
        'orbit': '#bdccd4',
        'cardinales':'#fb5a6e',
        'slate800':'#1e293b',
        'slate600':'#475569',
        'slate400':'#94a3b8',
        'slate300':'#cbd5e1',
        'slate100':'#f1f5f9'
      },
      inset: {
        '-1/20': '-5%',
        '-1/10': '-10%',
        '1/6': '16.666667%'
      },
      fontFamily: {
        'rooney':['rooney-sans'],
        'ibm': ['ibm-plex-mono'],
        'dejanire': ['dejanire-headline'],
        'hero': ['hero-new']
      },
      fontSize: {
        h1: "clamp(2.6rem, 5vw, 7.5rem)",
        heading: "clamp(1.5rem, 7vw, 3.5rem)",
        restaurante: "clamp(1.5rem, 5vw, 2.5rem)",
        teasers: "clamp(1.75rem, 2vw, 2.5rem)",
        altheader: "clamp(1.8rem, 5vw, 3rem)",
        paragraph: "clamp(1.1rem, 3.25vw, 0.6rem)"
      },
      backgroundImage: () => ({
        'gradient-to-b': ' linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'azulejos': "url('~/assets/images/azulejos.svg')",
        'people': "url('~/assets/images/volta-contacta-1.png')",
      }),
      backgroundSize: {
        '100%': '100%',
        '75%': '75%',
        '60%': '60%'
      },
      boxShadow:{
        'slate300':'0 1px 2px 0 #cbd5e1',
        'slate400':'0 1px 2px 0 #94a3b8'
      },
      fill: theme => ({
        'white': theme('colors.white'),
        'black': theme('colors.black'),
        'slate800':theme('colors.slate800'),
        'gray-300': theme('colors.gray.300'),
        'gray-600': theme('colors.gray.600'),
        'constlines': theme('colors.constlines'),
        'orbit': theme('colors.orbit'),
        'cardinales':theme('colors.cardinales')
      }),
      stroke: theme => ({
        'white': theme('colors.white'),
        'black': theme('colors.black'),
        'slate800':theme('colors.slate800'),
        'gray-300': theme('colors.gray.300'),
        'gray-700': theme('colors.gray.700'),
        'cardinales': theme('colors.cardinales'),
        'constlines': theme('colors.constlines'),
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('tailwindcss-pseudo-elements')(),
  ],
}
