## PROMPT PARA LANDING PAGE DE OKINI

### 1. CONTEXTO DEL PROYECTO

Vas a crear una **landing page para "Okini"**, un café de especialidad ficticio ubicado en Bogotá. El nombre "Okini" significa **"gracias" en la región de Kansai, Japón**.

#### Opciones de eslogan (elige una o combínalas):

- *"Un viaje a Kioto en Bogotá"*
- *"El alma de Kioto, el ritmo de Bogotá"*
- *"Donde Bogotá encuentra a Kioto"*
- *"Café de especialidad con alma japonesa"*
- *"De Kioto a Bogotá, taza a taza"*

El objetivo de la página es **presentar el negocio, mostrar los métodos de preparación, la cata semanal, la sección de domicilios y generar reservas simuladas**, todo con una estética minimalista y japonesa que refleje la esencia de la marca.

---

### 2. REGLAS DE NEGOCIO (DATOS DUROS QUE NO SE INVENTAN)

Estas son las reglas que debe cumplir la lógica de JavaScript. **No las modifiques ni inventes otras**.

#### Tipo de cambio (agosto 2026):
- **1 USD = $3.125,47 COP**

#### Métodos de preparación (solo con reserva, máximo 2 tazas por persona):

| Método | Precio (USD) | Precio (COP) |
|--------|--------------|--------------|
| **V60** | $5 USD | $15.627 COP |
| **Kyoto Drip** | $7 USD | $21.878 COP |
| **Sifón** | $8 USD | $25.004 COP |

- **Prensa Francesa**: $3 USD ($9.376 COP) — walk-in, sin reserva, hasta el cierre.
- **Cata semanal**: Cupo para **8 personas**, a $25 USD ($78.137 COP) por persona.
- **Capacidad máxima diaria**: **50 tazas al día** entre todos los métodos lentos (V60, Kyoto Drip, Sifón).
- **Horario**: 8:00 a.m. a 8:00 p.m., todos los días.

---

### 3. IDENTIDAD VISUAL Y ESTILO (EL "VESTIDO")

- **Estilo general**: **Minimalista y Japonés (Wabi-sabi)**. Mucho espacio en blanco, tipografías finas, sensación de calma y sofisticación.
- **Paleta de colores (estricta)**:
    - `#DB1A1A` (Rojo Okini - para acentos, botones y detalles)
    - `#FFF6F6` (Blanco roto - para fondos y espacios)
    - `#8CC7C4` (Verde menta suave - para detalles secundarios y hover)
    - `#2C687B` (Azul profundo - para textos y contrastes)
- **Tipografía**:
    - Usa la fuente **`Rouge Script`** de Google Fonts para títulos principales y frases cortas.
    - Para el resto del texto (párrafos, descripciones, precios), usa una **sans-serif limpia** (como `Inter`, `Roboto` o la propia `system-ui` de Bootstrap).
- **Imágenes**: Utiliza **fotos realistas** de alta calidad de bancos de imágenes gratuitos (Unsplash, Pexels, Pixabay) relacionadas con:
    - Café de especialidad.
    - Interior de cafeterías con diseño minimalista/japonés.
    - Granos de café, tazas, métodos de preparación (V60, Sifón, etc.).
    - Barra de café, extracción, latte art.
- **Iconos**: **No uses emojis**. Utiliza exclusivamente **Bootstrap Icons** (`<i class="bi bi-..."></i>`).
- **Fondos animados con partículas**: En **diferentes secciones** (al menos Hero y Footer), implementa fondos con partículas animadas utilizando **particles.js** o **tsParticles**. Las partículas deben ser sutiles, con colores acordes a la paleta (blanco, verde menta suave o azul profundo), y no deben dificultar la lectura del contenido.

---

### 4. ESTRUCTURA DE LA PÁGINA (EL "ESQUELETO") — DETALLADA

La página debe tener las siguientes secciones, en **este orden y con esta disposición**:

