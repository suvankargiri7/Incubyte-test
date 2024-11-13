const stringCal = (input) => {
  if (input === "") return 0;
  const numbers = input.split(",");
  return numbers.reduce((sum, number) => sum + parseInt(number), 0);
};

module.exports = stringCal;
