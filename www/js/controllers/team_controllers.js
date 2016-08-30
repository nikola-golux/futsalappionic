angular.module('starter.controllers')

/***************************************************************************************************
* TEAM TABS CONTROLLERS
****************************************************************************************************/

.controller('Team_ExpCtrl', function($scope, Teams, TeamSeasons){
  Teams.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.teams = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_team = getById($scope.teams, window.localStorage['playerTeamId']);
  })

  /* TEAM_SEASONS table */
  TeamSeasons.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.team_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].team_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_team_season = getById($scope.team_seasons, window.localStorage['playerTeamId']);
  });
})


.controller('Team_StatsCtrl', function($scope, Teams, TeamSeasons){
  Teams.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.teams = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_team = getById($scope.teams, window.localStorage['playerTeamId']);
  })

  /* TEAM_SEASONS table */
  TeamSeasons.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.team_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].team_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_team_season = getById($scope.team_seasons, window.localStorage['playerTeamId']);
  });
})

// 3) Team_badges Controller
.controller('Team_BadgesCtrl', function($scope, Teams, TeamBadges) {
  /* TEAMS table */
  Teams.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.teams = response;
  });
  /* TEAM_BADGES table */
  TeamBadges.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.team_badges = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].team_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_team_badge = getById($scope.team_badges, window.localStorage['playerTeamId']);

  });
})

// 4) Team_players Controller
.controller('Team_PlayersCtrl', function($scope, $state, $stateParams, Teams, Players) {
  /* PLAYERS table */
  Teams.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['playerTeamId'];
    $scope.teams = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_team = getById($scope.teams, window.localStorage['playerTeamId']);
  });
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.players = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        var svi_rezultati = [];
        var i = 0;
        for (var d = 0, len = arr.length; d < len; d += 1) {
          if (arr[d].team_id == id) /* Bilo je 3 === */ {
                svi_rezultati[i]=arr[d];
                i += 1;
          }

        }
        return svi_rezultati;
    }

    $scope.current_team_players = getById($scope.players, window.localStorage['playerTeamId']);
    window.localStorage['current_team_players'] = $scope.current_team_players;
    
    $scope.go = function (id) {
      $state.go('single_player_tab.experience', {id});
      /*window.localStorage['tempPlayerId'] = id;*/
      localStorage.setItem("tempPlayerId", id);
    };
  });
})