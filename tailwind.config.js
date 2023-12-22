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
        btnPrimary: '#527BBD'
      }
    },
  },
  plugins: [],
}

