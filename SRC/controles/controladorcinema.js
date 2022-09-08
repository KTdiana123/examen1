let peliculas = [
  {
    nombre: "BESTIA",
    genero: "Ciencia ficcion",
    duracion: 220,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/a1.jpg?alt=media&token=b2cf7252-7078-415b-87dc-fa44464e669a",
    sinopsis:
      "A veces el susurro en los arbustos es en realidad un monstruo. Idris Elba (Rápidos y Furiosos: Hobbs & Shaw, El Escuadrón Suicida) protagoniza un nuevo y emocionante thriller sobre un padre y sus dos hijas adolescentes que se ven perseguidos por un enorme león que intenta demostrar que la selva sólo tiene un máximo depredador. Elba interpreta al Dr. Nate Daniels, un marido que acaba de enviudar y que regresa a Sudáfrica, donde conoció a su mujer, en un viaje que llevaba tiempo planeando con sus hijas a una zona de caza controlada por Martin Battles (Sharlto Copley, serie Muñeca Rusa, Maléfica), un viejo amigo de la familia y biólogo especializado en vida salvaje.",
    clasificacion: "+18",
    idioma: "En sutitulado",
    director: "Baltasar Kormákur" ,
    actores: "Idrissa Akuna Elba, SHARLTO COPLEY, LEAH JEFFRIES y LEAH JEFFRIES",
  },
  {
    nombre: "THOR:Love and Thunder",
    genero: "Ciencia ficcion",
    duracion: 260,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/a10.png?alt=media&token=132eafeb-3e87-4715-a18f-03f849983928",
    sinopsis:
      "Thor: Love and Thunder de Marvel Studios muestra al dios del Trueno en un viaje diferente a todo lo que ha enfrentado: una búsqueda de la paz interior. Pero el retiro de Thor se ve interrumpido por un asesino galáctico conocido como Gorr el dios Carnicero, que busca la extinción de los dioses",
    clasificacion: "General",
    idioma: "Es",
    director: "Taika Waititi",
    actores: "CHRIS HEMSWORTH, NATALIE PORTMAN, CHRISTIAN BALE, JAIMIE ALEXANDER y CHRIS PRATT",
  },
  {
    nombre: "Minions",
    genero: "Infantil",
    duracion: 200,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/minions.jpg?alt=media&token=59d5f530-c3ba-4fb1-bf38-7a9a6d5fe362",
    sinopsis:
      "En los años 70, Gru crece siendo un gran admirador de Los salvajes seis, un supergrupo de villanos. Para demostrarles que puede ser malvado, Gru idea un plan con la esperanza de formar parte de la banda. Por suerte, cuenta con la ayuda de sus fieles seguidores, los Minions, siempre dispuestos a sembrar el caos.",
    clasificacion: "General",
    idioma: "ES",
    director: "PIERRE COFFIN y KYLE BALDA",
    actores: "JON HAMM, SANDRA BULLOCK, STEVE COOGAN y ALLISON JANNEY",
  },
  {
    nombre: "Un parcero en Nueva York",
    genero: "Comedia",
    duracion: 100,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/UN%20PARCERO%20EN%20NUEVA%20YORK.png?alt=media&token=72abb0b6-6617-4fb4-90bd-f24f0b9de929",
    sinopsis:
      "Armando Pulido, un trabajador y buen amigo, cansado de la grave crisis económica que vive en Colombia, decide ir en busca del sueño americano a Nueva York e intenta de diversas maneras conseguir la visa americana.",
    clasificacion: "General",
    idioma: "ES",
    director: "Harold Trompetero",
    actores: "Marcela Carvajal, Antonio Sanint, Jairo Eduardo Carrillo, Álvaro Rodríguez y Santiago Alarcón",
  },
  {
    nombre: "Gemelo Siniestro",
    genero: "Suspenso",
    duracion: 200,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/a2.png?alt=media&token=dcbfbf72-a264-4382-b7bf-1044984a2684",
    sinopsis:
      "Tras la muerte de uno de sus hijos gemelos, Rachel y Anthony se instalan en el campo escandinavo para sanar las heridas anímicas. Allí, sin embargo, ella descubre que una fuerza sobrenatural y maligna quiere llevarse al pequeño que le queda.",
    clasificacion: "+18",
    idioma: "EN",
    director: "Taneli Mustonen",
    actores: "Aleksi Hyvärinen, Sami Hedberg, Aleksi Raij, Teresa Palmer, Aku Hirviniemi y Freja Teijonsalo",
  },
  {
    nombre: "Perro Samurai",
    genero: "Infantil",
    duracion: 180,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/a3.png?alt=media&token=284762c2-7966-4068-9ed2-d227751b455a",
    sinopsis:
      "Un pueblo de gatos se encuentra en peligro y un héroe inesperado surge para ayudarlos: ¡un perro llamado Hank!",
    clasificacion: "General",
    idioma: "ES",
    director: "ROB MINKOFF y MARK KOETSIER" ,
    actores: "SAMUEL L. JACKSON, DJIMON HOUNSOU, RICKY GERVAIS, MICHAEL CERA y MICHELLE YEOH",
  },
  {
    nombre: "Sana que Sana",
    genero: "Comedia",
    duracion: 160,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/a4.png?alt=media&token=b9660c44-dbb8-4d60-8783-13625dd64f3e",
    sinopsis:
      "En una gran aventura en la que los súpercalvos se convierten en súper héroes, Rogelio logra enfrentar a los malos haciéndoles pagar su osadía e infamia de robarse la plata de la salud, a la que tienen derecho todos los niños colombianos por igual y sin distingo.",
    clasificacion: "General",
    idioma: "ES",
    director: "Juan Carlos Vásquez",
    actores: "Gerly Hassam, Fernando Arévalo, Alberto Barrero y Walter Luengas",
  },
  {
    nombre: "Tren Bala",
    genero: "Accion",
    duracion: 126,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/trebala.jpg?alt=media&token=fd1461e9-ee71-48e1-ba52-f421280ee043",
    sinopsis:
      "Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka. Los sicarios descubrirán que sus misiones no son ajenas entre sí",
    clasificacion: "+18",
    idioma: "ES",
    director: "David Leitch" ,
    actores: "Kelly McCormick, Aaron Taylor-Johnson, Chad Stahelski, Joey King y Logan Lerman",
  },
  {
    nombre: "Dragon Ball Super: Super Hero",
    genero: "Ciencia Ficcion",
    duracion: 150,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/DRAGON.jpg?alt=media&token=2a8174f0-7d81-48b7-b874-f52a8780fc59",
    sinopsis:
      "Son Goku destruyó en su momento a la Patrulla Roja. Ahora, ciertos individuos han decidido continuar con su legado y han creado a los androides definitivos: Gamma 1 y Gamma 2. Estos dos androides se autoproclaman superhéroes y deciden atacar a Piccolo y a Gohan. ¿Cuál es el objetivo de la nueva Patrulla Roja? Ante un peligro inminente, ¡llega el momento del despertar del Superhéroe! La película, que cuenta con el compromiso e intervención del creador original de Dragon Ball, Akira Toriyama, tiene al legendario creador de manga detrás de la historia original, el guión y el diseño de personajes del filme.",
    clasificacion: "+18",
    idioma: "ES",
    director: "Tetsuro Kodama" ,
    actores: "Akira Toriyama, Chikashi Kubota, Toshio Furukawa y Hiroshi Kamiya",
  },
  {
    nombre: "El Teléfono Negro ",
    genero: "Suspenso",
    duracion: 130,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/TELEFONO%20NEGRO.png?alt=media&token=8b4690d8-4b04-4d9a-a32d-d2a6d097aa10",
    sinopsis:
      "Finney Shaw es un niño tímido pero inteligente de 13 años que es secuestrado y atrapado en un sótano insonorizado por un asesino sádico. Cuando un teléfono desconectado en la pared comienza a sonar, Finney descubre que puede escuchar las voces de las víctimas anteriores del asesino. Y están decididos a asegurarse de que lo que les pasó a ellos no le pase a Finney.",
    clasificacion: "+18",
    idioma: "EN",
    director: "Scott Derrickson",
    actores: "James Ransone, Madeleine McGraw, Ethan Hawke, brady hepner y C. Robert Cargill",
  },
];

