/*jshint esversion: 6 */

const spellCheckerService = require("../src/spellCheckerService");
const callService = spellCheckerService.callService;
const parse = spellCheckerService.parse;
const isSpellingCorrect = spellCheckerService.isSpellingCorrect;
const expect = require("chai").expect;

describe("analyze function tests", () => {
  it("service returns some response for call", () => {
    const response = callService("testing");

    expect(response.statusCode).to.eql(200);
  });

  it("parse a true response", () => {
    expect(parse("true")).to.be.true;
  });

  it("parse a false response", () => {
    expect(parse("false")).to.be.false;
  });

  it("isSpellingCorrect calls service and parse", () => {
    const result = isSpellingCorrect("hello");

    expect(result).to.be.true;
  });

  it("isSpellingCorrect passes through the failure from service call", () => {
    spellCheckerService.callService = (word) => {
      throw new Error(`Error service could not verify the word ${word}`);
    };

    let message = "";
    try {
      isSpellingCorrect("hello");
    } catch (error) {
      message = error.message;
    }

    expect(message).to.eql("Error service could not verify the word hello");
  });
});
