'use strict';

angular.module('wgaPortalApp.controllers', [])
  .controller('MainCtrl', function ($scope, $http) {
    $scope.games = [];

    $http.get('/games')
        .success(function(data, status, headers, config) {
            $scope.games = data;
        });
  });
