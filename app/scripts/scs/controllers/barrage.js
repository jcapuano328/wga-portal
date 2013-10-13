'use strict';

ica.module('wgaPortalScsApp.controllers', [])
	.controller('BarrageCtrl', function ($rootScope, $scope, $log, barrage, dice) {
    	var _game = $rootScope.current.game.battle;
    	var _dice = new dice.Dice(_game.barrageTable.dice.number, 1, _game.barrageTable.dice.sides);
    
        $scope.barrage = _game.barrageTable.table;
        $scope.selectedBarrage = _game.barrageTable.table[0];
        
        $scope.terrain = _game.terrains;
        $scope.selectedTerrain = _game.terrains[0];
        
        $scope.modifiers = _game.barrageTable.modifiers;
    
        $scope.dice = {
        	die1: 1,
        	die2: 1
        };
        $scope.result = '';
        
        
        $scope.updateResults = function() {
        	$log.info('Update results');
            resolveBarrage();        
        }
        
        $scope.roll = function() {
        	$log.info('Roll dice');
        	_dice.roll();
            $scope.dice.die1 = _dice.getDie(1);
        	$scope.dice.die2 = _dice.getDie(2);
            $scope.updateResults();
        }
        
        $scope.dieIncr = function(die) {
        	$log.info('Increment die');
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
        
        $scope.die = function(value) {
        	if (value < 1 || value > _dice.getCount()) {
            	return 'one';
            }
            return _dice.getDieEx(value).name();
        }
        
        $scope.showDie = function(die) {
        	return die <= _dice.getCount();
        }
        
        function resolveBarrage() {
        	$log.info('Resolve barrage combat');
            var mods = _.filter($scope.modifiers, function(mod) {return mod.checked;});
            var result = barrage.resolve($scope.dice.die1, $scope.dice.die2, $scope.selectedBarrage, $scope.selectedTerrain, mods, _game.barrageTable);
        	$scope.result = result.result;
        }
	});
