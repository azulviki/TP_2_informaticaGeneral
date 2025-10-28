document.addEventListener('DOMContentLoaded', () => {
  // --- BOTÓN HAMBURGUESA (abre/cierra el menú mobile) ---
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});


// Manejo robusto del dropdown "Recursos"
document.addEventListener('DOMContentLoaded', () => {
  const recursosContainer = document.querySelector('#menu .group'); // el contenedor que envuelve botón + dropdown
  const dropdown = document.getElementById('dropdown-recursos');    // el dropdown (poné id="dropdown-recursos" en el HTML)

  if (!recursosContainer || !dropdown) {
    console.warn('Dropdown "Recursos": contenedor o dropdown no encontrado.');
    return;
  }

  // Asegurarse de que arranque oculto (display: none)
  if (!dropdown.classList.contains('hidden')) {
    dropdown.classList.add('hidden');
  }

  let hideTimeout = null;
  const HIDE_DELAY = 200; // ms — ajustá si necesitás más o menos tiempo

  const show = () => {
    clearTimeout(hideTimeout);
    if (dropdown.classList.contains('hidden')) {
      dropdown.classList.remove('hidden');
    }
  };

  const hide = () => {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      if (!dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
      }
    }, HIDE_DELAY);
  };

  // Mostrar mientras el mouse esté sobre el contenedor (botón) o sobre el propio dropdown
  recursosContainer.addEventListener('mouseenter', show);
  recursosContainer.addEventListener('mouseleave', hide);
  dropdown.addEventListener('mouseenter', show);
  dropdown.addEventListener('mouseleave', hide);

  // Cerrar si el usuario hace click fuera (útil para depurar/garantizar ocultamiento)
  document.addEventListener('click', (e) => {
    if (!recursosContainer.contains(e.target) && !dropdown.contains(e.target)) {
      // click fuera: ocultar inmediatamente
      clearTimeout(hideTimeout);
      if (!dropdown.classList.contains('hidden')) dropdown.classList.add('hidden');
    }
  });

  // También protegemos contra otros scripts: forzamos hidden al inicio después de 50ms
  setTimeout(() => {
    if (!dropdown.classList.contains('hidden')) dropdown.classList.add('hidden');
  }, 50);

  console.log('Dropdown "Recursos": controlador inicializado.');
});

// Dropdown Recursos (versión móvil)
const mobileRecursosBtn = document.getElementById('mobile-recursos-btn');
const mobileRecursosDropdown = document.getElementById('mobile-recursos-dropdown');

mobileRecursosBtn.addEventListener('click', () => {
  mobileRecursosDropdown.classList.toggle('hidden');
});

