/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue':' hsl(206, 94%, 87%)',
        'strawberry-red': 'hsl(354, 84%, 57%)',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

