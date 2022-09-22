// preguntado por un dato que esta almacenado en la memoria

let datosPeliculaSeleccionada=JSON.parse(localStorage.getItem("PeliculaSeleccionada"))

console.log(datosPeliculaSeleccionada)

let imagenes=datosPeliculaSeleccionada.imagenes
let director =datosPeliculaSeleccionada. director
let genero =datosPeliculaSeleccionada.genero
let idioma =datosPeliculaSeleccionada.idioma
let actores = datosPeliculaSeleccionada.actores
let nombre =datosPeliculaSeleccionada.nombre
let sipnosis =datosPeliculaSeleccionada.sipnosis

//cargando fotos
let foto=document.getElementById("foto")

foto.src=imagenes

let titulo = document.getElementById("titulo")

titulo.textContent=nombre

let generopeli = document.getElementById("genero")
generopeli.textContent= genero

let idiomapeli = document.getElementById("idioma")
idiomapeli.textContent=idioma

let sipnosispeli = document.getElementById("sipnosis")
sipnosispeli.textContent=sipnosis

let actorespeli = document.getElementById("actores")
actorespeli.textContent = actores

let directorpeli = document.getElementById("director")
directorpeli.textContent=director
