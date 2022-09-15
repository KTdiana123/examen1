import{peliculas} from"../helper/baseDato.js"
import{pintarPeliculas} from"../helper/pintarPeliculas.js"

// RECORRIENDO UN ARREGLO EN JS
let fila = document.getElementById("fila");

// llamo a la funcion pintar peliculas 
pintarPeliculas(peliculas)

// seleccionando pelicula 

let peliculaSeleccionada={}
fila.addEventListener("click",function(evento){

  peliculaSeleccionada.imagenes=(evento.target.parentElement.querySelector("img").src)
  peliculaSeleccionada.nombre=(evento.target.parentElement.querySelector("h1").textContent) // nombre
  peliculaSeleccionada.genero=(evento.target.parentElement.querySelector("h2").textContent) // genro 
  peliculaSeleccionada.idioma=(evento.target.parentElement.querySelector("h3").textContent) // idioma
  peliculaSeleccionada.sipnosis=(evento.target.parentElement.querySelector("p").textContent) //Sipnosis
  peliculaSeleccionada.director=(evento.target.parentElement.querySelector("h4").textContent) // Director
  peliculaSeleccionada.actores=(evento.target.parentElement.querySelector("h5").textContent)  // Actores 

console.log(peliculaSeleccionada)

// Llamando a la memoria del navegador

localStorage.setItem("PeliculaSeleccionada",JSON.stringify(peliculaSeleccionada))

//redemir
window.location.href="./src/views/ampliarvistapelicula.html"
})