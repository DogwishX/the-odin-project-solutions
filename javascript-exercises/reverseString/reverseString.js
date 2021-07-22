const reverseString = function (str) {
	let arr = str.split('');
	let reversedArr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		reversedArr.push(arr[i]);
	}
	return reversedArr.join('');
};

module.exports = reverseString;
