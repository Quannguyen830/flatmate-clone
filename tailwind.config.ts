import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'banner-blue': '#2f3a4a',
        'overlay': 'rgba(0, 0, 0, .4)',
        'link-primary': '#005ce6',
        'text-secondary': '#828992',
        'button-primary': "#006977",
        'link-secondary': '#6d7580',
        'text-disable': '#abb0b6',
        'text-primary': '#2f3a4a'
      },
    },
    screens: {
      'md': '760px',
      'lg': '1020px'

    }
  },
  plugins: [],
} satisfies Config;
