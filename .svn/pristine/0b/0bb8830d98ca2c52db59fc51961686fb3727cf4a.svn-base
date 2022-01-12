"use strict";
/*jshint esversion: 6 */

function saveWheel(wheelName, wheel) {
  if (wheelName.length === 0) throw new Error("Name must be provided to the wheel");

  const wheelParameters = {
    wheeldiameter: wheel.diameter,
    hubDiameter: wheel.hub.diameter,
    spokesLength: wheel.spokes.length,
  };

  localStorage.setItem(wheelName, JSON.stringify(wheelParameters));
}
