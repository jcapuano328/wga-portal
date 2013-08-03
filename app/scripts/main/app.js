'use strict';

angular.module('wgaPortalApp', ['wgaPortalApp.controllers'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        //templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
