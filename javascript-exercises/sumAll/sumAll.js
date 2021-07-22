// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// ```

const sumAll = function (num1, num2) {
	if (num1 > 0 && num2 > 0 && typeof (num1 + num2) === 'number') {
		let sortedArr = [num1, num2].sort();
		let sum = 0;
		for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
			sum += i;
		}
		return sum;
	} else return 'ERROR';
};

module.exports = sumAll;
