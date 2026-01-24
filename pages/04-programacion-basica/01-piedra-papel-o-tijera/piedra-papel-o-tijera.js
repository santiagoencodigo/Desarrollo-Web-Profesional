// Algoritmo de Piedra, Papel o Tijera

// Declaración de Variables jugador y PC
let jugador = 0

let pc = 2

// Prompt

jugador = prompt("Elige: 1 para Piedra, 2 para Papel, 3 para Tijera")

// Alert por elección del jugador
alert("Elegiste: " + jugador)

// Condicional if
if (jugador == 1) {
    alert("Elegiste Piedra.")
}

// Condicionales else if

else if (jugador == 2) {
    alert("Elegiste Papel.")
}
else if (jugador == 3) {
    alert("Elegiste Tijera.")
}

// condición else

else {
    alert("Elección inválida.")
}