// RECORRIENDO UN ARREGLO EN JS
let fila = document.getElementById("fila");

peliculas.forEach(function (pelicula) {
  console.log(peliculas);
  console.log(peliculas.nombre);
  console.log(peliculas.genero);
  console.log(peliculas.duracion);
  console.log(peliculas.imagenes);
  console.log(peliculas.sinopsis);
  console.log(peliculas.clasificacion);
  console.log(peliculas.idioma);
  console.log(pelicula.director);
  console.log(pelicula.actores);

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
  let nombre = document.createElement("h5");
  nombre.classList.add("card-title", "text-start");
  nombre.textContent = pelicula.nombre;
  // creamos el genero de cada pelicula
  let genero = document.createElement("h5");
  genero.classList.add("text-start");
  genero.textContent = "Genero: " + pelicula.genero;

  //creamos el idioma de cada pelicula

  let idioma = document.createElement("h5");
  idioma.classList.add("fw-bold");
  idioma.textContent = "Idiomasssss: " + pelicula.idioma;

  // creamos la sipnosis de cada pelicula ---  con d-none se ocualta texto largo
  let sipnosis = document.createElement("p");
  sipnosis.classList.add("fw-bod");
  sipnosis.textContent = "Sipnosis: "+pelicula.sinopsis;

  // Directores
  let director= document.createElement("h6");
  director.classList.add("fw-bod");
  director.textContent = "Director: " + pelicula.director;

  //actores 
  let actores = document.createElement("h6");
  actores.classList.add("fw-bod");
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
  

});


