import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchShoppingList = createAsyncThunk(
  "shoppingList/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("user/shopping");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const addProduct = createAsyncThunk(
  "shoppingList/addProduct",
  async (product, thunkAPI) => {
    try {
      const response = await axios.post("user/shopping", product);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteProduct = createAsyncThunk(
  "shoppingList/deleteProduct",
  async (product, thunkAPI) => {
    try {
      const response = await axios.delete(`user/shopping/`, product);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export { fetchShoppingList, addProduct, deleteProduct };
