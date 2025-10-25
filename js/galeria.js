const { createApp } = Vue;

createApp({
  data() {
    return {
      imagenes: [
        { src: 'img/cp1.JPG', titulo: 'Proyección 1', desc: 'Primera edición del ciclo' },
        { src: 'img/cp2.JPG', titulo: 'Proyección 2', desc: 'Edición verano' },
        { src: 'img/cp3.JPG', titulo: 'Proyección 3', desc: 'Edición otoño' },
        { src: 'img/cp4.JPG', titulo: 'Proyección 3', desc: 'Edición otoño' },
        { src: 'img/cp3.JPG', titulo: 'Proyección 3', desc: 'Edición otoño' },
        { src: 'img/cp3.JPG', titulo: 'Proyección 3', desc: 'Edición otoño' },
      ],
      imagenActiva: null
    };
  },
  methods: {
    abrirImagen(img) {
      this.imagenActiva = img;
    },
    cerrarImagen() {
      this.imagenActiva = null;
    }
  }
}).mount('#galeria');
