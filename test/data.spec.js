import {
  personajes,
  ids,
  _author,
  order_AZ,
  order_ZA
} from '../src/data.js';
import data from "../src/data/harrypotter/data.js";
const characters = data.characters,
      books = data.books;

//filtar todos los personajes
describe("validacion de los iDs de characters", () =>{
  it("una funcion", () =>{
    expect(typeof ids).toBe("function")
  });

  it("la Longitud de iDs de Characters", () =>{
    expect(ids(characters).length).toBe(707);
  });
});


//filtramos todos los humanos
describe('filtro de Humanos', () => {
  it("is a function", () => {
    expect(typeof personajes).toBe("function");
  });

  it('devuelve humanos', () => {
    expect(personajes(characters).length).toBe(589);
  });

});














//filtarr los hechizos



































































