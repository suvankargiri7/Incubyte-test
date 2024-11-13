const stringCal = (input) => {
  if (input === "") return 0;
  const numbers = input.split(new RegExp("[\n,]")).map(num => parseInt(num));
  return numbers.reduce((sum, number) => sum + number, 0);
};

module.exports = stringCal;
