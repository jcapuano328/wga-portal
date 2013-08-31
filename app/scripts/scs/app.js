'use strict';

ica.module('wgaPortalScsApp', ['wgaPortalApp.services', 'wgaPortalScsApp.controllers', 'wgaPortalScsApp.services', 'ui.bootstrap'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/scs/battles', {
      	templateUrl: 'battlesView',
        controller: 'BattlesCtrl'
      })
      .when('/scs/battle/:id', {
      	templateUrl: 'battleView',
        controller: 'BattleCtrl'
      })
      .otherwise({
        redirectTo: '/scs/battles'
      });
      
	$locationProvider.html5Mode(true);
  });
