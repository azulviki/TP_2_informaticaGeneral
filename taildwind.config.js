/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"], // incluye todos tus HTML
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
        section: '6rem',         // tu clase py-section
      },
      fontFamily: {
        titulo: ['"League Gothic"', 'sans-serif'],
        cuerpo: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  safelist: [
    "h-[500px]",
    "hover:scale-105",
    "scale-125",
    "scale-90",
    "scale-80",
  ],
}
