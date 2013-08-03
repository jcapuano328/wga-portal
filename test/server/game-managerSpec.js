var chai = require('chai'),
    sinon = require('sinon'),
    should = chai.should(),
    expect = chai.expect,
    sandbox = require('sandboxed-module'),
    helpers = require('../lib/db'),
    Q = require('q'),
    _ = require('underscore'),
    fs = require('fs');

chai.use(require('sinon-chai'));

describe('Game Manager', function() {

    var env = {};
    process.setMaxListeners(0);	// avoid Q promise library warning

    beforeEach(function() {
        env = {
            log: require('../mock/mockLogger'),
            games: JSON.parse(fs.readFileSync('test/mock/mock-games.json'))
        };
    });

    describe('Mock DB', function() {
        beforeEach(function() {
            env.mongo = new require('../mock/mockMongo');

            env.gameMan = sandbox.require('../../lib/game-manager', {
                requires: {
                    './logger': env.log,
                    './mongo-promised': env.mongo
                }
            });
        });

        describe('getGames', function() {
            var games, promise;

            beforeEach(function(done) {
                env.mongo.prototype.open.returns(Q(true));
                env.mongo.prototype.find.returns(Q(env.mongo.cursor(env.games)));

                promise = env.gameMan.getGames();
                promise
                    .then(function(data) {
                        games = data;
                        done();
                    })
                    .fail(function(err) {
                        done(err);
                    });
            });

            it('should make the proper request', function() {
                env.mongo.prototype.open.should.have.been.calledOnce;
                env.mongo.prototype.find.should.have.been.calledOnce;
                env.mongo.prototype.find.should.have.been.calledWith('games', null, sinon.match.any);
                env.mongo.prototype.close.should.have.been.calledOnce;
            });

            it('should return a promise', function() {
                promise.should.exist;
                promise.should.have.property('promiseDispatch');
            });

            it('promise should return games', function() {
                games.should.exist;
                games.should.have.length(4);
            });

            it('games should contain correct information', function() {
                var game = games[0];
                game.should.exist;
                game.code.should.equal('lb');
                game.title.should.equal('La Bataille');
                game.url.should.equal('/lb');

                game = games[1];
                game.should.exist;
                game.code.should.equal('cwb');
                game.title.should.equal('Civil War, Brigade');
                game.url.should.equal('/cwb');

                game = games[2];
                game.should.exist;
                game.code.should.equal('ocs');
                game.title.should.equal('Operational Combat Series');
                game.url.should.equal('/ocs');

                game = games[3];
                game.should.exist;
                game.code.should.equal('scs');
                game.title.should.equal('Standard Combat Series');
                game.url.should.equal('/scs');
            });
        });
    });

    describe('Mongo DB', function() {
        beforeEach(function(done) {
            env.gameMan = sandbox.require('../../lib/game-manager', {
                requires: {
                    './logger': env.log
                }
            });

            helpers.resetAll('games', env.games)
                .then(function() {
                    done();
                })
                .fail(function(err) {
                    done(err);
                });
        });

        describe('getGames', function() {
            var games, promise;

            beforeEach(function(done) {
                promise = env.gameMan.getGames();
                promise
                    .then(function(data) {
                        games = data;
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

            it('promise should return games', function() {
                games.should.exist;
                games.should.have.length(4);
            });

            it('games should contain correct information', function() {
                var game = games[0];
                game.should.exist;
                game.code.should.equal('cwb');
                game.title.should.equal('Civil War, Brigade');
                game.url.should.equal('/cwb');

                game = games[1];
                game.should.exist;
                game.code.should.equal('lb');
                game.title.should.equal('La Bataille');
                game.url.should.equal('/lb');

                game = games[2];
                game.should.exist;
                game.code.should.equal('ocs');
                game.title.should.equal('Operational Combat Series');
                game.url.should.equal('/ocs');

                game = games[3];
                game.should.exist;
                game.code.should.equal('scs');
                game.title.should.equal('Standard Combat Series');
                game.url.should.equal('/scs');
            });
        });
    });
});

