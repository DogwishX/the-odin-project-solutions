// DONE - Set up your project with a HTML, CSS and Javascript files and get the Git repo all set up.

// DONE - You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself.

// DONE - Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

// DONE - Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s)

// DONE - Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!

// DONE - Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!

// DONE -  Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.

// Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!
// Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!
// Start by just getting the computer to make a random legal move.
// Once you’ve gotten that, work on making the computer smart. It is possible to create an unbeatable AI using the minimax algorithm (read about it here, some googling will help you out with this one)
// If you get this running definitely come show it off in the chatroom. It’s quite an accomplishment!

const GAME = (() => {
	// Init
	function start() {
		Gameboard.render();
	}

	// Cache DOM
	const squares = document.querySelectorAll('.square');

	// Board
	const Gameboard = (() => {
		let board = ['', '', '', '', '', '', '', '', ''];

		function render() {
			for (let i = 0; i < Gameboard.board.length; i++) {
				squares[i].firstChild.textContent = Gameboard.board[i];
			}
		}

		function resetBoard() {
			Gameboard.board = ['', '', '', '', '', '', '', '', ''];
		}

		function drawOnSquare({ target }) {
			const idNumber = target.id[target.id.length - 1];
			if (target.firstChild.textContent.length === 0) {
				Gameboard.board[idNumber] = player.identifier;
				render();
				Engine.computerMove();
				Engine.checkForWin();
			}
		}

		return {
			board,
			resetBoard,
			render,
			drawOnSquare,
		};
	})();

	// Players
	const Player = {
		identifier: '',
		score: 0,
	};

	// Create Players
	const player = Object.create(Player);
	player.identifier = 'X';

	const computer = Object.create(Player);
	computer.identifier = 'O';
	// Game Engine - Detects winner

	const Engine = (() => {
		function computerMove() {
			let validMove = false;
			if (Gameboard.board.filter((item) => item.length === 0).length != 0) {
				while (!validMove) {
					let randomIndex = Math.floor(Math.random() * 9);

					if (Gameboard.board[randomIndex].length === 0) {
						Gameboard.board[randomIndex] = computer.identifier;
						Gameboard.render();
						validMove = true;
					}
				}
			}
		}

		function checkForWin() {
			// First column
			if (
				Gameboard.board[0] === Gameboard.board[3] &&
				Gameboard.board[0] === Gameboard.board[6] &&
				Gameboard.board[0].length !== 0
			) {
				return handleWin(0);
			}

			// Second Column
			if (
				Gameboard.board[1] === Gameboard.board[4] &&
				Gameboard.board[1] === Gameboard.board[7] &&
				Gameboard.board[1].length !== 0
			) {
				return handleWin(1);
			}

			// Third Column
			if (
				Gameboard.board[2] === Gameboard.board[5] &&
				Gameboard.board[2] === Gameboard.board[8] &&
				Gameboard.board[2].length !== 0
			) {
				return handleWin(2);
			}

			// First row
			if (
				Gameboard.board[0] === Gameboard.board[1] &&
				Gameboard.board[0] === Gameboard.board[2] &&
				Gameboard.board[0].length !== 0
			) {
				return handleWin(0);
			}

			// Second Row
			if (
				Gameboard.board[3] === Gameboard.board[4] &&
				Gameboard.board[3] === Gameboard.board[5] &&
				Gameboard.board[3].length !== 0
			) {
				return handleWin(3);
			}

			// Third Row
			if (
				Gameboard.board[6] === Gameboard.board[7] &&
				Gameboard.board[6] === Gameboard.board[8] &&
				Gameboard.board[6].length !== 0
			) {
				return handleWin(6);
			}

			// Top Left to bottom Right diagonal
			if (
				Gameboard.board[0] === Gameboard.board[4] &&
				Gameboard.board[0] === Gameboard.board[8] &&
				Gameboard.board[0].length !== 0
			) {
				return handleWin(0);
			}

			if (
				Gameboard.board[2] === Gameboard.board[4] &&
				Gameboard.board[2] === Gameboard.board[6] &&
				Gameboard.board[2].length !== 0
			) {
				return handleWin(2);
			}

			if (Gameboard.board.filter((item) => item.length === 0).length === 0) {
				return console.log('draw');
			}
		}

		function handleWin(index) {
			Gameboard.board[index] === computer.identifier
				? console.log('The computer is the Winner')
				: console.log('You won!');
		}

		return {
			checkForWin,
			computerMove,
		};
	})();

	// Bind events to functions
	squares.forEach((square) =>
		square.addEventListener('click', Gameboard.drawOnSquare, true)
	);

	return { start, player, computer };
})();

GAME.start();
