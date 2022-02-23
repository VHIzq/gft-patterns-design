/* 
*Patrón prototipo: Permite crear objetos que pueden ser usados como
*modelos en otros objetos.
*/

function Persona(name, lastName = "Gris"){
  this.name = name;
  this.lastName = lastName;
};

const persona = new Persona("VHMI");
console.log(persona);


Persona.prototype.fullName = function(){
  return `${this.name} ${this.lastName}`;
}

console.log(persona.fullName())