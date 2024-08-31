/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors:{
        "bright-red":"hsl(12,88%,59%)",
        "bright-red-light":"hsl(12,88%,69%)",
        "bright-red-sup-light":"hsl(12,88%,95%)",
        "dark-blue":"hsl(228,39%,23%)",
        "dark-grayish-blue":"hsl(227,12%,61%)",
        "very-dark-blue":"hsl(223,12%,13%)",
        "very-pale-red":"hsl(13,100%,96%)",
        "very-light-gray":"hsl(0,0%,98%)",
      },
    },
    fontFamily:{
      Poppins:['Poppins','sans-serif']
    },
  },
  plugins: [],
}

