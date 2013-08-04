var Mongo = require('mongodb'),
	Q = require('q');
    
var MongoDB = function(host, port, options) {
	this.host = host;
    this.port = port;
    this.options = options;
    this.db = null;
}    
    
MongoDB.prototype.open = function(dbname, host, port, options) {
	var self = this;
	return Q.fcall(function() {
    	host = host || self.host;
        port = port || self.port;
        options = options || self.options;
        
    	var server = new Mongo.Server(host, port, options.server),
        	conn = new Mongo.Db(dbname, server, options.db);
            
		return Q.ninvoke(conn, 'open')
        	.then(function(db) {
            	self.db = db;
                return true;
            });
    });
}

MongoDB.prototype.close = function() {
	if (!this.db) {
    	return Q.resolve(true);
    }
    return Q.ninvoke(this.db, 'close');
}


MongoDB.prototype.collection = function(collName) {
	var self = this;
	return Q.ninvoke(self.db, 'collection', collName)
    	.then(function (collection) {
        	if (!collection) {
                return Q.ninvoke(self.db, 'createCollection', collName);
            } else {
                return collection;
            }
        });
}

MongoDB.prototype.find = function(collName, query, options) {
	var self = this;
    return self.collection(collName)
    	.then(function(c) {
			if (!c) {
		    	return Q.reject(new Error('"' + collName + '" collection not found'));
		    }
            
            return Q.ninvoke(c, 'find', query || {}, options || {});
        });
}

MongoDB.prototype.findOne = function(collName, query, options) {
    return this.collection(collName)
    	.then(function(c) {
			if (!c) {
		    	return Q.reject(new Error('"' + collName + '" collection not found'));
		    }
            
            return Q.ninvoke(c, 'findOne', query || {}, options || {});
        });
}

MongoDB.prototype.findAndModify = function(collName, query, sort, obj, options) {
    return this.collection(collName)
    	.then(function(c) {
			if (!c) {
		    	return Q.reject(new Error('"' + collName + '" collection not found'));
		    }
            
            options = options || {new: true, upsert: true, w:1};
            return Q.ninvoke(c, 'findAndModify', query, sort, obj, options);
        });
}

MongoDB.prototype.insert = function(collName, obj) {
    return this.collection(collName)
    	.then(function(c) {
			if (!c) {
		    	return Q.reject(new Error('"' + collName + '" collection not found'));
		    }
            
            return Q.ninvoke(c, 'insert');
        });
}

MongoDB.prototype.update = function(collName, query, obj, options) {
    return this.collection(collName)
    	.then(function(c) {
			if (!c) {
		    	return Q.reject(new Error('"' + collName + '" collection not found'));
		    }
            
            options = options || {upsert: true, multi: false};
            
            return Q.ninvoke(c, 'update', query, data, options);
        });
}

MongoDB.prototype.remove = function(collName, query) {
	var self = this;
    return this.collection(collName)
    	.then(function(c) {
			if (!c) {
		    	return Q.reject(new Error('"' + collName + '" collection not found'));
		    }

            if (query) {
                return Q.ninvoke(c, 'remove', query);
            }
            else {
                return Q.ninvoke(c, 'count')
                    .then(function(count) {
                        c.drop();
                        return Q.ninvoke(self.db, 'createCollection', collName)
                            .then(function() {
                               return count || 0;
                            });
                    });
            }
        });
}

module.exports = MongoDB;

