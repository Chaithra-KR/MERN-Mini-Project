import {createSlice} from '@reduxjs/toolkit';

const AdminAuth = createSlice({
    name: "admin" ,
    initialState: {
        adminToken : null 
    },
    reducers: {
        userLogin(state,actions){
            const newData = actions.payload;
            state.adminToken = newData.token
        },
        userLogout(state,actions){
            state.adminToken = ""
        }
    }
})

export const adminActions = AdminAuth.actions;
export default AdminAuth;