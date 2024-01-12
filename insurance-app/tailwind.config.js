/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      mono: "'Fira Code', monospace;",
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: '#1CD97E',
        // DEFAULT: '#64EBA9',
        50: '#B7F6D7',
        100: '#4AE89C',
        200: '#1CD97E',
        300: '#15A25E',
      },
      secondary: {
        DEFAULT: '#0f172a',
        50: '#767683',
        100: '#474758',
        200: '#42526E',
        300: '#1e293b',
      },
      danger: {
        DEFAULT: '#dc2626',
        50: '#fee2e2',
        100: '#fecaca',
        200: '#fca5a5',
        300: '#b91c1c',
      },
      warning: {
        DEFAULT: '#FF801C',
        50: '#FFEED6',
        100: '#FFD599',
        200: '#FFC370',
        300: '#f97316',
      },
      success: {
        DEFAULT: '#71CC98',
        50: '#E4F2E7',
        100: '#A5D7B7',
        200: '#91CFAA',
        300: '#84CBA2',
      },
      info: {
        DEFAULT: '#33A1FD',
        50: '#D7EDFF',
        100: '#B1DCFB',
        200: '#9AD1FE',
        300: '#0ea5e9',
      },
      tertiary: {
        DEFAULT: '#F4F7FA',
        50: '#DFE1E7',
        100: '#B3BAC5',
        200: '#9ca3af',
        300: '#6b7280',
      },
      blue: {
        dark: '#1e293b',
        darker: '#0f172a',
        light: '#19BFD3',
      },
      gray: {
        50: '#F4F7FA',
        100: '#DFE1E7',
        200: '#B3BAC5',
        300: '#42526E',
        400: '#091E42',
        background: '#D9D9D933',
        light: '#85858580',
        dark: '#333333',
        label: '#858585',
      },
    },
    extend: {
      theme: {
        extend: {
          screens: {
            '3xl': '1900px',
          },
        },
      },
    },
  },
};
