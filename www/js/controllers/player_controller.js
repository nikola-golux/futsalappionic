angular.module('starter.controllers')

/****************************************************************************************************
* PLAYER TABS CONTROLLERS
****************************************************************************************************/
// 1) Player_experience controller
.controller('Player_ExpCtrl', function($scope, $state, $stateParams, $window, Players, PlayerSeasons, Teams) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.players = response;
    
    function getById(arr, id) {
          for (var d = 0, len = arr.length; d < len; d += 1) {
              if (arr[d].id == id) /* Bilo je 3 === */ {
                  return arr[d];
              }
          }
      }

    $scope.current_player = getById($scope.players, window.localStorage['userPlayerId']);
    window.localStorage['playerTeamId'] = $scope.current_player.team_id;

  });

  /* PLAYER_SEASONS table */
  PlayerSeasons.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.player_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].player_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_season = getById($scope.player_seasons, window.localStorage['userPlayerId']);
  });

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
.controller('Player_StatsCtrl', function($scope, Players, PlayerSeasons) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.players = response;
  });
  /* PLAYER_SEASONS table */
  PlayerSeasons.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.player_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].player_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_season = getById($scope.player_seasons, window.localStorage['userPlayerId']);

  });
})

// 3) Player_badges Controller
.controller('Player_BadgesCtrl', function($scope, Players, PlayerBadges) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.players = response;
  });
  /* PLAYER_BADGES table */
  PlayerBadges.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.player_badges = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].player_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_badge = getById($scope.player_badges, window.localStorage['userPlayerId']);

  });
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