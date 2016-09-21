angular.module('starter.controllers')

/***************************************************************************************************
* TEAM TABS CONTROLLERS
****************************************************************************************************/

.controller('Team_ExpCtrl', function($scope, Team, TeamSeason){
  //---------------------------------------------
  // Radimo JSON GET ekipe tog igraca
  //---------------------------------------------
  $scope.current_player_team_json = Team.get({},{'Id': window.localStorage['playerTeamId']});
  $scope.current_player_team_json.$promise.then(function(response) {
      $scope.current_team = response;
  });

  //---------------------------------------------
  // Radimo JSON GET tim sezone tog igraca
  //---------------------------------------------
  $scope.current_team_season_json = TeamSeason.get({},{'Id': window.localStorage['playerTeamId']});
  $scope.current_team_season_json.$promise.then(function(response) {
      $scope.current_team_season = response;
      var do_sledeceg_levela_float = trenutni_experience_u_procentima($scope.current_team_season.expirience ,$scope.current_team_season.level);
      $scope.do_sledeceg_levela = parseInt(do_sledeceg_levela_float, 10);
  });
})


.controller('Team_StatsCtrl', function($scope, Team, TeamSeason){
  //---------------------------------------------
  // Radimo JSON GET ekipe tog igraca
  //---------------------------------------------
  $scope.current_player_team_json = Team.get({},{'Id': window.localStorage['playerTeamId']});
  $scope.current_player_team_json.$promise.then(function(response) {
      $scope.current_team = response;
  });

  //---------------------------------------------
  // Radimo JSON GET tim sezone tog igraca
  //---------------------------------------------
  $scope.current_team_season_json = TeamSeason.get({},{'Id': window.localStorage['playerTeamId']});
  $scope.current_team_season_json.$promise.then(function(response) {
      $scope.current_team_season = response;
  });
})

// 3) Team_badges Controller
.controller('Team_BadgesCtrl', function($scope, Team, TeamBadge) {
  //---------------------------------------------
  // Radimo JSON GET ekipe tog igraca
  //---------------------------------------------
  $scope.current_player_team_json = Team.get({},{'Id': window.localStorage['playerTeamId']});
  $scope.current_player_team_json.$promise.then(function(response) {
      $scope.current_team = response;
  });

  //---------------------------------------------
  // Radimo JSON GET tim sezone tog igraca
  //---------------------------------------------
  $scope.current_team_badge_json = TeamBadge.get({},{'Id': window.localStorage['playerTeamId']});
  $scope.current_team_badge_json.$promise.then(function(response) {
      $scope.current_team_badge = response;
  });
})

// 4) Team_players Controller
.controller('Team_PlayersCtrl', function($scope, $state, $stateParams, Team, Players) {
  //---------------------------------------------
  // Radimo JSON GET ekipe tog igraca
  //---------------------------------------------
  $scope.current_player_team_json = Team.get({},{'Id': window.localStorage['playerTeamId']});
  $scope.current_player_team_json.$promise.then(function(response) {
      $scope.current_team = response;
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
      localStorage.setItem("tempPlayerId", id);
      $state.go('single_player_tab.experience');
      /*window.localStorage['tempPlayerId'] = id;*/
    };
  });
})