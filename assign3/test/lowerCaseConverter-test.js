/*jshint esversion: 6 */
const { expect } = require("chai");
const { lowerCaseConverter } = require("../src/processors/lowerCaseConverter");

describe("lowerCaseConverter function tests", () => {
  const sample = [
    { text: "abc", expected: "abc" },
    { text: "ABC", expected: "abc" },
    { text: "aBc", expected: "abc" },
    { text: "A1C", expected: "a1c" },
    { text: "A&C", expected: "a&c" },
    { text: "", expected: "" },
  ];

  sample.forEach(({ text, expected }) => {
    it(`correctly lowercases ${text}`, () => {
      const result = lowerCaseConverter(text);
      expect(result).to.eql(expected);
    });
  });
});
