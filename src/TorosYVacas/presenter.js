import Parametros from "./Parametros.js";
import TorosyVacas from "./TorosyVacas.js";
import Juego from "./Juego.js";
const p = new Parametros();
const cl1 = document.querySelector("#clave1");
const cl2 = document.querySelector("#clave2");
const form = document.querySelector("#torosyvacas-form");
const div = document.querySelector("#resultado-div");
const long = document.querySelector("#longitud");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var long = p.longitud(cl1,long);
  if(long){
    
  }
  else{
    div.innerHTML = `<p> el numero pasa la longitud </p>`;
  }
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  
});
