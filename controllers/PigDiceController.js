PigDice.controller('PigDiceCtrl', ['$scope', '$state', 'PigFactory',
function PigDiceCtrl($scope, $state, PigFactory){

  $scope.PigFactory = PigFactory;
  $scope.activePlayer = PigFactory.activePlayer;

  $scope.rollDice = function(){
    $scope.roll = PigFactory.rollDice();
    $scope.currentScore = PigFactory.currentScore;
    PigFactory.checkWinner();
  }

  $scope.hold = function(){
    PigFactory.hold();
    $scope.p1score = PigFactory.player1;
    $scope.p2score = PigFactory.player2;
    $scope.currentScore = PigFactory.currentScore;
    PigFactory.checkWinner();
  }

  $scope.p = function(playerNumber){
    if(PigFactory.activePlayer===playerNumber){
      return true;
    }else {
      return false;
    }
  }

}]);
