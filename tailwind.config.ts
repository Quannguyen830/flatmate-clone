import { type Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Open Sans"', 'sans-serif']
  		},
  		colors: {
  			'banner-blue': '#2f3a4a',
  			overlay: 'rgba(0, 0, 0, .4)',
  			'link-primary': '#005ce6',
  			'text-secondary': '#828992',
  			'button-primary': '#006977',
  			'link-secondary': '#6d7580',
  			'text-disable': '#abb0b6',
  			'text-primary': '#2f3a4a',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	screens: {
  		md: '760px',
  		lg: '1020px'
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
