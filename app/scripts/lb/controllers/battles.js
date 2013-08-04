'use strict';

ica.module('wgaPortalLbApp.controllers', [])
  .controller('BattlesCtrl', function ($rootScope, $scope, $http) {
  	$scope.game = $rootScope.game;
    
    $scope.scenarioDisplayDate = function(scenario) {
        var sd = new Date(scenario.startYear,scenario.startMonth,scenario.startDay,scenario.startHour,scenario.startMinute);
        var ed = new Date(scenario.endYear,scenario.endMonth,scenario.endDay,scenario.endHour,scenario.endMinute);
        
        var s = Globalize.format(sd, 'MMMM d, yyyy' ) + ' ' + Globalize.format(sd, 'HH:mm');//'t');
        s += ' - ';
        if (sd.getDate() != ed.getDate()) {
        	s += Globalize.format(ed, 'MMMM d, yyyy' ) + ' ';
		}
        s += Globalize.format(ed, 'HH:mm');
        
        return s;
    }
  });
