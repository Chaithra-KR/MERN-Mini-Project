import {configureStore} from '@reduxjs/toolkit';
import AdminAuth from './Admin_auth';
import UserAuth from './User_auth';

const globalStore = configureStore({
    reducer:{
        admin : AdminAuth.reducer,
        user : UserAuth.reducer
    }
})

export default globalStore;