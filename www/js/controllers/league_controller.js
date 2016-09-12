angular.module('starter.controllers')

/****************************************************************************************************
* PLAYER TABS CONTROLLERS
****************************************************************************************************/
// 1) Player_experience controller
.controller('PlayerRang_ListCtrl', function($scope, $state, $stateParams, $window, Players, PlayerSeasons, Teams, Leagues){
	Leagues.query().$promise.then(function(response){
		$scope.leagues = response;

		$scope.league = getById($scope.leagues, window.localStorage['playerLeagueId'].id);
		localStorage.setItem('leagueId');
	});

	Teams.query().$promise.then(function(response){
		$scope.id_lige = localStorage.getItem('leagueId');
		$scope.teams = response;
			function getAllId (arr, id) {
		    var svi_rezultati = [];
		    var i = 0;
		    for (var d = 0, len = arr.length; d < len; d += 1) {
		      if (arr[d].id == id) /* Bilo je 3 === */ {
		            svi_rezultati[i]=arr[d];
		            i += 1;
		      }

		    }
		    return svi_rezultati;
		}
		$scope.svi_timovi_lige = getAllId($scope.teams, $scope.id_lige);
	});

	Players.query().$promise.then(function(response){
		$scope.players = response;

		$scope.igraci_lige = getAllId($scope.players, $scope.svi_timovi_lige);
	});

	PlayerSeasons.query().$promise.then(function(response){
		$scope.player_seasons = response;
		function getAllId (arr, id) {
	    var svi_rezultati = [];
	    var i = 0;
	    for (var d = 0, len = arr.length; d < len; d += 1) {
	      if (arr[d].player_id == id) /* Bilo je 3 === */ {
	            svi_rezultati[i]=arr[d];
	            i += 1;
	      }

	    }
	    return svi_rezultati;
	}
	$scope.all_player_seasons = getAllId($scope.player_seasons, $scope.igraci_lige)
	});
})