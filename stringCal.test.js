const stringCal = require("./stringCal");

test("should return 0 for an empty string", () => {
  expect(stringCal("")).toBe(0);
});
