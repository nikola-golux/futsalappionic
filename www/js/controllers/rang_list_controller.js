angular.module('starter.controllers')

/****************************************************************************************************
* PLAYER TABS CONTROLLERS
****************************************************************************************************/
// 1) Player_experience controller
.controller('PlayerRangList_5_1_Ctrl', function($scope, $state, $stateParams, $window, RangListPlayers_5_1){
	RangListPlayers_5_1.query().$promise.then(function(response){
		$scope.player_seasons_5_1 = response;
	});
})

.controller('PlayerRangList_4_1_Ctrl', function($scope, $state, $stateParams, $window, RangListPlayers_4_1){
	RangListPlayers_4_1.query().$promise.then(function(response){
		$scope.player_seasons_4_1 = response;
	});
})