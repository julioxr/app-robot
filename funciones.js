// ESTA FUNCION FETCH LLAMA AL ARCHIVO QUE SE NECESITE REEMPLAZAR EN EL HTML MAIN
const cargarPagina = async (pagina) => {
  let archivoHtml = `${pagina}.html`;
  return fetch(archivoHtml)
    .then((res) => res.text())
    .then((data) => data);
};

// if (location.pathname == "/perfil-robot") {
//   let avatarRobot = document.getElementById("avatarRobot");
//   console.log(avatarRobot);
// }

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

const crearSliderRobot = async (indiceRobot) => {
  // LLAMO A ROBOT
  let robots = await getRobot();
  // CREO VARIABLES
  let imagenRobot = document.getElementById("imagenRobot");
  let tituloRobot = document.getElementById("tituloRobot");
  let typeRobot = document.getElementById("typeRobot");
  let descriptionRobot = document.getElementById("descriptionRobot");
  //INSERTO CONTENIDO A VARIABLES
  insertarRobot(robots, indiceRobot);

  //ESCUCHO LAS FLECHAS
  window.addEventListener("click", (e) => {
    if (e.target.id === "arrowRight") {
      indiceRobot++;
      if (indiceRobot == robots.length) {
        indiceRobot = 0;
        insertarRobot(robots, indiceRobot);
      } else {
        insertarRobot(robots, indiceRobot);
      }
      // crearPerfil(robots, indice)
      // crearEstadisticas(robots, indice)
    } else if (e.target.id === "arrowLeft") {
      indiceRobot--; //resto el indice
      if (indiceRobot < 0) {
        indiceRobot = robots.length - 1;
        insertarRobot(robots, indiceRobot);
        // crearPerfil(robots, indiceRobot)
        // crearEstadisticas(robots, indiceRobot)
      } else {
        insertarRobot(robots, indiceRobot);
      }
    }
  });

  //ESCUCHO EL BOTON DE VER FICHA
  window.addEventListener("click", async (e) => {
    if (e.target.id == "fileRobotBtn") {
      history.pushState(null, "", "perfil-robot");
      let perfilRobot = await cargarPagina("perfil-robot"); // llama a la pagina perfilRobot una vez que cargo puedo crear variables
      main.innerHTML = perfilRobot; // y puedo insertar contenido

      let avatarRobot = document.getElementById("avatarRobot");
      let avatarName = document.getElementById("avatarName");
      let avatarType = document.getElementById("avatarType");
      let avatarDescription = document.getElementById("avatarDescription");

      // console.log(avatarType);
      // console.log(avatarDescription);
      avatarRobot.src = robots[indiceRobot][0].perfilImg;
      avatarName.textContent = robots[indiceRobot][0].name;
      avatarType.textContent = robots[indiceRobot][0].type;
      avatarDescription.innerText = robots[indiceRobot][0].description;

      // console.log(avatarRobot);
      header.classList.add("display__none");
      // cargarPagina("perfil-robot");
    }
    if (e.target.id === "backBtn") {
      history.pushState(null, "", "home");
      header.classList.remove("display__none");
      let paginaInicial = await cargarPagina("home");
      main.innerHTML = paginaInicial;
      crearSliderRobot(indiceRobot);
    }
  });
};

const insertarRobot = (robots, indiceRobot) => {
  // console.log(indiceRobot);
  imagenRobot.src = robots[indiceRobot][0].preview;
  tituloRobot.textContent = robots[indiceRobot][0].name;
  typeRobot.textContent = robots[indiceRobot][0].type;
  descriptionRobot.textContent = robots[indiceRobot][0].description;
};

crearPerfil = (indiceRobot) => {
  //ESTO YA NO ES UN TEMPLATE AHORA ESTA DENTRO DEL CODIGO
  // perfilRobot.innerHTML = `
  //   <div id="sliderElement">
  //        <img class="image__robot" src="${robots[indiceRobot][0].src}" alt="robot">
  //               <div class ="text__robot__slider">
  //                   <h2 class="robot__name title">${robots[indiceRobot][0].name}</h2>
  //                   <h3 class="s__work">${robots[indiceRobot][0].type}</h3>
  //                   <p class="description__text">${robots[indiceRobot][0].description}</p>
  //               </div>
  //   </div>
  //   `
};

// capturarEventoArrow(robots, indiceRobot)

// obtenerCircunsferencia()

// ESTA LLAMADA CARGA EL PERFIL ROBOT, ANTES SE EJECUTABA AUTOMATICAMENTE DENTRO DE OBTENER DATOS BAJO EL NOMBRE capturarEventoBotonVerFicha()
// window.addEventListener('click', e => {
// 	e.preventDefault()
// 	e.stopPropagation() parte a borrar

// })

// energy = robots[indiceRobot][0].statistics[0].energy[0].value,
// maintenance = robots[indiceRobot][0].statistics[0].maintenance[0].value,
// complexity = robots[indiceRobot][0].statistics[0].complexity[0].value,
// security = robots[indiceRobot][0].statistics[0].security[0].value

ESTA FUNCION ES PARA EL CARRUSEL DEL HOME PUEDA ROTAR
// const capturarEventoArrow = (robots, indice) => {

// }
