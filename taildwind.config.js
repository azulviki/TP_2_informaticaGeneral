/** @type {import('tailwindcss').Config} */

    

module.exports = {
  content: ["./*.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"],


  theme: {
    extend: {
      colors: {
        primario: '#000000ff',
        secundario: '#f0f3efff',
        acento: '#474c4dff',
        borde: '#ffffffff',
        claro: '#634646ff',
      },
      
      spacing: {
        section: '6rem',
      },

      fontFamily: {
        titulo: ['"League Gothic"', 'sans-serif'],
        cuerpo: ['Montserrat', 'sans-serif'],
      },

      fontSize: {
        titulo: ['4rem', { lineHeight: '1.2' }],
        subtitulo: ['2rem', { lineHeight: '1.3' }],
        cuerpo: ['3rem', { lineHeight: '1.6' }],
      },
    },

  },

  safelist: [
    "h-[500px]",
    "hover:scale-105",
    "scale-125",
    "scale-90",
    "scale-80",
  ],
  
  plugins: [
    require('flowbite/plugin')
  ],
};
