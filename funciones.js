// ESTA FUNCION FETCH LLAMA AL ARCHIVO QUE SE NECESITE REEMPLAZAR EN EL HTML MAIN
const cargarPagina = async (pagina) => {
  let archivoHtml = `${pagina}.html`;
  return fetch(archivoHtml)
    .then((res) => res.text())
    .then((data) => data);
};

/**
 * Para cargar la pagina ejecutar cargarPagina y guardar el resultado en una variabvle y luego hacer el innerHTMl de esa web
 * deberia andar
 * ]
 *
 */

// ESTA FUNCION FETCH LLAMA AL JSON
const getRobot = () => {
  return fetch("http://127.0.0.1:5500/robots.json")
    .then((resp) => resp.json())
    .then((data) => data);
};

const crearSliderRobot = () => {
  // CREO VARIABLES
  let imagenRobot = document.getElementById("imagenRobot");
  let tituloRobot = document.getElementById("tituloRobot");
  let typeRobot = document.getElementById("typeRobot");
  let descriptionRobot = document.getElementById("descriptionRobot");
  //INSERTO CONTENIDO A VARIABLES
  insertarRobot();
};

const insertarRobot = async () => {
  // console.log(indiceRobot);
  let robots = await getRobot();
  imagenRobot.src = robots[indiceRobot][0].preview;
  tituloRobot.textContent = robots[indiceRobot][0].name;
  typeRobot.textContent = robots[indiceRobot][0].type;
  descriptionRobot.textContent = robots[indiceRobot][0].description;
};

//ESCUCHO EL BOTON DE VER FICHA FICHA COMPLETA
const accederPerfilRobot = async () => {
  let robots = await getRobot();
  // history.pushState(null, "", "perfil-robot");
  let perfilRobot = await cargarPagina("perfil-robot"); // llama a la pagina perfilRobot una vez que cargo puedo crear variables
  main.innerHTML = perfilRobot; // y puedo insertar contenido

  let avatarRobot = document.getElementById("avatarRobot");
  let avatarName = document.getElementById("avatarName");
  let avatarType = document.getElementById("avatarType");
  let avatarDescription = document.getElementById("avatarDescription");
  let backBtn = document.getElementById("backBtn");

  avatarRobot.src = robots[indiceRobot][0].perfilImg;
  avatarName.textContent = robots[indiceRobot][0].name;
  avatarType.textContent = robots[indiceRobot][0].type;
  avatarDescription.textContent = robots[indiceRobot][0].description;

  header.classList.add("display__none");

  //LLAMA A la pagina de crear ficha
  crearFichaEstadisticas(robots);

  backBtn.addEventListener("click", async () => {
    // history.pushState(null, "", "home");
    let paginaInicial = await cargarPagina("home");
    main.innerHTML = paginaInicial;
    header.classList.remove("display__none");

    insertarRobot(indiceRobot);
  });
};

//////////////////////////
const crearFichaEstadisticas = (robots) => {
  let avatarCarga = document.getElementById("avatarCarga");
  let barBlue = document.getElementById("barBlue");
  avatarCarga.innerHTML =
    robots[indiceRobot][0].statistics[0].other[0].batteryLife[0].value;

  energy = robots[indiceRobot][0].statistics[0].energy[0].value;
  maintenance = robots[indiceRobot][0].statistics[0].maintenance[0].value;
  complexity = robots[indiceRobot][0].statistics[0].complexity[0].value;
  security = robots[indiceRobot][0].statistics[0].security[0].value;

  // para darle elcolor y % a cada barra
  barBlue.style.width = `${energy}%`;
  barBlue.style.background = "var(--blueGradient)";
  barPink.style.width = `${maintenance}%`;
  barPink.style.background = "var(--pinkGradient)";
  barOrange.style.width = `${complexity}%`;
  barOrange.style.background = "var(--orangeGradient)";
  barGreen.style.width = `${security}%`;
  barGreen.style.background = "var(--greenGradient)";

  // circleBarBlue.style.strokeDasharray = 200;
  // circleBarPink.style.strokeDasharray = 170;
};

// obtenerCircunsferencia()

//ESCUCHO LAS FLECHAS
const navegarDerecha = async () => {
  let robots = await getRobot();
  indiceRobot++;
  if (indiceRobot == robots.length) {
    indiceRobot = 0;
    insertarRobot();
  } else {
    insertarRobot();
  }
};
const navegarIzquierda = async () => {
  let robots = await getRobot();
  indiceRobot--; //resto el indice
  if (indiceRobot < 0) {
    indiceRobot = robots.length - 1;
    insertarRobot();
  } else {
    insertarRobot();
  }
};
