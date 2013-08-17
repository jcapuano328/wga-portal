'use strict';

ica.module('wgaPortalLbApp.services', [])
	.service('meleeCombat', function ($log, odds, leaderLoss) {
    	var oddsTable = [
	    	{ odds: -2, display: '1:2'},
	    	{ odds: 1, display: '1:1'},
	    	{ odds: 1.5, display: '1.5:1'},
	    	{ odds: 2, display: '2:1'},
	    	{ odds: 2.5, display: '2.5:1'},
	    	{ odds: 3, display: '3:1'},
	    	{ odds: 3.5, display: '3.5:1'},
	    	{ odds: 4, display: '4:1'},
	    	{ odds: 4.5, display: '4.5:1'},
	    	{ odds: 5, display: '5:1'}
        ];
    
    	return {
        	odds: oddsTable,
            defaultOdds: oddsTable[1],
            
            calc: function(att, def) {
            	return odds.calc(oddsTable, att, def, 0);
		    },
            
            resolve: function(odds, dice) {
		    
				var result = "Blank";
				switch (odds.odds)
				{
					case -2: //1-2
						if (dice <= 14) {
							result = "AR";
		                }
						else if (dice <= 34) {
							result = "AD";
						}
						else if (dice == 52) {
							result = "0*/0";
		                }
						else if (dice == 53) {
							result = "1/1";
		                }
						else if (dice == 54) {
							result = "1/2*";
		                }
						else if (dice == 55) {
							result = "0/1";
		                }
						else if (dice == 56) {
							result = "1*/0";
		                }

						else if (dice == 61) {
							result = "0/2";
		                }
						else if (dice == 62) {
							result = "2/1*";
		                }
						else if (dice == 63) {
							result = "0/0";
		                }
						else if (dice == 64) {
							result = "2/2";
		                }

						else if (dice >= 65) {
							result = "DD";
		                }
						break;

					case 1:		//1-1
						if 		(dice <= 15) {
							result = "AD";
		                }

						else if (dice == 42) {
							result = "2*/1";
		                }
						else if (dice == 43) {
							result = "2/1*";
		                }
						else if (dice == 44) {
							result = "2/1";
		                }
						else if (dice == 45) {
							result = "1*/1";
		                }
						else if (dice == 46) {
							result = "1/2";
		                }

						else if (dice == 51) {
							result = "1/1";
		                }
						else if (dice == 52) {
							result = "0/0*";
		                }
						else if (dice == 53) {
							result = "2/1";
		                }
						else if (dice == 54) {
							result = "1*/2";
		                }
						else if (dice == 55) {
							result = "2/2";
		                }
						else if (dice == 56) {
							result = "0/0";
		                }

						else if (dice == 61) {
							result = "1/0*";
		                }
							
						else if (dice >= 62) {
							result = "DD";
		                }
						break;

					case 1.5:		//1.5-1
						if 		(dice <= 12) {
							result = "AD";
		                }

						else if (dice == 33) {
							result = "1/2";
		                }
						else if (dice == 34) {
							result = "0/0";
		                }
						else if (dice == 35) {
							result = "1/1";
		                }
						else if (dice == 36) {
							result = "2*/0";
		                }

						else if (dice == 41) {
							result = "0/1*";
		                }
						else if (dice == 42) {
							result = "1/1";
		                }
						else if (dice == 43) {
							result = "2/2*";
		                }
						else if (dice == 44) {
							result = "3/1";
		                }
						else if (dice == 45) {
							result = "0/2";
		                }
						else if (dice == 46) {
							result = "2/1";
		                }

						else if (dice == 51) {
							result = "1/1*";
		                }
						else if (dice == 52) {
							result = "2*/1";
		                }

						else if (dice >= 53) {
							result = "DD";
		                }
						break;

					case 2:		//2-1
						if 		(dice <= 11) {
							result = "AD";
		                }

						else if (dice == 25) {
							result = "0/3";
		                }
						else if (dice == 26) {
							result = "1/2";
		                }
						else if (dice == 31) {
							result = "2*/1";
		                }
						else if (dice == 32) {
							result = "0/0";
		                }
						else if (dice == 33) {
							result = "0/1*";
		                }
						else if (dice == 34) {
							result = "1/0";
		                }
						else if (dice == 35) {
							result = "3/2*";
		                }
						else if (dice == 36) {
							result = "1/1";
		                }
						else if (dice == 41) {
							result = "2/2*";
		                }
						else if (dice == 42) {
							result = "1*/2";
		                }
						else if (dice == 43) {
							result = "1*/1";
		                }
						else if (dice == 44) {
							result = "0/2*";
		                }
							
						else if (dice >= 45) {
							result = "DD";
		                }
						break;

					case 2.5:		//2.5-1
						if 		(dice == 23) {
							result = "1/4";
		                }
						else if (dice == 24) {
							result = "2/3";
		                }
						else if (dice == 25) {
							result = "0*/0";
		                }
						else if (dice == 26) {
							result = "1/1*";
		                }
						else if (dice == 31) {
							result = "2/3*";
		                }
						else if (dice == 32) {
							result = "3/3";
		                }
						else if (dice == 33) {
							result = "0/1";
		                }
						else if (dice == 34) {
							result = "1/0";
		                }
						else if (dice == 35) {
							result = "2/2*";
		                }

						else if (dice >= 36) {
							result = "DD";
		                }
						break;

					case 3:		//3-1
						if 		(dice == 16) {
							result = "0/0*";
		                }
						else if (dice == 21) {
							result = "2/3";
		                }
						else if (dice == 22) {
							result = "0/2";
		                }
						else if (dice == 23) {
							result = "2*/0";
		                }
						else if (dice == 24) {
							result = "1/2";
		                }
						else if (dice == 25) {
							result = "0/1";
		                }
						else if (dice == 26) {
							result = "2*/3";
		                }
						else if (dice == 31) {
							result = "1/2*";
		                }
							
						else if (dice >= 65) {
							result = "DR";
		                }

						else if (dice >= 32) {
							result = "DD";
		                }
						break;

					case 3.5:		//3.5-1
						if 		(dice == 12) {
							result = "0/0";
		                }
						else if (dice == 13) {
							result = "2*/2";
		                }
						else if (dice == 14) {
							result = "3/3";
		                }
						else if (dice == 15) {
							result = "2/4";
		                }
						else if (dice == 16) {
							result = "3/1";
		                }
						else if (dice == 21) {
							result = "0/1*";
		                }
							
						else if (dice >= 62) {
							result = "DR";
		                }

						else if (dice >= 22) {
							result = "DD";
		                }
						break;

					case 4:		//4-1
						if 		(dice == 11) {
							result = "2*/1";
		                }
						else if (dice == 12) {
							result = "1/2";
		                }
						else if (dice == 13) {
							result = "0/2";
		                }
						else if (dice == 14) {
							result = "0/1*";
		                }
						else if (dice == 15) {
							result = "1/1*";
		                }
							
						else if (dice >= 56) {
							result = "DR";
		                }

						else if (dice >= 16) {
							result = "DD";
		                }
						break;

					case 4.5:		//4.5-1
						if 		(dice == 11) {
							result = "3/2";
		                }

						else if (dice >= 66) {
							result = "DS";
		                }

						else if (dice >= 42) {
							result = "DR";
		                }

						else if (dice >= 12) {
							result = "DD";
		                }
						break;

					case 5:		//5-1
						if (dice >= 62) {
							result = "DS";
		                }

						else if (dice >= 33) {
							result = "DR";
		                }

						else if (dice >= 11) {
							result = "DD";
		                }
						break;

					default:
						result = "Blank";
						break;
				}
				
		        /*
				if (dice <= 12) {
		        	result = "& " + result;
		        } 
				else if (dice >= 64) {
			        result += " &";
		        }
		        */

		        return result;
		    },
            
            leaderloss: function(dice, lossdie, durationdie1, durationdie2) {
            	return leaderLoss.resolve(dice, lossdie, durationdie1, durationdie2, true);
			}
	    };
    });
