let id = (id) => document.getElementById(id);

const $chat1 = id("chat1");
const $chat2 = id("chat2");
const $chat3 = id("chat3");
const $chat4 = id("chat4");
const $form = id("form");
const $message = id("message");

let $Observers = document.querySelectorAll('input[type=checkbox]');

/* add observers */
function suscribeObservers() {
  const observers = []

  $Observers.forEach(obs => {
    obs.addEventListener("change", (evt) => {
      evt.target.checked ? addObserver() : null;
    });

    function addObserver() {
      observers.push(obs);
      console.log("Observer added");
    }
  });
  console.log(observers);
};

suscribeObservers();

$form.addEventListener("submit", (e) => {
  e.preventDefault();

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
    this.observers.forEach(obs => {
      obs.update(model);
    })
  }
};

class MessageSubject extends Subject{

  constructor(){
    super();
    this.message = "";
  }

  notify(message){
    this.message = message;
    super.notify(this);
  }
};

class ChatObserver1{
  update(subject){
    subject ? $chat1.style.visibility = "visible" : null;
  }
};
class ChatObserver2{
  update(subject){
    subject ? $chat2.style.visibility = "visible" : null;
  }
};
class ChatObserver3{
  update(subject){
    subject ? $chat3.style.visibility = "visible" : null;
  }
};
class ChatObserver4{
  update(subject){
    subject ? $chat4.style.visibility = "visible" : null;
  }
};



let messageSubject = new MessageSubject();

let chatObserver1 = new ChatObserver1();
let chatObserver2 = new ChatObserver2();
let chatObserver3 = new ChatObserver3();
let chatObserver4 = new ChatObserver4();

messageSubject.subscribe(chatObserver1);
messageSubject.subscribe(chatObserver2);
messageSubject.subscribe(chatObserver3);
messageSubject.subscribe(chatObserver4);

$message.addEventListener("input", evt => {
  messageSubject.notify(evt.target.value);
})

});
