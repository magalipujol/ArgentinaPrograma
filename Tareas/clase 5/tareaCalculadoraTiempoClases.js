//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

/* ----------
    variables
   ---------- */
let totalHours = 0;
let totalMinutes = 0;
let totalSeconds = 0;

const $btnSubmit = document.querySelector('#submit')
const $totalTime = document.querySelector('#total-time')

// getting all hours, minutes and seconds in different NodeLists
var $hoursNodeList = document.querySelectorAll('.class .hours')
var $minutesNodeList = document.querySelectorAll('.class .minutes')
var $secondsNodeList = document.querySelectorAll('.class .seconds')

// add hours, minutes and seconds with totalHours, totalMinutes and totalSeconds
for (let index = 0; index < $hoursNodeList.length; index++) {
    totalHours += Number($hoursNodeList.item(index).value)
}
for (let index = 0; index < $minutesNodeList.length; index++) {
    totalMinutes += Number($minutesNodeList.item(index).value)
}
for (let index = 0; index < $secondsNodeList.length; index++) {
    totalSeconds += Number($secondsNodeList.item(index).value)
}


// calculate actual time
totalMinutes += secondsToMinutes(totalSeconds)
totalSeconds = secondsRemainder(totalSeconds)
totalHours += minutesToHours(totalMinutes)
totalMinutes = minutesRemainder(totalMinutes)


$btnSubmit.onclick = function() {
    $totalTime.innerHTML = `${totalHours} : ${totalMinutes} : ${totalSeconds}  `
}

// functions that transform seconds and minutes to a whole number of minutes and hours
function secondsToMinutes(seconds) {
    return Math.floor(seconds / 60)
}
function minutesToHours(minutes) {
    return Math.floor(minutes / 60)
}

// functions that calculate the seconds and minutes that cannot be converted to 
// a whole number of minutes and hours
// ? se dice Remainder
function secondsRemainder(seconds) {
    return seconds % 60 
}

function minutesRemainder(minutes) {
    return minutes % 60
}
