'use strict';

ica.module('wgaPortalLbApp.controllers', [])
	.controller('MoraleCtrl', function ($scope, $log, morale, dice) {
    	var _dice = new dice.Dice(2, 1, 6);
    
        $scope.dice = {
        	die1: 1,
        	die2: 1
        };
		$scope.morale = 11;
        $scope.result = '';
        
        $scope.changeMorale = function(c) {
        	$log.info('Change morale value');
            var b6i = new ica.Base6Value($scope.morale);
            $scope.morale = b6i.add(c);
            $scope.updateResults();
        }

        $scope.changeDice = function(c) {
        	$log.info('Change morale dice');
        	var dice = ($scope.dice.die1 * 10) + $scope.dice.die2;
            
        	var b6i = new ica.Base6Value(dice);
            dice = b6i.add(c);
	        
            $scope.dice.die1 = parseInt(dice.toString().substr(0,1));
            _dice.setDie(1, $scope.dice.die1);
            
            $scope.dice.die2 = parseInt(dice.toString().substr(1,1));
            _dice.setDie(2, $scope.dice.die2);
            
            $scope.updateResults();
        }

        $scope.dieIncr = function(die) {
        	$log.info('Increment morale die');
        	var value = ((die == 1) ? $scope.dice.die1 : $scope.dice.die2) + 1;
            if (value < 1) {
            	value = 6;
            }
            else if (value > 6) {
            	value = 1;
            }
            if (die == 1) { 
            	$scope.dice.die1 = value;
			}
            else { 
            	$scope.dice.die2 = value; 
			}
            _dice.setDie(die, value);
            $scope.updateResults();
        }
        
        $scope.roll = function() {
        	$log.info('Roll morale dice');
        	_dice.roll();
            $scope.dice.die1 = _dice.getDie(1);
        	$scope.dice.die2 = _dice.getDie(2);
            $scope.updateResults();
        }
        
        $scope.updateResults = function() {
        	$log.info('Update morale results');
            resolveMorale();        
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
        
        function resolveMorale() {
        	$scope.result = morale.resolve($scope.morale, ($scope.dice.die1 * 10) + $scope.dice.die2);
        }
        
	});
