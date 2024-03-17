import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary_blue': {
            DEFAULT: '#1d16f5',
            100: '#040233',
            200: '#070466',
            300: '#0b0699',
            400: '#0f08cc',
            500: '#1d16f5',
            600: '#4943f7',
            700: '#7672f9',
            800: '#a4a1fb',
            900: '#d1d0fd'
        },
        'aero': {
            DEFAULT: '#63b4d1',
            100: '#0e262f',
            200: '#1c4d5e',
            300: '#2a738d',
            400: '#3899bc',
            500: '#63b4d1',
            600: '#81c2d9',
            700: '#a1d1e3',
            800: '#c0e0ec',
            900: '#e0f0f6'
        },
        'emerald': {
            DEFAULT: '#10b981',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b'
        },
        'tea_green': {
            DEFAULT: '#c3f9c3',
            100: '#085108',
            200: '#10a210',
            300: '#21e921',
            400: '#72f172',
            500: '#c3f9c3',
            600: '#cffacf',
            700: '#dbfbdb',
            800: '#e7fde7',
            900: '#f3fef3'
        },
        'white_smoke': {
            DEFAULT: '#f7f4f3',
            100: '#3b2c27',
            200: '#76584e',
            300: '#a9887d',
            400: '#d0beb8',
            500: '#f7f4f3',
            600: '#f8f6f5',
            700: '#faf8f8',
            800: '#fcfbfa',
            900: '#fdfdfd'
        }
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      // Add more breakpoints as needed
    },
  },
  plugins: [],
}

export default config