// Estrenos

let peliculasestreno = [
  {
    nombre: "7 Horas para Enamorarte",
    genero: "ROMANCE",
    duracion: 220,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/7%20horas%20para%20enamorarte.png?alt=media&token=f1559de9-c5e2-4964-b512-ebc428310400",
    sinopsis:
      "Valeria, una bella y decidida mujer desilusiona con el amor, es una maestra implacable de ligar con hombres solteros. Un día conoció a Giulio, que lucha por recuperar a su ex, con su ayuda.",
    clasificacion: "General",
    idioma: "En sutitulado",
    director: "Giampaolo Morelli." ,
    actores: "Giampaolo Morelli, Serena Rossi, Diana Del Bufalo y Massimiliano Gallo",
  },
  {
    nombre: "La Huerfana: El Origen",
    genero: "Suspenso",
    duracion: 260,
    imagenes:
     "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/la%20huerfana.png?alt=media&token=5fba2985-fcd8-4a54-8ff4-28d46befc484",
    sinopsis: "La desquiciada Leena Klammer organiza una brillante fuga de un manicomio de Estonia y viaja a Estados Unidos robando la identidad de la hija desaparecida de una familia adinerada. Sin embargo, la nueva vida de Leena como Esther llega con un giro inesperado y la enfrenta a una madre que hará cualquier cosa para proteger a su familia a toda costa",
    clasificacion: "+18",
    idioma: "Es",
    director: "William Brent Bell",
    actores: "Julia Stiles, Isabelle Fuhrman y Matthew Finlan",
  },
  {
    nombre: "La Mujer Rey",
    genero: "General",
    duracion: 200,
    imagenes:
     "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/la%20mujer%20rey.png?alt=media&token=b5ed83ef-fd9f-429e-a63d-c357882b6b7d",
    sinopsis:
    "The Woman King es la notable historia de Agojie, la unidad de guerreras compuesta exclusivamente por mujeres que protegieron el reino africano de Dahomey en el siglo XIX con habilidades y una ferocidad como nunca antes se había visto en el mundo. Inspirada en hechos reales, The Woman King sigue el viaje emocionalmente épico de la General Nanisca (la ganadora del Oscar® Viola Davis) mientras entrena a la próxima generación de reclutas y las prepara para la batalla contra un enemigo decidido a destruir su forma de vida. Hay cosas por las que vale la pena luchar",
    clasificacion: "General",
    idioma: "ES",
    director: "Gina Prince-Bythewood",
    actores: "Viola Davis, Thuso Mbedu, Lashana Lynch, Sheila Atim, Hero Fiennes Tiffin y John Boyega.",
  },
  {
    nombre: "Érase Una Vez un Genio",
    genero: "Fantasia, Romance",
    duracion: 100,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/erase%20una%20vez.png?alt=media&token=1fd9a805-5086-4bd4-951b-eb41f262a932",
    sinopsis:
      "Una aventura fantástica donde una mujer, Alithea(Tilda Swinton) descubre un genio (Idris Elba) en una lámpara. Ella es consciente que ninguna historia sobre deseos concedidos tiene un final feliz, así se niega a pedir sus 3 deseos que liberarían al genio. Él, en un esfuerzo por convencerla, le cuenta sus aventuras a través del tiempo entre épocas de reyes y faraones y cómo el haber amado a la mujer equivocada lo obligó a convertirse en prisionero de esta botella, solo, por la eternidad. Él anhela libertad, ella anhela compañía, quizás encuentran en el otro lo que siempre anhelaron y necesitaron.",
    clasificacion: "General",
    idioma: "ES",
    director: "George Miller.",
    actores: "Idris Elba, Tilda Swinton, Alyla Browne y Pia Thunderbolt",
  },
  {
    nombre: "Pasaje al Paraíso",
    genero: "Romance",
    duracion: 200,
    imagenes:
      "https://firebasestorage.googleapis.com/v0/b/cinedk-77f65.appspot.com/o/pasaje%20al%20paraiso.png?alt=media&token=732424c4-9ade-49aa-bf50-43632fe43fb5",
    sinopsis:
     "Los ganadores del Premio de la Academia® George Clooney y Julia Roberts se reúnen en la pantalla grande como ex esposos que comparten la misión de evitar que su enamorada hija cometa el mismo error que ellos mismos cometieron una vez. De Working Title, Smokehouse Pictures y Red Om Films, Pasaje al Paraíso es una comedia romántica sobre la dulce sorpresa de las segundas oportunidades.",
    clasificacion: "General",
    idioma: "EN",
    director: "Ol Parker",
    actores: "George Clooney y Julia Roberts",
  },


];

