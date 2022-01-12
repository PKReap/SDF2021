/*jshint esversion: 6 */
const { expect } = require("chai");
const  { charBlocker } = require("../src/processors/charBlocker");

describe("k-blocker function tests", () => {
  const sample = [
    { text: "k", expected: "" },
    { text: "ak", expected: "a" },
    { text: "ak1", expected: "a1" },
    { text: "kkkk", expected: "" },
    { text: "a&k", expected: "a&" },
    { text: "ab", expected: "ab" },
    { text: "", expected: "" },
  ];

  sample.forEach(({ text, expected }) => {
    it(`correctly removes all k for ${text}`, () => {
      const blocker = charBlocker("k");
      const result = blocker(text);
      expect(result).to.eql(expected);
    });
  });
});
