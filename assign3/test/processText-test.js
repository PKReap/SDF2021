/*jshint esversion: 6 */
const { expect } = require("chai");

const { processText } = require("../src/processText");
const { charBlocker } = require("../src/processors/charBlocker");
const { lowerCaseConverter } = require("../src/processors/lowerCaseConverter");
const { multiplier } = require("../src/processors/multiplier");
const { upperCaseConverter } = require("../src/processors/upperCaseConverter");

describe("processText function tests", () => {
  const sample = [
    { text: "abc", blocks: [], expected: "abc" },
    { text: "ABC", blocks: [lowerCaseConverter], expected: "abc" },
    { text: "abc", blocks: [upperCaseConverter], expected: "ABC" },
    { text: "abc", blocks: [multiplier], expected: "aabbcc" },
    { text: "zbc", blocks: [charBlocker("z")], expected: "bc" },
    { text: "Zbc", blocks: [charBlocker("Z")], expected: "bc" },
    { text: "kbc", blocks: [charBlocker("k")], expected: "bc" },
    { text: "abc", blocks: [upperCaseConverter, lowerCaseConverter], expected: "abc"},
    { text: "zZk", blocks: [charBlocker("z"), charBlocker("Z"), charBlocker("k")], expected: ""},
    { text: "aBcz", blocks: [charBlocker("z"), lowerCaseConverter, upperCaseConverter], expected: "ABC"},
    { text: "11abcdabcdabcdzzaazzabcd", blocks: [upperCaseConverter, charBlocker("Z"), lowerCaseConverter], expected: "11abcdabcdabcdaaabcd"},
  ];

  sample.forEach(({ text, blocks, expected }) => {
    it(`correctly process ${text} with blocks ${blocks}`, () => {
      const result = processText(blocks, text);
      expect(result).to.eql(expected);
    });
  });
});

