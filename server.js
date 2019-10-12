//--------------------------------SETUP
// external modules
const express = require('express');
const bodyParser = require('body-parser');
// internal modules
const compactRes = require("./middleware/response");
const ctlr = require('./controllers');
// instanced module
const app = express();

//--------------------------------MIDDLEWARE

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(compactRes);

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
app.get('/api/v1/pokemon', ctlr.pokemon.index);

// SHOW ROUTE
app.get('/api/v1/pokemon/:name', ctlr.pokemon.show);

// CREATE ROUTE
app.post('/api/v1/pokemon', ctlr.pokemon.create);

// UPDATE ROUTE
app.put('/api/v1/pokemon/:id', ctlr.pokemon.update);

// DELETE ROUTE
app.delete('/api/v1/pokemon/:id', ctlr.pokemon.delete);

//TODO get all trainers that have a specific Pokemon

app.get('/api/v1/pokemon/:name/trainers', ctlr.pokemon.filterTrainers);

// Trainer Routes

// INDEX ROUTE
app.get('/api/v1/trainers', ctlr.trainer.index);

// SHOW ROUTE
app.get('/api/v1/trainers/:id', ctlr.trainer.show);

// CREATE ROUTE
app.post('/api/v1/trainers', ctlr.trainer.create);

// UPDATE ROUTE
// TODO update to reflect dynamic changes
app.put('/api/v1/trainers/:id', ctlr.trainer.update);

// DELETE ROUTE
app.delete('/api/v1/trainers/:id', ctlr.trainer.delete);


//TODO get all trainers that have a specific Badge

app.get('/api/v1/badges/:name/trainers', ctlr.trainer.filterByBadge);


// ------------------------------Start Server
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}/`));
