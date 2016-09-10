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

// 1) Player_experience controller
.controller('MatchPlayed_StatsCtrl', function($scope, $http, $state, Matches, HomeTeams, Teams, MatchPlayers) {
  Matches.query().$promise.then(function(response){
    $scope.id_meca = localStorage.getItem('delegateMatchId');
    $scope.matches = response;

    $scope.gotov_mec = getById($scope.matches, $scope.id_meca);

    // Procenat golova HOME
    $scope.procenat_home_goals = ((($scope.gotov_mec.home_goals*100) / ($scope.gotov_mec.home_goals + $scope.gotov_mec.away_goals)));
    // Procenat golova AWAY
    $scope.procenat_away_goals = ((($scope.gotov_mec.away_goals*100) / ($scope.gotov_mec.home_goals + $scope.gotov_mec.away_goals)));

    // Procenat asistencija HOME
    $scope.procenat_home_assists = ((($scope.gotov_mec.home_assists*100) / ($scope.gotov_mec.home_assists + $scope.gotov_mec.away_assists)));
    // Procenat asistencija AWAY
    $scope.procenat_away_assists = ((($scope.gotov_mec.away_assists*100) / ($scope.gotov_mec.home_assists + $scope.gotov_mec.away_assists)));

    // Procenat faulova HOME
    $scope.procenat_home_fouls = ((($scope.gotov_mec.home_fouls*100) / ($scope.gotov_mec.home_fouls + $scope.gotov_mec.away_fouls)));
    // Procenat faulova AWAY
    $scope.procenat_away_fouls = ((($scope.gotov_mec.away_fouls*100) / ($scope.gotov_mec.home_fouls + $scope.gotov_mec.away_fouls)));

    // Procenat zutih kartona HOME
    $scope.procenat_home_yellow_cards = ((($scope.gotov_mec.home_yellow_cards*100) / ($scope.gotov_mec.home_yellow_cards + $scope.gotov_mec.away_yellow_cards)));
    // Procenat zutih kartona AWAY
    $scope.procenat_away_yellow_cards = ((($scope.gotov_mec.away_yellow_cards*100) / ($scope.gotov_mec.home_yellow_cards + $scope.gotov_mec.away_yellow_cards)));

    // Procenat zutih kartona HOME
    $scope.procenat_home_red_cards = ((($scope.gotov_mec.home_red_cards*100) / ($scope.gotov_mec.home_red_cards + $scope.gotov_mec.away_red_cards)));
    // Procenat zutih kartona AWAY
    $scope.procenat_away_red_cards = ((($scope.gotov_mec.away_red_cards*100) / ($scope.gotov_mec.home_red_cards + $scope.gotov_mec.away_red_cards)));

    // Procenat odbrana HOME
    $scope.procenat_home_goalkeeper_saves = ((($scope.gotov_mec.home_goalkeeper_saves*100) / ($scope.gotov_mec.home_goalkeeper_saves + $scope.gotov_mec.away_goalkeeper_saves)));
    // Procenat odbrana AWAY
    $scope.procenat_away_goalkeeper_saves = ((($scope.gotov_mec.away_goalkeeper_saves*100) / ($scope.gotov_mec.home_goalkeeper_saves + $scope.gotov_mec.away_goalkeeper_saves)));

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