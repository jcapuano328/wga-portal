var sinon = require('sinon');

var MongoDB = function(host, port, options) {
}    

MongoDB.prototype.open = sinon.stub();
MongoDB.prototype.close = sinon.stub();
MongoDB.prototype.collection = sinon.stub();
MongoDB.prototype.find = sinon.stub();
MongoDB.prototype.findOne = sinon.stub();
MongoDB.prototype.findAndModify = sinon.stub();
MongoDB.prototype.insert = sinon.stub();
MongoDB.prototype.update = sinon.stub();
MongoDB.prototype.remove = sinon.stub();

MongoDB.cursor = function(data) {
	return {
		toArray: function(cb) {
			return cb(null, data || []);
		}
	};
}

module.exports = MongoDB;
