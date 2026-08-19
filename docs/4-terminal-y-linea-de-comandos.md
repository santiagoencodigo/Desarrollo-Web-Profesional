# 4. Terminal y Línea de Comandos

En esta sección encuentras mis apuntes completos sobre cómo utilizar la terminal **BASH** como una herramienta fundamental para interactuar directamente con el sistema operativo. A través de la línea de comandos podrás navegar entre carpetas, manipular archivos, gestionar permisos, entender procesos y emplear herramientas esenciales como `grep`, `curl`, `tar`, `gzip`, editores de texto y otras utilidades clave.

También verás cómo crear alias, personalizar la shell con ZSH y Oh My ZSH, optimizar el flujo de trabajo con Tmux, y hasta usar una terminal con inteligencia artificial integrada como Warp. Esta guía es una base sólida para comprender cómo funciona realmente el sistema desde dentro y cómo sacarle el máximo provecho a la terminal.

> **Terminal:** Es una herramienta que permite comunicarnos directamente con el sistema operativo mediante texto, en lugar de usar ventanas, botones o menús.
>
> **Línea de Comandos:** Es el espacio dentro de la terminal donde escribimos instrucciones (comandos) para que el sistema los ejecute.
>
> En lugar de hacer clic, escribimos órdenes como crear carpetas, mover archivos, instalar programas o revisar procesos. Esto nos da más control, rapidez y precisión, especialmente al trabajar con programación, servidores y sistemas avanzados.

**Profesor:** Enrique Devars (curso de Platzi).

---

## Tabla de Contenido

