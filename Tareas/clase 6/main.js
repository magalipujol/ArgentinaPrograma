const $cantidadIntegrantes = document.querySelector("#cantidadIntegrantes");
const $siguienteBtn = document.querySelector("#siguienteBtn");
const $firstForm = document.querySelector("#firstQuestion");
const $alertEmptyForm = document.querySelector('#formVacio')

let cantidadIntegrantes;

$siguienteBtn.onclick = function () {
    if($cantidadIntegrantes.value == false){
        $alertEmptyForm.innerHTML = 'Debe ingresar una cantidad'
        return
    }
  cantidadIntegrantes = $cantidadIntegrantes.value;
  console.log(cantidadIntegrantes);
  $firstForm.classList.add("hidden");
  crearSegundoForm();
};

const formLabel = document.createElement("label");
formLabel.setAttribute("for", "edad");
formLabel.innerHTML = "Edad"
const formInput = document.createElement("input")
formInput.setAttribute("type", "number")
formInput.classList.add("edadInput")



function crearSegundoForm() {
    for (let i = 0; i < cantidadIntegrantes; i++) {
      document.querySelector("body").appendChild(formLabel);
      document.querySelector("body").appendChild(formInput);
  }
}
