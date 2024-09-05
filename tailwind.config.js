/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      colors: {
        'dark-blue': {
          900: '#171a21',
          700: '#2a475e',
        },
      },
    },
  },
  plugins: [],
}

