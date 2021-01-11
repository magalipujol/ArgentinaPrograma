
// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

function add(number1, number2){
    return number1 + number2
}
 function subtract(number1, number2){
     return number1 - number2
    
 }

let operator = "-"

let a = 1
let b = 2

if (operator === "+") {
   console.log (add (a, b))
}
if (operator === "-") {
    console.log (subtract(a, b))
}
else {
   console.log (operator + " is not a valid operator.")
}

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

/*function sumar(number1, number2) {
    return number1 + number2;
}

function restar(number1, number2) {
    return number1 - number2;
}

const operador = prompt('Ingrese + o -');
const number1 = 1;
const number2 = 2;

let resultado;
if (operador === '+') {
    resultado = sumar(number1, number2);
} else {
    resultado = restar(number1, number2);
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
console.log(
    `El resultado de ${number1} ${operador} ${number2} es ${resultado}`
); */
