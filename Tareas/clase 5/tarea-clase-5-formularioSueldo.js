//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", 
// mostrar el salario mensual
// en una caja de texto deshabilitada. 
// --> <input type="text" disabled id="salario-mensual"/>

const $annualPay = Number(document.querySelector('#annual-pay')).value
const $monthlyPay = $annualPay / 12

const $btnSubmit = document.querySelector('#submit')



$btnSubmit.onclick = function(){
    document.querySelector('#monthly-pay') = $monthlyPay
    return false;
}

document.querySelector('#submit').onclick = function() {
    const annualPay = Number(document.querySelector('#annual-pay').value)
    const monthlyPay = annualPay / 12

    document.querySelector('#monthly-pay').value = monthlyPay
    return false
}


