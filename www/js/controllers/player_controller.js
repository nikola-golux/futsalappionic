angular.module('starter.controllers')

/****************************************************************************************************
* PLAYER TABS CONTROLLERS
****************************************************************************************************/
// 1) Player_experience controller
.controller('Player_ExpCtrl', function($scope, $state, $stateParams, $window, Player, PlayerSeason, Teams) {
  /* PLAYERS table*/
  /*Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.players = response;
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) {
                return arr[d];
            }
        }
    }
    $scope.current_player = getById($scope.players, window.localStorage['userPlayerId']);
    window.localStorage['playerTeamId'] = $scope.current_player.team_id;
    window.localStorage['playerLeagueId'] = $scope.current_player.league_id;
  });*/

  $scope.id_igraca = window.localStorage['userPlayerId'];
  $scope.current_player = Player.get({},{'Id': window.localStorage['userPlayerId']});
  console.log($scope.current_player);
  console.log($scope.current_player);
  localStorage.setItem('playerTeamId', $scope.current_player.team_id);
  localStorage.setItem('playerLeagueId', $scope.current_player.league_id);
  /* PLAYER_SEASONS table */
  /*PlayerSeasons.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.player_seasons = response;
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].player_id == id) {
                return arr[d];
            }
        }
    }
    $scope.current_player_season = getById($scope.player_seasons, window.localStorage['userPlayerId']);
    var do_sledeceg_levela_float = trenutni_experience_u_procentima($scope.current_player_season.expirience ,$scope.current_player_season.level);
    $scope.do_sledeceg_levela = parseInt(do_sledeceg_levela_float, 10);
  });*/

  $scope.current_player_season = PlayerSeason.get({},{'Id': window.localStorage['userPlayerId']});
  var do_sledeceg_levela_float = trenutni_experience_u_procentima($scope.current_player_season.expirience ,$scope.current_player_season.level);
  $scope.do_sledeceg_levela = parseInt(do_sledeceg_levela_float, 10);

  /* TEAMS table */
  Teams.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.teams = response;
    function getById(arr, id) {
            for (var d = 0, len = arr.length; d < len; d += 1) {
                if (arr[d].id == id) /* Bilo je 3 === */ {
                    return arr[d];
                }
            }
        }
    $scope.current_team = getById($scope.teams, window.localStorage['playerTeamId']);
  });
})

// 2) Player_stats controller
.controller('Player_StatsCtrl', function($scope, Player, PlayerSeason) {
  $scope.id_igraca = window.localStorage['userPlayerId'];
  $scope.player = Player.get({},{'Id': window.localStorage['userPlayerId']});
  $scope.current_player_season = PlayerSeason.get({},{'Id': window.localStorage['userPlayerId']});
})

// 3) Player_badges Controller
.controller('Player_BadgesCtrl', function($scope, Player, PlayerBadge) {
  $scope.id_igraca = window.localStorage['userPlayerId'];
  $scope.current_player = Player.get({},{'Id': window.localStorage['userPlayerId']});
  $scope.current_player_badge = PlayerBadge.get({},{'Id': window.localStorage['userPlayerId']});
})

// 4) Player_Team Controller
.controller('Player_TeamCtrl', function($scope, Players, Teams) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.players = response;
  });
  /* PLAYER_SEASONS table */
  Teams.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.teams = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_team = getById($scope.teams, window.localStorage['userPlayerId']);

  });
})