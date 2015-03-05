PigDice.controller('PigAiCtrl', ['$scope', '$state', 'PigAiFactory',
function PigAiCtrl($scope, $state, PigAiFactory){

  $scope.PigAiFactory = PigAiFactory;
  $scope.activePlayer = PigAiFactory.activePlayer;

  $scope.rollDice = function(){
    $scope.roll = PigAiFactory.rollDice();
    $scope.currentScore = PigAiFactory.currentScore;
    PigAiFactory.checkWinner();
  }

  $scope.hold = function(){
    PigAiFactory.hold();
    $scope.p1score = PigAiFactory.player1;
      $scope.computerScore = PigAiFactory.computer;
    $scope.currentScore = PigAiFactory.currentScore;
    PigAiFactory.checkWinner();
  }

  $scope.p = function(playerNumber){
    if(PigAiFactory.activePlayer===playerNumber){
      return true;
    }else {
      return false;
    }
  }


}]);
