PigDice.controller('PigAiCtrl', ['$scope', '$state', 'PigAiFactory',
function PigAiCtrl($scope, $state, PigAiFactory){

  $scope.PigAiFactory = PigAiFactory;
  $scope.activePlayer = PigAiFactory.activePlayer;

  $scope.rollDice = function(){
    $scope.p1score = PigAiFactory.player1;
    $scope.computerScore = PigAiFactory.computer;
    $scope.currentScore = PigAiFactory.currentScore;
    $scope.roll = PigAiFactory.rollDice();
    PigAiFactory.checkWinner();
  }

  $scope.hold = function(){
    $scope.p1score = PigAiFactory.player1;
    $scope.computerScore = PigAiFactory.computer;
    PigAiFactory.hold();
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
