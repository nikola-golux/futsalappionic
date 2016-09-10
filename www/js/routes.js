angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngResource'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');

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
          controller: 'Player_TeamCtrl',
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
    })


  /**************************
  * DELEGATE MATCH
  **************************/
  
  .state('delegate_match', {
    url: '/delegate_match',
    templateUrl: 'templates/match/delegate_match.html',
    controller: 'Delegate_matchCtrl' 
    })
  

  /**************************
  * Goals
  **************************/
  .state('home_team_goal', {
    url: '/home_team_goal',
    templateUrl: 'templates/goal/home_team_goal.html',
    controller: 'HomeGoal_Ctrl'  
  })

  .state('away_team_goal', {
    url: '/away_team_goal',
    templateUrl: 'templates/goal/away_team_goal.html',
    controller: 'AwayGoal_Ctrl'  
  })

  /**************************
  * Assists
  **************************/
  .state('home_team_assist', {
    url: '/home_team_assist',
    templateUrl: 'templates/assist/home_team_assist.html',
    controller: 'HomeAssist_Ctrl'  
  })

  .state('away_team_assist', {
    url: '/away_team_assist',
    templateUrl: 'templates/assist/away_team_assist.html',
    controller: 'AwayAssist_Ctrl'  
  })

  /**************************
  * Fouls
  **************************/
  .state('home_team_foul', {
    url: '/home_team_foul',
    templateUrl: 'templates/foul/home_team_foul.html',
    controller: 'HomeFoul_Ctrl'  
  })

  .state('away_team_foul', {
    url: '/away_team_foul',
    templateUrl: 'templates/foul/away_team_foul.html',
    controller: 'AwayFoul_Ctrl'  
  })

  /**************************
  * Yellow Cards
  **************************/
  .state('home_team_yellow_card', {
    url: '/home_team_yellow_card',
    templateUrl: 'templates/yellow_card/home_team_yellow_card.html',
    controller: 'HomeYellowCard_Ctrl'  
  })

  .state('away_team_yellow_card', {
    url: '/away_team_yellow_card',
    templateUrl: 'templates/yellow_card/away_team_yellow_card.html',
    controller: 'AwayYellowCard_Ctrl'  
  })

  /**************************
  * Red Cards
  **************************/
  .state('home_team_red_card', {
    url: '/home_team_red_card',
    templateUrl: 'templates/red_card/home_team_red_card.html',
    controller: 'HomeRedCard_Ctrl'  
  })

  .state('away_team_red_card', {
    url: '/away_team_red_card',
    templateUrl: 'templates/red_card/away_team_red_card.html',
    controller: 'AwayRedCard_Ctrl'  
  })

  /**************************
  * Goalkepper Saves
  **************************/
  .state('home_team_goalkeeper_save', {
    url: '/home_team_goalkeeper_save',
    templateUrl: 'templates/goalkeeper_save/home_team_goalkeeper_save.html',
    controller: 'HomeGKSave_Ctrl'  
  })

  .state('away_team_goalkeeper_save', {
    url: '/away_team_goalkeeper_save',
    templateUrl: 'templates/goalkeeper_save/away_team_goalkeeper_save.html',
    controller: 'AwayGKSave_Ctrl'  
  })

  /**************************
  * Shoots
  **************************/
  .state('home_team_shoot', {
    url: '/home_team_shoot',
    templateUrl: 'templates/shoot/home_team_shoot.html',
    controller: 'HomeShoot_Ctrl'  
  })

  .state('away_team_shoot', {
    url: '/away_team_shoot',
    templateUrl: 'templates/shoot/away_team_shoot.html',
    controller: 'AwayShoot_Ctrl'  
  })

  /**************************
  * Choose Match Players
  **************************/
  .state('choose_home_players', {
    url: '/choose_home_players',
    templateUrl: 'templates/choose_players/choose_home_players.html',
    controller: 'HomeMatchPlayers_Ctrl'  
  })

  .state('choose_away_players', {
    url: '/choose_away_players',
    templateUrl: 'templates/choose_players/choose_away_players.html',
    controller: 'AwayMatchPlayers_Ctrl'
  })

  /**************************
  * Match played TABS
  **************************/
  .state('match_played_tab', {
    url: '/match_played_tab',
    abstract: true,
    templateUrl: 'templates/match_played/match_played-tabs.html'
  })

  // 1) Match result

  .state('match_played_tab.match_result', {
    url: '/match_result',
    views: {
      'match_played_tab-match_result': {
        templateUrl: 'templates/match_played/match_played_tab-match_result.html',
        controller: 'MatchPlayed_MResulCtrl'
      }
    }
  })

  // 2) Match stats

  .state('match_played_tab.match_stats', {
    url: '/match_stats',
    views: {
      'match_played_tab-match_stats': {
        templateUrl: 'templates/match_played/match_played_tab-match_stats.html'
      }
    }
  })
 
  // 3) Match players stats

  .state('match_played_tab.match_players_stats', {
      url: '/match_players_stats',
      views: {
        'match_played_tab-match_players_stats': {
          templateUrl: 'templates/match_played/match_played_tab-match_players_stats.html',
          controller: 'MatchPlayed_MResulCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home_tab/login');

});