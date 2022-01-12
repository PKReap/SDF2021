"use strict";
/*jshint esversion: 6 */

describe("saveWheel function's tests", () => {
  let wheelRules;

  beforeEach(() => {
    wheelRules = new WheelRules();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("saveWheel saves a default wheel", () => {
    const wheel = wheelRules.createWheel();
    saveWheel("test wheel", wheel);
    const { wheeldiameter, hubDiameter, spokesLength } = JSON.parse(
      localStorage.getItem("test wheel")
    );

    expect([wheeldiameter, hubDiameter, spokesLength]).to.eql([4, 1, 8]);
  });

  it("saveWheel throws an error if no name is provided", () => {
    const wheel = wheelRules.createWheel();

    expect(() => saveWheel("", wheel)).to.throw(
      "Name must be provided to the wheel"
    );
  });
});
