const { expect, test } = require("@jest/globals");
const testFile = require("./testingPractice");

// Capitalize
test("Capitalize - all lowercase", () => {
  expect(testFile.capitalize("testing")).toBe("Testing");
});

test("Capitalize - random letter case", () => {
  expect(testFile.capitalize("teStIng")).toBe("Testing");
});

// Reverse String
test("Reverse String", () => {
  expect(testFile.reverseString("test1")).toBe("1tset");
});

// Calculator
//            Add
test("Calculator - Add two numbers", () => {
  expect(testFile.calculator.add(1, 2)).toBe(3);
});

test("Calculator - Add multiple numbers", () => {
  expect(testFile.calculator.add(1, 1, 1, 2)).toBe(5);
});

//            Subtract
test("Calculator - Subtract normal order", () => {
  expect(testFile.calculator.subtract(10, 2, 3)).toBe(5);
});

test("Calculator - Subtract random order", () => {
  expect(testFile.calculator.subtract(2, 3, 4)).toBe(-1);
});

//            Divide
test("Calculator - Divide", () => {
  expect(testFile.calculator.divide(2, 2, 2)).toBe(0.5);
});
//            Multiply
test("Calculator - Multiply", () => {
  expect(testFile.calculator.multiply(2, 2, 2)).toBe(8);
});

// Caeser Cipher
test("Ceaser Cipher - Basic", () => {
  expect(testFile.caeserCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});

test("Ceaser Cipher - Punctuation", () => {
  expect(testFile.caeserCipher("defEnd tHe, eAst wall of the castle!", 1)).toBe(
    "efgFoe uIf, fBtu xbmm pg uif dbtumf!"
  );
});

// Array Analysis
test("Array Aanalysis", () => {
  expect(testFile.analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
