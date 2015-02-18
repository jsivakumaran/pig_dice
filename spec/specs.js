describe("Pig", function(){
  it("will return a number when you call rollDice", function(){
    var test = Object.create(Pig);
    expect((test.rollDice() <= 6) && (test.rollDice() >= 1)).to.eql(true);
  });
  it("sets current score to zero if roll is 1", function(){
    var game = Object.create(Pig);
    do {
      var roll = game.rollDice();
    } while (roll !== 1);
    expect(game.currentScore).to.eql(0);
  });
  it("adds to the currentScore as long as roll is not 1", function(){
    var game = Object.create(Pig);
    do {
      var roll = game.rollDice();
      if(roll!==1){
        break;
      }
    } while (true);
    expect(game.currentScore).to.eql(roll);
  });
  it("changes the active player when 1 is rolled", function(){
    var game = Object.create(Pig);
    game.activePlayer = 1;
    do {
      var roll = game.rollDice();
    } while (roll !== 1);
    expect(game.activePlayer).to.eql(2);
  });
  it("takes current score and adds to activeplayer's score when hold is pressed", function(){
    var game = Object.create(Pig);
    game.currentScore = 10;
    game.hold();
    expect(game.player1).to.eql(10);
  })
});
