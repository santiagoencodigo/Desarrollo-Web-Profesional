# Curso de Fundamentos de Ingeniería de Software

Cómo funciona Internet, las computadoras, los chips, la inteligencia artificial y los sistemas del mundo. Desde cero los fundamentos de la tecnología y el software moderno.

* <a href="https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/tree/main">Haz click aqui para volver al repositorio.</a>

## Tabla de Contenidos

- [1. Proceso de arranque y encendido de computadoras y móviles](#proceso-de-arranque-y-encendido-de-computadoras-y-móviles)

- [2. Cómo Funciona un Circuito Electrónico](#cómo-funciona-un-circuito-electrónico)

- [3. Qué es un bit y qué es un byte](#qué-es-un-bit-y-qué-es-un-byte)

- [4. Qué es un procesador (CPU) y la memoria  (RAM)](#qué-es-un-procesador-cpu-y-la-memoria-ram)

- [5. Qué es un Sistema Operativo](#qué-es-un-sistema-operativo)

- [6. Cómo Funciona Internet](#cómo-funciona-internet)

- [7. Cómo las Computadoras Guardan Datos](#cómo-las-computadoras-guardan-datos)

- [8. Cómo se Organizan los Archivos](#cómo-se-organizan-los-archivos)

- [9. Teléfonos y sus "System on a Chip" o SOC](#teléfonos-y-su-system-on-a-chip-o-soc)

- [10. GPUs: Procesadores Gráficos y de AI](#gpus-procesadores-gráficos-y-de-ai)

- [11. Qué es un Algoritmo y Qué es un Lenguaje de Programación](#qué-es-un-algoritmo-y-qué-es-un-lenguaje-de-programación)











---











<!-- Computación Básica -->


## Proceso de arranque y encendido de computadoras y móviles

### Power On Computer

_Oprimes el boton de prender tu computadora, empieza a fluir energia de la bateria de la computadora pasando por medio de cable a la fuente de energia de la ciudad._

Esta energia fluye a traves de la tarjeta madre, la electricidad es una onda asi mismo como la luz o el sonido. Esas ondas se miden en pulsos (Altos, Bajos), cuando tenemos un pulso alto es lo que nosotros consideramos un 1 y un pulso bajo es un 0, esos 1 y 0 es lo que nosotros llamamos bits.

> Bit: Unidad mínima de información (0 o 1).

<div style="display:flex; justify-content:center;">
<img src="https://codeguppy.com/blog/why-are-there-8-bits-in-a-byte/img/bit_byte.png" width="500px" height="150px">
</div>

*Imagen Tomada de: https://codeguppy.com/blog/why-are-there-8-bits-in-a-byte/*

<br>

La señal viaja del boton de encedido, hacia la tarjeta madre. Esta tarjeta madre tiene un chip especial de arranque llamado [BIOS (Basic Input Output System)](https://es.wikipedia.org/wiki/BIOS "Wikipedia - BIOS") que es el nombre antiguo, ahora las computadoras modernas lo llaman: [UEFI (Unified Extensible Firmware Interface)](https://es.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface "Wikipedia - UEFI")

En telefonos que tambien son computadoras esto tambien existe y se llama [Boot Loader.](https://es.wikipedia.org/wiki/Cargador_de_arranque "Wikipedia - Boot Loader / Gestor de Arranque")

>* En [Android](https://www.android.com/intl/es_es/ "android.com") el chip inicia un proceso llamado [PBL (Primary Boot Loader)](https://en.wikipedia.org/wiki/Booting_process_of_Android_devices "Wikipedia - Booting Process of Android Device")

>* En [Iphone](https://www.apple.com/co/iphone/ "apple.com/iphone") este mismo proceso se llama [Secure Rom.](https://support.apple.com/es-co/guide/security/secb3000f149/web "Explicación Proceso Arranque Iphone by Apple")


<!-- Especificación de Proceso de Encendido de un Dispositivo -->
---

### POST

Cuando cualquier boton de encendido es activado (Recibe Señal Electrica) activa un procedimiento interno que esta grabado en el Harware de los [transistores](https://es.wikipedia.org/wiki/Transistor "Wikipedia - Transistor") del chip, este proceso se llama **POST - (Power On Self Test)**

* **POST** prueba que todo en la computadora funcione y este conectado, enviando una señal de luz a todos los dispositivos 

>Dato Curioso: Cuanto al prender un dispositivo y este suene, puede ser el hardware avisando de fallos.

---

### DISK

Se busca en la memoria permantente del dispositivo las intrucciones de arranque que inicia el sistema operativo (Disco Duro)

* El disco duro en un computador común y corriente es una caja que puede ir por aparte mientras que en un celular es un chip que va al lado.

Dentro de este disco duro hay instrucciones hechas con 1 y  0 teniendo una lógica muy similar a la logica que se maneja en chip en atomos siendo la estructura atómica de los transistores siendo esto lo que nosotros conocemos como el codigo del software.

<img src="https://www.crucial.mx/content/dam/crucial/articles/pc-users/why-is-my-laptop-so-slow-/hard-disk-drive.jpg.transform/large-jpg/img.jpg" width="400px" height="280px;">

*Imagen Tomada de: https://www.crucial.mx/articles/pc-builders/what-is-a-hard-drive*

---

### Boot Loader

Una vez que el POST verifica el funcionamiento del componente en cada uno de los puertos (Teclado, mouse, pantalla, **hardware**, etc.), se inicia el sistema operativo.

>De un dispositivo todo lo que no sea con impulsos eléctricos de 1 y 0 es hardware, cuando ves 1 y 0 eso problemamente es software.

* HARDWARE - Hard = Duro = Tangible = Fisico

* SOFTWARE - Soft = Suave = No tangible = Digital = "Di" = 2 = (1, 0)

---

### Start the Operating System

El codigo esta organizado con 0 y 1 con un lenguaje que lo entiende uno de los circuitos electrónicos más importantes de la computadora, **la unidad central de procesamiento o CPU** 

La **CPU** es la que se encarga de realizar todos los procesos matemáticos que los BITS se conviertan en imagenes, sonidos  todos los procesos para los que utilizas tu telefono o computadora.

En la computadora es un chip independiente como el [Intel Core i7](https://www.intel.la/content/www/xl/es/products/sku/230490/intel-core-i713700-processor-30m-cache-up-to-5-20-ghz/specifications.html "Especificaciones Intel Core i7"), [AMD Ryzen](https://www.amd.com/es/products/processors/desktops/ryzen.html "amd.com/products"), [Apple M4](https://www.apple.com/co/newsroom/2024/05/apple-introduces-m4-chip/ "Newsroom chip M4 by Apple") - Estos son algunos nombres de chips de CPU. En los telefonos estos chips vienen integrados con otros chips que tiene en un mismo lugar: video, memoria, disco duro y hasta antenas.

Esto se le conoce como [System On A Chip = SOC](https://es.wikipedia.org/wiki/Sistema_en_un_chip "Wikipedia - SOC")

Ejemplos:

* [Snapdragon](https://es.wikipedia.org/wiki/Snapdragon "Wikipedia - Spandragon") diseñado y comercializado por [Qualcomm](https://www.qualcomm.com/snapdragon/overview "Overview Snapdragon by Qualcomm")

* [CHIP M1](https://es.wikipedia.org/wiki/Apple_M1 "Wikipedia - Apple M1") diseñado por [Apple](https://www.apple.com/co/newsroom/2020/11/apple-unleashes-m1/ "Newsroom about Apple M1 by Apple")

Son chips que contienen CPU y otros elementos alrededor y los dispositivos muy compactos asi como el [Mac Book Air](https://www.apple.com/co/macbook-air/ "Page Apple Macbook Air"), [Ray-Ban Meta Glasses](https://www.meta.com/us/es/ai-glasses/ray-ban-meta/ "Page Lentes con IA | Ray-Ban Meta") y otros dispositivos utilizan este tipo de chips.

Son estos 1 y 0 que salen del disco duro y llega a la CPU y empieza a ejecutar intrucciones matemáticas y ordenes de hardware que prenden el teclado, el mouse, la pantalla, etc...

**Son instrucciones nativas que interpreta un chip o CPU**, es un lenguaje que se le conoce como [Ensamblador o Assembler](https://es.wikipedia.org/wiki/Lenguaje_ensamblador "Lenguaje Ensamblador | Assembler") que son las intrucciones que utilizan los componentes internos de la CPU para mover los pulsos electricos de tal manera que genera imagen, voz, sonido.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/500px-Motorola_6800_Assembly_Language.png">

*Imagen Tomada de: https://es.wikipedia.org/wiki/Lenguaje_ensamblador*

La CPU ejecuta entonces ese <u>sistema de arranque de sistema operativo</u> enviando las estructuras de instrucciones y su uso a una memoria temporal de muy alta velocidad que se le conoce como **[Memoria RAM](https://es.wikipedia.org/wiki/Memoria_de_acceso_aleatorio "Wikipedia - Memoria RAM")**.

>*"Esto es como armar una ciudad desde 0 con sus planos."*

---

### Kernel

Al corazón del sistema operativo se le conoce como [KERNEL](https://es.wikipedia.org/wiki/N%C3%BAcleo_(inform%C3%A1tica) "Wikipedia - Kernel | Nucleo") y es el codigo en SOFTWARE que primero interpreta la CPU, que estructura en la memoria RAM, y que funciona como intermediario entre el software y el hardware.

<img src="https://linuxtldr.com/wp-content/uploads/2022/12/Working-of-kernel-1024x419.webp">

*Imagen Tomada de: https://linuxtldr.com/kernel/*

Cada vez que haces un click, ves algo en la pantalla, es kernel el que se encarga de realizar la traducción de las instrucciones que los ingenieros en software le dan en código para que los usuarios pasen acciones de la computadora al mundo real.

El kernel arranca los procesos de seguridad en el sistema operativo, es de esa forma es que una computadora pueda tener datos con multiples dueños, que es el sistema usuarios y contraseñas que por medio de llaves y acceso que descifran los datos privados de los usuarios.

<img src="https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/como_usar_windows_10/image/wcuenta_xl.png">

*Imagen Tomada de: https://edu.gcfglobal.org/es/como-usar-windows-10/que-son-las-cuentas-de-usuario-en-windows-10/1/*

El kernel tambien busca en el sistema operativo el proceso de arranque de la pantalla, esta son matrices de luz, llamados pixeles.

* [Procesador Serial](https://www-sciencedirect-com.translate.goog/topics/computer-science/series-processor?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc "Definition of Procesadores en Serie By Sciencedirect") que no es ideal para generar graficos, pero sí para realizar calculos matematicos.

* [Procesador Paralelo](https://en.wikipedia.org/wiki/Parallel_computing "Wikipedia - Computación Paralela") = GPU - Que rinde bastante bien con los graficos y que sirve para la inteligencia artificial y otros procesos especiales.

Las pantallas con cuadriculas de puntos de millones de puntos de luz y el sistema operativo decide de qué color es cada punto a una inmensa velocidad.

<img src="https://riverdi.com/wp-content/uploads/2019/05/What-determines-the-resolution-of-Riverdi-Displays-lcd-close-up.png">

*Imagen Tomada de: https://riverdi.com/es/blog/que-determina-la-resolucion-de-las-pantallas-riverdi*

Debido a la diversidad de lo que pueden ser los dispositivos debido a que se pueden utilizar por medio de trackpack, mouse, teclado, tactil y demas... Los creadores de hardware crearon un manual de uso para todos los dispositivos en general y ese manual se expresa en codigo y a ese software se conoce como **[DRIVERS](https://es.wikipedia.org/wiki/Controlador_de_dispositivo "Wikipedia - Drivers")**, todos los dispositivos suelen tener una gran cantidad de drivers ya preinstalados.

La tecla ENTER envia una señal de luz en donde la CPU busca la orden dentro del sistema operativo en donde encuentra en el disco duro un proceso [criptografico](https://es.wikipedia.org/wiki/Criptograf%C3%ADa "Wikipedia - Criptografía") matemático que descrifa el acceso con tu contraseña y eso le da al kernel el acceso a tus datos privados. Asi es como funciona la seguridad en nuestros dispositivos, y lleva funcionando asi por más de 50 años. 

Todos los dispositivos o computadoras tienen estos sistemas de arranque, operativos, kerners, **todos los dispositivos funcionan exactamente igual**.

<img src="https://www.thenocgroup.com/wp-content/uploads/2023/03/dispositivos_ectronicos_thenoc.jpg">

*Imagen tomada de: https://www.thenocgroup.com/dispositivos-electronicos/*

<!-- Importante. -->

>Este conocimiento es totalmente importante para cualquier persona que quiera ser profesional que aspiran a desarrollar software, a ser ingenieros de software, a crear codigo, a crear su carrera en la industria de la tecnologia.

>¿Te imaginas crear código para construir código?

>¿Te imaginas el proceso para crear un sistema operativo?

**Por lo que en resumen:**

1. Power On Computer (Encendido): Al encender la computadora, la fuente de alimentación suministra energia a los componentes (CPU, RAM, placa base, etc.).

2. POST (Power On Self Test): La BIOS o UEFI ejecuta el POST, un diagnóstico que verifica el hardware básico y si encuentre errores (Ej: Ram Defectuosa) emite pitidos o códigos en la pantalla.

3. Bios busca en el disco (DISK): Una vez el POST es exitoso, la BIOS busca un dispositivo de arranque (disco duro, USD, USB) según el orden configurado en el Boot Priority. Todo esto para encontrar el Boot Loader.

4. Carga del Boot Loader en RAM: La BIOS carga el Boot Loader (ej: Windows Boot Manager) desde el disco a la RAM, ya que la GPU solo ejecuta intrucciones desde la RAM.

5. Carga del Sistema Operativo: El Boot Loader carga el nucleo (kernel) del sistema operativo desde el disco a la RAM, el sistema operativo toma control, inicializa los controladores (drivers) y lanza la interfaz de usuario.

<div style="display:flex; justify-content:center;">
<img src="https://static.platzi.com/media/user_upload/upload-d6b47c52-1ce8-4559-95fc-d6aff5f59134.png" width="400px" height="500px">
</div>











---











## Cómo Funciona un Circuito Electrónico

[Los circuitos electronicos](https://es.wikipedia.org/wiki/Circuito "Wikipedia - Circuito Electrónico/Electrico") son la base de nuestra tecnología moderna, funcionan controlando el [flujo de la electricidad](https://es.wikipedia.org/wiki/Corriente_el%C3%A9ctrica "Wikipedia - Flujo/Corriente de la Electricidad") siendo este el movimiento de electrones en un medio conductor, como un cable.

La energia se produce en plantas de energia y se transmite por cable hacia la casa de cada persona o se guarda en baterias.

<div style="display:flex; justify-content:center;">
<img src="https://electrolomas.com/wp-content/uploads/2023/02/Descubriendo-los-circuitos-electronicos-flexibles-Electrolomas.jpg" width="400px" height="300px">
</div>

>Podemos pensar del flujo de electricidad como el flujo de agua en un tubo. Y este fluye desde el polo negativo (-) hacia el polo positivo (+) 

* El [voltaje](https://es.wikipedia.org/wiki/Tensi%C3%B3n_(electricidad) "Wikipedia  Tensión | Voltaje") es equivalente a la presión del agua en un tubo y mide la cantidad de energia que fluye desde la fuente, una tipica bateria AA genera 1.5 Voltios, una Bateria de 9 Voltios... Genera 9 Voltios, los enchufes de hogar generan de 110 a 220 Voltios.

* [Amperaje](https://es.wikipedia.org/wiki/Amperio "Wikipedia - Amperaje") es equivalente a la cantidad de agua que pasa siendo distinto a la presión, por lo que dependiendo de esta puede cargar más rápido o no una bateria. **El voltaje hace que la electricidad fluya y ese flujo es el amperaje.**

La electricidad se puede convertir en luz con una lampara o tambien, con una pieza electronica llamada LED *(Se pueden sobrecalentar si reciben demasiada corriente)* Por lo que para controlar esa cantidad de voltaje, hay un componente electronico que podemos utilizar llamado [resistencia](https://es.wikipedia.org/wiki/Resistencia_el%C3%A9ctrica "Wikipedia - Resistencia Eléctrica").

La resistencia reduce el amperaje y absorbe esa energia, liberandola como calor. Por lo que, cuando un dispositivo se calienta es la resistencia y otros componentes electrónicos liberando un alto flujo de corriente.

La resistencia mide cuanto puede reducir del amperaje con una unidad de medida de oposición al paso de la corriente llamada [Ohmios](https://es.wikipedia.org/wiki/Ohmio "Wikipedia - Ohmio")

<div style="display:flex; justify-content:center;">
<img src="https://img.freepik.com/vector-premium/led-resistencia-serie-conectados-bateria-9v-circuito-electrico-sencillo-lecciones-fisica_786898-12.jpg" width="400px" height="300px">
</div>

<br>

**Imagina un motor eléctrico básico:**

1. colocamos un [imán](https://es.wikipedia.org/wiki/Im%C3%A1n "Wikipedia - Imán") permanente (o dos, para crear un campo magnético fuerte) y un [conductor](https://es.wikipedia.org/wiki/Conductor_el%C3%A9ctrico "Wikipedia - Conductor Eléctrico") (como un anillo o bobina de metal) que lleva corriente eléctrica.

2. Cuando la corriente fluye por el conductor, genera su propio campo magnético según la [ley de Ampère](https://es.wikipedia.org/wiki/Ley_de_Amp%C3%A8re "Wikipedia - Ley de Ampere"), convirtiéndolo en un electroimán temporal. 

3. Este campo interactúa con el del imán permanente, produciendo una [fuerza de Lorentz](https://es.wikipedia.org/wiki/Fuerza_de_Lorentz "Wikipedia - Fuerza de Lorentz") que causa repulsión o atracción entre ellos. Esta fuerza genera un torque (fuerza rotacional) que hace girar el anillo alrededor de un eje central.

4. Para mantener el movimiento continuo y evitar que se detenga al alinearse los campos, usamos un [conmutador](https://voltione.com/pages/que-es-conmutador "Qué es un conmutador by Voltione") (un interruptor rotatorio) que invierte la dirección de la corriente periódicamente. 

5. Así, capturamos ese movimiento circular en el eje, convirtiendo la energía eléctrica en mecánica y asi tenemos un motor eléctrico.

Las piezas moviles de un brazo electrico utilizan otro motor de presición llamado [SERVO](https://es.wikipedia.org/wiki/Servomotor "Wikipedia - Servomotor")

<div style="display:flex; justify-content:center;">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Rotterdam_Ahoy_Europort_2011_%2814%29.JPG/1200px-Rotterdam_Ahoy_Europort_2011_%2814%29.JPG" width="400px" height="300px">
</div>

*Imagen tomada de: https://es.wikipedia.org/wiki/Motor_el%C3%A9ctrico*

La electricidad se convierte en sonido cuando haces vibrar una membrana al ritmo de una onda electrica que esto se representa como un audio, a esas membranas las llamamos audifonos, parlantes, bocinas.

Un tocadiscos transforma la música grabada en un disco de vinilo que tiene tallado en forma de relieve la información sonora en patrones ondulados. Un brazo movido por un servo sostiene una aguja recorre el relieve del disco y los convierte en una honda electrica, que esto mismo es lo que mueve la membrana de un parlante, a la vez un LED que se enciende cuando el dispositivo esta encendido. Asi nosotros combinamos una serie de componentes para crear un producto asi como un [tocadiscos.](https://es.wikipedia.org/wiki/Tocadiscos "Wikipedia - Tocadiscos")

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Tocadiscos.JPG/500px-Tocadiscos.JPG">

*Imagen Tomada de: https://es.wikipedia.org/wiki/Tocadiscos*

Un [NTC/PTC thermistor](https://www.youtube.com/watch?v=CHBDg1pOFzs "Video Explicación de NTC y PTC") es una resistencia que puede cambiar de acuerdo a la temperatura y asi funcionan los [termostatos](https://es.wikipedia.org/wiki/Termostato "Wikipedia - Termostato") y los [termometros digitales.](https://es.wikipedia.org/wiki/Term%C3%B3metro "Wikipedia - Termometro") 

Para prender un dispositivo utilizamos un [switch o un interruptor](https://es.wikipedia.org/wiki/Interruptor "Wikipedia - Switch | Interrumptor") que une dos fragmentos de cable con un pequeño punto de metal por el que el flujo de corriente puede fluir o no. Por lo que si necesitamos determinar que componentes encender de acuerdo a ciertas condiciones, necesitamos manipular los pasos de la corriente de forma automatica y eso lo hacen los **[transistores](https://es.wikipedia.org/wiki/Transistor "Wikipedia - Transistor")** que de acuerdo a ciertas condiciones estos deciden cuando encender o apagar otros componentes.

La combinación de un monton de transistores es lo que le dan a los procesadores o microchips la capacidad de hacer operaciones matematicas.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Transistorer_%28cropped%29.jpg/500px-Transistorer_%28cropped%29.jpg">

*Imagen Tomada de: https://es.wikipedia.org/wiki/Transistor*

Si queremos guardar el resultado de estas operaciones, utilizamos una memoria, es un componente que almacena electricidad de forma temporal mientras halla un flujo de electricidad continua y a esto se le llama [condensador](https://es.wikipedia.org/wiki/Condensador_el%C3%A9ctrico "Wikipedia - Condensador Elétrico").

Y un grupo grande de condensadores es la forma en la que funciona la memoria RAM de una computadora, cuando apagas al computadora esa memoria desaparece.

<img src="https://concepto.de/wp-content/uploads/2018/09/RAM1-e1537470543923-800x400.jpg">

*Imagen Tomada de: https://concepto.de/memoria-ram/*

Si queremos que la memoria persista cuando la electricidad se va, utilizamos otros componentes que usan reacciones fisicas y magneticas de ciertos materiales para guardar información sin electricidad llamados discos duros. Lo más reconocidos hoy que no tienen partes moviles se les conoce como discos de estado solido = Solid State Drive = SSD

<img src="https://www.aurum-informatica.es/images/easyblog_articles/93/b2ap3_large_disco-duro-daado.jpg">

*Imagen Tomada de: https://www.aurum-informatica.es/blog/disco-duro-danado-alertan-fallos*

Lo que conocemos como USB, por dentro es un disco de estado solido.

En las memorias cuando un condensador esta lleno se le conoce como 1 y cuando esta vacio representa un 0. Es decir que los condensadores convierten la energia eléctrica en bits, estos BITS es la base del cómo representamos información de forma digital.

Estos 1 y 0 cuando se organizan en conjuntos o estructuras que los procesadores entienden y los convierten en instrucciones. A esto le llamamos Software.

Estos BITS almacenados en memoria viaja hacia el procesador a traves del circuito para ser ejecutado. Y como todo, entonces esto es la manipulación de flujo de electrones.


<img src="https://centros.edu.xunta.gal/cafi/aulavirtual/pluginfile.php/38354/mod_page/content/1/Tema_2/Imagenes/placabase.jpg">

*Imagen tomada de:https://centros.edu.xunta.gal/cafi/aulavirtual/mod/page/view.php?q=aulavirtual2%2fmod%2fpage%2fview%2ephp&id=24983*











---











## Qué es un bit y qué es un byte

### Ondas

La luz es una onda que fluctúa de arriba hacia abajo como la ecuación del coseno o el seno en [trigonometría](https://es.wikipedia.org/wiki/Trigonometr%C3%ADa "Wikipedia - Trigonometría") dependiendo de la longitud de esa honda la podemos ver o no.

<img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%95%E0%B8%B8%E0%B9%89%E0%B8%A1%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4.gif">

*Imagen Tomada de: https://es.wikipedia.org/wiki/Frecuencia*

El mapa de longitudes de onda se le llama [espectro electromagéntico](https://es.wikipedia.org/wiki/Espectro_electromagn%C3%A9tico "Wikipedia - Espectro Electromagnético"). Las ondas de radio que utilizan los telefonos, los audifonos [bluetooth](https://es.wikipedia.org/wiki/Bluetooth "Wikipedia - Bluetooth"), el wifi o la señal del televisor, tambien es luz sólo que es invisible a nuestros ojos.

* La luz visible la detiene los objetos físicos

* La luz la refleja un espejo

* La luz traspasa el vidrio porque es trasparente.

Para las [ondas de radio](https://es.wikipedia.org/wiki/Ondas_de_radio "Wikipedia - Ondas de Radio"), algunas tienen una amplitud muy grande, por lo que muchos objetos resultan prácticamente trasparentes, permitiendo que sean atravesados. De esta manera, una antena puede captar una señal de radio incluso si está detrás de una pared, ya que estas ondas las atraviesan y luego el circuito convierte esta señal en electricidad.

<img src="https://conectad.es/images/2019/04/antenas-lte-4g.jpg">

*Imagen Tomada de: https://conectad.es/antenas-lte-4g/*

La humanidad descubrió que con esas [vibraciones](https://es.wikipedia.org/wiki/Vibraci%C3%B3n "Wikipedia - Vibraciones"), si las hacemos conectar con una membrana y la hacemos vibrar, la vibración de la membrana es equivalente a sonido. *Así mismo funcionan las radios.*

Podemos observar cómo se comporta una onda cuando le colocamos agua sobre la superficie de un parlante: al reproducir sonido, las vibraciones del aire se transmiten al agua, formando patrones visibles de movimiento.

Video Recomendado: https://www.youtube.com/watch?v=uENITui5_jU

---

### Bits

En un [circuito eléctrico](#cómo-funciona-un-circuito-electrónico), los bits son 0 y 1 que se representan utilizando niveles de[ voltaje](https://es.wikipedia.org/wiki/Tensi%C3%B3n_(electricidad) "Wikipedia - Voltaje | Tensión"). Un nivel alto de voltaje (5 voltios) representa un 1 y un nivel bajo de voltaje (0 voltios) representa un 0.

Este tipo de comunicación **no surgió de la nada:** fue el resultado de décadas de experimentación y comprensión de cómo controlar el flujo de electricidad.

Esas transiciones a través de niveles de voltaje van a ocurrir en intervalos de tiempo muy precisos ([Segundos](https://es.wikipedia.org/wiki/Segundo "Wikipedia - Segundo"), [Milisegundos](https://es.wikipedia.org/wiki/Milisegundo "Wikipedia - Milisegundos") e incluso [Nanosegundos](https://es.wikipedia.org/wiki/Nanosegundo "Wikipedia - Nanosegundo")) **el qué tan chiquito es este intervalo de tiempo depende de la velocidad del sistema.** Esta misma velocidad es la velocidad de los [procesadores](https://es.wikipedia.org/wiki/Unidad_central_de_procesamiento "Wikipedia - CPU | Unidad Central de Procesamiento").

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/AnalogClockAnimation2_3hands_1h_in_realtime.gif">

*Imagen tomada de: https://es.wikipedia.org/wiki/Segundo*

El [telégrafo](https://es.wikipedia.org/wiki/Tel%C3%A9grafo "Wikipedia - Telégrafo") fue el primer sistema de la humanidad que utilizaba pulsos eléctricos para enviar un mensaje que en vez de 0 y 1, utilizaban una señal corta y otra más prologada, como un tono corto ( **.** ) y un tono largo ( **-** ) .

Todo esto con un código en donde cada letra correpondia a cierto grupo de tonos. A esto se le conoce como [código morse.](https://es.wikipedia.org/wiki/C%C3%B3digo_morse "Wikipedia - Código Morse")

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/International_Morse_code.png">

*Imagen Tomada de: https://es.wikipedia.org/wiki/C%C3%B3digo_morse*

En una computadora que utiliza [micro chips](https://es.wikipedia.org/wiki/Micro_Chips "Wikipedia - Micro Chips") para procesar voltajes precisos que se representan en 0 y 1 se decidió crear un sistema en donde una serie de numeros corresponde a una serie de letras y a esto se le llama [la tabla ASCCI.](https://es.wikipedia.org/wiki/ASCII "Wikipedia - ASCCI")

>Anteriormente para escribir @ se tenia que escribir con alt + 64 pues el signo " @ " corresponde al numero 64 de la tabla ASCCI

>Visto en la lectura: [Como Funciona Internet y las computadoras](https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/Docs/1.%20Introducci%C3%B3n%20a%20la%20Web%20Historia%20y%20Funcionamiento%20de%20Internet.md#traducci%C3%B3n-de-texto-a-binario-usando-c%C3%B3digo-ascii)

**¿Cómo tranformamos los pulsos eléctricos en esas letras?**

Los seres humanos contamos en base 10 por una razón muy simple: tenemos 10 dedos en las manos. Desde niños aprendemos a contar del 1 al 9, y cuando se nos acaban los dedos, empezamos otra vez, agregando un nuevo digito, Así nacen el 10, el 11, el 12... y cuando llegamos al 20, repetimos el proceso (30, 40, 50...). Este ciclo se repite infinitamente.

Sin darnos cuenta, construimos todo un sistema númerico a partir de nuestras propias manos.

**Esto es tan normal que no pensamos que pueden haber alternativas**

En programación nosotros utilizamos varias bases por ejemplo:

* [Hexadecimal](https://es.wikipedia.org/wiki/Sistema_hexadecimal "Wikipedia - Hexadecimal"): Que son una serie de numeros que van del 0 al 15 en donde: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, F = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14, 15.

* [Binario](https://es.wikipedia.org/wiki/Sistema_binario "Wikipedia - Sistema Binario | Sistema Díatico"): es solamente 0 y 1, en donde a partir del orden que tenemos de estos numeros podemos representar grandes cantidades de datos.

un [BYTE](https://es.wikipedia.org/wiki/Byte "Wikipedia - Byte") es un conjunto de 8 numeros en donde cada uno de los numeros podemos pensarlo como una potencia:

    128, 64, 32, 16, 8, 4, 2, 1 = 1, 1, 1, 1, 1, 1, 1, 1 = 255

Por lo que tenemos 255 combinaciones diferentes de numeros, equivalentes con las 255 combinaciones de carácteres diferentes que se encuentran en la talba ASCCI e incluso tambien se representan carácteres que no son letras como el:

    00001101 = ENTER = Salto de interlinea en un archivo

Así mismo como estos BYTES representan letras, tambien pueden representar cálculos que debe hacer el procesador y es un estandar distinto que se le conoce como [Assembler | Ensamblador](https://es.wikipedia.org/wiki/Lenguaje_ensamblador "Wikipedia - Assembler | Ensamblador")

**¿Por qué un conjunto de 8 numeros y no 7, 6, 9?**

Hay muchas razones históricas relacionadas y conectadas directamente con una de las empresas que creo la computacion moderna llamada [IBM](https://www.ibm.com/mx-es "ibm.com"), pero en resumidas palabras los procesadores tienen 8 cables por dentro que hacen los calculos al mismo tiempo.

* Es la forma más barata y eficiente de prepararlos y esto es lo que hizo a que nos acostumbraramos a que fueran 8.

>Dato curioso: Los procesadores de la [unión soviética](https://es.wikipedia.org/wiki/Uni%C3%B3n_Sovi%C3%A9tica "Wikipedia - Unión Soviética") en los años 70 eran de 12 bits, 18 bits, 24 bits, o aveces 48 bits, [pero sus computadoras no eran compatibles con las de occidente.](https://es.wikipedia.org/wiki/Historia_de_la_inform%C3%A1tica_en_la_Uni%C3%B3n_Sovi%C3%A9tica "Wikipedia - Historia de la informática en la Unión Soviética")

---

Los bits estan en todas partes y posiblemente esten más presentes en nuestra vida de lo que usualmente creemos por ejemplo:

Una [dirección IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP "Wikipedia - Dirección IP") como 192.168.1.1 que es una combinación de 4 bytes para identifar una computadora dentro de una red y como cada uno de estos numeros esta dentro de un byte, no supera el numero del 255.

<img src="https://www.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/Public%20vs.%20local%20IP%20addresses%20(Signal)/Public-vs-local-IP-addresses.png?width=1320&name=Public-vs-local-IP-addresses.png">

Imagen Tomada de: https://www.avg.com/es/signal/public-vs-private-ip-address*

---

Una imagen es un grupo organizado de bytes en una cuadricula en donde cada punto de la cuadricula es un pixel en la pantalla. Por lo que los bytes determinan el color que tendra cada pixel y se define como la intensidad de brillo del color: Rojo, Verde y Azul que tiene cada pixel y asi se representa el color.

<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pixeles_de_telefono.jpg/250px-Pixeles_de_telefono.jpg">

*Imagen Tomada de: https://es.wikipedia.org/wiki/P%C3%ADxel*

---

Los [emogis](https://es.piliapp.com/emoji/list/ "piliapp.com/emoji") tambien son bytes y requieren 4 de estos en la tabla ASCCI y se conoce como un estandar llamado UTF

👾👾👾🛡🛡💻⌨🖱😁👨‍💻🤍🖤👨‍🎓📃🤖👽🧠

UTF = Unicode Transformation Format

En donde:

* UTF - 8 que requiere de 8 bits
* UTF - 16 que requiere de 16 bits
* UTF - 32 que requiere de 32 bits

Hay un [consorsio](https://es.wikipedia.org/wiki/Consorcio "Wikipedia - Definición Consorcio") que se encarga del estandar de lo que representa el conjunto de bits que se llama [UNICODE STANDART CONSORSIUM](https://www.unicode.org/consortium/consort.html "unicode.org/consortium"), todos los fabricantes de electrónica deben respetarlo para que nuestros sistemas puedan interoperar.

por eso mismo un 😂 (smile) es el mismo en un pc, en un celular, en un iphone **y no puede ser otra cosa.**

Cuando programas en un lenguaje de programación todas estas instrucciones se traducen a bytes de assembler, que el procesador entiende para ejecutar las operaciones y eso es lo que hacen los compiladores.











---











## Qué es un procesador (CPU) y la memoria (RAM)

**Si un dispositivo tiene software se puede programar**, y si se puede programar tiene una CPU. Hay CPUs en todas partes: En computadores, televisores, telefonos, cajeros, pantallas de automoviles.

> En todo lo que tenga una pantalla con software programable, hay una CPU. Estos protagonistas tecnológicos permiten ejecutar operaciones matemáticas, almacenar y gestionar información gracias a transistores y circuitos electrónicos.

<img src="https://static.platzi.com/media/user_upload/image-6402ac31-034f-4d21-9019-11e9784fbc9b.jpg">

CPU = Unidad Central De Procesamiento

Las computadoras procesan datos mediante la CPU (Unidad Central de Procesamiento), y almacenan la información temporalmente en una memoria RAM, un ejemplo claro de esto ocurre cuando asignamos variables y realizamos una operación matemática:

    A = 1
    B = 2
    C = A + B

Cuando razonamos cuanto vale la variable C, nuestro cerebro realiza un proceso mental para sumar los valores de A y B, de forma similar se puede pensar como la CPU en un computador, y el lugar en donde se guarda esa información la podemos pensar como una RAM.

> De forma analogica: Cuando vas a hacer la operación en un papel, el proceso pasa por tu cabeza, y tu al escribirlo en el papel es hay donde se guarda la información y esto es equivalente a la RAM


---


Las empresas más famosas que fabrican CPU: 



* [INTEL](https://www.intel.la/content/www/xl/es/homepage.html) Con procesadores como: INTEL con los procesadores [Xeon](https://www.intel.la/content/www/xl/es/products/details/processors/xeon.html), [Intel Core i7](https://www.intel.la/content/www/xl/es/products/sku/230490/intel-core-i713700-processor-30m-cache-up-to-5-20-ghz/specifications.html)

* [AMD](https://www.amd.com/es.html "Home Page AMD"): Con procesadores [Ryzen](https://www.amd.com/es/products/processors/desktops/ryzen.html "Ryzen Processors by AMD")



---



**Tambien hay marcas de CPU moviles**

> Muy recomendable abrir cada uno de los vinculos a continuación, hay todo un mundo por explorar pues existe demasiada historia por leer.

* [Apple](https://www.apple.com/co/ "Apple.com") fabrica CPUs que tienen nombres como [M1](https://www.apple.com/co/newsroom/2020/11/apple-unleashes-m1/ "Newsroom M1 by Apple") o la A1 y la [M2](https://www.apple.com/co/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/ "Newsroom M2 by Apple"), [M3](https://www.apple.com/co/newsroom/2023/10/apple-unveils-m3-m3-pro-and-m3-max-the-most-advanced-chips-for-a-personal-computer/ "Newsroom M3 by Apple"), M4.

> Me pareció interesante que al buscar me encontre con un nuevo concepto: **Microarquitectura**

<img src = "https://www.apple.com/newsroom/images/live-action/wwdc-2022/Apple-WWDC22-M2-chip-M1-chip-2up-220606_big.jpg.large_2x.jpg">

*Imagen Tomada De: https://www.apple.com/co/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/*

> Se me genera una serie de dudas: ¿Cual será el grupo de trabajo que se encarga de descubrir nuevas versiones?, ¿Será un grupo de cientificos de la computación?, ¿Cómo es su proceso para crear nueva tecnología?, ¿Cómo programaron/crearon esas maquinas litograficas?, ¿Quienes seran los personajes influyentes en este topico?

* [Huawei](https://consumer.huawei.com/co/ "Huawei.com") tiene su propia marca de [procesadores](https://www.xatakamovil.com/tag/procesadores-huawei)

* Existe una marca llamada [Snapdragon](https://www.xataka.com/componentes/qualcomm-snapdragon-8-elite-caracteristicas-precio-ficha-tecnica "Ficha Técnica Snapdragon Elite 7 by Xataka")

> Existen muchas marcas de CPUs



---



Por dentro, una CPU es una serie de transistores, de circuitos electrónicos que ejecutan operaciones matemáticas como sumar, restar, multiplicar y tambien mueven datos de la memoria, en donde los guarda, modifica o borra información.

**Cada operación pasa por un ciclo** que es el paso de la eléctricidad por el circuito de la CPU y a esos ciclos del procesador los llamamos **[HERTZ](https://es.wikipedia.org/wiki/Hercio "Hercios Concepto by Wikipedia")** y es de esta forma que nosotros medimos la velocidad de una procesador que son los ciclos por segundo que una CPU puede usar para ejecutar esas operaciones.

Si una CPU tiene 1 Mhz quiere decir que puede usar 1.000.000 ciclos por segundo para ejecutar operaciones

* M de mega = Millon

Si una CPU tiene 1Ghz quiere decir que puede usar 1.000.000.000 ciclos por segundo para ejecutar operaciones

* G de Giga = Mil Millones

Por lo que a más Hertz más corriente electrica fluye por el procesador y a más corriente más calor. Y sí hay más calor se puede quemar el chip.

<img src="https://upload.wikimedia.org/wikipedia/commons/5/59/FrequencyAnimation.gif">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Hercio*

Cuando tienes un chip y lo pones en la tarjeta madre de tu computadora casi siempre por encima se le agrega un ventilador porque los limites térmicos del chip son los que determinan los limites de velocidad del procesador.

A más caliente menos velocidad.

A más frio más corriente y por ende más velocidad.



---



**Al diseñar un chip se tienen en cuenta muchas cosas como:**

* La estructura de los transistores

* Las instrucciones.

* La disipación térmica del calor para poder hacerlos más veloces.

Las CPU y en general todos los chips estan hechos del mismo átomo, el silicio.

El silicio es un átomo que tiene 14 protones en el nucleo y por ende el átomo #14 en la tabla periodica y este se encuentra en toda parte porque de hecho, de silicio esta hecha la arena.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdTL-FF0b1CUCkihXYlSwr_rKvt37YFzgxw&s">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Silicio*

Si nosotros tomamos la arena del arena u otro tipo de arena especializada y la limpiamos, para fundirla en un sólo cristal. A Ese cristal nosotros lo conocemos como **Wafer de Silicio** que es arena cristalizada con la que construimos chips.

Para que la arena se convierta en chips, utilizamos la *herramienta más avanzada de la existencia humana*: **Lasers Litográficos**

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq4OZVW4_5G0QGpDxPold1GRZC3EPSTpzgjw&s">

*Imagen Tomada De: https://heidelberg-instruments.com/es/tecnologias-basicas/litografia-laser-sin-mascara/*

> [Laser Litográfico extremo ultravioleta](https://www.youtube.com/watch?v=St6i1zcvPZ8 "") - Parece de ciencia ficción

El cristal de silicio en forma de circulo conocido como oblea/wafer de silicio entra a una maquina llamada Laser Litrográfico extremo de ultravioleta, que esta maquina por dentro tiene un vacio, vacio como el del espacio.

Una vez dentro, un laser le dispara a una pequeña microscopica gota de [estaño](https://es.wikipedia.org/wiki/Esta%C3%B1o "Estaño By Wikipedia"), generando asi una serie de reflejos de luz laser.

Que luego un sistema de espejos con un liso absoluto en una estructura increiblemente fina rebotan hasta llegar a un laser hiperenfocado (Esta es la parte Extremo Ultravioleta) que atraviesa una mascara fotográfica, (Como el negativo de una fotografia vieja, en la parte de atras tiene un mapa o que tiene como plantilla o mascara) que es la estructura de como deben estar organizados los atomos de silicio para convertirse en transistores de electricidad que componen un circuito.

<img src="https://www.mrjlaser.com/Content/uploads/2023138497/20230531110728ebc38f0dd401422ab28c5e46b2e07c22.png?size=678x0">

*Imagen Tomada De: https://www.mrjlaser.com/news/asml-s-euv-lithography-the-world-s-only-laser-68059321.html*

La mascara refleja sobre la oblea y durante varias pasadas, el laser empieza a dejar una marca de la mascara de la estructura de transistores, luego se le pasa por unos quimicos que limpian todos los residuos del proceso como si estuvieran relevando una fotografia y eso va construyendo las estructuras átomicas como si fueran un edificio que terminan componiendo miles de millones de transistores que hacen posible una CPU.

Por lo que en una CPU moderna la distancia de transistor entre transistor es de 25 atomos de silicio, por lo que **la humanidad es capaz de mover distancias atomicas**

Y no es un circuito plano, es un circuito tridimencional como si fuera un rasca cielos gigantesco de transistores, en donde de esa forma se peuden empacar más transistores en una CPU. Por eso, pese a que sea pequeño puede ser incluso algo pesado para su tamaño.

<img src="https://i.blogs.es/9a98dc/transistor/650_1200.jpeg">

*Imagen Tomada De: https://www.xataka.com/componentes/transistores-pequenos-jamas-creados-estas-soluciones-para-miniaturizar-electronica-alla-2-nanometros*

Esos millones de transistores dentro de un chip es lo que hace posible que correr navegadores como en el que estas viendo mis apuntes en este momento, video juegos, videos o inteligencia artificial.




---



Muchas empresas construyen estas maquinas, pero sólo una construye la más avanzada: El laser extremo ultravioleta y toda su integración que la hace una compañia de holanda llamada ASML.

Pagina de ASML: https://www.asml.com/en

Lectura Recomendable: https://es.wikipedia.org/wiki/ASML

---

Sabiendo esto, **¿Qué es lo qué hace que una CPU sea más veloz?**

Una forma es agregarle muchos más transistores por lo que si quiero meterle más transistores, debo hacerlos más chiquitos, eso quiere decir que necesito laseres mucho más enfocados, con más contraste y eso es lo que hace [ASML](https://www.asml.com/en "asml.com"), por eso es tan importante la distancia que hay entre átomo y átomo.

Otra forma es hacerle pasar más corriente al circuito, más electricidad, el problema es que a más corriente, más calor, entonces hay que hacer un diseño que tenga una disipación termica más efectiva o colocarle mejor enfriamiento.

Otra técnica es que con la misma arquitectura colocar más nucleos, más procesadores pegados uno al otro, en donde en vez de hacer un proceso al tiempo, pueda hacer 2, 4, 8 procesos al tiempo y eso es lo que nosotros conocemos como nucleos.

En un WAFER/OBLEA no todos los chips quedan bien, pues muchas veces estos procesadores son hechos con una distancia atomica y puede que no queden perfectamente alineados. Despues del proceso de litografia, se realizan unos TEST y algunos nucleos no funcionan perfectamente bien, lo que hacen es vender el chip más barato... Por lo que:

* El intel core i3, intel core i7, y el intel core i5 son el mismo chip... lo que sucede es que en los i3, algunos nucleos fallaron. Y en los i7 ningún nucleo falló... y es de esa forma como venden las CPUs dependiendo de qué tanto falla o triunfa el proceso litografico del laser.

<img src="https://acf.geeknetic.es/imgw/imagenes/auto/2021/1/1/sgs-intel-core-i7-11700k-geekbench.jpg?f=webp">

*Imagen Tomada De: https://www.geeknetic.es/Noticia/20833/El-Intel-Core-i7-11700K-supera-en-IPC-a-cualquier-AMD-hasta-la-fecha-segun-una-filtracion-en-Geekbench.html*

Los transistores de los procesadores ejecutan operaciones matemáticas, pero esos datos necesitan guardarlos en algún lugar como una memoria. Cuando diseñas un procesador tienes que balancear **¿Le pongo memoria o le pongo más procesamiento?** 

Necesitamos un minimo de memoria asi que la memoria chiquita que un procesador tiene por dentro se le conoce como registros o cache y son pequeños pedacitos de memoria que estan ahí, pero no es suficiente para cargar un sistema operativo pues para eso necesitas una memoria grande.

---

En la imagen a continuación se presenta la Memoria de Acceso Aleatorio o Random Access Memory = **RAM**

Estas se borran en el momento que el computador se reinicia y solamente funcionan cuando el computador tiene electricidad, la ventaja es que pueden ser muy veloces por lo que cuando la CPU necesita guardar datos, las guarda aqui.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpiDvNZ_UMVXwmgA-CducSTuo1ema2bGNAQ&s">

*Imagen Tomada De: https://compubit.com.co/que-son-las-memorias-ram/*

Las memorias tienen una jerarquia a partir de cuan veloces son. Para que la cpu pueda acceder a un dato que se encuentra en el cache o en los registros que es la memoria que va dentro del chip del CPU, tomar ese dato toma de 1 a 20 nanosegundos a la CPU para acceder. Para dimensionar la cantidad de tiempo, **en un segundo hay mil millones de nano segundos.** 

> Por ende 20 nano segundos equivalen a 2 millonesimas de segundo, menos de un instante.

Para que la CPU tome un dato de la memoria RAM, le toma 70 nanosegundos por lo que puede ser de 2 a 3 veces más lenta que la memoria que se encuentra en la CPU. Toma mucho tiempo tomar de un disco duro un dato, pues si quieres tomar un archivo de un disco duro, lo que hace la CPU para interpretarlo es pasarlo del disco duro a la RAM.

<img src = "https://static.wikia.nocookie.net/wikihdd/images/d/dc/Jerarquia_almacenamiento.png/revision/latest?cb=20160317074959">

*Imagen Tomada De: https://wikihdd.fandom.com/wiki/Jerarquia_de_memorias*

---

La organización entre todos los componentes entre las instrucciones preprogramadas que tiene, su capacidad de realizar operaciones matemáticas, la memoria interna, los nucleos y la estructura de los transistores se le llama arquitectura.

Hay tres grandes arquitecturas que son la forma en la que diseñamos los procesadores:

* [X86](https://www.xataka.com/componentes/arquitectura-x86-una-historia-imprescindible-de-la-informatica "X86 Concept By Xataka")

* [RISC](https://es.wikipedia.org/wiki/Reduced_instruction_set_computing "Rics Concept By Wikipedia")

* [ARM](https://cloud.google.com/discover/what-are-arm-based-processors?hl=es-419 "ARM Concept By Google")

Los diseñadores de procesadores se dieron cuenta que los programadores repiten mucho los mismos procesos:

Abrir archivos, borrar archivos, hacer ciertas operaciones matemáticas. Se les ocurrió que en vez de hacer transistores de proposito general, seria más veloz si ciertas acciones repetitivas se realizaran en transistores especificamente diseñados para esas acciones que en vez de expresarlas en código y procesarlas en cada uno de los transistores genericos. A esto se le conoce como instrucciones, que estas mismas determinan una arquitectura.

Por ejemplo:

Los procesadores **X86** casi siempre estan corriendo windows que esta almacenado en transistores programados (se les define como quemados) en la estructura de transistores de un chip, a medida que los chips fue avanzando en complejidad de instrucciones, empezamos a notar que para ciertos casos de uso como por ejemplo correr muchos chips en servidores que realizan muchas operaciones distintas, era mejor tener chips más simples.

Esto dio nacimiento a cierto tipo de arquitectura que trinfuo mucho a medida de los 90 y 2000 conocida como **RISC = Reduce Instructions Set Computer** que es básicamente un chip con instrucciones más genericas mucho más versatil.

Con la explosión de la telefonia movil que es en esencia un computador en nuestros bolsillos nos dimos cuenta de que necesitabamos un chip que gastara mucho menos electricidad con una más alta capacidad de procesamiento y que se calentara mucho menos porque de esa manera la bateria dura mucho más, la arquitectura más conocida para esta se le conoce como **ARM**

El tipo de procesador que se produce más es el X86 que se van produciendo lentamente cada vez menos porque cada vez más las personas tienen computadoras portatiles en vez de tener computadoras de escritorio pues ARM es el caso ideal para estas computadoras, aun asi X86 sigue siendo muy popular en donde [INTEL](https://www.intel.la/content/www/xl/es/homepage.html) y [AMD](https://www.amd.com/es/support/download/drivers.html) son los principales productores de este tipo de arquitectura.

* Los dispositivos ANDROID y IPHONE son los que más consumen chips ARM

Un detalle muy interesante de los CHIPS es la **[Ejecución Especulativa](https://es.wikipedia.org/wiki/Ejecuci%C3%B3n_especulativa)** o tambien conocida como Ejecución Predictiva que consisten en que para ahorrar bateria y hacer más efectivos los procesadores, los procesadores tratan de predecir el código que van a correr, como por ejemplo: Si todos los días buscas una canción en spotify y la reproduces y pones a descodificar una canción, el procesador puede predecir eso y prepararse.

[Esta ejecución predictiva ha tenido muchas vulnerabilidades](https://support.apple.com/es-co/101886 "Acerca de las vulnerabilidades de la ejecución especulativa en las CPU con Intel y basadas en ARM By Apple") de seguridad informática y este ha sido la frontera para el diseño de un chip, es muy controversial.

Parte de la arquitectura de un procesador es el lenguaje de ensamble que es una serie de instrucciones que le explican al ser humano en un lenguaje muy cercano al humano; en letras y numeros... Cómo pedirle a la CPU hacer operaciones matemáticas. Es el lenguaje original con el que se hace el software, y cuando uno escribe código en lenguajes de programación normales y se hace un proceso de compilación, la compilación es convertir ese código en el lenguaje de ensamblado de la arquitectura de la CPU.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/500px-Motorola_6800_Assembly_Language.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Lenguaje_ensamblador* 

En el pasado antes de los lenguajes de programación y la memoria, la forma de programar las CPU antes de las memorias era por medio de unas tarjetas a las que se les hacia unos huecos en donde al hueco representaba una instrucción en el lenguaje de ensamble o datos binarios como por ejemplo información númerica.

<img src="https://i.blogs.es/e625db/punch1/450_1000.jpg">

*Imagen Tomada De: https://www.xataka.com/historia-tecnologica/ser-programador-60-era-pequena-pesadilla-costaba-dinero-no-picabas-codigo-sino-que-usabas-tarjetas-perforadas*

A continuación un ejemplo:

    A = 1 
    B = 2
    C = A + B

    A, B, C son variables.
    1, 2 son valores
    A + B es un proceso

La CPU calcula el numero 1 como un BYTE y asigna a la memoria RAM un espacio a las que se accede por medio de **Direcciones de memoria**, por lo que al asignar 2 valores, se dejan esas dos variables en dos espacios de almacenamiento en la RAM por lo que estoy asignado que a ese espacio de almacenamiento que se va a llamar A o que se va a llamar B y que por dentro hay un 1 y un 2. 

Cuando declaro C, antes de hacer la operación matemática... reservo una dirección en la memoria a las que se les conoce como puntero o apuntadores. Por lo que se le solicita a la RAM cual es el valor de A y B en la posición de los apuntadores y en la CPU se suman los dos numeros para dar como resultado 3, que una vez generado se envia a la dirección de memoria que corresponde a la variable C. 

> Esto mismo ocurre cuando compilo cualquier lenguaje de programación a assembly language. ¿Cuanta información tiene que transcribirse?

**En la CPU se realizan las operaciones, en la RAM se guarda la información**

Casi todos los chips funcionan asi, aunque hay algunos chips que son especializados, asi como las CPU son unidades de procesamiento general. Tambien tenemos unos chips especializados llamados System on a chip que incluyen muchas otras funciones como las que tienen los telefonos, hay chips gráficos que se les conoce como GPU, hay CHIPS de inteligencia artificial que se les conoce como TPU.

> Quedo fascinado y me abruma un poco la cantidad de información a la cual hay que estudiar. Son tantos temas e historia por entender.

En un pequeño parrafo: La CPU, internamente, está compuesta por transistores, circuitos que realizan operaciones básicas como sumas, restas y multiplicaciones. Estos transistores también se encargan de mover, almacenar y modificar información.

Video Recomendados:

* https://www.youtube.com/watch?v=u71Du3nabXI

* https://www.youtube.com/watch?v=dX9CGRZwD-w

* https://www.youtube.com/watch?v=9RZreu5z_Gc











---











## Qué es un Sistema Operativo

Un sistema operativo (SO) actúa como ese intermediario clave en tu computadora o dispositivo móvil, traduciendo las instrucciones de las aplicaciones (software) al lenguaje que el hardware entiende.

Exiten muchos dispositivos que solo tienen una función, como por ejemplo unos audifonos... Que igualmente es un dispositivo complejo, se conecta vía [bluetooth](https://es.wikipedia.org/wiki/Bluetooth "Bluetooth Concept By Wikipedia") a un telefono, un televisor, a una computadora... Pero solo cumplen con una función y es ser audifonos, no necesitan software para programarse entonces sus funciones estan quemadas en el chip.

Por otro lado:

Un televisor, una computadora, un telefono e incluso un reloj inteligente van a tener diferentes funciones debido a las aplicaciones que corren... Eso quiere decir que hay Software que le habla al Hardware, cuando eso ocurren en el medio debe haber un traductor que gestione esas diferencias y le permite al desarrollador de software hablar con el hardware sin tener que crear funciones especificas para tener que hablar con cada entidad de hardware...

Es como pensar que un teclado es un hardware, pero hay una cantidad de teclados diferentes... Como el sensor de un reloj, siempre habrá un sensor diferente por cada reloj por lo que **necesitamos una forma estandar de comunicar el software con el hardware**.

Un sistema operativo es el intermediario fundamental entre el hardware y el software que **crea estándares** para que los programadores no tengan que preocuparse por las especificaciones técnicas de cada dispositivo físico. Su función principal es permitir que las aplicaciones se comuniquen con los componentes físicos de manera uniforme, independientemente de la variedad de hardware existente.

<img src ="https://preview.redd.it/esses-s%C3%A3o-todos-os-mouses-que-usei-nesses-3-anos-ama-v0-kmaudh9srhje1.png?width=640&crop=smart&auto=webp&s=ad242e6ccd137bfc762116eb49b4c643ebe530f3">

*Imagen Tomada De: https://www.reddit.com/r/hardwarebrasil/comments/1iqqum4/esses_s%C3%A3o_todos_os_mouses_que_usei_nesses_3_anos/?tl=es-419*

Cuando desarrollamos una aplicación que necesita acceder a la cámara, el teclado o cualquier otro dispositivo, no necesitamos programar específicamente para cada modelo de hardware gracias al sistema operativo.

Por lo que necesitamos que lo que el hardware detecta del mundo real, se envie en una versión de bits y bytes (Electronica Digital) al software. 

La comunicación entre software y hardware se realiza a través de dos componentes esenciales:

Esas aplicaciones que permiten comunicar el software con el hardware se llaman **[Drivers](https://es.wikipedia.org/wiki/Controlador_de_dispositivo "Drivers Concept by Wikipedia")** y la traen por defecto los sistemas operativos. Los sistemas operativos hablan con el software a traves de una conexión estandar preacordada de diferentes mecanismos de comunicación que se llaman **[APIs = Application Program Interface](https://aws.amazon.com/es/what-is/api/ "API Concept by AWS")**

> Drivers: son aplicaciones que vienen por defecto en los sistemas operativos y permiten la comunicación con hardware específico.

> APIs (Application Program Interface): son mecanismos estandarizados que permiten al software comunicarse con el sistema operativo.

> Entonces como buen software engineer, debo entender bien este tema: Drivers, APIs. Aunque al parecer es sencillo de manejar pues los actuales lenguajes de programación abstraen estos conceptos y hace que esto sea facil de procesar.

Como ejemplo práctico: Cuando se reproduce una canción en spotify al descodificar la canción, hay una API que envia cómo debe sonar o vibrar la membrana del parlante del dispositivo.

<img src="https://appmaster.io/api/_files/PqV7MuNwv89GrZvBd4LNNK/download/">

*Imagen Tomada De: https://appmaster.io/es/blog/apis-para-principiantes-como-utilizar-una-api-una-guia-completa*

Por otro lado el Sistema Operativo tambien gestiona como se usan los recursos del computador, pues generalmente se tienen varias aplicaciones abiertas y hay bastantes procesos que ocurren al tiempo como de mensajeria, musica o algo más que tengas conectado. Por lo que estos sistemas definen a quien debe enviar qué recursos por lo que el sistema operativo determina a quien le permite más recursos como por ejemplo:

    Abrir al tiempo un navegador, excel y word: El sistema operativo distribuye de manera equitativa los recursos para abrir estos 3 programas al tiempo.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCiixdtv5Px0jx9oPpA5yxcHcVnhwgopl1A&s">

*Imagen Tomada de: https://www.xataka.com/basics/administrador-tareas-task-manager-windows-que-como-sacarle-maximo-partido*

---

Los sistemas operativos tienen la crucial tarea de administrar eficientemente los recursos disponibles entre múltiples aplicaciones que se ejecutan simultáneamente. Esta gestión incluye:

* Asignación de CPU

* Gestión de memoria RAM

* Manejo de interrupciones

* Recolección de basura

Las CPU ejecutan una sola cosa al tiempo por lo que el sistema operativo determina el corto lapso de tiempo que le dedica un poco a todo el proceso completo de algún trabajo. *"Un poco a este, un poco a este, otro poco a este..."* a una velocidad muy rápida que incluso se siente que se estuviera trabajando en esos procesos al mismo tiempo.

> En el caso de la multitarea, el sistema operativo distribuye los recursos entre diferentes aplicaciones, dando un poco de prioridad a cada una según sea necesario, creando la ilusión de que todas funcionan simultáneamente.

Cuando abres muchas pestañas en el navegador o cuando abres muchos archivos al tiempo, la computadora se pone lenta porque el sistema operativo empieza a ejecutar cada uno de estos archivos en la memoria RAM y aveces esta memoria se llena... Que sabemos que es muy rápida, pero si se llena igualmente tenemos que ejecutar lo que se esta buscando ejecutar por lo que el sistema operativo no se rinde por lo que abre un pedazo del disco duro que es más lento, para usarlo como memoria ram, a este concepto se le conoce como: **Memoria Virtual en Disco = SWAP**

<img src="https://empiezoinformatica.wordpress.com/wp-content/uploads/2015/05/swap.png?w=523">

*Imagen Tomada de: https://empiezoinformatica.wordpress.com/2015/05/08/swap-in-swap-outintercambio/*

Incluso haciendo esto puede que el sistema operativo se llene de procesos porque un proceso esta ocupando todo el espacio, en ese momento es cuando se traba la computadora y se cuelga, en ese caso el sistema operativo puede enviar una señal de cancelación total para "matar" el proceso porque esta "Matando" todo.

    Esto es en parte, las funciones de un sistema operativo.

Estos mecanismos de control se llaman Interrupciones y a veces son muy simples como por ejemplo: El funcionamiento del mouse nunca para. **Porque existe una jerarquia de procesos** y lo que tiene que ver con teclado y mouse, estan en el punto más alto de esta jerarquia porque eso te da la sensación de que la computadora va muy rápido. Porque aunque se rompa una aplicación, no se rompe el sistema operativo.

<img src="https://sistemasoperativos1web.wordpress.com/wp-content/uploads/2016/04/300px-figura11.jpg">

*Imagen Tomada de: https://sistemasoperativos1web.wordpress.com/2016/04/21/cuales-son-los-niveles-de-un-sistema-operativo/*

---

Tambien pasa que hay aplicaciones que dejan elementos en memoria, por lo que el sistema operativo tambien tiene como función verificar qué espacio de memoria lleva tiempo sin ser accedido por una aplicación y simplemente la elimina o en ocaciones la mueve al disco duro. Por esto a veces cuando buscas abrir una app que hace bastante tiempo no usabas, puede que tome un poco más de tiempo en arrancar que lo normal porque debe volver a traer información a la memoria RAM.

Esto es una serie de elementos que actualmente los programadores ya no tenemos que pensar porque el sistema operativo se encarga de esto de forma totalmente autonoma e independiente.

[Garbage Collection (Recolección de Basura)](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science) "GC concept by Wikipedia"): Nivel más alto de privilegio: Donde se ejecuta el nucleo del sistema (KERNEL) con acceso total al hardware y recursos.

Tambien hay procesos que toman total control de todos los recursos de la computadora como por ejemplo los Videojuegos en donde tu quieres tener acción a tiempo real y que tengan maximo nivel de prioridad incluso teniendo multiples aplicaciones abiertas. Porque el sistema operativo gestiona mecanismos de multitarea en donde le da una prioridad estilo "Un poco a este, otro poquito a este y otro poco a este."

<img src="https://i.ytimg.com/vi/bNK0ahcdvqU/maxresdefault.jpg">

*Imagen Tomada De: https://www.youtube.com/watch?v=bNK0ahcdvqU*

---

Además de gestionar la estructura de almacenamiento, el sistema operativo implementa capas de seguridad que incluyen:

* Permisos de usuario

* Cifrado de archivos

* Gestión de llaves de seguridad

En la forma que se guarda la información en los discos duros, en la memoria permanente tambien depende del sistema operativo: Los diferentes sistemas operativos utilizan diferentes formatos y estructuras de almacenamiento:

* [Apple utiliza APFS](https://es.wikipedia.org/wiki/Apple_File_System "APFS concept by Wikipedia"): Optimizado para SSD, Cifrado Nativo, Spanshots.

* [Windows utiliza NTFS](https://es.wikipedia.org/wiki/NTFS "NTFS concept by Wikipedia"): Optimizado para Journaling, Compresión, Cifrado BitLocker.

* [Linux utiliza ext 3/4](https://es.wikipedia.org/wiki/Ext4 "ext 3/4 concept by Wikipedia"): Alta Escalabilidad, Journaling, extents.

La estructura de almacenamiento la decide el sistema operativo y tambien les agrega una capa de permisos porque el sistema operativo es donde tu guardas tus llaves de acceso; Tu nombre de usuario, tu contraseña, la forma en la que esa contraseña abre y cierra, la cabecera de tu sistema de archivos que tienes en tu pedacito de disco duro.

De esa forma se protegen tus archivos para que otros usuarios del mismo computador no puedan acceder y tu tampoco puedes acceder a los archivos de otros usuarios en tu computadora.

---

Algunos sistemas operativos son capaces de abrir archivos de otros sistemas operativos diferentes, para lograrlo deben tener preinstalado las reglas de estructura de archivos y del disco duro de ese otro sistema operativo, que eso asi como lo hemos hablado antes es un **Driver**, un software que tiene las reglas de interacción con otro tipo de hardware o otro tipo de archivo.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcvfld3V6eQdvMutM9Ol5W1UcEusdR-yCJg&s">

*Imagen Tomada De: https://www.instagram.com/p/DP31RJKiJDn/*

La seguridad de archivos no solo depende de si el sistema permita o no darte acceso a un archivo aparte de tu nombre de usuario y contraseña, en ocaciones los sistemas de archivos tambien cifran el contenido de los archivos usando el nombre de usuario y contraseña en el sistema operativo, estos algoritmos de cifrado lo que hacen es que si no existe una presencia de una llave, de un password, entonces no se puede acceder a la estructura del sistema de archivos.

Por lo que si saco y me llevo tu disco duro y lo inserto en otro computador, no lo puedo abrir, porque esta cifrado, tiene encriptación en donde los sistemas operativos gestionan esta encriptación

Sistemas de Cifrados:

* [Filevault](https://support.apple.com/es-co/guide/mac-help/mh11785/mac "Filevault by Apple")

* [Bitlocker](https://support.microsoft.com/es-es/windows/buscar-la-clave-de-recuperaci%C3%B3n-de-bitlocker-6b71ad27-0b89-ea08-f143-056f5ab347d6 "Bitlocker by Microsoft")

* [LUKS](https://docs.redhat.com/es/documentation/red_hat_enterprise_linux/8/html/security_hardening/encrypting-block-devices-using-luks_security-hardening "Cifrado Lucks by Redhat")


Hay otras llaves de seguridad que los sistemas operativos gestionan, cuando tu abres tu banco porque tu quieres acceder al sitio web del banco o a la aplicación del banco en un telefono. Ese banco envia al sistema operativo una llave pública para que cifre los datos y tu le envias tu llave publica para que el banco cifre los datos.

Esas llaves se tienen que guardar en algún lado y un gestor típico de las llaves públicas y de tus propias llaves para el cifrado es el **sistema operativo**.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCg9QXOLpWQeJ_J461FoR27BX9pqfAPdbiQg&s">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Cifrado_%28criptograf%C3%ADa%29*

---

Los sistemas operativos modernos utilizan una **[arquitectura de anillos](https://es.wikipedia.org/wiki/Anillo_(seguridad_inform%C3%A1tica))** de seguridad para restringir el acceso:

* La memoria y el acceso al chip, al hardware, a los transistores de la CPU se restringe en el primer anillo de seguridad que es el **anillo 0 = ring 0** que es el nivel de privilegio más alto en la arquitectura de protección de un sistema operativo, donde se ejecuta el núcleo del sistema (kernel) con acceso directo al hardware y control total sobre todos los recursos del sistema

* Hay un segundo anillo en el cual históricamente se le conoce por correr las aplicaciones de los usuarios llamado **ring 1**.


**En el mundo moderno hay actualmente una arquitectura de 4 anillos en donde:**

1. El primer anillo es el kernel, el nucleo del sistema operativo que es el único que le puede hablar al hardware

2. luego tenemos el anillo 1 y 2 que es donde carga el software que traduce entre el hardware y las aplicaciones, esos son los anillos de dispositivos

3. Luego tenemos el anillo 3 que es donde carga el software normal; Excel, Word, Navegador, Juegos, Aplicaciones... En donde si una aplicación desea ingresar al hardware como por ejemplo spotify poner musica y que la musica suene en el parlante de tu dispositivo. Spotify en el anillo 3 tiene que hablarle al kernel en el anillo 0 a traves de los APIs que corren en el anillo 1 o 2 que en estos dos es donde se encuentran los drivers.

4. Entonces la API del sistema operativo recibe la señal de spotify ("Reproduzca esta musica), el sistema operativo le envia esta señal al kernel, en donde el kernel corre las instrucciones al parlante asi transformando esa señal digital en la vibración del parlante y asi es como escuchamos una canción.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Priv_rings.svg/500px-Priv_rings.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Anillo_(seguridad_inform%C3%A1tica)*

---

Las [maquinas virtuales](https://es.wikipedia.org/wiki/M%C3%A1quina_virtual "Maquina Virtual concept by Wikipedia") son una nueva técnica para que no solo tengas diferentes usuarios en un sistema operativo sino para que en una computadora puedan correr multiples sistemas operativos de manera independiente como si fuera una computadora virtual.

> [Oracle VM VirtualBox Manager](https://www.oracle.com/es/virtualization/technologies/vm/downloads/virtualbox-downloads.html): es un software de virtualización gratuito y de código abierto que permite crear y ejecutar máquinas virtuales (VMs) dentro de un sistema operativo anfitrión (como Windows, macOS o Linux).

La forma en la que funciona es que en el anillo 0 sigue cargando el kernel del sistema operativo de la computadora y en el anillo 1 se encuentra una memoria virtual reservada que le hace creer a un sistema operativo que hay arranca el anillo 0 y tu puedes tener tantos de estos sistemas operativos como tu memoria ram o la memoria de tu disco duro puedan sostener.

> La virtualización permite optimizar recursos, ya que puedes utilizar solo una fracción de una computadora si es todo lo que necesitas, o expandirte a múltiples máquinas si requieres más capacidad.

A cada una de estas maquinas virtuales le es imposible acceder a la otra maquina virtual.

Esto es muy util en servidores, cuando tu tienes una computadora "en la nube" o cuando compras servidores en la "nube" realmente es una computadora de toda la vida, gigante metida en un [data center](https://es.wikipedia.org/wiki/Centro_de_procesamiento_de_datos "Data Center concept by Wikipedia") que lo que hace es dividirse en espacios virtuales para poder rentarte ese espacio y sí necesitas más aumenta la capacidad de recursos que usas de la computadora e incluso puede reclutar los recursos de otras computadoras y si depronto utilizas menos, puede que user una quinta parte de la computadora.

<img src ="https://upload.wikimedia.org/wikipedia/commons/a/a0/Datacenter-telecom.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Centro_de_procesamiento_de_datos*

Casi toda la nube y casi todo el negocio de los servidores funciona con maquinas virtuales.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/VirtualBox2.png/500px-VirtualBox2.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/M%C3%A1quina_virtual*

---

La estética de la interfaz gráfica tambien es dependiente de un sistema operativo.

Los botones en mac se ven diferente a los de windows y a los de linux, un iphone y un android tienen aplicaciones cuya interfaz gráfica se ve diferente, esas interfaces de usuario las define el sistema operativo aunque los desarrolladores de aplicaciones pueden hacer lo que quieran.

Por detras de las interfaces gráficas existen interfaces de línea de comandos o interfaces que son sólo texto, asi fue como empezaron los sistemas operativos, ONIX, OS y eventualmente linux. Estos se llaman **[CLI o Command Line Interfaces](https://es.wikipedia.org/wiki/Infraestructura_de_lenguaje_com%C3%BAn "CLI concept by Wikipedia")** 

<img src="https://i.blogs.es/ef71ca/comandos-diagnostico/650_1200.jpg">

*Imagen Tomada De: https://www.xataka.com/basics/comandos-basicos-para-dar-tus-primeros-pasos-consola-windows-cmd*

> Es un conocimiento fundamental para un Ingeniero de Software.

---

Hay todo tipo de sistemas operativos en el mundo de apple los MacBook, los IMAC corren con macOS, pero el iphone y el ipad corren con Ios, los relojes inteligentes corren con [Watch OS](https://www.apple.com/co/os/watchos/ "Watch OS by Apple").

Android es un tipo de linux, y linux puede ser un sistema operativo de escritorio, de servidores, asi como windows es un sistema operativo de escritorio o de servidores.

En el mundo de la realidad virtual (prácticamente un telefono), cuando uno se lo pone tiene una versión modificada de [Android](https://www.android.com/intl/es_es/ "Android.com") que fue fabricada por META, conocida como [Horizon OS](https://www.meta.com/es-es/help/quest/562419235163295/ "Horizon OS by META").

En apple, las apple vision pro usa [VisionOS](https://www.apple.com/os/visionos/ "VisionOS by Apple") y los dispositivos de android que usan realidad aumentada, tienen un sistema operativo llamado [android XR](https://www.android.com/intl/es_es/xr/ "Android XR by Android").

<img src="https://www.androidauthority.com/wp-content/uploads/2024/12/Android-XR-YouTube-TV-Interface-840w-472h.png.webp">

*Imagen Tomada De: https://www.androidauthority.com/android-xr-ui-first-look-3508760/*

---

Por ultimo estan los sistemas operativos especializados por ejemplo en sistemas medicos o en las pantallas de los automoviles corre un sistema operativo llamado [QNX](https://es.wikipedia.org/wiki/QNX "QNX concept by Wikipedia"), tambien usamos sistemas operativos para los cohetes que van al espacio, mientras use software que corre con el hardware de manera general hay un sistema operativo en medio.

En la actualidad los sistemas operativos determinan que aplicaciones pueden correr o no a traves de reglas, permisos e incluso **sistemas de verificación y aplicación**, en android o en [iOS](https://es.wikipedia.org/wiki/IOS "iOS concept by Wikipedia") usan las tiendas de aplicación en donde iOS tiene la [appstore](https://www.apple.com/co/app-store/ "appstore.com") y android tiene la [playstore](https://play.google.com/store/games?hl=es_CO "playstore.com").

<img src="https://www.enriquedans.com/wp-content/uploads/2019/07/App-Store-and-Play-Market-icons-768x476.jpg">

*Imagen Tomada De: https://www.enriquedans.com/2019/07/la-crisis-del-modelo-de-las-tiendas-de-aplicaciones.html*

> En los android de china, un telefono puede tener **quince tiendas diferentes tiendas de aplicaciones** mientras que el mundo occidental casi siempre hay una; La de google o la de Apple.

En los sistemas de escritorio como Mac o Window tambien hay tiendas de aplicaciones, pero en estos sistemas se puede correr cualquier tipo de aplicación que instales, sin embargo cuando empiezas a ejecutar tus propias aplicaciones es posible que el sistema operativo mande advertencias en donde la aplicación no tiene una llave de seguridad o no tiene una firma, o no tiene un certificado.

<img src="https://www.java.com/jcom/images/trusted_expired,0(5).jpg">

*Imagen Tomada De: https://www.java.com/es/download/help/appsecuritydialogs.html*

Esto sucede porque ahora los vendedores de sistemas operativos como [apple](https://www.apple.com/co/ "apple.com") y [microsoft](https://www.microsoft.com/es-co "microsoft.com") les pide a los desarrolladores de software que pasen un proceso de verificación para tener una llave de cifrado que les permite ejecutar una aplicación, eso antes no pasaba, este proceso hace que sea más seguro el desarrollo de una aplicación y sistemas. Porque entonces un virus no tiene esa llave y antes de ejecutarse, va a salir esa advertencia "Esta aplicación no está autorizada".

Ahora si quieres desarrollar una aplicación tienes que pedirle permiso a los desarrolladores de sistemas operativos y esto hace un poco más canson el desarrollo de aplicaciones de escritorio, pero mucho, mucho más seguro.










---










## Cómo Funciona Internet

Cuando envias un mensaje por [whatsapp](https://www.whatsapp.com/?lang=es "whatsapp.com") pasan muchas cosas más que solamente pasar un mensaje de un teléfono a otro teléfono pues ese mensaje:

1. se debe transformar en un [paquete (packet)](https://es.wikipedia.org/wiki/Paquete_de_red "Paquete de Red concept by Wikipedia")

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/WiFiMacLayerFrameLayOut.jpg/500px-WiFiMacLayerFrameLayOut.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Paquete_de_red*

2. Ese paquete llega a una antena

3. El mensaje en la antena llega a un provedor de Interent (ISP - Internet Service Provider) que se conecta a unos cables submarinos en donde los distrubuyen en servidores

4. Durante todo este proceso el mensaje debe ir cifrado, se hace trazamiento mediante unos elementos llamados IP - Protocolo de Internet

<img src="https://nocrd.com/images/2024/07/17/Network-Peering_large.png">

*Imagen Tomada De: https://nocrd.com/es/component/content/article/8-noticias/238-explicacion-que-es-el-peering-de-internet*

Debemos razonar que ese mensaje que se envia de un telefono a otro telefono es realmente de una computadora a otra computadora.

> Un telefono en esencia una computadora. 

Para que ese mensaje se pueda enviar debe primero transformarse en lenguaje que entienden las maquinas, lenguaje binario... Es decir bytes, conjuntos de 8 bits. En donde cada elemento de bit es 1 o es un 0 y estos elementos en conjunto se transmiten a traves de internet.

<img src="https://www.ionos.com/es-us/digitalguide/fileadmin/_processed_/a/d/csm_diversas-unidades-de-almacenamiento-en-relacion-con-el-bit_9be530a014.webp">

*Imagen Tomada De: https://www.ionos.com/es-us/digitalguide/paginas-web/desarrollo-web/que-es-un-bit/*

Pero internet no es simplemente de computadora a computadora, algo debe pasar para que entre cada una de estas computadoras se conecte a internet.

> Se vuelve a invitar a pensar de los celulares como unas computadoras porque en esencia lo son.

Tu computadora se conecta a internet mediante un sistema, un protocolo, una serie de reglas para mandar mensajes de manera inalambrica llamada wifi.

<img src="https://ccnadesdecero.es/wp-content/uploads/2023/05/Ejemplo-Diagrama-Red-Modem-Router.png">

*Imagen Tomada De: https://ccnadesdecero.es/ejemplo-diagrama-red-domestica/*

Si tu telefono no esta cerca de una red llamada wifi, se conectará a otra red llamada 4G y antes de 4G existia 3G, 2G que son otro tipo de redes, estos especificamente son redes de telefonia a los que se les agrego capacidad de transmitir datos digitales que es lo que conocemos como [internet](https://www.cloudflare.com/es-es/learning/network-layer/how-does-the-internet-work/ "Internet concept by Wikipedia").

<img src="https://www.movilzona.es/app/uploads-movilzona.es/2022/02/bandas-frecuencia-moviles.jpg">

*Imagen Tomada De: https://www.movilzona.es/tutoriales/conexiones/bandas-frecuencias-moviles/*

Pero si depronto tu computadora es de trabajo o tal vez en tu casa la computadora la conectan por medio de un cable, muy probablemente ese cable sea un cable de red que es conocido popularmente como un cable [ethernet](https://es.wikipedia.org/wiki/Ethernet "Ethernet concept by Wikipedia").

<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/10baseT_jack.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Ethernet*

Sea como sea, sin importar si es una red de wifi, por cable... Todos estos son los medios por los cuales se va a llegar a una caja (internet) que se le llama un [módem](https://es.wikipedia.org/wiki/M%C3%B3dem "Módem concept by wikipedia")/[router](https://es.wikipedia.org/wiki/R%C3%BAter "Router concept by Wikipedia").

> Un módem y router no son lo mismo, aunque a menudo se combinan en un solo dispositivo (un "gateway") que tu proveedor de internet te entrega; el módem trae la señal de internet a tu casa desde tu ISP, mientras que el router toma esa señal y la comparte (vía Wi-Fi o cable) con todos tus dispositivos (PC, móviles, tablets). 

<img src="https://www.adslzone.net/app/uploads-adslzone.net/2020/02/Modem-router-e1726047677232.jpg?x=480&quality=80">

*Imagen Tomada De: https://www.adslzone.net/reportajes/internet/modem-vs-router/*

Este módem traduce todas las señales internas de la red privada de tu casa, que es la que tiene wifi o ethernet a las señales que tiene internet público del mundo y eso lo hace enviando la señal por un cable, que antes era el cable de telefono, pero hoy en día es casi siempre cables de **[fibra óptica](https://concables.cl/que-es-y-para-que-sirve-el-cable-de-fibra-optica/ "Fibra Óptica concept by concables")**.

La fibra óptica es una pequeña fibra de vidrio altamente elástica por la que un rayo laser va modulando un mensaje, que es el mensaje que envia todas las señales de internet en el mundo, pero esto no significa que de alguna u otra forma la computadora tuya se conecte con la computadora de tu amigo en el momento que envias un mensaje.

<img src="https://concables.cl/wp-content/uploads/2021/08/fiber-optic-cable-768x284.jpg">

*Imagen Tomada De: https://concables.cl/que-es-y-para-que-sirve-el-cable-de-fibra-optica/*

Para que ese mensaje llegue, debe saber cómo llegar y además de eso debe llegar de manera privada, entonces necesita un servidor intermedio que se acuerde que "Esta persona tiene en sus contactos a esta persona" y el mensaje debe ir cruzado. Estos servidores no son más que computadoras, grandes computadoras escondidas en lugares que nosotros llamamos datacenters que son edificios llenos de computadoras de una compañia para poder hacer esa transmisión.

Whatsapp es un producto creado por la misma empresa que creó facebook, esta empresa se llama meta. Por ende cuando tu envias un mensaje por whatsapp... Realmente estos llegan a los servidores de meta. 

<img src="https://assets-blog.hostgator.mx/wp-content/uploads/2021/06/Emisor.webp">

*Imagen Tomada De: https://www.hostgator.mx/blog/protocolo-tcp/*

Por otro lado tu no quieres que los mensajes que envias sean vistos por terceros, entonces existen tecnologías que se llaman [cifrado o encriptación](https://www.cloudflare.com/es-es/learning/ssl/what-is-encryption/ "Encriptación concept by Cloudfare"). 

Lo que hace estas tecnologías es que hacen el mensaje, secreto. Haciendolo indecifrable en tu computadora o en tu teléfono. En donde llega al servidor en donde este no sabe realmente qué es, sólo sabe que va para tu amiga (dirección receptora), en donde tu amiga lo recibe y por ende solamente la única persona que lo puede descifrar... Como si entre los dos tuvieran una contraseña secreta que sólo los dos conocen mandandose mensajes.

A estas tecnologías se les conoce como:

* **LLaves Públicas**
* **Llaves Privadas**

Ambas son una técnica de cifrado que usa matemáticas para agarrar un mensaje y tomando ese mensaje, se transforma en algo indescifrable. Esto lo que hace que sea indescifrable es lo que hace que sea tu llave pública en donde la puedes compartir con otros en donde esa llave pública sólo te corresponde a ti (Dirección Locutora), esta se guarda de manera secreta en tu computadora.

La Llave Privada solo sirve para descifrar mensajes que fueron cifrados con tu llave pública.

Cuando usas Whatsapp o cualquier sistema de mensajeria moderno. Lo que haces es que cuando guardas el contacto de una persona: Internamente y de manera automática le envia tu llave pública a tus contactos y cada contacto que te tiene a ti, te guardan en sus llaves públicas. 

Por ende cuando mires tu contactos en la aplicación de whatsapp tambien estas mirando una lista de cada una de tus llaves públicas para cifrar un mensaje con ellos por medio de esa llave y asi sólo enviar mensajes y recibir mensajes de ellos. 

Este intercambio de llaves públicas es a través del servidor, pero las llamas privadas no estan en los servidores de whatsapp, estas estan solamente en tu computadora.

De esta manera recibes y descifras mensajes en tu teléfono, siendo asi que no se pueda mirar en el servidor cual es el mensaje haciendo asi que el servidor solamente vea para quien es el mensaje.

El contenido del mensaje son los datos (El mensaje en si como por ejemplo: "Hola, cómo estas?"), pero la información extra del mensaje con los metadatos (Fecha y hora de envio, Fecha y hora de recibido).

<img src="https://www.redeszone.net/app/uploads-redeszone.net/2019/11/emisor-receptor.jpg">

*Imagen Tomada De: https://www.redeszone.net/tutoriales/seguridad/diferencias-cifrado-clave-publica-privada/*

Lectura Recomendada: https://es.wikipedia.org/wiki/Criptograf%C3%ADa_asim%C3%A9trica

---

Un mensaje cifrado es como meter un mensaje en una caja, en donde tu llave pública es la que cierra la caja y todo el mundo que te envie un mensaje tiene esa llave pública, la llave privada es la única que puede abrir esa caja y esa solamente tu la tienes.

El mensaje que tu envias tiene que convertirse en una cajita que será enviada en internet en donde a esta caja se le conoce como paquete y es un formato especial binario que guarda el mensaje y los metadatos.

Estos mensajes empaquetados son los que entienden los protocolos de comunicación como el 4G de las antenas de celular, el wifi, el ethernet.

Cada sistema de conexión a internet funciona de maneras ligeramente diferentes:

<img src="https://es.digi.com/getattachment/Blog/post/Private-Network-vs-Public-Network-5-Key-Difference/private_network_diagram-1200w.png?lang=en-US">

*Imagen Tomada De: https://es.digi.com/blog/post/private-network-vs-public-network*

Los estandares de telefonía como 4G son muchas antenas al rededor de todo el planeta que estan constantemente escuchando con señales de radio donde estan los teléfonos, por lo que probablemente tu teléfono constantemente esta viendo al rededor de 3, 4, 5 antenas al rededor del barrio donde vives porque siempre debe estar conectado a multiples antenas de tal manera que si vas conduciendo o caminando el teléfono va saltando de antena en antena para no perder conexión: Se puede pensar como una conexión a nivel wifi, pero a toda la ciudad.

<img src="https://www.wradio.com.co/resizer/v2/https%3A%2F%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fprisaradioco%2FYGVYN4JMSND45HZOTLDFFQFLPM.jpg?auth=289cc4f1f8ceffc35a835ab6c88e640f6ae7cc1e3adebebbf67938c0c9c0f349&height=800&width=1200&quality=70&smart=true">

*Imagen Tomada De: https://www.wradio.com.co/2024/03/06/cobertura-5g-zonas-de-bogota-donde-ya-esta-disponible-como-activarla-en-su-dispositivo/*

En tu casa probablemente tienes un router/enrutador wifi que transformar esa señal de radio que es donde estan los empaquetadores de internet a una señal de cable que se conecta a un moden.

Esos paquetes llegan al módem o la antena 4g, estas dos los envian a un proveedor de internet, que es el proveedor de internet al cual tu le pagas. [(ISP -Internet Service Provider)](https://mintic.gov.co/micrositios/operadores-comunitarios-internet-isp/819/w3-channel.html "ISP concept by Ministerio de las TIC Colombia")

Hay demasiados de estos ISP y todos se conectan entre si a traves de cables gigantescos que estan alrededor de todo el planeta.

<img src="https://en.vcenter.ir/wp-content/uploads/2018/08/isp-internet-service-provider-definition.jpg">

*Imagen Tomada De: https://en.vcenter.ir/internet/isp-internet-service-provider-definition/*

Estos cables son una red gigante cables, que muchos de estos van por el oceano y nosotros estamos totalmente rodeados por estos cables. Son conocidos como cable submarino, aunque muchas veces tambien puede ir por tierra mediante tuneles en tubos como tuberia del agua o en postes de luz.

Toda esa red de cables al rededor de todo el mundo es lo que nosotros conocemos como internet, no son satelites, aunque algo de internet ocurre en satelites, la verdadera conexión ocurre entre estos cables.

<img src="https://content.nationalgeographic.com.es/medio/2019/03/12/cables-marinos_238e1e2a_1280x688.png">

*Imagen Tomada De: https://www.nationalgeographic.com.es/ciencia/internet-red-miles-cables-submarinos_13997*

Pero no es como si estos ISP se conecten directamente entre ellos, tienden a usar unos sistemas que centralizan la llegada de los cables y que distribuyen estos cables al rededor de un país, de un continente y del planeta entero se conocen como [IXP = Internet Exchange Point](https://www.cloudflare.com/es-es/learning/cdn/glossary/internet-exchange-point-ixp/ "IXP concept by Cloudflare").

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Internet_Connectivity_Distribution_%26_Core.svg/500px-Internet_Connectivity_Distribution_%26_Core.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Punto_neutro*

Lo que son es [datacenters](https://es.wikipedia.org/wiki/Centro_de_procesamiento_de_datos "Datacenters concept by Wikipedia"), edificios gigantescos llenos de computadoras que reciben todas las señales de cables, de las antenas, señales de satelite, pero sobre todo los cables submarinos y las redestribuyen para donde tienen que ir.

<img src="https://i.blogs.es/342f42/high-res-utah-data-center/450_1000.jpeg">

*Imagen Tomada De: https://www.xataka.com/pro/asi-cinco-cpds-grandes-mundo*

---

**¿Cómo Sabe un IXP a donde tiene que ir un paquete?**

En esos [metadatos](https://es.wikipedia.org/wiki/Metadatos "Metadatos concept by wikipedia") viene la dirección del servidor al que tengo que ir, cuando yo le envio un mensaje de whatsapp, yo digo este mensaje es para [whatsapp.com/](https://www.whatsapp.com/)...

Todo lo que tenga un .com, como por ejemplo [google.com](https://www.google.com/ "google.com"), [youtube.com](https://www.youtube.com/ "youtube.com"), [spotify.com](https://open.spotify.com/intl-es/ "spotify.com"), a todo esto se le conoce como el [dominio](https://es.wikipedia.org/wiki/Dominio_de_internet "Dominio concept by Wikipedia"): Es el nombre en texto que nosotros le ponemos a una dirección de un servidor. 

Pero las direcciones de los servidores no funcionan con nombres sino con números asi como que en la calle halla una dirección como la carrera 13 con calle 63 o la casa 143 en la avenida oregon, en internet tenemos un sistema de numeros que a partir de verlo nos indica por donde tiene que ir el paquete para encontrar su destino. 

Asi mismo entonces: Saber como sale desde tu computadora, va a cual proveedor de internet, a cual IXP, a cual proveedor de internet y a cual lugar.

Estos numeros se les conoce como direcciones de internet o direcciones IP: Protocolo de Internet / Internet Protocol

<img src="https://kinsta.com/es/wp-content/uploads/sites/8/2018/05/qu%C3%A9-es-dns.png">

*Imagen Tomada De: https://kinsta.com/es/blog/que-es-dns/*

Lectura Recomendada: https://aws.amazon.com/es/route53/what-is-dns/

---

**¿Cómo hacen las computadoras para tener una dirección IP a la cual enviar y recibir?**

La humanidad decidió sentarse y acordar una serie de estandares y entre todos acordaron que el estandar se iba a llamar [DNS = Domain Name System/ Sistema de Nombres de Dominio](https://www.ibm.com/mx-es/think/topics/dns "DNS concept by IBM").

Estas son bases de datos gigantescas en donde hay un monton de nombres como por ejemplo: whatsapp.com, google.com, youtube.com y por cada uno de estos nombres estan asignadas unas IP diciendo asi "Este nombre de dominio corresponde a esta dirección de ip" y estas bases de datos las clonan/copian por cada una de las IXP/ Internet Exchange Point, en ocasiones tambien estan copiadas en los ISP, en los servidores intermedios de corporaciones y muy probablemente en tu computadora y en tu teléfono hay una copia local de esa base de datos y cuando esa base de datos se actualiza, envia una señal a cada uno de los computadores que tiene una copia para que actualice a esa versión.

<img src="https://www.indusface.com/wp-content/uploads/2024/10/DNS-lookup-process-.png">

*Imagen Tomada De: https://www.indusface.com/learning/what-is-dns/*

Gracias a esos servidores de DNS y a esa distribución de bases de datos es como nosotros sabemos donde esta todo lo que hay en internet.

Una computadora normal no tiene que saber cuales son todas las direcciones de internet, sólo tiene que recordar las más comunes.

Entonces como por ejemplo: Si tienes que enviar un mensaje mediante whatsapp para que le llegue al otro telefono de tu conocido, en tu computadora cuando le das enter:

1. Ese mensaje se transforma en un paquete

2. Ese paquete se cifra con una llave pública

3. Ese paquete se va para el router wifi.

4. Del router/antena va para los datacenter del ISP que contrataste

5. El ISP sabe por el DNS del mensaje por donde enviar ese paquete y ese paquete fluira por internet hacia un IXP.

6. El IXP busca donde se encuentra el servidor, en este caso el servidor de whatsapp, siendo meta.

7. El servidor busca "¿Este paquete para quien es?" 

8. El servidor envia para quien es al IXP.

9. El IXP lo envia al ISP que contrató la persona a la cual tu enviaste el mensaje

10. El ISP envia el mensaje al módem/router o empresa de telefonía de esa persona

11. LLegando asi el mensaje a esa persona y aparecer como una notificación.

<img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/ArchitectureCloudLinksSameSite.png">

*Imagen Tomad De: https://es.wikipedia.org/wiki/Comunicaci%C3%B3n_entre_procesos*

---

Cuando tu envias mensajes y usas ciertos comandos (Terminal y Línea de Comandos) se van a ver una serie de numeros IP, cuando un mensaje se envia pasa por una serie de numeros IP y a esto se le conoce como una [traza de ruta](https://www.xataka.com/basics/tracert-traceroute-que-como-funciona-como-se-utiliza "Traza de ruta IP concept by Xataka")

<img src="https://i.blogs.es/ef0fbb/trazado/450_1000.jpg">

*Imagen Tomada De: https://www.xataka.com/basics/tracert-traceroute-que-como-funciona-como-se-utiliza*

* Imagen de tabla de enrutamiento por enviar un mensaje. (Direcciones IP por las que un mensaje tuvo que viajar a la velocidad de la luz)

El tiempo que se demora un mensaje o un paquete de salir de una computadora y llegar a la otra se le conoce como [PING](https://es.wikipedia.org/wiki/Ping "PING concept by Wikipedia"), aunque hay algunos casos especiales por ejemplo si dos computadoras se encuentran en la misma red porque estan en la misma ciudad, en el mismo barrio... El mensaje no tiene que viajar a internet, muchas veces sólo rebota en el proveedor de internet local.

<img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Cmd-ping.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Archivo:Cmd-ping.png*

O cuando miras un video en youtube, no estas llendo a los servidores de youtube de estados unidos exclusivamente, youtube que es muy inteligente al igual que muchas compañias genera copias de los videos en los servidores más cercanos dentro de cada país asi en vez de que el mensaje vuele por todo internet y que tenga que pasar por todos los protocolos de intercambio y por los IXP, solamente estan la red de internet local de la ciudad y a estos se les conoce como servidores de cache.

<img src="https://kinsta.com/wp-content/uploads/2020/03/How-Web-Cache-Works.png">

*Imagen Tomada De: https://kinsta.com/es/blog/que-es-la-cache/*

---

El internet satelital no es magia sino basicamente lo mismo, cuando una antena satelital se conecta a un satelite para conectarse a internet lo que realmente esta pasando es que esa antena satelital envia una señal de radio al satelite, pero el satelite esta conectado a un ISP en tierra, probablemente el más cercano a tu casa y ese ISP se encarga de enrutar el paquete en el internet de toda la vida.

Asi funciona [starlink](https://starlink.com/co).

<img src="https://i.blogs.es/abb225/starlink-satelites/650_1200.jpg">

*Imagen Tomada De: https://www.xataka.com/basics/que-starlink-como-funciona-cuanto-cuesta*

Lectura Recomendada: https://es.wikipedia.org/wiki/Starlink

> Internet es mucho más que esto, hay más protocolos, reglas, cifrado, técnicas especiales para el correo, las IP tienen ciertas reglas, ¿Por qué una IP tiene 4 números? ¿Por qué no 5 o por qué no 3?, ¿Por qué las IP van del 0 al 255?, ¿Cual es la diferencia entre IPv4 y la IPv6?, un DNS tiene muchas más cosas que simeplemente un nombre y una IP










---










## Cómo las computadoras guardan datos

Hay dos tipos de datos que existen en una computadora, los [datos persistentes](https://www.purestorage.com/la/knowledge/what-is-persistent-data.html "Datos Persistentes concept by purestorage.com") y los [volátiles](https://es.wikipedia.org/wiki/Memoria_vol%C3%A1til "Memoria Volátil by Wikipedia").

Un dato persistente es cuando apagas la computadora y el dato sigue ahí, que estos datos son los que se encuentran en el disco duro.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuf0kQodGIt7QB-RQTFb5i_Kg4JWLX9hRhbA&s">

*Imagen Tomada De: https://www.administracionderedes.com/sistemas-informaticos/disco-duro/*

Un dato volátil es que al apagarse la computadora desaparece el dato. Como cuando hay un archivo no guardado al apagar la computadora y estos se encuentran en la memoría RAM.

<img src ="https://gqinformatica.com/wp-content/uploads/2024/04/memoria-ram-2-gb-scaled.webp">

*Imagen Tomada De: https://gqinformatica.com/blog/informatica/memorias-ram-todo-lo-que-necesitas-saber/*

Por lo que: 

* Dato Guardado en el Disco Duro

* Dato en Acción en la Memoria RAM

> La memoria RAM no es la única memoria de tipo volatil sino que es la más común y más grande.

Dentro de las CPU hay memoria volátil que se llama [cache o registros](https://es.wikipedia.org/wiki/Cach%C3%A9_(inform%C3%A1tica) "Cache concept by Wikipedia") que son pequeñas memorias muy veloces dentro de la series de transistores que se encuentran en un chip de CPU.

Un disco duro es el formato de memoria persistente más común, que es cuando el dato se mantiene una vez se apaga la computadora. Pero no es la única, pues en las computadoras la [BIOS](https://es.wikipedia.org/wiki/BIOS "BIOS concept by Wikipedia") que es el chip que permite al sistema arrancar es una memoria persistente.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyGLBkvK709CzLn6KRFtDS8BIaYxHg-7XIw&s">

*Imagen Tomada De: https://es.wikipedia.org/wiki/BIOS*

Dentro de los CHIPS existen pequeñas herramientas de software que arrancan el chip que se conocen como el [firmware](https://es.wikipedia.org/wiki/Firmware "Firmware concept by Wikipedia").

---

Hay dos tipos de unidades para almacenar información de tipo persistente. 

1. [Los discos duros mecánicos](https://es.wikipedia.org/wiki/Unidad_de_disco_duro "Hard Disk Drive concept by Wikipedia")

2. [Los discos realmente no son discos sino unidades de estado sólido](https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido "Solid State Drive concept by Wikipedia")

    Los discos duros mecánicos son mecánicos porque tienen un disco por dentro que son básicamente discos magneticos que van dando vueltas y una cabeza de lectura los va leyendo.
    Estos platos mecánicos que son leidos por una cabeza de lectura se parecen a los vinilos y a los toca discos. 
    La lectura de estos discos depende totalmente de la velocidad de la rotación de estos platos.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Hard_drive-es.svg/500px-Hard_drive-es.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Unidad_de_disco_duro*

    Un disco de estado solido realmente no es un disco se les conoce como unidades de estado sólido porque no tienen partes mecánicas.
    Por dentro el disco tiene unos chips que se les conoce como celdas de memoria en donde la velocidad de estos discos es la velocidad con que la luz se mueve al rededor del circuito por eso son mucho más veloces sin partes mecánicas.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/MDL-MKNSSDCR120GB%2C_SN-MKN1139A0000025359%2C_FW-3.3.0.jpg/500px-MDL-MKNSSDCR120GB%2C_SN-MKN1139A0000025359%2C_FW-3.3.0.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido*

En inglés se les conoce como:

* Disco Duro = Hard Drive 

* Disco Sólido = SSD = Solid State Drive

En español casi no usamos DRIVE como palabra de unidad. Le llamamos disco a pesar de que por dentro no hay ningún disco.

<img src="https://compubit.com.co/wp-content/uploads/2023/09/62d97da689bf557dde504b8b-1-1024x576.jpg">

*Imagen Tomada De: https://compubit.com.co/diferencias-entre-discos-mecanicos-y-discos-solidos/*

---

Los discos duros guardan en su memoria los datos en un sistema de bloques, y ese formato del cómo se organizan los bloques se les conoce como formatos de memoria.

Lectura Recomendada: https://www.kingston.com/es/blog/personal-storage/understanding-file-systems

Hay 4 formatos de memoría (Lo más Reconocidos porque hay muchos más):

* [FAT 32](https://www.ionos.com/es-us/digitalguide/servidores/know-how/fat32/ "FAT 32 concept by ionos"): era el formato original de windows hace muchos años, hoy en día todavia se utiliza en algunas memorias USB, tiene ciertas limitaciones como que los archivos no pueden pesar más de 4GB (Tamaño máximo del bloque de tamaño), los archivos no tienen ningún tipo de seguridad y permisos. Todo el mundo lo soporta, se utiliza en cualquier lado y por eso es tan común en las memorias USB.

* [NTFS](https://es.wikipedia.org/wiki/NTFS "NTFS concept by Wikipedia"): Es el sistema que utilizan los sistemas windows modernos (2025), es más veloz, tiene seguridad y tiene permisos para acceder a los archivos.

* [APFS (Apple File System)](https://es.wikipedia.org/wiki/Apple_File_System "APFS concept by Wikipedia"): es el sistema de archivos moderno de Apple diseñado para unidades de estado sólido (SSD), optimizando rendimiento, seguridad y eficiencia en dispositivos Apple como Mac, iPhone, iPad y Apple Watch.

En linux hay una infinidad de sistemas de archivos, pero los más populares son:

* [Ext3](https://es.wikipedia.org/wiki/Ext3 "EXT3 concept by Wikipedia") o [Ext4](https://es.wikipedia.org/wiki/Ext4): Se definen con más altos o bajos sistemas de seguridad y permisos, para que de esa forma en la computadora un usuario no pueda ingresar a la información del otro usuario: Esto es muy importante si estas en un servidor (No te gustaria que fueran a tus archivos)

---

Como un disco es tan grande, el sistema operativo necesita una forma como un indice para saber de donde en el disco, empieza y termina un archivo

>tabla de particiones GPT o MBR

<img src="https://www.diskpart.com/screenshot/es/others/estructura-de-mbr-gpt.png">

*Imagen Tomada De: https://www.diskpart.com/es/articles/que-es-gpt-y-sus-ventajas.html*

Esta imagen es una cabezera de un mapa de archivos, en donde esta al inicio de los discos porque al acceder a esa cabezera, ese indice te muestra las carpetas: El sistema de archivos de una computadora.

<img src="https://support.microsoft.com/images/es-es/8d0f220d-c531-4601-b931-8e9d36d9b7f5?format=avif&w=640">

*Imagen Tomada De: https://support.microsoft.com/es-es/windows/explorador-de-archivos-en-windows-ef370130-1cca-9dc5-e0df-2f7416fe1cb1* 

---

**Tabla de particiones GPT o MBR**

Como un disco es tan grande, el sistema operativo necesita una forma como un indice para saber de donde en el disco, empieza y termina un archivo.

Para esto, el disco cuenta inicialmente con una tabla de particiones (MBR o GPT), ubicada al inicio del disco. Esta tabla no contiene archivos, sino información sobre cómo está dividido el disco en particiones.

Dentro de cada partición se encuentra un sistema de archivos (como NTFS, FAT32 o ext4), que actúa como un índice de archivos y carpetas. Gracias a este sistema, el sistema operativo puede localizar, leer y escribir datos de forma eficiente.

<img src="https://www.diskpart.com/screenshot/es/others/estructura-de-mbr-gpt.png">

*Imagen Tomada De: https://www.diskpart.com/es/articles/que-es-gpt-y-sus-ventajas.html*

Esta imagen es una cabezera de un mapa de archivos, en donde esta al inicio de los discos porque al acceder a esa cabezera, ese indice te muestra las carpetas: El sistema de archivos de una computadora.

<img src="https://support.microsoft.com/images/es-es/8d0f220d-c531-4601-b931-8e9d36d9b7f5?format=avif&w=640">

*Imagen Tomada De: https://support.microsoft.com/es-es/windows/explorador-de-archivos-en-windows-ef370130-1cca-9dc5-e0df-2f7416fe1cb1* 

> Primero: tabla de particiones (GPT o MBR), Después: dentro de cada partición, el sistema de archivos (NTFS, FAT32, ext4, etc.)

> El OS son los archivos.

---

**¿Qué pasa cuando borras un archivo?**

Pues ese espacio se libera: En el indice de la cabezera del disco, se borra el apuntador a ese bloque declarando a ese bloque como libre el cual se puede reescribir en donde los datos siguen hay, sólo que ya no estan correlacionados con el nombre de un archivo, siendo asi datos huérfanos para cuando entonces en la proxima un software o algún programa que estes utilizando y necesita dejar algo, busca esos bloques vacios.

Luego llega un momento en donde todos los bloques empiezan a desorganizarse debido a los archivos que se van moviendo y transcribiendo haciendo que el disco duro tenga los bloques separados. Esto hace que un disco duro se vuelva más lento.

En el pasado existia un proceso de defragmentación: En donde la defragmentación de un disco consistia en organizar los bloques para que estuvieran pegaditos archivo por archivo y hacer de esa forma el disco duro mucho más veloz.

<img src="https://hardzone.es/app/uploads-hardzone.es/2018/03/desfragmentacion-1024x640.jpeg">

*Imagen Tomada De: https://hardzone.es/2018/03/09/desfragmentacion-hdd/*

---

En un disco duro solido esto no sucede porque debido a la velocidad de la luz el proceso de defragmentación ocurre de manera automatica ya que no necesita de mover una pieza mecánica de lado a lado para organizar los archivos.

> El sistema operativo no hace que esos espacios sin relación a algún archivo se conviertan en bits con valor cero debido a que eso toma tiempo, mucho más que simplemente borrar la referencia en el indice de la cabezera del disco.

Estos discos se van degradando a medida del tiempo pues el proceso eléctrico que les permite guardar 0 y 1 de manera persistente no dura para toda la vida.

Cada vez que escribes y lees estas degradando un poco más tu disco, entre menos escritura hagas, más probable que dure tu disco duro.

Pero en otras palabras: **Todos los discos mueren**, ningún disco es para toda la vida y por ende hay que copiar en otros lados.

---

La información en un disco puede ser cifrada, es decir que se crea un algoritmo de encriptación o cifrado haciendo asi que los datos sean accesibles solamente por medio de una llave (Nombre de usuarios y contraseña en el OS)

Windows, MacOS, Linux, Android: Tienen mecanismos de cifrado de sus discos.

Entonces ¿Qué pasa cuando subes un archivo a la nube?

Entendiendo que la nube son computadoras en un data center de una empresa gigantesca.

Lo que se hace es copiar archivos de tu computadora a esas computadoras en un data center.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Datacenter_de_ARSAT.jpg/2560px-Datacenter_de_ARSAT.jpg">

*Imagen Tomada De: https://en.wikipedia.org/wiki/Data_center*

---

Expertos en seguridad informática conocidos como forenses son capaces de utilizar software especializado para hacer un mapa estadistico de los bytes dentro de una computadora y reconstruir "Archivos Borrados" cuando no fueron realmente re escritos sino que simplemente se perdió su indice.

Lectura Recomendada: https://www.ibm.com/es-es/think/topics/computer-forensics

Asi es como en criminologia se pueden recuperar los datos borrados de los discos de criminales.

Ahora que entendemos la memoria programamos programas más veloces aprovechando la jerarquia de la memoria.

<img src="https://www.lazarus.com.ve/wp-content/uploads/2023/01/data-forensics-digital-forensic-investigator-at-MGNHQU3-1170x658-1-768x432.jpg">

*Imagen Tomada De: https://www.lazarus.com.ve/desafios-de-la-informatica-forense-y-manejo-de-las-evidencias-electronicas/

---

Entonces recordemos todos los temas vistos:

Todos los datos tienen que ser procesados por una CPU y la CPU tiene una memoria chiquita que es llamada cache o registros, a esa memoria se accede en un tiempo de 1 a 20 nanosegundos.

La RAM es muchismo más grande en su capacidad de almacenar datos que una CPU y a la CPU le toma 70 nanosegundos acceder a la memoria RAM

A la CPU acceder a un disco de estado solido/SSD le toma de 100 a 500 microsegundos, es decir de 100k a 500k nanosegundos.

Siendo asi a la memoria RAM 7000 veces más rápida que una SSD.

Un disco duro mecanico es 70 veces más lento que un disco de estado solido/SSD

1 Minutos = 60.000.000.000 Nanosegundos

1 Minutos = 60.000.000 Microsegundos

---

Cuando el sistema operativo intenta abrir un archivo o una serie de archivos que son más grandes de lo que cabe en la memoria RAM, lo que hacen es crear un espacio en el disco duro en donde usan el DISCO DURO como una [memoria RAM virtual](https://es.wikipedia.org/wiki/Memoria_virtual "RAM Virtual concept by Wikipedia") y a este proceso se le conoce como [SWAP](https://es.wikipedia.org/wiki/Espacio_de_intercambio "SWAP concept by Wikipedia") y es claramente lento asi que es mejor no hacerlo.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Virtual_address_space_and_physical_address_space_relationship.svg/500px-Virtual_address_space_and_physical_address_space_relationship.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Memoria_virtual

> ¿Cómo es el tema de esos anuncios que mencionan una RAM virtual?

Una RAM no se llena exclusivamente cuando se ocupa con archivos muy grandes sino tambien cuando no se libera la memoria RAM.

Si estas programando un software y utilizas grandes archivos y luego cuando el usuario no los necesita y no le dices a la CPU que libere ese espacio en la RAM, la RAM se empieza a llenar de basura.

Los procesadores modernos y algunos lenguajes de programación modernos crean un proceso automático para detectar cuando una información no es necesaria para borrarla la cual se llama [recolección de basura o garbage collection](https://es.wikipedia.org/wiki/Recolector_de_basura).

La mayoria de ingenieros de software no necesitan pensar en esto hoy en día, pero cuando desarrollas sistemas más complejos tienes que pensar en la **recolección de tu basura**.

<img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Garbage_collection.gif">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Recolector_de_basura

---

La tecnología avanza todo el tiempo: hay un nuevo tipo de componente electrico que descubrimos y lo empezamos a comercializar hace menos de dos decadas que se llama el **[Memristor](https://es.wikipedia.org/wiki/Memristor)** que es un transistor que puede hacer operaciones matemáticas y una memoria a la vez en donde puede guardar datos siendo asi una misma pieza eléctrica.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Two-terminal_non-linear_circuit_elements-es.png/500px-Two-terminal_non-linear_circuit_elements-es.png">

*Imagen Tomada De: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Two-terminal_non-linear_circuit_elements-es.png/500px-Two-terminal_non-linear_circuit_elements-es.png*

Estos componentes electrónicos todavia siguen en su infancia y no se producen a gran escala, lo más cercano a esto son unos chips de intel que se llaman [OPTANE](https://www.lenovo.com/co/es/glosario/optane-memoria/) asi que por ahora no es una opción y no tenemos que pensar en ello, pero hay que tener presente que en el futuro muy posiblemente la CPU y la memoria RAM muy probablemente van a ser un sólo CHIP.

<img src="https://co-media.hptiendaenlinea.com/magefan_blog/Memoria_Intel_Optane_Qu_es_y_Por_Qu_la_Necesitas.jpg">

*Imagen Tomada De: https://www.hp.com/co-es/shop/tech-takes/memoria-intel-optane-que-es-y-por-que-la-necesitas*

Ya hay otras clases de chips que intentan integrar otros chips por dentro en diferentes nucleos y se llaman [System on a Chip](https://en.wikipedia.org/wiki/System_on_a_chip) y esto es lo que tienen por dentro por ejemplo: Celulares

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Samsung-Exynos-4412-Quad_SoC_used_in_I9300.jpg/500px-Samsung-Exynos-4412-Quad_SoC_used_in_I9300.jpg">

*Imagen Tomada De: https://en.wikipedia.org/wiki/System_on_a_chip*










---










## Cómo se Organizan los Archivos

Cuando la gente joven y la gente muy vieja van a un curso de desarrollo de software se estrellan con el [sistema de archivos](https://es.wikipedia.org/wiki/Sistema_de_archivos).

Un pequeño porcentaje de personas estan acostumbrados al sistema de carpetas.

Otras personas no estan acostumbrados a este sistema pues en un celular no existe un sistema de archivos ya que tu no miras las fotos como archivos sino que las encuentras en una galeria.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/FilesAndFolders.png/330px-FilesAndFolders.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Sistema_de_archivos*

Realmente todos los elementos (archivos) dependen de una app y generalmente si algo abre en una app, no abre en otra app.

Pero la computación nunca fue asi, pues la computación funciona con archivos que se pueden abrir en diferentes sistemas y que se pueden mover de una aplicación a otra aplicación.

De hecho, casi todos los sistemas educativos del mundo incluyendo la **[OCDE](https://www.oecd.org/en.html)** consideran que mover datos de una aplicación a otra aplicación como los fundamentos básicos minimos necesarios del [alfabetismo tecnológico](https://es.wikipedia.org/wiki/Alfabetismo_digital "Concept by Wikipedia"). 

> Es decir: Lo mínimo que necesitas para utilizar tecnología.

Tu has visto una estructura de carpetas en un sistema operativo siendo la forma en la que el OS organiza, guarda y accede a cada uno de los diferentes archivos.

> Unidad(C:) > Users > Santiago > Documents > Archivo

Unidad A: para el primer drive de diskettes de 5¼ o 3½ pulgadas

Unidad B: para un segundo drive de diskettes, a menudo de diferente tamaño (si la A: era de 5¼", la B: podía ser de 3½", o viceversa)

Unidad C: para el disco duro con el sistema operativo

Unidad D: típicamente asignada a unidades de CD/DVD cuando estas se volvieron comunes.

---

Probablemente tambien habrás visto algo como:

c:\Documentos\...

<img src="https://corderoinformaticos.com/wp-content/uploads/2022/06/direccion.png">

*Imagen Tomada De: https://corderoinformaticos.com/tutoriales/el-explorador-de-archivos-de-windows/* 



Siendo una dirección que indica donde encontrar el archivo para esto, tenemos que pensar **¿Cómo las computadoras guardan y piensan los archivos?**

Los piensan como si fuera una estructura de arbol siendo la raiz del arbol, dependiendo del sistema operativo: "Una cosa u otra"

**Por ejemplo:**

En Windows es **C:** Esto es la raiz del disco duro siendo C el nombre del disco duro el cual le puso windows (Tipicamente asi se llama.)

En los windows viejos existia A: siendo una unidad reservada para el discket que anteriormente era la forma estandar de pasar archivos entre computadoras siendo una tarjeta de plástico que básicamente ya no existe a excepto del boton de guardar 💾 siendo reconocido asi... Pues evidentemente por su historia. 

> Ya no utilizamos [disquete](https://es.wikipedia.org/wiki/Disquete)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Floppy_disk_2009_G1.jpg/500px-Floppy_disk_2009_G1.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Disquete*

Curiosamente lo mismo nos pasaba con los [CD = Compact Disc](https://es.wikipedia.org/wiki/Disco_compacto)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/OD_Compact_disc.svg/330px-OD_Compact_disc.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Disco_compacto*

La unidad de CD o de DVD tendia a llamarse D: o E: porque es lo que sigue despues de la C

> un CD y un DVD no son lo mismo, aunque tienen el mismo tamaño físico. La principal diferencia es que un DVD tiene mucha mayor capacidad de almacenamiento (4.7 GB o más) que un CD (700 MB), permitiéndole guardar videos y datos más grandes, mientras que el CD es ideal para audio, debido a que los DVDs usan un láser de diferente frecuencia y una estructura de capas más compleja para leer más información. 

---

En los sistemas de tipo [UNIX](https://es.wikipedia.org/wiki/Unix "unix concept by wikipedia") como por ejemplo [Linux](https://es.wikipedia.org/wiki/GNU/Linux "linux concept by wikipedia"), [Mac](https://es.wikipedia.org/wiki/Macintosh "mac concept by wikipedia"), [Android](https://es.wikipedia.org/wiki/Android "android concept by wikipedia"), [iOS](https://es.wikipedia.org/wiki/IOS "iOS concept by wikipedia") (Lo más comunes), la raiz no es el disco duro sino la raiz de los arhivos del sistema operativo y se le sconoce con un slash = /

<img src="https://rsg-ecuador.github.io/HerrCompBioinfo/_images/Linux_file_system.jpg">

*Imagen Tomada De: https://github.com/RSG-Ecuador/Grupo-De-Estudio-Linux-Bash/tree/main*

Siendo asi que todos los sistemas Derivados de Unix es el / en donde esta todo siendo asi pro ejemplo: La raiz de un disco en linux no es / sino /mnt/c o tambien puede ser /mnt/disco1 en donde el nombre del disco se puede cambiar.

mnt significa [MOUNT](https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/mnt.html "mnt concept by tldp.org") que es donde se monta el disco y es una particularidad de linux.

---

Entonces sea como sea, casi todos los OS funcionan asi:

Hay una raiz y tres tipos de carpetas:

1. Carpetas de Usuario: Hay una carpeta por cada usuario que el computador tenga

2. Carpetas de OS: Estan las subcarpetas de lo que necesita el sistema operativo para funcionar

3. Carpetas de Apps: Hay una carpeta por cada aplicación que instalas.

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHsCE_CyVYsc7ErRRPk8X6uvAxdSdeu-tsHh_8V1v2CczUJZXtzM_EK70vufOs2h885WF82gHMq_wrma3JNDgqJZGv9DWyhPRTI1QPyTZUSFBxoD1qSVhotiN8w4CxNsmz_0H4_G2GpE9M/w1200-h630-p-k-no-nu/ubicacion-carpetas-sistema-windows.jpg">

*Imagen Tomada De: https://adminformaticos.blogspot.com/2015/04/directorios-principales-de-windows.html*

---

Especificamente pa carpeta del sistema operativo tiene a tener 3 cosas.

Los [drivers](https://es.wikipedia.org/wiki/Controlador_de_dispositivo "drivers concept by wikipedia") que es la carpeta donde estan todas las aplicaciones de software, todos los sistemas que me permiten interactuar con el hardware por lo que cuando instalas una impresora, esto va a los drivers.

Tambien se encuentra la configuración de todo el sistema operativo: Que si le gusta que sea de tema del sistema sea negro o blanco, Cuales son los usuarios con los que arranca, qué es lo que aplica a todos los usuarios.

<img src="https://i.blogs.es/4771fa/mojave2/450_1000.jpg">

*Imagen Tomada De: https://www.xataka.com/moviles/modo-oscuro-nuestros-moviles-ordenadores-tiene-sus-pegas-no-oro-todo-que-no-reluce*

Y finalmente otros archivos de carga natural del sistema operativo (Archivos del nucleo) siendo asi donde el contenido del OS esta.

---

En las carpetas de usuario, hay una carpeta por cada usuario. Cada carpeta de usuario tiene una estructura parecida siendo asi una carpeta para el contenido del escritorio, para documentos, para descargas, videos y otras carpetas en las que casi no pensamos donde se guarda la configuración del OS y de aplicaciones que usamos que son solo relevantes para el usuario.

Esta información, el contenido de la carpeta del usuario es solamente accesible cuando tengo mi nombre de usuario y contraseña.

**Asi los otros usuarios del dispositivo no pueden acceder a los contenidos de esa carpeta.**

Si yo estoy en linux, mac o cualquier sistema tipo UNIX y tengo una foto en la carpeta llamada camara, dentro del usuario Santiago muy probablemente valla a estar en /home/santiago/camara/foto.png siendo asi el / la raiz en donde voy a una carpeta.

Si estoy en windows va a ser C: aunque si hay otros discos en el dispositivo pueden haber otras letras. 

Por lo que: C:User/Santiago/camara/foto.png

---

¿Qué quiere decir [.png](https://es.wikipedia.org/wiki/Portable_Network_Graphics ".png concept by wikipedia")? 

Se ha ido generando un problema a medida de que los ultimos años, los OS han ido escondiendo las ultimas cuatro letras de los archivos siendo asi:

nombre_de_archivo.xxxx (Despues del . viene el tipo de archivo) lo que puede ser entonces por ejemplo:

* Un documento WORD tiende a terminar en [.doc](https://es.wikipedia.org/wiki/Doc_(inform%C3%A1tica) ".doc concept by Wikipedia") o en .docx

* Un documento EXCEL tienda a terminar en [.xls](https://www.adobe.com/es/acrobat/resources/document-files/spreadsheet-files/xls.html ".xls concept by Adobe") o .xlsx

* Las paginas web principalmente son archivos HTML en donde puede ser .htm o [.html](https://es.wikipedia.org/wiki/HTML)

<img src="https://blog.beep.es/wp-content/uploads/2022/08/extensiones-archivo-1024x554.jpg">

*Imagen Tomada de: https://blog.beep.es/que-es-una-extension-de-archivo/*

---

¿Pór qué aveces tienen 3 letras y otras veces 4 letras?

Son razones históricas pues en Sistemas OS viejos habia una limitación en la estructura de la cabezera de los discos duros para cuantos bytes se pueden guardar para la extensión y solamente se podian guardar 3 bytes por lo que entonces sólo habia espacio para 3 letras.

En los sistemas OS modernos esto no importa, entonces con pasar el tiempo se han ido extendiendo el nombre de las extensiones, pero como esto es confuso y requiere que los usuarios normales se guarden en la cabeza .xls significa excel, .docx significa word los OS lo han ido abstrayendo y ahora no lo ves... Ahora simplemente ves un archivo que es de tipo word, pero internamente sigue funcionando.

Esto se puede ver en las direcciones web porque cuando accedes a un servidor en internet accedes a su sistema de archivos de toda la vida. 

Siendo asi, imaginese una imagen llamada 2-cuadricula-negra.jpg y la URL es:

    https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/Assets/img/2-cuadricula-negra.jpg

Siendo asi:

[https](https://es.wikipedia.org/wiki/Protocolo_seguro_de_transferencia_de_hipertexto "https concept by wikipedia"): indica comunicación segura con cifrado [SSL](https://www.cloudflare.com/es-es/learning/ssl/what-is-ssl/)/[TLS](https://es.wikipedia.org/wiki/Seguridad_de_la_capa_de_transporte "TLS concept by wikipedia")

* **github.com**: Nombre del servidor que se resuelve a una [dirección IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP "IP concept by Wikipedia")

* **/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/Assets/img/**: Es la estructura de directorios en el servidor. 
El primer nombre /santiagoencodigo/ no es el nombre de la raiz del servidor, sino la raiz de lo que github configura en el servidor que le va a permitir observar al usuario siendo asi una raiz de archivos públicos siendo asi /santiagoencodigo/Desarrollo-Web-Profesional/blob/main/Assets/img/ el nombre de cada una de las carpetas separandose por un /

* 2-cuadricula-negra.jpg: Es el nombre del archivo con el recurso especifico solicitado y su extensión siendo el tipo de archivo como por ejemplo .jpg se tiende a ser para imagenes como fotografia.

> .png es tambien para imagenes pero en esta no se puede perder calidad y se tiene que ver de la misma forma siempre, se tiende a usar en ilustraciones  

---

[HTTP](https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto "HTTP concept by Wikipedia") y este significa protocolo de transferencia de hipertexto: Hypertext Transfer Protocol y eso es el protocolo que transfiere los archivos [HTML = Hyper Text Markup Language](https://es.wikipedia.org/wiki/HTML), es el lenguaje con el que escribimos las paginas web y http es el protocolo de internet por donde lo transimitimos.

<img src="https://upload.wikimedia.org/wikipedia/commons/3/35/HTML_file_type_mimetype_icon.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/HTML*

La S significa secure lo que significa que el navegador intercambia con el servidor una llave de cifrado pública y prviada para que la transferencia nadie la vea y asi de esa forma es como puedes obtener los datos de tu banco sin que una persona, un atacante, pueda ver la transeferencia de datos en internet y observe por ejemplo: Cuanto dinero tienes en el banco.

Existen otros protocolos pues no todo es HTTPS tambien existe el protocolo WSS que significa [WebSocket](https://en.wikipedia.org/wiki/WebSocket) que son un tipo de transferencia de datos que ocurre en tiempo real como por ejemplo asi es como funciona un chat.

Por lo que:

    WSS://chat.servidor.com/chat2/415

Siendo asi el servidor de chat con un subdominio que se llama chat en donde dentro /chat2 es la aplicación y el 415 es el identificador del chat.

Siendo asi las rutas las mismas en internet que en tu computadora.

---

Cuando estas usando un iPad, un iphone, un android, no estas usando una computadora completa porque no estas observando esto e incluso cuando utilizas windows o mac no ves las extensiones.

> Es momento de activar la visibilidad de extensiones y rutas en tu computadora.  

Esto sucede porque es un gran negocio para las empresas de OS escondiendo cada vez la ruta en mac por ejemplo el escritorio recorre en la nube y simplemente dice [icloud](https://www.icloud.com/) escritorio en vez de decirle al usuario que puede guardar datos en su disco duro, le estan diciendo que simplemente guardelos en la nube y asi cuando cambie de computadoras simplemente pasa de un lado a otro. 

> Esto te quita autonomia: No se puede permitir que porque un OS trate de hacer todo más facil, impida el aprendizaje.

> Necesito saber como un OS funciona por dentro.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ICloud_logo.svg/500px-ICloud_logo.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/ICloud*











---











## Teléfonos y su System on a Chip o SOC


[Los circuitos integrados = los chips](https://es.wikipedia.org/wiki/Circuito_integrado).  La forma en la que funciona la electrónica moderna, empezaron con unos [tubos de vacio](https://es.wikipedia.org/wiki/V%C3%A1lvula_termoi%C3%B3nica) que ocupaban inmensas cantidades de espacio y asi iniciaron las primeras computadoras, los primeros televisores y muchas otras mecánicas de la forma en la que se construía la electrónica moderna.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/5C3Ss.jpg/500px-5C3Ss.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/V%C3%A1lvula_termoi%C3%B3nica*

Lentamente estos dispositivos se fueron haciendo cada vez más pequeños y más pequeños y más pequeños.

Porque empezamos a empacar transistores en formas más cortas y porque el consumidor queria dispositivos más pequeños y que usaran menos electricidad y a su vez que fueran más portatiles.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/07R01.jpg/500px-07R01.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Circuito_integrado*

La electricidad funcionaba inicialmente con baterías AA, AAA e incluso de 9 Voltios, con las mismas que podiamos usar en una grabadora de [cassete](https://es.wikipedia.org/wiki/Casete), de las que llamaban [boombox](https://www.unocero.com/gadgets/que-es-boombox/) o un [walkman](https://es.wikipedia.org/wiki/Stereo_personal) y tantos otros dispositivos que quemaban esas baterias a una gran velocidad, que a su vez estas eran costosas por lo que habia un incentivo natural para los fabricantes de reducir el uso de las baterias.

Luego llegaron los smartphones, teléfonos moviles y muchas otras cosas.

La necesidad de reducir el gasto de electricidad y reducir el espacio empezó hacer que los chips se volvieran más y más especializados.

La computación hizo que las computadoras cupieran en una caja gigante y luego en un laptop.

---

Despues surgió una gran pregunta: **¿Por qué tenemos chips para todo?**

¿Por qué hay un chip que es la CPU y otra tarjeta distinta es la tarjeta gráfica y otra tarjeta distinta es la tarjeta de sonido?... **¿Por qué a medida de que especializamos todo, no pegamos todo en un sólo chip?**

Y eso es conocido como **System on a Chip**.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Samsung-Exynos-4412-Quad_SoC_used_in_I9300.jpg/500px-Samsung-Exynos-4412-Quad_SoC_used_in_I9300.jpg">

*Imagen Tomada De: https://en.wikipedia.org/wiki/System_on_a_chip*

Los dos problemas más grandes son de electricidad y de espacio. 

1. Entre más chips hay, más gastan bateria porque más largo es el viaje de los [electrones](https://es.wikipedia.org/wiki/Electr%C3%B3n) dentro de la tarjeta en cada uno de los ciclos que nos permiten jugar un videojuego en el teléfono o atender una llamada.

2. El segundo problema es que los teléfonos era un ladrillo gigante y queríamos que fueran cada vez más pequeños. Y no solo eran teléfonos, eran cámaras digitales, eran iPods, walkmans, televisores. Todo eso que ahora es un teléfono.

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsR0R93qGxiPoYmml2KjMNz7gBKEPkMhPPZj5D9KgUxT1TPB8MO8Rha0qcg5r5XSI2OA3jm7NG-FLQaiwwTFFc3gY-Pb3fKt79G8JCyt0JrBfhDpAZ8UhdOQ1ErN-AArg7MozrjK7n3H_y/s320/Manual-de-usuario-iPhone-5+%25281%2529.jpg">

*Imagen Tomada De: https://comofuncionanloscelulares1.blogspot.com/2016/08/que-es-un-smartphone-y-sus.html*

> Tan acostumbrado estoy, debido al tiempo en el que nací en el mundo... Que jamas habia pensado en esto: Antes no tenias todo en un sólo lugar, tenias una camara, un dispositivo para escuchar musica y otro para mirar videos (TV)... Ahora todo lo tengo en el mismo lugar todo el tiempo (Mi bolsillo). Ni siquiera lo habia pensado en algún momento hasta ahora.

---

En otras palabras: Antes era todo tipo de dispositivos, así que empezamos a pensar **¿Qué podemos integrar?**

Por ejemplo un teléfono es básicamente una pantalla gigante por lo que necesita un procesador gráfico que sea muy eficiente y que no sea lento... Pues si el teléfono se siente lento no se puede utilizar. 

Los humanos somos conscientes y aceptamos que una computadora se pone lenta, pero no aceptamos que un teléfono se ponga lento.

Necesitamos el procesamiento normal de una computadora para el celular para poder navegar por internet, enviar mensajes, correos, jugar jeugos, etc...

Asi que necesitamos una CPU y una GPU en un mismo lugar, combinar en un mismo lugar estos elementos fue el primer paso de un System on a Chip.

El mismo CHIP no es el GPU y el CPU al mismo tiempo con los mismos transistores, realmente es que en la OBLEA de Silicio en el Wafer en donde hacen el chip, ponen a un ladito los Transistores que funcionan como CPU y en otro lado muy cerca, en el mismo circuito integrado rodeado de baquelita, lo chips de la gpu.

<img src="https://microcontrollerslab.com/wp-content/uploads/2020/10/system-on-chip-SoC.gif">

*Imagen Tomada De: https://microcontrollerslab.com/system-on-chip-soc-introduction/*

Y asi empezaron a pensar en otros chips porque un celular es un computador completo.

Cuando uno arma una computadora uno tenia sus tabletas de memoria en donde una era la memoria RAM o Discos Duros Externos. ¿Por qué no pegamos la memoria ram hay tambien?

Y ¿Por qué no pegamos el Modem Tambien? porque cuando uno hace una llamada, los teléfonos tienen internamente un chip que es un módem que es el que tiene que hablar con la central electrónica y procesar la llamada. 

Este módem se conecta a las antenas [3G](https://es.wikipedia.org/wiki/Telefon%C3%ADa_m%C3%B3vil_3G) y [4G](https://es.wikipedia.org/wiki/4G), y los chips tambien tienen que conectarse a WIFI entonces esto tambien, **es otro modulo**... Que anteriormente tambien era un circuito aparte en un chip aparte.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Antena_Ugar.jpg/500px-Antena_Ugar.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/4G*

Como los teléfonos estandarizaron y todos los teléfonos tienen que procesar video a traves de la camara, capturar audio del micrófono, generar imagenes. Todas esas funciones estandar que anteriormente eran perifericos adicionales siendo asi creadas en un solo chip.

Otra ventaja es que estos dispositivos mantenian el mismo hardware constantemente, si tienes una computadora tu puedes conectarme mil marcas de webcam, pero en tu teléfono tu marca como samsung, apple, google... Tu sabes que el lente y qué camara, qué microfono y qué parlante.

Esto hace que los chips sean mucho más sencillos.

Hauwei es la primera marca en crear un módem de tecnología 5G en un chip. [El hauwei Kirin 990 5G](https://consumer.huawei.com/ae-en/campaign/kirin-990-series/)

> La innovación viene de todas partes.

---

Cuanto tu compras tu teléfono y lo enciedes, tu dedo oprime el boton de encendido el cual conecta dos contactos que hacen un paso de electricidad al circuito que llega a una señal en el system on a chip siendo asi, el primer circuito del chip la [BIOS](https://es.wikipedia.org/wiki/BIOS), es ese sistema de arranque que por ejemplo en el caso de [iPod](https://es.wikipedia.org/wiki/IPod) y dispositivos de Apple como el iPhone, se llama [iBoot](https://en.wikipedia.org/wiki/IBoot).

Lo mismo que habría en la BIOS de un computador normal, solo que aqui esta en el chip.

> Siendo asi: Dentro del chip arranca todo.

Ese pedazito de chip prende la CPU, la CPU va a la [memoria flash](https://es.wikipedia.org/wiki/Memoria_flash), memoria permanente equivalente al disco duro y aun asi distinto porque tienen un tamaño de circuito diferente (Uno más grande que otro) y de una quimica diferente.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flash_memory_cards_size.jpg/500px-Flash_memory_cards_size.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Memoria_flash*

De ahí van y buscan el código del OS y el resto es igual que una computadora. Pero en vez de estar viajando entre diferentes chips, todo esta viajando en el mismo chip: La CPU y la GPU estan muy cerca. La CPU arranca el computador en cuanto su OS y la GPU arranca los píxeles de la pantalla, trabajando en conjunto y compartiendo memoria siendo asi, esta una de las cosas únicas de un System on a Chip.

En una computadora la GPU tiene su propia memorIa y es la memoria que utiliza para representar cosas en pantalla o para hacer calculos paralelos como cálculos de [criptomonedas](https://es.wikipedia.org/wiki/Criptomoneda) o AI y la CPU usa la memoria RAM para ejecutar los computadoras.

en un SOC particularmente en la arquitectura que creo Apple, se utiliza una memoria unificada que lo comparten todas las necesidades del OS, donde carga el kernel, los drivers que prenden los perifericos, pero un periferico que normalmente seria un circuito con sus mecanismos químicos y mecánicos. Como la membrana de un micrófono, como los sensores de luz que tiene una camara que es todo lo que es Hardware, el circuito: Toda la operación está metida en ese SOC.

Esto hace que todo sea más sencillo, mucho más eficiente, con menos generación de calor, menor gasto de batería.

Por eso un teléfono que tiene 8GB de RAM y una CPU muy pequeña hace muchas más cosas que una computadora con una CPU más grande y los mismos 8 GB de RAM.

<img src="https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/Apple_M2_Pro_0.png">

*Imagen Tomada De: https://www.notebookcheck.org/Apple-El-SoC-M2-Pro-podria-fabricarse-en-el-nodo-N5P-de-TSMC-en-lugar-del-proceso-N3-inicialmente-rumoreado.642288.0.html*

---

Un teléfono es básicamente un experimento de física pues por dentro un teléfono tiene un [barómetro](https://concepto.de/barometro/) que detecta la presión ambiental, hay un [termómetro](https://es.wikipedia.org/wiki/Term%C3%B3metro) en donde a veces el teléfono te avisa si esta muy calienta y depronto se apaga. Todos estos son mecanismos físicos que usando electrónica, mecánica y química hacen que llegue una señal digital al procesador, pero en vez de tener chips individuales, le delegan el procesamiento de chips a ese SOC, que tiene los transistores necesarios para que funcione. 

Lectura Recomendada: https://www.infobae.com/tecno/2023/02/20/los-5-sensores-que-tiene-un-celular-y-que-pocos-conocen-para-que-sirven/

Como son tan similares, entonces muchas de las marcas no tienen que programar sus teléfonos para soportar un montón de drivers como si le toca a hacer microsoft con windows a una computadora, o a apple con su Mac e incluso a los OS Linux. Todo eso apoya a la eficiencia de estos sistemas.

* Dato Curioso: la cámara de los teléfonos modernos, ¿Le ha pasado que aunque este temblando al tomar una foto, la camara se mantiene estable? Hay una estabilización que sirve con software, pero hay ciertas cámaras de los teléfonos más costosos donde el lente está flotando en un tipo de aciete (SuperOIS) que hace que cuando se este moviendo el celular, el lente se mantenga fijo. En otros casos esta flotando con electroimanes que lo mantienen fijo o con pequeños sistemas de resortes, es fascinante. Super pequeño.

<img src="https://cronica.tech/wp-content/uploads/2023/08/realme-11-pro-plus-especificaciones.jpg">

*Imagen Tomada De: https://cronica.tech/tecnologia/hardware/llega-el-realme-11-pro-a-colombia-precio-y-especificaciones/*

Muy recomendado ver este video: https://www.youtube.com/watch?v=D2bcButZx8g

---

Has notado que a los telefonos generalmente les dura 24 horas la batería a pesar de que la tecnología crece y crece, ¿Por qué será? Pues las baterías si estan mejorando respecto a tecnología, pero están limitadas por los límites químicos de lo que hemos descubierto que es la mayor cantidad de densidad de electricidad que podemos meter en una batería de un teléfono moderno.

Primero, en el mercado nosotros los humanos aceptamos que los teléfonos duren un día, pero no aceptamos teléfonos que duren 6 horas y no recompensamos tanto a nivel financiero los teléfonos que duran 2 días porque ese es mercado es más pequeño, existe. Pero los teléfonos son más grandes. Como el [iPhone Pro](https://support.apple.com/es-co/111879), como el [Samsung Galaxy Note o Ultra](https://www.samsung.com/co/smartphones/galaxy-s24-ultra/), etc....

> Este mercado existe, pero no es tan grande.

Los fabricantes de chips son muy conscientes de que cada generación de chip nuevo tiene que gastar menos electricidad y aveces tienen saltos espectaculares, por eso el MacBook Pro desde la generación de los Chips Apple M: m1, m2, m3, m4. han ido aumentando de una manera fuerte la duración de la batería de los laptops y ahora es normal que la batería de un laptop dure doce horas. 

Los teléfonos siguen exigiendose cada vez más porque las Apps son cada vez más complejas y sotisficadas, pero esa es parte de la razón del por qué la batería tiende a durar esto.

El uso intensivo del telefóno lo calienta, y el calor al estar tan cerca de la batería puede causar un efecto de explosión y a **esto le paso a una marca Galaxy Note que básicamente se convertian en granadas en el bolsillo.**

<img src="https://c.files.bbci.co.uk/13BDB/production/_90995808_burntnotearielgonzalez.jpg">

*Imagen Tomada De: https://www.bbc.com/mundo/noticias-37361044*

**Asi que los fabricantes de los teléfonos deben tener mucho cuidado con no pasarse de cierta cantidad de flujo eléctrico para que no se caliente el teléfono y no explote.**

> Al día de hoy esto casi no es un problema.

---

Volviendo al tema de la arquitectura de Chips X86, RISC, ARM.

[ARM](https://es.wikipedia.org/wiki/Arquitectura_ARM) domina la arquitectura de los chips de los teléfonos y los SOC, ARM una empresa que fue adquirida por una empresa japonesa: [SoftBank](https://www.softbank.jp/en// "Softbank.jp") y en la cual ese diseño es en el que estan basados los chips de apple, la tecnología hoy en día está mudando casi todo a un System on a Chip debido a que son más eficientes.

Pues en un teléfono inteligente o en un iWatch o Reloj inteligente, en anillos sensores de salud, en el automovil del sistema de entretenimiento hay un SOC.

Muchas veces en estos sistemas de SOC, agregan cosas completamente nuevas que no existen en la computación de escritorio como [las unidades de procesamiento neuronal: las NPUs o Neural Processing Units.](https://www.xataka.com/basics/npu-que-sirve-este-tipo-procesador)

Apple es el pionero de esto, pero ahora todos los fabricantes lo hacen.

Es un chip que como la [GPU](https://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico) hace procesamiento paralelo. Recordemos que GPU quiere decir Graphics Processing Unit, es decir que es una unidad de procesamiento gráfico, no fue diseñada para eso, hay nuevos chips inicialmente inventados de google, llamados [TPU - Tensor Processing Units](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm?hl=es-419), que tambien se estan colocando dentro de los celulares porque ahora los teléfonos estan haciendo uso de la IA como por ejemplo: Cuando haces un dictado de voz, cuando usas asistentes, estas haciendo uso de machine learning, cuando el celular te coloca filtros por medio de [Snapchat](https://www.snapchat.com/es) o [Instagram](https://www.instagram.com/), el celular utiliza estas NPUs que vienen integradas en el CHIP completo.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZFtSh0clR_Uyz1cmX9k2aYaAy51AbMw_w&s">

Las CPUs que están dentro de un System on a Chip son muy similares a la CPU a la de una computadora normal, el mismo procesamiento por Gigahertz, las mismas unidades, e incluso tienen nucleos. Hoy en día es normal es más normal ver multinucleos en el chip de una celular que en el chip de una computadora.

Los SOC tienden a tener 16 nucleos donde tipicamente en las computadoras de arquitectura x86 veaimos de cuatro a ocho nucleos.

---

A medida de que la inteligencia artificial captura todo el planeta, empezamos a tener una hiperoptimización de cosas distintas. La inteligencia artificial está conectada  directamente a plantas de energia nuclear por lo que el problema de la energia no es el problema que creemos, nuestro problema es más de memoría y velocidad de procesamiento en donde los SOC tambien son ideales para esto. 

Porque en el modelo anterior la GPU y la memoria estaban aparte y en el modelo nuevo, el procesador de un Iphone comparte la memoria entre la CPU, GPU, NPU 

NPU = Procesador Neuronal de IA

Cuando el OS no necesita tanta RAM, esa RAM la puede aprovechar completamente la IA **haciendo estos sistemas mucho más eficientes.**

Durante 2025, china le gano en un momento a OpenAI aprovechandose de esta característica para poder crear modelos de inteligencia artificial que corran en local en laptops y es en parte de que Apple a pesar de estar atrás en la carrera de IA sigue constantemente liderando el desarrollo de IA local por los SOC y su arquitectura de memoria unificada.

> Esto sucedió mediante DeepSeek 2025

> Unified Memory Architecture by Apple

<img src="https://media.igeeksblog.com/wp-content/uploads/2025/07/Unified-memory-architecture.jpg.webp">











---











## GPUs: Procesadores Gráficos y de AI

Las primeras computadoras no tenían pantalla, pues su funcionalidad era que cuando tu le dabas datos y hacias [calculos de computo](https://en.wikipedia.org/wiki/Computation), te imprimian los calculos.

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/ENIAC-changing_a_tube.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Computadora#/media/Archivo:ENIAC-changing_a_tube.jpg*

**Las primeras pantallas no eran de realmente computadoras**, eran un instrumento electrónico para ver las ondas electromagnéticas llamada osciloscopio y unos ingenieros encontraron cómo usar la imagen del osciloscopio para colocar dos palitos y una bolita que rebotaba y asi nace el primer juego de la historia **PONG**.

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Osciloscopio_locomotora.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Osciloscopio*

<img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Pong_Game_Test2.gif">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Pong*

Encontré que el juego, tiene su propia pagina por ende si se desea jugar ingrese al siguente link: https://www.ponggame.org/

Desde ese momento los [videojuegos](https://es.wikipedia.org/wiki/Videojuego) empezaron a usar la computación para empujar cada vez más lo que era posible a nivel gráfico siendo asi:

* Primero hubo gráficos de [videojuego](https://es.wikipedia.org/wiki/Videojuego) antes de que hubieran sistemas operativos gráficos.

En sistemas [UNIX](https://es.wikipedia.org/wiki/Unix) o en [DOS](https://es.wikipedia.org/wiki/DOS) uno podia jugar juegos como [Tetris](https://es.wikipedia.org/wiki/Tetris), [Mario Bros](https://es.wikipedia.org/wiki/Mario_Bros.), [Prince of Persia](https://es.wikipedia.org/wiki/Prince_of_Persia_(videojuego_de_1989)) sin necesidad de todavia tener ventanas porque cargaban cada una de estas pantallas y eran juegos muy sencillos que llevaban al máximo la capacidad de chips.

<img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Prince_of_Persia_1_-_MS-DOS_-_Gameplay_-_Potion.gif">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Prince_of_Persia_(videojuego_de_1989)*

> Si no fuera por los videojuegos no habriamos llevado los chips a su maximo nivel.

Gracias a esto, empezó a existir una industria que creaba chips específicamente para poner a correr esos gráficos para diseño gráfico, para [producción audiovisual](https://es.wikipedia.org/wiki/Producci%C3%B3n_audiovisual "Producción Audiovisual concept by Wikipedida") de [efectos especiales](https://es.wikipedia.org/wiki/Efectos_especiales "Efectos Especiales concept by Wikipedia"), pero sobre todo para videojuegos.

Esos chips se llaman [Unidades de Procesamiento Gráfico = Graphics Processing Unit = GPU](https://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico "GPU concept by Wikipedia")

Lecturas Recomendadas:

1. Qué es una GPU by AWS: https://aws.amazon.com/es/what-is/gpu/

2. Qué es una GPU by IBM: https://www.ibm.com/mx-es/think/topics/gpu

3. Qué es una GPU by NVIDIA: https://www.nvidia.com/es-la/drivers/what-is-gpu-computing/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/6600GT_GPU.jpg/330px-6600GT_GPU.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico*

---

**¿Cual es la diferencia entre la CPU y una GPU?**

Las CPUs procesan de manera serial la información a través de ciclos. Y tienen millones de transistores que hacen cálculos matemáticos hipercomplejos porque eso es lo que se necesita para correr una hoja de calculo en [excel](https://www.microsoft.com/es-es/microsoft-365/excel), se necesitan para los calculos que se necesita para navegar una pagina web y todo eso que hacemos en una computadora normal.

Una GPU realmente son muchísimos núcleos de procesadores chiquitos por ende hacen muchos menos cálculos con mucho menos poder, pero como son muchísimos núcleos, los hacen al mismo tiempo.

* Lectura Recomendada: https://es.wikipedia.org/wiki/Computaci%C3%B3n_paralela

Representar una imagen en pantalla es representar un cálculo de una matriz de millones de puntos de luz, conocida como [pixeles](https://es.wikipedia.org/wiki/P%C3%ADxel). Pues cada uno de esos puntos debe calcular el punto de brillo que tienen a partir de prender [el rojo, verde o azul. (Red, Green, Blue = RGB)](https://es.wikipedia.org/wiki/RGB) y ese brillo tiene que calcularse al mismo tiempo.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pixeles_de_telefono.jpg/330px-Pixeles_de_telefono.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/P%C3%ADxel*

Anteriormente en el pasado una imagen cargaba como una línea, luego de otra linea de pixeles y eso es procesamiento serial, lo que haría una CPU. Que la imagen de repente cargue y valla cambiando dinámicamente es [procesamiento paralelo](https://www.ibm.com/es-es/think/topics/parallel-computing), esa es la magia de una GPU.

> Tu puedes ver los pixeles: los de un teléfono, sobre todo un telefono moderno... Son muy chiquitos porque son microscópicos, por más que acerques el ojo no lo alcanzas a ver, pero si tienes un monitor de toda la vida sin tanta resolución, puedes acercar los ojos a la pantalla.... Podras ver las lineas de rojo, verde y azul con tus ojos humanos.

Video Recomendado: https://www.youtube.com/watch?v=cId5PMLKEK8

---

[NVIDIA](https://www.nvidia.com/es-la/) y [ATI](https://es.wikipedia.org/wiki/ATI_Technologies), que luego fue adquirida por [AMD](https://www.amd.com/es.html), crearon esta industria de las [tarjetas gráficas](https://es.wikipedia.org/wiki/Tarjeta_gr%C3%A1fica "Tárjeta Gráfica concept by Wikipedia"), de hecho si no fuera por esta industria, no habria crecido la industria de los videojuegos, una consola de videojuegos en esencia es una computadora que tiene todas las partes de una computadora por dentro, pero cuyo su sistema operativo esta especificamente optimizado para la reproduccción de videojuegos.

Y sus chips incluyen GPUs por supuesto.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sapphire-Radeon-HD-5570-Video-Card.jpg/500px-Sapphire-Radeon-HD-5570-Video-Card.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Tarjeta_gr%C3%A1fica*

---

Cuando hablamos de [Sistemas Operativos](#qué-es-un-sistema-operativo), vimos un poco sobre [interrupciones](https://es.wikipedia.org/wiki/Interrupci%C3%B3n): Mecanismos del OS para darle prioridad de unos procesos contra otros por eso cuando tu computadora esta muy colgada haciendo un proceso muy complejo, tu mouse se puede mover a alta velocidad porque el mouse tiene una alta prioridad en la jerarquia.

Cuando se procesa una pantalla imaginate que la GPU se cuelgue y solamente tengas imagen en el 75% de la pantalla y el resto se quede quieto, seria raro ¿No?

Asi que las GPUs fueron originalmente diseñadas para que toda la pantalla tenga la misma prioridad a traves de un sistema llamado [pipelines](https://en.wikipedia.org/wiki/Graphics_pipeline) que en resumen, los primeros circuitos de GPU eran sencillos... donde simplemente estaban encargados de sectores en la pantalla en donde todos los sectores de la pantalla tienen la misma prioridad y todos deben presentar una imagen.

No eran versátiles de programar, pero por la [ley de moore](https://es.wikipedia.org/wiki/Ley_de_Moore) a medida de que aumentaba exponencialmente la complejidad de los transistores empezaron a emerger características como la de generación de texturas, se programaron shaders, luces y cálculos de física porque es todo lo que necesitaba procesamiento paralelo, como pasa mucho en los videojuegos se podia pasar en estos cientos de miles de núcleos que hacen cálculos paralelos de alta velocidad.

<img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Ley_de_Moore.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Ley_de_Moore*

Entonces asi, emergió un nuevo tipo de computación paralela que es la forma en la que funciona toda la industria de los efectos especiales, de los video juegos, de la animación.

> Es interesante pensar entonces, de los ivdeojuegos como una simulación de la vida real en donde hay unos cálculos físicos que se estan realizando todo el tiempo.

Video Recomendado para Analizar el Mundo de un Juego (Es un juego como tal, pero se puede analizar desde perspectivas computacionales las cuales simulan la física): 
**BLACK MYTH WUKONG Gameplay Walkthrough FULL GAME 100% (4K 60FPS) No Commentary** - https://www.youtube.com/watch?v=_R5IdnlZ0R4

Pero como necesitan nunca trabarse, no puede usar la memoria RAM tradicional que en una computadora esta muy lejos del chip (Esto es mucho antes de los System on a Chip que tienen todo integrado.)

Asi que las GPUs son tarjetas que, además de tener estos procesadores gráficos tienen una memoria especial independiente y esa memoria se le conoce como [VRAM y es la memoria de RAM de Video. ](https://www.lenovo.com/co/es/glosario/memoria-de-video/ "VRAM concept by Leonovo")

Una memoria volátil especialmente para esa computación paralela. Asi que cuando uno empieza a jugar videojuegos, uno carga datos en la VRAM asi que ahí es donde se cargan las texturas de tu videojuego, los polígonos y todos esos cálculos de física que vas a usar cuadno estás jugando un juego tridimensional.

A continuación una imagen de Drake (Uncharted 2: El reino de los ladrones, Playstation 3 - 30.000 Poligonos)

<img src="https://mediamaster.vandal.net/i/620x395/4-2014/201441116398_1.jpg">

*Imagen Tomada De: https://mediamaster.vandal.net/i/620x395/4-2014/201441116398_1.jpg*

---

**¿Qué otras cosas requieren procesamiento paralelo?**

Por ejemplo: El mundo.

Cuanto tú quieres modelar el sistema de las nubes para poder predecir el clima. Necesitas el procesamiento paralelo para predecir el clima y asi entonces un procesamiento paralelo de muchísimas variables al mismo tiempo.

<img src="https://services.meteored.com/img/article/-247062-hasta-cuantos-dias-de-antelacion-se-puede-predecir-el-tiempo--136281-6_1280.jpg">

*Imagen Tomada De: https://www.tiempo.com/ram/247062/hasta-cuantos-dias-de-antelacion-se-puede-predecir-el-tiempo/*

Siendo asi las GPUs ideales para simulación.

Hubo una época en las que investigadores que creaban supercomputadoras para simulaciones de física, de estrellas, agujeros negros, etc...

La física que rige estrellas, galaxias, agujeros negros, materia oscura, energía oscura o la expansión cósmica implica ecuaciones extremadamente complejas (como las de la relatividad general, termodinámica de gas, dinámica de fluidos, campos magnéticos, etc.).

Estas ecuaciones no tienen soluciones simples y requieren calcular millones o billones de interacciones simultáneas.

Eso sólo es posible con [supercomputadoras de alto rendimiento (HPC)](https://www.ibm.com/es-es/think/topics/hpc "HPC concept by IBM"), capaces de realizar billones de cálculos por segundo para aproximar la realidad física.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_catalyst_high_performance_computing_%28HPC%29.jpg/1200px-The_catalyst_high_performance_computing_%28HPC%29.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Archivo:The_catalyst_high_performance_computing_%28HPC%29.jpg*

Lectura Recomendada:

* Frontier - La simulación computacional del universo: https://www.universetoday.com/articles/a-superfast-supercomputer-creates-the-biggest-simulation-of-the-universe-yet

* La Supercomputadora FRONTIER presenta la simulación del universo más gramde jamás realizada: https://www.youtube.com/watch?v=WpUZmXpVIDA

* Stampede2 - Utilizadas para simular sombras y entornos alrededor de agujeros negros, incluyendo los discos de gas turbulentos que los rodean: https://www.universetoday.com/articles/researchers-simulate-what-a-black-hole-shadow-look-like 

* New NASA Black Hole Visualization Takes Viewers Beyond the Brink: https://science.nasa.gov/universe/black-holes/supermassive-black-holes/new-nasa-black-hole-visualization-takes-viewers-beyond-the-brink/

> Esto me hace pensar entonces qué: **¿Qué uso le das a tu computadora en tu día a día?** Pues teniendo en cuenta lo hablado, por medio de las matemáticas y la computación se pueden realizar diferentes modelos computacionales para hacer predicciones. ¿Te imaginas una predicción sobre el desarrollo humano? Da miedo con pensarlo.

> ¿Cómo será la vida de un trabajador de la [NASA](https://www.nasa.gov/ "www.nasa.gov")? Y quienes serán los ejecutivos de esta gran organización? Pienso que en cualquier lado de forma universal se le puede reconocer aunque no se tenga tanto conocimiento de esta.

Se dieron cuenta que el Chip de la [PlayStation 3](https://www.playstation.com/es-co/playstation-history/2007-ps3-ps-vita/) [un chip reado por IBM que combinaba CPU y GPU](https://www.xataka.com/videojuegos/procesador-cell-utilizado-sony-playstation-3-pequeno-prodigio-tecnologia-que-hoy-asombra-su-potencia "Chip de PS3 creado por IBM - Explicación by Xataka") para los videojuegos de PS3 era increiblemente eficiente, y como en el ps3 se puede instalar linux de toda la vida empezaron a comprar PS3 en masa y a crear [clústeres](https://www.salesforce.com/mx/blog/clusteres/ "Explicación Clústeres by SalesForce") de PlayStation con Linux para hacer simulaciones y fabricar supercomputadoras mucho más barato de lo que cuesta una supercomputadora porque a la final del día **Un videojuego es una simulación del mundo real** asi que sirve perfectamente para la física.

Video Recomendado - La PS3 usaba el procesador Cell Broadband Engine: https://www.dailymotion.com/video/x9gtlqe

Lectura Recomendadas:

* https://en.wikipedia.org/wiki/PlayStation_3_cluster

* https://www.infobae.com/tecno/2025/02/26/construyen-una-supercomputadora-con-1760-playstation-esta-es-la-historia-que-dejo-a-muchos-sorprendidos/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CondorCluster.png/500px-CondorCluster.png">

*Imagen Tomada De: https://en.wikipedia.org/wiki/PlayStation_3_cluster*


Porque el dinero: [Sony](https://www.sony.com.co/homepage), [Microsoft con el Xbox](https://www.xbox.com/es-CO/), [Nintendo](https://www.nintendo.com/es-es/) (Nintendo si hace dinero con las consolas). Sony y Microsoft no hacen dinero con sus consolas pues lo venden a perdida y ganan dinero con la venta de videojuegos.

PS3 era vendido a perdida.

Asi que playStation estaba perdiendo dinero haciendo todas estas consolas para las que nunca se iban a comprar videojuegos porque las estaban usando científicos, por lo que dejaron de permitir esto.

> La computación científica corría en PlayStation.

La inteligencia artificial también es procesamiento paralelo pues cuando tu utilizas un lenguaje de inteligencia artificial para generar un texto el modelo de lenguaje empieza a recorrer un arbol gigantesco de la esctructura del lenguaje humano con el que fue entrenado.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Colored_neural_network_es.svg/500px-Colored_neural_network_es.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Red_neuronal_artificial*

Lectura Recomendada: https://www.ibm.com/es-es/think/topics/deep-learning

Asi mismo trata de encontrar diferentes caminos para responder una pregunta. La que tu le haces a [ChatGPT](https://chatgpt.com/ "https://chatgpt.com/") o a [DeepSeek](https://chat.deepseek.com/ "https://chat.deepseek.com/"), a [claude](https://claude.ai/ "https://claude.ai/") o a [Gemini](https://gemini.google.com/ "https://gemini.google.com/") o a cualquier modelo que utilices.

<img src="https://planetachatbot.com/wp-content/uploads/2023/12/2.png">

*Imagen Tomada De: https://planetachatbot.com/estudio-exhaustivo-de-grandes-modelos-lenguaje/*

El punto es que el procesamiento paralelo ocurre con GPUs originalmente, eventualmente empezamos a utilizar chips más especializados.

Inicialmente los primeros modelos de AI antes de la superinteligencia, fueron entrenados en GPUs.

---

[Los autos autónomos](https://www.mapfre.com.co/seguros-carros/preguntas-frecuentes/que-son-los-vehiculos-autonomos/ "Autos Autónomos concept by Mapfre") como los [Tesla](https://www.tesla.com/es_co) o [Waymo de Google](https://waymo.com/intl/es/) usan GPUs, porque asi una GPU tiene que procesar cada píxel de una pantalla, un automóvil usa las cámaras y los radares que tiene en el marco del automóvil en su estructura para capturar imágenes del mundo exterior.

Todo esto tiene que ser procesado en tiempo real para convertirla en los polígonos tridiomensionales que le permiten a un algoritmo de inteligencia artificial decidir si el auto va a frenar, acelarar o moverse.

<img src="https://storage.googleapis.com/waymo-prod-cdn/uploads/6766134c37d8067dbd109f39419595db-16-9-timeline-gif.gif">

*Imagen Tomada De: https://waymo.com/blog/2023/01/why-i-ride-with-waymo-maya

Sin GPUs, ese procesamiento paralelo de alta velocidad, de cálculos relativamente simples, pero **Millones al mismo tiempo** no sería posible.

---

Las CPUs ejecutan instrucciones en lenguaje máquina, y el software de bajo nivel que las inicializa suele escribirse en lenguaje ensamblador. Este código es el encargado de iniciar el proceso de arranque (boot), cargar el kernel y dar comienzo al sistema operativo.

Las aplicaciones que se programan en lenguajes como [C++](https://es.wikipedia.org/wiki/C%2B%2B), [Python](https://www.python.org/), [Visual Basic](https://es.wikipedia.org/wiki/Visual_Basic) entre otros... Todos esos lenguajes compilan al lenguaje ensamblador de la CPU, las GPUs tienen algo muy parecido.

Y fabricantes como [NVIDIA](https://www.nvidia.com/es-la/) han creado lenguajes intermedios para que los programadores le hablen al metal para asi poder programar el chip de la GPU, el más popular en este momento se llama [CUDA de NVIDIA](https://es.wikipedia.org/wiki/CUDA), inicialmente pensada para videojuegos.

CUDA es parte de la razón por la que la revolución de la AI es posible pues permite hacer estos cálculos masivos reprogramando el comportamiento de chips que originalmente fueron pensados para mover pixeles.

Lectura Recomendada: https://www.lenovo.com/co/es/glosario/cuda-toolkit/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Nvidia_CUDA_Logo.jpg/406px-Nvidia_CUDA_Logo.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/CUDA*

Las GPUs también se programan y se diseñan a nivel físico de hardware con consideraciones distintas: La CPU que es el procesador que arranca el OS está en el corazón de la tarjeta madre de una computadora o de la tarjeta central de un teléfono, pero la GPU se conecta a alta velocidad a través de un puerto que se llama [PCI-E](https://es.wikipedia.org/wiki/PCI_Express "PCI-E concept by Wikipedia").

Una serie de muesquintas que se conectan directamente a la electrónica de la tarjeta madre, en un telefóno o en un computador de apple que utilice System on a Chip, la GPUs estan directamente pegadas a la CPU en el SOC.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/PCI-Express-Bus-1-lane.jpg/500px-PCI-Express-Bus-1-lane.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/PCI_Express*

En una computadora normal, [la CPU tiene un ventilador o un sistema de refrigeramiento por agua que enfría la CPU](https://es.wikipedia.org/wiki/Enfriamiento_de_computadoras "Enfriamiento de Computadoras by Wikipedia"), pero las GPUs también se calientan, así que tienen sus propios sistemas de enfriamiento paralelo.

Lectura Recomendada: https://www.sciencedirect.com/science/article/abs/pii/S0306261917310541

Sus propios ventiladores o su propia refrigreración de agua, en algunos casos como en las computadoras de videojuegos más poderosas, o en las computadoras de render de efectos especiales (VFX), o en las supercomputadoras de simulación para efectos científicos, llegan a enfriarlas con aceite, el aceite no conduce electricidad asi que hay computadoras que se hunden en aceite para que el aceite disipe el calor. 

Lectura Recomendada: https://www.kingston.com/es/blog/gaming/mineral-oil-cooling-pc-builds

<img src="https://www.profesionalreview.com/wp-content/uploads/2021/03/PC-refrigerado-por-inmersion.jpg">

*Imagen Tomada De: https://www.profesionalreview.com/2021/03/14/refrigeracion-por-inmersion/*

<img src="https://i.blogs.es/159ef2/aceite_refrigerantepc/1366_2000.jpg">

*Imagen Tomada De: https://www.xataka.com/ordenadores/refrigeracion-por-aceite*

---

**Codecs**

Im Codificador-Decodificador. Un tipo de algoritmo de compresión y descompresión que es por ejemplo, la forma en la que funciona el video. Anteriormente los videos eran súper pesados y ahora son mucho más livianos. Antes teniamos [blu-rays](https://es.wikipedia.org/wiki/Disco_Blu-ray) y ahora tenemos youtube y netfix.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/BluRayDiscBack.png/500px-BluRayDiscBack.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Disco_Blu-ray*

Esos algoritmos gastan muchísimo el chip, antes utilizaban la GPU, y mucho más antes la CPU. Ahora usan transistores especializados dentro de la GPU como instrucciones que solamente se encargan de codificar y descodificar el video. Usando mucho menos electricidad.

Lo mismo pasa con la simulación de ciertos video juegos.

---

Los videojuegos empezaron a simular el comportamiento de los [fotones](https://es.wikipedia.org/wiki/Fot%C3%B3n) del mundo real, el comportamiento de la luz con una técnica llamada [ray tracing](https://es.wikipedia.org/wiki/Trazado_de_rayos "Ray Tracing by Wikipedia") que inicialmente se programaba en código, pero ahora se crean en el transistor, en los chips y la GPU tiene unidades especificas diseñadas para [ray tracing](https://www.lenovo.com/co/es/glosario/ray-tracing/ "Ray Tracing by Lenovo").

> Black Myth: Wukong RTX ON.

Video Recomendado: Gameplay sin comentarios de Black Myth Wukong - https://www.youtube.com/watch?v=T4DFKOlrXCQ

<img src="https://i.blogs.es/0bc8f8/black-myth-wukong-fondos-pantalla-2049705/650_1200.jpeg">

*Imagen Tomada De: https://www.xataka.com/videojuegos/black-myth-wukong-arrastra-a-steam-su-exito-masivo-plataforma-ha-batido-su-record-historico-jugadores*

Con la inteligencia artificial para lo mismo. Pues la AI es en esencia multiplicación de matrices y recorrido de árboles, eso se puede programar en el chip y es la esencia de las [unidades de procesamiento neural](https://www.xataka.com/basics/npu-que-sirve-este-tipo-procesador).

NVIDIA por ejemplo, tiene chips que solamente hacen eso.

---

Antes de que la AI consumiera grandes cantidades de chips gráficos, lo hizo las [criptomonedas](https://www.bancosantander.es/glosario/criptomoneda "Criptomonedas by Banco Santander"): Bitcoin y cada moneda de [BlockChain](https://www.blockchain.com/es/) requiere hacer un cálculo matemático muy particular para que el blockchain funcione de manera cifrada. Ese cálculo es más amigable en procesamiento paralelo que en procesamiento serial. Asi que aprovecha las GPUs y como Bitcoin recompensa con Criptomonedas a las personas que hacen este proceso de ejecutar las ecuaciones matemáticas llamado [Criptomineria](https://es.wikipedia.org/wiki/Miner%C3%ADa_de_bitcoin "Criptomineria by Wikipedia"), se creó toda una industria de minería de Bitcoin que es poner a correr estas GPUs al maximo en grandes granjas de servidores pegadas a granjas de hirdroeléctricas, plantas de energia nuclear, energia basada en gas, etc...

Hay paises enteros que tienen cosas asi, como por ejemplo El Salvador, eso hizo que la demanda de Chips aumentara justo antes de que llegara la inteligencia artificial.

Lectura Recomendada: 

* https://www.c3controls.com/es/documento-tecnico/planificacion-de-una-operacion-de-criptomineria

* https://bitcoin.org/bitcoin.pdf

* https://www.xataka.com/servicios/bitcoin-la-tecnologia-detras-de-la-moneda-p2p

> Interesante paginas como https://www.coinbase.com/es-la

> Un rig de criptominería puede entenderse como un pequeño clúster de GPUs,
donde cada GPU ejecuta cálculos de [hashing](https://www.ionos.com/es-us/digitalguide/paginas-web/desarrollo-web/hashing/) de forma independiente,
un ejemplo clásico de computación masivamente paralela.

<img src="https://static.eldiario.es/clip/a25a5f72-f95d-434b-b2b6-c866ba4f200f_16-9-discover-aspect-ratio_default_0.webp">

*Imagen Tomada De: https://www.eldiario.es/tecnologia/fiebre-criptominera-reduce-precios-tarjetas-graficas-ordenadores_1_9289500.html*

---

No es como que las GPUs hayan abandonado la industria de los videojuegos pues todavia hay mucha innovación.

[VALVE](https://www.valvesoftware.com/es/): La empresa detrás de juegos como Portal, Half Life y el Sistema STEAM, tiene un sistema operativo llamado [SteamOS](https://store.steampowered.com/steamos?l=spanish) que reemplaza el OS que corres en tu computadora para maximiar el uso de recursos para un videojuego de tal manera que tu computadora se vuelve en esencia una consola de videojuegos.

Lectura Recomendada: 

* https://es.wikipedia.org/wiki/Valve_Corporation

* https://es.wikipedia.org/wiki/SteamOS


Tambien la realidad aumentada y la realidad virtual han aumentado la necesidad de procesadores gráficos porque en cada ojo estas procesando dos pantallas distintas para crear esa sensación de tridimensionalidad y presencia que tiene la realidad virtual, asi que aun sigue habiendo mucha innovación gráfica sólo que la IA lo absorbió mucho y todavía tenemos mucho procesamiento científico que hacer.

<img src="https://a.storyblok.com/f/102932/600x338/b2c03b0823/apple-vision-pro-gif.gif">

*Imagen Tomada De: https://creative.salon/articles/features/apple-vision-pro-and-adland*

> la Realidad Virtual (RV) te sumerge en un mundo completamente digital y te aísla del real (ej. cascos que bloquean tu vista), mientras que la Realidad Aumentada (RA) superpone elementos digitales como las Apple Vision Pro

**Las GPUs son un procesador revolucionario que avanzó la ciencia humana.**











---











## Qué es un Algoritmo y Qué es un Lenguaje de Programación

Un algoritmo es un conjunto de pasos logicos claramente definidos de una manera no ambigua para resolver un problema o lograr un objetivo.

Como por ejemplo: 

Imaginemos un sistema de aire acondicionado. Que de forma simplificada es un sistema que hace dos cosas: Calientan o enfrían el aire.

Pero una vez el aire esta caliente o frio, el siguente paso es distribuirlo al rededor del área que quieres condicionar asi que tienes que ventilar el aire.

Y si el aire ya está a la temperatura deseada por el usuario, tienes que dejar de ventilar el aire sino vas a perder esa temperatura.

Entonces para eso, los aires acondicionados utilizan un termostato el cual esta constantemente midiendo la temperatura del aire comparada con la que el usuario tiene.

**¿Cómo entonces expresamos todas estas funciones de una manera algoritmica?**

1. Tenemos que definir nuestras variables por lo que, al tener nuestro termostato... Este sabe dos cosas: La temperatura actual, definida como **Temperatura** y la temperatura que el usuario quiere definida como **Usuario**.

Vamos a asumir que el lugar donde estamos esta a veinte grados y que la temperatura que el usuario quiere es de 24 grados.

2. Tenemos que definir si tenemos que calentar o enfriar, asi que debemos crear una condición en donde si la temperatura es menor = *si (temperatura < usuario)* que la que el usuario quiere ¿Qué tenemos que hacer?.
Por lo que teniendo en cuenta lo que hemos asumido si (20 < 24) significa que está más frio asi que tenemos que activar el aire acondicionado en modo calentador. Es decir, calentar el aire.

¿En qué logramos parar de ventilar?, Digamos que la ventilación es un proceso que ocurre cada segundo y digamos que nuestro sistema está corriendo un ciclo cada segundo.

Por ende podemos expresar de forma algoritmica que en cada ciclo se esta evaluando el sistema, por ende si la temperatura es menor que la que pide el usuario, calentamos y sino lo que deberiamos hacer es enfriar.

Por ende, ¿Siempre deberiamos estar ventilando? No. ¿Qué pasa si la temperatura está perfecta? o Si (temperatura = usuario) pues ventilar sería un problema para el usuario por ende sólo vamos a ventilar cuando la temperatura sea distinta.

Por ende, hagamos que el ciclo cada vez que se repita pregunte si la temperatura es igual a la del usuario = *temperatura != usuario*.

Por ende: 

> Ciclo

    MIENTRAS (temperatura != usuario) 

>hacemos la condición 

    Si (temp < usuario) 
        calendar ()
    Sino
        Enfriar ()

    Ventilar ()

> Este ciclo sólo va a ocurrir en el momento que la temperatura sea diferente a la que desea el usuario y sino la sacamos. Esto ocurre en cada segundo en el ciclo de un aire acondicionado.

---

Hay algoritmos más simples. Como un hervidor que tiene que hervir el agua hasta los 100 grados centigrados lo que hace una vez este lleno de agua, al oprimir el boton... Muy probablemente la electrónica de tu hervidor dice: Mientras el Agua sea de Menor Temperatura a 100 Grados manten el elemento de calor calentando de tal manera que, cuando sea mayor de cien grados ese mientras deja de funcionar y al terminar de funcionar el ciclo se apaga.

O en otras palabras, más técnicas y algoritmicas.

    Mientras temperatura_actual < 100 Hacer
        activarElementoCalor()
        esperar(1 segundo)
        temperatura_actual < medirTemperatura()
    Fin Mientras

    ApagarElementoCalor()

Siendo asi este, un algoritmo.

---

Entonces un algoritmo es una serie de instrucciones, una expresión matemática de las ordenes que se le puede dar a un sistema.

Un lenguaje de programación no es necesariamente un algoritmo, los lenguajes de programación son lenguajes los cuales los algoritmos se expresan.

Pero tu puedes expresar un algoritmo como quieras.

Cuando te den una serie de instrucciones para completar una tarea, una serie de procesos que te den para tu trabajo... Eso es un algoritmo para que tú ejecutes y tu no eres un lenguaje de programación.

Los lenguajes de programación son mecanismos escritos típicamente en un lenguaje inglés adaptado, como por ejemplo: Javascript, Python, C++, Visual Basic, etc...

Que transforman estas instrucciones en el lenguaje de la máquina, siendo este el lenguaje que usan los chips para hacer estas operaciones matemáticas y este es conocido como Assembler o Lenguaje de Ensamblado o Lenguaje Ensamblador.

---

En nuestra era moderna, los lenguajes corren en el chip de dos maneras.

Hay un tipo de lenguajes como por ejemplo Java o C o C++ que cuando se transforman al lenguaje de máquina pasan por un proceso de compilación que es transformar ese lenguaje legible por humanos en el lenguaje de ceros y unos de la CPU.

El resultado de la compilación es un archivo ejecutable. En Windows son los archivos que tienen la extensión .EXE, en linux o en mac son los archivos que tienen permisos de ejecución y son los ejecutables, las aplicaciones arrancan como una app, que corren como un mecanismo del sistema.

El otro mecanismo son los lenguajes interpretados o interpretación. Cuando tu corres Javascript en el navegador o cuando usas algunos lenguajes de scripting como por ejemplo Python, estos lenguajes son interpretados sobre la marcha... Es decir que se leen línea a línea y en la memoria RAM, la computadora y su interprete (Interprete de Javascript o JS) por ejemplo, el navegador.

El interprete de python es el sistema de ejecución en tiempo real de Python, que se llama Python.

Ellos lo que hacen es transformar línea a línea el código a código que corre en el chip, pero sin compilarlo.

---

Existe una técnica interesante que se llama JIT Just in Time Compiler que lo que hace es compilar justo antes de ejecutar corriendolo todo en la memoria RAM de una manera segura.

Aprender cualquier lenguaje de programación conviene mucho, no hay que casarse con un lenguaje de programación porque estos cambian... No hay un lenguaje de programación mejor que otro, no porque sepas uno, dos, tres, cinco o diez lenguajes te hace mejor o peor ingeniero. Lo importante es lo que haces con los lenguajes.

Aprender lenguajes es trivial, realmente trivial. En el momento que domines dos lenguajes, puedes dominar tres, cuatro, cinco o diez, los que se deseen aprender.

No se trata de aprender muchos lenguajes y no hay lenguajes que paguen mejor que otros. Es simplemente que sepas cómo solucionar cualquier problema a través de algoritmos y que esos que esos algoritmos sepas expresarlos en diferentes lenguajes.

> Curiosidad Intelectual y no te Cases con Ningún Lenguaje. 