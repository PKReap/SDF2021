"use strict";
/*jshint esversion: 6 */

class Hub {
  constructor(wheelRules) {
    this.diameter = 1;
    this.wheelRules = wheelRules;
  }

  setDiameter(diameter) {
    this.wheelRules.approveHubDiameter(diameter);
    this.diameter = diameter;
    this.wheelRules.notifyHubDiameterChanged();
    
  }
}
