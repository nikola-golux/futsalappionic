/*****************************************************************************
* Ostaci iz starog PLAYER CONTROLLER-a
*****************************************************************************/

	/* PLAYERS table*/
	/*Players.query().$promise.then(function(response){
	$scope.id_igraca = window.localStorage['userPlayerId'];
	$scope.players = response;
	function getById(arr, id) {
	    for (var d = 0, len = arr.length; d < len; d += 1) {
	        if (arr[d].id == id) {
	            return arr[d];
	        }
	    }
	}
	$scope.current_player = getById($scope.players, window.localStorage['userPlayerId']);
	window.localStorage['playerTeamId'] = $scope.current_player.team_id;
	window.localStorage['playerLeagueId'] = $scope.current_player.league_id;
	});*/


	// localStorage.setItem('playerTeamId', $scope.current_player.team_id);
	// localStorage.setItem('playerLeagueId', $scope.current_player.league_id);
	/* PLAYER_SEASONS table */
	/*PlayerSeasons.query().$promise.then(function(response){
	$scope.id_igraca = window.localStorage['userPlayerId'];
	$scope.player_seasons = response;
	function getById(arr, id) {
	    for (var d = 0, len = arr.length; d < len; d += 1) {
	        if (arr[d].player_id == id) {
	            return arr[d];
	        }
	    }
	}
	$scope.current_player_season = getById($scope.player_seasons, window.localStorage['userPlayerId']);
	var do_sledeceg_levela_float = trenutni_experience_u_procentima($scope.current_player_season.expirience ,$scope.current_player_season.level);
	$scope.do_sledeceg_levela = parseInt(do_sledeceg_levela_float, 10);
	});*/


	/*
	Teams.query().$promise.then(function(response){
	$scope.id_tima_igraca = window.localStorage['playerTeamId'];
	$scope.teams = response;
	function getById(arr, id) {
	        for (var d = 0, len = arr.length; d < len; d += 1) {
	            if (arr[d].id == id) {
	                return arr[d];
	            }
	        }
	    }
	$scope.current_team = getById($scope.teams, window.localStorage['playerTeamId']);
	});*/


/*****************************************************************************
* TEAM CONTROLLER
*****************************************************************************/

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
    /*var do_sledeceg_levela_float = trenutni_experience_u_procentima($scope.current_team_season.experience ,$scope.current_team_season.level);
    $scope.do_sledeceg_levela = parseInt(do_sledeceg_levela_float, 10);*/
  });