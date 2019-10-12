const db = require('../models');

module.exports = {
  index: async (req,res) => {
    try {
      const foundTrainers = await db.Trainer.find({}).populate('pokemon')
      res.success(200,foundTrainers);
    } catch (error) {
      res.error(error.message);
    }
  },
  show: async (req,res) => {
    try {
      const foundTrainer = await db.Trainer.findById(req.params.id).populate('pokemon');
      res.success(200,foundTrainer);
    } catch(error) {
        res.error(error.message);
      }
  },
  create: async (req,res) => {
    try {
      const createdTrainer = await db.Trainer.create(req.body);
      res.success(200, createdTrainer);
    } catch (error) {
      res.error(error.message);
    }
  },
  update: async (req,res) => {
    try {
      const foundTrainer = await db.Trainer.findById(req.params.id);
      if(req.body.name){
        foundTrainer.name = req.body.name;
      }
      
      if(req.body.age){
        foundTrainer.age = req.body.age;
      }
  
      if(req.body.hometown){
        foundTrainer.hometown = req.body.hometown;
      }
  
      if(req.body.pokemon){
        req.body.pokemon.forEach(entry =>{
          foundTrainer.pokemon.push(entry);
        });
      }
  
      if(req.body.badges){
        req.body.badges.forEach(entry =>{
          foundTrainer.badges.push(entry);
        });
      }
  
      const updatedTrainer = await foundTrainer.save();
  
      res.success(200,updatedTrainer);
  
    } catch (error) {
        res.error(error.message);
    } 
  },
  delete: async (req,res) => {
    try {
      const deletedTrainer = await db.Pokemon.findByIdAndDelete(req.params.id);
      res.success(200,deletedTrainer);
    } catch (error) {
      res.error(error.message);
    }
  },
  filterByBadge: async (req,res) => {
    try {
      const foundTrainers = await db.Trainer.find({badges: {$elemMatch : {name: req.params.name}}});
      res.success(200, foundTrainers);
    } catch (error) {
      res.error(error.message);
    }
  }
}