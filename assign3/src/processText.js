function processText(blocks, text) {
  return blocks.reduce((processed_text, block) => block(processed_text), text);
}

module.exports = { processText };
