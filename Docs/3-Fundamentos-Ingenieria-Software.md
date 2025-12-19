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