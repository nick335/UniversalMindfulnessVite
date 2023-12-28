/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors:{
        linkPrimary: '#527BBD',
        textPrimary: '#FFFFFF',
        textSecondary: '#333',
        headerPrimary: '#FC5704',
        headerSecondary: '#527BBD',
        bgPrimary: '#FC5704',
        btnPrimary: '#527BBD',
        bgSubHeader: '#F2F7FF',
        footerBg: '#152848',
        footerText: '#FC5704',
        inputBorder: 'rgba(255, 255, 255, 0.08)',
        inputBg: 'rgba(255, 255, 255, 0.05)'
      },
      keyframes: {
        infiniteImageScroll: {
          '0%': { transform: `translateX(0%)`},
          '100%': { transform: 'translateX(-100%)'}
        },
      },
      animation: {
        'infiniteImageScroll': 'infiniteImageScroll 15s linear infinite',
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
  plugins: [],
}

