var chai = require('chai'),
    sinon = require('sinon'),
    should = chai.should(),
    expect = chai.expect,
    sandbox = require('sandboxed-module'),
    MongoDB = require('../../lib/mongo-promised'),
    Q = require('q'),
    _ = require('underscore'),
    fs = require('fs');

chai.use(require('sinon-chai'));

describe('Mongo Promised', function() {

    var env = {};
    process.setMaxListeners(0);	// avoid Q promise library warning

    beforeEach(function(done) {
    	env.config = {
		    db: {
		    	host: 'dev-s01',
		        port: 27017,
		        name: 'test',
		        options: {
		        	server: { // mongodb - server options
		                poolSize: 10
					},
		            db: { // mongodb - db options
		                safe: true
					}        
				}
		    }
        };
    	env.data = [
        	{
            	one: 1,
                two: 'two',
                three: {
                	a: '3'
                }
            },
        	{
            	one: 2,
                two: 'three',
                three: {
                	a: '4'
                }
            },
        	{
            	one: 3,
                two: 'four',
                three: {
                	a: '5'
                }
            }
        ];
        env.db = new MongoDB(env.config.db.host, env.config.db.port, env.config.db.options);
        
    	env.helpers = sandbox.require('../lib/db', {
            requires: {
                'config': env.config
            }
        });
        
        env.helpers.resetAll('test', env.data)
        	.then(function() {
            	return env.db.open(env.config.db.name);
            })
            .then(function() {
                done();
            })
            .fail(function(err) {
                done(err);
            });
    });

    afterEach(function(done) {
    	env.db.close()
            .then(function() {
                done();
            })
            .fail(function(err) {
                done(err);
            });
    });
    
    describe('find', function() {
        var result, promise;

        beforeEach(function(done) {
            promise = env.db.find('test');
            promise
            	.then(function(cursor) {
                	if (!cursor) {
                    	return Q([]);
                    }
                    return Q.ninvoke(cursor, 'toArray');
                })
                .then(function(data) {
                    result = data;
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

        it('promise should return result', function() {
            result.should.exist;
            result.should.have.length(3);
        });
    });
    
    describe('findOne', function() {
        var result, promise;

        beforeEach(function(done) {
            promise = env.db.findOne('test', {one: 2});
            promise
                .then(function(data) {
                    result = data;
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

        it('promise should return result', function() {
            result.should.exist;
        });

        it('result should contain correct information', function() {
            result.one.should.equal(2);
            result.two.should.equal('three');
            result.three.a.should.equal('4');
        });
    });
    
});

