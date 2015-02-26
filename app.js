var pigDice = angular.module('pigDice', ['ui.router']);

pigDice.config(function($stateProvider){

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
