'use strict';

ica.module('wgaPortalScsApp.controllers', [])
	.controller('CombatCtrl', function ($rootScope, $scope, $log, combat, dice) {
    	var _game = $rootScope.current.game.battle;
    	var _dice = new dice.Dice(_game.combatTable.dice.number, 1, _game.combatTable.dice.sides);
    
        $scope.attackerValue = 1;
        $scope.defenderValue = 1;
        
        $scope.terrain = _.map(_game.terrains, function(t) {
        	return {
            	name: t.name,
                attackmod: t.combat.attackmod,
                defendmod: t.combat.defendmod
            };
        });
        $scope.selectedTerrain = $scope.terrain[0];
        
        $scope.terrainBetween = _.map(_game.terrains, function(t) {
        	return {
            	name: t.name,
                attackmod: t.combat.attackmod,
                defendmod: t.combat.defendmod
            };
        });
        $scope.selectedTerrainBetween = $scope.terrainBetween[0];
        
        $scope.modifiers = _.map(_game.combatTable.modifiers, function(mod) {
        	mod.attackerCount = 0;
        	mod.defenderCount = 0;
            return mod;
        });
    
        $scope.odds = {
        	odds: 1,
            display: '1:1'
		};           
    
        $scope.dice = {
        	die1: 1,
        	die2: 1
        };
        $scope.result = '';
        
        
        $scope.changeAttackerValue = function(c) {
        	$log.info('Change attacker value');
        	if ($scope.attackerValue + c < 1) {
            	$scope.attackerValue = 1;
			}
            else {
	        	$scope.attackerValue += c;
            }
        	calcOdds();
            resolveCombat();
        }
        
        $scope.changeDefenderValue = function(c) {
        	$log.info('Change defender value');
        	if ($scope.defenderValue + c < 1) {
            	$scope.defenderValue = 1;
			}
            else {
	        	$scope.defenderValue += c;
            }
        	calcOdds();
            resolveCombat();
        }
        
        $scope.changeModCount = function(mod, mode, c) {
        	$log.info('Change modifier count');
            var count = mod[mode];
        	if (count + c < 0) {
            	count = 0;
			}
            else {
	        	count += c;
            }
            mod[mode] = count;
            $scope.updateResults();
        }
        
        $scope.updateResults = function() {
        	$log.info('Update results');
            resolveCombat();        
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
        	if (value < 1) {
            	value = 1;
            }
            else if (value >= _dice.getCount()) {
            	value = _dice.getCount();
            }
            return _dice.getDieEx(value).name();
        }
        
        function calcOdds() {
        	$log.info('Calculate odds');
            $scope.odds = combat.calc($scope.attackerValue, $scope.defenderValue, $scope.modifiers, $scope.selectedTerrain, $scope.selectedTerrainBetween);
        }
        
        function resolveCombat() {
        	$log.info('Resolve combat');
        	$scope.result = combat.resolve($scope.dice.die1, $scope.dice.die2, $scope.odds.odds, $scope.modifiers, $scope.selectedTerrain, $scope.selectedTerrainBetween, _game.combatTable);
        }
	});
