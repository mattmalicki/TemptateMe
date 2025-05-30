import { User } from "../../../models/index.js";
import { Recipe } from "../../../models/index.js";

const createRecipeToDb = async ({ recipe }) => {
  const response = await new Recipe({ ...recipe });
  return response;
};

const deleteRecipeInDb = async (id) => {
  const response = await Recipe.findByIdAndDelete(id);
  return response;
};

async function getUserById(id) {
  const user = await User.findById(id);
  return user;
}

async function getOnlyRecipes(id) {
  const user = await User.findById(id).select("createdRecipes");
  return user;
}

async function getOnlyShopping(id) {
  const user = await User.findById(id).select("shoppingList");
  return user;
}

export {
  getUserById,
  createRecipeToDb,
  deleteRecipeInDb,
  getOnlyRecipes,
  getOnlyShopping,
};
