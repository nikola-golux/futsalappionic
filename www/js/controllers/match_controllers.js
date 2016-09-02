angular.module('starter.controllers')

/****************************************************************************************************
* DELEGATE_MATCH CONTROLLERS
****************************************************************************************************/
.controller('Delegate_matchCtrl', function($scope, Matches, HomeTeams, Teams) {
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
  });
})