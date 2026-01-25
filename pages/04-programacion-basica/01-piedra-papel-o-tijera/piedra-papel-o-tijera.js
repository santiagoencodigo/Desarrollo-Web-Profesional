// Algoritmo de Piedra, Papel o Tijera


// Funciones
    function aleatorio(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function eleccion(jugada) {
        let resultado = ""
        if (jugada == 1) {
            resultado = "Piedra. 🥌"
        } else if (jugada == 2) {
            resultado = "Papel. 📄"
        } else if (jugada == 3) {
            resultado = "Tijera. ✂️"
        } else {
            resultado = "Elección inválida."      
        }
        return resultado
    }

// Declaración de Variables jugador y PC
    let jugador = 0

    // Declaración de Minimo - Maximo
        // let min = 1
        // let max = 3

    // Número Aleatorio para PC
    let pc = aleatorio(1, 3)



// Prompt
jugador = prompt("Elige: 1 para Piedra, 2 para Papel, 3 para Tijera")



// Alertas de Elecciones 
    // Alert por elección del jugador
    // alert("Elegiste: " + jugador)
    alert("Elegiste: " + eleccion(jugador))
    alert("La PC eligió: " + eleccion(pc))


// Combate
    if (jugador == pc) {
        alert("Empate!")
    }
    else if (jugador == 1 && pc == 3) {
        alert("Ganaste")
    }
    else if (jugador == 2 && pc == 1) {
        alert("Ganaste")
    }
    else if (jugador == 3 && pc == 2) {
        alert("Ganaste")
    }
    else {
        alert("Perdiste")
    }