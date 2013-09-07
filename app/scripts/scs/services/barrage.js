'use strict';

ica.module('wgaPortalScsApp.services', [])
	.service('barrage', function ($log) {
    	function diceValue(die1, die2, dd, drm) {
        	drm = drm || 0;
            var dice = 0;
            if (dd.base == 'd') {
            	var max = dd.number > 1 ? 14 : 8;
            	dice = die1 + (dd.number > 1 ? die2 : 0) + drm;
				if (dice < 0) {dice = 0;}
                if (dice > max) {dice = max;}
            }
            else if (dd.base == 'b') {
            	dice = die1*10 + die2 + drm;
                if (dice < 11) {dice = 11;}                    
				else if (dice > 66) {dice = 66;}
            }
            
            return dice;
        }
    
    	return {
        
        	resolve: function(die1, die2, str, terrain, modifiers, bt) {
				var dice = diceValue(die1, die2, bt.dice);
				
                var index = bt.table.indexOf(str);
                _.each(_.filter(modifiers, function(mod) {return mod.type.toLowerCase() == 'shift';}), function(mod) {
                	index += mod.value;
                });
                
				if (terrain) {
					dice += terrain.barrage.attackmod;
					dice += terrain.barrage.defendmod;
				}

				if (index < 0) {
                	index = 0;
                }
				else if (index >= bt.table.length) {
                	index = bt.table.length - 1;
				}
                
            	var result = _.find(bt.table[index].results, function(res) {
                	return (dice < res.lo || (dice >= res.lo && dice <= res.hi));
                });
                return result || _.last(bt.table[index].results);
			}
        
	    };
    });
