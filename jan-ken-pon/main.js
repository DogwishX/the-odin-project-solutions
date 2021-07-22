const OPTIONS = ['rock', 'scissors', 'paper'];
let maxScore = 5;
let playerScore = 0;
let computerScore = 0;
let winner = '';
let playerSelection = '';

// Game Initiation
listenGameStart();

function listenGameStart() {
	let buttons = document.querySelectorAll('.option-btn');

	buttons.forEach((btn) => {
		btn.addEventListener('click', ({ target }) => {
			playerSelection = target.id; // Assign playerSelection based on the id of button selected. This selection will be carried throughout the round.
			game();
		});
	});
}

function game() {
	createDOMText(playRound(playerSelection, computerMove()), '#round-result');
	createDOMText(endGameMessage(), '#score-result');
	if (playerScore === maxScore || computerScore === maxScore)
		createDOMText(determineWinner(), '#winner-result');
}

function createDOMText(text, div) {
	let parentDiv = document.querySelector(div);
	parentDiv.innerHTML = '';
	let childDiv = document.createElement('div');
	let divText = document.createElement('p');
	divText.textContent = text;
	childDiv.appendChild(divText);
	parentDiv.appendChild(childDiv);
}

function determineWinner() {
	playerScore > computerScore
		? (winner = 'The Player Wins!')
		: (winner = 'The Computer Wins!');
	return `${winner}`;
}

function endGameMessage() {
	return `The current score is:   
Player   - ${playerScore}   
Computer - ${computerScore}`;
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
	)}.`;
}

function handleLoss(playerSelection, computerSelection) {
	computerScore++;
	return `You lost! ${capitalize(computerSelection)} beats ${capitalize(
		playerSelection
	)}. 
	Try again.`;
}

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}
