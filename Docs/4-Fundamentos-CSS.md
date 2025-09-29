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

## Pseudo-clases y Elementos

>speudo-clases: permiten apuntar a estados específicos del DOM.

>speudo-elementos: generan contenido que no existe en el HTML.

:focus - estiliza el elemento enfocado.

:first-child - representa el primer elemento entre un grupo de elementos hermanos.

:last-child -
:nth-child(even) -
::before y ::after -

    li:first-child {
    color: green;
    font-weight: bold;
    }

    li:last-child {
    color: red;
    font-weight: bold;
    }

¿Cómo usar ::before y ::after con content?

+ ::before y ::after se escriben con doble dos puntos.

+ content inserta el texto (por ejemplo, comillas) al inicio o al final.

+ El estilo del contenido se controla como cualquier nodo: color, tamaño, etc.

Lectura recomendada: https://webdesign.tutsplus.com/the-30-css-selectors-you-must-memorize--net-16048t

---

## Box Model

<!-- Nos ayudara mucho a ahorrarnos problemas. -->

Domina el modelo de caja en CSS para evitar sorpresas en el layout: entender cómo se combinan contenido, padding, borde y margin, y cuándo usar box-sizing te da control real de las dimensiones. 

La forma en la que funciona CSS, es en donde toma todos los elementos como cajas. Como cuando se visualiza desde las DEV TOOLS el espacio que ocupa cada elemento, se ve como todo se compone con cuadros/rectangulos incluyendo si es texto.

A partir de eso nosotros podemos manipular los estilos que existen.

Por medio de  las DEV TOOLS (al final) encontramos una caja que contiene margin, padding, border y asi vemos cual es el modelo de caja que contiene cada uno de los elementos.

>El margin: espacio externo para separar contenedores. Un margin de 20 píxeles separa bloques que, sin esto, quedan encimados.

>El borde puede ser un ejemplo visual de donde se encuentra el contenedor, línea que rodea el contenedor y ocupa píxeles. Útil para visualizar dimensiones y posición.

>El padding: espacio interno entre contenedor y contenido. Al quitarlo, el contenido se pega al borde.

box sizing: viene por default 

box-sizing: content-box; Podemos tener un margin, padding, border y cualquier atributo por separado, pero el navegador suma todos estos atributos haciendolos pasar por el tamaño o espacio total de cada elemento.

box-sizing: border-box; Podemos tener control de todas las dimensiones.

Generalmente todos los elementos vienen con unos estilos por default. (User Agent Stylesheet).

En conclusión: **Usar un selector  *  que aplique a todos los elementos para hacer reset garantiza que los espacios sean exactamente los que defines tú.**

todo esto es para evitar sorpresas en el layout.

---

## Position CSS

Mejoran la maquetación, el control del scroll y el orden visual de los elementos.

Cada uno de los elementos tiene una posicion al momento de rendirarse en el navegador. 

### position:relative;

    position:relative;
    top:20px;
    left:30px;

permite mover un elemento desde su posición original utilizando elementos como top, left. Todo esto sin afectar a los otros elementos.

### position:absolute;

    .contenedor-padre {
        position:relative;
        height:100px;
    }

    .elemento-hijo{
        position:absolute;
        top:10px;
        right:10px;
    }

El elemento padre debe tener un position por default para que el elemento hijo pueda moverse con toda la libertad dentro de su contenedor. Afecta a la posición de los otros.

Con absolute, el elemento sale del flujo y no reserva espacio. Se posiciona respecto al primer ancestro con position configurado (comúnmente relative en el padre).

### position:fixed;

    position:fixed;
    bottom: 30px;
    right: 30px;

No importa si su contenedor padre tenga una position, el FIXED se quedará en un mismo lugar.

Una vez se le agregue el atributo fixed, el elemento va a estar fijo en la pantalla sin importarle el scroll que se realice.

Una vez se le agregue ese atributo, hay que añadirle unas coordinadas botom, right, top, left para darle una posición en la pantalla.

Fixed ignora el contenedor y se ancla a la pantalla. Permite botones persistentes durante el scroll.

### position:sticky;

    .contenedor-scroll {
        height: 150px; --> Limite de tamaño.
        overflow-y:auto; --> SCROLL al añadir limite
    }

    position:sticky;
    top:0px;

se comporta como relative mientras este en cualquier lado más abajo del limite hacia arriba en scroll y hay comenzará a comportarse como como fixed.

Sticky combina lo mejor de relative y fixed según el scroll. Por su parte, z-index resuelve qué capa se ve al frente cuando varias se superponen.

Un ejemplo es la barra de navegación.

### position:z-index;

    .contenedor{
        positin: relative;
        height: 150px;
    }

    .capa {
        position: absolute;
        width: 80px;
        height: 80px;
    }

    .capa-1{
        top: 20px;
        left: 20px;
        background-color: blue;
        z-index:1;
    }

    .capa-2{ --> Se pondrá por encima de la capa 1
        top:40px;
        left:40px;
        background-color: red;
        z-index:2;
    }

No es como un position, pero sirve para posicionar al frente de otros elementos (capas), 

Qué contenedor o elemento necesito que se ponga delante de qué elemento o contenedor. Controla qué elemento queda por encima cuando se superponen.

---

## Organización BEM

Es importante entender que cuando hay un proyecto cada vez más grande, hay un problema con la especificidad, por lo que existen metodologias para evitar que los estilos se pisen entre ellos.

BEM en CSS te permite escalar estilos sin conflictos al nombrar clases con una estructura clara. Con bloques, elementos y modificadores bien definidos, los estilos dejan de “pisarse” y el código se vuelve predecible, mantenible y fácil de leer.

BEM: Block Element Modifier

Ejemplo: Tarjeta de producto

    Block: <div class="card">
    Element:    <h2 class="card__title">Laptop Pro</h2>
    Element:    <p class="card__price">$999</p>
    Modifier:   <button class="card__button card__button--disabled">Comprar</button>
           <div>

La idea central: cada clase indica su rol y alcance. Un bloque agrupa una pieza independiente de interfaz; un elemento es una parte del bloque; un modificador expresa un estado o variante.

Bloque: representa un componente como una tarjeta, por ejemplo, card.

Elemento: se nombra con doble guion bajo: card__title, card__price, card__button, card__badge.

Modificador: se nombra con doble guion: card--feature, card__button--disable.

>La tarjeta funciona como bloque principal. Dentro, se definen elementos para el título, el precio, los botones y un badge. Luego se aplican modificadores para estados específicos. 

>Se trabaja primero el contenedor para visualizarlo con claridad: borde, espaciados y ancho máximo y se aplican estilos puntuales a cada elemento, sin afectar otros bloques.

>Los modificadores expresan variaciones: uno para el bloque completo (feature) y otro para el botón deshabilitado (disable). Separar estado de estructura mantiene el CSS limpio y predecible.

>max-width: 300px; es el maximo tamaño que se le define a un elemento.

>cursor: not-allowed; da apariencia al boton de inactivo.
