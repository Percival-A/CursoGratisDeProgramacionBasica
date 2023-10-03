// 0. funciones y variables
//variables
let nombre = ''
let opcion_elejida = 0
let opcion_aleatoria = 0
let vecesGanaste = 0
let vecesPerdiste = 0
let partidas = 2

//funciones
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min 
}// genera un numero aleatorio entre min y max. Genera un numero random, que se multiplica por el rango de numeros que queremos, y se le suma el minimo. Math.floor redondea el numero hacia abajo.
function mostrar(opcion, jugador) {
    if (opcion == 1) {
        alert(`${jugador} piedra 🪨`)
    } else if (opcion == 2) {
        alert(`${jugador} papel 📄`)
    } else if (opcion == 3) {
        alert(`${jugador} tijera ✂`)
    } else {
        alert(`${jugador} opcion no valida ❌`)
    }
}//muestra la opcion elegida por el jugador y la opcion aleatoria
function ganaste() {
    alert(`${nombre} ganaste 🥳`)
    vecesGanaste = vecesGanaste + 1
}//muestra el mensaje de ganaste y suma 1 a la variable ganaste
function perdiste() {
    alert(`${nombre} perdiste 😢`)
    vecesPerdiste = vecesPerdiste + 1
}//muestra el mensaje de perdiste y suma 1 a la variable perdiste
function empate() {
    alert(`${nombre} empate 🤝`)
}//muestra el mensaje de empatamos
function resultado(){
    if (opcion_elejida == opcion_aleatoria) {
    empate()
    } else if (opcion_elejida == 1 && opcion_aleatoria == 3) {
    ganaste()
    } else if (opcion_elejida == 2 && opcion_aleatoria == 1) {
    ganaste()
    } else if (opcion_elejida == 3 && opcion_aleatoria == 2) {
    ganaste()
    } else {
    perdiste()
    }
}//muestra el resultado del juego

// 1. Preguntar el nombre
nombre = prompt('¿Cual es tu nombre?')
alert(`Hola ${nombre} Bienvenido al juego de piedra 🪨 papel 📄 o tijera ✂`)

// 1.5 Repetir el juego hasta que alguien gane <partidas> veces
alert(`Gana ${partidas} veces para ganar el juego`)
while (vecesGanaste < partidas && vecesPerdiste < partidas){
    // 2. Preguntar opcion
    opcion_elejida = prompt(`${nombre} ¿Que opcion eliges?\n 1. Piedra 🪨\n 2. Papel 📄\n 3. Tijera ✂\n Ingresa el numero de la opcion que eliges:`)

    // 3. Mostrar opcion elegida
    mostrar(opcion_elejida, nombre)

    // 4. Generar opcion aleatoria
    opcion_aleatoria = aleatorio(1, 3)

    // 5. Mostrar opcion aleatoria
    mostrar(opcion_aleatoria, 'Computadora')

    // 6. Mostrar resultado
    resultado()
}//repite el juego hasta que alguien gane <partidas> veces

// 7. Mostrar el ganador o perdedor
if (vecesGanaste == partidas) {
    alert(`${nombre} ganaste el juego 🥳 ${vecesGanaste} a ${vecesPerdiste}`)
} else {
    alert(`${nombre} perdiste el juego 😢 ${vecesPerdiste} a ${vecesGanaste}`)
}
