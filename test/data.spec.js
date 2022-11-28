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


//filtar los libros por iDs
describe('libros', () => {
  it('is a function', () => {
    expect(typeof _author).toBe("function");
  });

  it('Devuelve Libros', () => {
    expect(_author(books).length).toBe(8);
  });
});


//filtar por orden Alfabetico y su reversa
describe('Orden Alfabetico', () =>{
  it('is a function', () =>{
    expect(typeof order_AZ).toBe("function")
  });

  it('Return A_Z', () =>{
    expect(order_AZ(characters)).toBe(characters)
  });
});

describe('Orden Alfabetico Reverse', () =>{
  it('is a function', () =>{
    expect(typeof order_ZA).toBe("function")
  });

  it('Return Z_A', () =>{
    expect(order_ZA(characters)).toBe(characters)
  });
});











//filtarr los hechizos



































































