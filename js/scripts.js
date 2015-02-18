var Pig = {
  player1: 0,
  player2: 0,
  currentScore: 0,
  rollDice: function(){
    var roll = Math.floor(Math.random() * 6) + 1;
    if (roll === 1) {
      this.currentScore = 0;
    }
    else {
      this.currentScore += roll;
    }
    return roll;
  }
}
