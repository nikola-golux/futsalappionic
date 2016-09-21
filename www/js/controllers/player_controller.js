angular.module('starter.controllers')

/****************************************************************************************************
* 1) PLAYER EXPERIENCE CONTROLLERS
****************************************************************************************************/
.controller('Player_ExpCtrl', function($scope, $state, $stateParams, $window, Player, PlayerSeason, Team) {
  $scope.id_igraca = window.localStorage['userPlayerId'];
  
  //---------------------------------------------
  // Radimo JSON GET tacno tog ulogovanog igraca
  //---------------------------------------------
  $scope.current_player_json = Player.get({},{'Id': window.localStorage['userPlayerId']});
  $scope.current_player_json.$promise.then(function(response) {
      $scope.current_player = response;
      window.localStorage['playerTeamId'] = $scope.current_player.team_id;
      window.localStorage['playerLeagueId'] = $scope.current_player.league_id;
  });

  //---------------------------------------------
  // Radimo JSON GET sezone tog igraca
  //---------------------------------------------
  $scope.current_player_season_json = PlayerSeason.get({},{'Id': window.localStorage['userPlayerId']});
  $scope.current_player_season_json.$promise.then(function(response) {
      $scope.current_player_season = response;
      var do_sledeceg_levela_float = trenutni_experience_u_procentima($scope.current_player_season.expirience ,$scope.current_player_season.level);
      $scope.do_sledeceg_levela = parseInt(do_sledeceg_levela_float, 10);
  });
  
  //---------------------------------------------
  // Radimo JSON GET ekipe tog igraca
  //---------------------------------------------
  $scope.current_player_team_json = Team.get({},{'Id': window.localStorage['playerTeamId']});
  $scope.current_player_team_json.$promise.then(function(response) {
      $scope.current_team = response;
  });
})

/****************************************************************************************************
* 2) PLAYER STATS CONTROLLERS
****************************************************************************************************/
.controller('Player_StatsCtrl', function($scope, Player, PlayerSeason) {
  $scope.id_igraca = window.localStorage['userPlayerId'];

  //---------------------------------------------
  // Radimo JSON GET tacno tog ulogovanog igraca
  //---------------------------------------------
  $scope.current_player_json = Player.get({},{'Id': window.localStorage['userPlayerId']});
  $scope.current_player_json.$promise.then(function(response) {
      $scope.current_player = response;
      window.localStorage['playerTeamId'] = $scope.current_player.team_id;
      window.localStorage['playerLeagueId'] = $scope.current_player.league_id;
  });

  //---------------------------------------------
  // Radimo JSON GET sezone tog igraca
  //---------------------------------------------
  $scope.current_player_season_json = PlayerSeason.get({},{'Id': window.localStorage['userPlayerId']});
  $scope.current_player_season_json.$promise.then(function(response) {
      $scope.current_player_season = response;
  });
})

/****************************************************************************************************
* 3) PLAYER BADGES CONTROLLERS
****************************************************************************************************/
.controller('Player_BadgesCtrl', function($scope, Player, PlayerBadge) {
  $scope.id_igraca = window.localStorage['userPlayerId'];

  //---------------------------------------------
  // Radimo JSON GET tacno tog ulogovanog igraca
  //---------------------------------------------
  $scope.current_player_json = Player.get({},{'Id': window.localStorage['userPlayerId']});
  $scope.current_player_json.$promise.then(function(response) {
      $scope.current_player = response;
      window.localStorage['playerTeamId'] = $scope.current_player.team_id;
      window.localStorage['playerLeagueId'] = $scope.current_player.league_id;
  });

  //---------------------------------------------
  // Radimo JSON GET badge tog igraca
  //---------------------------------------------
  $scope.current_player_badge_json = PlayerBadge.get({},{'Id': window.localStorage['userPlayerId']});
  $scope.current_player_badge_json.$promise.then(function(response) {
      $scope.current_player_badge = response;
  });
})

/****************************************************************************************************
* 4) PLAYER TEAM CONTROLLERS
****************************************************************************************************/
.controller('Player_TeamCtrl', function($scope, Team) {
  //---------------------------------------------
  // Radimo JSON GET ekipe tog igraca
  //---------------------------------------------
  $scope.current_player_team_json = Team.get({},{'Id': window.localStorage['playerTeamId']});
  $scope.current_player_team_json.$promise.then(function(response) {
      $scope.current_team = response;
  });
  
})