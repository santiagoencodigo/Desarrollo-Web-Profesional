# Fundamentos de CSS

Domina CSS para transformar ideas en interfaces modernas, legibles, responsivas y escalables con Flexbox y Grid. Aplica tipografía, color y variables para un diseño visual consistente, y organiza tu código con buenas prácticas que te preparan para construir proyectos web profesionales en la industria.

## De la idea al estilo con CSS

Temario de lo que vamos a ver:

+ Modelo de caja: Entender cómo se define y controla el tamaño de los elementos, ajustar espaciados internos y externos con precisión, Lograr interfaces coherentes al alinear componentes.

+ Layouts Adaptables: Diseño Responsive, usar layouts con Flexbox para distribuir y alinear elementos con flexibilidad, emplear Grid para estructuras más complejas y responsivas, Diseñar proyectos 100 % responsive pensados desde mobile.

+ Herencia: Permite que estilos del contenedor padre afecten a los hijos de forma controlada.

+ Variables: Sirven para centralizar colores, tamaños y tipografias, evita repertir estilos en múltiples archivos, cambiar el valor y actualizar una interfaz de forma consistente.

+ Especificidad: Es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento

+ Flexbox: Es un módulo de CSS que permite alinear y distribuir el espacio entre los elementos dentro de un contenedor.

+ Grid: El grid layout permite a un autor alinear elementos en columnas y filas.

>Profesor: Diego de Granda

>Proyecto: Un portafolio 100% responsive listo para agregar proyectos.

---

## CSS: qué es y formas de aplicar estilos en HTML

CSS significa Cascade Style Sheets, La cascada implica que los estilos se aplican de arriba hacia abajo. Esto quiere decir que los ultimos estilos que se agreguen en el documento seran los que más se tengan en cuenta. 

<!-- cuáles son las tres formas de aplicar estilos en HTML. -->

¿Cómo agregar estilos a el elemento HTML?

Se hace con sistema de atributos en donde a un elemento HTML, era lo que se hacia en el pasado pero no era sostenible.

    <p style="color:red;">
        Hola, soy santiagoencodigo un desarrollador junior
    </p>

Otra forma era dentro de la etiqueta HTML "HEAD" agregar el elemento STYLE e ir modificando el texto. Pero igualmente sigue sin ser sostenible para proyectos grandes.

    <style>
        h1{
            color: blue;
        }
        h2{
            color:green;
        }
    </style>

La forma sostenible es crear un archivo independiente. Usualmente se le guarda con el nombre "styles.css" 

la diferencia en estas tres es las ventajas de mantenimiento y consistencia.

---

## Selectores y Especificidad

¿Cómo ser más específico: selectores descendientes y contenedores?

selector: Es la forma en la que llamamos a un elemento del HTML al CSS, puede ser directamente desde el elemento HTML, con clases y con ID

Selector descendiente: se escribe con un espacio entre el contenedor y el elemento objetivo.

>Cuando quieres agregarle un atributo a un elemento y este elemento se repite varias veces en el codigo, tambien se van a modificar estos elementos y a eso se le conoce como probemas de especificidad.

Selector de etiqueta: afecta todas las etiquetas del mismo nombre.


class: Son genericas, en donde cualquier elemento o más de uno pueden tener el mismo nombre de clase. se invoca con punto y puede repetirse en varios elementos.

    <p class="parrafo">Generico</p>
    <p class="parrafo">Generico</p>
    <p class="parrafo">Generico</p>

id: Cuando quieres agregarle caracteristicas a un elemento en especifico. se invoca con numeral y solo debe existir una vez.

    <p id="unico">Unico</p>

descendencia: Cuando quieres agregar caracteristicas a un elemento en especifico sin crear una nueva clase o ID, generalmente se le nombra a partir de un elemento padre.

    <div class="contenedor">
        <p>Generico</p>
    </div>

pseudoclases: se encuentran en CSS y son como el hover

hover: "Cuando yo paso por encima de algún elemento algo debe pasar"

prioridad de CSS con el agregar estilos

elemento (h1, p, div): 0, 0, 0, 1
clase (.rojo .contenedor): 0, 0, 1, 0
id (#unico): 0, 1, 0, 0
inline style ( * ): 1, 0, 0, 0
!important: Gana Siempre.

los elementos padre pueden heredarles ciertas propiades a sus hijos. Heredando cualquier caracteristica de tipografia como color, familia tipográfica, tamaño de fuente, alineación de texto y estilos de fuente., pero no se heredan margin, padding, border, background, width, height, position..

>Evita estilos en línea como práctica habitual: tienen demasiado peso y complican el mantenimiento.

>Las pseudoclases cambian estilos según el estado de un elemento. Útiles para indicar interacción visual como el hover en enlaces y botones. Además, conocer la especificidad y la herencia evita conflictos al crecer el proyecto.

> hover: aplica estilos cuando el puntero pasa encima.

> link: aplica a enlaces no visitados.

> visits: aplica a enlaces ya visitados.

---

