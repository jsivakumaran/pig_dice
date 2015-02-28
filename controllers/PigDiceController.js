PigDice.controller('PigDiceCtrl', ['$scope', '$state', 'PigFactory',
function PigDiceCtrl($scope, $state, PigFactory){

  $scope.PigFactory = PigFactory;
  $scope.rollDice = function(){
    debugger;
    var roll = PigFactory.rollDice();
  }

}]);
