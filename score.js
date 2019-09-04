var playerOneButton = document.getElementById("p1");
var p1Display = document.getElementById("p1Display");
var playerOneScore = 0;

var playerTwoButton = document.querySelector("#p2");
var p2Display = document.querySelector("#p2Display");
var playerTwoScore = 0;

var resetButton = document.querySelector("#reset");
var gameOver = false; 
var winningScore = 5;

var numInput = document.querySelector("input");
var gamesNumber = document.querySelector("p span");

playerOneButton.addEventListener("click", function() {
	if (!gameOver) {
		playerOneScore++;
		if (playerOneScore === winningScore) {
			p1Display.className += "winner";
			gameOver = true;
		}
		p1Display.textContent = playerOneScore;
	}
});

playerTwoButton.addEventListener("click", function() {
	if (!gameOver) {
		playerTwoScore++;
		if (playerTwoScore === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = playerTwoScore;
	}
});

resetButton.addEventListener("click", reset);

numInput.addEventListener("change", function() {
	gamesNumber.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

function reset () {
	playerOneScore = 0;
	p1Display.textContent = 0;
	p1Display.classList.remove("winner");

	playerTwoScore = 0;
	p2Display.textContent = 0;
	p2Display.classList.remove("winner");

	gameOver = false;
}