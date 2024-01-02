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
        'dmSans': ['DM Sans', 'sans-serif']
      },
      colors:{
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
        formLabel: '#032125',
        eventText: '#060809',
      },
      keyframes: {
        infiniteImageScroll: {
          '0%': { transform: `translateX(0%)`},
          '100%': { transform: 'translateX(-100%)'}
        },
        Dropdown: {
          '0%': { height: '2.6125rem' },
          '100%': { height: '10.125rem' }
        },
        GoBackUp: {
          '0%': { height: '10.125rem' },
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
      },
      animation: {
        'infiniteImageScroll': 'infiniteImageScroll 15s linear infinite',
        'dropDownAni': 'Dropdown 0.5s linear both ',
        'goBackUpAni': 'GoBackUp 0.5s linear both'
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

