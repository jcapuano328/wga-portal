'use strict';

ica.module('wgaPortalScsApp.services', [])
	.service('barrage', function ($log, game, modifier) {
    	return {
        	resolve: function(die1, die2, str, terrain, modifiers, bt) {
				var dice = game.diceValue(die1, die2, bt.dice);
				
                var index = bt.table.indexOf(str);
                
                index += modifier.modifySHIFT(modifiers);
                dice += modifier.modifyDRM(modifiers);
                
				if (terrain) {
					index += modifier.modifySHIFT([terrain.barrage.attackmod]) + 
                    		modifier.modifySHIFT([terrain.barrage.defendmod]);
                
					dice += modifier.modifyDRM([terrain.barrage.attackmod]) + 
                    		modifier.modifyDRM([terrain.barrage.defendmod]);
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
