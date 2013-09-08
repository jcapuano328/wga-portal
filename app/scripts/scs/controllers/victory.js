'use strict';

ica.module('wgaPortalScsApp.controllers', [])
	.controller('VictoryCtrl', function ($rootScope, $scope, $log) {
    	$scope.player1 = $rootScope.current.game.battle.players.length > 0 ? $rootScope.current.game.battle.players[0] : 'Player 1';
    	$scope.player2 = $rootScope.current.game.battle.players.length > 1 ? $rootScope.current.game.battle.players[1] : 'Player 2';
        
        $scope.changePlayer1VictoryValue = function(c) {
        	$log.info('Change player 1 victory value');
        	if ($rootScope.current.game.saved.player1VP + c < 1) {
            	$rootScope.current.game.saved.player1VP = 1;
			}
            else {
	        	$rootScope.current.game.saved.player1VP += c;
            }
        }
        
        $scope.changePlayer2VictoryValue = function(c) {
        	$log.info('Change player 2 victory value');
        	if ($rootScope.current.game.saved.player2VP + c < 1) {
            	$rootScope.current.game.saved.player2VP = 1;
			}
            else {
	        	$rootScope.current.game.saved.player2VP += c;
            }
        }
	});