#### 4.1. Hero (Portada) — Ocupa el 100% del viewport
- **Fondo**: Imagen de impacto (café, granos o interior de cafetería) con **overlay semi-transparente** (color `#2C687B` con opacidad baja) para que el texto sea legible.
- **Fondo de partículas**: Capa de partículas sutiles (particles.js) sobre el overlay.
- **Contenido centrado** vertical y horizontalmente:
    - Nombre **"Okini"** con fuente *Rouge Script*, tamaño grande, color `#FFF6F6`.
    - Eslogan elegido (ej. *"Un viaje a Kioto en Bogotá"*), fuente sans-serif, color `#FFF6F6`.
    - Botón CTA: **"Reservar una taza"** o **"Explorar menú"**, con estilo `btn-primary` personalizado (fondo `#DB1A1A`, borde redondeado, hover con `#8CC7C4`).
- **Barra de navegación**: Fija (sticky) en la parte superior, con fondo blanco semi-transparente (efecto glassmorphism) y enlaces a todas las secciones: *Inicio · Nosotros · Métodos · Cata · Domicilios · Testimonios · Contacto*.

#### 4.2. Sobre Nosotros / Historia — Fondo `#FFF6F6`
- **Layout**: 2 columnas en desktop (texto | imagen), 1 columna en móvil.
- **Texto** (máximo 3 párrafos breves):
    - *"Okini" significa **"gracias"** en la región de Kansai, Japón. Nuestro café nace de la admiración por la cultura japonesa del café: precisión, paciencia y gratitud por cada taza.*
    - *En Bogotá, traemos esa filosofía a cada grano que seleccionamos, cada método que preparamos y cada cliente que nos visita.*
    - *Okini es un puente entre Kioto y la capital colombiana, un espacio donde el tiempo se detiene y el café se convierte en un ritual.*
- **Imagen**: Foto de interior de cafetería japonesa o de preparación de café.

#### 4.3. Métodos de Preparación — Fondo `#FFF6F6` (o degradado suave con `#8CC7C4`)
- **Título**: *"Nuestros métodos"* o *"Preparaciones"* (con *Rouge Script*).
- **Grid de tarjetas (cards)**: 4 columnas en desktop, 2 en tablet, 1 en móvil.
- **Cada tarjeta** debe contener:
    - Imagen del método (V60, Kyoto Drip, Sifón, Prensa Francesa).
    - Nombre del método (con fuente destacada).
    - Descripción breve (2 líneas).
    - Precio en COP y USD (ej. *"$15.627 COP | $5 USD"*).
    - **Botón "Reservar"** (para V60, Kyoto Drip, Sifón) o **"Walk-in"** (para Prensa Francesa, deshabilitado).
    - **Efecto hover**: Al pasar el mouse, la tarjeta debe tener una animación sutil (elevación, cambio de sombra, o cambio de color de borde).

#### 4.4. Cata Semanal — Fondo `#2C687B` (contraste con secciones anteriores)
- **Título** en blanco: *"Cata Semanal"* (con *Rouge Script*).
- **Información**:
    - *"Todos los sábados a las 10:00 a.m."*
    - *"Cupo limitado: 8 personas"*
    - *"Precio: $78.137 COP | $25 USD"*
    - Descripción breve de la experiencia (cata guiada, notas de cata, maridaje).
- **Botón**: *"Inscribirme"* — abre un modal de Bootstrap con formulario (nombre, correo, teléfono).
- **Fondo de partículas**: Capa de partículas sutiles (color blanco o verde menta) sobre el fondo oscuro.

#### 4.5. Domicilios — Fondo `#FFF6F6`
- **Título**: *"Domicilios en Bogotá"* (con *Rouge Script*).
- **Layout**: 2 columnas (productos | mapa) en desktop, 1 columna en móvil.
- **Productos disponibles para domicilio**:
    - **Café en grano** (bolsa de 250g): $25.000 COP
    - **Café molido** (bolsa de 250g): $22.000 COP
    - **Pan de masa madre**: $8.500 COP
    - **Croissant**: $6.500 COP
    - **Cookie de chocolate**: $5.000 COP
