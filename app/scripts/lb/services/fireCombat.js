'use strict';

ica.module('wgaPortalLbApp.services', [])
	.service('fireCombat', function ($log, odds, leaderLoss) {
    	var oddsTable = [
	    	{ odds: -3, display: '1:3'},
	    	{ odds: -2.5, display: '1:2.5'},
	    	{ odds: -2, display: '1:2'},
	    	{ odds: -1.5, display: '1:1.5'},
	    	{ odds: 1, display: '1:1'},
	    	{ odds: 1.5, display: '1.5:1'},
	    	{ odds: 2, display: '2:1'},
	    	{ odds: 2.5, display: '2.5:1'},
	    	{ odds: 3, display: '3:1'},
	    	{ odds: 4, display: '4:1'},
	    	{ odds: 5, display: '5:1'},
	    	{ odds: 6, display: '6:1'},
	    	{ odds: 7, display: '7:1'},
	    	{ odds: 8, display: '8:1'},
	    	{ odds: 9, display: '9:1'},
	    	{ odds: 10, display: '10:1'}
        ];
    
    	return {
        	odds: oddsTable,
            defaultOdds: oddsTable[4],
            calc: function(att, def, cannister) {
            	return odds.calc(oddsTable, att, def, (cannister ? 1 : 0));
            },
            resolve: function(odds, defincr, dice) {
            
		    	if (defincr > 9) {
		        	var b6i = new Base6Value(dice);
		        	dice = b6i.add(defincr - 9);
		        }
		        
		        var result = "NE";
				switch (odds.odds) {
					case -3:		//1-3
						if (dice >= 65) {
							result = "1";
		                }
						break;
					case -2.5:		//1-2.5
						if (dice >= 64) {
							result = "1";
		                }
						break;
					case -2:		//1-2
						if (dice >= 62) {
							result = "1";
		                }
						break;
					case -1.5:		//1-1.5
						if (dice >= 55) {
							result = "1";
		                }
						break;
					case 1:		//1-1
						if (dice >= 51) {
							result = "1";
		                }
						break;
					case 1.5:		//1.5-1
						if (dice >= 42) {
							result = "1";
		                }
						break;
					case 2:		//2-1
						if (dice >= 33) {
							result = "1";
		                }
						break;
					case 2.5:		//2.5-1
						if (dice >= 64) {
							result = "2";
		                }
						else if (dice >= 26) {
							result = "1";
		                }
						break;
					case 3:		//3-1
						if 	(dice >= 56) {
							result = "2";
		                }
						else if (dice >= 22) {
							result = "1";
		                }
						break;
					case 4:		//4-1
						if (dice >= 54) {
							result = "2";
		                }
						else if (dice >= 13) {
							result = "1";
		                }
						break;
					case 5:	//5-1
						if (dice >= 66) {
							result = "3";
		                }
						else if (dice >= 45) {
							result = "2";
		                }
						else if (dice >= 11) {
							result = "1";
		                }
						break;
					case 6:	//6-1
						if (dice >= 62) {
							result = "3";
		                }
						else if (dice >= 33) {
							result = "2";
		                }
						else if (dice >= 11) {
							result = "1";
		                }
						break;
					case 7:	//7-1
						if (dice >= 52) {
							result = "3";
		                }
						else if (dice >= 23) {
							result = "2";
		                }
						else if (dice >= 11) {
							result = "1";
		                }
						break;
					case 8:	//8-1
						if (dice >= 66) {
							result = "4";
		                }
						else if (dice >= 45) {
							result = "3";
		                }
						else if (dice >= 15) {
							result = "2";
		                }
						else if (dice >= 11) {
							result = "1";
		                }
						break;
					case 9:	//9-1
						if (dice >= 63) {
							result = "4";
		                }
						else if (dice >= 42) {
							result = "3";
		                }
						else if (dice >= 11) {
							result = "2";
		                }
						break;
					case 10:	//10-1
						if (dice >= 65) {
							result = "5";
		                }
						else if (dice >= 55) {
							result = "4";
		                }
						else if (dice >= 26) {
							result = "3";
		                }
						else if (dice >= 11) {
							result = "2";
		                }
						break;

					default:
						result = "NE";
						break;
				}
				
		        /*
				if (dice >= 65) {
		        	result += " &";
				}            
				*/
		        
		        return result;
			},                
	        leaderloss: function(dice, lossdie, durationdie1, durationdie2) {
		    	return leaderLoss.resolve(dice, lossdie, durationdie1, durationdie2, false);
			}
	    };
        
    });
