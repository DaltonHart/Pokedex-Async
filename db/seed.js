const db = require('../models');

const pokemonList = require('./pokemon.json');

// removes all pokemon 
db.Pokemon.remove({}, () => {
	// loops through the json file
	pokemonList.forEach(pokemon => {
		// for each one creates a pokemon entry in the DB
		db.Pokemon.create(pokemon, (error, createdPokemon) => {
			if (error) return console.log(error);
			console.log(createdPokemon);
		});
	});
});