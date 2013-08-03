function Game(obj) {
	for (var key in obj) {
        this[key] = obj[key];
    }
}


module.exports = {
	Game: Game
};