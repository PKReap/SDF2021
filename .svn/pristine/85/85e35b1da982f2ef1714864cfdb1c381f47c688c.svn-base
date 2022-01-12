"use strict";
/*jshint esversion: 6 */
class Wheel {
  constructor(wheelRules) {
    this.diameter = 4;
    this.wheelRules = wheelRules;
    this.hub = new Hub(wheelRules, this.diameter);
    this.spokes = Array(8).fill(new Spoke(this.diameter + this.hub.diameter));
  }

  setDiameter(diameter) {
    this.wheelRules.approveDiameter(diameter);
    this.diameter = diameter;
    this.setSpokeSize();
  }

  setSpokeSize() {
    this.spokes.forEach((spoke) => {
      spoke.length = (this.diameter + this.hub.diameter) / this.spokes.length;
    });
  }

  addSpoke() {
    this.wheelRules.approveSpokeAdd();
    this.spokes.push(new Spoke(this.spokes[0].length));
  }

  removeSpoke() {
    this.wheelRules.approveSpokeRemoval();
    this.spokes.pop();
  }
}
