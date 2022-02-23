/* 
*Patrón módulo:
*Permite encapsular la lógica para solucionar un problema.
*/

const service = {
 //const url = 'https://jsonplaceholder.typicode.com/users';
  getUsers: async(url) => {
    return fetch(service.url);
  }
};

const Equipo = () => {

  const integrantes = [];

  function agregarIntegrante(nombre) {
    integrantes.push(nombre);
  }

  function eliminarIntegrante(nombre){
    integrantes = integrantes.filter(integrante => integrante !== nombre);
  }

  function mostrarEquipo() {
      return integrantes;
  }

  return{
    agregar: agregarIntegrante,
    eliminar: eliminarIntegrante,
    mostrar: mostrarEquipo
  }
}

const equipo1  = Equipo();
equipo1.agregar("Hugo")
equipo1.agregar("Dani")
equipo1.agregar("Gera")
equipo1.agregar("Fri")
console.log(equipo1.mostrar());
  