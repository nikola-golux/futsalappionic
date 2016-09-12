angular.module('starter.services', [])

.factory('UserSession', function($resource) {
  return $resource("http://192.168.1.104:3000/users/sign_in.json");
})

/**********************
* Articles
**********************/
.factory('Articles', function($resource) {
  return $resource("http://192.168.1.104:3000/articles");
})

/**********************
* Players
**********************/
.factory('Players', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/players");
})

.factory('PlayerSeasons', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/player_seasons");
})

.factory('PlayerBadges', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/player_badges");
})

.factory('RangListPlayers_5_1', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/players_rang_list");
})

.factory('RangListPlayers_4_1', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/players_rang_list_4_1");
})
/**********************
* Leagues
**********************/
.factory('Leagues', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/leagues");
})
/**********************
* Teams
**********************/
.factory('Teams', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/teams");
})

.factory('TeamSeasons', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/team_seasons");
})


.factory('TeamBadges', function($resource){
  return $resource("http://192.168.1.104:3000/api/v1/team_badges");
})


.factory('HomeTeams', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/home_teams");
})

.factory('AwayTeams', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/away_teams");
})

.factory('RangListTeams_5_1', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/teams_rang_list");
})

.factory('RangListTeams_4_1', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/teams_rang_list_4_1");
})
/**********************
* Matches
**********************/
.factory('Matches', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/matches");
})

.factory('MatchPlayers', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/match_players");
})
/**********************
* Delegate Match
**********************/
.factory('Match', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/matches"); 
})
/***********************
* Delegate
***********************/
.factory('Delegates', function($resource) {
  return $resource("http://192.168.1.104:3000/api/v1/delegates");
})


/************************************************************************/


/************************************************************************/

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
