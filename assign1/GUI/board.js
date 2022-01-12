'use strict';

const CurrentGuess = document.getElementById('CurrentGuess');
const PreviousGuess = document.getElementById('PreviousGuess');
const mastermind = new MasterMind();

function dotClick(dotColor){
  const dot = document.createElement('LI');
  dot.className = dotColor;

  if(CurrentGuess.children.length === 6){
    alert('at max amount of choices');
  }
  else{
    CurrentGuess.appendChild(dot);
  }
}

function revelColors(){
  const h2 = document.createElement('H2');

  h2.appendChild(document.createTextNode('The selected colors were'));

  for(let i = 0; i < 6;i++){
    const color = document.createElement('LI');
    color.className = colors[mastermind.selectedColors[i]];
    h2.appendChild(color);
  }

  PreviousGuess.appendChild(document.createElement('BR'));
  PreviousGuess.appendChild(h2);
  PreviousGuess.appendChild(document.createElement('BR'));
}

function clearChildren(parent){
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createHints(){
  const choices = [...Array(6).keys()].map(index => colors[CurrentGuess.children[index].className]);
  const result = mastermind.guess(choices);

  if(mastermind.gameCondtions.WIN_FLAG){
    alert('YOU WIN!!');
  } 

  PreviousGuess.appendChild(document.createElement('BR'));

  for(let i = 0; i < result.POSITIONAL_MATCH; i++){
    const dot = document.createElement('LI');
    dot.className = 'BLACK';
    PreviousGuess.appendChild(dot);
  }
  
  for(let i = 0; i < result.MATCH; i++){
    const dot = document.createElement('LI');
    dot.className = 'SILVER';
    PreviousGuess.appendChild(dot);
  }

  if(mastermind.gameCondtions.ATTEMPTS === 20){
    revelColors();
  }

}


function addGuess(){ 
  for(let i = 0; i < 6;i++){
    const color = document.createElement('LI');
    color.className = CurrentGuess.children[i].className;
    PreviousGuess.appendChild(color);
  }

  createHints();

  PreviousGuess.appendChild(document.createElement('BR'));
  PreviousGuess.appendChild(document.createTextNode(mastermind.gameCondtions.ATTEMPTS));
  PreviousGuess.appendChild(document.createElement('BR'));
}

function guessSubmission(){
  if(CurrentGuess.children.length < 6){
    alert('not enough choices made');
    return;
  }
  
  if(mastermind.gameCondtions.WIN_FLAG === true){
    alert('You have already won');
    return;
  }

  if(mastermind.gameCondtions.ATTEMPTS === 20){
    alert('Maximum tries exceeded');
    revelColors();
    return;
  }
  
  addGuess();
  clearChildren(CurrentGuess);
  
}
