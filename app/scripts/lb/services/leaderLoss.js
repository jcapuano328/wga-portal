'use strict';

ica.module('wgaPortalLbApp.services', [])
	.service('leaderLoss', function ($log) {
		return {
		    resolve: function(dice, lossdie, durationdie1, durationdie2, melee) {
		    	var loss = melee ? (dice <= 12 || dice >= 64) : (dice >= 64);
		        var result = {
                    attacker: false,
                    defender: false,
                    wounded: false,
                    killed: false,
                    captured: false,
                    injury: '',
                    duration: 0
                };
		    
		        if (loss == true) {
		        	if (melee) {
                        result.attacker = (dice <= 12);
                        result.defender = !result.attacker;
		            }
                    else {
                        result.defender = true;
                    }
		            if (lossdie == 1) {
                        result.killed = true;
                        result.injury = 'Head';
		            }
		            else if (lossdie == 2) {
                        result.killed = true;
                        result.injury = 'Chest';
		            }
		            else if (lossdie == 3) {
                        result.wounded = true;
                        result.injury = 'Leg';
                        result.duration = durationdie1 + durationdie2;
		            }
		            else if (lossdie == 4) {
                        result.wounded = true;
                        result.injury = 'Arm';
                        result.duration = durationdie1;
		            }
		            else if (lossdie == 5) {
                        result.captured = true;
                        result.injury = 'Capture';
		            }
		            else {//if (lossdie == 6) {
                        result.injury = 'Flesh Wound';
		            }
		        }
		        return result;
			}
        }
    });
