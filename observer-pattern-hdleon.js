
class Subject{

  constructor(){
    this.observers = [];
  }

  subscribe(o){
    this.observers.push(o);
  }

  unsubscribe(o){
    this.observers = this.observers.filter(s => s !== o);
  }

  notify(model){
    this.observers.forEach(observer => {
      observer.update(model);
    })
  }
};

class TextSubject extends Subject{

  constructor(){
    super();
    this.text = "";
  }
  
  notify(text){
    this.text = text;

    super.notify(this);
  }
};

class DivObserver{
  update(subject){
    document.getElementById("div1").innerHTML = subject.text;
  }
};
class Div2Observer{
  update(subject){
    document.getElementById("div2").innerHTML = subject.text.length;
  }
};
class Div3Observer{
  update(subject){
    if(subject.text.search("molletes") > 0){
      document.getElementById("div3").innerHTML = "Con pico de gallo";
    }else{
      document.getElementById("div3").innerHTML = "Iré por jitomates";

    }
  }
};


let textSubject = new TextSubject();
let miDiv1 = new DivObserver();
let miDiv2 = new Div2Observer();
let miDiv3 = new Div3Observer();

textSubject.subscribe(miDiv1);
textSubject.subscribe(miDiv2);
textSubject.subscribe(miDiv3);

document.getElementById("miTexto").addEventListener("input", (evt) => {
  textSubject.notify(evt.target.value);
});