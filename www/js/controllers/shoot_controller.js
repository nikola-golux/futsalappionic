/**************************************************
* 1) Odavde skacemo na CURRENT MATCH iz sesije meca
* 2) Pa skacemo na home team
* 3) Pa uporedjujemo koji je tim u home timu
* 4) Pa definisemo tim sezonu tog tima
*
****************************************************/
angular.module('starter.controllers')

/****************************************************************************************************
* HOME SHOOT CONTROLLERS
****************************************************************************************************/
.controller('HomeShoot_Ctrl', function($scope, $state, $http, $stateParams, Matches, HomeTeams, Teams, TeamSeasons) {
  Matches.query().$promise.then(function(response){
    $scope.id_meca = localStorage.getItem('current_match');
    $scope.matches = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
          for (var d = 0, len = arr.length; d < len; d += 1) {
              if (arr[d].id == id) /* Bilo je 3 === */ {
                  return arr[d];
              }
          }
      }
    $scope.mec_delegata = getById($scope.matches, $scope.id_meca);
    localStorage.setItem('hometeam_id', $scope.mec_delegata.home_team_id);
  });

  /* PLAYERS table */
  HomeTeams.query().$promise.then(function(response){
    $scope.hometeam_id = localStorage.getItem('hometeam_id');
    $scope.home_teams = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
          for (var d = 0, len = arr.length; d < len; d += 1) {
              if (arr[d].id == id) /* Bilo je 3 === */ {
                  return arr[d];
              }
          }
      }
    $scope.home_team = getById($scope.home_teams,  $scope.hometeam_id);
    localStorage.setItem('current_hometeam_team_id', $scope.home_team.team_id);
  });

  /* PLAYERS table */
  Teams.query().$promise.then(function(response){
    $scope.id_meca = localStorage.getItem('delegateMatchId');
    $scope.teams = response;
    $scope.current_team_id = localStorage.getItem('current_hometeam_team_id');
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
          for (var d = 0, len = arr.length; d < len; d += 1) {
              if (arr[d].id == id) /* Bilo je 3 === */ {
                  return arr[d].id;
              }
          }
      }
    $scope.current_team = getById($scope.teams, $scope.current_team_id);
  });

    /* PLAYER_SEASONS table */
  TeamSeasons.query().$promise.then(function(response){
    $scope.id_tima = $scope.current_team;
    $scope.team_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getTeamSeasonById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].team_id == id) /* Bilo je 3 === */ {
                return arr[d].id;
            }
        }
    }

    $scope.current_team_season = getTeamSeasonById($scope.team_seasons, $scope.id_tima);
     

    var shoot = 'http://192.168.1.104:3000/api/v1/new_home_shoot';
    
    $http.post(shoot,{ team_season_id : $scope.current_team_season,
                      match_id : $scope.id_meca,
                      is_home : true}).then(function(res){ $scope.response = res.data;
    })
    $state.go('delegate_match', {}, { reload: true });                 
    $scope.i = true;
    if ($scope.i){
      $scope.i = false;
      window.location.reload(true);  
    }
  });
})

/****************************************************************************************************
* AWAY SHOOT CONTROLLERS
****************************************************************************************************/
.controller('AwayShoot_Ctrl', function($scope, $state, $http, $stateParams, Matches, AwayTeams, Teams, TeamSeasons) {
  Matches.query().$promise.then(function(response){
    $scope.id_meca = localStorage.getItem('current_match');
    $scope.matches = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
          for (var d = 0, len = arr.length; d < len; d += 1) {
              if (arr[d].id == id) /* Bilo je 3 === */ {
                  return arr[d];
              }
          }
      }
    $scope.mec_delegata = getById($scope.matches, $scope.id_meca);
    localStorage.setItem('awayteam_id', $scope.mec_delegata.away_team_id);
  });

  /* PLAYERS table */
  AwayTeams.query().$promise.then(function(response){
    $scope.awayteam_id = localStorage.getItem('awayteam_id');
    $scope.away_teams = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
          for (var d = 0, len = arr.length; d < len; d += 1) {
              if (arr[d].id == id) /* Bilo je 3 === */ {
                  return arr[d];
              }
          }
      }
    $scope.away_team = getById($scope.away_teams,  $scope.awayteam_id);
    localStorage.setItem('current_awayteam_team_id', $scope.away_team.team_id);
  });

  /* PLAYERS table */
  Teams.query().$promise.then(function(response){
    $scope.id_meca = localStorage.getItem('delegateMatchId');
    $scope.teams = response;
    $scope.current_team_id = localStorage.getItem('current_awayteam_team_id');
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
          for (var d = 0, len = arr.length; d < len; d += 1) {
              if (arr[d].id == id) /* Bilo je 3 === */ {
                  return arr[d];
              }
          }
      }
    $scope.current_team = getById($scope.teams, $scope.current_team_id);
  });

    /* PLAYER_SEASONS table */
  TeamSeasons.query().$promise.then(function(response){
    $scope.id_tima = $scope.current_team.id;
    $scope.team_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getTeamSeasonById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].team_id == id) /* Bilo je 3 === */ {
                return arr[d].id;
            }
        }
    }

    $scope.current_team_season = getTeamSeasonById($scope.team_seasons, $scope.id_tima);
     

    var shoot = 'http://192.168.1.104:3000/api/v1/new_away_shoot';
    
    $http.post(shoot,{ team_season_id : $scope.current_team_season,
                      match_id : $scope.id_meca,
                      is_home : false}).then(function(res){ $scope.response = res.data;
    })
    $state.go('delegate_match', {}, { reload: true });                 
    $scope.i = true;
    if ($scope.i){
      $scope.i = false;
      window.location.reload(true);  
    }
  });
})