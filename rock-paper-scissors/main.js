const OPTIONS = ['rock', 'scissors', 'paper'];
let playerScore = 0;
let computerScore = 0;
let winner = '';

function game(maxRounds = 5) {
	for (let i = 0; i < maxRounds; i++) {
		console.log(playRound(prompt('Type in your move:'), computerPlay()));
	}
	playerScore > computerScore
		? (winner = 'The Player Wins!')
		: (winner = 'The Computer Wins!');
	return console.log(
		`${winner} 

The final score is:   
Player   - ${playerScore}   
Computer - ${computerScore}`
	);
}

function computerPlay() {
	return OPTIONS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

	if (!OPTIONS.includes(playerSelection))
		// Check for Invalid input
		return 'You have entered an invalid option. Please try again.';

	if (
		// Handles scenarios where player wins
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'rock')
	)
		return handleWin(playerSelection, computerSelection);

	if (playerSelection === computerSelection) return `It's a draw, try again`;

	return handleLoss(playerSelection, computerSelection);
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
