var mongo = require('mongodb'),
	Q = require('q'),
	config = require('config');

function resetAll(name, data) {
	var cfg = config.db,
    	server = new mongo.Server(cfg.host, cfg.port, cfg.options.server),
        conn = new mongo.Db(cfg.name, server, cfg.options.db);
        
	//console.log('reset ' + name + ' on database ' + cfg.name);
	//console.log('open');
	return Q.ninvoke(conn, 'open')
    	.then(function(db) {
        	if (!db) {
            	return new Error('Could not connect to database.');
			}
		    var collection = db.collection(name);
	        if (collection) {
	        	collection.drop();
	        }
            
            //console.log('create collection');
            
			return Q.ninvoke(db, 'createCollection', name);
		})
        .then(function(collection) {
            //console.log('insert data');
        
		    return Q.ninvoke(collection, 'insert', data)
		    	.then(function() {
		            return true;
				})
		        .fail(function(err) {
                	//console.error(err);
                
		            return Q.reject(err);
				});
	    })
        .fail(function(err) {
        	//console.error(err);
            return Q.reject(err);
		})
        .fin(function() {
            //console.log('done');
            conn.close();
		});        
}

function retrieveAll(name) {
	var cfg = config.db[name],
    	server = new mongo.Server(cfg.host, cfg.port),
        conn = new mongo.Db(cfg.name, server, {safe: true});	
        
	return Q.ninvoke(conn, 'open')
    	.then(function(db) {
        	if (!db) {
            	return new Error('Could not connect to database.');
			}
            
		    var collection = db.collection(name);
		    return Q.ninvoke(collection, 'find')
		    	.then(function(cursor) {
		        	if (!cursor) {
		                return Q.reject(new Error('Data not found.'));
		            }
		        	return Q.ninvoke(cursor, 'toArray');
				})
		    	.then(function(data) {
		        	if (!data) {
		                return Q.reject(new Error('Data not found.'));
					}
                    
		            return data;
				})
		        .fail(function(err) {
		            return Q.reject(err);
				});
	    })
        .fail(function(err) {
            return Q.reject(err);
		})
        .fin(function() {
            conn.close();
		});        
}


module.exports = {
	retrieveAll: retrieveAll,
    resetAll: resetAll
};    
