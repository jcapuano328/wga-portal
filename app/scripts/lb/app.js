'use strict';

ica.module('wgaPortalLbApp', ['wgaPortalApp.services', 'wgaPortalLbApp.controllers', 'wgaPortalLbApp.services', 'ui.bootstrap'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/lb/battles', {
      	templateUrl: 'battlesView',
        controller: 'BattlesCtrl'
      })
      .when('/lb/battle/:battleid/:scenarioid', {
      	templateUrl: 'battleView',
        controller: 'BattleCtrl'
      })
      .otherwise({
        redirectTo: '/lb'
      });
      
	$locationProvider.html5Mode(true);
  });
