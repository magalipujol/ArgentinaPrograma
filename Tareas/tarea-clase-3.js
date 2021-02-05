// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

let userName = (prompt("Enter your name. Please do not use accents.") || "").toLowerCase();

if (userName === "magali"){
    console.log (`Hello, my name is also ${userName}`)
}
else if (userName === "isabel") {
    console.log (`Hi ${userName}, your name is the same as my mom's`)
}
else if (userName === "agustin") {
    console.log (`Hi ${userName}, your name is the same as my boyfriend.`)
}
else if (userName.trim().length === 0){
    console.log ("You didn't enter a name")
}
else {
    console.log (`Hi ${userName}`)
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

let userAge = Number(prompt("Enter your age."))
const MY_AGE = 20; 

if (userAge === MY_AGE) {
    console.log (`I'm also ${MY_AGE} years old.`);
}
else if (userAge < MY_AGE) {
    console.log ('You\'re younger than me.')
}
else if (userAge > MY_AGE) {
    console.log ("You're older than me.")
}
else if (userAge  === null) {
    console.log ("You have to enter an answer.")
}
else if (userAge === "") {
    console.log ("You have to enter an answer.")
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let userHasID = (prompt ("Do you have ID?") || "").toLowerCase();
const yesAnswer = ["yes", "si"]
const noAnswer = "no"
const ageRequirementToEnter = 18; 

//CONSULTA tiene sentido un nombre tan largo?
//CONSULTA estas constantes sirven para lo que esté más arriba de donde están definidas?

if (userHasID === noAnswer) {
    console.log (`${userName}, you cannot enter the bar because you don't have ID.`)
}
else if (yesAnswer.includes(userHasID)) {
    if (userAge >= ageRequirementToEnter){
        console.log (`${userName}, you can enter the bar.`)
    }
    else if (userAge < ageRequirementToEnter) {
        console.log (`${userName}, you cannot enter the bar because you have to be over 18 years old.`)
    }
}
else if (userHasID  === null) {
    console.log ("You have to enter an answer.")
}
else if (userHasID === "") {
    console.log ("You have to enter an answer.")
}