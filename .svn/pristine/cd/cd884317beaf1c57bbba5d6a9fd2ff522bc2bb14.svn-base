"use strict";
/*jshint esversion: 6 */
class WheelRules {
  createWheel() {
    const newWheel = new Wheel(this);
    this.notifyHubDiameterChanged = () => newWheel.setSpokeSize();
    this.wheel = newWheel;
    return newWheel;
  }

  approveDiameter(diameter) {
    if (diameter <= 0) {
      throw new Error("Diameter of wheel must be greater than 0");
    }

    if (this.wheel.hub.diameter / diameter > 1 / 4) {
      throw new Error(
        "Hub diameter must not be greater than 1/4 the wheel diameter"
      );
    }

    return true;
  }

  approveHubDiameter(diameter) {
    if (diameter / this.wheel.diameter > 1 / 4) {
      throw new Error(
        "Hub diameter must not be greater than 1/4 the wheel diameter"
      );
    }

    return true;
  }

  approveSpokeRemoval() {
    if (this.wheel.spokes.length === 8) {
      throw new Error("Minimum of 8 spokes is required");
    }

    return true;
  }
  approveSpokeAdd() {
    if ((this.wheel.spokes.length + 1) /(this.wheel.diameter + this.wheel.hub.diameter) > 4) {
      throw new Error("Can't add spokes would not be spaced evenly");
    }

    return true;
  }
}
