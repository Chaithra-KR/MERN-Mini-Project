import { createSlice } from '@reduxjs/toolkit';

const UserAuth = createSlice({
  name: "user",
  initialState: {
    userName: null,
    userToken: null,
  },
  reducers: {
    userLogin(state, action) {
      const newData = action.payload;
      state.userName = newData.name;
      state.userToken = newData.token;
    },
    userLogout(state){
        state.userName="";
        state.userToken="";
    }
  },
});

export const userActions = UserAuth.actions;
export default UserAuth;
