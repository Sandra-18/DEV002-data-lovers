import {
  personajes,
  personajes_No_Humanos,
  _author,
  order_AZ,
  order_ZA,
  dirtyBlood,
  pureSpecies
} from '../src/data.js';
import data from "../src/data/harrypotter/data.js";
const characters = data.characters,
      books = data.books;

//filtramos todos los humanos
describe('filtro de Humanos', () => {
  it("is a function", () => {
    expect(typeof personajes).toBe("function");
  });

  it('devuelve humanos', () => {
    expect(personajes(characters).length).toEqual(589);
  });

});
//Filtramos No Humanos
describe('filtro de no Humanos', () => {
  it("is a function", () => {
    expect(typeof personajes_No_Humanos).toBe("function");
  });

  it('devuelve no humanos', () => {
    expect(personajes_No_Humanos(characters).length).toEqual(118);
  });

<<<<<<< HEAD
});
//filtar los libros por iDs
describe('libros', () => {
  it('is a function', () => {
    expect(typeof _author).toBe("function");
  });

  it('Devuelve Libros', () => {
    expect(_author(books).length).toEqual(8);
  });
});
//filtrar por orden Alfabetico y su reversa
describe('Orden Alfabetico', () =>{
  it('is a function', () =>{
    expect(typeof order_AZ).toBe("function")
  });
  it('Return A_Z', () =>{
    expect(order_AZ(characters)).toEqual(characters)
  });
});
describe('Orden Alfabetico Reverse', () =>{
  it('is a function', () =>{
    expect(typeof order_ZA).toBe("function")
  });

  it('Return Z_A', () =>{
    expect(order_ZA(characters)).toEqual(characters)
  });
});
//Filtrar sangre pura e impura
describe('Personajes de sangre pura', () =>{
  it('is a function', () =>{
    expect(typeof pureSpecies).toBe("function")
  });
  it('personajes puros', () =>{
    expect(pureSpecies(characters).length).toEqual(69)
  });
});
describe('Personajes de sangre impura', () =>{
  it('is a function', () =>{
    expect(typeof dirtyBlood).toBe("function")
  });
  it('Personajes Impuros', () =>{
    expect(dirtyBlood(characters).length).toEqual(72)
  });
});


//filtrar los hechizos
=======

>>>>>>> 08ded8c9ec667b1e6d8c056915111878cd596316



































































