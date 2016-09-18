angular.module('starter.controllers')

/****************************************************************************************************
* DELEGATE_MATCH CONTROLLERS
****************************************************************************************************/
.controller('Delegate_matchCtrl', function($scope, $http, $state, Matches, HomeTeams, Teams) {
  $scope.$on('$ionicView.enter', function() {
  Matches.query().$promise.then(function(response){
    $scope.id_delegata = window.localStorage['userDelegateId'];
    $scope.id_meca = localStorage.getItem('delegateMatchId');
    
    var doRefresh = function(){ 
      $scope.matches = response;
      $scope.mec_delegata = getById($scope.matches, $scope.id_meca);
      $scope.homeshoots = $scope.mec_delegata.home_shoots;
      $scope.awayshoots = $scope.mec_delegata.away_shoots;
    }
    doRefresh();

  $scope.start_match = function(){
    var match = 'http://balf.rs/api/v1/change_match_started';

    $http.put(match,{ id : $scope.id_meca}).then(function(res){ $scope.response = res.data; })
  }

  $scope.finish_match = function(){
    var match = 'http://balf.rs/api/v1/change_second_half_ended';

    $http.put(match,{ id : $scope.id_meca}).then(function(res){ $scope.response = res.data; })
    $state.go('delegate_tab.matches_played');
  }

/*******************************************************************************************************
*SKAKNJE NA GOAL STRANU
*******************************************************************************************************/

    $scope.go_home_goal = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_goal');
    }
    $scope.go_away_goal = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_goal');
    }

/*******************************************************************************************************
*SKAKNJE NA ASSIST STRANU
*******************************************************************************************************/

    $scope.go_home_assist = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_assist');
    }
    $scope.go_away_assist = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_assist');
    }

/*******************************************************************************************************
*SKAKNJE NA FOUL STRANU
*******************************************************************************************************/

    $scope.go_home_foul = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_foul');
    }
    $scope.go_away_foul = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_foul');
    }

/*******************************************************************************************************
*SKAKNJE NA STRANU YELLOW CARD
*******************************************************************************************************/

    $scope.go_home_yellow_card = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_yellow_card');
    }
    $scope.go_away_yellow_card = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_yellow_card');
    }

/*******************************************************************************************************
*SKAKNJE NA STRANU RED CARD
*******************************************************************************************************/

    $scope.go_home_red_card = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_red_card');

    }
    $scope.go_away_red_card = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_red_card');
    }

/*******************************************************************************************************
*SKAKNJE NA STRANU GOALKEEPER SAVES
*******************************************************************************************************/

    $scope.go_home_goalkeeper_saves = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_goalkeeper_save');

    }
    $scope.go_away_goalkeeper_saves = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_goalkeeper_save');

    }

/*******************************************************************************************************
* SKAKNJE NA STRANU SHOOT
*******************************************************************************************************/

    $scope.go_home_shoot = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_shoot', {}, { reload: true, inherit: false });
    }
    $scope.go_away_shoot = function () {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_shoot', {}, { reload: true, inherit: false });
    }

/*******************************************************************************************************
* IZBOR IGRACA
*******************************************************************************************************/

    $scope.go_choose_home_players = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('choose_home_players', {}, { reload: true });
    }
    $scope.go_choose_away_players = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('choose_away_players', {}, { reload: true });

    }
    
  });
  });
})
