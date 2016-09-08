angular.module('starter.controllers')

/****************************************************************************************************
* PLAYER TABS CONTROLLERS
****************************************************************************************************/
// 1) SinglePlayer_experience controller
.controller('SinglePlayer_ExpCtrl',function($scope, $state, $stateParams, $window, Players, PlayerSeasons, Teams) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = localStorage.getItem('tempPlayerId');
    $scope.players = response;
    
    function getById(arr, id) {
          for (var d = 0, len = arr.length; d < len; d += 1) {
              if (arr[d].id == id) /* Bilo je 3 === */ {
                  return arr[d];
              }
          }
      }

    /*$scope.i = true;
    $scope.$apply();
    if ($scope.i){
      $scope.i = false;
      $scope.$apply();
      window.location.reload(true);  
    }*/
    $scope.current_player = getById($scope.players, $scope.id_igraca);
    window.localStorage['playerTeamId'] = $scope.current_player.team_id;

  });

  /* PLAYER_SEASONS table */
  PlayerSeasons.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['tempPlayerId'];
    $scope.player_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].player_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_season = getById($scope.player_seasons, window.localStorage['tempPlayerId']);
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

// 2) SinglePlayer_stats controller
.controller('SinglePlayer_StatsCtrl', function($scope, Players, PlayerSeasons) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['tempPlayerId'];
    $scope.players = response;
  });
  /* PLAYER_SEASONS table */
  PlayerSeasons.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['tempPlayerId'];
    $scope.player_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].player_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_season = getById($scope.player_seasons, window.localStorage['tempPlayerId']);

  });
})

// 3) SinglePlayer_badges Controller
.controller('SinglePlayer_BadgesCtrl', function($scope, Players, PlayerBadges) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['tempPlayerId'];
    $scope.players = response;
  });
  /* PLAYER_BADGES table */
  PlayerBadges.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['tempPlayerId'];
    $scope.player_badges = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].player_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_badge = getById($scope.player_badges, window.localStorage['tempPlayerId']);

  });
})

// 4) SinglePlayer_Team Controller
.controller('SinglePlayer_TeamCtrl', function($scope, Players, Teams) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['tempPlayerId'];
    $scope.players = response;
  });
  /* PLAYER_SEASONS table */
  Teams.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['tempPlayerId'];
    $scope.teams = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_team = getById($scope.teams, window.localStorage['tempPlayerId']);
  });
})