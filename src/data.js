// estas funciones son de ejemplo

export const personajes = (characters) => {
  const PersonajesFiltrados = characters.filter(filtrados => filtrados.species === "Human");
  return PersonajesFiltrados;
};

export const ids = (characters) => {
  const almacenIds = characters.filter(identidad => typeof identidad.id ===  "number")
  return almacenIds;
};
