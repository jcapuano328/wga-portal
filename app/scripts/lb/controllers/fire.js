'use strict';

ica.module('wgaPortalLbApp.controllers', [])
	.controller('FireCtrl', function ($scope, $log, fireCombat, dice) {
    	var _dice = new dice.Dice(5, 1, 6);
        var _defensevalues = [4,6,7,8,9,10,12,14,16,18];
    
        $scope.attackerValue = 1;
        $scope.attacker1_3 = false;
        $scope.attacker1_2 = false;
        $scope.attacker3_2 = false;
        $scope.attackerCann = false;
        $scope.defenderValue = _defensevalues[0];
        $scope.defenderIncrements = 1;
        $scope.odds = fireCombat.odds;
        $scope.selectedOdds = fireCombat.defaultOdds;
        $scope.dice = {
        	die1: 1,
        	die2: 1,
        	die3: 1,
        	die4: 1,
        	die5: 1
        };
        $scope.result = '';
        $scope.isWounded = false;
        $scope.isKilled = false;
        $scope.isCaptured = false;
        $scope.attacker = false;
        $scope.defender = false;
        $scope.injury = '';
        $scope.duration = 0;

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
        $scope.updateAttackValue = function(factor) {
        	$log.info('Update attacker value');
        	factor = factor || 1.0;
            var flag = true;
        	if (factor == 3) {
                flag = $scope.attacker1_3;
            }
        	else if (factor == 2) {
                flag = $scope.attacker1_2;
            }
        	else if (factor == 1.5) {
                flag = !$scope.attacker3_2;
            }
            
            if (flag) {
		        $scope.attackerValue /= factor;
            }
            else {
		        $scope.attackerValue *= factor;
            }
        	calcOdds();
            resolveCombat();
        }
        $scope.updateAttackCannister = function() {
        	$log.info('Update attacker cannister');
        	calcOdds();
            resolveCombat();
        }
        
        $scope.changeDefenderValue = function(c) {
        	$log.info('Change defender value');
            $scope.defenderValue = findNearest($scope.defenderValue + c, (c<0), _defensevalues);
        	calcOdds();
            resolveCombat();
        }
        
        $scope.changeDefenderIncrements = function(c) {
        	$log.info('Change defender increments');
        	if ($scope.defenderIncrements + c < 1) {
            	$scope.defenderIncrements = 1;
			}
            else {
	        	$scope.defenderIncrements += c;
            }
            resolveCombat();
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
        	$scope.dice.die3 = _dice.getDie(3);
        	$scope.dice.die4 = _dice.getDie(4);
        	$scope.dice.die5 = _dice.getDie(5);
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
        	$scope.selectedOdds = fireCombat.calc($scope.attackerValue, $scope.defenderValue, $scope.attackerCann) || fireCombat.defaultOdds;
        }
        
        function resolveCombat() {
        	$log.info('Resolve combat');
        	$scope.result = fireCombat.resolve($scope.selectedOdds, $scope.defenderIncrements, ($scope.dice.die1 * 10) + $scope.dice.die2);
            var loss = $scope.result != 'NE' ? fireCombat.leaderloss(($scope.dice.die1 * 10) + $scope.dice.die2, $scope.dice.die3, $scope.dice.die4, $scope.dice.die5) : {}
            $scope.isWounded = loss.wounded;
            $scope.isKilled = loss.killed;
            $scope.isCaptured = loss.captured;
            $scope.attacker = loss.attacker;
            $scope.defender = loss.defender;
            $scope.injury = loss.injury;
            $scope.duration = loss.duration;
        }
        
        function findNearest(value, neg, values) {
        	if (neg) {
            	for (var i=values.length-1; i>=0; i--) {
                	if (values[i] <= value) {
                    	return values[i];
                    }
                }
            	return _.first(values);
            }
            
        	return _.find(values, function(val) {
            	return val >= value;
            }) || _.last(values);
        }
        
        calcOdds();
	});
