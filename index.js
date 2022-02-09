// CREO VARIABLES ACCESIBLES DESDE EL INDEX
let header = document.getElementById("header");
let main = document.getElementById("main");
let indiceRobot = 0;

//ESTA FUNCION CARGA EL HOME APENAS SE CARGA LA WEB EJECUTA EL HOME Y EL ROBOT
window.addEventListener("load", async () => {
  let paginaInicial = await cargarPagina("home");
  // console.log(paginaInicial);
  main.innerHTML = paginaInicial;
  crearSliderRobot(indiceRobot);
});

// window.addEventListener("change", () => {
//   console.log(location.pathname);
//   switch (location.pathname) {
//     case "/":
//       crearSliderRobot(indiceRobot);

//       break;
//     case "/perfil-robot":
//       // ejecutar las funciones que necesite
//       console.log("entreaste al perfil");
//       break;
//     default:
//       break;
//   }
// });
