// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

let userName = prompt("Enter your name").toLowerCase();

if (userName === "magali"){
    console.log ("Hello, my name is also Magali!")
}
else if (userName === "isabel") {
    console.log ("Hi Isabel, your name is the same as my mom's")
}
else {
    console.log (`Hi ${userName}`)
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

let userAge = Number(prompt("Enter your age."))

if (userAge === 20) {
    console.log ("I'm also 20 years old.")
}
else if (userAge < 20) {
    console.log ("You're younger than me.")
}
else if (userAge > 20) {
    console.log ("You're older than me.")
}
else {
    console.log (`${userAge} is not a valid value.`)
}



//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let userID = prompt ("Do you have ID?").toLowerCase();

let userAge;
if (userID === "no") {
    console.log ("You cannot enter the bar.")
}
else if (userID === "yes") {
    let userAge = Number(prompt ("Enter your age."))
    if (userAge >= 18){
        console.log ("You can enter the bar.")
    }
    else if (userAge < 18) {
        console.log ("You cannot enter the bar.")
    }
    else {
    console.log (`${userID} is not a valid answer.`)
    }
}

