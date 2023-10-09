//funciones
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    seleccionMascota = false
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min 
}// genera un numero aleatorio entre min y max. Genera un numero random, que se multiplica por el rango de numeros que queremos, y se le suma el minimo. Math.floor redondea el numero hacia abajo.

function seleccionarMascotaContrincante() {
    let ataqueAleatorio = aleatorio(1, 3)
    let spanMascotaContrincante = document.getElementById('mascota-contrincante')
    if (ataqueAleatorio == 1) {
        spanMascotaContrincante.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2) {
        spanMascotaContrincante.innerHTML = 'Capipepo'
    } else if (ataqueAleatorio == 3) {
        spanMascotaContrincante.innerHTML = 'Ratigueya'
    }
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
        seleccionMascota = true
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
        seleccionMascota = true
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
        seleccionMascota = true
    } else {
        alert(`🛑 No seleccioaste una mascota 🛑`)
    }
    if (seleccionMascota) {
        seleccionarMascotaContrincante()
    }
}



//evento para escuchar cuando se carge la pagina, desplegar un mnsaje en consola y llamar a la funcion iniciarJuego
window.addEventListener('load', () => {
    console.log('La pagina se cargo correctamente')
    iniciarJuego()
})