var chai = require('chai'),
    sinon = require('sinon'),
    should = chai.should(),
    expect = chai.expect,
    sandbox = require('sandboxed-module'),
    helpers = require('../lib/db'),
    Q = require('q'),
    _ = require('underscore'),
	path = require('path'),
    fs = require('fs');

chai.use(require('sinon-chai'));

describe('Router', function() {

    var env = {};
    process.setMaxListeners(0);	// avoid Q promise library warning

    beforeEach(function() {
        env = {
        	log: require('../mock/mockLogger')
        };
        env.app = {
        	all: sinon.stub(),
        	get: sinon.stub(),
        	put: sinon.stub(),
        	post: sinon.stub(),
        	delete: sinon.stub()
        };
        env.router = sandbox.require('../../lib/router', {
            requires: {
                './logger': env.log
            }
        });
        
    });
    
    describe('routes from files', function() {
    	var promise, routes;
        
    	describe('single', function() {
            beforeEach(function(done) {
            	promise = env.router.register(env.app, {path: 'test/mock/routes/single-routefile'});
                promise
                	.then(function(data) {
                    	routes = data;
                        done();
                    
                    })
                    .fail(function(err) {
                        done(err);
                    });
			});

            it('should return a promise', function() {
                promise.should.exist;
                promise.should.have.property('promiseDispatch');
            });

            it('promise should return routes', function() {
            	expect(routes).to.exist;
            	expect(routes).to.have.length(3);
            });
            
            it('should register routes', function() {
            	env.app.all.should.not.have.been.called;
                
            	env.app.get.should.have.been.calledOnce;
            	env.app.get.should.have.been.calledWith('/render', sinon.match.any);
                
            	env.app.put.should.have.been.calledOnce;
            	env.app.put.should.have.been.calledWith('/redirect', sinon.match.any);
                
            	env.app.post.should.have.been.calledOnce;
            	env.app.post.should.have.been.calledWith('/callback', sinon.match.any);
            });
	    });
    
    	describe('multiple', function() {
            beforeEach(function(done) {
            	promise = env.router.register(env.app, {path: 'test/mock/routes/multi-routefiles'});
                promise
                	.then(function(data) {
                    	routes = data;
                        done();
                    
                    })
                    .fail(function(err) {
                        done(err);
                    });
			});

            it('should return a promise', function() {
                promise.should.exist;
                promise.should.have.property('promiseDispatch');
            });

            it('promise should return routes', function() {
            	expect(routes).to.exist;
            	expect(routes).to.have.length(3);
            });
	
            it('should register routes', function() {
            	env.app.all.should.not.have.been.called;
                
            	env.app.get.should.have.been.calledOnce;
            	env.app.get.should.have.been.calledWith('/render', sinon.match.any);
                
            	env.app.put.should.have.been.calledOnce;
            	env.app.put.should.have.been.calledWith('/redirect', sinon.match.any);
                
            	env.app.post.should.have.been.calledOnce;
            	env.app.post.should.have.been.calledWith('/callback', sinon.match.any);
            });
        });
    
    });
    
});

