'use strict';

ica.module('wgaPortalLbApp.controllers', [])
	.controller('MeleeCtrl', function ($scope, $log, meleeCombat, dice) {
    	var _dice = new dice.Dice(5, 1, 6);
    
        $scope.odds = meleeCombat.odds;
        $scope.selectedOdds = meleeCombat.defaultOdds;
        $scope.dice = {
        	die1: 1,
        	die2: 1,
        	die3: 1,
        	die4: 1,
        	die5: 1
        };
		$scope.unitIncrements = 0;
		$scope.unitLosses = 0;
		$scope.unitMelee = 0;
		$scope.unitLance = 0;
		$scope.unitTotal = 0;
		$scope.unit1_3 = false;
		$scope.unit1_2 = false;
		$scope.unit3_2 = false;
		$scope.unit2 = false;
		$scope.unit2ln = false;
		$scope.attackerValue = 0;
		$scope.defenderValue = 0;        
        $scope.result = '';
        $scope.isWounded = false;
        $scope.isKilled = false;
        $scope.isCaptured = false;
        $scope.attacker = false;
        $scope.defender = false;
        $scope.injury = '';
        $scope.duration = 0;

        $scope.changeAttackerValue = function(c) {
        	$log.info('Change melee attacker value');
        	if ($scope.attackerValue + c < 1) {
            	$scope.attackerValue = 1;
			}
            else {
	        	$scope.attackerValue += c;
            }
        	calcOdds();
            resolveCombat();
        }
        
        $scope.resetAttackerValue = function() {
        	$scope.attackerValue = 0;
        	calcOdds();
            resolveCombat();
        }
        
        $scope.changeDefenderValue = function(c) {
        	$log.info('Change melee defender value');
        	if ($scope.defenderValue + c < 1) {
            	$scope.defenderValue = 1;
			}
            else {
	        	$scope.defenderValue += c;
            }
        	calcOdds();
            resolveCombat();
        }
        
        $scope.resetDefenderValue = function() {
        	$scope.defenderValue = 0;
        	calcOdds();
            resolveCombat();
        }
        
        
        $scope.changeUnitIncrements = function(c) {
        	$log.info('Change melee unit increments');
        	if ($scope.unitIncrements + c < 1) {
            	$scope.unitIncrements = 1;
			}
            else {
	        	$scope.unitIncrements += c;
            }
            $scope.updateUnitTotal();
        }
        
        $scope.changeUnitLosses = function(c) {
        	$log.info('Change melee unit losses');
        	if ($scope.unitLosses + c < 1) {
            	$scope.unitLosses = 1;
			}
            else {
	        	$scope.unitLosses += c;
            }
            $scope.updateUnitTotal();
        }
        
        $scope.changeUnitMelee = function(c) {
        	$log.info('Change melee unit melee');
        	if ($scope.unitMelee + c < 1) {
            	$scope.unitMelee = 1;
			}
            else {
	        	$scope.unitMelee += c;
            }
            $scope.updateUnitTotal();
        }
        
        $scope.changeUnitLance = function(c) {
        	$log.info('Change melee unit lance');
        	if ($scope.unitLance + c < 1) {
            	$scope.unitLance = 1;
			}
            else {
	        	$scope.unitLance += c;
            }
            $scope.updateUnitTotal();
        }
        
        $scope.changeUnitTotal = function(c) {
        	$log.info('Change melee unit total');
        	if ($scope.unitTotal + c < 1) {
            	$scope.unitTotal = 1;
			}
            else {
	        	$scope.unitTotal += c;
            }
        }

		$scope.updateUnitTotal = function() {
        	$log.info('Update unit total');
            
            var incr = $scope.unitIncrements;
	        var loss = $scope.unitLosses;
            var melee = $scope.unitMelee;
            var lance = $scope.unitLance;
            
	        var val = melee * ((incr - loss) / incr);
            var flag = true;
        	if ($scope.unit1_3) {
	        	val /= 3.0;
            }
        	else if ($scope.unit1_2) {
	        	val /= 2.0;
            }
        	else if ($scope.unit3_2) {
	        	val *= 1.5;
            }
        	else if ($scope.unit2) {
	        	val *= 2.0;
            }
            
            if ($scope.unit2ln) {
            	lance *= 2.0;
			}                    
            
			$scope.unitTotal = val + lance;
        }        
        
        $scope.updateResults = function() {
        	$log.info('Update melee results');
            resolveCombat();        
        }        	

        $scope.roll = function() {
        	$log.info('Roll melee dice');
        	_dice.roll();
            $scope.dice.die1 = _dice.getDie(1);
        	$scope.dice.die2 = _dice.getDie(2);
        	$scope.dice.die3 = _dice.getDie(3);
        	$scope.dice.die4 = _dice.getDie(4);
        	$scope.dice.die5 = _dice.getDie(5);
            $scope.updateResults();
        }
        
        $scope.dieIncr = function(die) {
        	$log.info('Increment melee die');
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
        	$log.info('Calculate melee odds');
        	$scope.selectedOdds = meleeCombat.calc($scope.attackerValue, $scope.defenderValue) || meleeCombat.defaultOdds;
        }
        
        function resolveCombat() {
        	$log.info('Resolve melee combat');
        	$scope.result = meleeCombat.resolve($scope.selectedOdds, ($scope.dice.die1 * 10) + $scope.dice.die2);
            var loss = $scope.result != 'NE' ? meleeCombat.leaderloss(($scope.dice.die1 * 10) + $scope.dice.die2, $scope.dice.die3, $scope.dice.die4, $scope.dice.die5) : {};

            $scope.isWounded = loss.wounded;
            $scope.isKilled = loss.killed;
            $scope.isCaptured = loss.captured;
            $scope.attacker = loss.attacker;
            $scope.defender = loss.defender;
            $scope.injury = loss.injury;
            $scope.duration = loss.duration;
        }
        
	});
