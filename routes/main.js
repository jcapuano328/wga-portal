var log = require('../lib/logger'),
    gameMan = require('../lib/game-manager');

function gamesGet(req,res,next) {
    try {
		// fetch list of games from the db
        log.info('Get games');
		gameMan.getGames()
        	.then(function(games) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(games), 'utf-8');
            })
            .fail(function(err) {
		    	log.error(err);
			    res.render('500', {err: err});
		    });
    } catch (ex) {
        log.error('Error in processing REST operation: ' + ex);
        return next();
    }
}

function gameGet(req, res, next) {
    try {
        var code = req.params.code;
        log.error('Get game ' + code);
        gameMan.getGameByCode(code)
        	.then(function(game) {
                if (game) {
                    log.info('Retrieved game');
                }
                else {
                    log.warn('Game NOT found');
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(game), 'utf-8');
            })
            .fail(function(err) {
            
                log.error('ERROR: ' + err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({error: err}), 'utf-8');
            });
    } catch (ex) {
        log.error('Error in processing REST operation: ' + ex);
        return next();
    }
}

var routes = [
    {
        desc: 'Portal main page',
        method: 'get',
        route: '/',
        redirect: '/main'
    },
    {
        desc: 'Portal main page',
        method: 'get',
        route: '/main',
        render: 'main'
    },
    {
        desc: 'get games',
        method: 'get',
        route: '/games',
		callback: gamesGet
    },
    {
        desc: 'get game',
        method: 'get',
        route: '/game/:code',
        callback: gameGet
    }
];


module.exports.routes = routes;
