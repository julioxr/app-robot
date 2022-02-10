// CREO VARIABLES ACCESIBLES DESDE EL INDEX
let header = document.getElementById("header");
let main = document.getElementById("main");
let indiceRobot = 0;

//ESTA FUNCION CARGA EL HOME APENAS SE CARGA LA WEB EJECUTA EL HOME Y EL ROBOT
window.addEventListener("load", async () => {
  let paginaInicial = await cargarPagina("home");
  main.innerHTML = paginaInicial;
  // let arrowRight = document.getElementById("arrowRight");
  // let arrowLeft = document.getElementById("arrowLeft");
  crearSliderRobot();

  window.addEventListener("click", async (e) => {
    switch (e.target.id) {
      case "arrowRight":
        navegarDerecha();
        break;
      case "arrowLeft":
        navegarIzquierda();
        break;
      case "fileRobotBtn":
        accederPerfilRobot();
        break;
      default:
        break;
    }
  });
});