1. [Por qué la terminal define a los mejores desarrolladores](#por-qué-la-terminal-define-a-los-mejores-desarrolladores)
2. [Qué es una terminal y cómo funciona](#qué-es-una-terminal-y-cómo-funciona)
3. [Instalación de terminal Bash en Windows usando WSL](#instalación-de-terminal-bash-en-windows-usando-wsl)
4. [Primeros comandos esenciales en la terminal Linux](#primeros-comandos-esenciales-en-la-terminal-linux)
5. [Navegación entre directorios en Linux con comandos de terminal](#navegación-entre-directorios-en-linux-con-comandos-de-terminal)
6. [Crear y borrar archivos desde la terminal Linux](#crear-y-borrar-archivos-desde-la-terminal-linux)
7. [Comandos para explorar y manipular archivos de texto en terminal](#comandos-para-explorar-y-manipular-archivos-de-texto-en-terminal)
8. [Wildcards en la terminal para filtrar archivos](#wildcards-en-la-terminal-para-filtrar-archivos)
9. [Cómo usar grep y find en Linux](#cómo-usar-grep-y-find-en-linux)
10. [Tipos de comandos en Linux y cómo identificarlos](#tipos-de-comandos-en-linux-y-cómo-identificarlos)
11. [Redirecciones de terminal en Linux con operadores básicos](#redirecciones-de-terminal-en-linux-con-operadores-básicos)
12. [Operadores de control para encadenar comandos en Linux](#operadores-de-control-para-encadenar-comandos-en-linux)
13. [Configuración de alias permanentes en terminal Linux](#configuración-de-alias-permanentes-en-terminal-linux)
14. [Permisos de archivos en Linux con chmod](#permisos-de-archivos-en-linux-con-chmod)
15. [Variables de entorno en Bash explicadas](#variables-de-entorno-en-bash-explicadas)
16. [Uso de APT para gestionar paquetes en Linux](#uso-de-apt-para-gestionar-paquetes-en-linux)
17. [Homebrew: gestor de paquetes para Mac](#homebrew-gestor-de-paquetes-para-mac)
18. [Foreground y background en la terminal](#foreground-y-background-en-la-terminal)
19. [Cómo identificar y matar procesos en Linux](#cómo-identificar-y-matar-procesos-en-linux)
20. [Empaquetado y compresión de archivos con TAR y GZIP en Linux](#empaquetado-y-compresión-de-archivos-con-tar-y-gzip-en-linux)
21. [Vim y Nano: editores de texto en terminal](#vim-y-nano-editores-de-texto-en-terminal)
22. [Tmux para múltiples terminales en una ventana](#tmux-para-múltiples-terminales-en-una-ventana)
23. [Comandos de red en la terminal para verificar conectividad](#comandos-de-red-en-la-terminal-para-verificar-conectividad)
24. [Personaliza tu terminal con ZSH y Powerlevel10k](#personaliza-tu-terminal-con-zsh-y-powerlevel10k)
25. [Warp: la terminal con IA integrada](#warp-la-terminal-con-ia-integrada)
26. [Recursos para dominar la terminal Linux](#recursos-para-dominar-la-terminal-linux)

---

## Por qué la terminal define a los mejores desarrolladores

Empecemos con una historia que me marcó. **Toy Story** pudo no haber sido la película que conocemos por problemas con la terminal. Los animadores utilizaban un sistema de archivos compartidos; por errores de uno de los administradores del sistema, se empezaron a borrar cada uno de los archivos en cadena, **simplemente por ejecutar mal un comando**. Menos mal había un respaldo y se pudo mostrar esta película al mundo.

Los verdaderos profesionales dominan el entorno, entienden lo que sucede "bajo el capó" y para ello utilizan la línea de comandos dentro de la terminal porque te da: **control, precisión, fiabilidad** acerca de lo que está sucediendo en tu sistema.

Al usar la terminal no se hacen clics, se dan órdenes.

La terminal no es una reliquia del pasado, es la herramienta profesional por excelencia en los técnicos en programación.

**¿Qué se gana al aprenderlo?**

1. **Velocidad y precisión:** Automatizarás en unos segundos lo que con clics tomaría horas a través de interfaces gráficas.
2. **Conocimiento profundo:** Conocerás cómo funciona el sistema operativo y cómo se mueve la información dentro de él.
3. **Acceso a herramientas avanzadas:** Git para control de versiones, Docker para gestión de contenedores, `htop` para monitoreo eficiente de procesos, `nmap` para analítica de redes y sistemas, y demás herramientas que solo existen en la terminal.
4. **Personalización extrema:** Podrás crear tus propios scripts, flujos de medida de trabajo y convertirte en el arquitecto de tu entorno digital.

> Si buscas un buen trabajo en compañías como Google, Amazon, Facebook, CoreWeave y Red Hat, el uso de la terminal debe ser como respirar. Emplean profesionales con dominio total de la terminal y consideran esta habilidad básica e imprescindible.

No usar la terminal genera dependencia a herramientas que nos limitan. Aprenderla supone un salto enorme en el dominio técnico.

<img src="https://www.profesionalreview.com/wp-content/uploads/2021/09/Terminal-de-comandos-34.png" alt="Terminal de comandos en acción">

*Imagen tomada de: [Profesional Review](https://www.profesionalreview.com/2021/10/06/que-es-terminal-windows-10/)*

**Lectura recomendada:** [Linux Journey](https://labex.io/linuxjourney)

---

## Qué es una terminal y cómo funciona

¿Qué es una terminal? Esa es una pregunta que vamos a ir resolviendo a lo largo de todo este documento.

La terminal es la que solemos ver usualmente en las películas de hackers, donde escriben código y cosas mágicas empiezan a suceder. (No está muy alejado de la realidad.)

La terminal es una **Interfaz de Usuario** en la que se escribe una serie de comandos que nos va a permitir comunicarnos con el sistema operativo, es decir, darle instrucciones a nuestra computadora a través de comandos.

Las terminales pueden aparecer en varios lados: en un programa, en la web, pueden aparecer sin interfaz de usuario e incluso podrían aparecer en nuestro celular si nos conectamos de una forma adecuada.

Para poder ejecutar la terminal debemos hacerlo mediante un programa llamado **SHELL**, porque la que realmente hará la interpretación de estos comandos es la shell. Es un programa (normalmente compilado) que actúa como interfaz entre el usuario y el sistema operativo (se encarga de la traducción). Permite al usuario interactuar con el sistema operativo a través de comandos de texto: copiar un archivo, eliminar un archivo, configurar o crear un proceso.

Aunque la mayoría de las terminales están asociadas con sistemas Linux y Unix, es posible emplearlas también en Windows mediante herramientas específicas como PowerShell o Bash a través del sistema WSL. La elección de la terminal dependerá del sistema operativo y del entorno de trabajo.

> **Nota:** En mi caso, como tengo un sistema Windows, utilizo un sistema emulado llamado **WSL** (Windows Subsystem for Linux).

**La diferencia entre la terminal y la shell:**

- La **terminal** es la ventana o interfaz donde escribes.
- La **shell** es el programa que interpreta lo que escribes y lo traduce al sistema operativo.

Si tienes Windows, oprime la tecla Windows y busca "PowerShell", ejecuta "Windows PowerShell". Si usas Visual Studio Code, el atajo `Control + Ñ` te abrirá la terminal integrada.

Una vez dentro de PowerShell o en la terminal de VS Code escribe `dir`. Te mostrará todos los directorios que tengas en tu dispositivo. PowerShell tiene sus propios comandos, pero no son tan utilizados a nivel global. La terminal que se utiliza globalmente y en todas partes es **BASH**, que es la que vamos a utilizar a lo largo de todos estos apuntes.

- **PowerShell** es una terminal específica para Windows que ofrece comandos únicos para este sistema operativo. Es utilizada principalmente en servidores Windows.
- **Bash**, frecuente en Linux y sistemas Unix, es ampliamente utilizada a nivel global y será explorada mediante emulación WSL en este repo.

El funcionamiento de una terminal se apoya en un programa llamado shell. Este programa interpreta los comandos que introduces y los traduce en instrucciones que el sistema operativo puede entender y ejecutar. La shell convierte estos comandos escritos en acciones concretas visibles en tu equipo.

Lo que conocemos por **Terminal** realmente involucra 3 conceptos clave: Terminal (interfaz), Shell y Línea de comandos.

<img src="https://www.cs.cornell.edu/courses/cs1110/2021sp/resources/images/example-powershell.png" alt="Ejemplo de PowerShell">

*Imagen tomada de: [Cornell University](https://www.cs.cornell.edu/courses/cs1110/2021sp/resources/shell-windows.html)*

---

## Instalación de terminal Bash en Windows usando WSL

La mayoría de personas que comienzan en el mundo de la tecnología lo hacen desde un sistema operativo Windows. Por eso, en esta sección aprenderemos a instalar una terminal Bash en Windows utilizando WSL (Windows Subsystem for Linux).

WSL permite ejecutar un sistema operativo Linux dentro de Windows, sin máquinas virtuales ni configuraciones complejas. Gracias a esto, podemos usar una terminal real de Linux directamente desde nuestro equipo.

**Pasos para instalar WSL y Ubuntu:**

1. Abre PowerShell como administrador (clic derecho → Ejecutar como administrador).
2. Ejecuta el comando:
   ```bash
   wsl --install
   ```
3. Si no se instala una distribución predeterminada (como Ubuntu), usa:
   ```bash
   wsl --install -d Ubuntu
   ```
4. Una vez instalado, busca "WSL" en el menú de inicio, ábrelo y crea un usuario y contraseña.
5. Para verificar que tienes Bash, ejecuta:
   ```bash
   echo $SHELL
   ```
   Debe aparecer algo como `/bin/bash`.

**Importante:** Antes de instalar, puedes verificar si ya tienes WSL y su versión con:
```bash
wsl -v
```
o
```bash
wsl --version
```

<img src="https://static.platzi.com/media/user_upload/upload-661c49b7-0514-41ae-ad6c-62a90b121db5.png" alt="Verificación de WSL">

**Lectura recomendada:** [Documentación oficial de WSL](https://learn.microsoft.com/es-es/windows/wsl/install)

**Simuladores de terminal en la web (para practicar sin instalar):**

- [Terminal Temple](https://www.terminaltemple.com/)
- [Online GDB Bash Shell](https://www.onlinegdb.com/online_bash_shell)
- [MyCompiler Bash](https://www.mycompiler.io/es/new/bash)

---

## Primeros comandos esenciales en la terminal Linux

A continuación encontrarás los comandos más básicos y a la vez más útiles para empezar a explorar el sistema operativo desde la terminal. Con ellos podrás navegar, analizar información, listar archivos y entender mejor cómo funciona Bash.

> La mayoría de los comandos suelen ser abreviaciones de palabras completas.

| Comando | Descripción |
| :--- | :--- |
| `whoami` | Muestra el nombre del usuario con el que estás actualmente autenticado. |
| `pwd` | Print Working Directory: indica la ruta exacta del directorio en el que te encuentras. |
| `ls` | Lista el contenido del directorio actual. |
| `ls -a` | Muestra todos los archivos, incluyendo los ocultos (los que empiezan con `.`). |
| `ls -l` | Lista los archivos visibles en formato detallado (permisos, tamaño, propietario). |
| `ls -la` | Combina las dos opciones anteriores. |
| `ls -lah` | Añade "human readable" (tamaños en KB, MB). |
| `clear` | Limpia la pantalla de la terminal (también `Ctrl + L`). |
| `echo "texto"` | Imprime un mensaje en pantalla. |
| `--help` | Muestra las opciones de un comando (ej. `ls --help`). |
| `man comando` | Muestra el manual completo del comando (ej. `man echo`; salir con `q`). |
| `uname -a` | Muestra información del sistema operativo y entorno. |
| `date` | Muestra la fecha y hora actuales. |

<img src="https://static.platzi.com/media/user_upload/upload-8cd10dcc-593f-4658-8f84-d5f47c7bd0ca.png" alt="Tabla de comandos iniciales">

**PDF con más de 400 comandos:** [Abrir link del PDF - archive.org](https://ia802909.us.archive.org/21/items/400comandosLinux/400comandos.pdf)

---

## Navegación entre directorios en Linux con comandos de terminal

Dominar la navegación entre directorios en sistemas Linux es una habilidad fundamental para interactuar con el sistema operativo mediante comandos desde la terminal. Aprenderemos cómo desplazarnos eficientemente usando rutas absolutas y relativas, así como símbolos útiles como punto (`.`), doble punto (`..`), slash (`/`) y virgulilla (`~`).

### Rutas absolutas

Una ruta absoluta comienza siempre desde la raíz del sistema operativo, especificada por un slash (`/`). Por ejemplo, usar el comando `cd /` nos posiciona directamente en el directorio raíz del sistema Linux, que aloja importantes carpetas del sistema tales como:

- `/bin`
- `/dev`
- `/lib64`
- `/root`
- `/home`

Este método permite acceder directamente a cualquier directorio proporcionando su ruta completa.

### Rutas relativas y símbolos especiales

Mientras que las absolutas requieren especificar toda la ruta desde la raíz, las relativas funcionan desde el lugar actual en que nos encontramos.

- **`.` (punto):** directorio actual.
- **`..` (doble punto):** directorio superior (subir un nivel).
- **`/` (slash):** raíz del sistema.
- **`~` (virgulilla):** directorio home del usuario actual (Alt + 126).

Esto permite desplazarnos rápidamente usando comandos como `cd ..` para retroceder y `cd ~` para ir al home del usuario rápidamente, independientemente del directorio actual.

### `pushd` y `popd`

- **`pushd`**: guarda la ubicación actual en una pila y te mueve a la nueva ruta.
- **`popd`**: recupera la última ubicación almacenada y te desplaza automáticamente a ella.

Este mecanismo es muy útil para navegar cómodamente cuando trabajamos en múltiples directorios simultáneamente.

### `tree`

Si quieres ver la estructura de directorios en forma de árbol, instala `tree` con:
```bash
sudo apt install tree
```
Luego ejecuta `tree` en cualquier carpeta.

<img src="https://static.platzi.com/media/user_upload/upload-3fe5cc12-ff90-457a-9f81-d3c529078f38.png" alt="Estructura de árbol de directorios">

Para entender mejor cómo se ven los directorios en Linux, pedí ayuda a Gemini y me generó este mapa visual:

<img src="https://static.platzi.com/media/user_upload/upload-4ff4af9e-5550-4a0a-87d8-94bacdd3d41d.png" alt="Mapa visual de directorios Linux">

**Juegos para practicar navegación:**

- [Terminus](https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html)
- [Bandit (OverTheWire)](https://overthewire.org/wargames/bandit/)
- [CMD Challenge](https://cmdchallenge.com/)

<img src="https://static.platzi.com/media/user_upload/upload-e9cad1e3-7a67-45d3-bb5f-fc901e5af914.png" alt="Tabla de navegación entre directorios">

---

## Crear y borrar archivos desde la terminal Linux

| Comando | Descripción |
| :--- | :--- |
| `touch archivo.txt` | Crea un archivo vacío. |
| `mkdir carpeta` | Crea un directorio. |
| `mkdir -p padre/hijo` | Crea una jerarquía de directorios. |
| `cp origen destino` | Copia un archivo. |
| `cp -r origen destino` | Copia una carpeta recursivamente. |
| `mv origen destino` | Mueve o renombra un archivo/carpeta. |
| `rm archivo` | Elimina un archivo (sin papelera). |
| `rm -r carpeta` | Elimina una carpeta y su contenido recursivamente. |
| `rm -rf carpeta` | Elimina sin preguntar (¡peligroso!). |

**Nota:** También puedes crear varios archivos en una sola línea:
```bash
touch file1.txt file2.txt file3.txt
```

<img src="https://static.platzi.com/media/user_upload/upload-fbc9d4b5-b754-4cd6-82c1-76fd6a47b775.png" alt="Crear múltiples archivos con touch">

<img src="https://static.platzi.com/media/user_upload/upload-b8adc5e4-4819-40cd-b355-71953faf24ad.png" alt="Comandos de manejo de archivos">

---

## Comandos para explorar y manipular archivos de texto en terminal

En cualquier sistema operativo, los archivos de texto plano son esenciales al procesar datos o descargar información específica. Para interactuar con ellos desde una terminal, existen comandos avanzados que permiten una manipulación efectiva.

| Comando | Descripción |
| :--- | :--- |
| `cat archivo` | Muestra todo el contenido del archivo. |
| `less archivo` | Visualiza el archivo de forma interactiva (flechas, `q` para salir). |
| `head -n 20 archivo` | Muestra las primeras 20 líneas. |
| `tail -n 20 archivo` | Muestra las últimas 20 líneas. |
| `nl archivo` | Numera las líneas del archivo. |
| `wc -l archivo` | Cuenta líneas. |
| `wc -w archivo` | Cuenta palabras. |
| `awk '{print $1}' archivo.csv` | Imprime la primera columna de un CSV. |
| `awk -F ',' '{print $1, $3}' archivo.csv` | Imprime columnas 1 y 3 de un CSV con separador coma. |

**Tip extra:** Los CSV se ven mejor con este comando combinado:
```bash
column -t -s ',' archivo.csv | less -S
```
El `-S` evita que las líneas largas se rompan y puedes moverte horizontalmente con las flechas ← →.

### Algunos comandos que practiqué con `awk`:

- `awk '{print NF}' parrafo.txt` → imprime el número de palabras por línea.
- `awk 'length($0) > 55 {print $0}' parrafo.txt` → imprime líneas con más de 55 caracteres.
- `awk '{print NR ": " $0}' parrafo.txt` → añade número de línea al output.
- `awk -F ',' 'NR > 1 {suma += $9} END {print "Suma col9: ", suma}' tiendas.csv` → suma los valores de la columna 9 excluyendo el encabezado.
- `awk 'BEGIN {print "---TIENDAS EJEMPLO---"} {print $0}' tiendas.csv` → agrega un encabezado antes del contenido.

<img src="https://static.platzi.com/media/user_upload/upload-14677486-8766-479d-ad19-512217adaead.png" alt="Comandos de exploración de texto">

---

## Wildcards en la terminal para filtrar archivos

Un **wildcard** es un carácter especial utilizado como comodín para hacer coincidir múltiples archivos en base a un patrón determinado. Principalmente es útil con `ls`, `cp`, `mv`, `rm`, `cat`, `head`, `tail` y `grep`.

| Wildcard | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `*` | Cualquier combinación de caracteres | `*.txt` → todos los .txt |
| `?` | Exactamente un carácter | `file?.txt` → file1.txt, fileA.txt, no file10.txt |
| `[ ]` | Grupos de caracteres | `*[AB].*` → archivos que terminan en A o B |
| `{ }` | Palabras o extensiones completas | `*.{md,log}` → todos .md y .log |

**Ejemplo de llaves con vacío:**
```bash
ls -l file?{.log,,.json}
```
Esto lista `fileA.log`, `file4` (sin extensión), `file5.json`, etc.

<img src="https://static.platzi.com/media/user_upload/upload-7742242c-1c3b-4351-92e9-7a59e7802876.png" alt="Wildcards en acción">

---

## Cómo usar grep y find en Linux

### `grep`: Buscar contenido dentro de archivos

`grep` busca patrones de texto dentro del contenido de un archivo usando expresiones regulares. La sintaxis básica es `grep patrón archivo`.

- `grep -i 'spider' archivo.csv` → ignora mayúsculas/minúsculas.
- `grep -c 'spider' archivo.csv` → cuenta el número de líneas que contienen el patrón.
- `grep -v 'spider' archivo.csv` → muestra las líneas que **no** contienen el patrón.
- `grep -iv 'spider' archivo.csv` → combina ignorar mayúsculas y excluir.

### `find`: Buscar archivos por nombre, tipo o tamaño

`find` localiza archivos y directorios en el sistema de archivos.

- `find . -type d -name "*"` → busca todos los directorios desde el actual.
- `find . -type f -name "*.txt"` → busca todos los archivos .txt.
- `find . -type f -size +1M` → busca archivos mayores a 1 MB.
- `find . -mtime -7` → archivos modificados en los últimos 7 días.
- `find . -name "*.tmp" -exec rm {} \;` → elimina todos los .tmp.

**Diferencia clave:**
- `grep` busca **contenido**.
- `find` busca **archivos** por nombre, tipo, tamaño, etc.

---

## Tipos de comandos en Linux y cómo identificarlos

Cuando trabajamos en Linux, usualmente ejecutamos comandos sin reflexionar sobre su naturaleza y origen. Un comando en Linux puede ser:

- Un **script** en Shell.
- Un **archivo binario ejecutable** compilado en C, C++, etc.
- Una **utilidad del sistema**.
- Un **alias** (un "apodo" que simplifica un comando más largo).

**Herramientas para identificar el tipo de comando:**

- `type ls` → indica si es alias, binario, etc. Por ejemplo, `ls` suele ser alias de `ls --color=auto`.
- `which ls` → muestra la ruta absoluta del ejecutable original.
- `whereis ls` → muestra varias ubicaciones relacionadas (bin, man, etc.).
- `whatis grep` → devuelve una breve descripción de lo que hace el comando.

<img src="https://static.platzi.com/media/user_upload/upload-a9c6ef4b-6595-4116-afb3-849938bd583e.png" alt="Identificación de comandos">

---

## Redirecciones de terminal en Linux con operadores básicos

Las redirecciones del sistema son una herramienta esencial para manejar eficientemente la información que generan los comandos. Con operadores básicos como `>`, `<`, `>>` y `|` podemos redirigir salidas, entradas y errores.

| Operador | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `>` | Redirige la salida a un archivo (sobrescribe). | `echo "hola" > archivo.txt` |
| `>>` | Concatena la salida al final del archivo. | `echo "mundo" >> archivo.txt` |
| `<` | Redirige el contenido de un archivo como entrada. | `comando < archivo.txt` |
| `\|` | Pipe: redirige la salida de un comando como entrada de otro. | `echo "color" \| lolcat` |
| `2>` | Redirige los errores (stderr) a un archivo. | `ls noexiste 2> errores.log` |
| `2>>` | Concatena errores a un archivo. | `ls noexiste 2>> errores.log` |
| `>&` | Redirige tanto salida como error. | `comando > todo.log 2>&1` |

**Ejemplos divertidos con `cowsay` y `lolcat`:**

Primero instala los paquetes:
```bash
sudo apt install cowsay lolcat
```

Luego prueba:
```bash
cowsay "Hola mundo" | lolcat
cowsay -f dragon "Santiago" | lolcat
```

Puedes ver todos los animales disponibles con:
```bash
cowsay -l
```

<img src="https://static.platzi.com/media/user_upload/upload-bf433777-7415-4425-840d-491f8730154f.png" alt="Cowsay y lolcat">

**Nota:** Puedes generar tus propios "cows" con ASCII art usando la web [asciiart.eu](https://www.asciiart.eu/). También puedes editar el archivo `default.cow` y personalizarlo.

<img src="https://static.platzi.com/media/user_upload/upload-9989b897-9710-4ad3-a045-a0df5bee2b9e.png" alt="Ejemplo de cowsay">

---

## Operadores de control para encadenar comandos en Linux

Los operadores de control permiten ejecutar múltiples comandos en secuencia, condicionalmente o en segundo plano.

| Operador | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `;` | Secuencial: ejecuta uno tras otro, sin importar si falla. | `echo uno; ls; echo tres` |
| `&&` | Condicional AND: ejecuta el segundo solo si el primero tuvo éxito. | `ls && echo "ok"` |
| `\|\|` | Condicional OR: ejecuta el segundo solo si el primero falla. | `ls noexiste \|\| touch error.log` |
| `&` | Envía el comando al background (segundo plano). | `sleep 10 &` |
| `comando && comando2 \|\| comando3` | Si el primero funciona, ejecuta el segundo; si falla, el tercero. |

**Ejemplo combinado:**
```bash
ls && echo éxito || echo fracaso
```

---

## Configuración de alias permanentes en terminal Linux

Los **alias** son apodos que asignas a comandos largos o complejos para acelerar tu trabajo.

- Ver alias activos: `alias`
- Crear alias temporal: `alias cls='clear'`
- Para que sean permanentes, agrégalos al archivo `~/.bashrc` (o `~/.zshrc` si usas ZSH):
  ```bash
  echo 'alias cls="clear"' >> ~/.bashrc
  source ~/.bashrc
  ```

**Ejemplo:** `alias gs='git status'`, `alias ll='ls -lah'`

---

## Permisos de archivos en Linux con chmod

Los permisos en Linux indican quién puede leer (`r`), escribir (`w`) y ejecutar (`x`) un archivo o directorio. Para verlos, usa `ls -la` y observa la cadena de letras.

- Primer carácter: `-` archivo, `d` directorio.
- Luego tres grupos de `rwx` para: usuario propietario, grupo, otros.

**Cambiar permisos con `chmod`:**

- `chmod +x script.sh` → añade ejecución a todos.
- `chmod 755 script.sh` → usuario: rwx, grupo: r-x, otros: r-x.
- `chmod 700 script.sh` → solo el usuario tiene todos los permisos.
- `chmod 777 script.sh` → todos tienen todo (peligroso).

**Notación numérica:**
- `r` = 4
- `w` = 2
- `x` = 1
- Suma para cada grupo.

**Ejemplo:** `chmod 644 archivo.txt` → usuario rw-, grupo r--, otros r--.

<img src="https://static.platzi.com/media/user_upload/upload-72951aa8-a97e-4b51-8174-ba45d0888a89.jpg" alt="Permisos en Linux">

**Seguridad:** Los ciberdelincuentes pueden cambiar permisos con `chmod` para ejecutar malware. Un caso famoso es WannaCry. Por eso, siempre asigna el mínimo de permisos necesarios y evita `chmod -R 777`.

**Recursos:** [QuickRef chmod](https://quickref.me/chmod.html)

---

## Variables de entorno en Bash explicadas

Una **variable de entorno** es un valor con nombre que el sistema operativo guarda para que cualquier proceso pueda leerlo. Sirve para compartir configuración, rutas y datos entre programas.

- Ver todas las variables: `env` o `env | less`
- Ver una variable: `echo $SHELL` (muestra la shell actual)
- `echo $PWD` (directorio actual)
- `echo $PATH` (lista de rutas donde se buscan binarios)

**Crear variables temporales:**
```bash
MI_VAR="Hola"
echo $MI_VAR   # Hola
```

**Exportar para que otros procesos la vean:**
```bash
export MI_VAR="Hola"
```

**Variables persistentes:** Agrégalas al archivo `~/.bashrc` o `~/.zshrc`:
```bash
echo 'export MI_VAR="Hola"' >> ~/.bashrc
source ~/.bashrc
```

---

## Uso de APT para gestionar paquetes en Linux

**APT** (Advanced Package Tool) es el manejador de paquetes en distribuciones basadas en Debian (Ubuntu, etc.).

| Comando | Descripción |
| :--- | :--- |
| `sudo apt update` | Actualiza la lista de paquetes disponibles. |
| `sudo apt upgrade` | Actualiza todos los paquetes instalados. |
| `sudo apt install paquete` | Instala un nuevo paquete. |
| `sudo apt remove paquete` | Elimina un paquete (conserva configuraciones). |
| `sudo apt purge paquete` | Elimina el paquete y sus configuraciones. |
| `apt show paquete` | Muestra información del paquete. |
| `apt search término` | Busca paquetes relacionados con el término. |

**Ejemplo divertido:**
```bash
sudo apt install cmatrix
cmatrix   # Lluvia de código Matrix
```

<img src="https://static.platzi.com/media/user_upload/upload-94ae08b4-4f1b-4114-ae57-c5824d639970.png" alt="Cmatrix en acción">

---

## Homebrew: gestor de paquetes para Mac

**Homebrew** es el manejador de paquetes para macOS (no oficial). Su sitio es [brew.sh](https://brew.sh/).

- Instalar: copia el comando de la web y pégale en la terminal.
- Ver versión: `brew --version`
- Buscar paquete: `brew search neofetch`
- Información: `brew info neofetch`
- Instalar: `brew install neofetch`
- Listar instalados: `brew list`
- Actualizar Homebrew: `brew update`
- Actualizar paquetes: `brew upgrade`
- Desinstalar: `brew uninstall neofetch` y luego `brew cleanup`

**Importante:** Homebrew no es oficial, así que ten cuidado con paquetes de fuentes no confiables. Si puedes descargar el software desde la fuente oficial, hazlo.

<img src="https://brew.sh/assets/img/homebrew.svg" alt="Homebrew logo">

---

## Foreground y background en la terminal

Cuando ejecutas un comando, normalmente corre en **foreground** (primer plano), bloqueando la terminal hasta que termina. Para enviarlo al **background** (segundo plano) y seguir trabajando, añade `&` al final.

- `sleep 1000 &` → envía a background.
- `jobs` → lista los procesos en background.
- `fg %1` → trae el job 1 al foreground.
- `Ctrl + Z` → pausa el proceso en foreground.
- `bg %1` → reanuda el job pausado en background.
- `kill -STOP %1` → pausa un proceso en background.
- `kill -CONT %1` → reanuda un proceso en background.

---

## Cómo identificar y matar procesos en Linux

Un **proceso** es cualquier programa en ejecución.

- `ps` → muestra los procesos de la sesión actual.
- `ps aux` → muestra todos los procesos con detalles (usuario, PID, CPU, memoria, comando).
- `ps aux | grep sleep` → filtra procesos por nombre.
- `top` → monitor interactivo en tiempo real.
- `htop` → versión más amigable (instalar con `sudo apt install htop`).

En `htop` puedes:
- Navegar con flechas.
- Buscar con F3.
- Ver árbol con F5.
- Matar un proceso con F9.

**Matar un proceso:**
- `kill PID` → envía señal de terminación (15).
- `kill -9 PID` → mata forzosamente (señal 9).

**Estados de procesos:** running, sleeping, stopped, zombie.

<img src="https://static.platzi.com/media/user_upload/upload-defc9c27-4831-40cb-8e23-3c3747ad24f2.png" alt="Estados de procesos">

---

## Empaquetado y compresión de archivos con TAR y GZIP en Linux

**Empaquetar** combina varios archivos en uno solo (`.tar`). **Comprimir** reduce el tamaño (`.gz`). Son procesos distintos.

- **Empaquetar:**
  ```bash
  tar -cvf textos.tar textos/
  ```
  - `c` create, `v` verbose, `f` file.

- **Comprimir:**
  ```bash
  gzip textos.tar   # genera textos.tar.gz
  ```

- **Descomprimir y desempaquetar en dos pasos:**
  ```bash
  gunzip textos.tar.gz
  tar -xvf textos.tar
  ```

- **Todo en uno:**
  ```bash
  tar -xzvf textos.tar.gz
  ```
  - `x` extract, `z` gzip, `v` verbose, `f` file.

**Empaquetar y comprimir directamente:**
```bash
tar -czvf textos.tar.gz textos/
```

<img src="https://static.platzi.com/media/user_upload/upload-45134d08-e9d3-4f90-945e-9f16de835d66.png" alt="Diferencias entre tar y gzip">

---

## Vim y Nano: editores de texto en terminal

**Vim** y **Nano** son editores de texto que funcionan directamente en la terminal. Son ideales para servidores remotos y sistemas sin interfaz gráfica.

**Vim:**

- Abrir: `vim archivo.md`
- Modos: lectura (por defecto), inserción (`i`), comando (`:`).
- Guardar y salir: `:wq`
- Salir sin guardar: `:q!`
- Borrar línea: `dd`
- Ir al inicio: `gg`
- Ir a línea específica: `:4`

**Nano:**

- Abrir: `nano archivo.md`
- Guardar: `Ctrl + O`
- Salir: `Ctrl + X`
- Cortar línea: `Ctrl + K`
- Pegar: `Ctrl + U`
- Ayuda: `Ctrl + G`

<img src="https://static.platzi.com/media/user_upload/upload-12347d54-6905-4700-9324-4d2dfb6d8309.png" alt="Vim vs Nano">

---

## Tmux para múltiples terminales en una ventana

**Tmux** es un multiplexor de terminales que permite dividir una ventana en paneles, manejar varias ventanas y mantener sesiones activas en segundo plano.

- Instalar: `sudo apt install tmux` (Linux) o `brew install tmux` (Mac).
- Iniciar: `tmux`
- Prefijo: `Ctrl + b` (luego sueltas y presionas el comando).

| Comando | Descripción |
| :--- | :--- |
| `Ctrl+b %` | Divide verticalmente. |
| `Ctrl+b "` | Divide horizontalmente. |
| `Ctrl+b flechas` | Navega entre paneles. |
| `Ctrl+b c` | Crea una nueva ventana. |
| `Ctrl+b ,` | Renombra la ventana actual. |
| `Ctrl+b número` | Cambia a la ventana número. |
| `Ctrl+b d` | Desconecta la sesión (queda en background). |
| `tmux ls` | Lista sesiones activas. |
| `tmux attach` | Reconecta a la sesión (si hay una). |

<img src="https://static.platzi.com/media/user_upload/upload-d139c833-7ee3-4c2b-aee8-aa3eb597d0b9.png" alt="Tmux en acción">

---

## Comandos de red en la terminal para verificar conectividad

| Comando | Descripción |
| :--- | :--- |
| `ip a` | Muestra las interfaces de red y direcciones IP. |
| `ip r` | Muestra la tabla de ruteo. |
| `ping www.google.com` | Envía paquetes ICMP para verificar conectividad. |
| `curl www.google.com` | Realiza una petición HTTP GET y muestra el HTML. |
| `curl www.google.com > index.html` | Guarda el contenido en un archivo. |
| `wget <URL>` | Descarga archivos desde la web. |
| `nmap` | Escanea puertos (requiere instalación). |
| `traceroute` | Rastrea la ruta de paquetes a un destino. |

---

## Personaliza tu terminal con ZSH y Powerlevel10k

**ZSH** es una shell alternativa a Bash con más opciones de personalización.

- Instalar ZSH: `sudo apt install zsh`
- Instalar Oh My ZSH: sigue el comando en [ohmyz.sh](https://ohmyz.sh/)
- Cambiar la shell por defecto: responde "yes" cuando lo pregunte.

**Powerlevel10k** es un tema para ZSH con iconos y colores.

- Instalar las fuentes **MesloLGS Nerd Font** desde el repositorio de Powerlevel10k.
- Clonar Powerlevel10k en `.oh-my-zsh/themes`.
- Editar `~/.zshrc` y cambiar `ZSH_THEME="powerlevel10k/powerlevel10k"`.
- Recargar con `source ~/.zshrc` y seguir el asistente.

**Recursos:**
- [Powerlevel10k GitHub](https://github.com/romkatv/powerlevel10k)
- [Oh My ZSH](https://ohmyz.sh/)

<img src="https://ohmyz.sh/img/themes/omz-half-life.png" alt="Oh My ZSH">

**Ejemplos de personalizaciones de estudiantes:**

<img src="https://static.platzi.com/media/user_upload/upload-cd0f9148-db3f-4a19-a05d-d59a2c54b429.png" alt="Terminal personalizada 1">

<img src="https://static.platzi.com/media/user_upload/upload-2bf4b998-d977-4728-ae1b-8b0711d70352.png" alt="Terminal personalizada 2">

---

## Warp: la terminal con IA integrada

**Warp** es un cliente de terminal con inteligencia artificial integrada que permite ejecutar comandos en lenguaje natural.

- Descargar desde [warp.dev](https://www.warp.dev/).
- Instalar en Windows, macOS o Linux.
- Abrir Ubuntu en Warp (con WSL).
- Escribir instrucciones en lenguaje natural, por ejemplo: "Create a snake game in Python from scratch".
- Usar el **modo agente** (icono de estrellitas) para explicar errores y obtener correcciones.
- Soporta paneles divididos al estilo Tmux (clic derecho → Split pane right).

**Ventajas:** Interfaz moderna, sugerencias automáticas, explicación de errores, previsualización de comandos.

**Desventajas:** Algunas funciones requieren suscripción de pago; depende de la nube para IA; no es compatible con Tmux completamente; requiere inicio de sesión.

<img src="https://static.platzi.com/media/user_upload/upload-1922777c-fe06-429e-9c65-7f03041f3b86.png" alt="Warp">

---

## Recursos para dominar la terminal Linux

- **Cheat Sheet de comandos:** [Descargar PDF](https://static.platzi.com/media/public/uploads/linux-terminal-cheat-sheet-pdf-ready_a82ec5a3-ac13-452f-955b-8789d1831203.pdf)
- **Libro gratuito:** [Linux Basics for Hackers](https://archive.org/details/linux-basics-for-hackers) (repositorio en GitHub: [FADL285/LINUX-BASICS-FOR-HACKERS-Book](https://github.com/FADL285/LINUX-BASICS-FOR-HACKERS-Book))

**Consejo final:** Dominar la terminal no es cuestión de horas, es cuestión de repetición. Practica a diario, consulta la cheat sheet y no temas equivocarte. La constancia es la clave.

---

*Este documento fue redactado con base en el curso "Introducción a la Terminal y Línea de Comandos" de Platzi, impartido por Enrique Devars, y complementado con experiencias personales y recursos adicionales.*

> Gracias por leer.