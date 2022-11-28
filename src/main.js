import data from "./data/harrypotter/data.js";
import {personajes,_author,order_AZ} from './data.js';
let characters = data.characters;
let Books = data.books;
//almacenamos la Data de lo que vemos en pantalla
let person_param = personajes(characters);
let books_param = _author(Books);
let AZ_param = order_AZ(characters);
//seleccionamos etiquetas del DOM
let sTamano_acceso = document.querySelector("#root #sSize");
let sLibrosMain_Acceso = document.querySelector("#sLibrosMain");
let sPersonajesMain_Acceso = document.querySelector("#sPersonajesMain");
let sHechizosMain_acceso = document.querySelector("#sHechizosMain");
let sPosionesMain_acceso = document.querySelector("#sPosionesMain");
//capturamos los botones
let sBtnCaptura_Libros = document.querySelector("#sBtnLibros");
let sBtnCaptura_Personajes = document.querySelector("#sBtnPersonajes");
let sBtnCaptura_Hechizos = document.querySelector("#sBtnHechizos");
let sBtnCaptura_Posiones = document.querySelector("#sBtnPosiones");
//Ejecuciones de Eventos
sBtnCaptura_Libros.addEventListener("click",() => {
    document.querySelector(".sMagosHechizos").style.display = "none"
    document.querySelector("#sLibrosMain").style.display = "block"
    document.querySelector(".menu-navegacion").style.display = "block"
});
sBtnCaptura_Personajes.addEventListener("click",() => {
    document.querySelector(".sMagosHechizos").style.display = "none"
    document.querySelector("#sLibrosMain").style.display = "block"
    document.querySelector(".menu-navegacion").style.display = "block"
});
sBtnCaptura_Hechizos.addEventListener("click",() => {
    document.querySelector(".sMagosHechizos").style.display = "none"
    document.querySelector("#sLibrosMain").style.display = "block"
    document.querySelector(".menu-navegacion").style.display = "block"
});
sBtnCaptura_Posiones.addEventListener("click",() => {
    document.querySelector(".sMagosHechizos").style.display = "none"
    document.querySelector("#sLibrosMain").style.display = "block"
    document.querySelector(".menu-navegacion").style.display = "block"
});

// const person






 


