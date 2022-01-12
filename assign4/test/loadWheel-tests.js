"use strict";
/*jshint esversion: 6 */

describe("loadWheel function's tests", () => {
  let wheelRules;

  beforeEach(() => {
    wheelRules = new WheelRules();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("loadWheel loads a default wheel", () => {
    const wheel = wheelRules.createWheel();
    saveWheel("test wheel", wheel);
    const loaded = loadWheel("test wheel", wheelRules);
    const answer = [loaded.diameter, loaded.hub.diameter, loaded.spokes.length];

    expect(answer).to.eql([4, 1, 8]);
  });

  it("loadWheel throws an error if wheel doesn't exist", () => {
    expect(() => loadWheel("wheelName", wheelRules)).to.throw("wheelName has not been saved");
  });
});
