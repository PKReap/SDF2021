"use strict";
/*jshint esversion: 6 */

describe("Hub's tests", () => {
  let sandbox;
  let wheelRules;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    wheelRules = new WheelRules();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("The Wheel created by WheelRule has a hub size of 1", () => {
    const wheel = wheelRules.createWheel();

    expect(wheel.hub.diameter).to.eql(1);
  });

  it("Hub's diameter is changed if WheelRule approves of the change", () => {
    const wheel = wheelRules.createWheel();
    sandbox.stub(wheelRules, "approveHubDiameter").returns(true);

    wheel.hub.setDiameter(2);
    expect(wheel.hub.diameter).to.eql(2);
  });

  it("Hub's diameter is not changed if WheelRule disapproves of the change and propagates the reason", () => {
    const wheel = wheelRules.createWheel();

    sandbox
      .stub(wheelRules, "approveHubDiameter")
      .throws(
        new Error(
          "Hub diameter must not be greater than 1/4 the diameter of this wheel"
        )
      );

    expect(() => wheel.hub.setDiameter(0)).to.throw(
      "Hub diameter must not be greater than 1/4 the diameter of this wheel"
    );
    expect(wheel.hub.diameter).to.eql(1);
  });
});
