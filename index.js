console.log("hey there");

let timeCounter = document.querySelector(".count_down");
const start = document.querySelector(".start");
const resume = document.querySelector(".resume");

class Timer {
	constructor(durationInput, startButton, puaseButton) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.puaseButton = puaseButton;
		this.timeLeft = parseFloat(this.durationInput.value);
		console.log(`${this.timeLeft} ${typeof this.timeLeft}`);
		console.log(this);

		this.startButton.addEventListener("click", this.start);
		this.puaseButton.addEventListener("click", this.pause);
	}

	start = () => {
		this.tick();
		this.intervalId = setInterval(this.tick, 1000);
	};

	pause = () => {
		clearInterval(this.intervalId);
	};

	tick = () => {
		console.log(`tick`);
		this.timeLeft = this.timeLeft - 1
		this.durationInput.value = this.timeLeft
		console.log(this.durationInput.value);
		if(this.timeLeft === 0) this.pause()
	};
}

new Timer(timeCounter, start, resume);
