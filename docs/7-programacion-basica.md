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

* [06. Instalación y uso básico de Visual Studio Code para programar](#instalación-y-uso-básico-de-visual-studio-code-para-programar)

* [07. Declaración y Uso Básico de Variables en JavaScript](#declaración-y-uso-básico-de-variables-en-javascript)










# Fundamentos de Programación










## Programación Básica: Fundamentos y Creación de Proyectos en Línea

Eventualmente estaremos viendo los principios esenciales de la programación y su aplicación en la creación de proyectos interactivos para la web. A lo largo del desarrollo se van a trabajar conceptos clave como la lógica de programación, la estructuración del código y la optimización de soluciones, utilizando HTML, JavaScript y CSS como tecnologías base.
El enfoque práctico se materializa en la construcción progresiva de un videojuego, integrando estilos visuales con CSS, renderizado y manejo de gráficos mediante Canvas, y una introducción a componentes de backend orientados a experiencias multijugador. Este conjunto de contenidos permite comprender el ciclo completo de desarrollo de un proyecto web, desde la lógica y la interfaz hasta la interacción en tiempo real.










---










## Programación Básica en Google Chrome: Variables y Funciones

Google Chrome como entorno de exploración y aprendizaje, se puede hacer uso directo de las herramientas de desarrollo y, en particular, de la consola del navegador. Al acceder a una página en blanco mediante **about:blank** y abrir el panel de inspección, es posible ejecutar instrucciones de JavaScript en tiempo real, lo que permite comprender de forma práctica cómo el navegador interpreta y ejecuta código.

<img src="https://static.platzi.com/media/articlases/Images/Clase%2001%20-%201.png">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/51978-como-aprender-programacion/*

**Lecturas Recomendadas:**

* Developer Tools - AWS: https://aws.amazon.com/es/what-is/developer-tools/

* Developer Tools - MDN: https://developer.mozilla.org/es/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools

* DevTools - Chrome: https://developer.chrome.com/docs/devtools?hl=es-419

Video Recomendado: Paso a Paso Devtools Chrome TUTORIAL by Studios Johan: https://www.youtube.com/watch?v=b1n2UnSe1uM

* about:blank - freecodecamp: https://www.freecodecamp.org/espanol/news/about-blank-que-significa-y-deberias-deshacerte-de-el/

* about:blank - avast: https://www.avast.com/es-es/c-what-is-about-blank-and-is-it-safe

El navegador funciona como un entorno de ejecución que, al acceder a un dominio, solicita a un servidor los recursos necesarios para construir la aplicación: el DOM (Document Object Model), el CSSOM (CSS Object Model) y el JSOM (entorno de ejecución de JavaScript). Esto implica que, al navegar por la web, se está ejecutando constantemente código escrito por terceros, lo cual refuerza la importancia de comprender cómo se estructuran y ejecutan estas tecnologías.

<img src="https://web.dev/static/articles/critical-rendering-path/render-tree-construction/image/dom-cssom-are-combined-8de5805b2061e.png?hl=es-419">

*Imagen Tomada De: https://web.dev/articles/critical-rendering-path/render-tree-construction?hl=es-419*

**Lecturas Recomendadas:**

* Qué es el DOM - Freecodecamp: https://www.freecodecamp.org/espanol/news/que-es-el-dom-el-significado-del-modelo-de-objeto-de-documento-en-javascript/

* Render Tree - web.dev: https://web.dev/articles/critical-rendering-path/render-tree-construction?hl=es-419

A través de la consola se pueden explorar conceptos como la declaración y asignación de variables, el uso de operaciones matemáticas, y la ejecución de funciones integradas del lenguaje, como alert() o prompt(). Estas funciones deben ser escritas con exactitud sintáctica, respetando el uso de minúsculas y la estructura correcta de paréntesis, ya que la programación exige precisión absoluta y no admite ambigüedades en su interpretación.

**Lecturas Recomendadas:**

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

**Lecturas Recomendadas:**

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

<img src="https://lenguajehtml.com/html/documento/estructura-documento-html/estructura-documento-html.png">

*Imagen Tomada De: https://lenguajehtml.com/html/documento/estructura-documento-html/*

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

**Lecturas Recomendadas:**

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

**Lecturas Recomendadas:**

* https://es.wikipedia.org/wiki/Atajo_de_teclado

* https://www.esedsl.com/blog/100-atajos-teclado-windows-mac

El atajo Ctrl + S permite guardar un documento de forma inmediata desde el teclado. Este comando es fundamental para preservar cambios realizados durante el desarrollo.

El atajo Ctrl + R se utiliza para recargar una página web en el navegador. Este comando permite visualizar los cambios realizados en el código sin necesidad de usar el mouse.

<img src="https://i.pinimg.com/originals/d1/b0/35/d1b035beb6ec8b99e82ba9b1a4069b67.gif">

*Imagen Tomada De: https://cl.pinterest.com/pin/739997782547460343/*










---










## Estructura y funcionamiento básico de HTML y JavaScript

Un documento HTML está compuesto por una estructura definida que permite al navegador interpretar y renderizar correctamente el contenido. Esta estructura establece la organización general de los elementos que conforman una página web.

<img src="https://disenowebakus.net/imagenes/articulos/estructura-basica-de-una-pagina-web-en-html.jpg">

*Imagen Tomada De: https://disenowebakus.net/domine-html-y-dhtml-primeros-pasos.php*

HTML se organiza como un árbol jerárquico de etiquetas. En esta estructura, **html** actúa como la raíz principal, dentro de la cual se encuentran **head** y body. A su vez, **head** puede contener elementos como **title**, mientras que **body** incluye etiquetas visibles como **h1** y **p**, formando una jerarquía clara y ordenada.

Dentro de la etiqueta **head** puede incluirse la etiqueta **script**, la cual se utiliza para cargar código escrito en JavaScript. Este código puede integrarse directamente en el documento HTML o referenciarse desde un archivo externo, permitiendo separar la lógica de programación de la estructura del contenido.

**Lecturas Recomendadas:**

* etiqueta html by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/html

* etiqueta head by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/head

* etiqueta title by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/title

* etiqueta script by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/script

* etiqueta body by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/body

* etiqueta header by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/header

* etiqueta p by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/p

La indentación mediante la tecla TAB se utiliza para organizar visualmente el código y facilitar su lectura. Aunque no es obligatoria en HTML, JavaScript o CSS, se considera una buena práctica. En lenguajes como Python, la indentación sí es obligatoria para el correcto funcionamiento del código.

<img src="https://miro.medium.com/v2/resize:fit:1096/1*somdTHK2pIj1EfIpzEC5sw.png">

*Imagen Tomada De: https://medium.com/@sthefany/qu%C3%A9-es-la-indentaci%C3%B3n-c9471f3ae84f*

**Lectura Recomendada:**

* Identación python by freecodecamp: https://www.freecodecamp.org/espanol/news/indentacion-en-python-con-ejemplos/

En JavaScript, la forma en que se evalúan las expresiones depende del tipo de datos involucrados. Cuando se utiliza la expresión **alert("El valor de a+b es " + a + b)**, los valores se concatenan como texto, produciendo el resultado 12, ya que los valores numéricos se interpretan como strings al combinarse con texto.

Al agregar paréntesis en una operación, como en **alert("El valor de a+b es " + (a + b))**, JavaScript evalúa primero la suma de los valores numéricos. Esto permite obtener el resultado matemático correcto antes de concatenarlo con el texto.

**Lectura Recomendada:**

* Expresiones y Operadores en Javascript by Freecodecamp: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators

En JavaScript, los espacios entre variables y operadores no afectan la ejecución del código. Expresiones como **a+b** y **a + b** son interpretadas de la misma manera por el lenguaje, lo que permite flexibilidad en la escritura sin afectar el resultado.

<img src="https://cdn1.gnarususercontent.com.br/6/413612/8e2fbf5a-23d8-45d2-821b-dc514530ecb1.png">

*Imagen Tomada De: https://app.aluracursos.com/forum/topico-string-y-entero-javascript-concatenacion-108481*

---

Las variables pueden almacenar distintos tipos de valores. Entre los más comunes se encuentran los valores numéricos, utilizados para operaciones matemáticas, y los valores textuales, empleados para representar cadenas de caracteres.

Lecturas Recomendadas:

* Gramática y tipos en Javascript by MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types

* Variables de Javascript by w3schools: https://www.w3schools.com/js/js_variables.asp

Video Recomendado - JavaScript - Variables - W3Schools.com: https://www.youtube.com/watch?v=7xStNKTM3bE&list=PLP9IO4UYNF0WWmZpE3W33vVPRl2GvjEqz

La concatenación es el proceso mediante el cual se unen valores, generalmente strings, para formar una sola cadena de texto. En JavaScript, este proceso se realiza comúnmente utilizando el operador +.

Es posible escribir código utilizando editores de texto simples como el bloc de notas. Sin embargo, existen herramientas especializadas como [Visual Studio Code](https://code.visualstudio.com/ "code.visualstudio.com/") o [Cursor](https://cursor.com/ "cursor.com"), que ofrecen funcionalidades adicionales como resaltado de sintaxis, autocompletado y herramientas de depuración que mejoran la experiencia de desarrollo.

<img src="https://i.ytimg.com/vi/H7LwUj2zlhA/maxresdefault.jpg">

*Imagen Tomada De: https://www.youtube.com/watch?v=H7LwUj2zlhA*










---










## Instalación y uso básico de Visual Studio Code para programar

Un editor de código es una herramienta diseñada para escribir y mantener código fuente de manera eficiente. Existen múltiples opciones como [Visual Studio Code](https://code.visualstudio.com/ "https://code.visualstudio.com/"), [Sublime Text](https://www.sublimetext.com/ "https://www.sublimetext.com/") y [Notepad++](https://notepad-plus-plus.org/ "https://notepad-plus-plus.org/"), cada una con características orientadas al desarrollo de software.

**Lecturas Recomendadas:**

* Editor vs IDE by EDTeam: https://ed.team/blog/editor-vs-ide-que-usar-para-programar

* Editor de Código Fuente by Wikipedia: https://es.wikipedia.org/wiki/Editor_de_c%C3%B3digo_fuente

* Editores de Código by MDN: https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors

Aplicaciones de redacción de texto como Microsoft Word no son adecuadas para programar, ya que modifican el contenido con formato invisible y no respetan la sintaxis ni la estructura requerida por los lenguajes de programación.

Los editores de código identifican distintos elementos del lenguaje y los muestran con colores específicos para facilitar la lectura y comprensión. Estas ayudas visuales no afectan el funcionamiento del código y pueden variar entre editores.

Visual Studio Code es un editor de código multiplataforma que permite escribir, ejecutar y depurar programas. Su instalación es sencilla y, una vez configurado, ofrece herramientas como resaltado de sintaxis, gestión de archivos y extensiones que mejoran la productividad.

<img src="https://kinsta.com/es/wp-content/uploads/sites/8/2019/11/fragmento-codigo-html.jpg">

*Imagen Tomada De: https://kinsta.com/es/blog/editores-html-gratuitos/*

Existen diferentes editores y entornos de desarrollo que cumplen funciones similares. La elección del editor depende de las preferencias del desarrollador, ya que todos permiten trabajar con los mismos archivos de código.

El sistema operativo no condiciona el proceso de programación, ya que el código fuente es texto. Un mismo archivo puede ser creado y ejecutado en distintos sistemas siempre que se utilicen las herramientas adecuadas.

La extensión de un archivo indica al editor y al sistema cómo debe interpretarse su contenido. Usar la extensión correcta es fundamental para que el editor reconozca el lenguaje y aplique las reglas de sintaxis correspondientes.

Las carpetas permiten estructurar y organizar los archivos de un proyecto. Una correcta organización facilita el mantenimiento, la navegación y la comprensión del código.

El PATH es una variable del sistema que indica dónde buscar programas ejecutables. Su correcta configuración permite que la terminal y editores como Visual Studio Code ejecuten comandos y herramientas desde la línea de comandos sin especificar rutas completas.

Visual Studio Code utiliza colores para diferenciar elementos del código, como etiquetas HTML, símbolos y texto. Estos colores son arbitrarios y no forman parte del código en sí; su función es servir como apoyo visual para el desarrollador.

Los errores en el código suelen resaltarse en color rojo dentro del editor. Esta funcionalidad permite identificar problemas de sintaxis o estructura de forma rápida durante el desarrollo.

<img src="https://raw.githubusercontent.com/usernamehw/vscode-error-lens/master/img/demo.png">

*Imagen Tomada De: https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens*

---

La etiqueta **charset** define la codificación de caracteres utilizada en un documento HTML. Permite al navegador interpretar correctamente el texto contenido en la página.

UTF-8 es un estándar de codificación de caracteres ampliamente utilizado en la web. Permite representar una gran variedad de símbolos y alfabetos, garantizando compatibilidad entre distintos sistemas y navegadores.

Los atributos son propiedades adicionales que se asignan a las etiquetas HTML para modificar su comportamiento o proporcionar información extra. Se escriben dentro de la etiqueta de apertura y siguen una estructura clave-valor.

**Lecturas Recomendadas:**

* Contenido de Metadatos by MDN: https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata

* Atributos en HTML: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Attributes











---











## Declaración y Uso Básico de Variables en JavaScript

En JavaScript, una variable se declara utilizando la palabra clave let. Esta instrucción permite crear un espacio en memoria donde se almacenará un valor que puede cambiar durante la ejecución del programa.

**Lecturas Recomendadas:**

* Let en JS by MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let

* Let en JS by w3schools: https://www.w3schools.com/js/js_let.asp

* Diferencias entre var, let y const en JS by freecodecamp: https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/

* Cómo se declara una variable by EDteam: https://ed.team/blog/que-es-y-como-se-declara-una-variable

Al declarar una variable, el sistema asigna un espacio en la memoria RAM para almacenar su valor. Este almacenamiento es temporal y existe únicamente mientras el programa se encuentra en ejecución.

Una variable es un contenedor que almacena datos para ser utilizados posteriormente en el código. Permite guardar información, reutilizarla y modificarla según la lógica del programa.

El signo = se utiliza para asignar un valor a una variable. No representa una comparación, sino una instrucción que indica que el valor ubicado a la derecha debe almacenarse en la variable definida a la izquierda.

Las comillas dobles (" ") se utilizan para definir cadenas de texto en JavaScript. Todo valor contenido dentro de comillas es interpretado como texto y no como un valor numérico o una expresión lógica.

**Lectura Recomendada:**

* Strings en JS by MDN: https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/Strings

<img src="https://www.apinem.com/wp-content/uploads/2024/08/ejemplo-redeclaracion-variable-var-javascript.png">

*Imagen Tomada De:  https://www.apinem.com/variables-en-javascript/*

prompt es una función integrada de JavaScript que permite solicitar información al usuario mediante una ventana emergente. El valor ingresado por el usuario es devuelto al programa para su posterior uso.

**Lectura Recomendada:**

* Prompt en JS by MDN: https://developer.mozilla.org/es/docs/Web/API/Window/prompt

El valor retornado por la función prompt puede ser asignado a una variable. Esto permite almacenar la información ingresada por el usuario y utilizarla dentro de la lógica del programa.

Por defecto, los valores obtenidos mediante prompt son tratados como cadenas de texto. Para realizar operaciones numéricas, es necesario convertir explícitamente estos valores a tipos numéricos, ya que trabajar con datos sin validar o convertir correctamente puede generar errores lógicos y representar un riesgo de seguridad.

Lectura Recomendada: 

* parseINT en JS by MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt

---