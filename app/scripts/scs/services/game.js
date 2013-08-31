'use strict';

ica.module('wgaPortalScsApp.services', [])
	.service('game', function ($rootScope, $log, localStorage) {
        function savedGameKey(battleid) {
        	return 'WgaScsSaved' + battleid.toString();
        }
        
        function saveGame(battleid, save) {
        	var key = savedGameKey(battleid);
            localStorage[key] = JSON.stringify(save);
        }
        
        function restoreGame(battleid) {
        	var key = savedGameKey(battleid);
            if (localStorage[key]) {
            	return JSON.parse(localStorage[key]);
			}
            return null;                
        }
        
    	return {
        	restore: function(battleid) {
            	var battle = {name: 'Not Found'};
            	var game = $rootScope.game;
                if (game) {
	                battle = _.find(game.battles, function(battle) {
	                	return battle.id == battleid;
	                });
                }
                
                var saved = restoreGame(battleid);
                if (!saved) {
                	saved = {
                    	turn: 1,
                        phase: 0
                    }
                }
                
                return {
                	battle: battle,
                    saved: saved
                }
            },
            
        	save: function(battle) {
            	saveGame(battle.id, battle.saved);
            },
            
            nextTurn: function(battle, turn) {
            	if (turn < 0) {
                	turn = 0;
                }
                else if (turn >= battle.turns.length) {
                	turn = battle.turns.length - 1;
                }
		        
                return {
                    turn: turn,
                    turnStr: battle.turns[turn]
                };
            },
            
            getCurrentTurn: function(battle, turn) {
            	if (turn < 0) {
                	turn = 0;
				}
            	else if (turn >= battle.turns.length) {
                	turn = battle.turns.length-1;
                }
                return battle.turns[turn];
            },
            
            getCurrentPhase: function(battle, phase) {
            	if (phase < 0) {
                	phase = 0;
				}
            	else if (phase >= battle.phases.length) {
                	phase = battle.phases.length-1;
                }
                return battle.phases[phase];
            },
            
            nextPhase: function(battle, turn, phase) {
                var ret = {};
            
		        if (phase < 0) {
                	var result = this.nextTurn(battle, turn-1);
                    turn = result.turn;
                    phase = battle.phases.length - 1;
		        }
		        else if (phase >= battle.phases.length) {
                	var result = this.nextTurn(battle, turn+1);
                    turn = result.turn;
		        	phase = 0;
		        }
		        
                ret.turn = turn;
                ret.turnStr = battle.turns[turn];
                ret.phase = phase;
                ret.phaseStr = battle.phases[phase];
            
            	return ret;
            }
        };
    });