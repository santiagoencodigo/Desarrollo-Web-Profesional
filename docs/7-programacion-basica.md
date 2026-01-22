# Programación Básica

Este documento reúne mis apuntes técnicos y personales relacionados con Programación Básica, con el objetivo de documentar de forma estructurada los conceptos fundamentales y el proceso de aprendizaje asociado a su aplicación práctica.

Aqui se abordan temas como lógica de programación, estructuras de control, manipulación del DOM y fundamentos del desarrollo web utilizando JavaScript, HTML y CSS, aplicados en la construcción progresiva de un videojuego. Este repositorio funciona como material de referencia y evidencia de la consolidación de bases sólidas de programación.

Lecturas Recomendadas:

* Curso Programación Básica - Platzi: https://platzi.com/cursos/programacion-basica/

* Qué es Programación - freecodecamp: https://www.freecodecamp.org/espanol/news/que-es-programacion-manual-para-principiantes/

* Definición de Programación - Wikipedia: https://es.wikipedia.org/wiki/Programaci%C3%B3n

* HTML - MDN: https://developer.mozilla.org/es/docs/Web/HTML

* CSS - MDN: https://developer.mozilla.org/es/docs/Web/CSS

* JavaScript - MDN: https://developer.mozilla.org/es/docs/Web/JavaScript

<img src="https://media.tenor.com/zn8iyusePtgAAAAM/joy.gif">

*Imagen Tomada De: https://tenor.com/es-419/search/programador-gifs*










## Tabla de Contenido

### Fundamentos de Programación

