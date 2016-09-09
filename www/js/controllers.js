angular.module('starter.controllers', ['angular-svg-round-progressbar'])

/****************************************************************************************************
* HOME (WELCOME) TABS CONTROLLERS
****************************************************************************************************/
// 1) Login Controller
.controller('LoginCtrl', function($scope, $location, UserSession, $ionicPopup, $rootScope) {
  $scope.data = {};

  $scope.login = function() {
    var user_session = new UserSession({ user: $scope.data });
    user_session.$save(
      function(data){
        window.localStorage['userId'] = null;
        window.localStorage['userId'] = data.id;
        window.localStorage['userPlayerId'] = data.player_id;
        window.localStorage['userDelegateId'] = data.delegate_id;
        /*window.localStorage['userName'] = data.name;*/
        if(data.player_id != 0 && data.player_id != null){
          $location.path('/player_tab/experience');
        }
        else if(data.delegate_id !=0 && data.delegate_id != null){
          $location.path('/delegate_tab/matches');
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
})

// 2) O_nama Controller
.controller('O_namaCtrl', function($scope, BlogEntry) {
  BlogEntry.query().$promise.then(function(response){
    $scope.blog_entries = response;
  });
})

// 3) Kontakt Controller
.controller('KontaktCtrl', function($scope, BlogEntry) {
  BlogEntry.query().$promise.then(function(response){
    $scope.blog_entries = response;
  });
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