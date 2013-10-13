var log = require('../lib/logger'),
	Q = require('q'), 
	_ = require('underscore'), 
	gameMan = require('../lib/game-manager');

function assembleGames() {
	var games = [];
    
    games = require('../games/games');
    
    return games;
}

function loadGames(games) {
	var id = 0;

	log.info('Load games');
	log.info('');
    gameMan.open()
    	.then(function() {
		    log.info('Clear existing games...');
            return gameMan.deleteAllGames();
        })
    	.then(function(num) {
        	log.info('  ' + num + ' games deleted');
            log.info('Add new games');
            
            var results = [];
            _.each(games, function(game) {
                log.info('  Adding game: ' + game.title);
                game.id = ++id;

                // add it
                results.push(gameMan.addGame(game));
            });

            return Q.allSettled(results)
	            .then(function(promises) {
	                if (promises.filter(Q.isRejected).length > 0) {
	                    var err = 'Saving games failed. Not all items were saved.'
	                    log.error(err);
	                    return Q.reject(err);
	                }
	                return promises.map(Q.nearer);
	            });           
		})
        .then(function(results) {
        	log.info('Imported ' + results.length + ' games');
        })
        .fail(function(err) {
        	log.error(err);
        })
        .fin(function() {
            log.info('Games loaded');
	    	gameMan.close();
		});
}

var games = assembleGames();
loadGames(games);
