import {createSlice} from "@reduxjs/toolkit";

const initialState = {userdata: {}, loggedin: false, adminloggedin: false};

const AuthSlice = createSlice({
  name: "AuthUser",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.loggedin = action.payload;
    },
    UserData: (state, action) => {
      state.userdata = action.payload;
    },
    Admin: (state, action) => {
      state.adminloggedin = action.payload;
    },
  },
});

export default AuthSlice.reducer;
export const AuthActions = AuthSlice.actions;
