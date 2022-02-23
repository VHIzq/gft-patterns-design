/* 
*Patrón constructor:
*Permite crear objetos, inicializar atributos:
*/

class Trainee{
  constructor(name, lastname, age, email){
    this._name = name ||null;
    this._lastname = lastname || null;
    this._age = age || 0;
    this._email = email || null;
  }
  
  setName(name){
    /* el return sirve para retornar valores y dar pie al siguiente método
    concatenarlo
    */
    return this._name = name;
  }
  setLastName(lastname){
    this._lastname = lastname;
  }
  setAge(age){
    this._age = age;
  }
  setEmail(email){
    this._email = email;
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

