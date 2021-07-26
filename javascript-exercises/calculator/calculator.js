const add = (...numbers) => [...numbers].reduce((sum, num) => sum + num);

const subtract = (...numbers) => [...numbers].reduce((sum, num) => sum - num);

const sum = (numbers) => numbers.reduce((sum, num) => sum + num, 0);

const multiply = (numbers) => numbers.reduce((sum, num) => sum * num);

const power = (base, exponent) => {
	let result = 1;
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	return result;
};

const factorial = (number) => {
	let result = 1;
	if (number === 0) return 1;

	for (let i = 1; i <= number; i++) {
		result *= i;
	}
	return result;
};

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
