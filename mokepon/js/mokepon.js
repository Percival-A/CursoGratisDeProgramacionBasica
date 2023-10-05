function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    alert('Seleccionaste tu mascota')
}

//evento para escuchar cuando se carge la pagina, desplegar un mnsaje en consola y llamar a la funcion iniciarJuego
window.addEventListener('load', () => {
    console.log('La pagina se cargo correctamente')
    iniciarJuego()
})