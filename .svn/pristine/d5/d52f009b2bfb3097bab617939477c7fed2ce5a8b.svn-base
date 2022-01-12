const analyze = require("./src/analyze");
const fs = require("fs");
const isSpellingCorrect =
  require("./src/spellCheckerService").isSpellingCorrect;

if (process.argv.length < 3) {
  console.log(
    "Please enter the path for the file.\nnode driver.js PATH_TO_FILE"
  );
  process.exit(1);
}

try {
  if (!fs.existsSync(process.argv[2])) {
    throw new Error(`file ${process.argv[2]} does not exist`);
  }
  fs.readFile(process.argv[2], "utf8", function (err, data) {
    console.log(`original text: ${data}`);
    console.log(analyze(data, isSpellingCorrect));
  });
} catch (error) {
  console.log(error.message);
}
