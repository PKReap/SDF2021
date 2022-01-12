const { question } = require("readline-sync");

const { checkForPerfect } = require("./src/checkForPerfect");

const number = Number(question("Please enter a number greater than 0: "));

const message = `The number ${number} is ${checkForPerfect(number)}.`;

console.log(message);
