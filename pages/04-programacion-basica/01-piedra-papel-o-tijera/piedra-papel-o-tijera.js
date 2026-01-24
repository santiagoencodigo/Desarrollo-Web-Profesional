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
    alert("Elegiste Piedra. 🥌")
}

// Condicionales else if

else if (jugador == 2) {
    alert("Elegiste Papel. 📄")
}
else if (jugador == 3) {
    alert("Elegiste Tijera. ✂️")
}

// condición else

else {
    alert("Elección inválida.")
}

// Condicionales del PC

if (pc == 1) {
    alert("PC elige Piedra. 🥌")
}
else if (pc == 2) {
    alert("PC elige Papel. 📄")
}
else {
    alert("PC elige Tijera. ✂️")
}


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