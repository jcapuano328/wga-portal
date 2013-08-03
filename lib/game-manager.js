var config = require('config'),
	log = require('./logger'),
	Mongo = require('./mongo-promised'),
	Q = require('q'),
	models = require('../games/models');

//////////////////////////////////////////////////////////////
// GameManager
var db = new Mongo(config.db.host, config.db.port, config.db.options);
var opencount = 0;
var collname = 'games';

function open() {
	if (db && opencount++ <= 0) {
    	return db.open(config.db.name);
	}
    return Q(true);        
}

function close() {
	if (db && --opencount <= 0) {
    	opencount = 0;
    	return db.close();
	}
    return Q(true);        
}

function getGames() {
	log.info('Get all games');
    return open()
    	.then(function(isopen) {
        	return db.find(collname, null, {sort: ['title','asc']})
            	.then(function(cursor) {
                	if (!cursor) {
                    	return Q([]);
                    }
                    return Q.ninvoke(cursor, 'toArray');
                });
        })
        .fail(function(err) {
	        log.info('Games not found: ' + err);
            return Q.reject(err);
        })
        .fin(function() {
        	close();
        });
}
    
function getGame(id) {
	log.info('Get game: ' + id);
    return open()
    	.then(function(isopen) {
        	return db.findOne(collname, {id: id});
        })
        .fail(function(err) {
	        log.info('Game not found: ' + err);
            return Q.reject(err);
        })
        .fin(function() {
        	close();
        });
}

function getGameByCode(code) {
	log.info('Get game: ' + code);
    return open()
    	.then(function(isopen) {
        	return db.findOne(collname, {code: code});
        })
        .fail(function(err) {
	        log.info('Game not found: ' + err);
            return Q.reject(err);
        })
        .fin(function() {
        	close();
        });
}

function newGame() {
    return models.Game;
}

function addGame(game) {
	log.info('Add game: ' + game.title);
    game.dateChanged = new Date();
    return open()
    	.then(function(isopen) {
        	return db.findAndModify(collname, {id: game.id}, [], game);
        })
        .then(function(g) {
        	return g;
        })
        .fail(function(err) {
         	log.info('Game ' + game.title + ' not added: ' + err);
            return Q.reject(err);
        })
        .fin(function() {
        	close();
        });
}

function updateGame(game) {
	log.info('Update game: ' + game.title);
    game.dateChanged = new Date();
    return open()
    	.then(function(isopen) {
        	return db.findAndModify(collname, {id: game.id}, [], game);
        })
        .then(function(g) {
        	return g;
        })
        .fail(function(err) {
            log.info('Game ' + game.title + ' not updated: ' + err);
            return Q.reject(err);
        })
        .fin(function() {
        	close();
        });
}

function deleteGame(game) {
	log.info('Delete game: ' + game.title);
    return open()
    	.then(function(isopen) {
        	return db.remove(collname, {id: game.id});
        })
        .then(function(g) {
        	return g;
        })
        .fail(function(err) {
            log.info('Game ' + game.title + ' not deleted: ' + err);
            return Q.reject(err);
        })
        .fin(function() {
        	close();
        });
}

function deleteAllGames() {
	log.info('Delete all games');
    return open()
    	.then(function(isopen) {
            return db.remove(collname);
        })
        .then(function() {
        	return 0;
        })
        /*
        	return db.collection(collname);
        })
        .then(function(c) {
        	var count = (c && c.count ? c.count() : 0) || 0;
            return db.remove(collname)
            	.then(function() {
                	return count;
                })
                .fail(function(err) {
                	return Q.reject(err);
                });
        })
        */
        .fail(function(err) {
            log.info('Games not deleted: ' + err);
            return Q.reject(err);
        })
        .fin(function() {
        	close();
        });
}

//////////////////////////////////////////////////////////////
// Exports
module.exports = {
	open: open,
	close: close,
	getGames: getGames,
	getGame: getGame,
	getGameByCode: getGameByCode,
	newGame: newGame,
	addGame: addGame,
	updateGame: updateGame ,
	deleteGame: deleteGame,
	deleteAllGames: deleteAllGames
};