* [1. Programación Básica: Fundamentos y Creación de Proyectos en Línea](#programación-básica-fundamentos-y-creación-de-proyectos-en-línea)

* [2. Programación Básica en Google Chrome: Variables y Funciones](#programación-básica-en-google-chrome-variables-y-funciones)

* [3. Creación de una Página Web Básica con HTML](#creación-de-una-página-web-básica-con-html)

* [4. Estructuras Básica de un Documento HTML](#estructuras-básica-de-un-documento-html)

* [5. Estructura y funcionamiento básico de HTML y JavaScript](#estructura-y-funcionamiento-básico-de-html-y-javascript)










# Fundamentos de Programación










## Programación Básica: Fundamentos y Creación de Proyectos en Línea

Eventualmente estaremos viendo los principios esenciales de la programación y su aplicación en la creación de proyectos interactivos para la web. A lo largo del desarrollo se van a trabajar conceptos clave como la lógica de programación, la estructuración del código y la optimización de soluciones, utilizando HTML, JavaScript y CSS como tecnologías base.
El enfoque práctico se materializa en la construcción progresiva de un videojuego, integrando estilos visuales con CSS, renderizado y manejo de gráficos mediante Canvas, y una introducción a componentes de backend orientados a experiencias multijugador. Este conjunto de contenidos permite comprender el ciclo completo de desarrollo de un proyecto web, desde la lógica y la interfaz hasta la interacción en tiempo real.










---










## Programación Básica en Google Chrome: Variables y Funciones

Google Chrome como entorno de exploración y aprendizaje, se puede hacer uso directo de las herramientas de desarrollo y, en particular, de la consola del navegador. Al acceder a una página en blanco mediante **about:blank** y abrir el panel de inspección, es posible ejecutar instrucciones de JavaScript en tiempo real, lo que permite comprender de forma práctica cómo el navegador interpreta y ejecuta código.

<img src="https://static.platzi.com/media/articlases/Images/Clase%2001%20-%201.png">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/51978-como-aprender-programacion/*

Lecturas Recomendadas: 

* Developer Tools - AWS: https://aws.amazon.com/es/what-is/developer-tools/

* Developer Tools - MDN: https://developer.mozilla.org/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools

* DevTools - Chrome: https://developer.chrome.com/docs/devtools?hl=es-419

Video Recomendado: Paso a Paso Devtools Chrome TUTORIAL by Studios Johan: https://www.youtube.com/watch?v=b1n2UnSe1uM

* about:blank - freecodecamp: https://www.freecodecamp.org/espanol/news/about-blank-que-significa-y-deberias-deshacerte-de-el/

* about:blank - avast: https://www.avast.com/es-es/c-what-is-about-blank-and-is-it-safe

El navegador funciona como un entorno de ejecución que, al acceder a un dominio, solicita a un servidor los recursos necesarios para construir la aplicación: el DOM (Document Object Model), el CSSOM (CSS Object Model) y el JSOM (entorno de ejecución de JavaScript). Esto implica que, al navegar por la web, se está ejecutando constantemente código escrito por terceros, lo cual refuerza la importancia de comprender cómo se estructuran y ejecutan estas tecnologías.

<img src="https://web.dev/static/articles/critical-rendering-path/render-tree-construction/image/dom-cssom-are-combined-8de5805b2061e.png?hl=es-419">

*Imagen Tomada De: https://web.dev/articles/critical-rendering-path/render-tree-construction?hl=es-419*

Lecturas Recomendadas:

* Qué es el DOM - Freecodecamp: https://www.freecodecamp.org/espanol/news/que-es-el-dom-el-significado-del-modelo-de-objeto-de-documento-en-javascript/

* Render Tree - web.dev: https://web.dev/articles/critical-rendering-path/render-tree-construction?hl=es-419

A través de la consola se pueden explorar conceptos como la declaración y asignación de variables, el uso de operaciones matemáticas, y la ejecución de funciones integradas del lenguaje, como alert() o prompt(). Estas funciones deben ser escritas con exactitud sintáctica, respetando el uso de minúsculas y la estructura correcta de paréntesis, ya que la programación exige precisión absoluta y no admite ambigüedades en su interpretación.

Lecturas Recomendadas:

* Variable (Programación) - Wikipedia: https://es.wikipedia.org/wiki/Variable_(programaci%C3%B3n)

* Variable (Matemáticas) - Wikipedia: https://es.wikipedia.org/wiki/Variable_(matem%C3%A1tica)

* alert(" ") - MDN: https://developer.mozilla.org/es/docs/Web/API/Window/alert

---

Función: Es un bloque de código diseñado para ejecutar una tarea específica

Invocar una función en JavaScript: Ejecutar su lógica mediante el uso de paréntesis.

Parámetro: como el valor que una función recibe para modificar su comportamiento o resultado.

---

Programar consiste en definir un conjunto de instrucciones claras, ordenadas y finitas para resolver un problema específico. A nivel algorítmico, este proceso implica analizar el problema, establecer una lógica de solución y traducirla a un lenguaje que la computadora pueda interpretar y ejecutar.

En programación, el orden de los factores puede alterar el resultado de una operación dependiendo del tipo de cálculo que se realice. Las operaciones matemáticas y lógicas siguen reglas estrictas de precedencia, por lo que respetar el orden correcto es fundamental para garantizar resultados precisos y evitar errores en la ejecución del código.

Antes de los lenguajes de programación modernos, la programación se realizaba mediante sistemas físicos como las tarjetas perforadas. Estas tarjetas contenían instrucciones representadas por perforaciones y eran procesadas por máquinas para ejecutar tareas específicas, sentando las bases de la programación estructurada actual.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Punch-card-blue.jpg/500px-Punch-card-blue.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Tarjeta_perforada*

La memoria RAM es el espacio donde se almacenan temporalmente los datos que un programa necesita mientras se está ejecutando. Cuando se declara una variable, el sistema asigna un espacio en memoria para guardar su valor, permitiendo que este sea accedido, modificado o eliminado durante la ejecución del programa.

Un string es un tipo de dato utilizado para representar texto. Está compuesto por una secuencia de caracteres y se define comúnmente entre comillas. Los strings se emplean para manejar información textual como mensajes, nombres, valores de entrada del usuario y contenido dinámico dentro de una aplicación.

Lecturas Recomendadas: 

* https://developer.mozilla.org/es/docs/Glossary/String

* https://www.freecodecamp.org/espanol/news/que-es-una-cadena-de-caracteres-string-en-javascript/

<img src="https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202022-07-21%20a%20la%28s%29%2021.06.06-51d47de3-1dc0-49dc-9abd-0da0bdb67272.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/51978-como-aprender-programacion/*










---










## Creación de una Página Web Básica con HTML

Un archivo de programación es un documento de texto que contiene instrucciones escritas en un lenguaje específico y que pueden ser interpretadas por un sistema o entorno de ejecución. En desarrollo web, estos archivos permiten definir estructura, estilos y comportamiento de una página.

El sistema de archivos es el método que utiliza un sistema operativo para organizar, almacenar y recuperar archivos en un dispositivo. Define cómo se estructuran las carpetas, cómo se nombran los archivos y cómo se accede a ellos.

Una carpeta es un contenedor utilizado para organizar archivos dentro de un sistema. Su función principal es mantener una estructura ordenada que facilite la administración, localización y mantenimiento de los archivos de un proyecto.

Todo archivo posee un nombre y una extensión, separadas por un punto (.). La extensión indica el tipo de contenido del archivo y le permite al sistema operativo y a las aplicaciones saber cómo debe ser interpretado o ejecutado.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/GNOME_Files_3.24_%282017-03%29_in_Czech.png/500px-GNOME_Files_3.24_%282017-03%29_in_Czech.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Archivo_(inform%C3%A1tica)* 

En dispositivos móviles como Android, las extensiones de archivo suelen estar ocultas al usuario. En sistemas operativos como Windows y macOS, estas extensiones pueden mostrarse activando una opción del sistema, aunque por defecto no siempre están visibles.

* Un archivo DOCX es un documento de texto utilizado principalmente para la creación y edición de contenido escrito. Es comúnmente empleado para informes, cartas y documentación, y es interpretado por procesadores de texto.

* Un archivo XLS es un documento orientado al manejo de datos tabulares y cálculos. Se utiliza para organizar información en filas y columnas, realizar operaciones matemáticas y analizar datos.

Lectura Recomendada:

Resumen sobre las Extensiones de Archivos - IONOS: https://www.ionos.com/es-us/digitalguide/servidores/know-how/resumen-de-las-extensiones-de-archivos/

---

Un archivo HTML es un documento de texto que define la estructura de una página web. Contiene etiquetas que indican al navegador cómo debe organizar y mostrar el contenido.

<img src="https://upload.wikimedia.org/wikipedia/commons/3/35/HTML_file_type_mimetype_icon.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/HTML*

HTML es fundamental para el funcionamiento de Internet, ya que es el lenguaje base con el que se construyen las páginas web. Sin HTML, los navegadores no tendrían una forma estándar de interpretar y presentar información al usuario.

Lectura Recomendada: 

La web y los estándares web - MDN: https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model

CSS es un lenguaje de estilos utilizado para definir la apariencia visual de una página web. Se considera una declaración de diseño porque especifica cómo deben mostrarse los elementos HTML en términos de colores, tamaños, posiciones y estilos.

El código CSS puede escribirse directamente dentro de un archivo HTML o incluirse como un documento externo. Separar los estilos en archivos independientes mejora la organización, el mantenimiento y la reutilización del diseño.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/500px-Official_CSS_Logo.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/CSS*

JavaScript es un lenguaje de programación que permite agregar interactividad y comportamiento dinámico a las páginas web. Con JavaScript se pueden manejar eventos, modificar el contenido, validar datos y comunicarse con servidores.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/500px-Unofficial_JavaScript_logo_2.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/JavaScript*

HTML se encarga de definir la estructura de una página web, estableciendo qué elementos existen y cómo se organizan. Actúa como el esqueleto sobre el cual se aplican estilos y funcionalidades.

Al crear un archivo HTML se establecen los primeros elementos de una página web. Este archivo representa el punto inicial desde el cual se construye toda la estructura visual y funcional del sitio.

> Todos los archivos son, en esencia, texto. La diferencia entre ellos radica en la forma en que ese texto está organizado y en las reglas que determinan cómo debe ser interpretado por distintos programas.

Es posible escribir código utilizando editores de texto simples como el bloc de notas. Sin embargo, los editores de código especializados ofrecen ayudas visuales, resaltado de sintaxis y herramientas que facilitan la escritura, lectura y mantenimiento del código.

Video Recomendado - Cómo hacer Código HTML en Bloc de Notas by divcode: https://www.youtube.com/watch?v=irigISsaHqs

La etiqueta <strong></strong> se utiliza para resaltar texto con un énfasis semántico importante. Indica que el contenido tiene mayor relevancia dentro del contexto de la página.

La etiqueta <h1></h1> representa el encabezado principal de una página web. Se utiliza para definir el título más importante del contenido y cumple un papel clave en la estructura y accesibilidad del documento.

Lecturas Recomendadas:

* Etiqueta Strong en HTML - MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/strong

* Etiquetas Headers/Títulos en HTML - MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/Heading_Elements

<img src="https://static.platzi.com/media/user_upload/css%20html%20js-c5cad547-d054-48d7-83be-bc2caee99577.jpg">

*Imagen Tomada De: https://platzi.com/cursos/html-css-2020/que-vas-a-aprender-en-este-curso/*










---










## Estructuras Básica de un Documento HTML

Los sitios web se cargan de forma secuencial, lo que significa que el navegador procesa el código siguiendo el orden en el que aparece en el archivo. Este comportamiento influye directamente en la forma en que se renderiza el contenido.

**Lectura Recomendada:**

Cómo funciona la web - MDN: https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works

Las computadoras procesan instrucciones a velocidades muy altas, medidas en hertz. El navegador interpreta el código HTML de arriba hacia abajo y ejecuta cada instrucción rápidamente, haciendo que el proceso de carga no sea perceptible para el usuario.

Un documento HTML sigue una estructura definida que permite al navegador interpretar correctamente su contenido. Esta estructura establece el orden y la jerarquía de los elementos que conforman una página web.

**Lectura Recomendada:**

Cómo los navegadores cargan los sitios web - MDN: https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites

HTML funciona como un árbol jerárquico, donde cada elemento puede contener otros elementos dentro de sí. Esta organización permite representar relaciones entre los distintos componentes de la página y facilita su manipulación mediante estilos y scripts.

En HTML, una etiqueta contenedora agrupa otros elementos dentro de ella, funcionando de manera similar a una caja que contiene otras cajas. Esta estructura permite organizar el contenido de forma lógica y jerárquica dentro del documento.

La etiqueta **html** envuelve todo el contenido del documento y define el inicio y fin de una página web. Es el elemento raíz del árbol HTML y contiene tanto la sección de configuración como el contenido visible.

* https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/html

La etiqueta **head** contiene información descriptiva y de configuración del documento. El contenido ubicado en esta sección no es visible para el usuario, pero es esencial para el funcionamiento, presentación y comportamiento de la página.

* https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/head

La etiqueta **title** define el título del documento, el cual se muestra en la pestaña del navegador. Este elemento es importante para la identificación de la página y su correcta indexación.

* https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/title

La etiqueta **body** contiene todos los elementos visibles de la página web. Dentro de esta sección se incluyen textos, imágenes, enlaces y cualquier otro componente que interactúe directamente con el usuario.

* https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/body

<img src="https://upload.wikimedia.org/wikipedia/commons/3/35/HTML_file_type_mimetype_icon.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/HTML*

---

El uso eficiente de atajos de teclado es una práctica común entre programadores experimentados. Estos atajos permiten aumentar la productividad y reducir el tiempo dedicado a tareas repetitivas.

Lecturas Recomendadas:

* https://es.wikipedia.org/wiki/Atajo_de_teclado

* https://www.esedsl.com/blog/100-atajos-teclado-windows-mac

El atajo Ctrl + S permite guardar un documento de forma inmediata desde el teclado. Este comando es fundamental para preservar cambios realizados durante el desarrollo.

El atajo Ctrl + R se utiliza para recargar una página web en el navegador. Este comando permite visualizar los cambios realizados en el código sin necesidad de usar el mouse.

<img src="https://i.pinimg.com/originals/d1/b0/35/d1b035beb6ec8b99e82ba9b1a4069b67.gif">

*Imagen Tomada De: https://cl.pinterest.com/pin/739997782547460343/*










---










## Estructura y funcionamiento básico de HTML y JavaScript