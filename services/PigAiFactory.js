PigDice.factory("PigAiFactory", function(){
  var factory = {
    player1: 0,
    computer: 0,
    currentScore: 0,
    activePlayer: 1,

    rollDice: function(){
      var roll = Math.floor(Math.random() * 6) + 1;
      if(roll === 1) {
        if(this.activePlayer === 2) {
          this.activePlayer = 1;
          this.currentScore = 0;
        } else {
          this.currentScore = 0;
          // this.activePlayer = 2;
          this.switchActivePlayer();
        }
      } else {
          this.currentScore += roll;
      }
      return roll;
    },
    switchActivePlayer: function(){
      if(this.activePlayer === 1){
        this.player1 += this.currentScore;
        this.activePlayer = 2;
        this.hold();
      } else {
        this.currentScore = 0;
        var x = this.rollDice();
          // alert(x);
        if(x !== 1){
          var y = this.rollDice();
            // alert(y);
        }
        if( x!==1 && y!==1){
          var z = this.rollDice();
          // alert(z);
        }
        this.computer += this.currentScore;
        this.activePlayer = 1;
      }
    },
    hold: function(){
      this.switchActivePlayer();
      this.currentScore = 0;
    },
    checkWinner: function(){
      if(this.player1>100){
        alert("player1 wins");
        this.newGame();
      }else if(this.computer>100){
        alert("computer wins");
        this.newGame();
      }
    },
    newGame: function(){
      this.player1 = 0;
      this.computer = 0;
      this.currentScore = 0;
      this.activePlayer = 1;
    }
  };
  return factory;
});
