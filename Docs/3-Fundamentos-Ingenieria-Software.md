# Curso de Fundamentos de Ingeniería de Software

Cómo funciona Internet, las computadoras, los chips, la inteligencia artificial y los sistemas del mundo. Desde cero los fundamentos de la tecnología y el software moderno.

* <a href="https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/tree/main">Haz click aqui para volver al repositorio.</a>

## Tabla de Contenidos

- [1. Proceso de arranque y encendido de computadoras y móviles](#proceso-de-arranque-y-encendido-de-computadoras-y-móviles)

- [2. Cómo Funciona un Circuito Electrónico](#cómo-funciona-un-circuito-electrónico)

- [3. Qué es un bit y qué es un byte](#qué-es-un-bit-y-qué-es-un-byte)

- [4. Qué es un procesador (CPU) y la memoria  (RAM)](#qué-es-un-procesador-cpu-y-la-memoria-ram)


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

> En todo lo que tenga una pantalla con software programable, hay una CPU.

<img src="https://static.platzi.com/media/user_upload/image-6402ac31-034f-4d21-9019-11e9784fbc9b.jpg">

CPU = Unidad Central De Procesamiento

Es donde las computadoras procesan datos, y la información la guarda en la memoria ram, un ejemplo claro puede ser como cuando se asignan variables y se desea realizar una operacion matemática:

    A = 1
    B = 2
    C = A + B

Al momento de razonar cuanto da el resultado C es el proceso que realiza tu cerebro, lo mismo se puede pensar como la CPU en un computador, y el lugar en donde se guarda esa información la podemos pensar como una RAM.

> De forma analogica: Cuando vas a hacer la operación en un papel, el proceso pasa por tu cabeza, y tu al escribirlo en el papel es hay donde se guarda la información y esto es equivalente a la RAM

son las empresas más famosas que fabrican CPU: 



[INTEL](https://www.intel.la/content/www/xl/es/homepage.html) Con procesadores como: INTEL con los procesadores [Xeon](https://www.intel.la/content/www/xl/es/products/details/processors/xeon.html), [Intel Core i7](https://www.intel.la/content/www/xl/es/products/sku/230490/intel-core-i713700-processor-30m-cache-up-to-5-20-ghz/specifications.html)

[AMD](https://www.amd.com/es.html "Home Page AMD"): Con procesadores [Ryzen](https://www.amd.com/es/products/processors/desktops/ryzen.html "Ryzen Processors by AMD")



---



**Tambien marcas de CPU moviles**

> Muy recomendable abrir cada uno de los vinculos a continuación, hay todo un mundo por explorar pues existe demasiada historia por leer.

* [Apple](https://www.apple.com/co/ "Apple.com") fabrica CPUs que tienen nombres como [M1](https://www.apple.com/co/newsroom/2020/11/apple-unleashes-m1/ "Newsroom M1 by Apple") o la A1 y la [M2](https://www.apple.com/co/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/ "Newsroom M2 by Apple"), [M3](https://www.apple.com/co/newsroom/2023/10/apple-unveils-m3-m3-pro-and-m3-max-the-most-advanced-chips-for-a-personal-computer/ "Newsroom M3 by Apple"), M4.

> Me pareció interesante que al buscar me encontre con un nuevo concepto: **Microarquitectura**

<img src = "https://www.apple.com/newsroom/images/live-action/wwdc-2022/Apple-WWDC22-M2-chip-M1-chip-2up-220606_big.jpg.large_2x.jpg">

*Imagen Tomada De: https://www.apple.com/co/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/*

> Se me genera una serie de dudas: ¿Cual será el grupo de trabajo que se encarga de descubrir nuevas versiones?, ¿Será un grupo de cientificos de la computación?, ¿Cómo es su proceso para crear nueva tecnología?, ¿Cómo programaron/crearon esas maquinas litograficas?, ¿Quienes seran los personajes influyentes en este topico?

* [Huawei](https://consumer.huawei.com/co/ "Huawei.com") tiene su propia marca de [procesadores](https://www.xatakamovil.com/tag/procesadores-huawei)

* Existe una marca llamada [Snapdragon](https://www.xataka.com/componentes/qualcomm-snapdragon-8-elite-caracteristicas-precio-ficha-tecnica "Ficha Técnica Snapdragon Elite 7 by Xataka")

> Exxisten muchas marcas de CPUs



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



Al diseñar un chip se tienen en cuenta muchas cosas como:

* La estrucuta de los transistores, las instrucciones.

* la disipación térmica del calor para poder hacerlos más veloces, 

Las CPU y en general todos los chips estan hechos del mismo atomo, el silicio.

El silicio es un atomo que tiene 14 protones en el nucleo y por ende el atomo #14 en la tabla periodica y este se encuentra en toda parte porque de hecho, de silicio esta hecha la arena.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdTL-FF0b1CUCkihXYlSwr_rKvt37YFzgxw&s">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Silicio*

Si nosotros tomamos la arena del arena u otro tipo de arena especializada y la limpiamos, para fundirla en un sólo cristal. A Ese cristal nosotros lo conocemos como **Wafer de Silicio** que es arena cristalizada con la que construimos chips.

Para que la arena se convierta en chips, utilizamos la **herramienta más avanzada de la existencia humana**, una cosa que se llama LASERS LITROGRÁFICOS.

> Laser Litografico extremo de ultravioleta - Parece de ciencia ficción

> IBM RESEARCH CHANNEL

El cristal de silicio en forma de circulo conocido como oblea entra a una maquina llamada Laser Litrografico extremo de ultravioleta, que esta maquina por dentro tiene un vacio, vacio como el del espacio.

Una vez dentro, un laser le dispara a una pequeña microscopica gota de estaño, generando asi una serie de reflejos de luz laser.

Que luego un sistema de espejos con un liso absoluto en una estructura increiblemente fina rebotan hasta llegar a un laser hiperenfocado (Esta es la parte EXTREMO ULTRAVIOLETA) que atraviesa una mascara fotografica, (Como el negativo de una fotografia vieja, en la parte de atras tiene un mapa o que tiene como plantilla o mascara) que es la estructura de como deben estar organizados los atomos de silicio para convertirse en transistores de electricidad que componen un circuito.

La mascara refleja sobre la oblea y durante varias pasadas, el laser empieza a dejar una marca de la mascara de la estructura de transistores, luego se le pasa por unos quimicos que limpian todos los residuos del proceso como si estuvieran relevando una fotografia y eso va construyendo las estructuras átomicas como si fueran un edificio que terminan componiendo miles de millones de transistores que hacen posible una CPU.

Por lo que en una CPU moderna la distancia de transistor entre transistor es de 25 atomos de silicio, por lo que **la humanidad es capaz de mover distancias atomicas**

Y no es un circuito plano, es un circuito tridimencional como si fuera un rasca cielos gigantesco de transistores, en donde de esa forma se peuden empacar más transistores en una CPU. Por eso, pese a que sea pequeño puede ser incluso algo pesado para su tamaño.

Esos millones de transistores dentro de un chip es lo que hace posible que correr navegadores como en el que estas viendo mis apuntes en este momento, video juegos, videos o inteligencia artificial.




---



Muchas empresas construyen estas maquinas, pero sólo una construye la más avanzada: El laser extremo ultravioleta y toda su integración que la hace una compañia de holanda llamada ASML.

Lectura Recomendable: https://es.wikipedia.org/wiki/ASML

---

Sabiendo esto, ¿Qué es lo qué hace que una CPU sea más veloz?: Una forma es agregarle muchos más transistores por lo que si quiero meterle más transistores, debo hacerlos más chiquitos, eso quiere decir que necesito laseres mucho más enfocados y con más contraste y eso es lo que hace ASML y por eso es tan importante la distancia que hay entre atomo y atomo.

Otra forma es hacerle pasar más corriente al circuito, más electricidad, el problema es que a más corriente, más calor, entonces hay que hacer un diseño que tenga una disipación termica más efectiva o colocarle mejor enfriamiento.

Otra técnica es que con la misma arquitectura colocar más nucleos, más procesadores pegados uno al otro, en donde en vez de hacer un proceso al tiempo, pueda hacer 2, 4, 8 procesos al tiempo y eso es lo que nosotros conocemos como nucleos.

En un WAFER/OBLEA no todos los chips quedan bien, pues muchas veces estos procesadores son hechos con una distancia atomica y puede que no queden perfectamente alineados. Despues del proceso de litografia, se realizan unos TEST y algunos nucleos no funcionan perfectamente bien, lo que hacen es vender el chip más barato... Por lo que:

* El intel core i3, intel core i7, y el intel core i5 son el mismo chip... lo que sucede es que en los i3, algunos nucleos fallaron. Y en los i7 ningún nucleo falló... y es de esa forma como venden las CPUs dependiendo de qué tanto falla o triunfa el proceso litografico del laser.

Los transistores de los proceasdores ejecutan operaciones matemáticas, pero esos datos necesitan guardarlos en algún lugar como una memoria. Cuando diseñas un procesador tienes que balancear ¿Le pongo memoria o le pongo más procesamiento? Necesitamos un minimo de memoria asi que la memoria chiquita que un procesador tiene por dentro se le conoce como registros o cache y son pequeños pedacitos de memoria que estan ahí, pero no es suficiente para cargar un sistema operativo pues para eso necesitas una memoria grande.

---

A esta memoria se le conoce como Memoria de Acceso Aleatorio o Random Access Memory = **RAM**

Estas se borran en el momento que el computador se reinicia y solamente funcionan cuando el computador tiene electricidad, la ventaja es que pueden ser muy veloces por lo que cuando la CPU necesita guardar datos, las guarda aqui.

Las memorias tienen una jerarquia a partir de cuan veloces son. Para que la cpu pueda acceder a un dato que se encuentra en el cache o en los registros que es la memoria que va dentro del chip del CPU, tomar ese dato toma de 1 a 20 nanosegundos a la CPU para acceder. Para dimensionar la cantidad de tiempo, **en un segundo hay mil millones de nano segundos.** 

> Por ende 20 nano segundos equivalen a 2 millonesimas de segundo, menos de un instante.

Para que la CPU tome un dato de la memoria RAM, le toma 70 nanosegundos por lo que puede ser de 2 a 3 veces más lenta que la memoria que se encuentra en la CPU. Toma mucho tiempo tomar de un disco duro un dato, pues si quieres tomar un archivo de un disco duro, lo que hace la CPU para interpretarlo es pasarlo del disco duro a la RAM.

---

La organización entre todos los componentes entre las instrucciones preprogramadas que tiene, su capacidad de realizar operaciones matemáticas, la memoria interna, los nucleos y la estructura de los transistores se le llama arquitectura.

Hay tres grandes arquitecturas que son la forma en la que diseñamos los procesadores:

* X86

* RISC

* ARM

Los diseñadores de procesadores se dieron cuenta que los programadores repiten mucho los mismos procesos: Abrir archivos, borrar archivos, hacer ciertas operaciones matemáticas. Se les ocurrió que en vez de hacer transistores de proposito general que puedieran hacer cualquier tipo de instrucciones, seria más veloz si ciertas acciones repetitivas se realizaran en transistores especificamente diseñados para esas acciones que en vez de expresarlas en código y procesarlas en cada uno de los transistores genericos. A esto se le conoce como instrucciones, que estas mismas determinan una arquitectura.

Por ejemplo:

Los procesadores **X86** casi siempre estan corriendo windows que esta almacenado en transistores programados(se les define como quemados) en la estructura de transistores de un chip, a medida que los chips fue avanzando en complejidad de insturcciones, empezamos a notar que para ciertos casos de uso como por ejemplo correr muchos chips en servidores que realizan muchas operaciones distintas, era mejor tener chips más simples.

Esto dio nacimiento a cierto tipo de arquitectura que trinfuo mucho a medida de los 90 y 2000 conocida como **RISC = Reduce Instructions Set Computer** que es básicamente un chip con instrucciones más genericas mucho más versatil.

Con la explosión de la telefonia movil que es en esencia un computador en nuestros bolsillos nos dimos cuenta de que necesitabamos un chip que gastara mucho menos electricidad con una más alta capacidad de procesamiento y que se calentara mucho menos porque de esa manera la bateria dura mucho más, la arquitectura más conocida para esta se le conoce como **ARM**

El tipo de procesador que se produce más es el X86 que se van produciendo lentamente cada vez menos porque cada vez más las personas tienen laptobs, computadoras portatiles en vez de tener computadoras de escritorio pues ARM es el caso ideal para estas computadoras, aun asi X86 sigue siendo muy popular en donde INTEL y AMD son los principales productores de este tipo de arquitectura.

* Los dispositivos ANDROID y IPHONE son los que más consumen chips ARM

Un detalle muy interesante de los CHIPS es la **Ejecución Especulativa** o tambien conocida como **Ejecución Predictiva** que consisten en que para ahorrar bateria y hacer más efectivos los procesadores, los procesadores tratan de predecir el código que van a correr, como por ejemplo: Si todos los días buscas una canción en spotify y la reproduces y pones a descodificar una canción, el procesador puede predecir eso y prepararse.

Esta ejeccución predictiva ha tenido muchas vulnerabilidades de seguridad informática y este ha sido la frontera para el diseño de un chip, es muy controversial.

Parte de la arquitectura de un procesador es el lenguaje de ensamble que es una serie de instrucciones que le explican al ser humano en un lenguaje muy cercano al humano en letras y numeros como pedirle a la CPU como hacer operaciones matemáticas. Es el lenguaje original con el que se hace el software, y cuando uno escribe código en lenguajes de programación normales y se hace un proceso de compilación, la compilación es convertir ese código en el lenguaje de ensamblado de la arquitectura de la CPU.

En el pasado antes de los lenguajes de programación y la memoria, la forma de programar las CPU antes de las memorias  era por medio de unas tarjetas a las que se les hacia unos huecos en donde al hueco representaba una instrucción en el lenguaje de ensamble o datos binarios como por ejemplo información númerica.

    A = 1 
    B = 2
    C = A + B

    A, B, C son variables.
    1, 2 son valores
    A + B es un proceso

La CPU calcula el numero 1 como un BYTE y asigna a la memoria RAM un espacio a las que se accede por medio de "Direcciones de memoria", por lo que al asignar 2 valores, se dejan esas dos variables en dos espacios de almacenamiento en la RAM por lo que estoy asignado que a ese espacio de almacenamiento que se va a llamar A o que se va a llamar B y que por dentro hay un 1 y un 2. Cuando declaro C, antes de hacer la operación matemática... reservo una dirección en la memoria a las que se les conoce como puntero o apuntadores. Por lo que se le solicita a la RAM cual es el valor de A y B en la posición de los apuntadores y en la CPU se suman los dos numeros para dar como resultado 3, que una vez generado se envia a la dirección de memoria que corresponde a la variable C. 

> Esto mismo ocurre cuando compilo cualquier lenguaje de programación a assembly language. ¿Cuanta información tiene que transcribirse?

**En la CPU se realizan las operaciones, en la RAM se guarda la información**

Casi todos los chips funcionan asi, aunque hay algunos chips que son especializados, asi como las CPU son unidades de procesamiento general. Tambien tenemos unos chips especializados llamados System on a chip que incluyen muchas otras funciones como las que tienen los telefonos, hay chips gráficos que se les conoce como GPU, hay CHIPS de inteligencia artificial que se les conoce como TPU.

> Quedo fascinado y me abruma un poco la cantidad de información a la cual hay que estudiar. Son tantos temas e historia por entender.






