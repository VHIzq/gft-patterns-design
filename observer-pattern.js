class Observador{

  constructor(){
    this.suscriptores = [];
  }

  suscribir(suscriptor){
    this.suscriptores.push(suscriptor);
  }

  desuscribir(suscriptor){
    this.suscriptores = this.suscriptores.filter( s => s !== suscriptor.mensaje.call(suscriptor, evt));
  }

  notificar(evt){
    this.suscriptores.forEach(suscriptor => console.log(evt));
  }
};

class Suscriptor{
  constructor(nombre){
    this.nombre = nombre;
    console.log(`Creando al suscriptor: ${this.nombre}`);
  }
  mensaje(msg){
    console.log(`El suscriptor ${this.nombre} ha sido invitado al evento: ${evt}`);
  }
}

const observador = new Observador();
const Hugo = new Suscriptor("Hugo");
const Daniela = new Suscriptor("Daniela");
const Gera = new Suscriptor("Gera");

console.log(">>>>> Primer subscripción");
observador.suscribir(Hugo);
console.log("Observador", observador.suscriptores);
observador.notificar("FIesta XV años de Ruby");


console.log(">>>>> Segunda invitación");
const Yuhiko = new Suscriptor("Yuhiko");
observador.suscribir(Yuhiko);

console.log("Suscribir:", observador.suscriptores);
observador.notificar("FIesta Gragaduación")