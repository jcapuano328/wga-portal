ica.module('wgaPortalApp.services', [])
	.service('sound', function($log) {
		var currentFile = "";

	    function playModern() {
			var oAudio = document.getElementById('lbAudio');
		    // See if we already loaded this audio file.
            
			var file = document.getElementById('audiofile').value;
		    if (file !== currentFile) {
		    	oAudio.src = file;
		        currentFile = file;
			}
		    oAudio.play();   
		};

		function playLegacy() {
			var thissound=document.getElementById('LegacySound');
			thissound.Play();
		};
    
	    if (Modernizr.audio) {
	        if (Modernizr.audio.wav) {
                document.getElementById('audiofile').value = '/snd/droll.wav'; 
	        }
            document.getElementById('OldSound').remove();
	    }
	    else {
        	document.getElementById('HTML5Audio').remove();
        	document.getElementById('OldSound').innerHTML = '<embed src="/snd/droll.wav" autostart=false width=1 height=1 id="LegacySound" enablejavascript="true" >';
	    }

    	return {
        	play: function() {
				var html5 = document.getElementById('HTML5Audio');
			    if (html5) {
					playModern();
			    }
			    else {
			    	playLegacy();
			    }
            }
	    };
    });


