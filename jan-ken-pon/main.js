const OPTIONS = ['rock', 'scissors', 'paper'];
let playerScore = 0;
let computerScore = 0;
let winner = '';

// Game Initiation

function game(rounds = 5) {
	loopRounds(rounds);
	determineWinner();
	return endGameMessage();
}

function loopRounds(rounds) {
	for (let i = 0; i < rounds; i++) {
		console.log(playRound(prompt('Type in your move:'), computerMove()));
	}
}

function determineWinner() {
	playerScore > computerScore
		? (winner = 'The Player Wins!')
		: playerScore === computerScore
		? (winner = `It's a draw!`)
		: (winner = 'The Computer Wins!');
}

function endGameMessage() {
	return console.log(
		`${winner} 

The final score is:   
Player   - ${playerScore}   
Computer - ${computerScore}`
	);
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

	if (!isInputValid(playerSelection))
		return 'You have entered an invalid option. Please try again.';

	if (playerWin(playerSelection, computerSelection))
		return handleWin(playerSelection, computerSelection);

	if (playerSelection === computerSelection) return `It's a draw, try again`;

	return handleLoss(playerSelection, computerSelection);
}

function computerMove() {
	return OPTIONS[Math.floor(Math.random() * 3)];
}

function isInputValid(playerSelection) {
	return OPTIONS.includes(playerSelection) ? true : false;
}

function playerWin(playerSelection, computerSelection) {
	return (playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'rock')
		? true
		: false;
}

function handleWin(playerSelection, computerSelection) {
	playerScore++;
	return `You won! ${capitalize(playerSelection)} beats ${capitalize(
		computerSelection
	)}`;
}

function handleLoss(playerSelection, computerSelection) {
	computerScore++;
	return `You lost! ${capitalize(computerSelection)} beats ${capitalize(
		playerSelection
	)} Try again`;
}

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}
