var scorePlayer1 = 0;
var bonusPlayer1 = 0;
var penaltyPlayer1 = 0;
var scorePlayer2 = 0;
var bonusPlayer2 = 0;
var penaltyPlayer2 = 0;
var minScoreToWin = 20;
var dicePlayer1 = document.getElementById("dice-player1");
var diceResultPlayer1 = document.getElementById("dice-result-player1");
var dicePlayer2 = document.getElementById("dice-player2");
var diceResultPlayer2 = document.getElementById("dice-result-player2");
var scorePlayer1 = 0;
var bonusPlayer1 = 0;
var penaltyPlayer1 = 0;
var scorePlayer2 = 0;
var bonusPlayer2 = 0;
var penaltyPlayer2 = 0;
var minScoreToWin = 20;
var dicePlayer1 = document.getElementById("dice-player1");
var diceResultPlayer1 = document.getElementById("dice-result-player1");
var dicePlayer2 = document.getElementById("dice-player2");
var diceResultPlayer2 = document.getElementById("dice-result-player2");

var sixSound = new Audio("six-sound.mp3");

function rollDice(player) {
	// Generar un número aleatorio entre 1 y 6 (simulando el resultado de un dado)
	var randomNumber = Math.floor(Math.random() * 6) + 1;

	// Calcular la bonificación o penalización si se saca un 6 o un 1
	if (randomNumber === 6) {
		if (player === 1) {
			bonusPlayer1 += 10;
			var bonusElement = document.getElementById("bonus-player1");
			bonusElement.innerHTML = bonusPlayer1;
		} else {
			bonusPlayer2 += 10;
			var bonusElement = document.getElementById("bonus-player2");
			bonusElement.innerHTML = bonusPlayer2;
		}
		sixSound.play();
	} else if (randomNumber === 1) {
		if (player === 1) {
			penaltyPlayer1 += 5;
			var penaltyElement = document.getElementById("penalty-player1");
			penaltyElement.innerHTML = penaltyPlayer1;
		} else {
			penaltyPlayer2 += 5;
			var penaltyElement = document.getElementById("penalty-player2");
			penaltyElement.innerHTML = penaltyPlayer2;
		}
	}

	// Actualizar la puntuación acumulativa
	if (player === 1) {
		scorePlayer1 += randomNumber;
		var scoreElement = document.getElementById("score-player1");
		scoreElement.innerHTML = scorePlayer1;
		diceResultPlayer1.innerHTML = randomNumber;
	} else {
		scorePlayer2 += randomNumber;
		var scoreElement = document.getElementById("score-player2");
		scoreElement.innerHTML = scorePlayer2;
		diceResultPlayer2.innerHTML = randomNumber;
	}

	// Hacer que el dado gire antes de aterrizar
	var dice;
	var tl = gsap.timeline();
	if (player === 1) {
		dice = dicePlayer1;
	} else {
		dice = dicePlayer2;
	}
	tl.to(dice, { rotation: "-=360", duration: 0.5, ease: "none" })
		.to(dice, { y: "50px", duration: 0.2, ease: "none" })
		.to(dice, { y: "0px", duration: 0.2, ease: "none" });

	// Mostrar la última tirada en la página
	if (player === 1) {
		var lastRollElement = document.getElementById("last-roll-player1");
		lastRollElement.innerHTML = randomNumber;
	} else {
		var lastRollElement = document.getElementById("last-roll-player2");
		lastRollElement.innerHTML = randomNumber;
	}

	// Aumentar la dificultad si se alcanza la puntuación mínima para ganar
	if (scorePlayer1 >= minScoreToWin || scorePlayer2 >= minScoreToWin) {
		minScoreToWin += 10;

		var minScoreToWinElement = document.getElementById("min-score-to-win");
		minScoreToWinElement.innerHTML = minScoreToWin;
		alert("¡La dificultad ha aumentado!");
	}

	function resetGame() {
		scorePlayer1 = 0;
		bonusPlayer1 = 0;
		penaltyPlayer1 = 0;
		scorePlayer2 = 0;
		bonusPlayer2 = 0;
		penaltyPlayer2 = 0;
		minScoreToWin = 20;

		var scoreElementPlayer1 = document.getElementById("score-player1");
		scoreElementPlayer1.innerHTML = scorePlayer1;
		var bonusElementPlayer1 = document.getElementById("bonus-player1");
		bonusElementPlayer1.innerHTML = bonusPlayer1;
		var penaltyElementPlayer1 = document.getElementById("penalty-player1");
		penaltyElementPlayer1.innerHTML = penaltyPlayer1;
		var lastRollElementPlayer1 = document.getElementById("last-roll-player1");
		lastRollElementPlayer1.innerHTML = "";

		var scoreElementPlayer2 = document.getElementById("score-player2");
		scoreElementPlayer2.innerHTML = scorePlayer2;
		var bonusElementPlayer2 = document.getElementById("bonus-player2");
		bonusElementPlayer2.innerHTML = bonusPlayer2;
		var penaltyElementPlayer2 = document.getElementById("penalty-player2");
		penaltyElementPlayer2.innerHTML = penaltyPlayer2;
		var lastRollElementPlayer2 = document.getElementById("last-roll-player2");
		lastRollElementPlayer2.innerHTML = "";

		var minScoreToWinElement = document.getElementById("min-score-to-win");
		minScoreToWinElement.innerHTML = minScoreToWin;
	}
}
