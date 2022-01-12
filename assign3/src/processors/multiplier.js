function multiplier(characters) {
  return characters
    .split("")
    .map((char) => char + char)
    .join("");
}

module.exports = { multiplier };
