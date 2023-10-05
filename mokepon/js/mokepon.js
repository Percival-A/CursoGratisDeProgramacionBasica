// varaibles
let mascotaSeleccionada = ``

//funciones
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    if (document.getElementById('Hipodoge').checked) {
        mascotaSeleccionada = `Hipodoge`
    } else if (document.getElementById('Capipepo').checked) {
        mascotaSeleccionada = `Capipepo`
    } else if (document.getElementById('Ratigueya').checked) {
        mascotaSeleccionada = `Ratigueya`
    }
    alert(`seleccionaste a ${mascotaSeleccionada}`)
}

//evento para escuchar cuando se carge la pagina, desplegar un mnsaje en consola y llamar a la funcion iniciarJuego
window.addEventListener('load', () => {
    console.log('La pagina se cargo correctamente')
    iniciarJuego()
})