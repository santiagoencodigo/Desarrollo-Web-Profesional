# Curso de Fundamentos de Ingeniería de Software

Cómo funciona Internet, las computadoras, los chips, la inteligencia artificial y los sistemas del mundo. Desde cero obtendrás los fundamentos de la tecnología y el software moderno.

## Tabla de Contenidos

- [1. Proceso de arranque y encendido de computadoras y móviles](#proceso-de-arranque-y-encendido-de-computadoras-y-móviles)

- [2. Cómo Funciona un Circuito Electrónico](#cómo-funciona-un-circuito-electrónico)


<!-- Computación Básica -->

## Proceso de arranque y encendido de computadoras y móviles

_Oprimes el boton de prender tu computadora, empieza a fluir energia de la bateria de la computadora pasando por medio de cable a la fuente de energia de la ciudad._

Esta energia fluye a traves de la tarjeta madre, la electricidad es una onda asi mismo como la luz o el sonido. Esas ondas se miden en pulsos (Altos, Bajos), cuando tenemos un pulso alto es lo que nosotros consideramos un 1 y un pulso bajo es un 0, esos 1 y 0 es lo que nosotros llamamos bits.

> Bit: Unidad mínima de información (0 o 1).

<div style="display:flex; justify-content:center;">
<img src="https://codeguppy.com/blog/why-are-there-8-bits-in-a-byte/img/bit_byte.png" width="500px" height="150px">
</div>

<br>

La señal viaja del boton de encedido, hacia la tarjeta madre. Esta tarjeta madre tiene un chip especial de arranque llamado [BIOS (Basic Input Output System)](https://es.wikipedia.org/wiki/BIOS "Wikipedia - BIOS") que es el nombre antiguo, ahora las computadoras modernas lo llaman: [UEFI (Unified Extensible Firmware Interface)](https://es.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface "Wikipedia - UEFI")

En telefonos que tambien son computadoras esto tambien existe y se llama [Boot Loader.](https://es.wikipedia.org/wiki/Cargador_de_arranque "Wikipedia - Boot Loader / Gestor de Arranque")

**Por lo que en resumen:**

1. Power On Computer (Encendido): Al encender la computadora, la fuente de alimentación suministra energia a los componentes (CPU, RAM, placa base, etc.).

2. POST (Power On Self Test): La BIOS o UEFI ejecuta el POST, un diagnóstico que verifica el hardware básico y si encuentre errores (Ej: Ram Defectuosa) emite pitidos o códigos en la pantalla.

3. Bios busca en el disco (DISK): Una vez el POST es exitoso, la BIOS busca un dispositivo de arranque (disco duro, USD, USB) según el orden configurado en el Boot Priority. Todo esto para encontrar el Boot Loader.

4. Carga del Boot Loader en RAM: La BIOS carga el Boot Loader (ej: Windows Boot Manager) desde el disco a la RAM, ya que la GPU solo ejecuta intrucciones desde la RAM.

5. Carga del Sistema Operativo: El Boot Loader carga el nucleo (kernel) del sistema operativo desde el disco a la RAM, el sistema operativo toma control, inicializa los controladores (drivers) y lanza la interfaz de usuario.

>* En [Android](https://www.android.com/intl/es_es/ "android.com") el chip inicia un proceso llamado [PBL (Primary Boot Loader)](https://en.wikipedia.org/wiki/Booting_process_of_Android_devices "Wikipedia - Booting Process of Android Device")

>* En [Iphone](https://www.apple.com/co/iphone/ "apple.com/iphone") este mismo proceso se llama [Secure Rom.](https://support.apple.com/es-co/guide/security/secb3000f149/web "Explicación Proceso Arranque Iphone by Apple")

<!-- Mejora de redacción -->

Cuanto cualquier boton de encendido es activado (Recibe Señal Electrica) activa un procedimiento interno que esta grabado en el Harware de los transistores del chip, este proceso se llama **Post (Power On Self Test)**

Post prueba que todo en la computadora funcione y este conectado, enviando una señal de luz a todos los dispositivos.

Cuanto el prender un dispositivo y este suene, puede ser el hardware avisando de fallos.

---

El siguente paso de todo esto es que empieza a buscar en la memoria permantente del dispositivo las intrucciones de arranque que inicia el sistema operativo (Disco Duro)

El disco duro en un computador común y corriente es una caja que puede ir por aparte mientras que en un celular es un chip que va al lado.

Dentro de este disco duro hay instrucciones hechas con 1 y  0 teniendo una logica muy similar a la logica que se maneja en chip en atomos siendo la estructura atomica de los transistores siendo esto lo que nosotros conocemos como el codigo del software.

Una vez el post comprueba cada uno de los puertos (Teclado, mouse, pantalla y todo el hardware como tal) es lo que entonces inicia con lo que nosotros conocemos como un sistema operativo.

De un dispositivo todo lo que no sea con impulsos electricos de 1 y 0 es hardware, cuando ves 1 y 0 eso problemamente es software.

HARDWARE - Hard = Duro, Tangible -> Fisico

SOFTWARE - Soft = Suave, No tangible -> Digital -> "Di" -> 2 = 1, 0

El codigo esta organizado con 0 y 1 con un lenguaje que lo entiende uno de los circuitos electronicos más importantes de la computadora, **la unidad central de procesamiento o CPU** 

La cpu es la que se encarga de realizar todos los procesos matematicos que se convierten en imagenes, sonidos y procesos para los que utilizas tu telefono o computadora.

En la computadora es un chip independiente como el Intel Core i7, AMD Ryzen, Apple M4 - Estos nombres de chips de CPU, en los telefonos estos chips vienen integrados con otros chips que tiene en un mismo lugar video, memoria, disco duro y hasta antenas.

Esto se le conoce como Systen On A Chip = SOC -> Asi como el snap dragon o el CHIP M1 de apple, que son chips que contienen CPU y otros elementos al rededor y los dispositivos muy compactos asi como el Mac Book Air tambien utiliza este tipo de chips.

Son estos 1 y 0 que salen del disco duro y llega a la CPU y empieza a ejecutar intrucciones matematicas y ordenes de Hardware que empiezan a prender el teclado, el mouse, la pantalla, etc...

Son instruccoines nativas que interpreta un chip o CPU es un lenguaje que se le conoce como Ensamblador o Assembler que son las intrucciones que utilizan los compoenentes internos de la CPU para mover los pulsos electricos de tal manera que genera imagen, voz, sonido.

La CPU ejecuta entonces ese sistema de arranque de sistema operativo enviando las estructuras de instruccoines y su uso a una memoria temporal de muy alta velocidad que se le conoce como **Memoria RAM** esto es como armar una ciudad desde 0 con sus planos.

El corazón del sistema operativo se le conoce como KERNEL y es el codigo en SOFTWARE que primero interpreta la CPU que estructura en la memoria ram que funciona como intermediario entre el software y el hardware.

Cada vez que haces un click, ves algo en la pantalla, el kernel es el que se encarga de realizar la traducción de las intstrucciones que los ingenieros en softawre le dan en codigo para que los usuarios pasen acciones de la computadora al mundo real.

El kernel arranca los procesos de seguridad en el sistema operativo tambien de esa forma es uqe una computadora pueda tener datos con multiples dueños, que es el sistema usuarios y contraseñas que por medio de de llaves y acceso que descifran los datos privados de los usuarios.

Ahora el kernel tambien busca en el sistema operativo el proceso de arranque de la pantalla.

Las pantallas son matrices de luz, llamados pixeles.

Asi como cuando yo miro la pantalla.

Procesador Serial que no es ideal para generar graficos, pero sí para realizar calculos matematicos.

Procesador Paralelo = GPU - Que rinde bastante bien con los graficos y que sirve para la inteligencia artificial y otros procesos especiales.

Las pantallas con ccuadriculas de puntos de millones de puntos de luz y el sistema operativo decide de qué color es cada punto a una inmensa velocidad.

Debido al a diversidad de lo que pueden ser los dispositivos debido a que se pueden utilizar por medio de trackpack, mouse, teclado, tactil y demas... Los creadores de hardware crearon un manual de uso para todos los dispositivos en general y ese manual se expresa en codigo y ese software se conoce como DRIVERS, todos los dispositivos suelen tener una gran cantidad de drivers ya preinstalados.

La tecla enter envia una señal de luz en donde la CPU busca la orden dentro de lsistema operativo en donde encuentra en el disco duro un proceso criptografico matematico que descrifa el acceso con tu contraseña y eso le da al kernel el acceso a tus datos privados. Y asi es como funciona la seguridad con nuestros dispositivos y lleva funcoinando asi por más de 50 años. 

Todos los dispositivos o computadoras tienen estos sistemas de arranque, operativos, kerners, todos los dispositivos funcionan exactamente igual.


Este conocimiento es totalmente importante para cualquier persona que quiera ser profesional que aspiran a desarrollar software a ser ingenieros de software, a crear codigo para contruir codigo y a crear su carrera en la industria de la tecnologia

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

El voltaje es equivalente a la presión del agua en un tubo y mide la cantidad de energia que fluye desde la fuente, una tipica bateria AA genera 1.5 Voltios, una Bateria de 9 Voltios... Genera 9 Voltios, los enchufes de hogar generan de 110 a 220 Voltios.

Amperaje es equivalente a la cantidad de agua que pasa siendo distinto a la presión, por lo que dependiendo de esta puede cargar más rápido o no una bateria. **El voltaje hace que la electricidad fluya y ese flujo es el amperaje.**

La electricidad se puede convertir en luz con una lampara o tambien, con una pieza electronica llamada LED (Se pueden sobrecalentar si reciben demasiada corriente) Por lo que para controlar esa cantidad de voltaje, hay un componente electronico que podemos utilizar llamado resistencia.

La resistencia reduce el amperaje y absorbe esa energia, liberandola como calor. Por lo que, cuando un dispositivo se calienta es la resistencia y otros componentes electronicos liberando un alto flujo de corriente.

La resistencia mide cuanto puede reducir del amperaje con una unidad de medida de oposición al paso de la corriente llamada [Ohmios](https://es.wikipedia.org/wiki/Ohmio "Wikipedia - Ohmio")

<div style="display:flex; justify-content:center;">
<img src="https://img.freepik.com/vector-premium/led-resistencia-serie-conectados-bateria-9v-circuito-electrico-sencillo-lecciones-fisica_786898-12.jpg" width="400px" height="300px">
</div>

* Imagina un motor eléctrico básico: colocamos un imán permanente (o dos, para crear un campo magnético fuerte) y un conductor (como un anillo o bobina de metal) que lleva corriente eléctrica. Cuando la corriente fluye por el conductor, genera su propio campo magnético según la ley de Ampère, convirtiéndolo en un electroimán temporal. Este campo interactúa con el del imán permanente, produciendo una fuerza de Lorentz que causa repulsión o atracción entre ellos. Esta fuerza genera un torque (fuerza rotacional) que hace girar el anillo alrededor de un eje central. Para mantener el movimiento continuo y evitar que se detenga al alinearse los campos, usamos un conmutador (un interruptor rotatorio) que invierte la dirección de la corriente periódicamente. Así, capturamos ese movimiento circular en el eje, convirtiendo la energía eléctrica en mecánica y asi tenemos un motor eléctrico.

>Lorentz force: Es un principio físico fundamental detrás del funcionamiento de un motor eléctrico. Esta fuerza describe cómo una corriente elétrica en un conductor, en presencia de un campo magnético, genera una fuerza perpendicular que produce un movimiento, como rotación.

Las piezas moviles de un brazo electrico utilizan otro motor de presición llamado [SERVO](https://es.wikipedia.org/wiki/Servomotor "Wikipedia - Servomotor")

<div style="display:flex; justify-content:center;">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Rotterdam_Ahoy_Europort_2011_%2814%29.JPG/1200px-Rotterdam_Ahoy_Europort_2011_%2814%29.JPG" width="400px" height="300px">
</div>

*Imagen tomada de: https://es.wikipedia.org/wiki/Motor_el%C3%A9ctrico*

La electricidad se convierte en sonido cuando haces vibrar una membrana al ritmo de una onda electrica que esto se representa como un audio, a esas membranas las llamamos audifonos, parlantes, bocinas.

Un tocadiscos transforma la música grabada en un disco de vinilo que tiene tallado en forma de relieve la información sonora en patrones ondulados. Un brazo movido por un servo sostiene una aguja recorre el relieve del disco y los convierte en una honda electrica, que esto mismo es lo que mueve la membrana de un parlante, a la vez un LED que se enciende cuando el dispositivo esta encendido. Asi nosotros combinamos una serie de componentes para crear un producto asi como un[tocadiscos.](https://es.wikipedia.org/wiki/Tocadiscos "Wikipedia - Tocadiscos")

Un NTC/PTC  thermistor es una resistencia que puede cambiar de acuerdo a la temperatura y asi funcionan los termostatos y los termometros digitales.

Para prender un dispositivo utilizamos un switch o un interruptor que une dos fragmentos de cable con un pequeño punto de metal por el que el flujo de corriente puede fluir o no. Por lo que si necesitamos determinar que componentes encender de acuerdo a ciertas condiciones, necesitamos manipular los pasos de la corriente de forma automatica y eso lo hacen los **transistores** que de acuerdo a ciertas condiciones estos deciden cuando encender o apagar otros componentes.

La combinación de un monton de transistores es lo que le dan a los procesadores o microchips la capacidad de hacer operaciones matematicas.

Si queremos guardar el resultado de estas operaciones, utilizamos una memoria, es un componente que almacena electricidad de forma temproal mientras halla un flujo de electricidad continua y a esto se le llama condensador.

Y un grupo grande de condensadores es la forma en la que funcoina la memoria RAM de una computadora, cuando apagas al computadora esa memoria desaparece.

Si queremos que la memoria persista cuando la electricidad se va, utilizamos otros componentes que usan reacciones fisicas y magneticas de ciertos materiales para guardar información sin electricidad llamados discos duros. Lo más reconocidos hoy que no tienen partes moviles se les conoce como discos de estado solido = Solid State Drive = SSD

Lo que conocemos como USB, por dentro es un disco de estado solido.

En las memorias cuando un condensador esta lleno se le conoce como 1 y cuando esta vacio representa un 0. Es decir que los conedensadores convierten la energia electrica en bits, estos BITS es la base del cómo representamos información de forma digital. Estos 1 y 0 cuando se organizan en conjuntos o estructuras que los procesadores entienden y los convierten en instrucciones. A esto le llamamos Software.

Estos BITS almacenados en memoria viaja hacia el procesador a traves del circuito para ser ejecutado. Y como todo, entonces esto es la manipulación de flujo de electrones.






