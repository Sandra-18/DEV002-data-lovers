import data from "./data/harrypotter/data.js";
import {personajes,
        ids
        } 
from './data.js';
let characters = data.characters;
//almacenamos la Data de lo que vamos a ver en pantalla
let person_param = personajes(characters);
let ids_param = ids(characters);
//seleccionamos las secciones del DOM
const sMain_acceso = document.querySelector("#sMagosHechizos"),
      sLibrosMain_Acceso = document.querySelector("#sLibrosMain"),
      sPersonajesMain_Acceso = document.querySelector("#sPersonajesMain"),
      sHechizosMain_acceso = document.querySelector("#sHechizosMain"),
      sPosionesMain_acceso = document.querySelector("#sPosionesMain"),    
      nav_acesso = document.querySelector("#menu-navegacion");
//DIV contenedores de tarjetas
const sContainerSectionPersonajes = document.querySelector(".sSizePersonajes");
      
      
//capturamos los botones de la pagina principal
const sBtnCaptura_Libros = document.querySelector("#sBtnLibros"),
      sBtnCaptura_Personajes = document.querySelector("#sBtnPersonajes"),
      sBtnCaptura_Hechizos = document.querySelector("#sBtnHechizos"),
      sBtnCaptura_Posiones = document.querySelector("#sBtnPosiones");
//capturamos los botones que navegan en el NAV
const capturaBtnVolver = document.querySelector("#sBtnMenuPrincipalNav"),
      capturaBtnLibros = document.querySelector("#sBtnLibrosNav"),
      capturaBtnPersonajes = document.querySelector("#sBtnPersonajessNav"),
      capturaBtnHechizos = document.querySelector("#sBtnHechizosNav"),
      capturaBtnPosiones = document.querySelector("#sBtnPosionesNav");
//Ejecuciones de eventos botones NAV
capturaBtnLibros.addEventListener("click", () => {
    sLibrosMain_Acceso.classList.add("sLibrosMainAparecer");
    sPersonajesMain_Acceso.classList.remove("sPersonajesMainAparecer");
    sHechizosMain_acceso.classList.remove("sHechizosMainAparecer");
    sPosionesMain_acceso.classList.remove("sPosionesMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
});
capturaBtnPersonajes.addEventListener("click", () => {
    sPersonajesMain_Acceso.classList.add("sPersonajesMainAparecer");
    sLibrosMain_Acceso.classList.remove("sLibrosMainAparecer");
    sHechizosMain_acceso.classList.remove("sHechizosMainAparecer");
    sPosionesMain_acceso.classList.remove("sPosionesMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
});
capturaBtnHechizos.addEventListener("click", () => {
    sHechizosMain_acceso.classList.add("sHechizosMainAparecer");
    sLibrosMain_Acceso.classList.remove("sLibrosMainAparecer");
    sPersonajesMain_Acceso.classList.remove("sPersonajesMainAparecer");
    sPosionesMain_acceso.classList.remove("sPosionesMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
});
capturaBtnPosiones.addEventListener("click", () =>{
    sPosionesMain_acceso.classList.add("sPosionesMainAparecer");
    sLibrosMain_Acceso.classList.remove("sLibrosMainAparecer");
    sPersonajesMain_Acceso.classList.remove("sPersonajesMainAparecer");
    sHechizosMain_acceso.classList.remove("sHechizosMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
});
capturaBtnVolver.addEventListener("click", () => {
    sMain_acceso.classList.remove("sMainPrincipal");
    sLibrosMain_Acceso.classList.remove("sLibrosMainAparecer");
    sPersonajesMain_Acceso.classList.remove("sPersonajesMainAparecer");
    sHechizosMain_acceso.classList.remove("sHechizosMainAparecer");
    sPosionesMain_acceso.classList.remove("sPosionesMainAparecer");
    nav_acesso.classList.remove("sNavMainAparecer");
});
//Ejecuciones de Eventos botones imagenes main
sBtnCaptura_Libros.addEventListener("click", ()=>{
    sLibrosMain_Acceso.classList.add("sLibrosMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
    sMain_acceso.classList.add("sMainPrincipal")
});
sBtnCaptura_Personajes.addEventListener("click", () => {
    sPersonajesMain_Acceso.classList.add("sPersonajesMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
    sMain_acceso.classList.add("sMainPrincipal");
});
sBtnCaptura_Hechizos.addEventListener("click", () => {
    sHechizosMain_acceso.classList.add("sHechizosMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
    sMain_acceso.classList.add("sMainPrincipal");
});
sBtnCaptura_Posiones.addEventListener("click", () => {
    sPosionesMain_acceso.classList.add("sPosionesMainAparecer");
    nav_acesso.classList.add("sNavMainAparecer");
    sMain_acceso.classList.add("sMainPrincipal");
});

const person = (human_New_param) => {
    human_New_param = person_param;
    for(let iteracion = 0; iteracion < human_New_param.length; iteracion++){
        if(iteracion === 102){
            break;
        }
        let personajes_ya_iterados = human_New_param[iteracion];
        let creacionDiv = document.createElement("div"),
            creacionFigure = document.createElement("figure"),
            creacionH2 = document.createElement("h2");
            creacionDiv.classList.add("tarjetasPersonajes")
            creacionH2.classList.add("HarryP")
            creacionFigure.innerHTML = `<img src="img/profile.png">`;

        sPersonajesMain_Acceso.appendChild(sContainerSectionPersonajes);
        sContainerSectionPersonajes.appendChild(creacionDiv);
        creacionDiv.appendChild(creacionFigure);
        creacionDiv.appendChild(creacionH2);
        creacionH2.textContent = `${personajes_ya_iterados.name}`;
    }
}
person();












 


