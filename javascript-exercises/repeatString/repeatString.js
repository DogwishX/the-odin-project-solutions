const repeatString = (str, repeatXtimes) => {
	if (repeatXtimes < 0) return 'ERROR';

	let finalStr = '';
	for (let i = 0; i < repeatXtimes; i++) {
		finalStr += str;
	}
	return finalStr;
};

module.exports = repeatString;
