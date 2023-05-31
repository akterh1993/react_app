import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";

const getUserfromLocalStorage = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;


const initialState = {
  auth: getUserfromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const login_admin = createAsyncThunk(
  "auth/login-admin",
  async (userData, thunkAPI) => {
    try {
      return await authService.login_admin(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const login_user = createAsyncThunk(
  "auth/login-user",
  async (userData, thunkAPI) => {
    try {
      return await authService.login_user(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const admin_register = createAsyncThunk(
  "auth/admin-register",
  async (info, thunkAPI) => {
    try {
      return await authService.admin_register(info);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const user_register = createAsyncThunk(
  "auth/user-register",
  async (info, thunkAPI) => {
    try {
      return await authService.user_register(info);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login_admin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login_admin.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(login_admin.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(login_user.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login_user.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(login_user.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(admin_register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(admin_register.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(admin_register.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(user_register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(user_register.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(user_register.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      
  },
});

export default authSlice.reducer;