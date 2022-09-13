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
function cancel() {
  document.querySelector(".crearPersonaje").classList.add("hidden");
  document.querySelector(".personajes").classList.remove("hidden");
}
function crearMascota() {
  document.querySelector(".personajes").classList.add("hidden");
  document.querySelector(".crearPersonaje").classList.remove("hidden");
}
// function crearPersonaje() {}
// document.querySelector('input[name="genderS"]:checked').value;
