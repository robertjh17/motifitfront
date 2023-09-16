/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
      extend: {
          colors: {
              'motigreen': {
                  50: '#f0fff4',
                  100: '#dcfce7',
                  200: '#bbf7d0',
                  300: '#86efac',
                  400: '#4fdf78',
                  500: '#0ba08b', 
                  600: '#0a877a',
                  700: '#056c58',
                  800: '#03543f',
                  900: '#014737',
              }
              
          },
      },
  },
  plugins: [],
}

