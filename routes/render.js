var fs = require('fs')
  , path = require('path');

function renderWithTemplates(req, res) {
    //res.render(req.url);
    
	var filename = //path.join(__dirname, '../public', req.url);
        req.url;
	fs.exists(filename, function(exists) {
    	if (!exists) {			
            //filename = filename.substring(filename.lastIndexOf('/') + 1,  filename.length) || filename;
            //filename = path.basename(req.url);
            filename = path.join(__dirname, 'views', filename);
        }
        res.render(filename);
    });    
}

var routes = [
    {
        desc: 'render with templates',
        method: 'get',
        route: '*.html',
        protected: false,
        callback: renderWithTemplates
    }
];


module.exports.routes = routes;
