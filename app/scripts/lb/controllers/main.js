'use strict';

ica.module('wgaPortalLbApp.controllers', [])
    .controller('MainCtrl', function ($routeParams, $rootScope, $scope, $location, $http, $log, game) {
    	$log.info('Load main controller');
    
        $rootScope.game = null;
        $rootScope.scenarioDisplayDate = function(scenario) {
            return game.formatScenarioDate(scenario);
        }

        $scope.active = function(c) {
        	if (c == 1 && $location.path() == '/lb/battles') {
            	return 'active';
            }
        	if (c == 2 && $location.path() == '/lb/about') {
            	return 'active';
            }
            return '';
        }
        
        $scope.save = function() {
        	$log.info('save game');
        	game.save($rootScope.current.game);
        }
        
        $scope.reset = function() {
        	$log.info('reset game');
        	$rootScope.current.game.saved.turn = 1;
        	$rootScope.current.game.saved.phase = 0;
        	game.save($rootScope.current.game);
            $rootScope.$broadcast('reset');
        }
        
        $log.info('Retrieving game');
        $http.get('/game/lb')
            .success(function(data, status, headers, config) {
                $log.log('game retrieved');
                $rootScope.game = data;
                if ($routeParams.battleid && $routeParams.scenarioid) {
	                //$location.path('/lb/battle/' + $routeParams.battleid + '/' + $routeParams.scenarioid);
                    $rootScope.$broadcast('battle', {battleid: $routeParams.battleid, scenarioid: $routeParams.scenarioid});
				}                    
                else {
	                $location.path('/lb/battles');
				}                    
            });
    });
