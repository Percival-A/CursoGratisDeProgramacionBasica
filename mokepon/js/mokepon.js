//funciones
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    if (inputHipodoge.checked) {
        alert(`Seleccionaste a Hipodoge`)
    } else if (inputCapipepo.checked) {
        alert(`Seleccionaste a Capipepo`)    
    } else if (inputRatigueya.checked) {
        alert(`Seleccionaste a Ratigueya`)
    } else {
        alert(`No seleccioaste una mascota`)
    }
}

//evento para escuchar cuando se carge la pagina, desplegar un mnsaje en consola y llamar a la funcion iniciarJuego
window.addEventListener('load', () => {
    console.log('La pagina se cargo correctamente')
    iniciarJuego()
})