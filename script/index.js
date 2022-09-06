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
const respuesta1 = "a";
const respuesta2 = "b";
const respuesta3 = "c";

function Start() {
  var comienzo = confirm("Quieres empezar el juego?");
  if (comienzo === false) {
    alert("Fue lindo mientras duro");
    alert("Gracias por jugar!\r\nO bien gracias por no hacerlo(?");
  } else {
    elegirPersonaje();
    console.log("Comenzamos...");
  }
}
function elegirPersonaje() {
  let elegirPersonaje = prompt(
    "Elije tu personaje!\r\nA- Odin, el pastor aleman\r\nB- Floki, el gato naranja\r\nC- Tu propia mascota"
  ).toLowerCase();
  if (elegirPersonaje == respuesta1) {
    let personaje = personaje1;
    alert(
      "Odin! el pastor aleman\r\nGrande y fuerte\r\nAlgo torpe\r\nSiempre un buen chico"
    );
    document.querySelector(".card__name").innerHTML = `${personaje.nombre}`;
    document.querySelector(".card__img").src = "../OdinFloki/imagenes/odin.png";
    document.querySelector(
      ".card__stats"
    ).innerHTML = `<strong>raza:</strong> ${personaje1.raza}<br />
    <strong>tamaño:</strong> ${personaje1.tamaño}<br />
    <strong>fuerza:</strong> ${personaje1.fuerza}<br />
    <strong>agilidad:</strong> ${personaje1.agilidad}<br />
    <strong>carisma:</strong> ${personaje1.carisma}<br />`;
    introPerro();
    intro();
    primerHabitacionOdin();
    dados();
    escapeCocineroOdin();
  } else if (elegirPersonaje == respuesta2) {
    let personaje = personaje2;
    alert(
      "Floki! el gato naranja\r\nPequeño y no muy duro\r\nSe cree superior a los demas\r\nLo és"
    );
    document.querySelector(".card__name").innerHTML = `${personaje.nombre}`;
    document.querySelector(".card__img").src =
      "../OdinFloki/imagenes/floki.png";
    document.querySelector(
      ".card__stats"
    ).innerHTML = `<strong>raza:</strong> ${personaje2.raza}<br />
    <strong>tamaño:</strong> ${personaje2.tamaño}<br />
    <strong>fuerza:</strong> ${personaje2.fuerza}<br />
    <strong>agilidad:</strong> ${personaje2.agilidad}<br />
    <strong>carisma:</strong> ${personaje2.carisma}<br />`;
    introGato();
    intro();
    primerHabitacionFloki();
    dados();
    escapeCocineroFloki();
  } else if (elegirPersonaje == respuesta3) {
    alert("Tu bola de pelo sera protagonista!");
    const personaje3 = addNewPersonaje();
    function respuesta() {
      if (personaje3.raza == respuesta1) {
        personaje3.raza = "perro";
      }
      if (personaje3.raza == respuesta2) {
        personaje3.raza = "gato";
      }
      if (personaje3.tamaño == respuesta1) {
        personaje3.tamaño = "grande";
      }
      if (personaje3.tamaño == respuesta2) {
        personaje3.tamaño = "pequeño";
      }
      if (personaje3.fuerza == respuesta1) {
        personaje3.fuerza = "fuerte";
      }
      if (personaje3.fuerza == respuesta2) {
        personaje3.fuerza = "debil";
      }
      if (personaje3.agilidad == respuesta1) {
        personaje3.agilidad = "agil";
      }
      if (personaje3.agilidad == respuesta2) {
        personaje3.agilidad = "torpe";
      }
      if (personaje3.carisma == respuesta1) {
        personaje3.carisma = "carismatico";
      }
      if (personaje3.carisma == respuesta2) {
        personaje3.carisma = "con caracter";
      }
    }
    respuesta();
    let personaje = personaje3;
    personajes.push(personaje);
    console.log(personajes);
    alert(
      `tu personaje se llama ${personaje.nombre}\r\nEs un ${personaje.raza} ${personaje.tamaño}\r\n${personaje.fuerza}, ${personaje.carisma}\r\nSin olvidar que es ${personaje.agilidad}`
    );
    document.querySelector(".card__name").innerHTML = `${personaje.nombre}`;
    function newImg() {
      if (
        personaje3.raza == "perro" &&
        personaje3.tamaño == "grande" &&
        personaje3.agilidad == "agil"
      ) {
        document.querySelector(".card__img").src =
          "../OdinFloki/imagenes/perrograndeagil.png";
      } else if (
        personaje3.raza == "perro" &&
        personaje3.tamaño == "grande" &&
        personaje3.agilidad == "torpe"
      ) {
        document.querySelector(".card__img").src =
          "../OdinFloki/imagenes/perrograndetorpe.png";
      } else if (
        personaje3.raza == "perro" &&
        personaje3.tamaño == "pequeño" &&
        personaje3.agilidad == "torpe"
      ) {
        document.querySelector(".card__img").src =
          "../OdinFloki/imagenes/perrochicotorpe.png";
      } else if (
        personaje3.raza == "perro" &&
        personaje3.tamaño == "pequeño" &&
        personaje3.agilidad == "agil"
      ) {
        document.querySelector(".card__img").src =
          "../OdinFloki/imagenes/perrochicoagil.png";
      } else if (
        personaje3.raza == "gato" &&
        personaje3.tamaño == "grande" &&
        personaje3.agilidad == "torpe"
      ) {
        document.querySelector(".card__img").src =
          "../OdinFloki/imagenes/gatograndetorpe.png";
      } else if (
        personaje3.raza == "gato" &&
        personaje3.tamaño == "grande" &&
        personaje3.agilidad == "agil"
      ) {
        document.querySelector(".card__img").src =
          "../OdinFloki/imagenes/gatograndeagil.png";
      } else if (
        personaje3.raza == "gato" &&
        personaje3.tamaño == "pequeño" &&
        personaje3.agilidad == "torpe"
      ) {
        document.querySelector(".card__img").src =
          "../OdinFloki/imagenes/gatochicotorpe.png";
      } else if (
        personaje3.raza == "gato" &&
        personaje3.tamaño == "pequeño" &&
        personaje3.agilidad == "agil"
      ) {
        document.querySelector(".card__img").src =
          "../OdinFloki/imagenes/gatochicoagil.png";
      }
    }
    newImg();
    document.querySelector(
      ".card__stats"
    ).innerHTML = `<strong>raza:</strong> ${personaje3.raza}<br />
    <strong>tamaño:</strong> ${personaje3.tamaño}<br />
    <strong>fuerza:</strong> ${personaje3.fuerza}<br />
    <strong>agilidad:</strong> ${personaje3.agilidad}<br />
    <strong>carisma:</strong> ${personaje3.carisma}<br />`;
    if (personajes[2].raza == "perro") {
      introPerro();
    } else {
      introGato();
    }
    intro();
    if (personajes[2].tamaño == "grande") {
      primerHabitacionOdin();
    } else {
      primerHabitacionFloki();
    }
    dados();
    if (personajes[2].agilidad == "torpe") {
      escapeCocineroOdin();
    } else {
      escapeCocineroFloki();
    }
  }
}
Start();
function introPerro() {
  alert(
    "Te despiertas en una jaula bastante oxidada.\r\nUna tenue luz se filtra por los barrotes de una ventana.\r\nParece que atardece"
  );
  alert("Como llegaste aqui?");
  alert(
    "Te encontrabas en el patio cuando una ardilla capto tu atencion\r\nSentiste en su rostro un gesto burlon, no pudiste contenerte\r\nTuviste que perseguirla aunque eso signifique saltar la reja"
  );
}
function introGato() {
  alert(
    "te despiertas en una jaula bastante oxidada.\r\nUna tenue luz se filtra por los barrotes de una ventana.\r\nparece que atardece"
  );
  alert("Como llegaste aqui?");
  alert(
    "Unos niños, se encontraban tirando piedras a las palomas cuando se percataron de tu presencia\r\nTu solo estabas tomando sol en la puerta de la cochera cuando el primer disparo pico cerca\r\nFue puramente instinto salir huyendo aunque signifique saltar la reja"
  );
}
function intro() {
  let salir = confirm(
    "Parece que no han cerrado bien tu jaula\r\nDecides salir?"
  );
  if (salir === false) {
    alert("Supongo que esta jaula no esta tan mal, no?");
    gameOver();
  } else {
    alert(
      "Empujas con el hocico la puerta de la jaula\r\nAl fin y al cabo no tienes pulgares, que oportuno que este abierto\r\nPara nada sospechoso\r\nSientes un escalofrio"
    );
    primerHabitacion();
  }
}
function gameOver() {
  alert("GameOver\r\nGracias por jugar!");
}
function primerHabitacion() {
  alert(
    "Una leve brisa hace que vislumbres entre los caniles un pequeño agujero en la pared\r\nParece que lleva a otra habitacion\r\nEl espacio para pasar es bastante ajustado"
  );
  alert(
    "Del otro lado de la habitacion hay una puerta abierta\r\nAl final de un pasillo lleno de caniles con perros\r\nNo parecen muy amigables"
  );
}
function primerHabitacionOdin() {
  let decision = prompt(
    "Hacia donde te diriges?\r\nA) El agujero en la pared\r\nB) La puerta Abierta"
  ).toLowerCase();
  if (decision === respuesta1) {
    alert(
      "El agujero en la pared es demasiado pequeño para ti\r\nLo intentas nuevamente\r\nNo entiendes el concepto de espacio\r\nEventualmente dejas de intentarlo"
    );
    primerHabitacionOdin();
  } else {
    alert(
      "Tu tamaño parece imponer respeto en los demas perros\r\nTe acompañan con miradas torcidas moviendo levemente la cola\r\nQuizas puedas volver por ellos luego\r\nNadie merece estar en un lugar asi"
    );
    segundaHabitacion();
  }
}
function primerHabitacionFloki() {
  let decision = prompt(
    "Hacia donde te diriges?\r\nA) El agujero en la pared\r\nB) La puerta Abierta"
  ).toLowerCase();
  if (decision == respuesta2) {
    alert(
      "Apenas das un paso hasta la puerta sientes el sacudir de las jaulas\r\nEntre ladridos y embestidas, pareciera que las puertas van a ceder\r\nEscuchas un tornillo caer al suelo\r\nMejor vuelves por donde viniste"
    );
    primerHabitacionFloki();
  } else {
    alert(
      "El tamaño del agujero es casi hecho a tu medida\r\nCasi porque ultimamente vienes comiendo mucho\r\nTampoco dejaras de hacerlo\r\nQuizas del otro lado hay comida"
    );
    segundaHabitacion();
  }
}
function segundaHabitacion() {
  alert("Llegas a lo que parece ser una cocina");
  alert(
    "Lo unico que altera la calma es el suave relucir de las cuchillas colgadas"
  );
  alert(
    "Hasta que el sonido de una llave abriendo la puerta eriza los pelos de tu espalda"
  );
  alert(
    "Cruzando el umbral de la puerta aparece un cocinero enorme\r\nSu sombrero se dobla al forzar su entrada por el marco\r\nQue clase de perrera tiene un cocinero?\r\nNo planeas quedarte a averiguarlo"
  );
}
function dados() {
  alert("Hora de tirar los dados!");
  alert("De donde demonios sacaste dados?");
  alert("Por que deberian ser de ayuda ahora?");
  let decision = prompt(
    "Tiras los dados?\r\nA) Por algo los traje\r\nB) Esto no tiene sentido"
  ).toLowerCase();
  if (decision == respuesta1) {
    alert("Tiras tus dados!");
    dado20();
    let tuDado = dado20();
    alert(`Sacaste ${tuDado}`);
    if (tuDado < 10) {
      alert("Podria ser mejor");
    } else {
      alert("Bastante bien!");
    }
    alert("El cocinero tira sus dados!");
    alert("Si, el tambien trae dados");
    alert("Como decia mi madre\r\nNunca salgas sin tus dados");
    dado20();
    let suDado = dado20();
    alert(`El cocinero saco ${suDado}!`);
    if (tuDado > suDado) {
      alert("JA! lo vences en su propio juego!");
      alert("Aun no sabes como pudiste tomar los dados sin pulgares");
      alert(
        "Pero lo lograste\r\nEl cocinero tira su sombrero al piso\r\nSuena musica de victoria"
      );
      alert(
        "En un arrebato de cordura ambos se miran\r\nSe dan cuenta de lo ilogico que es la situacion"
      );
      escapeCocinero();
    } else {
      alert("Oh no, perdiste");
      alert(
        "Sientes el amargo sabor de la derrota mientras el cocinero salta en un pie de alegria"
      );
      alert(
        "Es un muy mal ganador\r\nSe burla de ti\r\nSuenan violines tristes de fondo"
      );
      alert(
        "En un arrebato de cordura ambos se miran\r\nSe dan cuenta de lo ilogico que es la situacion"
      );
      escapeCocinero();
    }
  } else {
    alert("Te olvidas de los dados");
    alert("De todas formas era una idea tonta");
    alert("Te preparas para enfrentarte al cocinero");
    escapeCocinero();
  }
}

