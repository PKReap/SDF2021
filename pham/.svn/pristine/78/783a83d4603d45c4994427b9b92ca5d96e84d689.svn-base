function getDivsors(number) {
  const numbers = [...Array(number + 1).keys()];
  return numbers.filter((num) => number % num === 0);
}

function sumDivsors(divsors) {
  return divsors.reduce((left, right) => left + right, 0);
}

function checkForPerfect(number) {
  const sum_of_divisors = sumDivsors(getDivsors(number));

  if (number * 2 === sum_of_divisors) {
    return "perfect";
  }

  return number > sum_of_divisors - number ? "deficient" : "abundant";
}

module.exports = { getDivsors, sumDivsors, checkForPerfect };
