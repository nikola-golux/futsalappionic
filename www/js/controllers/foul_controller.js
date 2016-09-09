/**************************************************
* 1) Odavde skacemo na CURRENT MATCH iz sesije meca
* 2) Pa skacemo na home team
* 3) Pa uporedjujemo koji je tim u home timu
* 4) Pa onda izlistavamo sve igrace tog tima
* 5) I na kraju otvaramo njihove player sezone
*
****************************************************/
angular.module('starter.controllers')

/****************************************************************************************************
* HOME FOUL CONTROLLERS
****************************************************************************************************/
.controller('HomeFoul_Ctrl', function($scope, $state, $http, Matches, HomeTeams, Teams, Players, PlayerSeasons) {
  Matches.query().$promise.then(function(response){
    $scope.id_meca = localStorage.getItem('current_match');
    $scope.matches = response;
    /* Funkcija za nalazenje JSON elementa */

    $scope.mec_delegata = getById($scope.matches, $scope.id_meca);
    localStorage.setItem('hometeam_id', $scope.mec_delegata.home_team_id);
  });

  /* PLAYERS table */
  HomeTeams.query().$promise.then(function(response){
    $scope.hometeam_id = localStorage.getItem('hometeam_id');
    $scope.home_teams = response;
    /* Funkcija za nalazenje JSON elementa */
 
    $scope.home_team = getById($scope.home_teams,  $scope.hometeam_id);
    localStorage.setItem('current_hometeam_team_id', $scope.home_team.team_id);
  });

  /* PLAYERS table */
  Teams.query().$promise.then(function(response){
    $scope.id_meca = localStorage.getItem('delegateMatchId');
    $scope.teams = response;
    $scope.current_team_id = localStorage.getItem('current_hometeam_team_id');

    $scope.current_team = getById($scope.teams, $scope.current_team_id);
  });

  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.players = response;


    $scope.current_team_players = getAllId($scope.players, $scope.current_team.id);
  });

    /* PLAYER_SEASONS table */
  PlayerSeasons.query().$promise.then(function(response){
    $scope.id_igraca_na_mecu = $scope.current_team_players;
    $scope.player_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getPlayerSeasonById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].player_id == id) /* Bilo je 3 === */ {
                return arr[d].id;
            }
        }
    }

    $scope.current_player_season = getPlayerSeasonById($scope.player_seasons, $scope.id_igraca_na_mecu);
      
    $scope.submit_home = function(id) {

      var player_season_that_scored_foul = getPlayerSeasonById($scope.player_seasons, id);
      var foul = 'http://192.168.1.104:3000/api/v1/fouls';
      
      $http.post(foul,{ player_season_id : player_season_that_scored_foul,
                        match_id : $scope.id_meca,
                        is_home : true}).then(function(res){ $scope.response = res.data;
      })
      
      
      $state.go('delegate_match', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true);  
      }
    }
  });
})

/****************************************************************************************************
* AWAY FOUL CONTROLLERS
****************************************************************************************************/
.controller('AwayFoul_Ctrl', function($scope, $state, $http, $stateParams, Matches, AwayTeams, Teams, Players, PlayerSeasons) {
  Matches.query().$promise.then(function(response){
    $scope.id_meca = localStorage.getItem('current_match');
    $scope.matches = response;
  
    $scope.mec_delegata = getById($scope.matches, $scope.id_meca);
    localStorage.setItem('awayteam_id', $scope.mec_delegata.away_team_id);
  });

  /* PLAYERS table */
  AwayTeams.query().$promise.then(function(response){
    $scope.awayteam_id = localStorage.getItem('awayteam_id');
    $scope.away_teams = response;
   
    $scope.away_team = getById($scope.away_teams,  $scope.awayteam_id);
    localStorage.setItem('current_awayteam_team_id', $scope.away_team.team_id);
  });

  /* PLAYERS table */
  Teams.query().$promise.then(function(response){
    $scope.id_meca = localStorage.getItem('delegateMatchId');
    $scope.teams = response;
    $scope.current_team_id = localStorage.getItem('current_awayteam_team_id');
    /* Funkcija za nalazenje JSON elementa */
   
    $scope.current_team = getById($scope.teams, $scope.current_team_id);
  });

  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.players = response;
    /* Funkcija za nalazenje JSON elementa */
  

    $scope.current_team_players = getAllId($scope.players, $scope.current_team.id);
  });

    /* PLAYER_SEASONS table */
  PlayerSeasons.query().$promise.then(function(response){
    $scope.id_igraca_na_mecu = $scope.current_team_players;
    $scope.player_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getPlayerSeasonById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].player_id == id) /* Bilo je 3 === */ {
                return arr[d].id;
            }
        }
    }

    $scope.current_player_season = getPlayerSeasonById($scope.player_seasons, $scope.id_igraca_na_mecu);
      
    $scope.submit_away = function(id) {

      var player_season_that_scored_fouls = getPlayerSeasonById($scope.player_seasons, id);
      var foul = 'http://192.168.1.104:3000/api/v1/fouls';
      
      $http.post(foul,{ player_season_id : player_season_that_scored_fouls,
                        match_id : $scope.id_meca,
                        is_home : false}).then(function(res){ $scope.response = res.data;
      })
      
      
      $state.go('delegate_match', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true);  
      }
    }
  });
})