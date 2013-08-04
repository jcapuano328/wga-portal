'use strict';

ica.module('wgaPortalLbApp.controllers', [])
  .controller('MainCtrl', function ($rootScope, $location, $http) {
    $rootScope.game = null;
    
    $http.get('/game/lb')
        .success(function(data, status, headers, config) {
            $rootScope.game = data;
            $location.path('/lb/battles');
        });
  });
