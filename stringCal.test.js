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

