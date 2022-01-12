/*jshint esversion: 6 */

const analyze = require('../src/analyze');
const expect = require('chai').expect;

describe('analyze function tests',() => {
  it('canary test', async () => {
    expect(true).to.be.true;
  });

  it('analyzing "hello"', async () => {
    const sentence = 'hello';
    const answer = {transformedText: 'hello',wordCount: 1,numberOfTypos : 0, errorRate: 0};
    
    const spell_checker = word => true;
    
    expect(analyze(sentence, spell_checker)).to.eql(answer);
  });

  it('analyzing "hello there"',async () => {
    const sentence = 'hello there';
    const answer = {transformedText: 'hello there', wordCount: 2, numberOfTypos: 0, errorRate: 0};
    const spell_checker = word => true;
    
    expect(analyze(sentence, spell_checker)).to.eql(answer);
  });

  it('analyzing "hello ther"',async () => {
    const sentence = 'hello ther';
    const answer = {transformedText: 'hello __ther__', wordCount: 2, numberOfTypos : 1, errorRate: 50};
    const spell_checker = word => word === 'hello';

    expect(analyze(sentence, spell_checker)).to.eql(answer);
  });

  it('analyzing empty string',async () => {
    const sentence = '';
    const answer = {transformedText: '', wordCount: 0, numberOfTypos: 0, errorRate: 0};
    const spell_checker = word => true;

    expect(analyze(sentence, spell_checker)).to.eql(answer);
  });

  it('analyze ran into a network error',async () => {
    const sentence = 'hello';
    const answer = {transformedText: '~~hello~~', wordCount: 1, numberOfTypos: 0, errorRate:0};
    const spell_checker = () => { throw new Error('network error when connecting to service'); };

    expect(analyze(sentence, spell_checker)).to.eql(answer);    
  });

  it('analyze "hello" but service runs into network error',async () => {
    const sentence = 'hello';
    const answer = {transformedText: '~~hello~~', wordCount: 1, numberOfTypos: 0, errorRate: 0};
    const spell_checker = (word) => {
      if(word === 'hello'){
        throw new Error(`Error Network could not connect for word ${word}`);
      }
      return true;
    };

    expect(analyze(sentence, spell_checker)).to.eql(answer);
  });
  
  it('analyze "hello" but service runs into service an error',async () => {
    const sentence = 'hello';
    const answer = {transformedText: '~~hello~~', wordCount: 1, numberOfTypos: 0, errorRate: 0};
    const spell_checker = (word) => {
      if(word === 'hello'){
        throw new Error(`Error service could not verify for word ${word}`);
      }
      return true;
    };

    expect(analyze(sentence, spell_checker)).to.eql(answer);
  });

  it('analyze "hello there" but service runs into an error only for the word there',async () => {
    const sentence = 'hello there';
    const answer = {transformedText: 'hello ~~there~~', wordCount: 2, numberOfTypos: 0, errorRate: 0};
    const spell_checker = (word) => {
      if(word === 'there'){
        throw new Error(`Error service could not verify for word ${word}`);
      }
      return true;
    };

    expect(analyze(sentence, spell_checker)).to.eql(answer);
  });
  
});


