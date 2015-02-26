pigDice.controller('PigDiceCtrl', ['$scope', '$state',
function PigDiceCtrl($scope, $state){

  $scope.pigFactory = pigFactory;

    $state.go('home');

}]);
