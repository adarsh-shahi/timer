let timeCounter = document.querySelector(".count_down");
const start = document.querySelector(".start");
const resume = document.querySelector(".resume");


new Timer(timeCounter, start, resume, {
  onStart(){
    console.log(`timer started`);
  },
  onTick(){
    console.log(`ticking`);
  },
  onComplete(){
    console.log(`timer completed`);
  }
});
