var fs = require('fs')
  , path = require('path')
  , xml2js = require('xml2js')
  , _ = require('underscore');

var gameid = 101;


function makeGame(json) {
    var game = {
    	_id: gameid++,
        name: json.Title,
        players: [json.Player1, json.Player2],
        turns: json.Turns.Turn,
        phases: json.Phases.Phase,
        terrains: makeTerrains(json.Terrains.Terrain),
        combatTable: {
        	dice: makeDice(json.CombatTable.Dice),
            table: makeCombatTable(json.CombatTable.TableEntries.TableEntry),
            modifiers: makeModifierTable(json.CombatTable.Modifiers.Modifier)
        },
        barrageTable: {
        	dice: makeDice(json.BarrageTable.Dice),
            table: makeBarrageTable(json.BarrageTable.TableEntries.TableEntry),
            modifiers: makeModifierTable(json.BarrageTable.Modifiers.Modifier)
        }
    };
    
    return game;
}

function makeDice(dice) {
	var a = dice.match(/([0-9]*)(d|b)([0-9]*)/);
    //console.log(JSON.stringify(a));
    return {
    	number: a && a.length > 1 ? +a[1] : 1,
    	base: a && a.length > 2 ? a[2] : 'd',
        sides: a && a.length > 3 ? +a[3] : 1
    };
}

function makeTerrains(entries) {
	if (!entries) {
    	return [];
    }
	if (!_.isArray(entries)) {
    	entries = [entries];
    }
	return _.map(entries, function(entry) {
    	return {
        	name: entry.Name,
        	barrage: {
            	attackmod: +entry.BarrageAttackMod,
            	defendmod: +entry.BarrageDefendMod
			},
        	combat: {
            	attackmod: +entry.CombatAttackMod,
            	defendmod: +entry.CombatDefendMod
			}               
        };
    });
}

function makeCombatTable(entries) {
	if (!entries) {
    	return [];
    }
	if (!_.isArray(entries)) {
    	entries = [entries];
    }
	return _.map(entries, function(entry) {
    	return {
        	odds: +entry.Odds,
            results: makeResults(entry.CombatResults.CombatResult)
        };
    });
}

function makeBarrageTable(entries) {
	if (!entries) {
    	return [];
    }
	if (!_.isArray(entries)) {
    	entries = [entries];
    }
	return _.map(entries, function(entry) {
    	return {
        	strength: entry.Strength,
            results: makeResults(entry.BarrageResults.BarrageResult)
        };
    });
}


function makeResults(entries) {
	if (!entries) {
    	return [];
    }
	if (!_.isArray(entries)) {
    	entries = [entries];
    }
	return _.map(entries, function(entry) {
    	return {
        	lo: +entry.Lo,
            hi: +entry.Hi,
            result: entry.Result
        };
    });
}

function makeModifierTable(entries) {
	if (!entries) {
    	return [];
    }
	if (!_.isArray(entries)) {
    	entries = [entries];
    }
	return _.map(entries, function(entry) {
    	return {
        	name: entry.Name,
            type: entry.Type,
            value: +entry.Value
        };
    });
}


function isDirSync(dir) {
	try { return fs.statSync(dir).isDirectory(); }
	catch (er) { return false; }
} 
function isFileSync(file) {
  try { return fs.statSync(file).isFile() }
  catch (er) { return false }
} 

function writeGames(infolder, outfile) {
	
    if (isDirSync(infolder)) {
		fs.writeFileSync(outfile, "var games = [\r\n");
    
    	var parser = new xml2js.Parser({explicitArray: false, async: true, ignoreAttrs: false}); 
    
	    var filenames = fs.readdirSync(infolder);
        console.log("Read " + filenames.length + " files from folder: " + infolder);
        _.each(filenames, function(fname) {
        	var filename = path.join(infolder, fname);
        	if (isFileSync(filename)) {
                console.log("Read file: " + filename);
            	var xml = fs.readFileSync(filename, 'ascii');
                parser.parseString(xml, function(err,result){ 
                    console.log("Writing game: " + result.Game.Title);
                    //console.dir(result);
                    //fs.appendFileSync(outfile, "\t\t" + JSON.stringify(result.Game, null, 4) + ",\r\n");
                    fs.appendFileSync(outfile, JSON.stringify(makeGame(result.Game), null, 4) + ",\r\n");
				}); 
            }
        });
        
		fs.appendFileSync(outfile, "\r\n];");
		fs.appendFileSync(outfile, "\r\nmodule.exports = games;");
    }
    else {
	    console.log(infolder + " is not a folder");
    }
}

var infolder = './xml';
var outfile = 'games.js';
writeGames(infolder, outfile);
