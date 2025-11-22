# Introducción a la Terminal y Línea de Comandos

En esta sección encuentras mis apuntes sobre cómo utilizar la terminal (**BASH**) como una herramienta fundamental para interactuar directamente con el sistema operativo. A través de la línea de comandos podrás navegar entre carpetas, manipular archivos, gestionar permisos, entender procesos y emplear herramientas esenciales como grep, curl y otras utilidades clave.

También cómo crear alias, personalizar shell y optimizar el flujo de trabajo para mejorar la eficiencia al trabajar con proyectos, servidores y entornos de desarrollo. Esta introducción es una base sólida para comprender cómo funciona realmente el sistema desde dentro y cómo sacarle el máximo provecho a la terminal.

>Terminal: Es una herramienta que permite comunicarnos directamente con el sistema operativo mediante texto, en lugar de usar ventanas, botones o menús.

>Linea de Comandos: Es el espacio dentro de la terminal donde escribimos instrucciones (Comandos) para que el sistema los ejecute.

>En lugar de hacer clic, escribimos órdenes como crear carpetas, mover archivos, instalar programas o revisar procesos. Esto nos da más control, rapidez y precisión, especialmente al trabajar con programación, servidores y sistemas avanzados.

>Profesor: Enrique Devars





---





## Tabla de Contenido

