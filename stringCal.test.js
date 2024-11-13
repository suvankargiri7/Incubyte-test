const StringCal = require("./stringCal");

const stringCal = new StringCal();

test("should return 0 for an empty string", () => {
  expect(stringCal.add("")).toBe(0);
});

test("should return the number if only one number is provided", () => {
  expect(stringCal.add("10")).toBe(10);
});

test("should return the sum of two numbers separated by a comma", () => {
  expect(stringCal.add("1,5")).toBe(6);
});

test("should return the sum of any multiple numbers separated by commas", () => {
  expect(stringCal.add("1,5,5")).toBe(11);
});

test("should allow new lines between numbers", () => {
  expect(stringCal.add("1\n2,3")).toBe(6);
});

test("should support different delimiters", () => {
  expect(stringCal.add("//;\n1;2")).toBe(3);
});

test("should throw an error if negative numbers are there", () => {
  expect(() => stringCal.add("5,-6,7,-8")).toThrow(
    "negative numbers not allowed -6,-8"
  );
});
