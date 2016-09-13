angular.module('starter.controllers')

/****************************************************************************************************
* PLAYER TABS CONTROLLERS
****************************************************************************************************/
// 1) Player_experience controller
.controller('Leaugue_Ctrl', function($scope, $state, $stateParams, $window, Teams, TeamSeasons, Leagues){
	Leagues.query().$promise.then(function(response){
		$scope.liga_trenutnog_igraca = localStorage.getItem('playerLeagueId');
		$scope.leagues = response;

		$scope.league = getById($scope.leagues, $scope.liga_trenutnog_igraca);
		localStorage.setItem('current_league', $scope.league.id);
	});

	Teams.query().$promise.then(function(response){
		$scope.liga_trenutnog_igraca = localStorage.getItem('playerLeagueId');
		$scope.teams = response;
		
		$scope.svi_timovi_lige = getAllTeamsFromLeagueId($scope.teams, $scope.liga_trenutnog_igraca);
		window.localStorage['teamsLeagueId'] = $scope.svi_timovi_lige;
		console.log($scope.svi_timovi_lige);
	});

	TeamSeasons.query().$promise.then(function(response){
		$scope.team_seasons = response;
		$scope.current_team_seasons = getAllTeamSeasonsFromTeamIds($scope.team_seasons, $scope.svi_timovi_lige);
		console.log($scope.current_team_seasons);
	})

})