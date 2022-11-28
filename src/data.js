// estas funciones son de ejemplo

export const personajes = (characters) => {
  const PersonajesFiltrados = characters.filter(filtrados => filtrados.species === "Human");
  return PersonajesFiltrados;
};

export const ids = (characters) => {
  const almacenIds = characters.filter(identidad => typeof identidad.id ===  "number")
  return almacenIds;
};

export const order_AZ = (characters) => {
  const order_All = characters.sort((a, b) => a.name.localeCompare(b.name))
  return order_All
};

export const order_ZA = (characters) =>{
  const order_All = characters.sort((a, b) => b.name.localeCompare(a.name))
  return order_All
};

export const _author = (books) => {
  const almacenAutor = books.filter(autor => typeof autor.id === "number" )
return almacenAutor;
};

// a < b -1 //a = b 0 // a > b 1