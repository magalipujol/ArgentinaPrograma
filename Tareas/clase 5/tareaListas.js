//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


const $numbersNodeList = document.querySelectorAll(".list li")

const numbersArray = []

for (let index = 0; index < $numbersNodeList.length; index++) {
    numbersArray.push(Number($numbersNodeList.item(index).innerHTML))
}

function findBiggestNumber(array) {
    return Math.max(...array)
}

function findSmallestNumber(array) {
    return Math.min(...array)
}

function findAverage(array) {
    const sum = array.reduce((a, b) => a + b, 0)
    return sum / array.length
}


// TODO create mode function


document.querySelector('#average').innerHTML += findAverage(numbersArray)
document.querySelector('#smallest').innerHTML += findSmallestNumber(numbersArray)
document.querySelector('#biggest').innerHTML += findBiggestNumber(numbersArray)


