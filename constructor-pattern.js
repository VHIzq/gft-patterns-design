/* 
*Patrón constructor:
*Permite crear objetos, inicializar atributos:
*/

class Trainee{
  constructor(name, lastname, age, email){
    this.name = name ||null;
    this.lastname = lastname || null;
    this.age = age || 0;
    this.email = email || null;
  }
  
  setName(name){
    this.name = name;
    /* el return sirve para retornar valores y dar pie al siguiente método
    concatenarlo
    */
    return this;
  }
  setLastName(lastname){
    this.lastname = lastname;
    return this;
  }
  setAge(age){
    this.age = age;
    return this;
  }
  setEmail(email){
    this.email = email;
  }

  setTrainee(name, lastname, age = 20, email){
    this.name = name ||null;
    this.lastname = lastname || null;
    this.age = age || 0;
    this.email = email || null;
  };

  me(){
    return {
      name: this.name,
      lastname: this.lastname,
      age: this.age,
      email: this.email,
    };
  }
}
/* 
const Gera = new Persona()
  .setName("Gera")
  .setLastName("Mtz")
  .setAge("28")
  .setEmail("gera.mtz@demo.com"); */

  const frida = new Trainee()
  frida.name = "Frida",
  frida.lastname = "Rodriguez"

console.log(frida.me());
