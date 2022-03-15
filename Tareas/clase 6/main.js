const $cantidadIntegrantes = document.querySelector("#cantidadIntegrantes");
const $siguienteBtn = document.querySelector("#siguienteBtn");
const $firstForm = document.querySelector("#firstQuestion");

let cantidadIntegrantes;

$siguienteBtn.onclick = function () {
  cantidadIntegrantes = $cantidadIntegrantes.value;
  console.log(cantidadIntegrantes);
  $firstForm.classList.add("hidden");
  crearSegundoForm();
};

const formLabel = document.createElement("label");
const formInput = document.createElement("input")
formLabel.setAttribute("for", "nombre");
formInput.innerHTML = "Nombre"
formInput.setAttribute("")


function crearSegundoForm() {
  for (let i = 0; i < cantidadIntegrantes; i++) {
      document.querySelector("body").appendChild(formLabel);
  }
}
