import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['class'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Pretendard': ['Pretendard']
      },
      colors: {
        transparent: 'transparent',
        primary: '#519cff',
        dark: {
          blue50: '#203b65',
          blue100: '#cce1ff',
          blue200: '#99c3ff',
          blue300: '#66a5ff',
          blue400: '#519cff',
          blue500: '#3084f2',
          blue600: '#2c72db',
          blue700: '#215bb8',
          blue800: '#214a8d',
          blue900: '#214a8d',
          gray50: '#31373d',
          gray100: '#212529',
          gray200: '#343a40',
          gray300: '#495057',
          gray400: '#656d75',
          gray500: '#747b81',
          gray600: '#bcc4cc',
          gray700: '#dee2e6',
          gray800: '#e9ecef',
          gray900: '#f1f3f5',
          danger: '#f66f65',
          warning: '#ffc56c',
          green: '#30c391',
          background: '#31373d'
        },
        light: {
          blue50: '#ebf3ff',
          blue100: '#cce1ff',
          blue200: '#99c3ff',
          blue300: '#66a5ff',
          blue400: '#519cff',
          blue500: '#3084f2',
          blue600: '#2c72db',
          blue700: '#215bb8',
          blue800: '#214a8d',
          blue900: '#203b65',
          gray50: '#f8fafb',
          gray100: '#f1f3f5',
          gray200: '#e9ecef',
          gray300: '#dee2e6',
          gray400: '#bcc4cc',
          gray500: '#868e96',
          gray600: '#656d75',
          gray700: '#495057',
          gray800: '#343a40',
          gray900: '#212529',
          danger: '#f55f54',
          warning: '#ffbe5b',
          green: '#19bc85',
          background: '#f8fafb'
        }
      },
      gridTemplateColumns: {
        '1fr-auto': '1fr auto'
      },
      spacing: {
        toc: 'calc((100vw - 768px) / 2 - 180px)'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
