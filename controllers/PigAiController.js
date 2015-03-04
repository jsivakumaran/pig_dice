PigDice.controller('PigAiCtrl', ['$scope', '$state', 'PigFactory',
function PigAiCtrl($scope, $state, PigFactory){

  $scope.PigFactory = PigFactory;
  $scope.activePlayer = PigFactory.activePlayer;
  $scope.Ai = PigFactory.setAi();

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

  $scope.comp = function(playerNumber) {
    if(playerNumber==3){
      debugger;
      $scope.roll = PigFactory.rollDice();
    }
  }

}]);
