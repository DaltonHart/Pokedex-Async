//--------------------------------SETUP
// external modules
const express = require('express');
const bodyParser = require('body-parser');
// internal modules
const db = require("./models");
// instanced module
const app = express();

//--------------------------------MIDDLEWARE

app.use(express.static('public'));
app.use(bodyParser.json());

//-------------------------------CONFIGURATION VARIABLES
const PORT = process.env.PORT || 3000;


// ------------------------------ROUTES

// View Routes
app.get('/',  (req, res) => {
  res.sendFile('views/index.html' , { root : __dirname});
});

// Base API Routes

app.get('/api/v1', (req,res)=>{
  res.json({
    status:200,
    message: 'Welcome to the Pokedex Api.',
    endpoints:[
      {
        method: 'GET',
        path: '/api/v1',
        description: 'Describes all available endpoints.'
      }
  ],
    requestedAt: new Date().toLocaleString()
  })
});

// Pokemon Routes

// INDEX ROUTE
app.get('/api/v1/pokemon', (req,res)=>{
  db.Pokemon.find({},(error,foundPokemon)=>{
    if(error){
      res.json({
        status: 400,
        message: 'Something went wrong. Please try again.',
        requestedAt: new Date().toLocaleString()
      });
    }
    res.json({
      status: 200,
      data: foundPokemon,
      requestedAt: new Date().toLocaleString()
    })
  });
});

// SHOW ROUTE
app.get('/api/v1/pokemon/:id', (req,res)=>{
  db.Pokemon.findById(req.params.id,(error,foundPokemon)=>{
    if(error){
      res.json({
        status: 400,
        message: 'Something went wrong. Please try again.',
        requestedAt: new Date().toLocaleString()
      });
    }
    res.json({
      status: 200,
      data: foundPokemon,
      requestedAt: new Date().toLocaleString()
    })
  });
});

// CREATE ROUTE
app.post('/api/v1/pokemon', (req,res)=>{
  db.Pokemon.create(req.body,(error,createdPokemon)=>{
    if(error){
      res.json({
        status: 400,
        message: 'Something went wrong. Please try again.',
        requestedAt: new Date().toLocaleString()
      });
    }
    res.json({
      status: 200,
      data: createdPokemon,
      requestedAt: new Date().toLocaleString()
    })
  });
});

// UPDATE ROUTE
app.put('/api/v1/pokemon/:id', (req,res)=>{
  db.Pokemon.findByIdAndUpdate(req.params.id,req.body,{new:true},(error,updatedPokemon)=>{
    if(error){
      res.json({
        status: 400,
        message: 'Something went wrong. Please try again.',
        requestedAt: new Date().toLocaleString()
      });
    }
    res.json({
      status: 200,
      data: updatedPokemon,
      requestedAt: new Date().toLocaleString()
    })
  });
});

// DELETE ROUTE
app.delete('/api/v1/pokemon/:id', (req,res)=>{
  db.Pokemon.findByIdAndDelete(req.params.id,(error,deletedPokemon)=>{
    if(error){
      res.json({
        status: 400,
        message: 'Something went wrong. Please try again.',
        requestedAt: new Date().toLocaleString()
      });
    }
    res.json({
      status: 200,
      data: deletedPokemon,
      requestedAt: new Date().toLocaleString()
    })
  });
});

// Trainer Routes

// INDEX ROUTE
app.get('/api/v1/trainers', (req,res)=>{
  db.Trainer
    .find({})
    .populate('pokemon')
    .exec((error,foundTrainers)=>{
    if(error){
      res.json({
        status: 400,
        message: 'Something went wrong. Please try again.',
        requestedAt: new Date().toLocaleString()
      });
    }
    res.json({
      status: 200,
      data: foundTrainers,
      requestedAt: new Date().toLocaleString()
    });
  });
});

// SHOW ROUTE
app.get('/api/v1/trainers/:id', (req,res)=>{
  db.Trainer
    .findById(req.params.id)
    .populate('pokemon')
    .exec((error,foundTrainer)=>{
    if(error){
      res.json({
        status: 400,
        message: 'Something went wrong. Please try again.',
        requestedAt: new Date().toLocaleString()
      });
    }
    res.json({
      status: 200,
      data: foundTrainer,
      requestedAt: new Date().toLocaleString()
    })
  })
});

// CREATE ROUTE
app.post('/api/v1/trainers', (req,res)=>{
  db.Trainer.create(req.body, (error,createdTrainer)=>{
    if(error){
      res.json({
        status: 400,
        message: 'Something went wrong. Please try again.',
        requestedAt: new Date().toLocaleString()
      });
    }
    res.json({
      status: 200,
      data: createdTrainer,
      requestedAt: new Date().toLocaleString()
    })
  })
});

// UPDATE ROUTE
app.put('/api/v1/trainers/:id', (req,res)=>{
  db.Trainer.findByIdAndUpdate(req.params.id,req.body,{new:true},(error,updatedTrainer)=>{
    if(error){
      res.json({
        status: 400,
        message: 'Something went wrong. Please try again.',
        requestedAt: new Date().toLocaleString()
      });
    }
    res.json({
      status: 200,
      data: updatedTrainer,
      requestedAt: new Date().toLocaleString()
    })
  });
});

// DELETE ROUTE
app.delete('/api/v1/trainers/:id', (req,res)=>{
  db.Pokemon.findByIdAndDelete(req.params.id,(error,deletedTrainer)=>{
    if(error){
      res.json({
        status: 400,
        message: 'Something went wrong. Please try again.',
        requestedAt: new Date().toLocaleString()
      });
    }
    res.json({
      status: 200,
      data: deletedTrainer,
      requestedAt: new Date().toLocaleString()
    })
  });
});

// ------------------------------Start Server
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}/`));
