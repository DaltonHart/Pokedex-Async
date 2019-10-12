# Pokedex MEN Application

[![Greenkeeper badge](https://badges.greenkeeper.io/DaltonHart/Pokedex-Async.svg)](https://greenkeeper.io/)

## Available Endpoints

| Method  | URL| Output |
| ------| ----- | -----|
| GET  | /api/v1  | Describes available endpoints. |
| GET  | /api/v1/pokemon | Will respond with a Json of all pokemon. |
| GET  | /api/v1/pokemon/:id  | Will respond with a Json of a specific pokemon with the given id. |
| POST  | /api/v1/pokemon/ | Will revieve Json and create a pokemon. |
| PUT  | /api/v1/pokemon/:id  | Will recieve Json and update a pokemon by its id. |
| DELETE  | /api/v1/pokemon/:id  | Will remove a pokemon by its id. |
| GET  | /api/v1/trainer | Will respond with a Json of all trainers. |
| GET  | /api/v1/trainer/:id  | Will respond with a Json of a specific trainer with the given id. |
| POST  | /api/v1/trainer/ | Will revieve Json and create a trainer. |
| PUT  | /api/v1/trainer/:id  | Will recieve Json and update a trainer by its id. |
| DELETE  | /api/v1/trainer/:id  | Will remove a trainer by its id. |