'use strict';

ica.module('wgaPortalScsApp.services', [])
	.service('combat', function ($log, game) {
    
    	function modifierMultValue(str, modifiers) {
            _.each(_.filter(modifiers, function(mod) {return mod.type == 'mult';}), function(mod) {
            	str *= (mod.value / mod.count);
            	/*_.each(_.range(mod.count), function(c) {
                	str *= mod.value;
				});*/
            });
            return str;
		}
        
		function modifierDRMValue(modifiers) {
        	var drm=0;
            _.each(_.filter(modifiers, function(mod) {return mod.type == 'drm';}), function(mod) {
            	drm += (mod.value * mod.count);
            	/*_.each(_.range(mod.count), function(c) {
                	drm += mod.value;
				});*/
            });
            return drm;
		}        
    
    	function modifierShiftValue(modifiers) {
        	var shift=0;
            _.each(_.filter(modifiers, function(mod) {return mod.type == 'shift';}), function(mod) {
            	shift += (mod.value * mod.count);
                /*
            	_.each(_.range(mod.count), function(c) {
                	shift += mod.value;
				});*/
            });
            return shift;
		}        
    
    	function retrieveModifiers(prefix, mods) {
        	var key = prefix + 'Count';
        	return _.map(_.filter(mods, function(m) {return m[key] > 0;}), function(m) {
            	return {
                	type: m.type.toLowerCase(),
                	count: m[key],
                    value: m.value
				};
			});                    
        }
    
    	function findOddsTable(ct, odds, shift) {
            var o = _.find(ct, function(t) {
            	return odds <= t.odds;
            });
			var index = o ? ct.indexOf(o) : 0;
            
			if (index < 0) {
            	index = ct.length - 1;
			}                
			
			index += shift;
			if (index < 0) {
            	index = 0;
			}                
			else if (index >= ct.length) {
            	index = ct.length - 1;
			}                
			
			return ct[index].results;
		}

    
    	return {
        	calc: function(att, def, mods, terrain, terraintween, ct) {
            
                var odds = {
                	odds: 1,
                    display: '1:1'
                };
                
            	att = modifierMultValue(att, retrieveModifiers('attacker', mods)) * terrain.attackmod * terraintween.attackmod;
            	def = modifierMultValue(def, retrieveModifiers('defender', mods)) * terrain.defendmod * terraintween.defendmod;
                            
				if (att > 0 && def > 0) {
                	odds.odds = Math.floor(((att >= def) ? (att/def) : (def/att)) + 0.5);
                    odds.display = (att>=def) ? (odds.odds + ':1') : ('1:' + odds.odds);
                    
                    odds.odds *= ((att<def) ? -1 : 1);
                }
                return odds;
            },
        
        	resolve: function(die1, die2, odds, mods, terrain, terraintween, ct) {
            	var attmods = retrieveModifiers('attacker', mods);
            	var defmods = retrieveModifiers('defender', mods);
                
            	var drm = modifierDRMValue(attmods) - modifierDRMValue(defmods);
				var dice = game.diceValue(die1, die2, ct.dice, drm);
                
                var shift = modifierShiftValue(attmods) - modifierShiftValue(defmods);
				
                var table = findOddsTable(ct.table, odds, shift);
                
                var result = _.find(table, function(t) {
                	return (dice < t.lo || (dice >= t.lo && dice <= t.hi));
                }) || table[table.length-1];
                
                return result.result;
			}
        
	    };
    });
