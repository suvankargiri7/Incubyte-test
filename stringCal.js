const stringCal = (input) => {
  if (input === "") return 0;
  let delimiter = ",";
  if (input.startsWith("//")) {
    const inputParts = input.split("\n");
    delimiter = inputParts[0][2];
    input = inputParts[1];
  }
  const numbers = input.split(new RegExp(`[${delimiter}\n,]`)).map(num => parseInt(num));
  return numbers.reduce((sum, number) => sum + number, 0);
};

module.exports = stringCal;
