import {Route, Routes } from 'react-router-dom';
import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useCookies} from 'react-cookie';

import {userActions} from '../store/User_auth';

//Utils
import Home from '../utils/userUtils/Home';
import LoginRegister from '../utils/userUtils/UserLogin';
import Profile from '../utils/userUtils/UserProfile';


const User = () => {

    const [cookies,setCookies] = useCookies(['jwt']);
    const dispatch = useDispatch()
    let User = useSelector(state=>{
        return state.user.userToken
    })
    useEffect(() => {
        if (Object.keys(cookies).length > 0) {
            dispatch(userActions.userLogin({
                name:cookies.jwt.name,
                token:cookies.jwt.token
            }))
        }
    }, []);


  return (
    <div>

      <Routes>
        <Route path='/' exact element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/login' exact element={User? <Home/> : <LoginRegister/>}/>
      </Routes>
      <Routes>
        <Route path='/register' exact element={User? <Home/> : <LoginRegister/>}/>
      </Routes>
      <Routes>
        <Route path='/profile' exact element={<Profile/>}/>
      </Routes>

    </div>
  );
}

export default User;
