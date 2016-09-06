angular.module('starter.controllers')

/****************************************************************************************************
* DELEGATE_MATCH CONTROLLERS
****************************************************************************************************/
.controller('Delegate_matchCtrl', function($scope, $http, $state, Matches, HomeTeams, Teams) {
  Matches.query().$promise.then(function(response){
    $scope.id_delegata = window.localStorage['userDelegateId'];
    $scope.id_meca = localStorage.getItem('delegateMatchId');
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

  $scope.start_match = function(){
    var match = 'http://192.168.1.104:3000/api/v1/change_match_started';

    $http.put(match,{ id : $scope.id_meca}).then(function(res){ $scope.response = res.data;
      })
  }

  $scope.finish_match = function(){
    var match = 'http://192.168.1.104:3000/api/v1/change_second_half_ended';

    $http.put(match,{ id : $scope.id_meca}).then(function(res){ $scope.response = res.data;
      })
  }

/*******************************************************************************************************
*SKAKNJE NA GOAL STRANU
*******************************************************************************************************/

    $scope.go_home_goal = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_goal', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }

    }
    $scope.go_away_goal = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_goal', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }
    }

/*******************************************************************************************************
*SKAKNJE NA ASSIST STRANU
*******************************************************************************************************/

    $scope.go_home_assist = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_assist', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }

    }
    $scope.go_away_assist = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_assist', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }
    }

/*******************************************************************************************************
*SKAKNJE NA FOUL STRANU
*******************************************************************************************************/

    $scope.go_home_foul = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_foul', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }

    }
    $scope.go_away_foul = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_foul', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }
    }

/*******************************************************************************************************
*SKAKNJE NA STRANU YELLOW CARD
*******************************************************************************************************/

    $scope.go_home_yellow_card = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_yellow_card', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }

    }
    $scope.go_away_yellow_card = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_yellow_card', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }
    }

/*******************************************************************************************************
*SKAKNJE NA STRANU RED CARD
*******************************************************************************************************/

    $scope.go_home_red_card = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_red_card', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }

    }
    $scope.go_away_red_card = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_red_card', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }
    }

/*******************************************************************************************************
*SKAKNJE NA STRANU GOALKEEPER SAVES
*******************************************************************************************************/

    $scope.go_home_goalkeeper_saves = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_goalkeeper_save', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }

    }
    $scope.go_away_goalkeeper_saves = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_goalkeeper_save', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }
    }

/*******************************************************************************************************
* SKAKNJE NA STRANU SHOOT
*******************************************************************************************************/

    $scope.go_home_shoot = function (id) {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('home_team_shoot', {}, { reload: true });
      $scope.i = true;
      if ($scope.i){
        $scope.i = false;
        window.location.reload(true); 
      }

    }
    $scope.go_away_shoot = function () {
      localStorage.setItem('current_match', $scope.id_meca);
      $state.go('away_team_shoot', {});
    }
  });
})