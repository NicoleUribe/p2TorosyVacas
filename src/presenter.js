
import Juego from "./TorosYVacas/Juego.js";

const play = new Juego();

const form = document.querySelector("#torosyvacas-form");

const div = document.querySelector("#resultado-div");

const cl1 = document.querySelector("#clave1");
const cl2 = document.querySelector("#clave2");
const long = document.querySelector("#longitud");



form.addEventListener("submit", (event) => {
  event.preventDefault();
      div.innerHTML=div.innerHTML+"<p>"+play.jugar(cl1.value,cl2.value,long.value)+"</p>";
     if(play.jugar(cl1.value,cl2.value,long.value)== "GANASTE!!!")
     window.alert("¡ ¡ ¡ G  A  N  A  S  T  E ! ! ! ");

});
 
