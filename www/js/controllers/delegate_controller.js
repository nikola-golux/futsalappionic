angular.module('starter.controllers')

/****************************************************************************************************
* DELEGATE TABS CONTROLLERS
****************************************************************************************************/
// 1) Delegate_matches Controller
.controller('Delegate_matchesCtrl', function($scope, $state, $stateParams, Matches, HomeTeams, Teams) {
  Matches.query().$promise.then(function(response){
    $scope.id_delegata = window.localStorage['userDelegateId'];
    $scope.matches = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        var svi_rezultati = [];
        var i = 0;
        for (var d = 0, len = arr.length; d < len; d += 1) {
          if ((arr[d].delegate_id == id) && (arr[d].is_match_finished == false)) /* Bilo je 3 === */ {
                svi_rezultati[i]=arr[d];
                i += 1;
          }

        }
        return svi_rezultati;
    }
    $scope.mecevi_delegata = getById($scope.matches, window.localStorage['userDelegateId']);
    
    $scope.go = function (id) {
      localStorage.setItem("delegateMatchId", id);
      $state.go('delegate_match', {}, { reload: true });
      $scope.i = true;
      $scope.$apply();
      if ($scope.i){
        $scope.i = false;
        $scope.$apply();
        window.location.reload(true);  
      }
    }
  });
})

// 2) Delegate_matches_played Controller
.controller('Delegate_matches_playedCtrl', function($scope, $state, Matches, HomeTeams, Teams) {
  Matches.query().$promise.then(function(response){
    $scope.id_delegata = window.localStorage['userDelegateId'];
    $scope.matches = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        var svi_rezultati = [];
        var i = 0;
        for (var d = 0, len = arr.length; d < len; d += 1) {
          if ((arr[d].delegate_id == id) && (arr[d].is_match_finished != false)) /* Bilo je 3 === */ {
                svi_rezultati[i]=arr[d];
                i += 1;
          }

        }
        return svi_rezultati;
    }
    $scope.mecevi_delegata = getById($scope.matches, window.localStorage['userDelegateId']);

    $scope.go = function(id){
      localStorage.setItem('delegateMatchId', id);
      $state.go('match_played_tab.match_result', {}, {reload: true});
      $scope.i = true;
      $scope.$apply();
      if ($scope.i){
        $scope.i = false;
        $scope.$apply();
        window.location.reload(true);  
      }      
    }
  });

})

// 3) Delegate_info Controller
.controller('Delegate_infoCtrl', function($scope, Delegates) {
  Delegates.query().$promise.then(function(response){
    $scope.id_delegata = window.localStorage['userDelegateId'];
    $scope.delegates = response;

    function getById(arr, id) {
          for (var d = 0, len = arr.length; d < len; d += 1) {
              if (arr[d].id == id) /* Bilo je 3 === */ {
                  return arr[d];
              }
          }
      }
      $scope.current_delegate = getById($scope.delegates, window.localStorage['userDelegateId']);
  });
})