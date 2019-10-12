const db = require('../models');

module.exports = {
  index: async (req,res) => {
    try {
      const foundPokemon = await db.Pokemon.find({});
      res.success(200,foundPokemon);
    } catch (error) {
      res.error(error.message);
    }
  },
  show: async (req,res) => {
    try {
      const foundPokemon = await db.Pokemon.findOne({name: req.params.name});
      res.success(200,foundPokemon);
    } catch (error) {
      res.error(error.message);
    }
  },
  create: async (req,res) => {
    try {
      const createdPokemon = await db.Pokemon.create(req.body);
      res.success(201,createdPokemon);
    } catch (error) {
      res.error(error.message);
    }
  },
  update:  async (req,res) => {
    try {
      const updatedPokemon = await db.Pokemon.findByIdAndUpdate(req.params.id,req.body,{new:true});
      res.success(201, updatedPokemon);
    } catch (error) {
      res.error(error.message);
    }
  },
  delete: async (req,res) => {
    try {
      const deletedPokemon = await db.Pokemon.findByIdAndDelete(req.params.id);
      res.success(200, deletedPokemon);
    } catch (error) {
      res.error(error.message);
    }
  },
  filterTrainers: async (req,res) => {
    try {
      const foundPokemon = await db.Pokemon.find({name: req.params.name});
      const foundTrainers = await db.Trainer.find({pokemon: {$eq:foundPokemon}}).populate("pokemon");
      res.success(200,foundTrainers);
    } catch (error) {
      res.error(error.message);
    }
  }
}