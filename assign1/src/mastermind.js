'use strict';
/*jshint esversion: 6 */

class MasterMind {
  constructor(){
    this.selectedColors = Array.from({length: 6}, () => Math.floor(Math.random() * 10));
    this.gameCondtions = {WIN_FLAG: false, ATTEMPTS: 0}; 
  } 
  
  guess(choices){
    if(this.gameCondtions.WIN_FLAG === true || this.gameCondtions.ATTEMPTS === 20){
      return {NO_MATCH: -1, MATCH: -1, POSITIONAL_MATCH: -1};
    }

    let no_match = 0;
    let match = 0;
    let positional_match = 0;
    const selectedColors = this.selectedColors;

    for(let i = 0; i < choices.length; i++){
      if(choices.includes(selectedColors[i])){
        if(selectedColors[i] === choices[i]){
          positional_match++;
        }
        else{
          match++;
        }
      }
      else{
        no_match++;
      }
    }

    if(positional_match === 6){
      this.gameCondtions.WIN_FLAG = true;
    }
    
    this.gameCondtions.ATTEMPTS++;

    return {NO_MATCH: no_match, MATCH: match, POSITIONAL_MATCH: positional_match};

  }
}