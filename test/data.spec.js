import {personajes,ids} from '../src/data.js';
import data from "../src/data/harrypotter/data.js";
const characters = data.characters;

describe('filtro de caracteristicas', () => {
  it("is a function", () => {
    expect(typeof personajes).toBe("function");
  });

  it('devuelve humanos', () => {
    expect(personajes(characters).length).toBe(589);
  });

  it('devuelve identificacion', () => {
    expect(ids(characters).length).toBe(707);
  });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
});
