class Personaje {
  constructor(nombre, raza, tamaño, fuerza, agilidad, carisma) {
    this.nombre = nombre;
    this.raza = raza;
    this.tamaño = tamaño;
    this.fuerza = fuerza;
    this.agilidad = agilidad;
  }
}
const personaje1 = {
  nombre: "Odin",
  raza: "perro",
  tamaño: "grande",
  fuerza: "fuerte",
  agilidad: "torpe",
};
const personaje2 = {
  nombre: "Floki",
  raza: "gato",
  tamaño: "pequeño",
  fuerza: "debil",
  agilidad: "agil",
};
let personajes = [personaje1, personaje2];

function gameOver() {
  document.querySelector("#cover").classList.add("visible");
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
  document.querySelector("#cover").classList.remove("visible");
  document.getElementById("create").classList.add("hidden");
}
function showOdin() {
  document.getElementById("img-personaje").src =
    "../OdinFloki/imagenes/odin.png";
}
function oldImg() {
  document.getElementById("img-personaje").src =
    "../OdinFloki/imagenes/default.png";
}
function showFloki() {
  document.getElementById("img-personaje").src =
    "../OdinFloki/imagenes/floki.png";
}
function crearMascota() {
  document.querySelector(".personajes").classList.add("hidden");
  document.querySelector(".crearPersonaje").classList.remove("hidden");
  document.getElementById("create").classList.remove("hidden");
}
function cancel() {
  document.querySelector(".crearPersonaje").classList.add("hidden");
  document.querySelector(".personajes").classList.remove("hidden");
  document.getElementById("create").classList.add("hidden");
}

function crearPersonaje() {
  let nombre = document.querySelector("#nombre").value;
  let raza = document.querySelector('input[name="raza"]:checked').value;
  let tamaño = document.querySelector('input[name="tamaño"]:checked').value;
  let fuerza = document.querySelector('input[name="fuerza"]:checked').value;
  let agilidad = document.querySelector('input[name="agilidad"]:checked').value;
  return new Personaje(nombre, raza, tamaño, fuerza, agilidad);
}

function crear() {
  const personaje3 = crearPersonaje();
  let personaje = personaje3;
  personajes.push(personaje);
  console.log(personajes);
  alert(
    `tu personaje se llama ${personaje.nombre}\r\nEs un ${personaje.raza} ${personaje.tamaño}\r\n${personaje.fuerza}\r\nSin olvidar que es ${personaje.agilidad}`
  );
}
