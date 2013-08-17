'use strict';

ica.module('wgaPortalLbApp.services', [])
	.service('leaderLoss', function ($log) {
		return {
		    resolve: function(dice, lossdie, durationdie1, durationdie2, melee) {
		    	var loss = melee ? (dice <= 12 || dice >= 64) : (dice >= 64);
		        var result = "";
		    
		        if (loss == true) {
		        	if (melee) {
		            	if (dice <= 12) {
			            	result = "Attacker: ";
		                }
		                else {
			            	result = "Defender: ";
		                }
		            }
		            if (lossdie == 1) {
		            	result += "Head Wound: Dead";
		            }
		            else if (lossdie == 2) {
		            	result += "Chest Wound: Dead";
		            }
		            else if (lossdie == 3) {
		            	var duration = durationdie1 + durationdie2;
		            	result += "Leg Wound: " + duration + " hours out";
		            }
		            else if (lossdie == 4) {
		            	var duration = durationdie1;
		            	result += "Arm Wound: " + duration + " hours out";
		            }
		            else if (lossdie == 5) {
		            	result += "Capture";
		            }
		            else {//if (lossdie == 6) {
		            	result += "Flesh Wound";
		            }
		        }
		        return result;
			}
        }
    });
