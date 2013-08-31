var path = require('path'),
	_ = require('underscore'), 
	models = require('./models');

var games = [
	new models.Game({
    	code: 'lb',
    	title: 'La Bataille',
        publisher: 'Clash Of Arms / ME',
        url: '/lb',
        battles: require(path.join(__dirname, 'lb', 'games'))
	}),
    /*
	new models.Game({
    	code: 'cwb',
    	title: 'Civil War, Brigade',
        publisher: 'The Gamers (MMP)',
        url: '/cwb',
        battles: null//require(path.join(__dirname, 'cwb', 'games'))
	}),        
	new models.Game({
    	code: 'ocs',
    	title: 'Operational Combat Series',
        publisher: 'The Gamers (MMP)',
        url: '/ocs',
        battles: null//require(path.join(__dirname, 'ocs', 'games'))
	}),        
    */
	new models.Game({
    	code: 'scs',
    	title: 'Standard Combat Series',
        publisher: 'The Gamers (MMP)',
        url: '/scs',
        battles: require(path.join(__dirname, 'scs', 'games'))
	})
];

module.exports = games;
