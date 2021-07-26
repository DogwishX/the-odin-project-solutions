const findTheOldest = (arr) =>
	arr
		.map((person) => {
			if (!person.yearOfDeath) {
				person.yearOfDeath = 2021;
			}
			return person;
		})
		.sort((a, b) => {
			return a.yearOfBirth - a.yearOfDeath - (b.yearOfBirth - b.yearOfDeath);
		})[0];

module.exports = findTheOldest;
