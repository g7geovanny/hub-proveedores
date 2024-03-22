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
      fontFamily:{
        noto: ["Noto Sans Buhid"],
        mono:["Red Hat Mono"]
      },
      colors:{
        custom1: "#7ecf49",
        custom2: "#04bbf1",
        custom3: "#1d4370"
      }
    },
  },
  plugins: [],
}

