const stringCal = (input) => {
  if (input === "") return 0;
  let delimiter = ",";
  if (input.startsWith("//")) {
    const inputParts = input.split("\n");
    delimiter = inputParts[0][2];
    input = inputParts[1];
  }
  const numbers = input.split(new RegExp(`[${delimiter}\n,]`)).map(num => parseInt(num));
  const negatives = numbers.filter(number => number < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }
  return numbers.reduce((sum, number) => sum + number, 0);
};

module.exports = stringCal;
