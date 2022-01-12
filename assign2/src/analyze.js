/*jshint esversion: 6 */

function analyze(sentence, spellChecker) {
  function padForWord(word) {
    try {
      return spellChecker(word) ? '' : '__';
    } catch(ex) {
      return '~~';
    }
  }

  if(sentence === '') {
    return { transformedText: '', wordCount: 0, numberOfTypos: 0, errorRate: 0 };    
  }
  
  const transformedWords = [];
  let wordCount = 0;
  let numberOfTypos = 0;
  
  for(const word of sentence.split(' ')) {
    wordCount++;
    const padding = padForWord(word);
  
    transformedWords.push(`${padding}${word}${padding}`);
    numberOfTypos += padding === `__` ? 1 : 0;
  }      

  const errorRate = numberOfTypos * 100.0 / wordCount;
  
  return { transformedText: transformedWords.join(' '), wordCount, numberOfTypos, errorRate };
}

module.exports = analyze;