function dado20() {
  var aleatorio = Math.floor(Math.random() * 21);
  return aleatorio;
}
function escapeCocinero() {
  alert("El cocinero saca un reluciente cuchillo y te observa decidido");
  alert('"Que haces fuera de tu jaula albondiga?"');
  alert("Comienza a acercarse a ti con el brazo extendido");
  alert(
    "Puedes ver una ventana en lo alto, sobre la mesada\r\nCon la suficiente agilidad podrias alcanzarla\r\nSolo tienes que esquivar al psicopata con el cuchillo\r\nPan comido"
  );
  alert(
    "Quizas si eres lo suficientemente rapido\r\nY el cocinero lo suficientemente lento\r\nY este juego lo suficientemente generoso\r\nPodrias pasar corriendo entre sus piernas y salir por la puerta por la que vino"
  );
}
function escapeCocineroOdin() {
  let decision = prompt(
    "Hacia donde te diriges?\r\nA) La ventana aparentemente alcanzable\r\nB) Te abres paso por debajo del cocinero"
  ).toLowerCase();
  if (decision === respuesta1) {
    alert(
      "Cuando intentas dar el primer salto apenas te elevas un centimetro del suelo\r\nLo cual se ve bastante comico\r\nMiras al cocinero con cara de circunstancia\r\nPareciera que tu torpe intento lo hizo olvidarse que tiene que atraparte\r\nYa lo recordó, huye!"
    );
    escapeCocineroOdin();
  } else {
    alert(
      "Empiezas a correr hacia la puerta\r\nNo te importa que en el trayecto haya cajas y latas\r\nY cocineros armados\r\nArrasas con todo a tu paso tumbando al cocinero y pasando por la puerta\r\nDejando un desastre detras obstruyendo la entrada"
    );
    terceraHabitacion();
  }
}
function escapeCocineroFloki() {
  let decision = prompt(
    "Hacia donde te diriges?\r\nA) La ventana aparentemente alcanzable\r\nB) Te abres paso por debajo del cocinero"
  ).toLowerCase();
  if (decision === respuesta1) {
    alert(
      "Te mueves con suficiente gracia como para esquivar todos los obstaculos\r\nPero eso hace que tus intenciones sean muy obvias\r\nEl cocinero adivina hacia donde vas y se para en la puerta\r\nAl bloquearla completamente, con mucha gracia y elegancia, vuelves al otro lado de la habitacion"
    );
    escapeCocineroFloki();
  } else {
    alert(
      "Con una agilidad increible te desprendes del suelo\r\nPareciera que vuelas por la cocina\r\nEl cocinero por mucho que intente no puede alcanzarte\r\nLe dedicas una mirada burlona mientras pasas a travez de la ventana\r\nEn algun lugar del mundo un jurado te esta dando 10 puntos"
    );
    terceraHabitacion();
  }
}
function terceraHabitacion() {
  alert("De pronto te encuentras en lo que parece un gran salon");
  alert("Puedes vislumbrar una salida al otro lado del mismo");
  alert(
    "Lo unico que te separa de dormir esta noche en tu propia cama es un camino lleno de mesas"
  );
  alert("Y dos guardias enormes en la puerta");
  alert("Continuara...");
}
// const newCard = document.createElement("div");
// newCard.innerHTML = `<h2></h2>
// <img />
// <p>
//   <strong>raza:</strong><br />
//   <strong>tamaño:</strong><br />
//   <strong>fuerza:</strong><br />
//   <strong>agilidad:</strong><br />
//   <strong>carisma:</strong><br />
// </p>`;
// newCard.classList.add("card__personaje");
// document.querySelector(".card").append(newCard);
