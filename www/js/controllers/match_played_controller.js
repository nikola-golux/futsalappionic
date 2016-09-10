angular.module('starter.controllers')

/****************************************************************************************************
* PLAYER TABS CONTROLLERS
****************************************************************************************************/
// 1) Player_experience controller
.controller('MatchPlayed_MResulCtrl', function($scope, $http, $state, Matches, HomeTeams, Teams, MatchPlayers) {
  Matches.query().$promise.then(function(response){
    $scope.id_meca = localStorage.getItem('delegateMatchId');
    $scope.matches = response;

    $scope.gotov_mec = getById($scope.matches, $scope.id_meca);
  });
    MatchPlayers.query().$promise.then(function(response){
    $scope.id_meca = localStorage.getItem('delegateMatchId');
    $scope.match_players = response;

    $scope.home_players_on_match = getAllHomeMatchPlayersByMatchId($scope.match_players, $scope.id_meca);
  });
    MatchPlayers.query().$promise.then(function(response){
    $scope.match_players = response;
    $scope.away_players_on_match = getAllAwayMatchPlayersByMatchId($scope.match_players, $scope.id_meca);
  });
})
// 2) O_nama Controller
.controller('O_namaCtrl', function($scope, BlogEntry) {
  BlogEntry.query().$promise.then(function(response){
    $scope.blog_entries = response;
  });
})

// 3) Kontakt Controller
.controller('KontaktCtrl', function($scope, BlogEntry) {
  BlogEntry.query().$promise.then(function(response){
    $scope.blog_entries = response;
  });
})