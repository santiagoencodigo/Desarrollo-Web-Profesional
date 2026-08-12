/* =====================================================
   OKINI — script.js
   Lógica de negocio: reservas, cata semanal y domicilios.
   Reglas duras (no modificar):
   - 1 USD = $3.125,47 COP (agosto 2026)
   - Capacidad máxima: 50 tazas/día entre V60, Kyoto Drip y Sifón
   - Máximo 2 tazas por persona por reserva
   - Cata semanal: cupo de 8 personas
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Estado del negocio ---------- */
  const state = {
    cupsAvailable: 50,   // tazas disponibles hoy (V60 + Kyoto Drip + Sifón)
    cataSpots: 8         // cupos disponibles en la cata semanal
  };

  /* ---------- Referencias a elementos ---------- */
  const cupsAvailableLabel = document.getElementById('cupsAvailableLabel');
  const cataSpotsLabel = document.getElementById('cataSpotsLabel');

  const reservaModalEl = document.getElementById('reservaModal');
  const reservaModal = new bootstrap.Modal(reservaModalEl);
  const reservaMetodoNombre = document.getElementById('reservaMetodoNombre');
  const reservaPrecioCop = document.getElementById('reservaPrecioCop');
  const reservaPrecioUsd = document.getElementById('reservaPrecioUsd');
  const reservaCantidad = document.getElementById('reservaCantidad');
  const reservaError = document.getElementById('reservaError');
  const confirmarReservaBtn = document.getElementById('confirmarReservaBtn');

  const confirmacionModal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
  const confirmacionTexto = document.getElementById('confirmacionTexto');

  const aforoModal = new bootstrap.Modal(document.getElementById('aforoModal'));
  const aforoTitulo = document.getElementById('aforoTitulo');
  const aforoTexto = document.getElementById('aforoTexto');

  const cataModal = new bootstrap.Modal(document.getElementById('cataModal'));
  const cataNombre = document.getElementById('cataNombre');
  const cataCorreo = document.getElementById('cataCorreo');
  const cataTelefono = document.getElementById('cataTelefono');
  const cataError = document.getElementById('cataError');
  const confirmarCataBtn = document.getElementById('confirmarCataBtn');
  const cataExitoModal = new bootstrap.Modal(document.getElementById('cataExitoModal'));
  const btnInscribirse = document.getElementById('btnInscribirse');

  const carritoModal = new bootstrap.Modal(document.getElementById('carritoModal'));
  const carritoTexto = document.getElementById('carritoTexto');
  const graciasCompraModal = new bootstrap.Modal(document.getElementById('graciasCompraModal'));
  const finalizarCompraBtn = document.getElementById('finalizarCompraBtn');

  let metodoActivo = null; // { nombre, precioUsd, precioCop, boton }

  /* ---------- Utilidades ---------- */
  function formatCOP(n) {
    return n.toLocaleString('es-CO');
  }

  function showFieldError(el, msg) {
    el.textContent = msg;
    el.classList.remove('d-none');
  }
  function hideFieldError(el) {
    el.classList.add('d-none');
    el.textContent = '';
  }

  function actualizarContadorTazas() {
    cupsAvailableLabel.textContent = state.cupsAvailable;
    if (state.cupsAvailable <= 0) {
      document.querySelectorAll('.btn-reservar').forEach(btn => {
        btn.disabled = true;
        btn.textContent = 'Aforo completo';
      });
    }
  }

  function actualizarContadorCata() {
    if (cataSpotsLabel) cataSpotsLabel.textContent = state.cataSpots;
    if (state.cataSpots <= 0 && btnInscribirse) {
      btnInscribirse.disabled = true;
      btnInscribirse.textContent = 'Cupo agotado';
    }
  }

  /* ---------- Reservas de métodos lentos (V60 / Kyoto Drip / Sifón) ---------- */
  document.querySelectorAll('.btn-reservar').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (state.cupsAvailable <= 0) {
        aforoTitulo.textContent = 'Aforo completo';
        aforoTexto.textContent = 'Hemos alcanzado el límite de 50 tazas para hoy. ¡Te esperamos mañana desde las 8:00 a.m.!';
        aforoModal.show();
        return;
      }

      metodoActivo = {
        nombre: btn.dataset.metodo,
        precioUsd: parseFloat(btn.dataset.precioUsd),
        precioCop: parseFloat(btn.dataset.precioCop),
        boton: btn
      };

      reservaMetodoNombre.textContent = metodoActivo.nombre;
      reservaPrecioCop.textContent = formatCOP(metodoActivo.precioCop);
      reservaPrecioUsd.textContent = metodoActivo.precioUsd;
      reservaCantidad.value = 1;
      hideFieldError(reservaError);
      reservaModal.show();
    });
  });

  confirmarReservaBtn.addEventListener('click', function () {
    hideFieldError(reservaError);

    const rawValue = reservaCantidad.value.trim();

    // Validación: no vacío, numérico, no cero
    if (rawValue === '' || isNaN(rawValue)) {
      showFieldError(reservaError, 'Ingresa una cantidad válida.');
      return;
    }

    const cantidad = parseInt(rawValue, 10);

    if (cantidad === 0) {
      showFieldError(reservaError, 'La cantidad no puede ser cero.');
      return;
    }
    if (cantidad < 1 || cantidad > 2) {
      showFieldError(reservaError, 'Máximo 2 tazas por persona.');
      return;
    }
    if (cantidad > state.cupsAvailable) {
      showFieldError(reservaError, 'No hay suficientes tazas disponibles hoy.');
      return;
    }

    // Todo válido: procesar reserva
    state.cupsAvailable -= cantidad;
    actualizarContadorTazas();

    const totalCop = metodoActivo.precioCop * cantidad;
    const totalUsd = metodoActivo.precioUsd * cantidad;

    confirmacionTexto.innerHTML =
      `${cantidad} taza(s) de <strong>${metodoActivo.nombre}</strong><br>` +
      `Total: $${formatCOP(totalCop)} COP | $${totalUsd} USD`;

    reservaModal.hide();
    confirmacionModal.show();

    if (state.cupsAvailable <= 0) {
      // Pequeño retraso para no encimar modales
      setTimeout(function () {
        aforoTitulo.textContent = 'Aforo completo';
        aforoTexto.textContent = 'Acabamos de alcanzar el límite de 50 tazas para hoy. ¡Gracias por tu paciencia, te esperamos mañana!';
        aforoModal.show();
      }, 600);
    }
  });

  actualizarContadorTazas();

  /* ---------- Cata semanal ---------- */
  btnInscribirse.addEventListener('click', function () {
    if (state.cataSpots <= 0) {
      aforoTitulo.textContent = 'Cupo agotado';
      aforoTexto.textContent = 'La cata de este sábado ya está llena. ¡Vuelve pronto para la próxima semana!';
      aforoModal.show();
      return;
    }
    cataNombre.value = '';
    cataCorreo.value = '';
    cataTelefono.value = '';
    hideFieldError(cataError);
    cataModal.show();
  });

  confirmarCataBtn.addEventListener('click', function () {
    hideFieldError(cataError);

    const nombre = cataNombre.value.trim();
    const correo = cataCorreo.value.trim();
    const telefono = cataTelefono.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === '' || correo === '' || telefono === '') {
      showFieldError(cataError, 'Por favor completa todos los campos.');
      return;
    }
    if (!emailRegex.test(correo)) {
      showFieldError(cataError, 'Ingresa un correo electrónico válido.');
      return;
    }
    if (state.cataSpots <= 0) {
      cataModal.hide();
      aforoTitulo.textContent = 'Cupo agotado';
      aforoTexto.textContent = 'La cata de este sábado ya está llena. ¡Vuelve pronto para la próxima semana!';
      aforoModal.show();
      return;
    }

    state.cataSpots -= 1;
    actualizarContadorCata();

    cataModal.hide();
    cataExitoModal.show();
  });

  actualizarContadorCata();

  /* ---------- Domicilios ---------- */
  let productoSeleccionado = null;

  document.querySelectorAll('.btn-agregar').forEach(function (btn) {
    btn.addEventListener('click', function () {
      productoSeleccionado = {
        nombre: btn.dataset.producto,
        precio: btn.dataset.precio
      };
      carritoTexto.innerHTML = `<strong>${productoSeleccionado.nombre}</strong> — ${productoSeleccionado.precio}`;
      carritoModal.show();
    });
  });

  finalizarCompraBtn.addEventListener('click', function () {
    setTimeout(function () {
      graciasCompraModal.show();
    }, 400);
  });

  /* ---------- AOS ---------- */
  AOS.init({
    duration: 800,
    once: true,
    offset: 80
  });

  /* ---------- particles.js ---------- */
  const particlesBase = {
    particles: {
      number: { value: 45, density: { enable: true, value_area: 900 } },
      color: { value: ['#FFF6F6', '#8CC7C4'] },
      shape: { type: 'circle' },
      opacity: { value: 0.35, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 0.6,
        direction: 'top',
        random: true,
        straight: false,
        out_mode: 'out'
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: false },
        onclick: { enable: false },
        resize: true
      }
    },
    retina_detect: true
  };

  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-hero', particlesBase);
    particlesJS('particles-cata', particlesBase);
    particlesJS('particles-footer', particlesBase);
  }

  /* ---------- Navbar shadow on scroll ---------- */
  const mainNav = document.getElementById('mainNav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      mainNav.style.boxShadow = '0 6px 20px rgba(44,104,123,.12)';
    } else {
      mainNav.style.boxShadow = 'none';
    }
  });

});