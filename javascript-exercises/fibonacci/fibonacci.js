// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
const fibonacci = (num) => {
	if (num > 0) {
		let fibArr = [0, 1];

		while (fibArr.length <= num) {
			fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
		}
		return fibArr[fibArr.length - 1];
	}
	return 'OOPS';
};

module.exports = fibonacci;
