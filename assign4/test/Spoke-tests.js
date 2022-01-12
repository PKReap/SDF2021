"use strict";
/*jshint esversion: 6 */

describe("Spoke's tests", () => {
  let sandbox;
  let wheelRules;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    wheelRules = new WheelRules();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("The Wheel created by WheelRule has eight spokes", () => {
    const wheel = wheelRules.createWheel();

    expect(wheel.spokes.length).to.eql(8);
  });

  it("Length of the spoke is correct upon creation", () => {
    const wheel = wheelRules.createWheel();

    wheel.spokes.forEach((spoke) => {
      expect(spoke.length).to.eql(5);
    });
  });

  it("Add a spoke to a wheel", () => {
    const wheel = wheelRules.createWheel();
    sandbox.stub(wheelRules, "approveSpokeAdd").returns(true);
    wheel.addSpoke();

    expect(wheel.spokes.length).to.eql(9);
  });

  it("Remove a spoke from a wheel", () => {
    const wheel = wheelRules.createWheel();
    sandbox.stub(wheelRules, "approveSpokeRemoval").returns(true);
    wheel.removeSpoke();

    expect(wheel.spokes.length).to.eql(7);
  });

  it("Can't remove a spoke if there are only eight", () => {
    const wheel = wheelRules.createWheel();
    sandbox
      .stub(wheelRules, "approveSpokeRemoval")
      .throws(new Error("Minimum of 8 spokes required"));

    expect(() => wheel.removeSpoke()).to.throw("Minimum of 8 spokes required");
    expect(wheel.spokes.length).to.eql(8);
  });

  it("Can't add a spoke if all spokes can't be reasonably spaced in a wheel", () => {
    const wheel = wheelRules.createWheel();
    sandbox
      .stub(wheelRules, "approveSpokeAdd")
      .throws(new Error("Can't add spokes won't be reasonably spaced"));

    expect(() => wheel.addSpoke()).to.throw(
      "Can't add spokes won't be reasonably spaced"
    );
    expect(wheel.spokes.length).to.eql(8);
  });

  it("When wheel diameter is changed the spokes length changes", () => {
    const wheel = wheelRules.createWheel();
    sandbox.stub(wheelRules, "approveDiameter").returns(true);

    wheel.setDiameter(3);
    wheel.spokes.forEach((spoke) => {
      expect(spoke.length).to.eql(4/8);
    });
  });

  it("When hub diameter is changed the spokes length changes", () => {
    const wheel = wheelRules.createWheel();
    sandbox.stub(wheelRules, "notifyHubDiameterChanged").callsFake(() => {
      wheel.setSpokeSize();
    });

    sandbox.stub(wheelRules, "approveHubDiameter").returns(true);

    wheel.hub.setDiameter(2);

    wheel.spokes.forEach((spoke) => {
      expect(spoke.length).to.eql(6/8);
    });
  });
});
