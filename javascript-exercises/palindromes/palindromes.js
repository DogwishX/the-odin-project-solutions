const palindromes = (str) => {
	let filteredStr = str
		.split(/[\s,.!?]/g)
		.join('')
		.toLowerCase();
	let reversedStr = filteredStr.split('').reverse().join('');
	return filteredStr === reversedStr ? true : false;
};

module.exports = palindromes;
