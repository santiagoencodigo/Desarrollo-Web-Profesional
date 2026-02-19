/* Variables Globales y Selección de Elementos del DOM */
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('section-reiniciar')
const botonSeleccionar = document.getElementById('boton-seleccionar')
const botonReiniciar = document.getElementById('reiniciar')
const botonReiniciarModal = document.getElementById('boton-reiniciar-modal') // Nuevo

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const SpanMascotaJugador = document.getElementById('mascota-jugador')
const SpanMascotaEnemigo = document.getElementById('mascota-enemigo')

const fotoJugador = document.getElementById('foto-jugador')
const fotoEnemigo = document.getElementById('foto-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const barraVidaJugador = document.getElementById('barra-vida-jugador')
const barraVidaEnemigo = document.getElementById('barra-vida-enemigo')

const sectionMensajes = document.getElementById("resultado")
const sectionResultados = document.getElementById("mensajes")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")        
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const ContenedorTarjetas = document.getElementById("contenedorTarjetas")

let mokepones = [] 
let ataqueJugador  
let ataqueEnemigo  
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let vidasJugador = 3
let vidasEnemigo = 3

/* Clase Principal */
class Mokepon { 
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

/* Instancias de Objetos */
let hipodoge = new Mokepon('Hipodoge', './assets/hipodoge.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/capipepo.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/ratigueya.png', 5)

hipodoge.ataques.push(
    {nombre: '🌊', id: 'boton-agua'},
    {nombre: '🌊', id: 'boton-agua'},
    {nombre: '🌊', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌊', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'}, 
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌊', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya) 

/* Funciones de Juego */
function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        ContenedorTarjetas.innerHTML += opcionDeMokepones
    })

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueya = document.getElementById("Ratigueya")

    botonSeleccionar.addEventListener("click", seleccionarMascota)
    document.getElementById('boton-fuego').addEventListener('click', ataqueFuego)
    document.getElementById('boton-agua').addEventListener('click', ataqueAgua)
    document.getElementById('boton-tierra').addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
    // También escuchamos el botón dentro del modal
    botonReiniciarModal.addEventListener('click', reiniciarJuego)
}

function seleccionarMascota() {
    if (inputHipodoge.checked) {
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        mascotaJugador = inputRatigueya.id
    } else {
        alert("¡Hey Steban! Debes seleccionar una mascota primero ✋")
        return 
    }

    let objetoMascotaJugador = mokepones.find(mokepon => mokepon.nombre === mascotaJugador)
    fotoJugador.src = objetoMascotaJugador.foto

    SpanMascotaJugador.innerHTML = mascotaJugador
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)
    let enemigo = mokepones[mascotaAleatoria]

    SpanMascotaEnemigo.innerHTML = enemigo.nombre
    fotoEnemigo.src = enemigo.foto
}

function ataqueFuego() { ataqueJugador = 'Fuego 🔥'; ataqueAleatorioEnemigo() }
function ataqueAgua() { ataqueJugador = 'Agua 🌊'; ataqueAleatorioEnemigo() }
function ataqueTierra() { ataqueJugador = 'Tierra 🌱'; ataqueAleatorioEnemigo() }

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1) { ataqueEnemigo = 'Fuego 🔥' } 
    else if(ataqueAleatorio == 2) { ataqueEnemigo = 'Agua 🌊' } 
    else { ataqueEnemigo = 'Tierra 🌱' }
    combate()
}

function combate() {
    // Usamos las constantes que ya declaraste arriba: fotoJugador y fotoEnemigo

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empate 🙌")
    } else if((ataqueJugador == 'Fuego 🔥' && ataqueEnemigo == 'Tierra 🌱') || 
              (ataqueJugador == 'Agua 🌊' && ataqueEnemigo == 'Fuego 🔥') || 
              (ataqueJugador == 'Tierra 🌱' && ataqueEnemigo == 'Agua 🌊')) {
        crearMensaje("Ganaste 👍")
        vidasEnemigo--
        
        // EL ENEMIGO RECIBE DAÑO: Solo se sacude su foto
        fotoEnemigo.classList.add('animar-sacudida-foto')
        setTimeout(() => {
            fotoEnemigo.classList.remove('animar-sacudida-foto')
        }, 250)

    } else {
        crearMensaje("Perdiste ❌")
        vidasJugador--

        // EL JUGADOR RECIBE DAÑO: Solo se sacude su foto
        fotoJugador.classList.add('animar-sacudida-foto')
        setTimeout(() => {
            fotoJugador.classList.remove('animar-sacudida-foto')
        }, 250)
    }
    actualizarBarras()
    revisarVidas()
}

function actualizarBarras() {
    let porcentajeJugador = Math.max(0, (vidasJugador / 3) * 100)
    let porcentajeEnemigo = Math.max(0, (vidasEnemigo / 3) * 100)

    barraVidaJugador.style.width = porcentajeJugador + "%"
    barraVidaEnemigo.style.width = porcentajeEnemigo + "%"

    spanVidasJugador.innerHTML = porcentajeJugador.toFixed(0) + "%"
    spanVidasEnemigo.innerHTML = porcentajeEnemigo.toFixed(0) + "%"

    // Cambio de color si la vida es baja
    if (vidasJugador <= 1) barraVidaJugador.style.background = "linear-gradient(to bottom, #ff4d4d, #b30000)"
    if (vidasEnemigo <= 1) barraVidaEnemigo.style.background = "linear-gradient(to bottom, #ff4d4d, #b30000)"
}

function revisarVidas() {
    if (vidasEnemigo <= 0) {
        // Aplicamos el fade out a la foto del enemigo
        fotoEnemigo.classList.add('mokepon-derrotado')
        
        // Esperamos 1.5 segundos para mostrar el modal
        setTimeout(() => {
            crearMensajeFinal('¡GANASTE LA BATALLA! 🥳')
        }, 1500)

    } else if (vidasJugador <= 0) {
        // Aplicamos el fade out a nuestra foto
        fotoJugador.classList.add('mokepon-derrotado')
        
        // Esperamos 1.5 segundos para mostrar el modal
        setTimeout(() => {
            crearMensajeFinal('PERDISTE LA BATALLA... 😥')
        }, 1500)
    }
}

function crearMensaje(resultado) {   
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    // Ya no actualizamos sectionMensajes.innerHTML para evitar el "salto"
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

    // Scroll automático para ver siempre el último movimiento
    ataquesDelJugador.scrollTop = ataquesDelJugador.scrollHeight
    ataquesDelEnemigo.scrollTop = ataquesDelEnemigo.scrollHeight
}

function crearMensajeFinal(resultadoFinal) {
    const modal = document.getElementById('modal-resultado')
    const textoResultado = document.getElementById('resultado-final-texto')

    textoResultado.innerHTML = resultadoFinal
    modal.style.display = 'flex' 

    document.getElementById('boton-fuego').disabled = true
    document.getElementById('boton-agua').disabled = true
    document.getElementById('boton-tierra').disabled = true
}

function reiniciarJuego() { location.reload() }

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)