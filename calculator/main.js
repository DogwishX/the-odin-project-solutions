const calc = {
	// Dataset
	numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
	// Display related
	display: (num) => {
		resultDiv.textContent = num;
	},
	resetDisplay: () => {
		resultDiv.textContent = '';
	},

	// Operations
	operate: (equation) => {
		let [num1, operator, num2] = equation;
		return calc[operator]([Math.abs(num1), Math.abs(num2)]);
	},
	add: (computedNumbers) => computedNumbers.reduce((sum, num) => sum + num, 0),
	subtract: (computedNumbers) =>
		computedNumbers.reduce((sum, num) => sum - num),
	multiply: (computedNumbers) =>
		computedNumbers.reduce((sum, num) => sum * num),
	divide: (computedNumbers) => computedNumbers.reduce((sum, num) => sum / num),
};

const buttons = document.querySelectorAll('.buttons__btn');
const resultDiv = document.querySelector('#calculator__result__text');
let tempNumberStr = '';
let equation = [];

// Listen for Input
buttons.forEach((btn) => btn.addEventListener('click', handleInput, false));

function handleInput({ target }) {
	if (target.id == 'equals') {
		if (equation.length == 2) {
			// push tempStr to equation
			equation.push(tempNumberStr);
			// Operate equation
			let result = calc.operate(equation);
			// Display result
			calc.display(result);
			// Assign equation[0]
			equation = [];
			// Reset temp Str
			return (tempNumberStr = '');
		}
		return;
	}
	if (target.id === 'ac') return (equation = []);
	return runCalculations(target);
}

function runCalculations(target) {
	// 1.a) Type in Number
	if (calc.numbers.includes(target.id) && equation.length === 0) {
		// 1.b) Add number to tempStr
		tempNumberStr += target.id;
		// 1.c) Display Number
		calc.display(tempNumberStr);
		return;
	}

	// 2.b) Type Operator
	else if (equation.length == 0) {
		// 2.a) Add number to equation
		equation.push(tempNumberStr);
		// 2.c) Add operator to equation
		equation.push(target.id);
		// 2.d) Keep previous number displayed but reset tempStr
		tempNumberStr = '';
		return;
	}

	// 3.a) Type new Number
	else if (calc.numbers.includes(target.id) && equation.length <= 2) {
		// 3.b) Add new Number to tempStr
		tempNumberStr += target.id;
		// 3.c) Reset Display
		calc.resetDisplay();
		// 3.d) Display new Number
		calc.display(tempNumberStr);
	}

	// 4.a) Type Operator
	else if (equation.length <= 2) {
		// 4.b) Add new Number to equation
		equation.push(tempNumberStr);
		// 4.c) Solve equation
		let solution = calc.operate(equation);
		// 4.d) Display equation result
		calc.display(solution);
		// 4.e) Reset equation
		equation = [];
		// 4.f) Assign result to equation[0]
		equation.push(solution);
		// 4.g) Add operator to equation
		equation.push(target.id);
		// 4.h) Reset tempStr
		tempNumberStr = '';
	}
	// Back to step 3
}
