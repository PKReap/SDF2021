/*jshint esversion: 6 */

const { expect } = require("chai");
const { upperCaseConverter } = require("../src/processors/upperCaseConverter");

describe("upperCaseConverter function tests", () => {
  const sample = [
    { text: "abc", expected: "ABC" },
    { text: "ABC", expected: "ABC" },
    { text: "aBc", expected: "ABC" },
    { text: "a1c", expected: "A1C" },
    { text: "a&c", expected: "A&C" },
    { text: "", expected: "" },
  ];

  sample.forEach(({ text, expected }) => {
    it(`correctly uppercases ${text}`, () => {
      const result = upperCaseConverter(text);
      expect(result).to.eql(expected);
    });
  });
});
