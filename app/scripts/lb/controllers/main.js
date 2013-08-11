'use strict';

ica.module('wgaPortalLbApp.controllers', [])
    .controller('MainCtrl', function ($rootScope, $location, $http, $log, game) {
        $rootScope.game = null;
        $rootScope.scenarioDisplayDate = function(scenario) {
            return game.formatScenarioDate(scenario);
        }

        $log.info('Retrieving game');
        $http.get('/game/lb')
            .success(function(data, status, headers, config) {
                $log.log('game retrieved');
                $rootScope.game = data;
                $location.path('/lb/battles');
            });
    });
