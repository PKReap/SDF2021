"use strict";
/*jshint esversion: 6 */

const wheelRules = new WheelRules();
let wheel = wheelRules.createWheel();

const liWheel = document.getElementById("liWheel");
const liHub = document.getElementById("liHub");
const liNumberOfSpokes = document.getElementById("liNumberOfSpokes");
const liSpokesLength = document.getElementById("liSpokesLength");
const liSpokesAngle = document.getElementById("liSpokesAngle");

function try_to_run(fn) {
  try {
    fn();
    renderWheel();
  } catch (err) {
    alert(err.message);
  }
}

function saveButton() {
  const wheelName = document.getElementById("Save").value;
  try_to_run(() => saveWheel(wheelName, wheel));
}

function loadButton() {
  const wheelName = document.getElementById("Load").value;
  try_to_run(() => {
    wheel = loadWheel(wheelName, wheelRules);
  });
}

function addSpoke() {
  try_to_run(() => wheel.addSpoke());
}

function removeSpoke() {
  try_to_run(() => wheel.removeSpoke());
}

function setWheelDiameter() {
  const diameter = document.getElementById("WheelSetter").value;
  try_to_run(() => wheel.setDiameter(parseFloat(diameter)));
}

function setHubDiameter() {
  const diameter = document.getElementById("HubSetter").value;
  try_to_run(() => wheel.hub.setDiameter(parseFloat(diameter)));
}

function renderWheel() {
  const diameter = wheel.diameter.toFixed(2);
  const hubDiameter = wheel.hub.diameter.toFixed(2);
  const numberOfSpokes = wheel.spokes.length;
  const spokesLength = (wheel.spokes[0].length * 100).toFixed(2);
  const spokesAngle = (360 / wheel.spokes.length).toFixed(2);
  
  liWheel.innerHTML = `Diameter: ${diameter} cm`;
  liHub.innerHTML = `Diameter:  ${hubDiameter} cm`;
  liNumberOfSpokes.innerHTML = `Number of spokes:  ${numberOfSpokes}`;
  liSpokesLength.innerHTML = `Spokes Length: ${spokesLength} mm`;
  liSpokesAngle.innerHTML = `Spokes Angle: ${spokesAngle}°`;
}
