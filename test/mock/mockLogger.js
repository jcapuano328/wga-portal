var sinon = require('sinon');

module.exports = {
	debug: sinon.stub(),
	info: sinon.stub(),
	warn: sinon.stub(),
	error: sinon.stub(),
	fatal: sinon.stub()
	/*
	debug: function() {console.log(arguments);},
	info: function() {console.log(arguments);},
	warn: function() {console.log(arguments);},
	error: function() {console.log(arguments);},
	fatal: function() {console.log(arguments);}
    */
};
