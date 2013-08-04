'use strict';

ica.module('wgaPortalLbApp', ['wgaPortalLbApp.controllers', 'ui.bootstrap'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/lb/battles', {
      	templateUrl: 'battlesView',
        controller: 'BattlesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
	$locationProvider.html5Mode(true);
  });
