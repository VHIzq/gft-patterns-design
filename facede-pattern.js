/* 
*Patrón fachada
*Abstrae funcionalidades o clases
*/

class Persona{
  constructor(){
    this.nonbre = null;
    this.apelldos = null;
    this.edad = 0;
  }
}


class Direccion{
  constructor(){
    this.estado = null;
    this.direccion = null;
    this.alcaldia = null;
    this.colonia = null;
    this.calle = null;
    this.codigoPostal = 0;
  }
}

class Empleo{
  constructor(){
    empresa = null,
    anios = 0;
  }
}

/* banco */
class Cliente{
  constructor(){
    this.persona = new Persona();
    this.direccion = new Direccion();
    this.empleo = new Empleo();
  }

  getCliente(){
    return this.persona;
  }

  setCliente(nombre, apelldos, edad){
    this.persona.nombre = nombre;
    this.persona.apelldos = apelldos;
    this.persona.edad = edad;
  }

  getDireccion(){
    return this.direccion;
  }

  getEmpleo(){
    return this-this.empleo;
  }
};

const cliente =  new Cliente();
console.log(cliente.getCliente());