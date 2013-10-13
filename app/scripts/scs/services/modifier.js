'use strict';

ica.module('wgaPortalScsApp.services', [])
	.service('modifier', function ($log) {
    	
        return {
    
	    	modifyMULT: function(mods) {
            	var mult = 1;
	            _.each(_.filter(mods, function(mod) {return mod.type == 'mult';}), function(mod) {
                	mult *= (mod.value / (mod.count || 1));
	            });
	            return mult;
			},
            modifyDRM: function(mods) {
	        	var drm=0;
	            _.each(_.filter(mods, function(mod) {return mod.type == 'drm';}), function(mod) {
	            	drm += (mod.value * (mod.count || 1));
	            });
	            return drm;
			},
	    
        	modifySHIFT: function(mods) {
	        	var shift=0;
	            _.each(_.filter(mods, function(mod) {return mod.type == 'shift';}), function(mod) {
	            	shift += (mod.value * (mod.count || 1));
	            });
	            return shift;
			}
        };
    });
