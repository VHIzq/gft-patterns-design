/* 
*Patrón decorador:
*Permite añadir más funciones a la instancias de una clase.
*/

class Developer{

  constructor(name, lastname){
    this.name= name;
    this.lastname = lastname;
    this.salario = 0;
  }
};

const programador = new Developer("Mitzuka", "Orashida");
console.log(programador);

programador.setSalario = function(salario){
  this.salario = salario;
}
programador.setSalario(2300);
console.log(programador);