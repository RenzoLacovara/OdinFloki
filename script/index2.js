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
function elegirPersonaje() {
  document.querySelector("#cover").classList.remove("visible");
  document.getElementById("create").classList.add("hidden");
}
function showOdin() {
  document.getElementById("img-personaje").src =
    "../OdinFloki/imagenes/odin2.png";
}
function oldImg() {
  document.getElementById("img-personaje").src = "";
}
function showFloki() {
  document.getElementById("img-personaje").src =
    "../OdinFloki/imagenes/floki2.png";
}
function showMascota() {
  document.getElementById("img-personaje").src =
    "../OdinFloki/imagenes/mascota.png";
}
function crearMascota() {
  document.querySelector(".personajes").classList.add("hidden");
  document.querySelector(".crearPersonaje").classList.remove("hidden");
  document.getElementById("create").classList.remove("hidden");
  document.querySelector(".imgmascota").classList.remove("hidden");
}
function cancel() {
  document.querySelector(".crearPersonaje").classList.add("hidden");
  document.querySelector(".personajes").classList.remove("hidden");
  document.getElementById("create").classList.add("hidden");
  document.querySelector(".imgmascota").classList.add("hidden");
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
  Array.from(document.querySelectorAll(".imgmascota")).forEach((el) =>
    el.classList.remove("hidden")
  );
  document.getElementById("next").classList.remove("hidden");
  function elegirMascota() {
    let personaje = personaje3;
    const miMascota = document.createElement("p");
    miMascota.innerHTML = `tu personaje se llama ${personaje.nombre}<br>Es un ${personaje.raza} ${personaje.tamaño}<br>${personaje.fuerza}<br>Sin olvidar que es ${personaje.agilidad}`;
    document.querySelector("#presenta").append(miMascota);
    document.querySelector(".personajes").classList.add("hidden");
    document.querySelector("#hab1").classList.remove("hidden");
    document.getElementById("next").classList.remove("hidden");
    document.querySelector(".crearPersonaje").classList.add("hidden");
    document.querySelector("#create").classList.add("hidden");
    Array.from(document.querySelectorAll(".imgmascota")).forEach((el) =>
      el.classList.remove("hidden")
    );
    console.log(personaje);

    if (personaje.raza === "perro") {
      introPerro();
    } else {
      introGato();
    }
  }
  elegirMascota();
}
function elegirOdin() {
  let personaje = personaje1;
  document.querySelector(".personajes").classList.add("hidden");
  document.querySelector("#hab1").classList.remove("hidden");
  document.getElementById("next").classList.remove("hidden");
  Array.from(document.querySelectorAll(".imgodin")).forEach((el) =>
    el.classList.remove("hidden")
  );
  console.log(personaje);
  introPerro();
}
function elegirFloki() {
  let personaje = personaje2;
  document.querySelector(".personajes").classList.add("hidden");
  document.querySelector("#hab1").classList.remove("hidden");
  document.getElementById("next").classList.remove("hidden");
  Array.from(document.querySelectorAll(".imgfloki")).forEach((el) =>
    el.classList.remove("hidden")
  );
  console.log(personaje);
  introGato();
}
function introPerro() {
  const introPerro = document.createElement("p");
  introPerro.innerHTML =
    "<p>Te encontrabas en el patio cuando una ardilla capto tu atencion<br>Sentiste en su rostro un gesto burlon, no pudiste contenerte<br>Tuviste que perseguirla aunque eso signifique saltar la reja</p>";
  document.querySelector("#hab1").append(introPerro);
}
function introGato() {
  const introGato = document.createElement("p");
  introGato.innerHTML =
    "<p>Unos niños, se encontraban tirando piedras a las palomas cuando se percataron de tu presencia<br>Tu solo estabas tomando sol en la puerta de la cochera cuando el primer disparo pico cerca<br>Fue puramente instinto salir huyendo aunque signifique saltar la reja</p>";
  document.querySelector("#hab1").append(introGato);
}
function jaulaNo() {
  const jaulaNo = document.createElement("p");
  jaulaNo.innerHTML =
    "Supongo que esta jaula no esta tan mal, no?<br><br><br><br>'Piensas quedarte mucho rato aqui?'";
  document.querySelector("#jaula").append(jaulaNo);
  document.querySelector(".btn-no").classList.add("hidden");
}
function jaulaSi() {
  document.querySelector("#jaula").innerHTML =
    "Empujas con el hocico la puerta de la jaula<br>Al fin y al cabo no tienes pulgares<br>Que oportuno que este abierto<br>Para nada sospechoso<br>Sientes un escalofrio";

  document.querySelector(".btn-no").classList.add("hidden");
  document.querySelector(".btn-si").classList.add("hidden");
  document.querySelector("#cont1").classList.remove("hidden");
}
function primerHabitacion() {
  document.querySelector("#cont1").classList.add("hidden");
  document.querySelector(".pag1").classList.add("hidden");
  document.querySelector(".primerHabitacion").classList.remove("hidden");
  document.querySelector("#cont2").classList.remove("hidden");
}
function primerDecision() {
  document.querySelector(".primerHabitacion").classList.add("hidden");
  document.querySelector("#cont2").classList.add("hidden");
  document.querySelector("#deci1").classList.remove("hidden");
}
