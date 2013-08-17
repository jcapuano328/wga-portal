'use strict';

ica.module('wgaPortalLbApp.services', [])
	.service('morale', function ($log) {
    	return {
            resolve: function(morale, dice) {
            	var result;
		        if (!dice || !morale) {
	            	result = '';
		        }
		        else if (dice > morale) {
	            	result = 'Pass';
		        }
		        else {
	            	result = 'Fail';
		        }
		        return result;
		    }
	    };
    });
