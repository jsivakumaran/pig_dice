var PigDice = angular.module('PigDice', ['ui.router', 'firebase']);

PigDice.config(function($stateProvider){

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('twoPlayer', {
    url: "twoPlayer.html",
    templateUrl: "partials/twoPlayer.html"
  });

  $stateProvider.state('aiPlayer', {
    url: "aiPlayer.html",
    templateUrl: "partials/aiPlayer.html"
  });

});
