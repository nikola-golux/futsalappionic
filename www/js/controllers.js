angular.module('starter.controllers', [])

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

/****************************************************************************************************
* DELEGATE TABS CONTROLLERS
****************************************************************************************************/
// 1) Delegate_matches Controller
.controller('Delegate_matchesCtrl', function($scope, BlogEntry) {
  BlogEntry.query().$promise.then(function(response){
    $scope.blog_entries = response;
  });
})

// 2) Delegate_matches Controller
.controller('Delegate_infoCtrl', function($scope, BlogEntry) {
  BlogEntry.query().$promise.then(function(response){
    $scope.blog_entries = response;
  });
})

/****************************************************************************************************
* PLAYER TABS CONTROLLERS
****************************************************************************************************/
// 1) Player_experience controller
.controller('Player_ExpCtrl', function($scope, Players, PlayerSeasons) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.players = response;
  });
  /* PLAYER_SEASONS table */
  PlayerSeasons.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.player_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_season = getById($scope.player_seasons, window.localStorage['userPlayerId']);

  });
})

// 2) Player_stats controller
.controller('Player_StatsCtrl', function($scope, Players, PlayerSeasons) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.players = response;
  });
  /* PLAYER_SEASONS table */
  PlayerSeasons.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.player_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_season = getById($scope.player_seasons, window.localStorage['userPlayerId']);

  });
})

// 3) Player_badges Controller
.controller('Player_BadgesCtrl', function($scope, Players, PlayerBadges) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.players = response;
  });
  /* PLAYER_SEASONS table */
  PlayerBadges.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.player_badges = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_badge = getById($scope.player_badges, window.localStorage['userPlayerId']);

  });
})

// 4) Player_Team Controller
.controller('Player_TeamCtrl', function($scope, Players, Teams) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.players = response;
  });
  /* PLAYER_SEASONS table */
  Teams.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.teams = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_team = getById($scope.teams, window.localStorage['userPlayerId']);

  });
})

/***************************************************************************************************/

.controller('DashCtrl', function($scope, BlogEntry) {
  BlogEntry.query().$promise.then(function(response){
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
