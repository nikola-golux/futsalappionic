angular.module('starter.controllers')

/****************************************************************************************************
* MOJE UTAKMICE CONTROLLER
****************************************************************************************************/
.controller('UtakmiceIgraca_Ctrl', function($scope, $state, $stateParams, Matches, Player, Team) {
  $scope.id_igraca = window.localStorage['userPlayerId'];
  
  //---------------------------------------------
  // Radimo JSON GET tacno tog ulogovanog igraca
  //---------------------------------------------
  $scope.current_player_json = Player.get({},{'Id': window.localStorage['userPlayerId']});
  $scope.current_player_json.$promise.then(function(response) {
      $scope.current_player = response;
  });
  
  //---------------------------------------------
  // Radimo JSON GET ekipe tog igraca
  //---------------------------------------------
  $scope.current_player_team_json = Team.get({},{'Id': window.localStorage['playerTeamId']});
  $scope.current_player_team_json.$promise.then(function(response) {
      $scope.current_team = response;
  });

  Matches.query().$promise.then(function(response){
    $scope.matches = response;

    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        var svi_rezultati = [];
        var i = 0;
        for (var d = 0, len = arr.length; d < len; d += 1) {
          if (((arr[d].home_team_id == id) || (arr[d].away_team_id == id)) && (arr[d].is_match_finished == false)) {
                svi_rezultati[i]=arr[d];
                i += 1;
          }
        }
        return svi_rezultati;
    }

    $scope.mecevi_igraca = getById($scope.matches, window.localStorage['playerTeamId']);
  });
})