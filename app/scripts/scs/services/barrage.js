'use strict';

ica.module('wgaPortalScsApp.services', [])
	.service('barrage', function ($log, game) {
    	return {
        	resolve: function(die1, die2, str, terrain, modifiers, bt) {
				var dice = game.diceValue(die1, die2, bt.dice);
				
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
