'use strict';

ica.module('wgaPortalLbApp.services', [])
	.service('odds', function ($log) {
    	
		return {
        	calc: function(table, att, def, shift) {
		        var attadv = (att >= def);
                var entry = null;
		        var odds = 0;
		        if (attadv == true) {
		        	odds = att / def;
		        }
		        else {
		        	odds = def / att;
		        }
                
		        var o = odds * (attadv ? 1 : -1);
		        var index = -1;
				for (var i=0; i<table.length; i++) {
		        	var tableentry = table[i];
		        	var value = tableentry.odds;
		            var nextvalue = (i+1 < table.length) ? table[i+1].odds : value;
					
					if ((i+1 == table.length && o >= value) || 
						(i == 0 && o < value) ||
						(o >= value && o < nextvalue)) {
		                index = i;
						break;
					}
				}
		        
		        if (index > -1) {
		        	index += shift;
		            if (index < 0) {
		            	index = 0;
		            }
		            else if (index >= table.length) {
		            	index = table.length - 1;
		            }
		        	entry = table[index];
		        }
		        
		        return entry;
			}                
	    }

    });
