"use strict";
/*jshint esversion: 6 */

describe("Wheels tests", () => {
  let sandbox;
  let wheelRules;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    wheelRules = new WheelRules();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("canary test", () => {
    expect(true).to.be.true;
  });

  it("WheelRules creates a Wheel with diameter of 4 and 8 spokes", () => {
    const wheel = wheelRules.createWheel();

    expect(wheel.diameter).to.eql(4);
  });

  it("Wheel's diameter is changed if WheelRule aproves of the change", () => {
    const wheel = wheelRules.createWheel();
    sandbox.stub(wheelRules, "approveDiameter").returns(true);

    wheel.setDiameter(5);

    expect(wheel.diameter).to.eql(5);
  });

  it("Wheel's diameter is not changed if WheelRule disapproves of the change and propagate the reason", () => {
    const wheel = wheelRules.createWheel();
    sandbox
      .stub(wheelRules, "approveDiameter")
      .throws(new Error("Diameter must be greater than 0"));

    expect(() => wheel.setDiameter(0)).to.throw(
      "Diameter must be greater than 0"
    );
    expect(wheel.diameter).to.eql(4);
  });
});