let fila2 = document.getElementById("fila2");

peliculasestreno.forEach(function (peliculasestreno) {
  console.log(peliculasestreno);
  console.log(peliculasestreno.nombre);
  console.log(peliculasestreno.genero);
  console.log(peliculasestreno.duracion);
  console.log(peliculasestreno.imagenes);
  console.log(peliculasestreno.sinopsis);
  console.log(peliculasestreno.clasificacion);
  console.log(peliculasestreno.idioma);
  console.log(peliculasestreno.director);
  console.log(peliculasestreno.actores);

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
  poster.src = peliculasestreno.imagenes;
  //creamos el nombre de la pelicula
  let nombre = document.createElement("h5");
  nombre.classList.add("card-title", "text-start");
  nombre.textContent = peliculasestreno.nombre;
  // creamos el genero de cada pelicula
  let genero = document.createElement("h5");
  genero.classList.add("text-start");
  genero.textContent = "Genero: " + peliculasestreno.genero;

  //creamos el idioma de cada pelicula

  let idioma = document.createElement("h5");
  idioma.classList.add("fw-bold");
  idioma.textContent = "Idioma: " + peliculasestreno.idioma;

  // creamos la sipnosis de cada pelicula ---  con d-none se ocualta texto largo
  let sipnosis = document.createElement("p");
  sipnosis.classList.add("fw-bod");
  sipnosis.textContent = "Sipnosis: " + peliculasestreno.sinopsis  ;

  // Directores
  let director= document.createElement("h6");
  director.classList.add("fw-bod");
  director.textContent = "Director: " + peliculasestreno.director;

  //actores 
  let actores = document.createElement("h6");
  actores.classList.add("fw-bod");
  actores.textContent= "Actores: " + peliculasestreno.actores;

  //padres y hijos
  tarjeta.appendChild(poster);
  colunmna.appendChild(tarjeta);
  fila2.appendChild(colunmna);
  tarjeta.appendChild(nombre);
  tarjeta.appendChild(genero);
  tarjeta.appendChild(idioma);
  tarjeta.appendChild(sipnosis);
  tarjeta.appendChild(director);
  tarjeta.appendChild(actores)

});