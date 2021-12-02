const sum = (...args) => {
  if (args.every((num) => typeof num === "number"))
    return args.reduce((a, b) => a + b);
  return "Incorrect input";
};

const TESTS = [
  {
    description: "Negative numbers",
    testArguments: [-1, -2],
    expectedResult: -3,
  },
  {
    description: "Multiple numbers",
    testArguments: [1, 2, 3],
    expectedResult: 6,
  },
  {
    description: "Different types",
    testArguments: ["1", 1],
    expectedResult: "Incorrect inxput",
  },
];

let testResult = TESTS.forEach(
  ({ description, testArguments, expectedResult }) => {
    const actualResult = functionTested(...testArguments);
    const didTestPass = actualResult === expectedResult;
    return console.log(
      `%c${description}\n\n`,
      `background: ${didTestPass ? "green" : "red"}`,
      !didTestPass
        ? `Expected: ${expectedResult}\n Got: ${actualResult}`
        : "Passed"
    );
  }
);
