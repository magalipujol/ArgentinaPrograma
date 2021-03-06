//Link original y créditos a https://gith>b.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).



/*
Desafío de programación #18: Imprimir los primeros 100 números primos
guga: Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]
Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]
guga: Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"
Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]
Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]
Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]
==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
guga: Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
guga: Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
guga: Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
guga: Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */

//Desafío de programación #1: Imprimí los números del 1 al 10
//Resultado: 10 9 8 7 6 5 4 3 2 1 <>

/*for (let number = 1 ; number <= 10 ;number++){
  console.log(number)
}

//Desafìo de programación  #2: Imprimí los números impares del 1 al 100
//1 3 5 ... 99

let number = 1
if (number%2 === 0){
  number++
}
for (; number <= 100; number +=2){ 
  console.log(number)
}
//Desafío de programación #3: Imprimí la tabla de multiplicación del 7

for (i = 0; i <= 10; i++){
  let multiplicationResult = i * 7
  console.log (i + "x7 = " + multiplicationResult)
}
//Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

for (let j = 1; j <= 10; j++){
  for (let i = 1; i <= 10; i++) {
    console.log(i * j)
  }
}
//Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
array = [1,2,3,4,5,6,7,8,9,10];
console.log(array.reduce((a, b) => a + b));
console.log((array.length * (array.length + 1)) / 2)
//Desafío de programación #6: Calcula 10! (10 factorial)
function factorial(number) {
  let answer = 1;
  for (let i = number; i >= 1; i--) {
    answer = answer * i
  }
  return answer
}

function sum(number) {
  let answer = 0;
  for (let i = number; i >= 1; i--) {
    answer = answer + i
  }
  return answer
}

function reduce1toN(number, operator, neutral) {
  let answer = neutral;
  for (let i = number; i >= 1; i--) {
    answer = operator(answer, i)
  }
  return answer
}

function sum(number) {
  return reduce1toN(number, (a, b) => a + b, 0)
}

function factorial(number) {
  return reduce1toN(number, (a, b) => a * b, 1)
}

//Desafío de programación #7: Calcula la suma de todos los números impares 
//mayores que 10 y menores que 30

function addTwo(init, end) {
  for (i = init; i <= end; i += 2) {
    console.log(i)
  }
}

function oddNumbersFromTo(init, end) {
  if (init % 2 === 0) {
    init = init + 1
  }
  addTwo(init, end)
}

oddNumbersFromTo(10, 30);
//Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
function CelsiusToFahrenheit (Celsius){
  return Celsius * 1.8 + 32
}

//Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
function FahrenheitToCelsius (Fahrenheit){
  return (Fahrenheit - 32) / 1.8
}

//Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo 
//solo los números positivos
array = [10, 12, 5, 4, 9]
function returnEvenNumber(array) {
  let evenNumberArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumberArray.push(array[i]);
    }
  }
  return evenNumberArray
}

console.log(returnEvenNumber(array))
//Desafío de programación #13: Find the maximum number in an array of numbers
array = [2, 5, 64, 3, 50];
function findMaxNumber (array) {
  let maxNumber = array[0];
  for (i = 1; i < array.length; i++) {
    if (maxNumber < array[i]) {
      maxNumber = array[i];
    }
  }
  return maxNumber
}

console.log(findMaxNumber(array))
//Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci 
//sin recursión
function FibonacciSuccession(end) {
  FibonacciArray = [0, 1];
  for (i = 1; i < end - 1; i++) {
    FibonacciArray.push(FibonacciArray[i] + FibonacciArray[i - 1])
  }
  return FibonacciArray
}

console.log(FibonacciSuccession(10))

function SuccessionFibonacci(end) {
  let a = 0
  let b = 1
  console.log(a)
  console.log(b)
  for (i = 2; i < end; i++) {
    let c = a + b
    a = b
    b = c
    console.log(c)
  }
}

SuccessionFibonacci(10)
//Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
function nthFibonacci (number) {
  if (number === 0) {
    return 0
  }
  else if ( number === 1) {
    return 1
  }
  else {
    return nthFibonacci (number - 1) + nthFibonacci (number - 2)
  }
}

document.write(titleCase("I'm a little tea pot"));
//Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) 
//dependiendo si es primo o no.
function isPrime (number){
  for (i = 2; i < number; i++){
    if (number % i === 0){
      return false
    }
  }
  return true
}


//Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
//guga: Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
//Ejemplo:
//Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

export function nPrimeNumbers (init, length){
  let primeNumbers = [];
  for (let i = init + 1; primeNumbers.length < length; i++){
    if (isPrime(i)) {
      primeNumbers.push(i) 
    } 
  }
  return primeNumbers
}

//Desafío de programación #22: Invertir un array
function invertArray(array) {
  let invertedArray = [];
  for (let i = 1; i <= array.length; i++) {
    invertedArray.push(array[array.length - i]) 
  }
  return invertedArray
}
*/

//Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
function capitalizeFirstLetter(text) {
  let separatedText = text.toLowerCase().split(" ");
  for (let wordIndex = 0; wordIndex < separatedText.length; wordIndex++) {
    separatedText[wordIndex] = separatedText[wordIndex].charAt(0).toUpperCase() + separatedText[wordIndex].substr(1)
  }
  return separatedText.join(" ")
}




//Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
//guga: Desafío de programación #41. Create a function to calculate the distance 
//between two points defined by their x, y coordinates
//Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)