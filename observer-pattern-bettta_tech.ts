interface Observable{
  attach(o: Observer);
  detach(o: Observer);
  notify();
};

interface Observer{
  update();
};

class YoutubeChannel implements Observable{
  private channelSubscribers: Observer[] = [];
  private lastVideoPosted: string = "";

  attach(o: Observer) {
      this.channelSubscribers.push(o);
  }

  detach(o: Observer) {
      return this.channelSubscribers = this.channelSubscribers.filter(s => s !== o);
  }

  addNewVideo(title: string){
    this.lastVideoPosted = title;
    this.notify();
    console.log("New YT video added to channel");
  }

  lastVideoTitle(){
    this.lastVideoPosted;
  }

  notify() {
      for(let suscriptor of this.channelSubscribers){
        suscriptor.update();
      } 
  }
};

class Subscriber implements Observer{ 
  private observable = null;

  constructor( observable: YoutubeChannel){
    this.observable = observable;
  }
  
  update() {
      console.log("New VIdeo Posted");
      console.log(this.observable.lastVideoTitle());
  }
};

let channel = new YoutubeChannel();
let s1 = new Subscriber(channel);
let s2 = new Subscriber(channel);

channel.attach(s1);
channel.attach(s2);

channel.addNewVideo("Video about observer pattern");