const config = require("./driver-config");
const { processText } = require("./src/processText");
const blocks = {};
if (process.argv.length === 2) {
  console.log("To run program type");
  console.log("npm run start 'text here' block 1 block 2");
  console.log("example: npm run start 'hello' Multiplier\nhheelloo");
  console.log("see more blocks in driver-config.json");
  console.log("To add user-created blocks, add them to the pre-defined in the driver-config.json");
  console.log("To make Custom blocks from pre-defined blocks change the custom in the driver-config.json");
  process.exit(1);
}

for (const [name, blockConfig] of Object.entries(config["pre-defined"])) {
  const block = Object.values(require(blockConfig["src"]))[0];
  blocks[name] = blockConfig["args"] ? block(...blockConfig["args"]) : block;
}

for (const [name, processes] of Object.entries(config["custom"])) {
  const processors = processes.map((block) => blocks[block]);
  blocks[name] = text => processText(processors, text);
}

const text = process.argv[2];

const processors = process.argv.slice(3).map((block) => blocks[block]);

console.log(processText(processors, text));
