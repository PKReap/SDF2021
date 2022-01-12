const { expect } = require("chai");
const {
  getDivsors,
  checkForPerfect,
  sumDivsors,
} = require("../src/checkForPerfect");

describe("checkForPerfect tests", () => {
  const getDivsorsSamples = [
    { number: 6, expected: [1, 2, 3, 6] },
    { number: 10, expected: [1, 2, 5, 10] },
    { number: 12, expected: [1, 2, 3, 4, 6, 12] },
    { number: 20, expected: [1, 2, 4, 5, 10, 20] },
  ];

  getDivsorsSamples.forEach(({ number, expected }) => {
    it(`correct gets the divisors for ${number}`, () => {
      expect(getDivsors(number)).to.eql(expected);
    });
  });

  const sumDivsorsSamples = [
    { numbers: [1, 2, 3, 6], expected: 12 },
    { numbers: [1, 2, 5, 8], expected: 16 },
    { numbers: [1, 2, 3, 4, 6, 16], expected: 32 },
    { numbers: [1, 2, 4, 5, 10, 22], expected: 44 },
  ];

  sumDivsorsSamples.forEach(({ numbers, expected }) => {
    it(`correctly sums up ${numbers}`, () => {
      expect(sumDivsors(numbers)).to.eql(expected);
    });
  });

  const checkForPerfectSamples = [
    { number: 6, expected: "perfect" },
    { number: 496, expected: "perfect" },
    { number: 10, expected: "deficient" },
    { number: 11, expected: "deficient" },
    { number: 12, expected: "abundant" },
    { number: 20, expected: "abundant" },
  ];

  checkForPerfectSamples.forEach(({ number, expected }) => {
    it(`correctly checks ${number}`, () => {
      expect(checkForPerfect(number)).to.eql(expected);
    });
  });
});
