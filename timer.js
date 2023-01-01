class Timer {
	constructor(durationInput, startButton, puaseButton, animation) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.puaseButton = puaseButton;
    if(animation){
      this.onStart = animation.onStart
      this.onTick = animation.onTick
      this.onComplete = animation.onComplete
    }


    
		this.startButton.addEventListener("click", this.start);
		this.puaseButton.addEventListener("click", this.pause);
	}

	start = () => {
    if(this.onStart){
      this.onStart();
    }
		this.timeLeft = parseFloat(this.durationInput.value);
		this.intervalId = setInterval(this.tick, 1000);
	};

	pause = () => {
		clearInterval(this.intervalId);
	};

	tick = () => {
    if(this.onTick){
      this.onTick()
    }
		this.timeLeft = this.timeLeft - 1
		this.durationInput.value = this.timeLeft
		if(this.timeLeft <= 0){
      if(this.onComplete){
        this.onComplete()
      }
      this.pause()
    } 
	};

  
}