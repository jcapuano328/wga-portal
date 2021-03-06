'use strict';

ica.module('wgaPortalScsApp.controllers', [])
    .controller('MainCtrl', function ($rootScope, $scope, $location, $http, $log, game) {
    	$log.info('Load main controller');
    
        $rootScope.game = null;

        $scope.active = function(c) {
        	if (c == 1 && $location.path() == '/scs/battles') {
            	return 'active';
            }
        	if (c == 2 && $location.path() == '/scs/about') {
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
        $http.get('/game/scs')
            .success(function(data, status, headers, config) {
                $log.log('game retrieved');
                $rootScope.game = data;
                $location.path('/scs/battles');
            });
    });
