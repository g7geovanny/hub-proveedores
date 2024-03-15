/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.jsx"],
  theme: {
    extend: {
      scrollSnapAlign: {
        start: 'scroll-snap-align: start;',
      },
      scrollSnapType: {
        proximity: 'scroll-snap-type: proximity;',
      },
    },
  },
  plugins: [],
}

