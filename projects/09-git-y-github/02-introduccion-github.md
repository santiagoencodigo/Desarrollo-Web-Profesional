# Git y GitHub: Introducción y Flujo de Trabajo

En este documento comparto mi experiencia aprendiendo a usar GitHub como plataforma de colaboración y desarrollo profesional. Aquí recopilo todo lo que he aprendido sobre cómo crear repositorios, colaborar en equipo, proteger mi cuenta y aprovechar las herramientas avanzadas que ofrece GitHub.

> Es muy satisfactorio aprender más sobre la herramienta que utilizo todos los días.

---

## Tabla de Contenido

- [Introducción a GitHub](#introducción-a-github)
- [Qué es GitHub y por qué usarlo](#qué-es-github-y-por-qué-usarlo)
- [Alternativas a GitHub](#alternativas-a-github)
- [Evolución de GitHub y sus pilares](#evolución-de-github-y-sus-pilares)
- [Crear y proteger tu cuenta de GitHub](#crear-y-proteger-tu-cuenta-de-github)
- [Personalizar tu perfil de GitHub](#personalizar-tu-perfil-de-github)
- [Autenticación de dos pasos (2FA)](#autenticación-de-dos-pasos-2fa)
- [Flujo de trabajo entre Git y GitHub](#flujo-de-trabajo-entre-git-y-github)
- [Crear y clonar tu primer repositorio en GitHub](#crear-y-clonar-tu-primer-repositorio-en-github)
- [Productos de GitHub: precios, planes y apps](#productos-de-github-precios-planes-y-apps)
- [Configuración de SSH en GitHub](#configuración-de-ssh-en-github)
- [Uso de Forks y Estrellas en repositorios](#uso-de-forks-y-estrellas-en-repositorios)
- [Sincronización con git pull, git push y git fetch](#sincronización-con-git-pull-git-push-y-git-fetch)
- [Plantillas de issues en GitHub](#plantillas-de-issues-en-github)
- [Uso de Pull Requests para colaboración efectiva](#uso-de-pull-requests-para-colaboración-efectiva)
- [Recursos adicionales](#recursos-adicionales)

---

## Introducción a GitHub

Recomiendo mucho la lectura sobre DevOps para entender el contexto de las herramientas de colaboración:

* [Azure DevOps - ¿Qué es DevOps?](https://azure.microsoft.com/es-mx/resources/cloud-computing-dictionary/what-is-devops)

La colaboración en proyectos de software depende de sistemas de control de versiones, y Git es una herramienta central para lograrlo. Usar GitHub, una plataforma en la nube basada en Git, permite que los desarrolladores compartan sus proyectos, trabajen en equipo y accedan a herramientas avanzadas para asegurar y escalar sus desarrollos.

Con un enfoque en inteligencia artificial (IA), colaboración, productividad, seguridad y escalabilidad, GitHub ha pasado de ser una red social de programadores a una herramienta integral que optimiza el desarrollo de software moderno.

---

## Qué es GitHub y por qué usarlo

GitHub es una plataforma en la nube que nos permite almacenar, compartir y contribuir a proyectos de software ajenos y propios. Su tecnología núcleo es Git, el sistema de control de versiones que ya conocemos.

* [GitHub - Sitio Oficial](https://github.com/)

**¿Qué oportunidades brinda GitHub para los desarrolladores?**

Con GitHub, cualquier desarrollador puede contribuir a proyectos relevantes, como mejoras en lenguajes de programación o incluso en el kernel de Linux. Esta capacidad de colaboración global eleva el nivel de la ingeniería de software, fomentando el trabajo en equipo entre profesionales de todo el mundo.

**¿Cómo puede ayudarte GitHub en el desarrollo profesional?**

Además de ser una herramienta de colaboración y desarrollo, GitHub ofrece la **GitHub Foundation Certification**, una certificación ideal para validar habilidades en GitHub y dar un primer paso hacia un perfil profesional sólido en desarrollo colaborativo.

* [GitHub Foundation Certification](https://learn.github.com/certification/GHF)

**Preguntas clave sobre GitHub:**

- **¿Cuándo fue lanzado GitHub?** Febrero de 2008.
- **¿Quién adquirió GitHub y en qué año?** Microsoft en 2018.
- **¿Cómo era el GitHub recién fundado?** Era una plataforma en la nube donde podíamos almacenar y compartir proyectos de software, además de conocer personas que también construían software. Algo así como una red social para programadores.

<img src="https://static.platzi.com/media/user_upload/8-e7e8a868-c993-4fd9-b8d0-53cb4360f8dd.jpg" alt="Qué es GitHub">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/que-es-github/)*

---

## Alternativas a GitHub

Existen varias opciones para hospedar proyectos en Git, cada una con sus propias características:

* **GitHub** (Microsoft) - La plataforma más destacada.
* [Bitbucket](https://bitbucket.org/product/): (Atlassian) - Integración con Jira y otras herramientas de Atlassian.
* [GitLab](https://about.gitlab.com/): Ofrece DevOps completo con CI/CD integrado.
* [Azure DevOps](https://azure.microsoft.com/es-mx/products/devops): (Microsoft) - Suite completa de desarrollo.
* [AWS CodeCommit](https://aws.amazon.com/es/codecommit/): (Amazon) - Integración con el ecosistema AWS.
* [Cloud Source](https://source.cloud.google.com/onboarding/welcome): (Google) - Integración con GCP.
* [Atlassian](https://www.atlassian.com/es)
* **Servidor propio de Git** - Para ambientes privados y controlados.

---

## Evolución de GitHub y sus pilares

Inicialmente, GitHub era un simple repositorio de código en la nube. Sin embargo, ha evolucionado hasta ofrecer una plataforma avanzada que incluye una interfaz web, herramientas de línea de comandos y flujos de trabajo colaborativos. En lugar de limitarse a compartir proyectos, permite a los usuarios colaborar en tiempo real, automatizar tareas y utilizar inteligencia artificial para mejorar la seguridad y productividad del código.

**El producto que representa esta transformación es GitHub Enterprise**, que permite crear, construir y entregar software 100% seguro.

**Pilares de GitHub Enterprise:**

| Pilar | Descripción |
| :--- | :--- |
| **AI (Inteligencia Artificial)** | Revoluciona el desarrollo ayudando en colaboración, productividad y seguridad. |
| **Colaboración** | Herramientas que facilitan el trabajo en equipo y la entrega de proyectos. |
| **Productividad** | Automatiza tareas rutinarias para que los programadores se concentren en soluciones innovadoras. |
| **Seguridad** | Herramientas avanzadas para mantener el código protegido. |
| **Escalabilidad** | Se adapta a la cantidad y necesidades de los desarrolladores. |

**Aspecto más relevante de GitHub:** La contribución a proyectos ajenos a los propios. Esto nos permite crecer como desarrolladores al trabajar en productos que requieren capacidad técnica avanzada y colaborar con personas de todo el mundo.

<img src="https://static.platzi.com/media/user_upload/upload-982f8f4e-4f99-4f31-a184-8c5a71bef800.png" alt="Resumen de GitHub">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/que-es-github/)*

---

## Crear y proteger tu cuenta de GitHub

Crear una cuenta de GitHub es el primer paso para empezar a versionar tu código, colaborar en equipo y construir un perfil profesional como desarrollador.

**Pasos para registrarte en GitHub:**

1. Accede a [github.com](https://github.com) y haz clic en "Sign up".
2. Ingresa tu correo electrónico y selecciona "continuar".
3. Crea un password seguro y presiona "continuar".
4. Elige un nombre de usuario y verifica su disponibilidad.
5. Completa la verificación de humano (captcha).
6. Recibirás un código de verificación en tu correo; introdúcelo.
7. Completa el cuestionario sobre tu perfil.
8. Selecciona el tipo de cuenta (te recomiendo la opción gratuita).

**¿Necesito pagar para usar GitHub?** No. GitHub ofrece una versión gratuita que cubre repositorios públicos y privados para uso individual. La versión Team está pensada para equipos con necesidades adicionales.

**Recursos adicionales:**

* [Microsoft - ¿Qué es la autenticación de dos factores (2FA)?](https://www.microsoft.com/es-co/security/business/security-101/what-is-two-factor-authentication-2fa)
* [IBM - 2FA (Autenticación de dos factores)](https://www.ibm.com/mx-es/think/topics/2fa)

<img src="https://i.blogs.es/a6e5a8/dos-pasos/1366_2000.jpg" alt="Autenticación de dos pasos">

*Imagen tomada de: [Xataka - Verificación en dos pasos](https://www.xataka.com/basics/verificacion-dos-pasos-2fa-que-sirve-que-metodos-existen)*

---

## Personalizar tu perfil de GitHub

Un perfil bien armado funciona como tu carta de presentación frente a reclutadores y colaboradores. Para editarlo, ve a tu foto en la esquina superior derecha y selecciona **Settings**.

**Elementos clave para personalizar:**

- **Nombre real** - Para que sea más reconocible que tu username.
- **Correo público** - Que decides mostrar.
- **Biografía** - Descripción breve sobre ti.
- **URL** - De tu sitio web personal o portafolio.
- **Redes sociales** - Asociadas a tu marca personal.
- **Empresa actual** - Puedes etiquetar con `@` si ya tiene perfil en GitHub.
- **Foto de perfil** - Mediante la opción Editar.

**Detalle importante:** Cada vez que hagas cambios, debes presionar el botón verde **Update profile**. Si recargas la página sin guardar, perderás todo lo que escribiste.

**Recurso interesante:**

* [GitHub Education Pack](https://education.github.com/pack) - Beneficios para estudiantes y educadores.

---

## Autenticación de dos pasos (2FA)

Tu cuenta de GitHub puede contener repositorios privados, código de clientes y proyectos en equipo. Si alguien accede sin autorización, no solo compromete tu trabajo individual, también el de tus compañeros. Por eso la autenticación en dos pasos (2FA) deja de ser opcional y se vuelve esencial.

**Advertencia importante:** Nunca uses 2FA por SMS. Es el método más vulnerable a ataques de **SIM swapping**. La recomendación es combinar la app móvil de GitHub con una app de autenticación.

**Mejores apps para 2FA en GitHub:**

- 1Password
- Authy
- Microsoft Authenticator

Todas generan códigos temporales (TOTP) que cambian cada 30 segundos y son mucho más seguras que los SMS.

**Pasos para activar 2FA:**

1. Descarga GitHub Mobile desde la App Store o Google Play.
2. Inicia sesión con tu usuario y contraseña.
3. Autoriza tu dispositivo desde la pantalla que aparece dentro de la app.
4. Ve a Settings > Password and authentication.
5. Escanea el código QR con tu app de autenticación.
6. Introduce el código temporal que genera la app.
7. **Descarga los códigos de recuperación** y guárdalos en un lugar seguro.
8. Confirma que ya los almacenaste.

**¿Para qué sirven los códigos de recuperación?** Son tu salvavidas si pierdes el teléfono o la app de autenticación. Sin ellos, recuperar la cuenta puede ser complicado.

Una vez activada, GitHub define automáticamente GitHub Mobile como tu método preferido de 2FA, gracias a la sesión que abriste antes. Esta es la configuración recomendada salvo que tu empresa imponga políticas distintas.

---

## Flujo de trabajo entre Git y GitHub

Para entender cómo Git y GitHub funcionan en conjunto en un flujo de trabajo profesional, debemos recordar que Git es una herramienta de control de versiones basada en comandos, mientras que GitHub facilita su implementación al ofrecer una plataforma que permite manejar proyectos de Git de forma colaborativa y accesible en la nube.

**Diferencia clave entre Git y GitHub:**

| Git | GitHub |
| :--- | :--- |
| Herramienta de control de versiones local | Plataforma en la nube para alojar repositorios |
| Motor que registra cambios en archivos | Almacén donde se sube el trabajo |
| Se usa desde la terminal | Se accede desde navegador o terminal |

**Analogía útil:** Git es como el procesador de textos (Word) que usas para escribir un documento en tu PC, y GitHub es como Google Drive, donde guardas ese documento para que otros puedan verlo, editarlo y revisarlo.

**Flujo de trabajo profesional:**

1. Crear un repositorio en GitHub.
2. Clonarlo en tu máquina local con `git clone`.
3. Realizar cambios en tu proyecto.
4. Usar `git add` para preparar tus archivos.
5. Usar `git commit` para guardar los cambios localmente.
6. Trabajar en ramas separadas con `git checkout -b nombre-rama`.
7. Subir cambios a GitHub con `git push origin nombre-rama`.
8. Iniciar un proceso de **Code Review** mediante Pull Request.
9. Fusionar la rama a la principal cuando sea aprobada.

**Regla recomendada:** "Una tarea, un objetivo". Mantener las tareas pequeñas y con un solo objetivo facilita la revisión y reduce conflictos.

<img src="https://static.platzi.com/media/user_upload/upload-be25436d-03f9-42a0-a767-a0cc324a7e74.png" alt="Flujo de trabajo entre Git y GitHub">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/flujo-de-trabajo-entre-git-y-github/)*

---

## Crear y clonar tu primer repositorio en GitHub

Crear un repositorio en GitHub es el primer paso para llevar tu trabajo con Git al terreno colaborativo.

**Pasos para crear un repositorio:**

1. Desde la pantalla de inicio de tu perfil, busca el signo de más en la esquina superior derecha.
2. Selecciona "New repository".
3. Llena el formulario:
   - **Propietario:** Tu usuario u organización.
   - **Nombre del repositorio:** Ej. `miprimerrepo`.
   - **Descripción:** Una línea breve.
   - **Visibilidad:** Público o privado.
4. Opciones extra:
   - Inicializar con README (recomendado).
   - Agregar `.gitignore`.
   - Elegir licencia.
5. Pulsa el botón verde "Create repository".

**¿Cuál es la diferencia entre repositorio público y privado?**

| Público | Privado |
| :--- | :--- |
| Lo puede ver cualquier persona en internet | Solo lo ven tú y los colaboradores invitados |
| Ideal para proyectos open source o portafolio | Perfecto para código sensible o trabajo interno |

**Cómo invitar a un colaborador:**

1. Ve a **Settings** > **Collaborators**.
2. Selecciona **Add people**.
3. Escribe el usuario que quieras invitar.
4. La persona debe tener cuenta de GitHub y aceptar la invitación.

**Cómo clonar un repositorio:**

Desde la pestaña **Code**, copia la URL (HTTPS, SSH o GitHub CLI) y ejecuta en la terminal:

```bash
git clone https://github.com/tuusuario/miprimerrepo.git
```

**¿Qué hace `git clone`?** Descarga una copia completa del repositorio remoto, incluyendo su historial de commits y ramas, y la convierte en una carpeta local lista para trabajar.

<img src="https://static.platzi.com/media/user_upload/upload-0a46d376-ccae-44d2-9042-ff291cc3addd.png" alt="Crear y clonar repositorio">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/flujo-de-trabajo-entre-git-y-github/)*

---

## Productos de GitHub: precios, planes y apps

Es importante conocer los costos y beneficios de los diferentes productos de GitHub, especialmente si trabajas en una organización.

**Regla importante:** Si un servicio o herramienta que estás utilizando no está ayudando a tu organización, entonces la está perjudicando.

### Repositorios

Los repositorios de GitHub, ya sean públicos o privados, son **gratuitos y sin límite** en la cantidad que puedes tener. Esta no es una diferencia entre los planes.

### Codespaces

Codespaces es un entorno de desarrollo integrado (IDE) basado en la nube, proporcionado por GitHub. Permite escribir, ejecutar y depurar código directamente desde un navegador o desde VS Code local.

**Costos de Codespaces:**

| Núcleos | Costo por hora | Tiempo de uso gratuito |
| :--- | :--- | :--- |
| 2 núcleos | $0.18 USD | 60 horas |
| 4 núcleos | $0.36 USD | 30 horas |
| 8 núcleos | $0.72 USD | 15 horas |
| 16 núcleos | $1.44 USD | No aplica |
| 32 núcleos | $2.88 USD | No aplica |

**Almacenamiento en Codespaces:**

| Categoría | Costo | Datos gratuitos |
| :--- | :--- | :--- |
| Almacenamiento | $0.07 USD por mes | 15 GB gratis |

**Recomendación:** Las 30 horas de uso con 4 núcleos son más que suficientes para este curso. Recuerda apagar Codespaces cuando no lo uses para evitar costos.

### GitHub Web Editor

¡Buenas noticias! El editor web de GitHub está presente en todos los planes, sin costo en ningún escenario y sin límite de uso.

### GitHub Actions

GitHub Actions es una herramienta de automatización para flujos de trabajo. Permite configurar y ejecutar tareas automáticamente cuando ocurren ciertos eventos (push, pull request, etc.).

**Consumo de minutos por plan:**

| Plan | Consumo de minutos |
| :--- | :--- |
| Gratuito | 2,000 minutos/mes |
| Team | 3,000 minutos/mes |
| Enterprise | 50,000 minutos/mes |

**¿Es posible agotar mis GitHub Actions?** Sí, es totalmente posible y bastante común si tienes flujos de trabajo mal optimizados. Los minutos en macOS o Windows se multiplican y consumen la cuota más rápido que los de Linux. Para optimizar, configura las Actions para que solo se ejecuten en eventos clave.

**Referencia principal:** [GitHub Pricing](https://github.com/pricing)

<img src="https://static.platzi.com/media/user_upload/upload-ed265fda-e2d6-41d4-90d7-05e997d22746.png" alt="Productos de GitHub">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/productos-de-github-precios-planes-y-apps/)*

---

## Configuración de SSH en GitHub

Usar SSH para interactuar con GitHub es una excelente forma de aumentar la seguridad y mejorar la comodidad en el manejo de repositorios.

**¿Por qué usar SSH en lugar de HTTPS?**

- **Seguridad adicional:** Autentica la computadora específica que accede al repositorio.
- **Comodidad:** Evita ingresar contraseña en cada operación.

**Pasos para generar llave SSH:**

1. Verifica que no tienes llaves previas.
2. En la terminal, ejecuta:

```bash
ssh-keygen -t ed25519 -C "tu_correo@example.com"
```

3. Guarda la llave con el nombre por defecto y añade una contraseña segura.
4. Activa el agente SSH:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

**Cómo añadir la llave a GitHub:**

1. Abre el archivo de la llave pública (`id_ed25519.pub`) y copia el contenido.
2. En GitHub, ve a **Settings > SSH and GPG keys > New SSH key**.
3. Pega la llave y asígnale un nombre identificativo.

**Configuración en Mac:**

Crea el archivo `~/.ssh/config` con:

```
Host github.com
   AddKeysToAgent yes
   UseKeychain yes
   IdentityFile ~/.ssh/id_ed25519
```

**Verificar conexión:**

```bash
ssh -T git@github.com
```

**Clonar usando SSH:**

```bash
git clone git@github.com:usuario/repositorio.git
```

**Consejo:** Es buena idea crear una llave SSH en cada laptop y enlazarlas a tu cuenta de GitHub.

<img src="https://static.platzi.com/media/user_upload/GIT%20%282%29-9298dd08-4b6c-4b58-8583-61355bd291b6.jpg" alt="Configuración de llaves SSH">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/configuracion-de-llaves-ssh/)*

---

## Uso de Forks y Estrellas en repositorios

Entender el uso de forks y estrellas en GitHub optimiza la gestión de proyectos y recursos al trabajar en esta plataforma.

### Forks

Un **fork** en GitHub es una copia de un repositorio alojado en la cuenta de otra persona que puedes transferir a tu propia cuenta.

**Beneficios de un fork:**

- Trabajar de manera independiente sin afectar el repositorio original.
- Personalizar el contenido según tus necesidades.
- Crear una base para hacer contribuciones posteriores.

**Pasos para crear un fork:**

1. Abre el repositorio.
2. Selecciona el botón de **Fork**.
3. Sigue los pasos para copiarlo en tu cuenta.

**Diferencia entre fork y clone:**

| Fork | Clone |
| :--- | :--- |
| Copia en tu cuenta de GitHub | Copia local en tu máquina |
| Puerta de entrada para contribuir a proyectos open source | Permite trabajar sin conexión |

**Nota:** El fork **no se actualiza automáticamente** con los cambios del repositorio original. Debes sincronizarlo manualmente.

### Estrellas

Las **estrellas** en GitHub funcionan como un sistema de marcado para resaltar los repositorios que deseas tener a mano como referencia o favoritos.

**Beneficios de las estrellas:**

- Crear un índice de repositorios de referencia.
- Acceder rápidamente a recursos clave desde tu perfil.
- Seguir el desarrollo de proyectos importantes.

Para marcar un repositorio, simplemente haz clic en el icono de estrella. Puedes acceder a todos tus repositorios marcados desde la sección "Your stars" en tu perfil.

<img src="https://static.platzi.com/media/user_upload/upload-fc315491-177e-4dad-8712-ac1f28f9d9b6.png" alt="Forks y Estrellas">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/clone-fork-y-estrellas-a-repositorios/)*

<img src="https://static.platzi.com/media/user_upload/upload-47f46002-e60b-4445-a7a8-7cc6848de618.png" alt="Forks y Estrellas - Vista detallada">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/clone-fork-y-estrellas-a-repositorios/)*

---

## Sincronización con git pull, git push y git fetch

La gestión de repositorios es una habilidad esencial en el desarrollo de software moderno. Git y GitHub permiten a los desarrolladores colaborar y sincronizar cambios de manera eficiente.

### git pull vs git push

| Comando | Función |
| :--- | :--- |
| `git pull` | Actualiza tu repositorio local con los cambios de la nube |
| `git push` | Sube tus cambios locales al repositorio en la nube |

**Flujo básico:**

```bash
# Verificar rama activa
git branch

# Traer cambios del remoto
git pull origin main

# Preparar archivos para commit
git add .

# Realizar commit
git commit -m "Descripción del cambio"

# Subir cambios a GitHub
git push origin main
```

### git fetch

El comando `git fetch` descarga los cambios sin aplicarlos inmediatamente. Es útil cuando quieres evaluar los cambios antes de fusionarlos.

```bash
# Descargar cambios sin aplicarlos
git fetch origin

# Comparar diferencias entre ramas
git log main..origin/main

# Fusionar cambios evaluados
git merge origin/main
```

### ¿Cuándo usar fetch vs pull?

| `git pull` | `git fetch` |
| :--- | :--- |
| Rápido y directo | Más cauteloso |
| Ideal cuando confías en los cambios remotos | Ofrece etapa de evaluación antes de integrar |
| Actualiza la rama local inmediatamente | Permite revisión previa |

**Comandos relacionados:**

- `git remote -v` - Verifica el remoto configurado
- `git remote remove origin` - Elimina un remoto incorrecto
- `git remote add origin git@github.com:USUARIO/REPO.git` - Agrega remoto correcto

**Verificar conexión SSH:** `ssh -T git@github.com`

**Cambiar de HTTPS a SSH:**

```bash
git remote -v
git remote set-url origin git@github.com:USUARIO/REPO.git
```

**El flag `-u` en `git push -u origin main`** significa "upstream". Establece una relación entre tu rama local y la remota, permitiendo que futuros `git push` y `git pull` no necesiten especificar el remoto y la rama.

<img src="https://static.platzi.com/media/user_upload/9-9a508156-ee47-4b48-a0be-bccbd29a1a2b.jpg" alt="Sincronización con Git">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/trabajo-con-repositorios-remotos-push-pull-y-fetch/)*

**Analogía útil:** `main` es tu cuaderno; `origin/main` es una foto que tomaste del cuaderno de tu amigo (GitHub); `git fetch` es tomar una nueva foto. `git fetch origin` actualiza lo que Git sabe sobre el repositorio remoto, pero NO cambia tu trabajo.

<img src="https://static.platzi.com/media/user_upload/upload-edce9920-b079-4f4c-a25f-27848b6415be.png" alt="Flujo de sincronización">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/trabajo-con-repositorios-remotos-push-pull-y-fetch/)*

---

## Plantillas de issues en GitHub

Los issues en GitHub son la forma más directa de reportar errores, sugerir mejoras o documentar fallos en un repositorio.

**¿Qué es un issue?** Es un reporte público dentro de un repositorio que documenta un error, una mejora o una pregunta. Sirve para que cualquier persona avise al autor sobre algo que no funciona como se espera.

### Crear un issue desde cero

1. Dentro de tu repositorio, entra a la pestaña **Issues**.
2. Selecciona el botón de **New issue**.
3. Escribe un título claro y una descripción detallada.
4. En la columna derecha puedes asignar responsables y agregar etiquetas.
5. Envía el issue.

### Crear una plantilla de bug report

Para facilitar la vida a quienes reportan errores, GitHub permite crear plantillas. La estructura de carpetas debe ser exacta:

```
.github/
  ISSUE_TEMPLATE/
    bug_report.md
```

**Template de bug_report.md:**

```markdown
---
name: "🐛 Bug Report"
about: "Reportar un error para ayudarnos a mejorar el proyecto."
title: "[BUG] - Descripción corta del error"
labels: bug
assignees: ""
---

## 🐛 Bug Report

### Descripción
Describe claramente el error que has encontrado. Incluye detalles sobre cómo se presenta el problema.

### Pasos para reproducir
1. Ir a '...'
2. Hacer clic en '...'
3. Describir cualquier otra acción hasta que ocurra el problema.
4. Error que aparece: '...'

### Comportamiento esperado
Describe lo que esperabas que ocurriera al realizar los pasos anteriores.

### Capturas de pantalla o registros
Si es posible, añade capturas de pantalla o registros de errores.

### Entorno
- Sistema operativo: [p. ej., Windows 10, macOS Catalina]
- Navegador y versión: [p. ej., Chrome 87, Safari 14]
- Versión del proyecto: [p. ej., 1.0.0]

### Información adicional
Cualquier otra información relevante.
```

**Pasos para subir la plantilla:**

1. Crear la estructura de carpetas en tu repositorio local.
2. Copiar el contenido de la plantilla en `bug_report.md`.
3. Ejecutar:

```bash
git add .
git commit -m "bug report agregado"
git push origin main
```

**¿Qué otras plantillas puedo crear?**

- **Document report:** Para errores en documentación.
- **Feature request:** Para sugerir nuevas funcionalidades.
- **Mejores prácticas:** Para sugerencias de optimización.

<img src="https://static.platzi.com/media/user_upload/image-28857108-2b4f-4dfd-8dfa-5343c1559c84.jpg" alt="Plantillas de issues">

*Imagen tomada de: [Platzi - Git y GitHub](https://platzi.com/cursos/gitgithub/plantillas-de-issues-en-github-paso-a-pa/)*

---

## Uso de Pull Requests para colaboración efectiva

Colaborar en GitHub requiere evitar modificar directamente la rama principal, lo que podría causar conflictos con el trabajo de otros compañeros. En su lugar, trabajar en ramas individuales y fusionarlas mediante **Pull Requests (PR)** es clave para un flujo de trabajo colaborativo y seguro.

**¿Por qué evitar cambios directos en `main`?**

- Puede sobrescribir el trabajo no sincronizado de otros colaboradores.
- Dificulta el seguimiento de cambios.
- Aumenta la posibilidad de conflictos.

**Flujo de trabajo con Pull Requests:**

1. **Crear una rama nueva:**
   ```bash
   git checkout -b developer01
   ```

2. **Hacer cambios y commit:**
   ```bash
   git add .
   git commit -m "descripción del cambio"
   ```

3. **Subir la rama a GitHub:**
   ```bash
   git push -u origin developer01
   ```

4. **Crear Pull Request:** Desde GitHub, abre un nuevo Pull Request comparando tu rama con `main`.

5. **Code Review:** El equipo revisa y comenta los cambios.

6. **Fusionar:** Cuando los cambios son aprobados, se fusionan con `main`.

7. **Eliminar la rama:** Tanto en remoto como en local.

**Combinar `git add` y `git commit`:**

```bash
git commit -am "mensaje commit"
```

**Eliminar una rama local después de fusionar:**

```bash
git branch -d nombre-de-la-rama
```

**Recursos adicionales:**

* [Pull Requests en GitHub](https://docs.github.com/es/pull-requests)
* [Referencia de Pull Requests](https://docs.github.com/es/pull-requests/reference/pull-requests)

---

## Recursos adicionales

* [Guía de inicio en GitHub](https://docs.github.com/es/get-started/start-your-journey)
* [Sintaxis básica de Markdown en GitHub](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
* [Documentación oficial de Git](https://git-scm.com/docs)
* [Git Cheat Sheet - GitHub Education](https://education.github.com/git-cheat-sheet-education.pdf)
* [GitHub Education Pack](https://education.github.com/pack)
* [GitHub Pricing](https://github.com/pricing)
* [GitHub Docs - SSH](https://docs.github.com/es/authentication/connecting-to-github-with-ssh)

---

> Gracias por leer.

> Interesante la introducción a GitHub ¿No?