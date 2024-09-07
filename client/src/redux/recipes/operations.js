import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchRecipes = createAsyncThunk(
  "recipe/fetchMainPage",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes/main-page");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fetchPopularRecipes = createAsyncThunk(
  "recipe/fetchPopularRecipes",
  async (data, thunkAPI) => {
    try {
      const { page } = data;
      const response = await axios.get(`/recipes/popular-recipe?page=${page}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fetchRecipesByQuery = createAsyncThunk(
  "recipe/fetchByQuery",
  async (data, thunkAPI) => {
    try {
      const { query, page, limit } = data;
      const response = await axios.get(
        `/recipes/search/?query=${query}&page=${page}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fetchFavorites = createAsyncThunk(
  "recipe/fetchFavorites",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/favorites?page=${page}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fetchRecipeById = createAsyncThunk(
  "recipe/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fetchRecipesByCategory = createAsyncThunk(
  "recipe/fetchByCategory",
  async (data, thunkAPI) => {
    try {
      const { page, category } = data;
      const response = await axios.get(
        `/recipes/category/${category}?page=${page}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fetchRecipesByIngredient = createAsyncThunk(
  "recipe/fetchByIngredient",
  async (ingredientId, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/ingredients/${ingredientId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const addRecipe = createAsyncThunk(
  "recipe/addRecipe",
  async ({ recipeImage, recipeInfo }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("recipeImage", recipeImage);
      const recipe = await axios.post("/user/ownRecipes", recipeInfo);
      const response = await axios.post("/user/ownRecipes/image", formData, {
        headers: { recipeId: recipe.data.recipes._id },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteRecipe = createAsyncThunk(
  "recipe/deleteRecipe",
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/user/ownRecipes/${recipeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const addToFavorites = createAsyncThunk(
  "recipe/addToFavorites",
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.post(`/recipes/favorites/${recipeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteFromFavorites = createAsyncThunk(
  "recipe/deleteFromFavorites",
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/recipes/favorites/${recipeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const updatePage = createAsyncThunk(
  "recipe/updatePage",
  async (page, thunkAPI) => {
    if (page < 0) {
      return thunkAPI.rejectWithValue(new Error("Page can't be below 0"));
    }

    return page;
  }
);

const fetchUserRecipes = createAsyncThunk(
  "recipe/fetchUserRecipes",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/user/ownRecipes?page=${page}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export {
  fetchRecipes,
  addRecipe,
  deleteRecipe,
  fetchRecipesByCategory,
  fetchRecipesByQuery,
  fetchRecipeById,
  fetchFavorites,
  fetchRecipesByIngredient,
  addToFavorites,
  deleteFromFavorites,
  updatePage,
  fetchPopularRecipes,
  fetchUserRecipes,
};
