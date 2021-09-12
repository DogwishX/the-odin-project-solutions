function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function reverseString(string) {
  let answer = [];
  for (letter of string) {
    answer.unshift(letter);
  }
  return answer.join("");
}

const calculator = {
  add: (...nums) =>
    nums.reduce((prevNum, currentNum) => prevNum + currentNum, 0),
  subtract: (...nums) =>
    nums.sort((a, b) => b - a).reduce((sum, num) => (sum -= num)),

  divide: (...nums) => nums.reduce((result, num) => (result /= num)),
  multiply: (...nums) => nums.reduce((result, num) => (result *= num)),
};

function caeserCipher(string, displacement) {
  let answer = "";
  for (letter of string) {
    let charCode = letter.charCodeAt();
    let punctuationRegex = /([^\w])/g;

    if (letter == "z") {
      answer += "a";
      continue;
    }
    if (punctuationRegex.test(letter)) {
      answer += letter;
      continue;
    }

    answer += String.fromCharCode(charCode + displacement);
  }
  return answer;
}

function analyze(arr) {
  const obj = {
    average: calculator.add(...arr) / arr.length,
    length: arr.length,
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
  return obj;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caeserCipher,
  analyze,
};
