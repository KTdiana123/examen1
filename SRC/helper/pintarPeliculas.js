export function pintarPeliculas(peliculas){
    let fila = document.getElementById("fila");
    peliculas.forEach(function (pelicula) {
     
        //TRAVERSING (CREAR ETIQUETAS HTML DESDE JS)
        // 1- creamos una colunmna por cada pelicula
        let colunmna = document.createElement("div");
        colunmna.classList.add("col");
      
        // 2 - creamos una tarjeta por cada pelicula
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100");
      
        // 3 - creamos una foto para cada peliculad
        let poster = document.createElement("img");
        poster.classList.add("card-imag-top");
        poster.src = pelicula.imagenes;
        //creamos el nombre de la pelicula
        let nombre = document.createElement("h1");
        nombre.classList.add("card-title", "text-start");
        nombre.textContent = pelicula.nombre;
        // creamos el genero de cada pelicula
        let genero = document.createElement("h2");
        genero.classList.add("text-start");
        genero.textContent = "Genero: " + pelicula.genero;
      
        //creamos el idioma de cada pelicula
      
        let idioma = document.createElement("h3");
        idioma.classList.add("fw-bold");
        idioma.textContent = "Idiomas: " + pelicula.idioma;
      
        // creamos la sipnosis de cada pelicula ---  con d-none se ocualta texto largo
        let sipnosis = document.createElement("p");
        sipnosis.classList.add("fw-bod");
        sipnosis.textContent = "Sipnosis: "+pelicula.sinopsis;
      
        // Directores
        let director= document.createElement("p");
        director.classList.add("director");
        director.textContent = "Director: " + pelicula.director;
      
        //actores 
        let actores = document.createElement("p");
        actores.classList.add("actores");
        actores.textContent= "Actores: " + pelicula.actores;
      
        //padres y hijos
        tarjeta.appendChild(poster);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(idioma);
        tarjeta.appendChild(sipnosis);
        tarjeta.appendChild(director);
        tarjeta.appendChild(actores)
        colunmna.appendChild(tarjeta);
        fila.appendChild(colunmna);
        
      
      })
}