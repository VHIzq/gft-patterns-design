let id = (id) => document.getElementById(id);
const $chatIcon = id("chat-icon");
const $form = id("form");
const participants = [];
let $users = document.querySelectorAll('input[type=checkbox]');

function subscribeUsers() {

  $users.forEach(user => {

    user.addEventListener("change", (evt) => {
      evt.target.checked ? addUser() : null;
    });

    function addUser() {
      participants.push(user);
      console.log("User added");
    }
  });
  console.log(participants);
}

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  class Observable{

  constructor(){
    this.suscriptors = [];
  }

  subscribeUsers


  dettach(o){
    this.suscriptors = this.suscriptors.filter( s => s !== o);
  }

  notify(){
    for(let suscriptor of this.suscriptors){
      suscriptor.update();
    }
  }
};

class Observer{

  constructor(user){
    this.user = user;
    console.log(`Creating the user ${this.user}`);
  }
  update(){
    $chatIcon.style.visibility = "visible"
    console.log(`The user: ${this.user} has been notified`);
    /* implement logic for change visibilit from chat icons */
  }
};

let meeting = new Observable();
/*
let guest1 = new Observer("Kitagawa");
let guest2 = new Observer("Sayu");
let guest3 = new Observer("Yoshida") */

/* meeting.attach(guest1);
meeting.attach(guest2);
meeting.attach(guest3); */


meeting.notify();

});
