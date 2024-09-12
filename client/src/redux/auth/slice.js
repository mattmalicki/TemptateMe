import { createSlice } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

import {
  updateUsersAvatar,
  updateUsersInfo,
  logout,
  refresh,
  deleteUser,
  login,
  register,
} from "./operations.js";

Notify.init({
  position: "center-top",
  showOnlyTheLastOne: true,
  clickToClose: true,
});
Loading.init({ clickToClose: true });

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: true,
  isRefreshing: false,
  error: null,
};

const isPendingAction = (action) => {
  return action.type.startsWith("auth") && action.type.endsWith("/pending");
};

const isRejectAction = (action) => {
  return action.type.startsWith("auth") && action.type.endsWith("/rejected");
};

const handlePending = (state) => {
  state.isRefreshing = true;
  state.error = null;
  Loading.pulse("Loading...");
};

const handleRejected = (state, action) => {
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.error = action?.payload?.response?.data || null;
  Loading.remove();
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        action.payload.accessToken &&
          (state.token = action.payload.accessToken);
        action.payload.confirmToken &&
          (state.token = action.payload.confirmToken);
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
        Loading.remove();
        Notify.success("Logged in successfuly.");
      })
      .addCase(register.fulfilled, (state) => {
        state.isRefreshing = false;
        state.error = false;
        Report.success(
          "Almost done,",
          "We just need you to confirm email provided when signing up. Check SPAM folder if you haven't recieved any email.",
          "Okay"
        );
        Loading.remove();
      })
      .addCase(logout.fulfilled, (state, action) => {
        handleRejected(state, action);
        Notify.success("Logged out successfuly.");
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
        Loading.remove();
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        handleRejected(state, action);
        Report.success(
          "User deleted",
          "We're sorry to let you go. But we will always welcome you back!",
          "Bye"
        );
      })
      .addCase(updateUsersAvatar.fulfilled, (state, action) => {
        state.user.photoUrl = action.payload.user.photoUrl;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
        Notify.merge({ showOnlyTheLastOne: false });
        Notify.success("User avatar updated.");
        Loading.remove();
      })
      .addCase(updateUsersInfo.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
        Notify.merge({ showOnlyTheLastOne: false });
        Notify.success("User name updated.");
        Loading.remove();
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
