// Implement a function that takes an array and some other arguments then removes the other arguments from that array:
const removeFromArray = function (arr, ...itemsToRemove) {
	// Loop through itemsToRemove
	for (item of itemsToRemove) {
		if (arr.includes(item)) {
			// Check Index of Item in Array
			let index = arr.indexOf(item);
			// arr.splice(indexOfItem, 1)
			arr.splice(index, 1);
		}
	}
	return arr;
};

module.exports = removeFromArray;
