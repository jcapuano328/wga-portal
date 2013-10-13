var _ = require('underscore')
  , GameMan = require('../gameMan');
	
console.log('Get games\r\n');

var gameMan = GameMan.GameManagerDefault(function(err) {
	if (err) {
    	console.log("Failed to start Game Manager " + err);
    } 
    else {
		gameMan.getGames(function(err, games) {
			if (err) {
		    	console.log('\t\tERROR: ' + err);
		    }
		    else {
		    	if (games) {
			    	_.each(games, function(game) {
			        	console.log('\r\n');
			        	console.log('GAME: ' + game.title);
			        	console.log(JSON.stringify(game));
			        	console.log('\r\n');
			        });
                    
			    	console.log('Got ' + games.length + ' games');
                    
		        }
		        else {
		        	console.log('No Games found');
		        }
		        gameMan.close();
		    }
		});
    }
});

