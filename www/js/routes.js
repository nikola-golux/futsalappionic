angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngResource'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.defaults.withCredentials = true;

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  /**************************
  * HOME (WELCOME) TABS
  **************************/
  .state('home_tab', {
    url: '/home_tab',
    abstract: true,
    templateUrl: 'templates/home/home_tabs.html',
  })

  // 1) Login
  .state('home_tab.login', {
    url: '/login',
    views: {
      'home_tab-login': {
        templateUrl: 'templates/home/home_tab-login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  // 2) O nama
  .state('home_tab.o_nama', {
    url: '/o_nama',
    views: {
      'home_tab-o_nama': {
        templateUrl: 'templates/home/home_tab-o_nama.html',
        controller: 'O_namaCtrl'
      }
    }
  })

  // 3) Kontakt
  .state('home_tab.kontakt', {
    url: '/kontakt',
    views: {
      'home_tab-kontakt': {
        templateUrl: 'templates/home/home_tab-kontakt.html',
        controller: 'KontaktCtrl'
      }
    }
  })

  /**************************
  * DELEGATE TABS
  **************************/
  .state('delegate_tab', {
    url: '/delegate_tab',
    abstract: true,
    templateUrl: 'templates/delegate/delegate_tabs.html',
  })

  // 1) Matches
  .state('delegate_tab.matches', {
    url: '/matches',
    views: {
      'delegate_tab-matches': {
        templateUrl: 'templates/delegate/delegate_tab-matches.html',
        controller: 'Delegate_matchesCtrl'
      }
    }
  })

  // 2) Matches
  .state('delegate_tab.matches_played', {
    url: '/matches_played',
    views: {
      'delegate_tab-matches_played': {
        templateUrl: 'templates/delegate/delegate_tab-matches_played.html',
        controller: 'Delegate_matches_playedCtrl'
      }
    }
  })

  // 3) Info
  .state('delegate_tab.info', {
    url: '/info',
    views: {
      'delegate_tab-info': {
        templateUrl: 'templates/delegate/delegate_tab-info.html',
        controller: 'Delegate_infoCtrl'
      }
    }
  })
  /**************************
  * DELEGATE MATCH
  **************************/
  
  .state('delegate_match', {
    url: '/delegate_match',
    templateUrl: 'templates/match/delegate_match.html',
    controller: 'Delegate_matchCtrl'  
    })
  


  /*************************/


  /**************************
  * Player TABS
  **************************/
  .state('player_tab', {
    url: '/player_tab',
    abstract: true,
    templateUrl: 'templates/player/player_tabs.html'
  })

  // 1) Experience

  .state('player_tab.experience', {
    url: '/experience',
    views: {
      'player_tab-experience': {
        templateUrl: 'templates/player/player_tab-experience.html',
        controller: 'Player_ExpCtrl'
      }
    }
  })

  // 2) Stats

  .state('player_tab.stats', {
    url: '/stats',
    views: {
      'player_tab-stats': {
        templateUrl: 'templates/player/player_tab-stats.html',
        controller: 'Player_StatsCtrl'
      }
    }
  })
 
  // 3) Badges

  .state('player_tab.badges', {
      url: '/badges',
      views: {
        'player_tab-badges': {
          templateUrl: 'templates/player/player_tab-badges.html',
          controller: 'Player_BadgesCtrl'
        }
      }
    })

  // 4) Team

    .state('player_tab.team', {
      url: '/team',
      views: {
        'player_tab-team': {
          templateUrl: 'templates/player/player_tab-team.html',
          controller: 'Player_TeamCtrl'
        }
      }
    })

  /**************************
  * Single Player TABS
  **************************/
  .state('single_player_tab', {
    url: '/single_player_tab',
    abstract: true,
    templateUrl: 'templates/single_player/single_player_tabs.html'
  })

  // 1) Experience

  .state('single_player_tab.experience', {
    url: '/experience',
    views: {
      'single_player_tab-experience': {
        templateUrl: 'templates/single_player/single_player_tab-experience.html',
        controller: 'SinglePlayer_ExpCtrl'
      }
    }
  })

  // 2) Stats

  .state('single_player_tab.stats', {
    url: '/stats',
    views: {
      'single_player_tab-stats': {
        templateUrl: 'templates/single_player/single_player_tab-stats.html',
        controller: 'SinglePlayer_StatsCtrl'
      }
    }
  })
 
  // 3) Badges

  .state('single_player_tab.badges', {
      url: '/badges',
      views: {
        'single_player_tab-badges': {
          templateUrl: 'templates/single_player/single_player_tab-badges.html',
          controller: 'SinglePlayer_BadgesCtrl'
        }
      }
    })

  // 4) Team
  .state('single_player_tab.team', {
    url: '/team',
    views: {
      'single_player_tab-team': {
        templateUrl: 'templates/single_player/single_player_tab-team.html',
        controller: 'SinglePlayer_TeamCtrl'
      }
    }
  })

  /**************************
  * Team TABS
  **************************/
  .state('team_tab', {
    url: '/team_tab',
    abstract: true,
    templateUrl: 'templates/team/team_tabs.html'
  })

  // 1) Experience

  .state('team_tab.experience', {
    url: '/experience',
    views: {
      'team_tab-experience': {
        templateUrl: 'templates/team/team_tab-experience.html',
        controller: 'Team_ExpCtrl'
      }
    }
  })
  // 2) Stats

  .state('team_tab.stats', {
    url: '/stats',
    views: {
      'team_tab-stats': {
        templateUrl: 'templates/team/team_tab-stats.html',
        controller: 'Team_StatsCtrl'
      }
    }
  })
 
  // 3) Badges

  .state('team_tab.badges', {
      url: '/badges',
      views: {
        'team_tab-badges': {
          templateUrl: 'templates/team/team_tab-badges.html',
          controller: 'Team_BadgesCtrl'
        }
      }
    })

  // 4) Team

    .state('team_tab.players', {
      url: '/players',
      views: {
        'team_tab-players': {
          templateUrl: 'templates/team/team_tab-players.html',
          controller: 'Team_PlayersCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home_tab/login');

});