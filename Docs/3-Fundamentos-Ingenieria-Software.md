# Curso de Fundamentos de Ingeniería de Software

Cómo funciona Internet, las computadoras, los chips, la inteligencia artificial y los sistemas del mundo. Desde cero obtendrás los fundamentos de la tecnología y el software moderno.

<!-- Computación Básica -->

## Proceso de arranque y encendido de computadoras y móviles

Oprimes el boton de prender tu computadora, empieza a fluir energia de la bateria de la computadora pasando por medio del cable a la fuente de energia de la ciudad.

Esta energia fluye a traves de la tarjeta madre, la electricidad es una onda asi mismo como la luz y el sonido es una onda, esas ondas se miden en pulsos (Altos, Bajos), cuando tenemos un pulso alto es lo que nosotros consideramos un 1 y un pulso bajo es un 0, esos 1 y 0 es lo que nosotros llamamos bits.

La señal viaja del boton de encedido, hacia la tarjeta madre. Esta tarjeta madre tiene un chip especial de arranque llamado BIOS (Basic Input Output System) que es el nombre antiguo, ahora las computadoras modernas lo llaman: UEFI (Unified Extensible Firmware Interface)

En telefonos que tambien son computadoras esto tambien existe y se llaman Boot Loader.

Power On Computer --> Bios Perform POST --> DISK - RAM -- Boot Loader.

En android el chip inicia un proceso llamado PBL (Primary Boot Loader) 

En Iphone este mismo proceso se llama Secure Rom. 

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


Este conocieminto es totalmente importante para cualquier persona que quiera ser profesional que aspiran a desarrollar software a ser ingenieros de software, a crear codigo para contruir codigo y a crear su carrera en la industria de la tecnologia




