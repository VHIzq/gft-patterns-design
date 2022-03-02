class Subject{
  
  constructor(){
    this.observers = [];
  }

  subscribe(obs){ 
    this.observers.push(obs);
  }

  unscribe(obs){
    this.observers = this.observers.filter(e => e !== obs);
  }

  notify(obj){
    this.observers.forEach(obs => {
      obs.notify(obj);
    })
  }
};
