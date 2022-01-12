const request = require("sync-request");

const spellCheckerService = {
  callService: function (word) {
    const response = request(
      "GET",
      `http://agilec.cs.uh.edu/spell?check=${word}`
    );
    if (response.statusCode === 200) {
      return response;
    }

    throw new Error(`Error service could not verify the word ${word}`);
  },

  parse: function (word) {
    return word === "true";
  },

  isSpellingCorrect: function (word) {
    return spellCheckerService.parse(
      spellCheckerService.callService(word).body.toString()
    );
  },
};

module.exports = spellCheckerService;
