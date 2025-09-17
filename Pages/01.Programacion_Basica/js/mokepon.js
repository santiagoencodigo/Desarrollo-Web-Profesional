const sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
const sectionReiniciar=document.getElementById('section-reiniciar')
const botonSeleccionar = document.getElementById("boton-seleccionar")
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('reiniciar')

const sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
const SpanMascotaJugador = document.getElementById('mascota-jugador')

const SpanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")        
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

const ContenedorTarjetas = document.getElementById("contenedorTarjetas")


let mokepones = [] /* Esto se llama arrays o arreglos */
let ataqueJugador  /* Las razones del por qué no se cambian estas let, es porque son variables. */
let ataqueEnemigo   /* las constantes nunca van a variar. */
let opcionDeMokepones

let inputHipodoge
let inputCapipepo
let inputRatigueya
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon { 
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/hipodoge.png', 5) /* Estos son objetos */
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

mokepones.push(hipodoge,capipepo,ratigueya) /* Esto se llama push, es una función que se utiliza para agregar elementos a un array.*/

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones =`
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto}
            alt=${mokepon.nombre}>
        </label>
        ` /* las comillas se hacen con alt gr y } */

    ContenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueya = document.getElementById("Ratigueya")
    }) /* De esta forma trabajarian las ecommerce, por medio de paginas dinamicas. */

    sectionReiniciar.style.display = 'none'

    botonSeleccionar.addEventListener("click", seleccionarMascota)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascota(){
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    //Esto es una forma de modificación del DOM

    if (inputHipodoge.checked) {
        SpanMascotaJugador.innerHTML = 'Hipodoge '
    } else if (inputCapipepo.checked) {
        SpanMascotaJugador.innerHTML = 'Capipepo '
    } else if (inputRatigueya.checked) {
        SpanMascotaJugador.innerHTML = 'Ratigueya '
    } else {
        alert("Debes seleccionar tu mascota")
    }

    SeleccionarMascotaEnemigo()
}

function SeleccionarMascotaEnemigo(){
    let MascotaAleatoria = aleatorio(1,3)

    if (MascotaAleatoria == 1){
        SpanMascotaEnemigo.innerHTML = 'Hipodoge '
    } else if (MascotaAleatoria == 2) {
        SpanMascotaEnemigo.innerHTML = 'Capipepo '
    } else {
        SpanMascotaEnemigo.innerHTML = 'Ratigueya '
    }
   
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }
    
    combate()
}

// Hay diferentes operadores "AND=&&" "OR=||" "NOT=!" y habrá que estudiar las bases de la ingenieria en software.
// don´t repeat your self, no repitas tu codigo. 
//¿Cómo podrías mejorar tu codigo?

function combate(){


    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empate🙌")
    } else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensaje("Ganaste👍")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje("Ganaste👍")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje("Ganaste👍")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("Perdiste❌")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0) {
        crearMensajeFinal('Ganaste🥳')
    }else if(vidasJugador == 0) {
        crearMensajeFinal('Perdiste😥')
    }
}

function crearMensaje(resultado){   
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    sectionReiniciar.style.display = 'flex'
} 

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)