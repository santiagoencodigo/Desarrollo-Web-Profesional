# Git y GitHub

En este documento comparto mi experiencia aprendiendo a gestionar versiones, colaborar en equipo y publicar proyectos usando Git y GitHub. A lo largo de este recorrido he aprendido a controlar ramas, hacer pull requests, gestionar releases, manejar seguridad y automatizaciones con herramientas clave de la industria.

---

## Tabla de Contenido

- [Introducción a Git y el control de versiones](#introducción-a-git-y-el-control-de-versiones)
- [Configuración inicial de Git](#configuración-inicial-de-git)
- [Comandos básicos y flujo de trabajo](#comandos-básicos-y-flujo-de-trabajo)
- [Gestión de ramas](#gestión-de-ramas)
- [Deshacer cambios: reset vs revert](#deshacer-cambios-reset-vs-revert)
- [Tags y checkout para versiones y exploración](#tags-y-checkout-para-versiones-y-exploración)
- [Cómo resolver conflictos de merge](#cómo-resolver-conflictos-de-merge)
- [Usando Git desde Visual Studio Code](#usando-git-desde-visual-studio-code)
- [Recursos adicionales y comandos útiles](#recursos-adicionales-y-comandos-útiles)

---

## Introducción a Git y el control de versiones

* [Git - Official Site](https://git-scm.com/)
* [GitHub](https://github.com/)

Imagina guardar un archivo como `version-final`, luego `version-final-final` y después `version-final-final-ahora-si`. Ese caos, multiplicado por un equipo completo de personas, se convierte rápidamente en un desastre. Para resolver este problema existe **Git**, un software que ha transformado la forma en que se desarrolla software en todo el mundo.

**¿Qué es Git y por qué revolucionó el desarrollo de software?**

Git es un software de control de versiones. En lugar de guardar copias completas de cada archivo, Git registra únicamente los cambios realizados en cada uno. Esto lo hace extremadamente eficiente. Además, permite coordinar modificaciones entre múltiples personas, facilitando la colaboración en equipo de manera ordenada.

Antes de Git, los desarrolladores gestionaban versiones de archivos de forma manual, un proceso ineficiente y muy propenso a errores. Cuando Git apareció, su sencillez provocó una adopción casi inmediata, estableciéndose como el estándar en la industria.

Un dato curioso que me llamó la atención: el creador de Git es **Linus Torvalds**, la misma persona detrás del kernel de Linux. Lo desarrolló para resolver sus propios problemas de control de versiones. Git es además open source, lo que significa que cualquier persona puede ver su código fuente e incluso contribuir a sus mejoras.

**¿Por qué aprender Git es fundamental para tu carrera?**

Desde el momento en que escribes tu primer "Hola, mundo", necesitas una manera eficiente de gestionar tu código. Aprender Git es clave para tu crecimiento profesional por varias razones:

- Te permite colaborar en proyectos con otros developers dentro de una empresa.
- Te ayuda a publicar tu trabajo individual.
- Facilita contribuir a proyectos de terceros.

En la industria del software, casi ningún producto es creado por una sola persona. Siempre se trata de equipos trabajando juntos, y Git es la herramienta que hace posible esa coordinación.

**¿Cómo funciona Git en la práctica?**

Git opera en tu máquina local a través de la terminal o editores como Visual Studio Code. Utiliza comandos específicos como `merge`, `pull`, `commit`, `push`, entre muchos otros. Cada uno cumple una función dentro del flujo de trabajo para gestionar cambios en el código.

**¿Qué papel juega GitHub en este ecosistema?**

Cuando quieres colaborar con otras personas, entra en juego **GitHub**, una plataforma web donde puedes guardar tu código en la nube junto con sus cambios y cada una de sus versiones. GitHub ha crecido enormemente en los últimos años, incorporando funcionalidades que van mucho más allá de Git y que aumentan la productividad de quienes lo usan.

**¿Qué habilidades dominé con Git y GitHub?**

El aprendizaje se divide en dos grandes bloques. Primero, en el ámbito local:

- Configurar Git en tu computadora.
- Crear repositorios locales.
- Modificar archivos y registrar cambios.
- Crear ramas y fusionarlas.
- Dominar el flujo de trabajo con Git.

Después, en el ámbito remoto con GitHub:

- Crear un repositorio remoto.
- Integrar a otros programadores en tu proyecto.
- Revisar aportes y fusionarlos con tu rama principal.
- Arreglar errores y conflictos.
- Entender un flujo de trabajo profesional.

Muchas personas dicen saber Git, pero solo conocen lo básico. La diferencia está en dominar herramientas avanzadas como ramas, merge, Codespaces, seguimiento de proyectos y automatizaciones que realmente marcan la diferencia en la industria.

<img src="https://static.platzi.com/media/user_upload/%7BE09EE907-24AD-4484-98E5-C0AA87476A24%7D-a053da97-5a9b-4e1a-9d39-9166e1aeb505.jpg" alt="Conceptos básicos de Git">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/)*

---

## Configuración inicial de Git

* [git init documentation](https://git-scm.com/docs/git-init)
* [git config documentation](https://git-scm.com/docs/git-config)
* [Configurando Git por primera vez](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez)
* [Git Cheat Sheet - GitHub Education](https://education.github.com/git-cheat-sheet-education.pdf)

Para comenzar a trabajar con Git en la terminal, lo primero que hice fue asegurarme de tenerlo instalado y configurado correctamente. Aquí comparto los pasos que seguí en Linux, Mac y WSL de Windows.

**¿Cómo confirmar que Git está instalado en tu sistema?**

Para verificar la instalación de Git:

- Abre la terminal y escribe el comando `git --version`.
- Si el comando devuelve un número de versión, Git está listo para usarse.
- Si no aparece la versión, revisa los recursos adjuntos donde se explican las instalaciones para cada sistema operativo.

**¿Cómo crear y preparar el primer proyecto con Git?**

El primer paso para crear un proyecto en Git fue:

- Limpiar la terminal para evitar confusión visual.
- Crear una carpeta para el proyecto con `mkdir nombre_del_proyecto`.
- Navegar a la carpeta con `cd nombre_del_proyecto`.

**¿Cómo inicializar un repositorio en Git?**

Al estar dentro de la carpeta de tu proyecto, inicia el repositorio con:

```bash
git init
```

Esto crea la rama inicial `master` por defecto. Si prefieres que la rama principal se llame `main`:

- Cambia la configuración global con `git config --global init.defaultBranch main`.
- Actualiza la rama en el proyecto actual con `git branch -m main`.

**¿Cómo personalizar tu configuración de usuario en Git?**

Configura el nombre de usuario y correo electrónico de Git, que identificará todas tus contribuciones:

```bash
git config --global user.name "Tu Nombre o Apodo"
git config --global user.email "tu.email@ejemplo.com"
```

**Tip:** Si necesitas corregir algún error en el comando, puedes usar la tecla de flecha hacia arriba para recuperar y editar el último comando escrito.

**¿Cómo confirmar la configuración de Git?**

Para revisar mi configuración, ejecuté:

```bash
git config --list
```

Aquí vi los datos de usuario y el nombre de la rama principal. Esta configuración se aplicará a todos los repositorios que cree en adelante.

**¿Qué hacer si olvidas un comando?**

Git incluye un recurso rápido y útil para recordar la sintaxis de comandos:

- Escribe `git help` en la terminal.
- Navega la lista de comandos disponibles y consulta la documentación oficial de cada uno cuando sea necesario.

<img src="https://static.platzi.com/media/user_upload/upload-21adc9d7-945c-49ed-b9d7-1141fad79613.jpg" alt="Configuración inicial de Git">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/)*

---

## Comandos básicos y flujo de trabajo

* [git add documentation](https://git-scm.com/docs/git-add)
* [git log documentation](https://git-scm.com/docs/git-log)
* [git commit documentation](https://git-scm.com/docs/git-commit)
* [GitHub Start Your Journey](https://docs.github.com/es/get-started/start-your-journey)

Dominar el flujo de trabajo básico de Git fue el primer paso para gestionar cualquier proyecto con confianza. Aquí explico cómo crear archivos, pasarlos al área de staging y registrarlos con un commit.

**¿Qué es la carpeta .git y por qué es importante?**

Cuando ejecuté `git init` en una carpeta, se creó un directorio oculto llamado `.git`. Para visualizarlo usé el comando `ls -a`. Esta carpeta es el corazón del control de versiones: funciona como una bitácora que almacena un registro detallado de todos los cambios realizados en mis archivos. Sin ella, Git simplemente no existe dentro de mi proyecto.

Una vez inicializado el repositorio, cualquier archivo que creé dentro de esa carpeta puede ser rastreado. Por ejemplo, al escribir `nano testing.txt` y agregar contenido, ese archivo queda listo para ser gestionado por Git.

**¿Cómo funciona el área de staging en Git?**

El área de staging (también llamada stage) es un estado intermedio entre la creación de un archivo y su registro definitivo en el historial. Es un "limbo" donde los archivos esperan a ser confirmados o descartados.

**¿Qué hace git status?**

El comando `git status` muestra el estado actual de los archivos. Me indica:

- Si estoy en la rama `main`.
- Si hay archivos nuevos, modificados o eliminados.
- Si esos archivos ya fueron agregados al stage o no.

El cambio de color fue el mejor indicativo: los archivos en rojo aún no están en stage, mientras que los verdes ya fueron agregados y esperan un commit.

**¿Cómo agregar y quitar archivos del stage?**

Para mover un archivo al área de staging usé `git add` seguido del nombre del archivo, por ejemplo `git add testing.txt`. También es posible agregar todos los archivos pendientes de golpe con `git add .`.

Si necesitaba sacar un archivo del stage y regresarlo a su estado original, el comando es `git rm --cache testing.txt`. Esto no elimina el archivo, solo lo retira del área de preparación.

Este mecanismo me permitió decidir qué archivos sí y cuáles no quería incluir en mi próximo registro de cambios.

**¿Cómo hacer tu primer commit y registrar cambios?**

Una vez que los archivos están en stage, el siguiente paso es ejecutar `git commit -m "mensaje"`. El parámetro `-m` indica que vas a escribir un mensaje descriptivo entre comillas, explicando qué cambios realizaste. Por ejemplo:

```bash
git commit -m "nuevo archivo de testing"
```

Al presionar Enter, Git confirma la rama en la que trabajo, el mensaje del commit y un resumen de los cambios: archivos modificados, inserciones y eliminaciones.

**¿Qué pasa cuando modificas un archivo ya registrado?**

Si actualicé el contenido de un archivo que ya fue commiteado, al ejecutar `git status` la leyenda cambió de "creado" a "modificado". El proceso para registrar esa actualización fue exactamente el mismo:

- `git add .` para pasarlo al stage.
- `git commit -m "primer archivo modificado"` para registrarlo.

Git distingue tres estados posibles para un archivo: creado, modificado o eliminado. Independientemente del estado, el flujo siempre sigue la misma secuencia.

**¿Cómo verificar el historial de cambios?**

El comando `git log` muestra la bitácora completa de commits realizados. Cada entrada incluye el autor, la fecha y el mensaje asociado, lo que facilita rastrear la evolución del proyecto.

Para confirmar que no quedan cambios pendientes, basta con ejecutar `git status` y verificar que el mensaje indique que el árbol de trabajo está limpio.

Es importante señalar que este flujo aplica a cualquier tipo de archivo: no importa si son `.txt`, `.php`, `.go`, `.js` o incluso imágenes. Git los gestiona de la misma forma al hacer `add` y `commit`, sin importar la extensión.

<img src="https://static.platzi.com/media/user_upload/upload-d2dcb456-dccd-4732-a829-4c4279285385.png" alt="Flujo de trabajo básico de Git">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/)*

---

## Gestión de ramas

* [git branch documentation](https://git-scm.com/docs/git-branch)
* [git switch documentation](https://git-scm.com/docs/git-switch)
* [git merge documentation](https://git-scm.com/docs/git-merge)
* [git checkout documentation](https://git-scm.com/docs/git-checkout)

Trabajar con ramas en Git es la forma más segura de desarrollar funcionalidades sin afectar el código principal de un proyecto. Cuando dominé este flujo (crear una rama, hacer cambios, fusionar y limpiar), mi productividad creció de manera notable.

**¿Qué son las ramas y por qué existen?**

Las ramas fueron diseñadas para que cada persona pueda trabajar de manera aislada sin obstaculizar al resto del equipo. Si algo sale mal, simplemente eliminas tu rama, vuelves a empezar y retomas el trabajo pendiente. Cada actividad dentro de un proyecto puede vivir en una o varias ramas, lo que brinda flexibilidad total.

**¿Cómo saber en qué rama te encuentras?**

El comando `git branch` muestra todas las ramas existentes en tu repositorio local. Un asterisco aparece junto a la rama activa, indicando exactamente dónde estás posicionado. Conforme el proyecto crece y las ramas se multiplican, ese asterisco se convierte en tu referencia principal.

**¿Cómo crear una nueva rama y moverte a ella?**

Para crear una rama y cambiar a ella en un solo paso, utilicé `git checkout -b` seguido del nombre de la rama:

```bash
git checkout -b admin
```

Git confirma que te moviste a la nueva rama. Si ejecutas `git branch` de nuevo, verás que el asterisco ahora apunta a `admin` mientras que `main` sigue enlistada sin estar activa.

**¿Cómo trabajar dentro de una rama aislada?**

Dentro de la rama recién creada pude realizar cambios con total libertad. En mi práctica creé un archivo con el editor Nano:

```bash
nano testing_admin.txt
```

Después de guardar el archivo, el flujo habitual continuó:

- Ejecutar `git status` para verificar los cambios pendientes.
- Agregar los archivos al staging area con `git add .`.
- Confirmar los cambios con `git commit -m "nuevo archivo creado"`.

Lo fundamental aquí es que estos cambios solo existen en la rama `admin`, no en `main`. Nadie más puede ver lo que acabas de hacer hasta que decidas fusionar.

**¿Qué es fusionar ramas con git merge?**

Cuando todos los cambios están listos en tu rama individual, es momento de fusionarlos con la rama principal para que todo el equipo acceda a ellos. El proceso requiere dos pasos:

- Regresar a la rama principal con `git checkout main` o `git switch main`.
- Ejecutar `git merge admin` para unificar los cambios.

El resultado en la terminal muestra un **fast-forward**, que es un método de unificación donde Git simplemente avanza el puntero de `main` hasta el último commit de la rama fusionada. En este caso se reporta un archivo cambiado y una nueva inserción.

Un dato útil: `git switch` es el comando más moderno para cambiar de ramas y cumple exactamente la misma función que `git checkout`. Puedes usar cualquiera de los dos.

**¿Por qué eliminar una rama después de fusionarla?**

Una vez que la rama cumplió su propósito y sus cambios ya viven en `main`, la buena práctica es eliminarla. El comando para hacerlo es:

```bash
git branch -D admin
```

Eliminar ramas evita acumulación innecesaria de nombres como `admin`, `admin1`, `admin2`, que terminan generando confusión y posibles conflictos. La regla es clara: una rama existe para un propósito específico y, una vez cumplido, se elimina.

Para confirmar que todo quedó integrado, ejecuté `git log` y verifiqué que el commit aparece en el historial de la rama principal.

También puedes hacer uso de `git switch -c <nombre>` para crear una rama y directamente moverte a ella en lugar de usar `git checkout -b <nombre>`. Aunque cualquiera de los dos es válido.

<img src="https://static.platzi.com/media/user_upload/GIT%20%281%29-7d7bfbe8-d189-46cb-9eb7-a209b5db8f6c.jpg" alt="Gestión de ramas en Git">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/gestion-de-ramas-en-git-creacion-fusion/)*

---

## Deshacer cambios: reset vs revert

* [git reset documentation](https://git-scm.com/docs/git-reset)
* [git revert documentation](https://git-scm.com/docs/git-revert)

Cuando empecé con control de versiones, `git reset` y `git revert` se convirtieron en mis mejores aliados para deshacer commits sin romper el repositorio. Ambos comandos me ayudaron a corregir errores, limpiar el historial y resolver conflictos, pero funcionan de maneras muy distintas.

**¿Cuál es la diferencia entre Git Reset y Git Revert?**

La distinción es clave antes de tocar tu repositorio. Cada comando responde a una intención diferente.

**Git Reset** mueve el puntero de tus commits a uno anterior. Esto te permite regresar en el tiempo, explorar el historial e incluso recordar qué hiciste en cada paso. Es útil si tienes mala memoria y quieres revisar versiones previas sin perder el rumbo.

**Git Revert**, en cambio, es más quirúrgico. Crea un nuevo commit que actúa como tapón y deshace los cambios de un commit específico, sin borrar nada del historial.

**¿Qué hace Git Revert?** Crea un nuevo commit que revierte los cambios de uno anterior. El historial se mantiene intacto y puedes ver tanto el commit original como el revert.

**¿Cómo uso Git Revert para deshacer un commit?**

Imagina que subiste un archivo llamado `error.txt` que no debería estar en el repositorio. Alguien de tu equipo te avisa y necesitas revertir ese cambio sin afectar el resto del historial.

El flujo es directo:

- Ejecuta `git log` para ver tu historial de commits.
- Identifica el hash del commit que quieres revertir, ese identificador único frente a cada mensaje.
- Copia el hash y ejecuta `git revert <hash>`.
- Se abre un editor con un mensaje predefinido tipo "Revert nuevo archivo especial creado". Agrega tu firma o nota por camaradería con el equipo.
- Guarda y listo, tu repositorio vuelve al estado anterior.

Al correr `git log` después, vi que revert no elimina el commit original, simplemente añade uno nuevo que neutraliza esos cambios. Si hago `ls`, el archivo problemático ya no aparece, pero el rastro queda documentado.

**¿Por qué importa el mensaje del commit?**

Un buen mensaje hace que tu historial sea legible. Cuando usas `git revert`, el commit generado describe qué se está deshaciendo y quién lo hizo. Eso facilita auditar decisiones más adelante.

**¿Cómo funciona Git Reset y sus parámetros?**

Git Reset es más agresivo. En lugar de crear un commit nuevo, mueve el puntero HEAD a un commit previo y, según el parámetro que uses, también puede borrar archivos y commits posteriores.

Tienes tres modos disponibles:

- **soft**: elimina los archivos pero mantiene los cambios en staging.
- **mixed**: regresa los commits y deja los cambios sin agregar.
- **hard**: deshace todos los cambios, archivos y commits posteriores al hash indicado.

El flujo práctico se ve así: creas un archivo `reset.txt`, lo agregas con `git add`, haces commit con un mensaje claro como "nuevo archivo para reiniciar", y luego decides que quieres volver varios commits atrás. Copias el hash del commit destino y ejecutas:

```bash
git reset --hard <hash>
```

Al correr `git log` después, HEAD y `main` aparecen ubicados justo donde querías regresar.

**¿Cuándo debo usar git reset hard?** Solo como último recurso. Borra archivos, commits y puede afectar el trabajo de tu equipo si el repositorio es compartido.

**¿Qué es el HEAD en Git y por qué importa?**

Cuando ejecutas `git log`, ves un paréntesis con la palabra HEAD apuntando a `main`. Ese puntero indica cuál es el último commit realizado y dónde estás parado en la línea de tiempo del proyecto. Cada vez que haces un nuevo commit, HEAD se mueve automáticamente a esa nueva posición.

Tanto `git reset` como `git revert` manipulan ese puntero, por eso entender HEAD es la base para no perderte al deshacer cambios.

**¿En qué casos conviene usar cada comando?**

Ambos comandos brillan en tres escenarios concretos:

- **Corrección de errores**: si subiste un archivo que no funciona, `git revert` es la opción limpia. Si varios compañeros también quieren revertir, evalúa `git reset` con cuidado.
- **Limpieza del historial**: cuando el log es demasiado largo y el proyecto ya está sólido, puedes consolidar versiones para navegar más fácil con `git log`.
- **Manejo de conflictos entre ramas**: aunque casi siempre los conflictos se resuelven sin reset, en casos extremos puede ser una salida.

La recomendación práctica: comunica siempre con tu equipo antes de usar reset, sobre todo con el parámetro `--hard`. Reset y revert no son intercambiables, y elegir mal puede borrar trabajo ajeno.

<img src="https://static.platzi.com/media/user_upload/upload-a8155535-3356-4d0e-9195-6e4675e62e2b.png" alt="Git reset vs revert">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/git-reset-vs-revert-para-deshacer-commit/)*

---

## Tags y checkout para versiones y exploración

* [git tag documentation](https://git-scm.com/docs/git-tag)
* [git checkout documentation](https://git-scm.com/docs/git-checkout)

Etiquetar versiones importantes y revisar commits sin romper tu trabajo son dos tareas que en Git resuelves con `git tag` y `git checkout`. Aprendí a usarlos juntos para marcar hitos en mi historial y explorar puntos previos sin afectar la rama principal.

**¿Para qué sirve Git Tag en el control de versiones?**

Git Tag te permite añadir una etiqueta a un commit específico para marcarlo como un hito. Piensa en una versión estable, una release alpha o cualquier punto que tu equipo quiera recordar con facilidad cuando navegue por el historial.

**¿Qué es un tag en Git?** Es una etiqueta que asocias a un commit para identificarlo con un nombre claro, como `v1.0`. No altera el historial ni los archivos, solo agrega un marcador visible en Git Log.

La lógica estricta diría que cada commit debería llevar tag, pero eso genera trabajo extra innecesario. Lo común es acordar con tu equipo en qué commits sí tiene sentido etiquetar: lanzamientos, milestones o versiones decimales acordadas.

**¿Cómo crear un tag con mensaje?**

Para crear una etiqueta anotada usé el comando con el flag `-a` y agregué un mensaje descriptivo con `-m`:

```bash
git tag -a v1.0 -m "Mi primera versión"
```

Después de ejecutarlo, al correr `git log` vi junto a `HEAD -> main` la etiqueta `v1.0` como un indicador del avance. Es como poner un separador en un libro largo: cuando tengas 100 o 200 commits, navegar entre tags es mucho más cómodo que recorrer todo el historial.

**¿Cómo listar y ver detalles de un tag?**

Si quieres ver únicamente la lista de etiquetas (no de commits), escribes:

- `git tag` lista todos los tags creados.
- `git show v1.0` muestra autor, fecha, mensaje, commit asociado y los cambios realizados en ese commit.

Esto último es clave porque `git show` te entrega más información que un commit suelto: qué cambió, quién lo hizo y por qué. En historiales grandes esa narrativa pesa más que el hash.

**¿Cómo elimino o corrijo un tag mal nombrado?**

Si te equivocaste al nombrar la versión, puedes borrar el tag con el flag `-d` (delete):

```bash
git tag -d v1.0
```

Eliminar una etiqueta no altera commits, archivos ni el historial. Solo retira el marcador. Después puedes crear uno nuevo, por ejemplo `git tag v2.0`, y verificar con `git log` que el cambio quedó aplicado. Agregar o quitar etiquetas es una operación segura que no afecta el trabajo del resto del equipo.

**¿Cómo uso Git Checkout para explorar commits anteriores?**

Git Checkout no solo sirve para alternar entre ramas. También te deja viajar a un commit específico para evaluar cambios sin tocar `main`. Copias el hash del commit y ejecutas:

```bash
git checkout <hash>
```

Al entrar, Git te muestra una leyenda indicando que estás en estado **detached HEAD**. Si revisas con `git log`, notarás que HEAD ya no apunta a `main` con la flechita habitual. Estás ubicado en un punto temporal del historial.

**¿Qué significa HEAD detached?** Es cuando HEAD apunta a un commit específico en lugar de a una rama. Puedes editar y probar archivos, pero los cambios no afectan a `main` a menos que crees una rama nueva.

**¿Puedo modificar archivos dentro de ese estado temporal?**

Sí, y ahí está la magia. Si haces `ls` verás los archivos tal como existían en ese commit. Puedes crear nuevos, por ejemplo:

- Editas con `nano testing3.txt` y guardas el contenido.
- Verificas con `git status` que el cambio quedó registrado solo en ese espacio temporal.
- Pruebas qué pasa si tu sistema tiene o no ese archivo.

Todo ocurre en un sandbox aislado. Es ideal para experimentar sin riesgo de romper el proyecto principal.

**¿Cómo regreso a main sin dejar rastro?**

Cuando terminas tus pruebas, limpias la terminal y ejecutas:

```bash
git checkout main
```

HEAD vuelve a apuntar a `main` y recuperas el estado original del proyecto, incluyendo el tag que ya tenías. Para confirmar que nada se alteró, corro `git branch` y verifico que no se creó ninguna rama nueva ni hubo modificaciones permanentes.

La ventaja es enorme: regresas a un commit previo, juegas con los archivos, validas hipótesis y, si no funciona, vuelves a la realidad donde todo está en orden. Cero consecuencias en el historial compartido.

Si se quiere colocar una etiqueta a un commit específico debes colocar el número del commit luego de la versión de este modo:

```bash
git tag -a v1.0 <hash-del-commit> -m "mensaje del tag"
```

<img src="https://static.platzi.com/media/user_upload/upload-f3cec025-6d2b-4e54-87f4-698be5c9e2dc.png" alt="Git tag y checkout">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/git-tag-y-checkout-sin-romper-tu-proyect/)*

---

## Cómo resolver conflictos de merge

* [git branch documentation](https://git-scm.com/docs/git-branch)
* [git merge documentation](https://git-scm.com/docs/git-merge)

Cuando trabajas en equipo con Git, tarde o temprano dos personas tocarán el mismo archivo y aparecerá un **merge conflict**. Saber resolver conflictos de ramas en Git es la diferencia entre frenar al equipo o mantener el flujo de trabajo intacto. Aquí explico cómo provocar uno a propósito y solucionarlo línea por línea.

**¿Por qué ocurre un conflicto de ramas en Git?**

Un conflicto aparece cuando dos ramas modifican la misma porción de un archivo y Git no puede decidir cuál versión conservar. En lugar de elegir por ti, te entrega el control para que tú definas la versión final.

Esto pasa más seguido de lo que parece cuando varias personas trabajan en paralelo sobre el mismo repositorio. La buena noticia: Git marca cada conflicto con señalizaciones claras para que sepas exactamente qué cambió y desde dónde.

**¿Qué es un conflicto en Git?** Es una situación en la que dos ramas modifican las mismas líneas de un archivo y Git te pide decidir manualmente cuál cambio se queda en la versión final.

**¿Cómo crear un conflicto controlado para practicar?**

La mejor forma de aprender a resolver un merge conflict es provocarlo tú mismo. Estos son los pasos que seguí en la terminal para forzar el escenario:

1. Verificar mi rama actual con `git branch`. Si solo tengo `main`, perfecto.
2. Crear un archivo nuevo con `nano conflict.txt` y escribir "línea original" dentro.
3. Registrar el archivo con `git add` y `git commit -m "archivo de conflicto creado"`.
4. Crear una rama nueva con `git checkout -b developer` para trabajar en paralelo.
5. Editar `conflict.txt` desde `developer`, escribir "cambios desde la rama dev" y hacer commit.
6. Volver a `main` con `git checkout main` o `git switch main`.
7. Editar el mismo archivo en `main`, escribir "segundo cambio desde main" y hacer commit.

Con esto tengo dos ramas que modificaron el mismo archivo en la misma línea. El terreno está listo para el conflicto.

**¿Sirve igual git switch que git checkout?**

Sí. Tanto `git checkout` como `git switch` te permiten cambiar de rama y hacen exactamente lo mismo en este contexto. La diferencia es que `git switch` es más reciente y está pensado solo para ramas, mientras que `git checkout` cubre más operaciones.

**¿Cómo resolver el conflicto al hacer merge?**

Desde `main`, ejecuté `git merge developer`. Git intentó fusionar y me avisó que hay un conflicto en `conflict.txt`. Aquí es donde entra la parte interesante.

Abrí el archivo con `nano conflict.txt` y vi algo así:

```
<<<<<<< HEAD
segundo cambio desde main
cambios desde la rama dev
>>>>>>> developer
```

La sección marcada con **HEAD** es el último cambio de mi rama principal. La sección de abajo corresponde a la rama `developer`. Mi trabajo es decidir qué se queda.

Puedo:
- Conservar solo el cambio de `main` y borrar el bloque de `developer`.
- Conservar solo el cambio de `developer` y borrar el bloque de HEAD.
- Combinar ambos en una versión nueva.
- Escribir algo completamente distinto si así lo necesita el proyecto.

Lo importante: **eliminar las señalizaciones `<<<<<<<`, `=======` y `>>>>>>>`** antes de guardar. Esas marcas son guías de Git, no parte de mi código.

**¿Qué significa HEAD en un conflicto de Git?** HEAD apunta al último commit de la rama en la que estás parado. En un merge, indica cuál de los bloques pertenece a tu rama actual.

**¿Cómo cerrar el merge y dejar limpio el repositorio?**

Después de editar el archivo, guardé los cambios y verifiqué el estado con `git status`. Vi el mensaje "ambos modificados" en `conflict.txt`, lo que confirma que Git ya detectó mi intervención manual.

Desde ahí, los pasos finales son directos:

- Ejecutar `git add conflict.txt` para marcar el conflicto como resuelto.
- Hacer `git commit -m "nuevos cambios"` para registrar la fusión.
- Volver a correr `git merge developer` si fuera necesario, o confirmar que el merge ya quedó cerrado.

Con esto, la versión final del documento queda unificada dentro de `main`.

**¿Qué hago con la rama después de resolver el conflicto?**

Una vez fusionada, eliminé la rama adicional para evitar conflictos posteriores en commits futuros. Una rama vieja que sigue viva suele ser fuente de nuevos merge conflicts cuando alguien la retoma sin actualizarla.

Puedes borrarla con `git branch -d developer` cuando ya esté integrada a `main`. Así mantienes tu repositorio limpio y tu equipo enfocado solo en las ramas activas.

**Resumen del flujo para resolver conflictos:**

1. Crear archivo propenso a conflictos y editarlo.
2. Crear una nueva rama, editar el archivo, hacer commit.
3. Cambiar a `main`, editar el mismo archivo, hacer commit.
4. Fusionar la rama de cambios con `git merge`.
5. Obtener mensaje de conflicto.
6. Abrir el archivo, decidir qué cambios conservar, eliminar las marcas.
7. `git add`, `git commit` para resolver.
8. Hacer merge nuevamente si es necesario.
9. Eliminar la rama con `git branch -d`.

**Tip:** Si queremos agregar un cambio de un archivo que ya se encuentra trackeado, podemos usar el siguiente comando:

```bash
git commit -am "Mensaje commit"
```

Esto simplifica el `git add` y `git commit` del archivo que ha sido modificado.

<img src="https://static.platzi.com/media/user_upload/upload-e13d8668-ca52-40a5-add8-f14ae2c4a3c1.png" alt="Resolución de conflictos de merge">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/como-resolver-conflictos-de-merge-en-git/)*

---

## Usando Git desde Visual Studio Code

* [Visual Studio Code](https://code.visualstudio.com/)

Visual Studio Code ofrece una interfaz visual y eficiente para gestionar versiones con Git, simplificando muchas tareas complejas y ahorrando tiempo. Integrar VS Code en mi flujo de trabajo diario facilitó considerablemente el manejo de ramas, commits y conflictos sin depender tanto de comandos en la terminal.

**¿Cómo abrir VS Code desde la terminal?**

Inicié VS Code en la ubicación del proyecto con `code .`. Esto abre una instancia de VS Code en el directorio actual, incluyendo todos los archivos versionados con Git.

**¿Cómo visualizar y gestionar ramas en VS Code?**

Dentro de VS Code, identifiqué mi rama activa en la sección de control de versiones. Seleccioné la rama para ver las opciones de cambio, como alternar entre ramas o crear nuevas. Los cambios en las ramas se presentan en una gráfica visual, diferenciando fusiones y ramas en colores, una ventaja significativa sobre `git log`.

**¿Cómo hacer un commit de cambios en VS Code?**

Al editar un archivo, el ícono de control de versiones muestra un indicador de cambio. En lugar de usar `git commit -m "mensaje"`, simplemente añadí un mensaje y presioné commit en la interfaz de VS Code.

**¿Cómo crear y alternar entre ramas en VS Code?**

Hice clic en "Create New Branch" y la nombré, por ejemplo, "VS Code Dev". VS Code marcó esta nueva rama como activa, heredando los cambios de la rama principal. Al editar archivos en esta rama, pude realizar commits directamente en la interfaz.

**¿Cómo resolver conflictos de fusión en VS Code?**

Seleccioné la rama con la que deseaba fusionar (por ejemplo, VS Code Dev con Main) usando el menú de Branch > Merge. Cuando ocurrió un conflicto, VS Code desplegó opciones de resolución con colores para cada cambio, simplificando la selección entre el cambio actual, el entrante o ambos. Pude optar por "Merge Editor" para una vista más visual y confirmar la fusión con un "Complete Merge" al finalizar.

**¿Cómo iniciar un nuevo repositorio en VS Code?**

Creé un nuevo directorio y abrí VS Code en esa ubicación. Al no haber archivos, seleccioné "Inicializar repositorio" para configurar un nuevo repositorio. Esto ejecuta `git init`, crea la rama principal (`main`) y permite añadir nuevas ramas y hacer commits sin usar comandos.

**Extensiones útiles para trabajar con Git en VS Code:**

Algunas extensiones que encontré útiles para trabajar con Git en VS Code incluyen:

- **GitLens**: superpone información de blame y navegación en el código.
- **Git Graph**: visualiza el historial de commits como un gráfico.
- **GitHub Pull Requests**: integra revisiones y gestión de PRs.
- **Git History**: navega y compara commits fácilmente.

<img src="https://static.platzi.com/media/user_upload/upload-a891d453-1edc-4c37-a6b2-2723f8f57947.png" alt="Extensiones de Git en VS Code">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/usando-git-desde-vs-code/)*

---

## Recursos adicionales y comandos útiles

Para cerrar, quiero compartir algunos recursos y comandos que me fueron especialmente útiles durante mi aprendizaje y que sigo usando en mi día a día.

**Comando interesante de visualización de logs:**

Un alias que configuré para ver el historial de forma más visual y organizada:

```bash
git config --global alias.superlog "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"
```

Luego puedo ejecutar `git superlog` para ver un gráfico de commits con colores, fechas relativas, autores y ramas.

**Enlaces de referencia:**

- [Documentación oficial de Git](https://git-scm.com/docs)
- [Git Cheat Sheet de GitHub Education](https://education.github.com/git-cheat-sheet-education.pdf)
- [Guía de inicio en GitHub](https://docs.github.com/es/get-started/start-your-journey)
- [Visual Studio Code](https://code.visualstudio.com/)

**Comandos que usé con frecuencia:**

| Comando | Descripción |
| :--- | :--- |
| `git init` | Inicializa un nuevo repositorio |
| `git status` | Muestra el estado de los archivos |
| `git add .` | Agrega todos los archivos al staging |
| `git commit -m "mensaje"` | Registra los cambios en el historial |
| `git log` | Muestra el historial de commits |
| `git branch` | Lista, crea o elimina ramas |
| `git checkout -b <nombre>` | Crea y cambia a una nueva rama |
| `git switch <nombre>` | Cambia entre ramas (alternativa moderna) |
| `git merge <rama>` | Fusiona una rama con la actual |
| `git branch -D <rama>` | Elimina una rama |
| `git reset --hard <hash>` | Vuelve a un commit anterior (destructivo) |
| `git revert <hash>` | Crea un nuevo commit que deshace uno anterior |
| `git tag -a v1.0 -m "mensaje"` | Crea una etiqueta anotada |
| `git checkout <hash>` | Viaja a un commit específico (detached HEAD) |

---

> Gracias por leer.