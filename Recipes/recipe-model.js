
const db = require("../data/config.js");

function getRecipes() {
	return db("recipes");
}

// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe

// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe


module.exports = {
	getRecipes
};