"use strict";
/*jshint esversion: 6 */

function loadWheel(wheelName, wheelRules) {
  if (!localStorage.getItem(wheelName))
    throw new Error(`${wheelName} has not been saved`);

  const { wheeldiameter, hubDiameter, spokesLength } = JSON.parse(
    localStorage.getItem(wheelName)
  );
  const wheel = wheelRules.createWheel();

  wheel.setDiameter(wheeldiameter);
  wheel.hub.setDiameter(hubDiameter);
  wheel.spokes.concat(
    Array(spokesLength - 8).fill(new Spoke(wheel.spokes[0].length))
  );

  return wheel;
}
