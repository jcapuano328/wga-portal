var _ = require('underscore')
  , GameMan = require('../gameMan');
	
var code = process.argv[2];
    
    
console.log('Get game: ' + code + '\r\n');

var gameMan = GameMan.GameManagerDefault(function(err) {
	if (err) {
    	console.log("Failed to start Game Manager " + err);
    } 
    else {
		gameMan.getGameByCode(code, function(err, game) {
			if (err) {
		    	console.log('\t\tERROR: ' + err);
		    }
		    else {
		    	if (game) {
		        	console.log('\r\n');
		        	console.log('GAME: ' + game.title);
		        	console.log(JSON.stringify(game));
		        	console.log('\r\n');
		        }
		        else {
		        	console.log('Game NOT found');
		        }
		        gameMan.close();
		    }
		});
    }
});

