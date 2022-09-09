class Personaje {
  constructor(nombre, raza, tamaño, fuerza, agilidad, carisma) {
    this.nombre = nombre;
    this.raza = raza;
    this.tamaño = tamaño;
    this.fuerza = fuerza;
    this.agilidad = agilidad;
    this.carisma = carisma;
  }
}
const personaje1 = {
  nombre: "Odin",
  raza: "perro",
  tamaño: "grande",
  fuerza: "fuerte",
  agilidad: "torpe",
  carisma: "carismatico",
};
const personaje2 = {
  nombre: "Floki",
  raza: "gato",
  tamaño: "pequeño",
  fuerza: "debil",
  agilidad: "agil",
  carisma: "con caracter",
};
let personajes = [personaje1, personaje2];

function gameOver() {
  document.querySelector(
    ".containerPrincipal"
  ).innerHTML = `<p>Fue lindo mientras duro<br>Gracias por Jugar!<br>O bien, gracias por no hacerlo(?</p>`;
}

function addNewPersonaje() {
  let nombre = prompt("cual es su nombre?");
  let raza = prompt(
    "Que animal es?\r\nA) Descendiente de Lobos\r\nB) Descendiente de Leones"
  ).toLowerCase();
  let tamaño = prompt(
    "Cual es su tamaño?\r\nA) Grande\r\nB) Pequeño"
  ).toLowerCase();
  let fuerza = prompt(
    "Que tan fuerte es?\r\nA) Una bestia\r\nB) No mata una mosca"
  ).toLowerCase();
  let agilidad = prompt(
    "Que tan agil es?\r\nA) Todo un deportista\r\nB) Se la pasa durmiendo"
  ).toLowerCase();
  let carisma = prompt(
    "Es simpatico?\r\nA) Ama a todo el mundo\r\nB) No lo podes ni mirar"
  ).toLowerCase();
  return new Personaje(nombre, raza, tamaño, fuerza, agilidad, carisma);
}
function elegirPersonaje() {
  document.querySelector(".containerPrincipal").innerHTML = `     
  <article class="card" data-aos="fade-up" data-aos-duration="3000">
    <h2 class="card__name">ODIN</h2>
    <img class="card__img" src="../OdinFloki/imagenes/odin.png" alt="odin"/>
    <p class="card__stats"> Odin! el pastor aleman<br>Grande y fuerte<br>Algo torpe<br>Siempre un buen chico"</p>
    <button
    onclick="elegirOdin()"
    type="button"
    class="btn btn-primary">
    Elegir
    </button>
  </article>
  <article class="card" data-aos="fade-up" data-aos-duration="3000">
    <h2 class="card__name">FLOKI</h2>
    <img class="card__img" src="../OdinFloki/imagenes/floki.png" alt="floki"/>
    <p class="card__stats">Floki! el gato naranja<br>Pequeño y no muy duro<br>Se cree superior a los demas<br>Lo és</p>
    <button
    onclick="elegirFloki()"
    type="button"
    class="btn btn-primary">
    Elegir
    </button>
  </article>
  <article class="card" data-aos="fade-up" data-aos-duration="3000">
    <h2 class="card__name">TU MASCOTA</h2>
    <img class="card__img" src="../OdinFloki/imagenes/pawico.png" />
    <p class="card__stats">Puedes crear a tu peludo como personaje</p>
    <button
    onclick="crearMascota()"
    type="button"
    class="btn btn-primary"
    data-bs-target="#nombreMascota" data-bs-toggle="modal">
    Elegir
    </button>
  </article>
  `;
}
// function elegirOdin() {}
// function elegirFloki() {}
function crearMascota() {
  let nombre = document.querySelector("#name");
  let raza = document.querySelector("#raza");
  let tamaño = document.querySelector("#tamano");
  let fuerza = document.querySelector("#fuerza");
  let agilidad = document.querySelector("#agilidad");
  let carisma = document.querySelector("#carisma");
  //   document.querySelector(
  //     ".containerPrincipal"
  //   ).innerHTML = `tu personaje se llama ${crearMascota.nombre}\r\nEs un ${raza} ${tamaño}\r\n${fuerza}, ${carisma}\r\nSin olvidar que es ${agilidad}`;
  new Personaje(nombre, raza, tamaño, fuerza, agilidad, carisma);
  return console.log(personajes);
}

// function mostrarMascota() {
//   document.querySelector(
//     ".containerPrincipal"
//   ).innerHTML = `tu personaje se llama ${nombre}\r\nEs un ${raza} ${personaje.tamaño}\r\n${personaje.fuerza}, ${personaje.carisma}\r\nSin olvidar que es ${personaje.agilidad}`;
// }
// function nombreMascota() {}
// function statRaza1() {}
// function statRaza2() {}
// function statTamano1() {}
// function statTamano2() {}
// function statFuerza1() {}
// function statFuerza2() {}
// function statAgil1() {}
// function statAgil2() {}
// function statCar1() {}
// function statCar2() {}
// function statFinal() {
//   document.querySelector(
//     ".card__stats"
//   ).innerHTML = `tu personaje se llama ${personaje.nombre}\r\nEs un ${personaje.raza} ${personaje.tamaño}\r\n${personaje.fuerza}, ${personaje.carisma}\r\nSin olvidar que es ${personaje.agilidad}`;
// }
