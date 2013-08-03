var log = require('./logger'),
	fs = require('fs'),
    path = require('path'),
    _ = require('underscore'),
    Q = require('q');

//////////////////////////////////////////////////////////////
// Router
var _routes = [];
    
function register(app, options) {
	// read routes from the store and register them with express
    log.info('Register application routes');
    if (options.routes) {
    	return Q.fcall(registerRoutes, app, routes);
	}
    
	return readRoutes(options.path)
    	.then(function(routes) {
        	return Q.fcall(registerRoutes, app, routes);
        });
}

function clear() {
	_routes = [];
}

function registerRoutes(app, routes) {
	_.each(routes, function(route) {
    	log.info('Creating Route for ' + route.desc);
    	var rt = new Route(route);
        rt.register(app);
        _routes.push(rt);
    });
    return _routes;
}

function readRoutes(routepath) {
	function isDir(dir) {
    	return Q.nfcall(fs.stat, dir)
        	.then(function(stat) {
            	return stat.isDirectory();
            })
            .fail(function() {
            	return false;
            });
	} 
    function isFile(file) {
    	return Q.nfcall(fs.stat, file)
        	.then(function(stat) {
            	return stat.isFile();
            })
            .fail(function() {
            	return false;
            });
	} 
    
    function processFiles(filenames) {
    	var routes = [];
        _.each(filenames, function(fname) {
        	var filename = path.relative(__dirname, path.join(routepath, fname));
            log.info('File name: ' + filename);
            
            //return isFile(filename)
            //	.then(function(isfile) {
                    log.info('Read file: ' + filename);
	                var routelist = require(filename).routes;
	                if (_.isArray(routelist)) {
                    	log.info('Read ' + routelist.length + ' routes');
                        _.each(routelist, function(route) {
                            log.info('Add route ' + route.desc);
	                    	routes.push(route);
                        });
	                }
	                else if (routelist) {
                    	log.info('Add route ' + routelist.desc);
	                	routes.push(routelist);
					}                    
            //    });
        });
        return routes;
    }
    
    log.info('Read routes from folder: ' + routepath);
    // might be nice to walk a directory structure: https://github.com/coolaj86/node-walk
    return isDir(routepath)
    	.then(function(isdir) {
        	if (!isdir) {
            	var msg = routepath + ' is not a folder';
                log.info(msg);
                throw new Error(msg);
            }
        
            return Q.nfcall(fs.readdir, routepath)
            	.then(function(filenames) {
                	log.info('Read ' + filenames.length + ' files from folder');
                    
                    return Q.fcall(processFiles, filenames);
				});
        });
}

//////////////////////////////////////////////////////////////
// Route
function Route(route) {
	var self = this;
    
    self.route = route;
    
	self.register = function(app) {
    	log.info('Register application route: ' + self.route.desc);
		register(app, self.route);
	}
    
    function register(app, route) {
        if (route.method == 'all') {
    		log.info('Register all ' + route.route);
        	app.all(route.route, renderer(app, route));
        }
        else if (route.method == 'get') {
    		log.info('Register get ' + route.route);
            app.get(route.route, renderer(app, route));
        }
        else if (route.method == 'put') {
    		log.info('Register put ' + route.route);
        	app.put(route.route, renderer(app, route));
        }
        else if (route.method == 'post') {
    		log.info('Register post ' + route.route);
        	app.post(route.route, renderer(app, route));
        }
        else if (route.method == 'delete') {
    		log.info('Register delete ' + route.route);
        	app.delete(route.route, renderer(app, route));
        }
    }
    
	function renderer(app, route) {
		return route.callback || (route.render ? render(app, route.render) : redirect(app, route.redirect));
	}

	function render(app, page){
		return function(req, res){
			res.render(page, { 
				title: app && app.get('title') || ''
			});
		}        
	}

	function redirect(app, page) {
		return function(req, res){
			res.redirect(page);
		}        
	}
}

//////////////////////////////////////////////////////////////
// Exports
module.exports = {
    register: register,
    clear: clear
};
