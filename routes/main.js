var gameMan = require('../lib/game-manager');

function gamesGet(req,res,next) {
    try {
		// fetch list of games from the db
        console.log('Get games');
		gameMan.getGames()
        	.then(function(games) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(games), 'utf-8');
            })
            .fail(function(err) {
		    	console.log(err);
			    res.render('500', {err: err});
		    });
    } catch (ex) {
        console.log('Error in processing REST operation: ' + ex);
        return next();
    }
}

function gameGet(req, res, next) {
    try {
        var code = req.params.code;
        console.log('Get game ' + code);
        gameMan.getGameByCode(code)
        	.then(function(err, game) {
                if (game) {
                    console.log('Retrieved game');
                }
                else {
                    console.log('Game NOT found');
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(game), 'utf-8');
            })
            .fail(function(err) {
            
                console.log('ERROR: ' + err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({error: err}), 'utf-8');
            });
    } catch (ex) {
        console.log('Error in processing REST operation: ' + ex);
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
