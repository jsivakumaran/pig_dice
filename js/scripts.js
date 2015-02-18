var Pig = {
  player1: 0,
  player2: 0,
  currentScore: 0,
  activePlayer: 1,
  rollDice: function(){
    var roll = Math.floor(Math.random() * 6) + 1;
    if (roll === 1) {
      this.currentScore = 0;
      this.switchActivePlayer();
    }
    else {
      this.currentScore += roll;
    }
    return roll;
  },
  switchActivePlayer: function(){
    if(this.activePlayer === 1){
      this.player1 += this.currentScore;
      this.activePlayer = 2;
    }else{
      this.player2 += this.currentScore;
      this.activePlayer = 1;
    }
  },
  hold: function(){
    this.switchActivePlayer();
    this.currentScore = 0;
  }
};

$(document).ready(function(){
  var game = Object.create(Pig);

  var checkPlayer = function() {
    var player = game.activePlayer;
    if (player === 1) {
      $("h2#player1").css('color', 'green');
      $("h2#player2").css('color', 'grey');
    } else {
      $("h2#player2").css('color', 'green');
      $("h2#player1").css('color', 'grey');
    }
  };

  $("button#roll").click(function(){
     $("#dice").text(game.rollDice());
     refreshScores();
     checkPlayer();
  });

  $("button#hold").click(function(){
    game.hold();
    refreshScores();
    checkPlayer();
  });

var refreshScores = function(){
  $("#player1score").text(game.player1);
  $("#player2score").text(game.player2);
  $("#current").text(game.currentScore);
}

});
