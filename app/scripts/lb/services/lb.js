'use strict';

ica.module('wgaPortalLbApp.services', [])
	.service('game', function ($rootScope, $log, localStorage, phases) {
        function formatDate(dt) {
            return Globalize.format(dt, 'MMMM d, yyyy' );
        }
        function formatTime(dt) {
            return Globalize.format(dt, 'HH:mm');//'t');
        }
        function formatDateTime(dt) {
        	return formatDate(dt) + ' ' + formatTime(dt);
        }
        function formatDateTimeAux(year,month,day,hour,minute) {
        	return formatDateTime(new Date(year,month,day,hour,minute));
        }
        function savedGameKey(battleid, scenarioid) {
        	return 'WgaLbSaved' + battleid.toString() + scenarioid.toString();
        }
        
        function saveGame(battleid, scenid, save) {
        	var key = savedGameKey(battleid, scenid);
            localStorage[key] = JSON.stringify(save);
        }
        
        function restoreGame(battleid, scenid) {
        	var key = savedGameKey(battleid, scenid);
            if (localStorage[key]) {
            	return JSON.parse(localStorage[key]);
			}
            return null;                
        }
        
        function turnOffset(turn) {
        	return (turn - 1) * 20;
        }
    
    	return {
        	restore: function(battleid, scenid) {
            	var battle = {name: 'Not Found'};
            	var scenario = { name: 'Not Found'};
            	var game = $rootScope.game;
                if (game) {
	                battle = _.find(game.battles, function(battle) {
	                	return battle.id == battleid;
	                });
	                if (battle) {
	                	scenario = _.find(battle.scenarios, function(scen) {
	                    	return scen.id == scenid;
	                    });
	                }
                }
                
                var saved = restoreGame(battleid, scenid);
                if (!saved) {
                	saved = {
                    	turn: 1,
                        phase: 0
                    }
                }
                
                return {
                	battle: battle,
                	scenario: scenario,
                    saved: saved
                }
            },
            
        	save: function(battlescenario) {
            	saveGame(battlescenario.battle.id, battlescenario.scenario.id, battlescenario.saved);
            },
            
            formatScenarioDate: function(scenario) {
		        var sd = new Date(scenario.startYear,scenario.startMonth,scenario.startDay,scenario.startHour,scenario.startMinute);
		        var ed = new Date(scenario.endYear,scenario.endMonth,scenario.endDay,scenario.endHour,scenario.endMinute);
		        
		        var s = formatDateTime(sd);
		        s += ' - ';
		        if (sd.getDate() != ed.getDate()) {
		        	s += formatDate(ed) + ' ';
				}
		        s += formatTime(ed);
		        
		        return s;
            },
            
            formatDate: function(dt) {
            	return formatDateTime(dt);
            },
            formatDateAux: function(year,month,day,hour,minute) {
            	return formatDateTime(year,month,day,hour,minute);
            },
            
            formatCurrentDateTime: function(scenario, turn) {
		        var d = new Date(scenario.startYear,scenario.startMonth,scenario.startDay,scenario.startHour,scenario.startMinute);
                var offset = turnOffset(turn);
            	d.setMinutes(d.getMinutes()+offset);
                return formatDateTime(d);
            },
            
            nextTurn: function(scenario, turn) {
		        var sd = new Date(scenario.startYear,scenario.startMonth,scenario.startDay,scenario.startHour,scenario.startMinute);
		        var ed = new Date(scenario.endYear,scenario.endMonth,scenario.endDay,scenario.endHour,scenario.endMinute);
                
		        var d = new Date(sd.getTime());
		        var o = turnOffset(turn);
		        
		        d.setMinutes(d.getMinutes()+o);
		        
		        if (d < sd) {
		        	d = sd;
                    turn -= 1;
		        }
		        else if (d > ed) {
		        	d = ed;
		            self._currentturn -= 1;
		        }
		        
                return {
                	dateTime: formatDateTime(d),
                    turn: turn
                };
            },
            
            getCurrentPhase: function(phase) {
            	if (phase < 0) {phase = 0;}
            	else if (phase >= phases.phases.length) {phase = phases.phases.length-1;}
                return phases.phases[phase];
            },
            
            
            nextPhase: function(scenario, turn, phase) {
                var ret = {dateTime: null};
            
		        if (phase < 0) {
                	var result = this.nextTurn(scenario, turn-1);
                    turn = result.turn;
                    phase = phases.phases.length - 1;
                    ret.dateTime = result.dateTime;
                    
		        }
		        else if (phase >= phases.phases.length) {
                	var result = this.nextTurn(scenario, turn+1);
                    turn = result.turn;
		        	phase = 0;
                    ret.dateTime = result.dateTime;
		        }
		        
                ret.turn = turn;
                ret.phase = phase;
                ret.phaseStr = phases.phases[phase];
            
            	return ret;
            }
           
            
        };
    })
	.service('phases', function ($log) {
    	return {
        	phases: [
            	'Command',
				'Imperial: Charge a Cheval',
				'Imperial: Movement',
				'Imperial: Defensive Fire',
				'Imperial: Offensive Fire',
				'Imperial: Melee Assault',
				'Imperial: Rally',
				'Imperial: Rout',
				'Imperial: Readiness Recovery',
				'Sovereign: Charge a Cheval',
				'Sovereign: Movement',
				'Sovereign: Defensive Fire',
				'Sovereign: Offensive Fire',
				'Sovereign: Melee Assault',
				'Sovereign: Rally',
				'Sovereign: Rout',
				'Sovereign: Readiness Recovery'            	
            ]
        };
    });
