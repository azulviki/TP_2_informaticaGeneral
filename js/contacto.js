const { createApp } = Vue;

createApp({
  data() {
    return {
      nombre: '',
      email: '',
      mensaje: '',
      exito: false
    };
  },
  methods: {
    enviarFormulario() {
      if (this.nombre && this.email && this.mensaje) {
        this.exito = true;
        // limpiamos el formulario
        this.nombre = '';
        this.email = '';
        this.mensaje = '';
        // ocultar mensaje luego de unos segundos
        setTimeout(() => this.exito = false, 3000);
      }
    }
  }
}).mount('#contacto');