1. [Ventajas de Dominar la Terminal de Comandos para Profesionales](#ventajas-de-dominar-la-terminal-de-comandos-para-profesionales)
2. [Qué es una Terminal y Cómo Funciona con Comandos Básicos](#qué-es-una-terminal-y-cómo-funciona-con-comandos-básicos)
3. [Instalación de terminal Bash en Windows usando WSL](#instalación-de-terminal-bash-en-windows-usando-wsl)
4. [Comandos básicos de terminal para principiantes](#comandos-básicos-de-terminal-para-principiantes)
5. [Navegación entre directorios en Linux con Comandos de Terminal](#navegación-entre-directorios-en-linux-con-comandos-de-terminal)
6. [Comandos para Explorar y Manipular Archivos de Texto en Terminal](#comandos-para-explorar-y-manipular-archivos-de-texto-en-terminal)
7. []()
8. []()
9. []()
10. []()





---




## Ventajas de Dominar la Terminal de Comandos para Profesionales

[Toy Story](https://es.wikipedia.org/wiki/Toy_Story "Wikipedia - Toy Story") pudo no haber sido la pelicula por problemas con la terminal, ellos utilizaban un sistema de archivos compartidos por errores de uno de los administradores del sistema se empezaron a borrar cada uno de los archivos en cadena **simplemente por ejecutar mal un comando**, pero menos mal habia un respaldo y se pudo mostrar esta pelicula al mundo.

Los verdaderos profesionales, dominan el entorno, entienden que es lo que sucede "bajo el capo" y para ello utilizan la línea de comandos dentro de la terminal porque te da: Control, Presición, Fiabilidad acerca de lo que esta sucediendo en tu sistema.

Al usar la terminal no se hacen clics, se dan ordenes.

Por lo que la terminal no es una reliquia del pasado, es la herramienta profesional por excelensia en los técnicos en programación

**¿Qué se gana al aprenderlo?**

1. **Velocidad y Presición:** Se automatizara en unos segundos lo que con clicks tomaria horas a través de interfaces gráficas.

2. **Conocimiento profundo:** Se conocerá cómo funciona el sistema operativo y cómo se mueve la información dentro de el.

3. **Acceso a herramientas avanzadas:** Git para control de versiones. Docker en gestión de contenedores. Htop para monitoreo eficiente de procesos. Nmap en analítica de redes y sistemas. y demas herramientas que sólo existen en la terminal.

4. **Personalización Extrema:** Se va a poder crear los SCRIPTS propios, flujos de medida de trabajo y convertirse en el arquitecto de tu entorno digital. La terminal es para todos: Windows, Linux, Mac e incluso tu celular puede que tenga una terminal y no lo sabias.

>Si se busca un buen trabajo como en Compañías como Google, Amazon, Facebook, Corey Cold y Red Hat destacan: El uso de la terminal debe ser como respirar, emplean profesionales con dominio total de la terminal. consideran esta habilidad básica e imprescindible.

>Se puede hacer una automatización de tareas repetitivas. Acortas considerablemente el tiempo dedicado a procesos manuales.

El no usar la terminal genera dependencia a herramientas que nos limitan, pero si se aprende se hará un salto enorme en el dominio técnico.

<img src="https://www.profesionalreview.com/wp-content/uploads/2021/09/Terminal-de-comandos-34.png">

*Imagen Tomada De: https://www.profesionalreview.com/2021/10/06/que-es-terminal-windows-10/*

Lectura Recomendada: https://labex.io/linuxjourney




---




## Qué es una Terminal y Cómo Funciona con Comandos Básicos

¿Qué es una terminal? Es una pregunta que vamos a ir resolviendo a lo largo de todo este documento.

La terminal es la que solemos ver usualmente en las peliculas de hacker donde escriben código y cosas magicas empiezan a suceder. (No esta muy alejado de la realidad.)

La terminal es una **Interfaz de Usuario** en la que se escribe una serie de comandos que nos va a permitir comunicarnos con el sistema operativo, es decir: Darle instrucciones a nuestra computadora a traves de comandos.

Las terminales pueden aparecer en varios lados, en un programa, en la web, pueden aparecer asi sin más... sin ni siquiera interfaz de usuario e incluso podría aparecer en nuestro celular si nos conectamos de una forma adecuada.

Para poder ejecutar la terminal debemos hacerlo mediante un programa llamado **SHELL** pues la que realmente hará la interpretación de estos comandos es la Shell, es un programa (normalmente compilado) que actúa como interfaz entre el usuario y el sistema operativo (Se encarga de la traducción). Por lo que permite al usuario interactuar con el sistema operativo a traves de comandos de texto.

Como por ejemplo: Copia un archivo, elimina un archivo, configuraciones de crear un proceso.

Aunque la mayoría de las terminales están asociadas con sistemas Linux y Unix, es posible emplearlas también en Windows mediante herramientas específicas como PowerShell o Bash a través del sistema WSL. La elección de la terminal dependerá del sistema operativo y del entorno de trabajo.

>Veremos la powershell

Como en mi dispositivo tengo un sistema Windows se utilizará un sistema emulado llamado **WSL** | Windows Subsystem Linux.

**La diferencia entre la terminal y la shell.**

>Si tambien tienes windows, oprime la tecla windows y busca "Powershell", ejecuta "Windows Powershell"

>Si vas al Visual Studio Code y oprimes el atajo Control + Ñ te abrira la terminal.

Una vez dentro de Powershell o en la terminal de VSCODE escribes: **dir**

<img src="https://static.platzi.com/media/user_upload/upload-c7a8f22f-a45d-49b4-abd4-f90bfed8c2ff.png">

Te mostrara todos los directorios que tengas en tu dispositivo, shell tiene sus propios comandos, pero no son tan utilizados a nivel global. La terminal que se utiliza globalmente y en todas partes es **BASH** que es la que se va a estar utilizando a lo largo de todos estos apuntes.

    En la mayoria de servidores windows se utiliza esta powershell

* PowerShell es una terminal específica para Windows que ofrece comandos únicos para este sistema operativo. Es utilizada principalmente en servidores Windows.

* la terminal Bash, frecuente en Linux y sistemas Unix, es ampliamente utilizada a nivel global y será explorada mediante emulación WSL en este repo.

El funcionamiento de una terminal se apoya en un programa llamado shell. Este programa interpreta los comandos que introduces y los traduce en instrucciones que el sistema operativo puede entender y ejecutar. La shell convierte estos comandos escritos en acciones concretas visibles en tu equipo.

Lo que conocemos por Terminal realmente involucra 3 conceptos clave: Terminal (interfaz), Shell y Línea de comandos.

<img src="https://www.cs.cornell.edu/courses/cs1110/2021sp/resources/images/example-powershell.png">

*Imagen Tomada De: https://www.cs.cornell.edu/courses/cs1110/2021sp/resources/shell-windows.html*




---



## Instalación de terminal Bash en Windows usando WSL

La mayoría de personas que comienzan en el mundo de la tecnología lo hacen desde un sistema operativo Windows. Por eso, en esta sección aprenderemos a instalar una terminal Bash en Windows utilizando WSL (Windows Subsystem for Linux).

Estos seran los pasos para instalar una terminal BASH en windows usando un sistema llamado Windows Subsystem for Linux.

WSL permite ejecutar un sistema operativo Linux dentro de Windows, sin máquinas virtuales ni configuraciones complejas. Gracias a esto, podemos usar una terminal real de Linux directamente desde nuestro equipo.

A continuación, instalaremos WSL y una distribución de Linux (en este caso Ubuntu) que incluye la shell Bash por defecto.

Sigue el enlace, haz la lectura y sigue los pasos: https://learn.microsoft.com/es-es/windows/wsl/install

>Cuando ejecutas la powershell con administrador, la dirección será PS C:\Windows\system32>

El comando wsl --install va a instalar WSL para luego instalar una distribución de linux llamada UBUNTU, la más usada del mundo.

Ubuntu es una distribución de linux basada en DEBIAN que ya trae por defecto la SHELL de BASH

>Estamos descargando ubuntu.

Si quieres administrar las distribuciones de linux que tienes, puedes usar el comando wsl -l

Con esto ejecutamos WSL (oprime tecla windows y busca WSL) y se debe crear un usuario con nombre y contraseña.

De hay ya tenemos BASH, ¿Cómo sabemos que tenemos BASH? basta con usar el comando echo $SHELL y debe aparecer algo como /bin/bash - Con esto sabemos que tenemos BASH en nuestra terminal con ubuntu mediante WSL

>Mac tiene su propia terminal con BASH, pero puede que hallan algunos comandos que no los tome porque no es un sistema linux completo sino mas bien UNIX





---




## Comandos básicos de terminal para principiantes

A continuación encontrarás los comandos más básicos y a la vez más útiles para empezar a explorar el sistema operativo desde la terminal. Con ellos podrás navegar, analizar información, listar archivos y entender mejor cómo funciona Bash.

> La mayoría de los comandos suelen ser abreviaciones de palabras completas.

* **whoami:** Muestra el nombre del usuario con el que estás actualmente autenticado.

* **pwd = print working directory:** Indica la ruta exacta del directorio en el que te encuentras.

> Cada usuario tiene su propio directorio home.

* **ls = list:** Lista el contenido del directorio actual.

> La mayoria de comandos reciben algo llamado options

* **ls (list):** Lista el contenido del directorio actual.

* ls -a: Le indicará al comando que muestre todos los archivos ya que pueden haber archivos visibles y no visibles, porque suelen haber archivos ocultos que normalmente son archivos de configuración.

    .bashrc es de configuración de la terminal de bash

### Opciones de los comandos (Flags)

* **ls -a:** Muestra todos los archivos, incluyendo los ocultos (los que empiezan con .), por ejemplo: .bashrc → Archivo de configuración de Bash.

* ls -l: Muestra los archivos en una lista detallada (permisos, tamaño, propietario, etc.). Solo incluye archivos visibles.



**Tambien podemos combinar las opciones.**

*** ls -la:** Lista todos los archivos (incluyendo ocultos) con información detallada. 

> (El orden de las opciones no importa.)

* **ls -al:** (Mostrara lo mismo que ls -la)

* **clear:** Cuando contamos con bastante información en nuestra pantalla y no nos interesa verla podemos utilizar este comando para "limpiar" la terminal. **Se puede oprimir tambien el atajo CONTROL + L**

> Con la flecha ↑ puedes navegar por el historial de comandos ya ejecutados.

* **echo:** Si yo quiero guardar algún texto en mi terminal como por ejemplo echo "hola mundo" que se usa usualmente para temas de scripting

* **--help:** Podemos visualizar que opciones tiene un comando pues la mayoria de comandos y sobre todo lo más utilizados suelen utilizar algo llamado --help. Se les conoce como flask en donde se pueden escribir sin ningún valor y otras veces pueden contener un valor. Por lo que otros comandos pueden recibir parametros para realizar actividades especificas y complejas.

**ls --help**

Entonces eso permitira mirar todos los comandos con los que se puede jugar mediante ls -- para luego combinarlos como por ejmeplo

    ls -lah

> Importante tener en cuenta que en la terminal todo texto que sea blanco son archivos

> Todo lo que venga con una d al inicio suelen ser directorios y generalmente los veras de color azul

---

A continuación **Comandos que son de utilidad en el sistema**

* uname -a: Para mirar la descripción del entorno donde se esta trabajando

* date: Para mirar la fecha

* man: viene de la palabra manual que nos permite el manual de cualquier comando como por ejemplo:

    man echo

Estos son solo los primeros comandos básicos. Aún quedan por explorar comandos de red, compresión, manipulación avanzada de archivos, y algunos incluso… para dibujar dragones 🐉

<img src="https://i.sstatic.net/cqags.png">

*Imagen Tomada De: https://askubuntu.com/questions/1389080/how-to-get-to-the-windows-desktop-in-wsl*

Lectura Recomendada: https://www.geeksforgeeks.org/linux-unix/linux-commands-cheat-sheet/




---



## Navegación entre directorios en Linux con Comandos de Terminal

¿Cómo movernos entre directorios? ¿Cómo movernos al rededor de la terminal?

Es fundamental recordar que lo que hace una shell o en general la terminal es permitirnos interactuar con el sistema operativo simplemente con comandos. Sin importar qué sistema operativo tenga el dispositivo (Windows, Mac, Linux, Android) va a tener carpetas y dentro de estas archivos. Para navegar entre estos elementos solemos dar clicks en una biblioteca/explorador de archivos y eso mismo **se puede hacer a traves de la terminal**

### CD / Change Directory

Todos los sistemas linux inician a traves de una ruta absoluta que la podemos iniciar con el simbolo slash o " / ", este simbolo representa lo que es el inicio de lo que es un sistema operativo linux.

* Un truco interesante puede ser: Cuando se quiere ingresar a un directorio y analizar las diferentes opciones a las que se puede ingresar, escriba cd / y oprima la tecla de tabulación.

Ahora por medio de la tabulación, vamos a tener un autocompletado. 

Si entonces vamos hacia la carpeta cd /home/ lo unico que habra dentro de esta es el usuario.

Para volver al lugar original que es el directorio principal, basta con escribir cd [nombre de usuario] /

**A lo visto anteriormente se le conoce como navegación entre rutas fijas**
 
* rutas relativa: Es decirle al sistema operativo que se regruese una o dos carpeta hacia atras.

La forma de ir hacia una el directorio principal de nuestro usuario es escribiendo: **cd ~**

### pushd .

Guarda una variable de un lugar a donde quisieramos volver de la forma más sencilla en donde se guarda y para ir hay nuevamente se puede escribir **popd**

Podemos pensar de la busqueda y navegación de archivos como un arbol. En Linux para visualizar la estructura de directorios de forma jerárquica, es como si fuera un árbol.

Como por ejemplo: 

<img src="https://static.platzi.com/media/user_upload/upload-3fe5cc12-ff90-457a-9f81-d3c529078f38.png">

Y por otro lado:

* .   Directorio actual
* ..  Directorio superior
* /   Raiz
* ~   Directorio home del usuario

usar el comando cd / nos posiciona directamente en el directorio raíz del sistema Linux, que aloja importantes carpetas del sistema tales como:

* bin 

* dev 

* lib64 

* root 

* home 





---



## Comandos para Explorar y Manipular Archivos de Texto en Terminal

Ahora empezando a ver usos más especificos de los comandos de la terminal y es que en cualquier sistema operativo existe una gran cantidad de archivos de texto plano y cuando estamos procesando analisis de datos o estamos descargando cierto tipo de archivos y no tenemos una interfaz gráfica. **Existen comandos que nos van a permitir explorar el contenido de estos archivos.

* **cat [nombre archivo]:** Por medio de cat se pueden mirar diferentes archivos de texto

* **less:** Para mirar de forma más pausada el archivo.

* **head:** Si quiero mostrar el contenido inicial de mis archivos pues... con head lo puedo realizar

* **tail:** Si quiero mostrar el contenido final de mis archivos pues... con tail lo puedo realizar

    Tanto Head como Tail tienen la opción -n que será la cantidad de lineas que puedo mostrar como por ejemplo: head -n 20 [nombre del archivo] para imprimir 20 lineas de ese archivo.

* **nl:** Sirve para saber cuantas lineas de texto contiene este archivo.

* **wc = word count:** Si se desea sabes cuantas palabras contiene ese archivo y si queremos ver que opciones tiene este, podemos poner man wc y entre una de las opciones esta wc --byte para que cuente cuantos bytes pesa. y puede ser por numero de caracteres, de líneas, númerm maximo de líneas.

* **awk:** Sirve para determinar diferentes elementos, y entre ellos puede ser imprimir ciertas columnas en archivos csv como por ejemplo por medio de awk '{print $1}' [nombre archivo] para imprimir sólamente la primera columna. O tal vez por medio de awk -F ',' 'print{$1, $3}' [nombre del archivo] 

Lectura Recomendada: https://dn790008.ca.archive.org/0/items/pdfy-MgN0H1joIoDVoIC7/The_AWK_Programming_Language.pdf

