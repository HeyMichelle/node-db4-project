
const express = require('express');
const recipeRouter = require('./Recipes/recipeRouter.js');

const server = express();

server.use(express.json());
server.use('/api/recipe', recipeRouter);

server.get("/", (req, res) => {
	res.send(`<h2>DB 4 Project - data modeling</h2>`);
});

module.exports = server;