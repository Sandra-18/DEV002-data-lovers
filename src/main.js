import { personajes } from './data.js';
import data from "./data/harrypotter/data.js";
const characters = data.characters;







let btnPersonajes = document.querySelector("#sBtnPersonajes");

btnPersonajes.addEventListener("click", () =>{
  window.location.href = "personajes.html"
})





