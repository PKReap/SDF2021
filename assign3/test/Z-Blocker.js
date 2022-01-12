/*jshint esversion: 6 */
const { expect } = require("chai");
const  { charBlocker } = require("../src/processors/charBlocker");

describe("Z-blocker function tests", () => {
  const sample = [
    { text: "Z", expected: "" },
    { text: "aZ", expected: "a" },
    { text: "aZ1", expected: "a1" },
    { text: "ZZZZ", expected: "" },
    { text: "a&Z", expected: "a&" },
    { text: "ab", expected: "ab" },
    { text: "", expected: "" },
  ];

  sample.forEach(({ text, expected }) => {
    it(`correctly removes all Z for ${text}`, () => {
      const blocker = charBlocker("Z");
      const result = blocker(text);
      expect(result).to.eql(expected);
    });
  });
});
