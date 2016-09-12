angular.module('starter.controllers', ['angular-svg-round-progressbar'])

/****************************************************************************************************
* HOME (WELCOME) TABS CONTROLLERS
****************************************************************************************************/
// 1) Login Controller
.controller('LoginCtrl', function($scope, $state, $location, UserSession, $ionicPopup, $rootScope) {
  $scope.data = {};

  $scope.login = function() {
    var user_session = new UserSession({ user: $scope.data });
    user_session.$save(
      function(data){
        window.localStorage['userId'] = null;
        window.localStorage['userId'] = data.id;
        window.localStorage['userPlayerId'] = data.player_id;
        window.localStorage['userDelegateId'] = data.delegate_id;
        localStorage.setItem('is_logged_in', true);
        logged_in = 10;
        /*window.localStorage['userName'] = data.name;*/
        if(data.player_id != 0 && data.player_id != null){
          localStorage.setItem('is_player', true);
          localStorage.setItem('is_delegate', false);
          window.localStorage['userDelegateId'] = null;
          $location.path('/player_tab/experience');
          $scope.i = true;
          $scope.$apply();
          if ($scope.i){
            $scope.i = false;
            $scope.$apply();
            window.location.reload(true);  
          }
        }
        else if(data.delegate_id !=0 && data.delegate_id != null){
          localStorage.setItem('is_player', false);
          localStorage.setItem('is_delegate', true);
          window.localStorage['userPlayerId'] = null;
          $location.path('/delegate_tab/matches');
          $scope.i = true;
          $scope.$apply();
          if ($scope.i){
            $scope.i = false;
            $scope.$apply();
            window.location.reload(true);  
          }
        }
      },
      function(error){
        $ionicPopup.alert({
          title: 'Incorrect password',
          template: 'Please try again!'
        });
      }
    );
  }

  $scope.logout = function(){
    // localStorage.setItem('userId', null);
    localStorage.setItem('userId', null);
    localStorage.setItem('is_logged_in', false);
    localStorage.setItem('is_player', false);
    localStorage.setItem('is_delegate', false);
    logged_in = null;
    $state.go('home_tab.login', {}, { reload: true });
    $scope.i = true;
    $scope.$apply();
    if ($scope.i){
      $scope.i = false;
      $scope.$apply();
      window.location.reload(true);  
    }
  };

  logged_in = localStorage.getItem('userId');
  var logged_in2 = 100;

  $scope.ulogovan = function() {
      return localStorage.getItem('is_logged_in');
  }
  console.log('ulogovan= ' + localStorage.getItem('is_logged_in'));

  $scope.ulogovan_igrac = function() {
      return localStorage.getItem('is_player');
  }
  console.log('ulogovan_igrac= ' + localStorage.getItem('is_player'));

  $scope.ulogovan_delegat = function() {
      return localStorage.getItem('is_delegate');
  }
  console.log('ulogovan_delegat= ' + localStorage.getItem('is_delegate'));
})

// 2) O_nama Controller
.controller('O_namaCtrl', function($scope) {

})

// 3) Kontakt Controller
.controller('KontaktCtrl', function($scope) {

})






/***************************************************************************************************
* Stari kod (IONIC EXAMPLE)
***************************************************************************************************/
.controller('DashCtrl', function($scope, Players) {
  Players.query().$promise.then(function(response){
    $scope.blog_entries = response;

  });
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});



/****************************************************************************************************
* General Functions
****************************************************************************************************/
/* Funkcija za nalazenje JSON elementa */
// Pretrazuje niz, i vraca jedan element niza koji ima odredjeni "id"
var getById = function(arr, id) {
  for (var d = 0, len = arr.length; d < len; d += 1) {
      if (arr[d].id == id) /* Bilo je 3 === */ {
          return arr[d];
      }
  }
}


/* Funkcija za za izlistavanje JSON elementa */
var getAllId =  function (arr, id) {
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

/* Funkcija za za izlistavanje JSON elementa */
var getAllHomeMatchPlayersByMatchId =  function (arr, id) {
    var svi_rezultati = [];
    var i = 0;
    for (var d = 0, len = arr.length; d < len; d += 1) {
      if ((arr[d].match_id == id) && (arr[d].is_home == true)) /* Bilo je 3 === */ {
            svi_rezultati[i]=arr[d];
            i += 1;
      }

    }
    return svi_rezultati;
}

/* Funkcija za za izlistavanje JSON elementa */
var getAllAwayMatchPlayersByMatchId =  function (arr, id) {
    var svi_rezultati = [];
    var i = 0;
    for (var d = 0, len = arr.length; d < len; d += 1) {
      if ((arr[d].match_id == id) && (arr[d].is_home == false)) /* Bilo je 3 === */ {
            svi_rezultati[i]=arr[d];
            i += 1;
      }

    }
    return svi_rezultati;
}