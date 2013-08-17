'use strict';

ica.module('wgaPortalLbApp.controllers', [])
	.controller('GeneralCtrl', function ($scope, $log, dice) {
    	var _dice = new dice.Dice(3, 1, 6);
    
        $scope.dice = {
        	die1: 1,
        	die2: 1,
        	die3: 1
        };
        
        $scope.dieIncr = function(die) {
        	$log.info('Increment general die');
        	var value;
            
            if (die == 1) {value = $scope.dice.die1;}
            else if (die == 2) {value = $scope.dice.die2;}
            else if (die == 3) {value = $scope.dice.die3;}
            
            if (value < 1) {
            	value = 6;
            }
            else if (value > 6) {
            	value = 1;
            }
            
            if (die == 1) {$scope.dice.die1 = value;}
            else if (die == 2) {$scope.dice.die2 = value;}
            else if (die == 3) {$scope.dice.die3 = value;}
            
            _dice.setDie(die, value);
        }
        
        $scope.rollTwoDice = function() {
        	$log.info('Roll general dice');
            _dice.rollDie(1);
            _dice.rollDie(2);
            $scope.dice.die1 = _dice.getDie(1);
        	$scope.dice.die2 = _dice.getDie(2);
        }
        
        $scope.rollOneDie = function() {
        	$log.info('Roll general die');
            _dice.rollDie(3);
            $scope.dice.die3 = _dice.getDie(3);
        }
        
        $scope.die = function(value) {
        	if (value < 1) {
            	value = 1;
            }
            else if (value >= _dice.getCount()) {
            	value = _dice.getCount();
            }
            return _dice.getDieEx(value).name();
        }
	});
