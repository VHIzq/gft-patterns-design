/* 
*Patrón Singleton;
*Administra las instancias de una clase o función.
*Es un patrón de instancia única.
*/

function DataBaseConnection(){

  let instance = null;
  let contador = 1;

  function starting(){
    return `Connection to database: # ${contador++}`;
  }

  function createInstance(){
    if(!instance){
      instance = starting();
    }
    return instance;
  }

  function closeConnection() {
    instance = null;
    console.log("Closed Connection");
  }
  return{
    connecting: createInstance,
    clossing: closeConnection

  }
}

const connection = DataBaseConnection();
connection.connecting();
connection.connecting();
connection.connecting();