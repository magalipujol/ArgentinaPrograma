// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!



const $userName = document.querySelector('#user-name').value
const $userLastName = document.querySelector('#user-last-name').value
const $userAge = Number(document.querySelector('#user-age')).value

const $btnSubmit = document.querySelector('#submit')

$btnSubmit.onclick = function() {
    document.querySelector('#welcome-message').innerHTML = `Welcome ${$userName}!`
}
