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
    async enviarFormulario() {
      if (this.nombre && this.email && this.mensaje) {
      try {
        const response = await fetch("https://formspree.io/f/xkgpyogo", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre: this.nombre,
          email: this.email,
          mensaje: this.mensaje
        })
      });


          if (response.ok) {
            this.exito = true;
            this.nombre = '';
            this.email = '';
            this.mensaje = '';
            setTimeout(() => this.exito = false, 3000);
          } else {
            alert("Hubo un problema al enviar el mensaje : (");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Hubo un problema al enviar el mensaje : (");
        }
      }
    }
  }
}).mount('#contacto');

