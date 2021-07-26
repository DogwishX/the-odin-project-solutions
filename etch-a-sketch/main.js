let divsPerSide = 1;

function start() {
	divsPerSide = prompt('How many squares do you want per side?');
	if (divsPerSide > 100 || divsPerSide <= 0)
		return alert('Please pick a number between 0 and 100');
	draw();
}

function draw() {
	createDivs();
	resizeDivs();
	listenHover();
}

function createDivs() {
	let container = document.querySelector('#div__container');
	for (let i = 0; i < divsPerSide * divsPerSide; i++) {
		let div = document.createElement('div');
		div.classList.add('sqr-div');
		container.appendChild(div);
	}
}

function resizeDivs() {
	let root = document.querySelector(':root');
	let newSize = 500 / divsPerSide;
	root.style.setProperty('--grid-col-size', `${newSize}px`);
	root.style.setProperty('--divs-per-side', `${divsPerSide}`);
}

function listenHover() {
	let divs = document.querySelectorAll('.sqr-div');
	divs.forEach((div) => {
		div.addEventListener('mouseover', changeDivColor);
	});
}

function changeDivColor() {
	if (this.style.backgroundColor.length === 0)
		this.style.backgroundColor = randomColor();
	// console.log(this.style.backgroundColor);
}

function randomColor() {
	return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(
		255
	)})`;
}

function randomNumber(max) {
	return Math.floor(Math.random() * max);
}
