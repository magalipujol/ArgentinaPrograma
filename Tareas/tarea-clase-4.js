/*let comidasFavoritas = ["fideos", "wraps", "gugu"]

console.log ("Tengo muchas comidas preferidas, pero la que más me gusta es "+ comidasFavoritas[-1])

comidasFavoritas[2] 
*/
// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for (let number = 3 ; number <= 22 ;number = number + 3){
    console.log(number)
}


// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
// diez a uno.

let number = 10

while (number > 0){
    console.log(number)
    number = number - 1
} 



// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

for (let number = 1; number <= 50; number++){
    let numberDivisible3 = number% 3 === 0;
    let numberDivisible5 = number% 5 === 0;
    if (numberDivisible3 && numberDivisible5) {
        console.log("FizzBuzz")
    }
    else if (numberDivisible3) {
        console.log("Fizz")
    }
    else if (numberDivisible5) {
        console.log("Buzz")
    }
    else {
        console.log(number)
    }
}

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

let grades = [6, 2, 9, 9, 10, 8, 7, 3];


function calculateAverage(grades) {
    let gradesSum = grades.reduce((a, b) => a + b);
    let gradesAverage = gradesSum / grades.length
    return gradesAverage
}

console.log(calculateAverage(grades));