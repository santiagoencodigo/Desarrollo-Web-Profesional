# programacion-basica-2 - Desarrollo de Okini

"De escribir `2+2` en la consola del navegador a tener un sitio web publicado en una URL real." Este repositorio documenta el recorrido completo por los fundamentos del desarrollo web, combinando HTML, CSS y JavaScript con el uso estratégico de inteligencia artificial.

En el archivo prompt.md encuentras el prompt para el desarrollo de la landing page del proyecto:

<img src="../../assets/img/proyectos/08-okini.png">

---

## Tabla de Contenido

- [Resumen](#resumen)
- [¿Qué vas a construir?](#qué-vas-a-construir)
- [Los tres lenguajes de la web](#los-tres-lenguajes-de-la-web)
- [Cómo funciona internet](#cómo-funciona-internet)
- [Programar con inteligencia artificial](#programar-con-inteligencia-artificial)
- [Herramientas del oficio](#herramientas-del-oficio)
- [Fundamentos de programación](#fundamentos-de-programación)
- [HTML: la estructura](#html-la-estructura)
- [CSS: el diseño](#css-el-diseño)
- [JavaScript: la interacción](#javascript-la-interacción)
- [Cliente, servidor y APIs](#cliente-servidor-y-apis)
- [Git y GitHub: control de versiones](#git-y-github-control-de-versiones)
- [Publicar en la web](#publicar-en-la-web)

---

## Resumen

Aprender a programar desde cero nunca había sido tan accesible. En este recorrido vas a construir un sitio web real, publicado en una URL que cualquier persona del mundo pueda visitar, aunque jamás hayas escrito una línea de código. Y lo vas a hacer entendiendo cómo funciona internet por dentro y colaborando con inteligencia artificial desde el primer día.

**El viaje empieza en la consola del navegador y termina con un sitio publicado en la nube.** En el camino aprenderás a:

- Guardar valores con nombre (**variables**) y entender que los datos tienen **tipos**.
- Ramificar el código con **condiciones** y multiplicarlo con **bucles**.
- Agrupar pasos bajo un nombre con **funciones**.
- Separar las tres preguntas de una página: **qué dice (HTML)**, **cómo se ve (CSS)** y **qué hace (JavaScript)**.
- Manipular el **DOM** para responder a clics del usuario.
- Usar las **DevTools** como primer reflejo cuando algo falla.
- Guardar versiones con **Git** y publicar tu trabajo en **GitHub**.
- Entender qué es una **API** y cómo se comunican cliente y servidor.

---

## ¿Qué vas a construir?

Vas a crear un sitio web desde cero y dejarlo publicado en una dirección real de internet. No es un ejercicio teórico ni un demo guardado en tu computador: es un proyecto que vive en la web y que cualquiera puede abrir desde su navegador.

El proyecto **Okini** —un café de especialidad— sirve como hilo conductor para aplicar cada concepto en un negocio real. El modelo de negocio incluye:

- **Métodos con reserva**: V60 a $5, Kyoto drip a $7 y sifón a $8.
- **Máximo 50 tazas al día** entre todos los métodos lentos y un límite de **dos tazas por persona**.
- **Prensa francesa** walk-in sin reserva a $3 la taza.
- **Cata semanal** con cupo para ocho personas a $25 por persona.
- **Horario**: 8:00 a.m. a 8:00 p.m., todos los días.

---

## Los tres lenguajes de la web

Son los tres lenguajes que sostienen prácticamente todo lo que ves en línea, desde el buscador de Google hasta el portal de tu banco:

- **HTML**: define la estructura y el contenido de una página.
- **CSS**: se encarga del diseño, los colores y la forma en que todo se ve.
- **JavaScript**: da interactividad y comportamiento a lo que ocurre en pantalla.

La idea no es memorizar sintaxis, sino entender por qué cada uno existe y cómo se combinan para producir la experiencia digital que usas todos los días.

### Lecturas recomendadas:
- [MDN Web Docs — HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs — CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs — JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)

---

## Cómo funciona internet

Programar también es entender qué ocurre cuando escribes una dirección en el navegador y, en cuestión de segundos, aparece una página completa. Detrás de ese gesto cotidiano hay computadores que se hablan entre sí a miles de kilómetros de distancia, servidores que guardan información y protocolos que ordenan el tráfico.

**Una dirección como `https://platzi.com/cursos` se divide en tres partes:**

- **Protocolo (`https`)**: el acuerdo sobre cómo se comunican dos sistemas.
- **Dominio (`platzi.com`)**: el nombre del lugar al que te conectas.
- **Ruta (`/cursos`)**: la indicación específica de qué parte quieres ver.

El **DNS** traduce el dominio a una dirección IP, igual que una agenda telefónica. Luego, el **cliente** (tu navegador) envía una **petición** al **servidor**, y el servidor responde con los archivos HTML, CSS y JavaScript que el navegador interpreta y te muestra.

---

## Programar con inteligencia artificial

Desde la primera clase vas a trabajar con inteligencia artificial, pero no como quien copia y pega respuestas. La meta es que aprendas a pedirle lo correcto, leer con criterio lo que produce y distinguir cuándo está bien y cuándo está mal.

**Tres habilidades que vas a entrenar en paralelo al código:**

1. **Formular peticiones claras**, con contexto y objetivo definido.
2. **Leer el resultado** entendiendo la lógica detrás, no solo aceptándolo.
3. **Validar y corregir** lo que la IA propone con criterio técnico propio.

### Las 4D del AI Fluency

Cuando trabajas con inteligencia artificial, ejercitas cuatro capacidades:

- **Delegation**: decidir qué delegar a la IA y qué hacer tú.
- **Description**: comunicarte con precisión, ya sea en un prompt o construyéndola dentro de una conversación.
- **Discernment**: evaluar críticamente lo que la IA entrega.
- **Diligence**: actuar con responsabilidad. Lo que publicas con tu nombre tiene que ser algo que entiendes.

---

## Herramientas del oficio

### Visual Studio Code

Es el editor de código más usado por desarrolladores en el mundo. Gratuito, funciona en Windows y Mac, y tiene un ecosistema enorme de extensiones.

- **Descarga**: [code.visualstudio.com](https://code.visualstudio.com/)
- **Extensión recomendada**: Code Runner — ejecuta tu código con un clic.

### Node.js

JavaScript fue diseñado para correr dentro del navegador. Node.js es un motor que le permite a tu computador ejecutar JavaScript sin abrir un navegador.

- **Descarga**: [nodejs.org](https://nodejs.org/)

### Terminal y línea de comandos

La terminal integrada de VS Code te permite hablarle al sistema operativo con comandos en lugar de hacer clics. Ahí ejecutarás `git init`, `git add`, `git commit` y `git push`.

### Lecturas recomendadas:
- [Git - Official Site](https://git-scm.com/)
- [GitHub Guides](https://github.com/)

---

## Fundamentos de programación

### Variables y tipos de datos

Una **variable** es un nombre que guarda un valor. En JavaScript se declaran con `let` (para valores que cambian) o `const` (para valores fijos).

Los **tipos de datos** deciden qué puedes hacer con cada valor:

- **`string`**: texto, entre comillas. Ej: `"Okini"`
- **`number`**: números sin comillas. Ej: `5`
- **`boolean`**: solo `true` o `false`

**Regla profesional**: usa `const` por defecto y `let` solo cuando sepas que el valor va a cambiar.

### Condicionales (if/else)

Una condición convierte tu código de una línea recta en un árbol con ramas. La estructura es simple:

```javascript
if (condicion) {
  // se ejecuta si es true
} else {
  // se ejecuta si es false
}
```

Los **operadores de comparación** (`>`, `<`, `>=`, `<=`, `===`, `!==`) devuelven un booleano.

**El bug más común**: olvidar casos como cero, valores negativos o texto. Un código que corre no significa que esté bien.

### Bucles (for of)

Un **bucle** repite una acción sobre cada elemento de una lista (**array**).

```javascript
const metodos = ["V60", "Kyoto drip", "sifón"];
for (const metodo of metodos) {
  console.log(metodo);
}
```

### Funciones

Una **función** es una receta con espacios en blanco que llenas cada vez que la usas. Agrupa lógica bajo un nombre y la reutiliza.

```javascript
function calcularPrecio(precioUnitario, cantidad) {
  return precioUnitario * cantidad;
}
```

- **Parámetros**: los espacios que dejas al escribir la función.
- **Argumentos**: los valores que pasas al invocarla.

### Las cinco palabras clave

Con esto ya tienes el vocabulario base de la programación:

1. **Variable**: cómo la máquina recuerda.
2. **Tipo**: qué clase de cosa recuerda.
3. **Condición**: cómo decide.
4. **Repetición**: cómo hace lo mismo muchas veces.
5. **Función**: cómo le pones nombre a una idea para reutilizarla.

Los lenguajes cambian, los frameworks cambian, las modas cambian, estas cinco ideas no.

---

## HTML: la estructura

HTML es el guion de tu página. Dice qué contiene, sin maquillaje visual. Se escribe con **etiquetas** que el navegador interpreta.

### Estructura básica de un documento HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Okini</title>
</head>
<body>
  <h1>Bienvenido a Okini</h1>
  <p>Café de especialidad</p>
</body>
</html>
```

### Etiquetas fundamentales

- **`h1` a `h6`**: encabezados. Solo un `h1` por página.
- **`p`**: párrafos de texto.
- **`a`**: enlaces, con el atributo `href`.
- **`img`**: imágenes, con los atributos `src` y `alt`.

### Etiquetas semánticas

Dan estructura real a tu sitio y mejoran la accesibilidad y el SEO:

- **`header`**: cabecera del sitio.
- **`nav`**: navegación.
- **`main`**: contenido principal (solo uno por página).
- **`section`**: agrupa contenido relacionado.
- **`footer`**: pie del sitio.

### El DOM (Document Object Model)

Cuando el navegador lee tu HTML, lo convierte en una estructura de objetos llamada **DOM**. JavaScript puede modificar el DOM en tiempo real sin tocar el archivo HTML original.

```javascript
document.querySelector("#tazas-disponibles").textContent = "45";
```

### Lecturas recomendadas:
- [MDN: Estructurando la web con HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)

---

## CSS: el diseño

CSS significa **Cascading Style Sheets**. Es el lenguaje que define colores, tipografías, espaciados y distribución de los elementos HTML.

### Conectar CSS con HTML

```html
<link rel="stylesheet" href="styles.css">
```

### Una regla de CSS

```css
selector {
  propiedad: valor;
}
```

### Selectores

- **Selector de etiqueta**: `h1 { color: red; }` — afecta a todos los elementos de ese tipo.
- **Selector de clase**: `.metodo-titulo { color: green; }` — afecta solo a los elementos con esa clase.
- **Selector descendiente**: `nav a { color: blue; }` — afecta a elementos dentro de otro elemento específico.

### El Box Model

Todo en CSS tiene una caja alrededor. De adentro hacia afuera:

1. **Contenido**: el texto o la imagen.
2. **Padding**: el espacio entre el contenido y el borde.
3. **Border**: la línea que rodea el elemento.
4. **Margin**: el espacio entre ese elemento y sus vecinos.

### Propiedades útiles

- `background-color`: color de fondo.
- `font-family`: tipografía.
- `font-size`: tamaño del texto.
- `color`: color del texto.
- `padding`: espacio interno.
- `margin`: espacio externo.
- `max-width`: ancho máximo.
- `text-align`: alineación del texto.

### Recursos para diseño
- [Google Fonts](https://fonts.google.com/)
- [Coolors — generador de paletas de color](https://coolors.co/)

---

## JavaScript: la interacción

JavaScript conecta HTML y CSS con la lógica y la interactividad.

### Enlazar JavaScript con HTML

```html
<script src="script.js"></script>
```

**Coloca la etiqueta `<script>` justo antes del cierre de `</body>`** para que el navegador construya toda la página antes de ejecutar el JavaScript.

### Manipular el DOM

```javascript
document.querySelector("#id").textContent = "nuevo texto";
```

### Eventos y addEventListener

Un **evento** es cualquier acción del usuario (clic, tecla presionada, etc.). `addEventListener` conecta esa acción con una función.

```javascript
const boton = document.querySelector("#boton-reservar");
boton.addEventListener("click", function() {
  console.log("El usuario hizo clic");
});
```

### Depurar con console.log

`console.log` no es solo para mostrar cosas. Es un **instrumento de diagnóstico** que te permite ver qué está pasando dentro de tu código.

**El ciclo de depuración:**
1. Reproducir el error.
2. Aislar dónde ocurre (con `console.log`).
3. Entender por qué pasa.
4. Corregirlo.

### Las DevTools

Las herramientas de desarrollo del navegador (clic derecho → Inspeccionar) son tu ventana al HTML y CSS en vivo.

- **Pestaña Elements**: el árbol del DOM en vivo.
- **Editar en vivo**: haz doble clic en un texto para cambiarlo.
- **Network**: muestra todas las peticiones que la página hace al servidor.

**Reflejo correcto cuando algo falla**: abrir DevTools antes de preguntarle a la IA. En 30 segundos puedes ver qué está pasando.

---

## Cliente, servidor y APIs

### Cliente y servidor

- **Cliente**: tu navegador. Pide y muestra información. Solo conoce lo que su propia usuaria hace.
- **Servidor**: el computador central que guarda datos compartidos, aplica reglas y responde a las peticiones de todos los clientes.

**Regla general:**
- Lo que cada usuario decide por sí mismo vive en el **cliente**.
- Lo que todos comparten, persiste o hay que proteger vive en el **servidor**.

### ¿Dónde viven los datos?

| Lugar | Duración | Uso |
|-------|----------|-----|
| **Session Storage** | Solo mientras la pestaña está abierta | Formularios en progreso |
| **Local Storage** | Sobrevive al cierre del navegador, pero solo en ese dispositivo | Preferencias personales |
| **Base de datos en servidor** | Disponible desde cualquier lugar y compartida | Reservas, cuentas de usuario |

### ¿Qué es una API?

Una **API** (Application Programming Interface) es un contrato entre dos sistemas. El servidor publica un contrato que dice: "si me pides esto de esta forma, te respondo con esto otro".

### JSON: el formato de los datos

Las respuestas de las APIs llegan en **JSON** (JavaScript Object Notation), un formato basado en la sintaxis de objetos de JavaScript.

```json
{
  "metodo": "V60",
  "tazas_disponibles": 8,
  "precio": 5
}
```

### fetch: pedir datos desde JavaScript

```javascript
fetch("https://api.open-meteo.com/v1/forecast?latitude=4.61&longitude=-74.08&current_weather=true")
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## Git y GitHub: control de versiones

**Git** es una máquina del tiempo para tu proyecto. Cada vez que avanzas, tomas una foto del estado de tu carpeta y la guardas con un mensaje.

### Comandos básicos

```bash
git init                 # Inicializa un repositorio
git status               # Ver el estado de los archivos
git add .                # Seleccionar todos los archivos para la foto
git commit -m "mensaje"  # Tomar la foto
git log                  # Ver el historial
```

### GitHub: Git en la nube

**GitHub** aloja tu repositorio en un servidor remoto para respaldo, acceso desde cualquier dispositivo y colaboración.

```bash
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

---

## Publicar en la web

Tu código de Okini ya vive en un repositorio de GitHub, pero todavía no es un sitio web que cualquiera pueda visitar. Para eso, puedes usar servicios como **Vercel** o **Netlify** que toman tu repositorio y lo convierten en un sitio publicado.

**Ejemplos de sitios publicados:** 

- [okini-html.vercel.app](https://okini-html.vercel.app/)
- [Pizzeria Don Carlos](https://pizzeria-don-carlos.vercel.app/)
- [Refugio Cafetería](https://refugio-cafeteria.vercel.app/)

---

> "Ōkini" significa **gracias** en la región de Kansai, Japón. 

> Gracias por leer.