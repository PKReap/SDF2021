/*jshint esversion: 6 */
const { expect } = require("chai");
const  { charBlocker } = require("../src/processors/charBlocker");

describe("z-blocker function tests", () => {
  const sample = [
    { text: "z", expected: "" },
    { text: "az", expected: "a" },
    { text: "az1", expected: "a1" },
    { text: "zzzz", expected: "" },
    { text: "a&z", expected: "a&" },
    { text: "ab", expected: "ab" },
    { text: "", expected: "" },
  ];

  sample.forEach(({ text, expected }) => {
    it(`correctly removes all z for ${text}`, () => {
      const blocker = charBlocker("z");
      const result = blocker(text);
      expect(result).to.eql(expected);
    });
  });
});
