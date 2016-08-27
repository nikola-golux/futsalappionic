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
.controller('Delegate_matchesCtrl', function($scope, Matches, HomeTeams, Teams) {
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

// 2) Delegate_matches Controller
.controller('Delegate_infoCtrl', function($scope, BlogEntry) {
  BlogEntry.query().$promise.then(function(response){
    $scope.blog_entries = response;
  });
})
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

/****************************************************************************************************
* PLAYER TABS CONTROLLERS
****************************************************************************************************/
// 1) Player_experience controller
.controller('Player_ExpCtrl', function($scope, $state, $stateParams, $window, Players, PlayerSeasons, Teams) {
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.players = response;
    
    function getById(arr, id) {
          for (var d = 0, len = arr.length; d < len; d += 1) {
              if (arr[d].id == id) /* Bilo je 3 === */ {
                  return arr[d];
              }
          }
      }

    $scope.current_player = getById($scope.players, window.localStorage['userPlayerId']);
    window.localStorage['playerTeamId'] = $scope.current_player.team_id;
  });

  /* PLAYER_SEASONS table */
  PlayerSeasons.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.player_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].player_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_player_season = getById($scope.player_seasons, window.localStorage['userPlayerId']);
  });

  /* TEAMS table */
  Teams.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.teams = response;
    
    function getById(arr, id) {
            for (var d = 0, len = arr.length; d < len; d += 1) {
                if (arr[d].id == id) /* Bilo je 3 === */ {
                    return arr[d];
                }
            }
        }

    $scope.current_team = getById($scope.teams, window.localStorage['playerTeamId']);
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
            if (arr[d].player_id == id) /* Bilo je 3 === */ {
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
  /* PLAYER_BADGES table */
  PlayerBadges.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['userPlayerId'];
    $scope.player_badges = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].player_id == id) /* Bilo je 3 === */ {
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


/***************************************************************************************************
* TEAM TABS CONTROLLERS
****************************************************************************************************/

.controller('Team_ExpCtrl', function($scope, Teams, TeamSeasons){
  Teams.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.teams = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_team = getById($scope.teams, window.localStorage['playerTeamId']);
  })

  /* TEAM_SEASONS table */
  TeamSeasons.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.team_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].team_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_team_season = getById($scope.team_seasons, window.localStorage['playerTeamId']);
  });
})


.controller('Team_StatsCtrl', function($scope, Teams, TeamSeasons){
  Teams.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.teams = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_team = getById($scope.teams, window.localStorage['playerTeamId']);
  })

  /* TEAM_SEASONS table */
  TeamSeasons.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.team_seasons = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].team_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_team_season = getById($scope.team_seasons, window.localStorage['playerTeamId']);
  });
})

// 3) Team_badges Controller
.controller('Team_BadgesCtrl', function($scope, Teams, TeamBadges) {
  /* TEAMS table */
  Teams.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.teams = response;
  });
  /* TEAM_BADGES table */
  TeamBadges.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.team_badges = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].team_id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_team_badge = getById($scope.team_badges, window.localStorage['playerTeamId']);

  });
})

// 4) Team_players Controller
.controller('Team_PlayersCtrl', function($scope, $state, $stateParams, Teams, Players) {
  /* PLAYERS table */
  Teams.query().$promise.then(function(response){
    $scope.id_igraca = window.localStorage['playerTeamId'];
    $scope.teams = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
            if (arr[d].id == id) /* Bilo je 3 === */ {
                return arr[d];
            }
        }
    }

    $scope.current_team = getById($scope.teams, window.localStorage['playerTeamId']);
  });
  /* PLAYERS table */
  Players.query().$promise.then(function(response){
    $scope.id_tima_igraca = window.localStorage['playerTeamId'];
    $scope.players = response;
    /* Funkcija za nalazenje JSON elementa */
    function getById(arr, id) {
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

    $scope.current_team_players = getById($scope.players, window.localStorage['playerTeamId']);
    
    $scope.params = $stateParams;
    $scope.go = function (id) {
      $state.go('player_tab.experience', { id : id });
    };
  });
})

/***************************************************************************************************/

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
