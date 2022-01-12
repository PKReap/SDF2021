"use strict";
/*jshint esversion: 6 */

describe("WheelRules's tests", () => {
  let wheelRules;
  let wheel;
  beforeEach(() => {
    wheelRules = new WheelRules();
    wheel = wheelRules.createWheel();
  });

  it("approveDiameter aproves diameter of a wheel", () => {
    expect(wheelRules.approveDiameter(5)).to.be.true;
  });

  it("approveDiameter throws error if diameter is becomes less than or equal to 0", () => {
    expect(() => wheelRules.approveDiameter(0)).to.throw(
      "Diameter of wheel must be greater than 0"
    );
  });

  it("approveDiameter rejects diameter of wheel when it is twice the size of the hub diameter", () => {
    expect(() => wheelRules.approveDiameter(2)).to.throw(
      "Hub diameter must not be greater than 1/4 the wheel diameter"
    );
  });

  it("approveHubDiameter aproves diameter of a hub", () => {
    expect(wheelRules.approveHubDiameter(0.25)).to.be.true;
  });

  it("approveHubDiameter throws error if diameter is greater than 1/4 wheel diameter", () => {
    expect(() => wheelRules.approveHubDiameter(2)).to.throw(
      "Hub diameter must not be greater than 1/4 the wheel diameter"
    );
  });

  it("approveSpokeRemoval aproves removal of a spoke", () => {
    wheel.spokes.length = 9;

    expect(wheelRules.approveSpokeRemoval()).to.be.true;
  });

  it("approveSpokeRemoval throws error if number of spokes becomes less than 8", () => {
    expect(() => wheelRules.approveSpokeRemoval()).to.throw(
      "Minimum of 8 spokes is required"
    );
  });

  it("approveSpokeAdd aproves adding of a spoke", () => {
    expect(wheelRules.approveSpokeAdd()).to.be.true;
  });

  it("approveSpokeAdd throws an error if spacing is an issue", () => {
    wheel.spokes.length = 22;
    expect(() => wheelRules.approveSpokeAdd()).to.throw(
      "Can't add spokes would not be spaced evenly"
    );
  });
});