- **Cada producto** debe tener: nombre, descripción breve, precio y botón *"Agregar"* (simula agregar al carrito con un modal de confirmación).
- **Mapa**: **iframe de Google Maps** mostrando la ubicación de Okini en Bogotá (dirección sugerida: *Calle 85 # 12-34, Chapinero, Bogotá*). El iframe debe ser responsivo.
- **Texto adicional**: *"Hacemos domicilios en toda Bogotá. Pide tu café favorito desde casa."*

#### 4.6. Testimonios — Fondo `#8CC7C4` (verde menta suave)
- **Título**: *"Lo que dicen nuestros clientes"* (con *Rouge Script*).
- **Grid de testimonios**: 3 columnas en desktop, 1 en móvil.
- **Testimonios predefinidos** (estos deben estar **escritos en el código HTML**, no generados por la IA):

| Cliente | Testimonio | Foto |
|---------|------------|------|
| **María F.** | *"El mejor V60 que he probado en Bogotá. La atención es impecable y el ambiente te transporta."* | Foto de persona (Unsplash) |
| **Carlos R.** | *"La cata semanal es una experiencia única. Aprendí más de café en una hora que en todo un año."* | Foto de persona (Unsplash) |
| **Laura G.** | *"Okini es mi lugar favorito para trabajar. El café es excelente y el wifi nunca falla."* | Foto de persona (Unsplash) |

- **Efecto hover**: Al pasar el mouse, cada testimonio debe tener una animación de elevación o cambio de fondo.

#### 4.7. Footer — Fondo `#2C687B`, texto blanco
- **Dirección**: *"Calle 85 # 12-34, Chapinero, Bogotá"*
- **Horario**: *"Lunes a domingo, 8:00 a.m. - 8:00 p.m."*
- **Redes sociales**: Iconos de Bootstrap (Facebook, Instagram, WhatsApp) con enlaces ficticios.
- **Copyright**: *"© 2026 Okini. Un viaje a Kioto en Bogotá."*
- **Fondo de partículas**: Capa de partículas sutiles (color blanco o verde menta) sobre el fondo oscuro.

---

### 5. INTERACTIVIDAD Y JAVASCRIPT (SIMULACIÓN DE NEGOCIO)

- **No uses `alert()` en ningún caso**. Todas las notificaciones, confirmaciones y mensajes de error deben mostrarse mediante **modales de Bootstrap**.
- **Contador de tazas disponibles (máx 50)**:
    - Debe haber un contador visible en la página (puede estar en el Hero, cerca del CTA, o en la sección de métodos).
    - Al hacer clic en **"Reservar"** en cualquier método de preparación (V60, Kyoto Drip, Sifón), se debe:
        1.  Verificar que el contador sea mayor a 0.
        2.  Reducir el contador en 1.
        3.  Mostrar un modal de confirmación con el método reservado, el precio y un mensaje de agradecimiento.
        4.  Si el contador llega a 0, deshabilitar todos los botones de reserva y mostrar un modal de **"Aforo completo"**.
- **Validaciones**:
    - No se puede reservar más de 2 tazas por persona (simula esto con un input en el modal o con un prompt visual).
    - Validar que el campo de "Cantidad" no esté vacío, no sea 0 y no sea texto.
- **Cata semanal**:
    - Al hacer clic en *"Inscribirme"*, mostrar un modal con un formulario (nombre, correo, teléfono).
    - Validar que los campos no estén vacíos y que el correo tenga formato válido.
    - Simular el envío con un modal de éxito: *"¡Inscripción confirmada! Te esperamos el sábado a las 10:00 a.m."*
- **Domicilios**:
    - Al hacer clic en *"Agregar"* en cualquier producto, mostrar un modal con el producto agregado y un mensaje: *"Agregado al carrito. ¿Quieres seguir comprando o finalizar?"* (simulación).

---

### 6. ANIMACIONES Y EFECTOS VISUALES

- **Scroll animations**: Utiliza la librería **AOS (Animate On Scroll)** para que los elementos aparezcan con animaciones suaves (fade, slide, zoom) al hacer scroll. Cada sección debe tener un tipo de animación diferente:
    - Hero: fade-in
    - Nosotros: slide-left / slide-right
    - Métodos: zoom-in
    - Cata: fade-up
    - Domicilios: slide-up
    - Testimonios: flip-up
- **Hovers diferenciados**: Cada sección debe tener un efecto hover diferente, pero todos deben mantener la coherencia visual:
    - Hero: botones con cambio de color y escala.
    - Métodos: tarjetas que se elevan y cambian de sombra.
    - Cata: botón con efecto de onda o brillo.
    - Domicilios: productos con borde que cambia de color.
    - Testimonios: tarjetas que cambian de fondo y elevación.
- **Fondos de partículas**: En Hero, Cata y Footer, implementa fondos con partículas animadas usando **particles.js** o **tsParticles**. Configura las partículas para que sean sutiles, con movimiento lento y colores acordes a la paleta.

---

### 7. TECNOLOGÍAS Y LIBRERÍAS

- **Bootstrap 5**: Para la estructura, grid, modales, botones y navegación.
- **Bootstrap Icons**: Para todos los iconos (redes sociales, café, ubicación, etc.).
- **Google Fonts**: `Rouge Script` para títulos; `Inter` o `system-ui` para texto.
- **AOS (Animate On Scroll)**: Para animaciones al hacer scroll.
- **particles.js** o **tsParticles**: Para fondos con partículas animadas.
- **Google Maps Embed API**: Para el iframe del mapa.

---

### 8. FORMATO DE ENTREGA

- **Archivos separados**:
    - `index.html`
    - `styles.css`
    - `script.js`
- El CSS y el JS deben estar enlazados correctamente desde el HTML.
- El código debe ser **limpio, comentado y bien indentado**.
- Todos los enlaces a CDN (Bootstrap, AOS, particles.js, Google Fonts) deben estar incluidos.

---

### 9. INSTRUCCIONES FINALES PARA EL LLM

1.  **No inventes información**. Usa exclusivamente los datos proporcionados en la sección "Reglas de Negocio".
2.  **Los testimonios están escritos en el prompt**. No los generes, transfiérelos tal cual al código.
3.  **Busca fotos realistas** en bancos de imágenes gratuitos (Unsplash, Pexels, Pixabay).
4.  **No uses emojis**. Usa exclusivamente Bootstrap Icons.
5.  **Utiliza la paleta de colores y la tipografía especificada**.
6.  **Asegúrate de que todos los modales funcionen** y que no aparezca ni un solo `alert()`.
7.  **La página debe ser responsiva** (adaptarse a móviles, tablets y escritorio).
8.  **Implementa AOS para animaciones al scroll y particles.js para fondos animados**.
9.  **Genera el código completo** para los tres archivos (`index.html`, `styles.css`, `script.js`).

---

### RECURSOS PARA INCLUIR EN EL PROMPT (OPCIONAL)

- **Fuente Rouge Script**: [https://fonts.google.com/specimen/Rouge+Script](https://fonts.google.com/specimen/Rouge+Script)
- **Bootstrap Icons**: [https://icons.getbootstrap.com/](https://icons.getbootstrap.com/)
- **Documentación de modales en Bootstrap 5**: [https://getbootstrap.com/docs/5.0/components/modal/](https://getbootstrap.com/docs/5.0/components/modal/)
- **AOS - Animate On Scroll**: [https://github.com/michalsnik/aos](https://github.com/michalsnik/aos)
- **particles.js**: [https://github.com/VincentGarreau/particles.js/](https://github.com/VincentGarreau/particles.js/)
- **Google Maps Embed API**: [https://developers.google.com/maps/documentation/embed/get-started](https://developers.google.com/maps/documentation/embed/get-started)

> Este prompt yo lo ejecute en Claude Sonnet 5 en Esfuerzo Alto.