
class Observable{

  constructor(){
    this.suscriptors = [];
  }

  attach(o){
    this.suscriptors.push(o);
    console.log("usuario agregado");
  }

  dettach(o){
    this.suscriptors = this.suscriptors.filter(s => s !== o);
    console.log("El usuario ha sido eliminado");
  }

  notify(evt){
    this.suscriptors.forEach(s => console.log(evt));
  }
};

class Observer{

  constructor(nombre){
    this.nombre = nombre;
    console.log(`Creando al prota: ${this.nombre}.`);
  }

  update(evt){
    console.log(`El usuario ${this.nombre} se ha enterado de ${evt}`);
  }
}

let channel = new Observable();

console.log("FIrst mission");
let us1 = new Observer("Mitsuha");
let us2 = new Observer("Taki");

channel.attach(us1);
channel.attach(us2);

channel.notify();
console.log("Protas:", channel.suscriptors);

us1.update("Salvar Tokio")
us2.update("Salvar Tokio")

let us3 = new Observer("Tsubara");
channel.attach(us3);

channel.notify();
us3.update("Ayudar a Mai")
console.log("Protas", channel.suscriptors);