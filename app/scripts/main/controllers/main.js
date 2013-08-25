'use strict';

ica.module('wgaPortalApp.controllers', [])
	.controller('MainCtrl', function ($scope, $location, $http) {
    	$scope.games = [];

        $scope.active = function(c) {
        	if (c == 1 && $location.path() == '/main') {
            	return 'active';
            }
        	if (c == 2 && $location.path() == '/setup') {
            	return 'active';
            }
        	if (c == 3 && $location.path() == '/about') {
            	return 'active';
            }
            return '';
        }
        
    	$http.get('/games')
        	.success(function(data, status, headers, config) {
            	$scope.games = data;
			});
	});
