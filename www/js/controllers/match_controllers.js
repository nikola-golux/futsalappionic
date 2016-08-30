angular.module('starter.controllers')

/****************************************************************************************************
* DELEGATE_MATCH CONTROLLERS
****************************************************************************************************/
.controller('Delegate_matchCtrl', function($scope, Matches, HomeTeams, Teams) {
  Matches.query().$promise.then(function(response){
    $scope.id_delegata = window.localStorage['userDelegateId'];
    $scope.matches = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        var svi_rezultati = [];
        var i = 0;
        for (var d = 0, len = arr.length; d < len; d += 1) {
          if (arr[d].delegate_id == id) /* Bilo je 3 === */ {
                svi_rezultati[i]=arr[d];
                i += 1;
          }

        }
        return svi_rezultati;
    }
    $scope.mecevi_delegata = getById($scope.matches, window.localStorage['userDelegateId']);
  });
})