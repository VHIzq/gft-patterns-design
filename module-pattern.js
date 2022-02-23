/* 
*Patrón módulo:
*Permite encapsular la lógica para solucionar un problema.
*/

const service = {
  url: "https://jsonplaceholder.typicode.com/users",
  getUsers: () => {
    return fetch(service.url);
  }
};

  
  