import { createSlice } from '@reduxjs/toolkit';

const AdminAuth = createSlice({
  name: "admin",
  initialState: {
    adminToken: null,
  },
  reducers: {
    adminLogin(state, action) {
      const newData = action.payload;
      state.adminToken = newData.token;
    },
    adminLogout(state, action) {
      state.adminToken = "";
    },
  },
});

export const adminActions = AdminAuth.actions;
export default AdminAuth;
