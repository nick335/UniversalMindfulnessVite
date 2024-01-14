/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'dmSans': ['DM Sans', 'sans-serif']
      },
      colors: {
        linkPrimary: '#527BBD',
        textPrimary: '#FFFFFF',
        textSecondary: '#333',
        headerPrimary: '#FC5704',
        headerSecondary: '#527BBD',
        headerPopularBlog: '#0D60D8',
        footerText: '#FC5704',
        bgPrimary: '#FC5704',
        bgNav: '#527BBD',
        footerBg: '#152848',
        inputBg: 'rgba(255, 255, 255, 0.05)',
        bgSubHeader: '#F2F7FF',
        bgBlogBox: '#F9F9F9',
        bgDisclosure: '#F2F7FF',
        bgImageSlideControl: '#D9D9D9',
        bgActiveImageSlideControl: '#527BBD',
        btnPrimary: '#527BBD',
        inputBorder: 'rgba(255, 255, 255, 0.08)',
        formBorder: 'rgba(3, 33, 37, 0.10)',
        navLiBorder: '#527BBD',
        navSubSections: '#F2F7FF',
        formLabel: '#032125',
        eventText: '#060809',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        infiniteImageScroll: {
          '0%': { transform: `translateX(0%)`},
          '100%': { transform: 'translateX(-100%)'}
        },
        Dropdown: {
          '0%': { height: '2.6125rem' },
          '100%': { height: '14rem' }
        },
        GoBackUp: {
          '0%': { height: '14rem' },
          '100%': { height: '2.6125rem' }
        },
        menuComeOut: {
          '0%': { left: '-60%'},
          '100%': {left: '0%'}
        },
        menuGoIn: {
          '0%': { left: '0%' },
          '100%': { left: '-60%' }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        'infiniteImageScroll': 'infiniteImageScroll 15s linear infinite',
        'dropDownAni': 'Dropdown 0.5s linear both ',
        'goBackUpAni': 'GoBackUp 0.5s linear both',
        "accordion-down": "accordion-down 0.5s ease-out",
        "accordion-up": "accordion-up 0.5s ease-out",
      },
      boxShadow: {
        'service': '0px 2.63px 15.122px 0px rgba(151, 151, 151, 0.25)',
      },
      screens: {
        'xsm': '576px'
      },
      fontSize: {
        'dynamicHeroText': 'clamp(2.5rem, 150vw, 3.6rem)'
      }
    },
  },
  plugins: [
    tailwindcssAnimate,
  ],
}