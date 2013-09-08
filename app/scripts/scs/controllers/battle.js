'use strict';

ica.module('wgaPortalScsApp.controllers', [])
	.controller('BattleCtrl', function ($routeParams, $rootScope, $scope, $log, game) {
    	$log.info('Load battle controller');
    
    	var battle = game.restore($routeParams.id);
        $rootScope.current = {
        	game: battle,
        	turn: game.getCurrentTurn(battle.battle, battle.saved.turn),
            phase: game.getCurrentPhase(battle.battle, battle.saved.phase)
		};
        
        $scope.changeTurn = function(c) {
        	$rootScope.current.game.saved.turn += c;
            
            var result = game.nextTurn($rootScope.current.game.battle, $rootScope.current.game.saved.turn);
            $rootScope.current.game.saved.turn = result.turn;
            $rootScope.current.turn = result.turnStr;
        }
        $scope.changePhase = function(c) {
	        $rootScope.current.game.saved.phase += c;
            var result = game.nextPhase($rootScope.current.game.battle, $rootScope.current.game.saved.turn, $rootScope.current.game.saved.phase);
            
            $rootScope.current.game.saved.turn = result.turn;
            $rootScope.current.game.saved.phase = result.phase;
            $rootScope.current.turn = result.turnStr || $rootScope.current.turnStr;
            $rootScope.current.phase = result.phaseStr;
        }
        
        $scope.$on('reset', function() {
        	$scope.changeTurn(0);
            $scope.changePhase(0);
            $rootScope.current.game.saved.player1VP = 0;
            $rootScope.current.game.saved.player2VP = 0;
        });
        
	});
