import {createSlice} from '@reduxjs/toolkit';

const UserAuth = createSlice({
    name: "user",
    initialState: {
        userId : null,
        userName : null,
        userToken : null
    },
    reducers: {
        userLogin(state,actions){
            const newData = actions.payload;
            state.userId = newData.Id
            state.userName = newData.name
            state.userToken = newData.token
        }
    }
})

export const userActions = UserAuth.actions;
export default UserAuth;