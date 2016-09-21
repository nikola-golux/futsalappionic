angular.module('starter.controllers')

/****************************************************************************************************
* PLAYER TABS CONTROLLERS
****************************************************************************************************/
// 1) Player_experience controller
.controller('League_Ctrl', function($scope, $state, $stateParams, $window, Teams, TeamSeasons, Leagues){
	Leagues.query().$promise.then(function(response){
		$scope.liga_trenutnog_igraca = localStorage.getItem('playerLeagueId');
		$scope.leagues = response;

		$scope.league = getById($scope.leagues, $scope.liga_trenutnog_igraca);
		localStorage.setItem('current_league', $scope.league.id);
	})

	Teams.query().$promise.then(function(response){
		$scope.liga_trenutnog_igraca = localStorage.getItem('playerLeagueId');
		$scope.teams = response;
		
		$scope.svi_timovi_lige = getAllTeamsFromLeagueId($scope.teams, $scope.liga_trenutnog_igraca);
		var all_teams_from_league = getAllTeamsFromLeagueId($scope.teams, $scope.liga_trenutnog_igraca);
		window.localStorage['teamsLeagueId'] = $scope.svi_timovi_lige;
		console.log($scope.svi_timovi_lige);
	
		TeamSeasons.query().$promise.then(function(response){
			$scope.team_seasons = response;
			$scope.current_team_seasons = getAllTeamSeasonsFromTeamIds($scope.team_seasons, all_teams_from_league);
			console.log($scope.current_team_seasons);
		})

	})

})

.controller('MyLeagueFinishedMatches_Ctrl', function($scope, $state, Leagues, Teams, Matches){
	Matches.query().$promise.then(function(response){
		$scope.liga_trenutnog_igraca = localStorage.getItem('playerLeagueId');
		$scope.matches = response;
	
		$scope.finished_matches = getAllFinishedMatchesFromMyLeagueId($scope.matches, $scope.liga_trenutnog_igraca);
		console.log($scope.finished_matches);
	})

	$scope.go = function(id){
      localStorage.setItem('delegateMatchId', id);
      $state.go('match_played_tab.match_result', {}, {reload: true});
      /*$scope.i = true;
      $scope.$apply();
      if ($scope.i){
        $scope.i = false;
        $scope.$apply();
        window.location.reload(true);  
      }*/    
    }
	
})