ica.module('wgaPortalApp.services', [])
	.service('random', function($log) {
    	function random(X) {
        	return Math.floor(X * (Math.random() % 1));
		}
        function randomBetween(MinV, MaxV) {
        	return MinV + random(MaxV - MinV + 1);
		}
        
        return {
        	random: random,
            randomBetween: randomBetween
        };
    });


