'use strict';

ica.module('wgaPortalApp', ['wgaPortalApp.controllers', 'ui.bootstrap'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'gamesView',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'aboutView',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
      $locationProvider.html5Mode(true);
  });
