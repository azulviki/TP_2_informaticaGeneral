const { createApp } = Vue;

createApp({
  data() {
    return {
      fotos: [
        'img/cp1.JPG',
        'img/cp2.JPG',
        'img/cp3.JPG',
        'img/cp4.JPG',
        'img/cp5.JPG',
        'img/cp6.JPG',
      ],
      indice: 0,
      interval: null,
      hover: false,
    };
  },
  methods: {
    siguiente() { this.indice = (this.indice + 1) % this.fotos.length },
    anterior() { this.indice = (this.indice - 1 + this.fotos.length) % this.fotos.length },
    pausar() { clearInterval(this.interval) },
    reanudar() { this.interval = setInterval(this.siguiente, 3000) },
    irA(i) { this.indice = i },
    getTransform(i) {
      const n = this.fotos.length;
      let diff = (i - this.indice + n) % n;
      if (diff > n/2) diff -= n;
      if (diff < -n/2) diff += n;

      // Escala más grande si está en el centro y el mouse encima
      if (diff === 0) return this.hover
        ? 'translateX(0) scale(1.1)'
        : 'translateX(0) scale(1)';

      if (diff === 0) return 'translateX(0) scale(0.9)';
      if (diff === 1) return 'translateX(160px) scale(0.9)';
      if (diff === -1) return 'translateX(-160px) scale(0.9)';
      if (diff === 2) return 'translateX(120px) scale(0.9)';
      if (diff === -2) return 'translateX(-120px) scale(0.9)';
      return 'translateX(0) scale(0)';
    },
    getZIndex(i) { return 10 - Math.abs(i - this.indice) }
  },
  mounted() 
  
  { console.log(this.fotos);
    
    this.reanudar() },


  template: `
    <div class="relative w-full h-[500px] flex justify-center items-center overflow-visible"
         @mouseenter="pausar" @mouseleave="reanudar">

      <!-- Slides -->
      <div v-for="(f, i) in fotos" :key="i"
           class="absolute top-1/2 w-128 h-96 rounded-xl shadow-2xl transition-all duration- hover:scale-105"
           :style="{
             transform: getTransform(i) + ' translateY(-50%)',
             zIndex: getZIndex(i),
             opacity: getZIndex(i) > 0 ? 1 : 0.6
           }">
        <img :src="f" class="w-full h-full object-cover rounded-xl"/>
      </div>

      <!-- Flechas -->
      <button @click="anterior"
              class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-5 py-3 rounded-r-lg text-3xl z-20">‹</button>
      <button @click="siguiente"
              class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-5 py-3 rounded-l-lg text-3xl z-20">›</button>

      <!-- Indicadores -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <span v-for="(f, i) in fotos" :key="i" @click="irA(i)"
              class="w-2 h-2 rounded-full cursor-pointer transition-all duration-300"
              :class="i === indice ? 'bg-white scale-125' : 'bg-gray-400'"></span>
      </div>
    </div>
  `
}).mount('#carousel');


