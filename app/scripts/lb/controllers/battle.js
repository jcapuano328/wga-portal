'use strict';

ica.module('wgaPortalLbApp.controllers', [])
	.controller('BattleCtrl', function ($routeParams, $rootScope, $scope, $log, game) {
    	$log.info('Load battle controller');
    
    	var battlescenario = game.restore($routeParams.battleid, $routeParams.scenarioid);
        $rootScope.current = {
        	game: battlescenario,
        	battle: battlescenario.battle,
        	scenario: battlescenario.scenario,
        	dateTime: game.formatCurrentDateTime(battlescenario.scenario, battlescenario.saved.turn),
            phase: game.getCurrentPhase(battlescenario.saved.phase)
		};
        $scope.tabs = {
            one: true,
            two: false,
            three: false,
            four: false
        };
        
        $scope.changeTurn = function(c) {
        	$rootScope.current.game.saved.turn += c;
            
            var result = game.nextTurn($rootScope.current.game.scenario, $rootScope.current.game.saved.turn);
            $rootScope.current.game.saved.turn = result.turn;
            $rootScope.current.dateTime = result.dateTime;
        }
        $scope.changePhase = function(c) {
	        $rootScope.current.game.saved.phase += c;
            var result = game.nextPhase($rootScope.current.game.scenario, $rootScope.current.game.saved.turn, $rootScope.current.game.saved.phase);
            
            $rootScope.current.game.saved.turn = result.turn;
            $rootScope.current.game.saved.phase = result.phase;
            $rootScope.current.dateTime = result.dateTime || $rootScope.current.dateTime;
            $rootScope.current.phase = result.phaseStr;
        }
        
        $scope.$on('reset', function() {
        	$scope.changeTurn(0);
            $scope.changePhase(0);
        });
        
	});
