PigDice.controller('PigDiceCtrl', ['$scope', '$rootScope', '$state', 'PigFactory',
function PigDiceCtrl($scope, $rootScope, $state, PigFactory){

  $scope.PigFactory = PigFactory;
  $scope.activePlayer = PigFactory.activePlayer;
  $scope.key = 'none';

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

  $rootScope.$on('keypress', function(event, object, key){
    $scope.$apply(function(){
      console.log(key);
      if(key == 'z'){
        $scope.roll = PigFactory.rollDice();
        $scope.currentScore = PigFactory.currentScore;
        PigFactory.checkWinner();
      }else if(key == ' ') {
        PigFactory.hold();
        $scope.p1score = PigFactory.player1;
        $scope.p2score = PigFactory.player2;
        $scope.currentScore = PigFactory.currentScore;
        PigFactory.checkWinner();      }
    })
  })

}]);
