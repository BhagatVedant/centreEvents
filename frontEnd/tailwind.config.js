/** @type {import('tailwindcss').Config} */
export default {
  // Specify all files where Tailwind classes might be used
  content: [
    "./index.html", // Include the root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: '#eec643',
          100: '#382c05',
          200: '#70580a',
          300: '#a88410',
          400: '#e0b115',
          500: '#eec643',
          600: '#f1d26a',
          700: '#f5dd8f',
          800: '#f8e8b4',
          900: '#fcf4da',
        },
        night: {
          DEFAULT: '#141414',
          100: '#040404',
          200: '#080808',
          300: '#0c0c0c',
          400: '#101010',
          500: '#141414',
          600: '#434343',
          700: '#727272',
          800: '#a1a1a1',
          900: '#d0d0d0',
        },
        'anti-flash_white': {
          DEFAULT: '#eef0f2',
          100: '#2a3036',
          200: '#53606c',
          300: '#81909e',
          400: '#b8c0c8',
          500: '#eef0f2',
          600: '#f1f3f4',
          700: '#f5f6f7',
          800: '#f8f9fa',
          900: '#fcfcfc',
        },
        zaffre: {
          DEFAULT: '#0d21a1',
          100: '#030720',
          200: '#050d40',
          300: '#081460',
          400: '#0a1a80',
          500: '#0d21a1',
          600: '#122ddf',
          700: '#445bf0',
          800: '#8292f5',
          900: '#c1c8fa',
        },
        'oxford_blue': {
          DEFAULT: '#011638',
          100: '#00040b',
          200: '#000916',
          300: '#010d21',
          400: '#01112c',
          500: '#011638',
          600: '#033990',
          700: '#055ce9',
          800: '#4d90fb',
          900: '#a6c7fd',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Adds better styling for forms
    require('@tailwindcss/typography'), // Adds typography utilities
    require('@tailwindcss/aspect-ratio'), // Adds aspect-ratio utilities
  ],
};