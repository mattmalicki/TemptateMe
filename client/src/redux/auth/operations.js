import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL; // http://localhost:3001/ap/
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT; // 3001
const MAIN_ENDPOINT = process.env.REACT_APP_MAIN_ENDPOINT; // api/

axios.defaults.baseURL =
  REACT_APP_API_URL || `http://localhost:${SERVER_PORT}${MAIN_ENDPOINT}`;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

const register = createAsyncThunk(
  "auth/register",
  async (credentails, thunkAPI) => {
    try {
      const response = await axios.post("auth/register", credentails);
      setAuthHeader(response.data.confirmToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk("auth/login", async (credentails, thunkAPI) => {
  try {
    const response = await axios.post("auth/login", credentails);
    setAuthHeader(response.data.accessToken);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("user/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue(null);
  }

  try {
    setAuthHeader(persistedToken);
    const response = await axios.get("auth/refresh");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const deleteUser = createAsyncThunk("auth/delete", async (_, thunkAPI) => {
  try {
    await axios.delete("auth/delete");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const updateUsersAvatar = createAsyncThunk(
  "auth/updateAvatar",
  async (avatar, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      const response = await axios.put("user/edit/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const updateUsersInfo = createAsyncThunk(
  "auth/updateInfo",
  async (info, thunkAPI) => {
    try {
      const response = await axios.put("user/edit/info", info);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export {
  deleteUser,
  register,
  login,
  logout,
  refresh,
  updateUsersAvatar,
  updateUsersInfo,
};
