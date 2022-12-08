import {
  personajes,
  personajes_No_Humanos,
  _author,
  order_AZ,
  order_ZA,
  dirtyBlood,
  pureSpecies,
  informacionPotions,
  informacionHechizos,
  buscadorDePersonajes

} from '../src/data.js';
import data from "../src/data/harrypotter/data.js";
const characters = data.characters,
      books = data.books,
      potions = data.potions,
      spells = data.spells
      

//filtramos todos los humanos
describe ('filtro de Humanos', () => {
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
 describe("filtrar Hehizos",()=>{
  it("informacion debe cumplir con ser una funcion",()=>{
    expect(typeof informacionHechizos).toBe("function");
  });
  it("filtra 305 hechizos",()=>{
    expect(informacionHechizos(spells).length).toEqual(305)
  });
 });


//filtrar las pociones 
describe('Filtrar las Pociones', () => {
  it('informacionPotions is a function', () => {
    expect(typeof informacionPotions).toBe("function");
  });

  it('Devuelve Pociones', () => {
    expect(informacionPotions(potions).length).toEqual(150);
  });
});

//Buscador de personajes
const input= [
  {
    name:"Mungo Bonham",
    gender: "Male",
    house: null
  },
  {
    name: "Clive Lundquist",
    gender: "Male",
    house: "Unknown"
  },
  {
    name: "Connolly",
    gender: "Male",
    house: null
  },
  {
    name: "Ritchie Coote",
    gender: "Male",
    house: "Gryffindor"

  },
  {
    name: "Fang",
    gender: "Male",
    house: null
  },
  { 
    name: "Euan Abercrombie",
    gender: "Male",
    house: "Gryffindor"
  },
  {
    name: "Edgar Bones",
    gender: "Male",
    house: "Hufflepuff (possibly)"
  }

]
const buscarNombreDePersonajes=[
  { 
    name: "Euan Abercrombie",
    gender: "Male",
    house: "Gryffindor"
  },
  {
    name: "Edgar Bones",
    gender: "Male",
    house: "Hufflepuff (possibly)"
  }
  ]

  

describe('Buscar nombres de personajes',()=>{
  it("buscadorDePersonajes is a function",() =>{
    expect(typeof buscadorDePersonajes).toBe("function")
  });
  it('Devuelve el nombre del persona a buscar',()=>{
    expect(buscadorDePersonajes(input,"e")).toEqual(buscarNombreDePersonajes);
  });
  
});
































































