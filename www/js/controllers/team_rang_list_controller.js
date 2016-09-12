angular.module('starter.controllers')

/****************************************************************************************************
* PLAYER TABS CONTROLLERS
****************************************************************************************************/
// 1) Player_experience controller
.controller('TeamRangList_5_1_Ctrl', function($scope, $state, $stateParams, $window, RangListTeams_5_1){
	RangListTeams_5_1.query().$promise.then(function(response){
		$scope.team_seasons_5_1 = response;
	});
})

.controller('TeamRangList_4_1_Ctrl', function($scope, $state, $stateParams, $window, RangListTeams_4_1){
	RangListTeams_4_1.query().$promise.then(function(response){
		$scope.team_seasons_4_1 = response;
	});
})