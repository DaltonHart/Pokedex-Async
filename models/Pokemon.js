const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
	name: { type: String },
	types: { type: [] },
	power: { type: Number },
	health: { type: Number },
	image: { type: String },
	pokedex: { type: Number },
	description: { type: String }
});

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;