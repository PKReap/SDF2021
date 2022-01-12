/*jshint esversion: 6 */

const { expect } = require("chai");
const { multiplier } = require("../src/processors/multiplier");

describe("multiplier function tests", () => {
  const sample = [
    { text: "a", expected: "aa" },
    { text: "1", expected: "11" },
    { text: "abc", expected: "aabbcc" },
    { text: "a1c", expected: "aa11cc" },
    { text: "a&c", expected: "aa&&cc" },
    { text: "", expected: "" },
  ];

  sample.forEach(({ text, expected }) => {
    it(`correctly multipliys ${text}`, () => {
      const result = multiplier(text);
      expect(result).to.eql(expected);
    });
  });
});
