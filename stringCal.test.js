const stringCal = require("./stringCal");

test("should return 0 for an empty string", () => {
  expect(stringCal("")).toBe(0);
});

test('should return the number if only one number is provided', () => {
  expect(stringCal("10")).toBe(10);
});

test('should return the sum of two numbers separated by a comma', () => {
  expect(stringCal("1,5")).toBe(6);
});

test('should return the sum of any multiple numbers separated by commas', () => {
  expect(stringCal("1,5,5")).toBe(11);
});

test('should allow new lines between numbers', () => {
  expect(stringCal("1\n2,3")).toBe(6);
});

test('should support different delimiters', () => {
  expect(stringCal("//;\n1;2")).toBe(3);
});

test('should throw an error if negative numbers are there', () => {
  expect(() => stringCal("5,-6,7,-8")).toThrow("negative numbers not allowed -6,-8");
});



