'use strict';

describe('Mastermind tests',  () => {
  let mastermind;
  
  beforeEach(function() {
    mastermind = new MasterMind();
    mastermind.selectedColors = [colors.RED, colors.BLUE, colors.GREEN, colors.ORANGE, colors.YELLOW, colors.VIOLET];
    mastermind.gameCondtions = {WIN_FLAG : false, ATTEMPTS: 0}; //Feedback: please remove this line
  });
  
  it('canary test',  async () => {
    expect(true).to.be.true;
  });

  it('guess with all colors match in position',  () => {
    const choices = [colors.RED, colors.BLUE, colors.GREEN, colors.ORANGE, colors.YELLOW, colors.VIOLET]; 
    const {NO_MATCH, MATCH, POSITIONAL_MATCH} = mastermind.guess(choices);

    expect([NO_MATCH, MATCH, POSITIONAL_MATCH]).to.eql([ 0, 0, 6]); 
       
  });

  it('guess with first four colors match in position',  () => {
    const choices = [colors.RED, colors.BLUE, colors.GREEN, colors.ORANGE, colors.NAVY, colors.NAVY];
    const {NO_MATCH, MATCH, POSITIONAL_MATCH} = mastermind.guess(choices);
    
    expect([NO_MATCH, MATCH, POSITIONAL_MATCH]).to.eql([ 2, 0, 4]); 
  });

  it('guess with first four colors match in position',  () => {
    const choices = [colors.LIME, colors.NAVY, colors.GREEN, colors.ORANGE, colors.YELLOW, colors.VIOLET];
    const {NO_MATCH, MATCH, POSITIONAL_MATCH} = mastermind.guess(choices);

    expect([NO_MATCH, MATCH, POSITIONAL_MATCH]).to.eql([ 2, 0, 4]); 
  });

  it('guess with first three colors match in position and the last two match out of position',  () => {
    const choices = [colors.RED, colors.BLUE, colors.GREEN, colors.NAVY, colors.VIOLET, colors.YELLOW];
    const {NO_MATCH, MATCH, POSITIONAL_MATCH} = mastermind.guess(choices);

    expect([NO_MATCH, MATCH, POSITIONAL_MATCH]).to.eql([ 1, 2, 3]); 
  });

  it('guess with all colors match out of position',  () => {
    const choices = [colors.VIOLET, colors.YELLOW, colors.ORANGE, colors.GREEN, colors.BLUE, colors.RED];
    const {NO_MATCH, MATCH, POSITIONAL_MATCH} = mastermind.guess(choices);

    expect([NO_MATCH, MATCH, POSITIONAL_MATCH]).to.eql([ 0, 6, 0]); 
  });

  it('guess with first and third color mismatch,  second in position,  and the others match out of position',  () => {
    const choices = [colors.LIME, colors.BLUE, colors.AQUA, colors.VIOLET, colors.ORANGE, colors.YELLOW];
    const {NO_MATCH, MATCH, POSITIONAL_MATCH} = mastermind.guess(choices);

    expect([NO_MATCH, MATCH, POSITIONAL_MATCH]).to.eql([ 2, 3, 1]); 
  });

  it('guess with all non-matching color',  () => {
    const choices = [colors.LIME, colors.LIME, colors.NAVY, colors.MAROON, colors.AQUA, colors.SALMON];
    const {NO_MATCH, MATCH, POSITIONAL_MATCH} = mastermind.guess(choices);
    
    expect([NO_MATCH, MATCH, POSITIONAL_MATCH]).to.eql([ 6, 0, 0]); 
  });
  
  it('guess with the first color in the selected colors repeated five times (six of the same color)',  () => {
    const choices = [colors.RED, colors.RED, colors.RED, colors.RED, colors.RED, colors.RED]; 
    const {NO_MATCH, MATCH, POSITIONAL_MATCH} = mastermind.guess(choices);
    
    expect([NO_MATCH, MATCH, POSITIONAL_MATCH]).to.eql([ 5, 0, 1]);  
  });

  it('guess with the first color in the selected colors repeated from position two to six, with first position in the guess having the second color in selection',  () => {
    const choices = [colors.BLUE, colors.RED, colors.RED,colors.RED,colors.RED,colors.RED];
    const {NO_MATCH, MATCH, POSITIONAL_MATCH} = mastermind.guess(choices);
    
    expect([NO_MATCH, MATCH, POSITIONAL_MATCH]).to.eql([4, 2, 0]); 
  });
  
  it('guess with the first color in the selected colors repeated from position two to six, with first position in the guess having no match',  () => {
    const choices = [colors.LIME, colors.RED, colors.RED,colors.RED,colors.RED,colors.RED];
    
    const {NO_MATCH, MATCH, POSITIONAL_MATCH} = mastermind.guess(choices);
    
    expect([NO_MATCH, MATCH, POSITIONAL_MATCH]).to.eql([5, 1, 0]); 
  });

  it('guess after a successful guess',  () => {
    const choices = [colors.LIME, colors.RED, colors.RED,colors.RED,colors.RED,colors.RED];
    mastermind.gameCondtions = {WIN_FLAG: true, ATTEMPTS: 1};
    mastermind.guess(choices);
    

    const {WIN_FLAG, ATTEMPTS} = mastermind.gameCondtions; 
    
    expect([WIN_FLAG, ATTEMPTS]).to.eql([true,1]);  
  });

  it('guess after 19 incorrect guesses',  () => {
    const choices = [colors.NAVY, colors.NAVY, colors.NAVY,colors.NAVY,colors.NAVY,colors.NAVY];
    mastermind.gameCondtions.ATTEMPTS = 19;
    mastermind.guess(choices);
     
    const {WIN_FLAG, ATTEMPTS} = mastermind.gameCondtions;

    expect([WIN_FLAG, ATTEMPTS]).to.eql([false,20]);
  });

  it('guess after 20 incorrect guesses',  () => {
    const choices = [colors.NAVY, colors.NAVY, colors.NAVY,colors.NAVY,colors.NAVY,colors.NAVY];
    mastermind.gameCondtions.ATTEMPTS = 20;
    mastermind.guess(choices);
     
    const {WIN_FLAG, ATTEMPTS} = mastermind.gameCondtions;

    expect([WIN_FLAG,ATTEMPTS]).to.eql([false,20]);
  });

  it('guess after 21 incorrect guesses',  () => {
    const choices = [colors.NAVY, colors.NAVY, colors.NAVY,colors.NAVY,colors.NAVY,colors.NAVY];
    mastermind.gameCondtions.ATTEMPTS = 21;
    mastermind.guess(choices);

    const {WIN_FLAG,ATTEMPTS} = mastermind.gameCondtions;

    expect([WIN_FLAG,ATTEMPTS]).to.eql([false,22]);
  });
  
  it('x generate random selected colors when mastermind is created', ()=>{
    const master = new MasterMind();

    expect(master.selectedColors.length).to.eql(6);
  });

  it('verify two instances of mastermind don not have the same selected colors', ()=>{
    let m1 = new MasterMind();
    const m2 = new MasterMind();

    while(JSON.stringify(m1.selectedColors) === JSON.stringify(m2.selectedColors)){
      m1 = new MasterMind();
    }

    expect(m1).to.not.eql(m2);
  });
});
